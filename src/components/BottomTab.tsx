import { ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface Props {
  icon: IconName;
  color?: string;
  size?: number;
  onPress: () => void;
}

export default function BottomTab({ icon, color = COLORS.darkGreen, size = 30, onPress }: Props) {
  return (
    <Pressable onPress={onPress} hitSlop={8}>
      <View style={[styles.circle, { width: size + 14, height: size + 14, borderRadius: (size + 14) / 2 }]}>
        <MaterialCommunityIcons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: COLORS.primaryGreenLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
