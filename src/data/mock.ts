import { Level, Section, UserStats } from '../types';

export const userStats: UserStats = {
  coins: 0,
  streak: 0,
  energy: 3,
  maxEnergy: 3,
};

export const section: Section = {
  id: 1,
  title: 'Seção 1',
  currentLevel: 1,
};

export const levels: Level[] = [
  { id: 1, unlocked: true, completed: false },
  { id: 2, unlocked: true, completed: false },
  { id: 3, unlocked: true, completed: false },
  { id: 4, unlocked: true, completed: false },
  { id: 5, unlocked: true, completed: false },
  { id: 6, unlocked: true, completed: false },
  { id: 7, unlocked: true, completed: false },
  { id: 8, unlocked: true, completed: false },
];
