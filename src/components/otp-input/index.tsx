import React, { useEffect, useRef, useState } from 'react';
import {
  StyleProp,
  Text, TextInput, TouchableOpacity, View, ViewStyle
} from 'react-native';
import { useAppTheme } from '../../app-hooks/use-app-theme';
import { createStyleSheet } from './style';

interface Props {
  otpLength: number;
  onOtpChange: (otp: string) => void;
  viewStyle?: StyleProp<ViewStyle>
  autoReadOtp?: string
}

export const OTPInput = (props: Props) => {
  const {
    onOtpChange, otpLength, viewStyle, autoReadOtp,
  } = props || {};
  const [otp, setOtp] = useState('');
  const inputRef = useRef<TextInput>(null);
  const { theme } = useAppTheme();
  const styles = createStyleSheet(theme);

  useEffect(() => {
    setTimeout(foucusInput, 200);
  }, []);

  useEffect(() => {
    if (autoReadOtp?.length === 4) {
      onChange(autoReadOtp);
    }
  }, [autoReadOtp]);

  function foucusInput() {
    inputRef?.current?.blur();
    inputRef.current?.focus();
  }

  function onChange(text: string) {
    if (text?.length > otpLength) return;
    onOtpChange(text);
    setOtp(text);
  }

  return <View style={viewStyle}>
    <TextInput
      style={styles.inputField}
      keyboardType="number-pad"
      ref={inputRef}
      onChangeText={onChange}
      value={otp}
      textContentType={'oneTimeCode'}
      returnKeyType='done'
    />
    <View style={styles.container}>
      {Array(otpLength)
        .fill(null)
        .map((item, index) => (
          <TouchableOpacity style={styles.otpInput} activeOpacity={1} onPress={foucusInput}>
            <Text style={styles.otpText}>{otp[index] || ''}</Text>
          </TouchableOpacity>
        ))}
    </View>
  </View>;
};
