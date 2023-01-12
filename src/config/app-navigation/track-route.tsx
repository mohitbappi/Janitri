import { createStackNavigator } from "@react-navigation/stack";
import { BabyKicks } from "../../screens/baby-kicks";
import { Information } from "../../screens/information";
import { PastRecords } from "../../screens/past-records";
import { Track } from "../../screens/track";
import { navigations } from "./constant";

const TrackStack = createStackNavigator();

const header = () => null;

export const TrackRoute = () => (
    <TrackStack.Navigator>
        <TrackStack.Screen
            name={navigations.TRACK}
            component={Track}
            options={{ header }}
        />
        <TrackStack.Screen
            name={navigations.BABY_KICKS}
            component={BabyKicks}
            options={{ header }}
        />
        <TrackStack.Screen
            name={navigations.PAST_RECORDS}
            component={PastRecords}
            options={{ header }}
        />
        <TrackStack.Screen
            name={navigations.INFORMATION}
            component={Information}
            options={{ header }}
        />
    </TrackStack.Navigator>
)
