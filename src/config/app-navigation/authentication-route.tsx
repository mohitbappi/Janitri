import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { GenericWebView } from '../../screens/generic-webview';
import { Login } from '../../screens/login';
import { Otp } from '../../screens/otp';
import { navigations } from './constant';

const AuthenticationStack = createStackNavigator();

const header = () => null;

export const AuthenticationRoute = () => (
	<AuthenticationStack.Navigator>
		<AuthenticationStack.Screen
			name={navigations.LOGIN}
			component={Login}
			options={{ header }}
		/>
		<AuthenticationStack.Screen
			name={navigations.OTP}
			component={Otp}
			options={{ header }}
		/>
		<AuthenticationStack.Screen
            name={navigations.GENERIC_WEB_VIEW}
            component={GenericWebView}
            options={{ header }}
        />
	</AuthenticationStack.Navigator>
);
