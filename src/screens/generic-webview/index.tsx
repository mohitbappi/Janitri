import { NavigationContainerRef } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { useAppTheme } from '../../app-hooks/use-app-theme';
import { Header } from '../../components/header';
import { Loader } from '../../components/loader';
import { createStyleSheet } from './style';

interface Params {
  params: {
    header?: string,
    uri: string,
  }
}

export interface GenericWebViewProps {
  route: Params,
  navigation: NavigationContainerRef
}

export interface RefObj {
  goBack: () => void
}

export const GenericWebView = (props: GenericWebViewProps) => {
  const { theme } = useAppTheme();
  const styles = createStyleSheet(theme);
  const { navigation, route } = props;
  const [loading, setloading] = useState(false);
  const {
    header = '',
    uri = '',
  } = route.params || {};
  const [back, setBack] = useState(false);
  const webViewRef = useRef<RefObj>();

  const handleMessage = (messageEvent: WebViewMessageEvent) => {
    const { data } = messageEvent.nativeEvent;

    if (data === 'closed') {
      navigation.goBack();
    }
  };

  const handleBackPress = () => {
    if (back) {
      webViewRef?.current?.goBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={header}
          onPressBack={handleBackPress}
        />
      </View>
      <WebView
        ref={webViewRef}
        source={{ uri }}
        style={styles.webView}
        onLoadStart={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          setloading(nativeEvent.loading);
        }}
        onLoadEnd={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          setloading(nativeEvent.loading);
          setBack(nativeEvent.canGoBack);
        }}
        onMessage={handleMessage}
        startInLoadingState={loading}
        onLoadProgress={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          setBack(nativeEvent.canGoBack);
        }}
        renderLoading={() => <Loader visible />}
      />
    </View>
  );
};
