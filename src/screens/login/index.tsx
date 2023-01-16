import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import {
	countryCode,
	janitriPrivacyPolicyUrl,
	janitriTnCUrl,
} from "../../assets/constants";
import { janitriLogo, welcomeLogo } from "../../assets/images";
import { strings } from "../../assets/strings";
import { ButtonComponent } from "../../components/button-component";
import { ImageComponent } from "../../components/image-component";
import { Input } from "../../components/input";
import { Loader } from "../../components/loader";
import { navigations } from "../../config/app-navigation/constant";
import { useLogin } from "../../network/hooks/user-service/use-login";
import { verticalScale } from "../../theme/device/normalize";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";

export const Login = () => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const [mobile, setMobile] = useState("");

	const { mutateAsync, isLoading } = useLogin();

	const onLogin = async () => {
		const res = await mutateAsync({ mobileNumber: `${countryCode}${mobile}` });

		if (res?.isSuccess) {
			navigationRouter([{ name: navigations.OTP, params: { mobile } }]);
		}
	};

	const openTnC = () => {
		navigationRouter([
			{
				name: navigations.GENERIC_WEB_VIEW,
				params: { header: strings.aboutJanitri, uri: janitriTnCUrl },
			},
		]);
	};

	const openPrivacyPolicy = () => {
		navigationRouter([
			{
				name: navigations.GENERIC_WEB_VIEW,
				params: { header: strings.aboutJanitri, uri: janitriPrivacyPolicyUrl },
			},
		]);
	};

	return (
		<View style={styles.container}>
			<Loader visible={isLoading} showOverlay />
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "position" : "height"}
				keyboardVerticalOffset={verticalScale(0)}
			>
				<ImageComponent source={janitriLogo} style={styles.janitriLogo} />
				<ImageComponent source={welcomeLogo} style={styles.welcomeLogo} />
				<Text style={styles.title}>{strings.smartPregnancy}</Text>
				<Input
					hasMobile
					onChangeText={setMobile}
					value={mobile}
					placeholder={strings.enterMobile}
				/>
				<ButtonComponent
					disabled={mobile.length < 10}
					onPress={onLogin}
					ctaLabel={strings.continue}
				/>
			</KeyboardAvoidingView>
			<Text style={styles.bottom}>
				{strings.tappingInfo}
				<View style={styles.footer}>
					<TouchableOpacity activeOpacity={0.8} onPress={openTnC}>
						<Text style={styles.hyperlink}> {strings.tnc}</Text>
					</TouchableOpacity>
					<Text>{` ${strings.and} `}</Text>
					<TouchableOpacity activeOpacity={0.8} onPress={openPrivacyPolicy}>
						<Text style={styles.hyperlink}> {strings.privacy}</Text>
					</TouchableOpacity>
				</View>
			</Text>
		</View>
	);
};
