export type TicketChannel = 'email' | 'whatsapp';

export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Critical';

export type TicketStatus = 'New' | 'Triaged' | 'In Progress' | 'Waiting' | 'Resolved';

export type Ticket = {
  id: string;
  customer: string;
  channel: TicketChannel;
  subject: string;
  message: string;
  createdAt: string;
  priority: TicketPriority;
  priorityScore: number;
  status: TicketStatus;
  slaMinutes: number;
  tags: string[];
  assignedTo?: string;
};
