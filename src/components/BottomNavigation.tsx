import { ComponentProps } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { SPACING } from '../theme/spacing';
import { TabId } from '../types';
import BottomTab from './BottomTab';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

const TABS: { id: TabId; icon: IconName; size?: number; color?: string }[] = [
  { id: 'tasks', icon: 'clipboard-text', color: '#2E8B57' },
  { id: 'progress', icon: 'chart-line', color: '#E08A00' },
  { id: 'home', icon: 'piggy-bank', size: 38, color: '#E58AA0' },
  { id: 'learn', icon: 'book-open-page-variant', color: '#2E8B57' },
  { id: 'settings', icon: 'cog', color: COLORS.darkGreen },
];

interface Props {
  onTabPress: (tab: TabId) => void;
}

export default function BottomNavigation({ onTabPress }: Props) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => (
        <BottomTab
          key={tab.id}
          icon={tab.icon}
          size={tab.size}
          color={tab.color}
          onPress={() => onTabPress(tab.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: SPACING.barHeight + 2,
    marginHorizontal: SPACING.bottomBarSideMargin,
    marginBottom: SPACING.bottomBarMarginBottom,
    borderRadius: SPACING.barRadius,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.primaryGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
