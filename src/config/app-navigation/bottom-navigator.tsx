import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute, ParamListBase, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { bottomTabs } from "../../assets/constants";
import { settingsActive, settingsInactive, trackActive, trackInactive } from "../../assets/images";
import { strings } from "../../assets/strings";
import { navigations } from "./constant";
import { NavigatorOptionComponent } from "./navigator-option-component";
import { SettingsRoute } from "./settings-route";
import { createStyleSheet } from "./style";
import { TrackRoute } from "./track-route";

const Tab = createBottomTabNavigator();

const header = () => null;

export const BottomNavigator = () => {
    const { theme } = useAppTheme();
    const styles = createStyleSheet(theme);
    const [loading, setLoading] = useState(true);
    const bottomNav = ['track', 'settings']

    const getTabData = (name: string) => {
        switch (name) {
            case bottomTabs.track:
                return {
                    screenName: navigations.TRACK,
                    component: TrackRoute,
                };
            case bottomTabs.settings:
                return {
                    screenName: navigations.SETTINGS,
                    component: SettingsRoute,
                };
            default:
                return {
                    screenName: navigations.TRACK,
                    component: TrackRoute,
                };
        }
    };

    const getTabbarStyle = (route: RouteProp<ParamListBase, string>) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';

        if (routeName.length === 0 || bottomNav.includes(routeName)) {
            return styles.container
        }

        return [{ display: 'none' }];
    };

    const tabs = bottomNav?.map(tab => getTabData(tab))

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === navigations.TRACK) {
                        return (
                            <NavigatorOptionComponent
                                focused={focused}
                                tabName={strings.track}
                                selectedImage={trackActive}
                                unSelectedImage={trackInactive}
                            />
                        );
                    }
                    if (route.name === navigations.SETTINGS) {
                        return (
                            <NavigatorOptionComponent
                                focused={focused}
                                tabName={strings.settings}
                                selectedImage={settingsActive}
                                unSelectedImage={settingsInactive}
                            />
                        );
                    }
                    return null;
                },
            })}
            tabBarOptions={{
                labelPosition: 'below-icon',
                showLabel: false,
            }}
            initialRouteName={navigations.TRACK}
        >
            {
                tabs.map((tab) => {
                    return <>
                        <Tab.Screen
                            name={tab?.screenName}
                            component={tab?.component}
                            options={({ route }) => ({
                                tabBarStyle: getTabbarStyle(route),
                                header,
                            })}
                        />
                    </>;
                })
            }
        </Tab.Navigator>
    )
}