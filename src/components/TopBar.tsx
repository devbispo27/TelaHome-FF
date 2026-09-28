import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { SPACING } from '../theme/spacing';
import { UserStats } from '../types';

interface Props {
  stats: UserStats;
}

export default function TopBar({ stats }: Props) {
  return (
    <View style={styles.bar}>
      <View style={styles.item}>
        <MaterialCommunityIcons name="cash-multiple" size={38} color={COLORS.cash} />
        <Text style={styles.value}>{stats.coins}</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.fireWrap}>
          <MaterialCommunityIcons name="fire" size={44} color={COLORS.fire} />
          <Text style={styles.fireCoin}>$</Text>
        </View>
        <Text style={styles.value}>{stats.streak}</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.battery}>
          {Array.from({ length: stats.maxEnergy }).map((_, i) => (
            <View
              key={i}
              style={[styles.cell, i >= stats.energy && styles.cellEmpty]}
            />
          ))}
        </View>
        <View style={styles.batteryTip} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{stats.energy}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: SPACING.barHeight,
    marginHorizontal: SPACING.screenPadding - 2,
    marginTop: SPACING.barMarginTop,
    borderRadius: SPACING.barRadius,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.primaryGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  item: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  value: { fontSize: 16, fontWeight: '800', color: COLORS.text },
  fireWrap: { alignItems: 'center', justifyContent: 'center' },
  fireCoin: {
    position: 'absolute',
    bottom: 6,
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.white,
  },
  battery: {
    flexDirection: 'row',
    gap: 3,
    padding: 3,
    width: 58,
    height: 30,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.darkGreen,
    backgroundColor: COLORS.primaryGreenLight,
  },
  batteryTip: {
    width: 3,
    height: 10,
    marginLeft: -4,
    backgroundColor: COLORS.darkGreen,
    borderRadius: 1,
  },
  cell: { flex: 1, borderRadius: 2, backgroundColor: COLORS.battery },
  cellEmpty: { backgroundColor: 'transparent' },
  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 5,
    backgroundColor: COLORS.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { color: COLORS.white, fontWeight: '800', fontSize: 14 },
});
