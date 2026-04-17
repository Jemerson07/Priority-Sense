import type { ConnectorCardView, EnvironmentVariableView } from '../types/settings';

export const connectorCardsMock: ConnectorCardView[] = [
  {
    id: 'connector-supabase',
    name: 'Supabase',
    description: 'Database, persistence and future realtime subscriptions.',
    status: 'pending',
    actionLabel: 'Configure project',
  },
  {
    id: 'connector-n8n',
    name: 'n8n',
    description: 'Workflow orchestration for intake, routing and automation.',
    status: 'pending',
    actionLabel: 'Add webhook base URL',
  },
  {
    id: 'connector-whatsapp',
    name: 'WhatsApp Sandbox',
    description: 'Inbound operational message testing through sandbox webhooks.',
    status: 'disconnected',
    actionLabel: 'Prepare sandbox',
  },
  {
    id: 'connector-email',
    name: 'Email IMAP/SMTP',
    description: 'Structured email intake and outbound response channel.',
    status: 'pending',
    actionLabel: 'Set credentials',
  },
];

export const environmentVariablesMock: EnvironmentVariableView[] = [
  {
    key: 'VITE_SUPABASE_URL',
    description: 'Supabase project URL used by the frontend client.',
    valuePreview: 'https://your-project-ref.supabase.co',
  },
  {
    key: 'VITE_SUPABASE_ANON_KEY',
    description: 'Public anon key used for client-side access.',
    valuePreview: 'your-anon-key',
  },
  {
    key: 'VITE_N8N_WEBHOOK_BASE_URL',
    description: 'Base webhook URL for workflow endpoints.',
    valuePreview: 'https://your-n8n-instance.example.com/webhook',
  },
];
