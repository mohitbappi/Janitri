import { NavigationContainerRef } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackgroundTimer from "react-native-background-timer";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { useToken } from "../../app-hooks/use-token";
import { useUserRegistered } from "../../app-hooks/use-user-registered";
import { countryCode } from "../../assets/constants";
import { edit } from "../../assets/images";
import { strings } from "../../assets/strings";
import { ButtonComponent } from "../../components/button-component";
import { Header } from "../../components/header";
import { ImageComponent } from "../../components/image-component";
import { Loader } from "../../components/loader";
import { OTPInput } from "../../components/otp-input";
import { navigations } from "../../config/app-navigation/constant";
import { useLogin } from "../../network/hooks/user-service/use-login";
import { useVerifyOtp } from "../../network/hooks/user-service/use-verify-otp";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";

export interface Params {
	mobile: string;
}

export interface OtpProps {
	route: {
		params: Params;
	};
	navigation: NavigationContainerRef;
}

export interface VerifyOtpResponse {
	access_token: string;
	first_name: string;
	age: number;
	pregnancy_week: number;
}

export const Otp = (props: OtpProps) => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const { route, navigation } = props || {};
	const { mobile } = route?.params || {};
	const [timerSecond, setTimerSecond] = useState(30);
	const [otpValue, setOtpValue] = useState("");
	const { onSetToken, token } = useToken();
	const { onSetUserRegistration } = useUserRegistered();

	const { mutateAsync: onVerifyOtp, isLoading } = useVerifyOtp();

	const { mutateAsync: onResendOtp, isLoading: resendLoading } = useLogin();

	useEffect(() => {
		setTimer();
	}, []);

	const setToken = async (data: VerifyOtpResponse) => {
		const { access_token, age, first_name, pregnancy_week } = data || {};

		if (access_token?.length) {
			await onSetToken(access_token);
			let initialScreen = "";

			if (first_name || age || pregnancy_week) {
				onSetUserRegistration("true");
				initialScreen = navigations.TRACK;
			} else {
				onSetUserRegistration("false");
				initialScreen = navigations.PERSONAL_DETAILS;
			}

			navigationRouter([
				{ name: initialScreen, params: { isResetNavigation: true } },
			]);
		}
	};

	const setTimer = () => {
		BackgroundTimer.runBackgroundTimer(() => {
			setTimerSecond((second) => {
				if (second === 0) {
					BackgroundTimer.stopBackgroundTimer();
					return 0;
				}
				return second - 1;
			});
		}, 1000);
	};

	const verifyOtp = async (otp: string) => {
		setOtpValue(otp);

		if (otp?.length === 6) {
			const res = await onVerifyOtp({
				mobileNumber: `${countryCode}${mobile}`,
				otp,
			});

			if (res?.isSuccess) {
				setToken(res?.data as VerifyOtpResponse);
			}
		}
	};

	const resendOtp = async () => {
		const res = await onResendOtp({ mobileNumber: `${countryCode}${mobile}` });

		if (res?.isSuccess) {
			setTimerSecond(30);
			setTimer();
		}
	};

	const onGoBack = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<Loader visible={isLoading || resendLoading} showOverlay />
			<Header onPressBack={onGoBack} />
			<View style={styles.innerContainer}>
				<Text style={styles.verify}>{strings.verify}</Text>
				<OTPInput otpLength={6} onOtpChange={verifyOtp} />
				<View style={styles.row}>
					<Text style={styles.otp}>{strings.otpSent}</Text>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={onGoBack}
						style={styles.rowOnly}
					>
						<Text style={styles.number}>{`${countryCode} - ${mobile}`}</Text>
						<ImageComponent source={edit} style={styles.edit} />
					</TouchableOpacity>
				</View>
				<Text style={styles.didntReceive}>{strings.didntReceive}</Text>
				<TouchableOpacity
					onPress={resendOtp}
					activeOpacity={0.8}
					disabled={!!timerSecond}
				>
					<Text style={styles.resendIn}>
						{timerSecond === 0
							? strings.resendCode
							: `${strings.resendIn} ${timerSecond}s`}
					</Text>
				</TouchableOpacity>
				<ButtonComponent
					onPress={() => verifyOtp(otpValue)}
					buttonStyle={styles.buttonStyle}
					ctaLabel={strings.verify}
				/>
			</View>
		</View>
	);
};
