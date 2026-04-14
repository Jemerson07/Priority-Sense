import { supabase } from '../../lib/supabase';
import type { Ticket } from '../../types/ticket';

export async function fetchTickets() {
  if (!supabase) {
    return [] as Ticket[];
  }

  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.external_id ?? item.id,
    customer: item.customer,
    channel: item.channel,
    subject: item.subject,
    message: item.message,
    createdAt: item.created_at,
    priority: item.priority,
    priorityScore: item.priority_score,
    status: item.status,
    slaMinutes: item.sla_minutes,
    tags: item.tags ?? [],
    assignedTo: item.assigned_to ?? undefined,
  })) as Ticket[];
}
