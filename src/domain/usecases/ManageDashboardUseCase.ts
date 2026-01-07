import type { DashboardRepository } from '../repositories/DashboardRepository';
import type { DashboardPanel } from '../entities/DashboardPanel';

export class ManageDashboardUseCase {
  private dashboardRepository: DashboardRepository;

  constructor(dashboardRepository: DashboardRepository) {
    this.dashboardRepository = dashboardRepository;
  }

  async getPanels(): Promise<DashboardPanel[]> {
    return this.dashboardRepository.getPanels();
  }

  async savePanel(panel: DashboardPanel): Promise<void> {
    return this.dashboardRepository.savePanel(panel);
  }

  async updatePanel(id: string, panel: Partial<DashboardPanel>): Promise<void> {
    return this.dashboardRepository.updatePanel(id, panel);
  }

  async deletePanel(id: string): Promise<void> {
    return this.dashboardRepository.deletePanel(id);
  }

  async reorderPanels(panelIds: string[]): Promise<void> {
    const panels = await this.dashboardRepository.getPanels();
    for (let i = 0; i < panelIds.length; i++) {
      const panel = panels.find(p => p.id === panelIds[i]);
      if (panel) {
        await this.dashboardRepository.updatePanel(panelIds[i], { position: i });
      }
    }
  }
}
