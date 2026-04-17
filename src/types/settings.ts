export type ConnectorStatus = 'connected' | 'pending' | 'disconnected';

export type ConnectorCardView = {
  id: string;
  name: string;
  description: string;
  status: ConnectorStatus;
  actionLabel: string;
};

export type EnvironmentVariableView = {
  key: string;
  description: string;
  valuePreview: string;
};
