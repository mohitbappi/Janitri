import React from 'react';
import { StyleProp, Text, View } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { useAppTheme } from '../../app-hooks/use-app-theme';
import { ImageComponent } from '../../components/image-component';
import { createStyleSheet } from './style';

export interface NavigatorOptionProps {
  focused: boolean
  tabName: string
  selectedImage: number
  unSelectedImage: number
  iconStyle?: StyleProp<ImageStyle>
}

export const NavigatorOptionComponent = (props: NavigatorOptionProps) => {
  const { theme } = useAppTheme();
  const styles = createStyleSheet(theme);
  const {
    focused = false,
    tabName,
    selectedImage,
    unSelectedImage,
    iconStyle,
  } = props || {};

  return (
    <View style={styles.innerContainer}>
      <ImageComponent
        source={focused ? selectedImage : unSelectedImage}
        style={[styles.icon, iconStyle]}
      />
      <Text style={[styles.text, focused && styles.activeText]}>
        {tabName}
      </Text>
    </View>
  );
};
