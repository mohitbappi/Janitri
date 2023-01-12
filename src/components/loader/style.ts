import { StyleSheet } from 'react-native';
import { ThemeProps } from '../../theme/theme';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000000,
  },
  overlay: {
    zIndex: 10,
    backgroundColor: theme.colors.blackOverlay
  },
});
