import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { SPACING } from '../theme/spacing';
import { Section } from '../types';

interface Props {
  section: Section;
}

export default function SectionHeader({ section }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.pill}>
        <Text style={styles.pillText}>
          {section.title}, Nível {section.currentLevel}
        </Text>
      </View>
      <MaterialCommunityIcons name="hand-coin" size={64} color={COLORS.border} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SPACING.screenPadding,
    marginTop: SPACING.headerMarginTop,
  },
  pill: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 14,
    paddingHorizontal: 8,
    height: 26,
    justifyContent: 'center',
  },
  pillText: { color: COLORS.white, fontSize: 13 },
});
