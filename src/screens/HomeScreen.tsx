import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../components/BottomNavigation';
import LevelPath from '../components/LevelPath';
import SectionHeader from '../components/SectionHeader';
import TopBar from '../components/TopBar';
import { levels as mockLevels, section as mockSection, userStats as mockStats } from '../data/mock';
import { COLORS } from '../theme/colors';
import { Level, Section, TabId, UserStats } from '../types';

export default function HomeScreen() {
  const [stats] = useState<UserStats>(mockStats);
  const [section] = useState<Section>(mockSection);
  const [levels] = useState<Level[]>(mockLevels);

  const handleLevelPress = (level: number) => {
    Alert.alert(`Nível ${level} selecionado`);
  };

  const handleTabPress = (_tab: TabId) => {};

  return (
    <SafeAreaView style={styles.container}>
      <TopBar stats={stats} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionHeader section={section} />
        <LevelPath levels={levels} onLevelPress={handleLevelPress} />
      </ScrollView>
      <BottomNavigation onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
});
