import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PersonalDetails } from '../../screens/personal-details';
import { DeeplinkNavigation } from '../../utils/deeplink/deeplink-navigation';
import { AuthenticationRoute } from './authentication-route';
import { BottomNavigator } from './bottom-navigator';
import { navigations } from './constant';
import { setNavigator } from './root-navigation';

const DeeplinkStack = createStackNavigator();

const header = () => null;

export const DeeplinkRoute = () => (
    <NavigationContainer ref={(_: NavigationContainerRef) => {
        setNavigator(_);
    }}>
        <DeeplinkStack.Navigator>
            <DeeplinkStack.Screen
                name={navigations.DEEPLINK}
                component={DeeplinkNavigation}
                options={{ header }}
            />
            <DeeplinkStack.Screen
                name={navigations.LOGIN}
                component={AuthenticationRoute}
                options={{ header }}
            />
            <DeeplinkStack.Screen
                name={navigations.PERSONAL_DETAILS}
                component={PersonalDetails}
                options={{ header }}
            />
            <DeeplinkStack.Screen
                name={navigations.TRACK}
                component={BottomNavigator}
                options={{ header }}
            />
        </DeeplinkStack.Navigator>
    </NavigationContainer>
)
