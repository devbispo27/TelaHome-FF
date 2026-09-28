import { StyleSheet, View } from 'react-native';
import { COIN } from '../theme/spacing';
import { Level } from '../types';
import LevelButton from './LevelButton';

interface Props {
  levels: Level[];
  onLevelPress: (level: number) => void;
}

export default function LevelPath({ levels, onLevelPress }: Props) {
  return (
    <View style={styles.path}>
      {levels.map((item, index) => {
        const side = index % 2 === 0 ? 1 : -1;
        return (
          <View
            key={item.id}
            style={[styles.row, { transform: [{ translateX: COIN.pathShift + side * COIN.pathOffset }] }]}
          >
            <LevelButton
              level={item.id}
              unlocked={item.unlocked}
              completed={item.completed}
              onPress={onLevelPress}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  path: { alignItems: 'center', marginTop: -6, paddingBottom: 24 },
  row: { height: COIN.rowSpacing, alignItems: 'center' },
});
