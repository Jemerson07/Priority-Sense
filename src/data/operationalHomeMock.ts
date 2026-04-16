import { dashboardHomeMock } from './dashboardHomeMock';
import { dashboardAlertsMock, queueTrendsMock } from './dashboardAlertsMock';

export const operationalHomeMock = {
  metrics: dashboardHomeMock.metrics,
  events: dashboardHomeMock.events,
  insights: dashboardHomeMock.insights,
  alerts: dashboardAlertsMock,
  trends: queueTrendsMock,
};
