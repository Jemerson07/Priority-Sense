create extension if not exists "pgcrypto";

create table if not exists public.tickets (
  id uuid primary key default gen_random_uuid(),
  external_id text unique,
  customer text not null,
  channel text not null check (channel in ('email', 'whatsapp')),
  subject text not null,
  message text not null,
  priority text not null check (priority in ('Low', 'Medium', 'High', 'Critical')),
  priority_score integer not null default 0,
  status text not null check (status in ('New', 'Triaged', 'In Progress', 'Waiting', 'Resolved')) default 'New',
  sla_minutes integer not null default 60,
  tags text[] not null default '{}',
  assigned_to text,
  source_payload jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ticket_interactions (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references public.tickets(id) on delete cascade,
  direction text not null check (direction in ('inbound', 'outbound', 'internal')),
  channel text not null check (channel in ('email', 'whatsapp', 'system')),
  author text,
  message text not null,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.priority_rules (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  rule_type text not null check (rule_type in ('keyword', 'customer', 'channel', 'sla', 'repeat')),
  condition_value text not null,
  score_delta integer not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists tickets_status_idx on public.tickets(status);
create index if not exists tickets_priority_idx on public.tickets(priority);
create index if not exists tickets_channel_idx on public.tickets(channel);
create index if not exists ticket_interactions_ticket_id_idx on public.ticket_interactions(ticket_id);
create index if not exists priority_rules_type_idx on public.priority_rules(rule_type);

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace trigger tickets_set_updated_at
before update on public.tickets
for each row
execute function public.handle_updated_at();

create or replace trigger priority_rules_set_updated_at
before update on public.priority_rules
for each row
execute function public.handle_updated_at();

insert into public.priority_rules (name, description, rule_type, condition_value, score_delta)
values
  ('Critical outage keywords', 'Escalate messages that mention blocked operations', 'keyword', 'blocked|stopped|unavailable|urgent', 35),
  ('VIP account', 'Increase priority for strategic customers', 'customer', 'LM Mobilidade', 20),
  ('WhatsApp fast lane', 'Faster lane for operational WhatsApp issues', 'channel', 'whatsapp', 10)
on conflict do nothing;
