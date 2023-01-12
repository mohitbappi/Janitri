import { StyleSheet } from 'react-native';
import { lineHeightScale, normalScale } from '../../theme/device/normalize';
import { ThemeProps } from '../../theme/theme';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
  inputField: {
    display: 'flex',
    opacity: 0,
    position: 'absolute',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  otpInput: {
    height: normalScale(40),
    width: normalScale(40),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: theme.colors.primaryColor,
    borderWidth: theme.borderWidth.borderWidth1,
    borderRadius: theme.borderRadius.radius10
  },
  otpText: {
    fontSize: theme.fontSize.font22,
    color: theme.colors.primaryColor,
  },
});
