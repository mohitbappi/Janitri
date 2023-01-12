import { Alert } from "react-native";
import { strings } from "../assets/strings";

export const alert = (title: string, desc: string, onAccept?: () => void, onReject?: () => void) => {
    Alert.alert(
        title,
        desc,
        [
            { text: strings.no, onPress: onReject, style: 'cancel', },
            { text: strings.yes, onPress: onAccept },
        ],
        { cancelable: false },
    )
}