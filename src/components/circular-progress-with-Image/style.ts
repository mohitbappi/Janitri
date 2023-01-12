import { StyleSheet } from 'react-native';
import { ThemeProps } from '../../theme/theme';

export const createStyleSheet = (size: number, strokeWidth: number, theme: ThemeProps) => StyleSheet.create({
  container: {
    height: size,
    width: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    position: 'absolute',
  },
  innerContainer: {
    height: size - strokeWidth - 30,
    width: size - strokeWidth - 30,
    borderRadius: size,
    backgroundColor: theme.colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyles: {
    height: size - strokeWidth - 70,
    width: size - strokeWidth - 70,
    borderRadius: size
  },
});
