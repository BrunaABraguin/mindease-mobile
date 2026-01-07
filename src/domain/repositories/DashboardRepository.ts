import type { DashboardPanel } from '../entities/DashboardPanel';

export interface DashboardRepository {
  getPanels(): Promise<DashboardPanel[]>;
  savePanel(panel: DashboardPanel): Promise<void>;
  updatePanel(id: string, panel: Partial<DashboardPanel>): Promise<void>;
  deletePanel(id: string): Promise<void>;
}
