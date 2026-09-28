import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { COIN } from '../theme/spacing';

interface Props {
  level: number;
  unlocked: boolean;
  completed: boolean;
  onPress: (level: number) => void;
}

export default function LevelButton({ level, unlocked, completed, onPress }: Props) {
  const c = unlocked
    ? { light: COLORS.coinLight, mid: COLORS.coinMid, dark: COLORS.coinDark, edge: COLORS.coinEdge, num: COLORS.coinNumber }
    : { light: COLORS.lockedLight, mid: COLORS.lockedMid, dark: COLORS.lockedDark, edge: COLORS.lockedEdge, num: COLORS.lockedNumber };

  return (
    <Pressable
      disabled={!unlocked}
      onPress={() => onPress(level)}
      style={({ pressed }) => [styles.wrap, pressed && { transform: [{ scale: 0.96 }] }]}
    >
      <View style={styles.tilt}>
        <View style={[styles.face, styles.edge, { backgroundColor: c.edge }]} />
        <LinearGradient
          colors={[c.light, c.mid, c.dark]}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.8, y: 1 }}
          style={styles.face}
        >
          {!unlocked ? (
            <MaterialCommunityIcons name="lock" size={30} color={c.num} />
          ) : completed ? (
            <MaterialCommunityIcons name="check-bold" size={34} color={c.num} />
          ) : (
            <Text style={[styles.number, { color: c.num }]}>{level}</Text>
          )}
        </LinearGradient>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: COIN.width,
    height: COIN.height + COIN.edge,
    shadowColor: COLORS.coinShadow,
    shadowOpacity: 0.45,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  tilt: { flex: 1, transform: [{ rotate: COIN.tilt }] },
  face: {
    width: COIN.width,
    height: COIN.height,
    borderRadius: COIN.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edge: { position: 'absolute', top: COIN.edge },
  number: { fontSize: COIN.fontSize, fontWeight: '900' },
});
