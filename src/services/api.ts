import { levels, section, userStats } from '../data/mock';
import { Level, Section, UserStats } from '../types';

export const api = {
  async getUserStats(): Promise<UserStats> {
    return userStats;
  },
  async getSection(): Promise<Section> {
    return section;
  },
  async getLevels(): Promise<Level[]> {
    return levels;
  },
};
