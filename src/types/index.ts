export interface UserStats {
  coins: number;
  streak: number;
  energy: number;
  maxEnergy: number;
}

export interface Level {
  id: number;
  unlocked: boolean;
  completed: boolean;
}

export interface Section {
  id: number;
  title: string;
  currentLevel: number;
}

export type TabId = 'tasks' | 'progress' | 'home' | 'learn' | 'settings';
