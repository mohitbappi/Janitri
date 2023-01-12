import React from 'react';
import {
  ActivityIndicator, StyleProp, View, ViewStyle
} from 'react-native';
import { useAppTheme } from '../../app-hooks/use-app-theme';
import { createStyleSheet } from './style';

export interface LoaderProps {
  showOverlay?: boolean
  color?: string
  visible: boolean
  loaderStyle?: StyleProp<ViewStyle>
}

export const Loader = (props: LoaderProps) => {
  const { theme } = useAppTheme();
  const styles = createStyleSheet(theme);
  const {
    showOverlay = false, color, visible = false, loaderStyle,
  } = props || {};

  if (!visible) {
    return null;
  }

  const renderLoader = () => <ActivityIndicator size={'large'} color={color || theme.colors.primaryColor} />;

  return (
    <View style={[styles.container, showOverlay && styles.overlay]}>
      {renderLoader()}
    </View>
  );
};
