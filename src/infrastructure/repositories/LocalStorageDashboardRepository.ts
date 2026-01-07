import type { DashboardRepository } from '../../domain/repositories/DashboardRepository';
import type { DashboardPanel } from '../../domain/entities/DashboardPanel';
import { LocalStorageService } from '../storage/LocalStorageService';

export class LocalStorageDashboardRepository implements DashboardRepository {
  private readonly STORAGE_KEY = 'dashboard_panels';

  async getPanels(): Promise<DashboardPanel[]> {
    const panels = LocalStorageService.get<DashboardPanel[]>(this.STORAGE_KEY);
    if (!panels || panels.length === 0) {
      return this.getDefaultPanels();
    }
    return panels;
  }

  private getDefaultPanels(): DashboardPanel[] {
    return [
      {
        id: crypto.randomUUID(),
        type: 'tasks',
        position: 0,
        visible: true,
        settings: {}
      },
      {
        id: crypto.randomUUID(),
        type: 'pomodoro',
        position: 1,
        visible: true,
        settings: {}
      },
      {
        id: crypto.randomUUID(),
        type: 'focus',
        position: 2,
        visible: true,
        settings: {}
      }
    ];
  }

  async savePanel(panel: DashboardPanel): Promise<void> {
    const panels = await this.getPanels();
    panels.push(panel);
    LocalStorageService.set(this.STORAGE_KEY, panels);
  }

  async updatePanel(id: string, panelData: Partial<DashboardPanel>): Promise<void> {
    const panels = await this.getPanels();
    const index = panels.findIndex(panel => panel.id === id);
    if (index === -1) throw new Error('Panel not found');
    
    panels[index] = { ...panels[index], ...panelData };
    LocalStorageService.set(this.STORAGE_KEY, panels);
  }

  async deletePanel(id: string): Promise<void> {
    const panels = await this.getPanels();
    const filteredPanels = panels.filter(panel => panel.id !== id);
    LocalStorageService.set(this.STORAGE_KEY, filteredPanels);
  }
}
