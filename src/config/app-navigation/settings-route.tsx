import { createStackNavigator } from "@react-navigation/stack";
import { GenericWebView } from "../../screens/generic-webview";
import { PersonalDetails } from "../../screens/personal-details";
import { Settings } from "../../screens/settings";
import { navigations } from "./constant";

const SettingsStack = createStackNavigator();

const header = () => null;

export const SettingsRoute = () => (
    <SettingsStack.Navigator>
        <SettingsStack.Screen
            name={navigations.SETTINGS}
            component={Settings}
            options={{ header }}
        />
        <SettingsStack.Screen
            name={navigations.GENERIC_WEB_VIEW}
            component={GenericWebView}
            options={{ header }}
        />
        <SettingsStack.Screen
            name={navigations.PROFILE}
            component={PersonalDetails}
            options={{ header }}
        />
    </SettingsStack.Navigator>
)
