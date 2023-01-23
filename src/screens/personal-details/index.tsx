import { NavigationContainerRef } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { logoutUser } from "../../app-hooks/use-logout";
import { useUserRegistered } from "../../app-hooks/use-user-registered";
import { strings } from "../../assets/strings";
import { ButtonComponent } from "../../components/button-component";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Loader } from "../../components/loader";
import { navigations } from "../../config/app-navigation/constant";
import { useDeleteAccount } from "../../network/hooks/user-service/use-delete-account";
import { useUpdateUserProfile } from "../../network/hooks/user-service/use-update-user-profile";
import { useUserProfile } from "../../network/hooks/user-service/use-user-profile";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";

export interface Params {
	fromProfile: boolean;
}

export interface PersonalDetailsProps {
	navigation: NavigationContainerRef;
	route: {
		params: Params;
	};
}

export interface FormDataProps {
	name: string;
	age: string;
	week: string;
}

export const PersonalDetails = (props: PersonalDetailsProps) => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const { navigation, route } = props || {};
	const { fromProfile } = route?.params || {};
	const [formData, setFormData] = useState<FormDataProps>({
		name: "",
		age: "",
		week: "",
	});
	const { onSetUserRegistration } = useUserRegistered();
	const [showMenu, setShowMenu] = useState(false);

	const { mutateAsync: onDeleteAccount, isLoading: deleteAccountLoading } =
		useDeleteAccount();

	const { data, isFetching, refetch: fetchUserProfile } = useUserProfile();
	const { age, first_name, pregnancy_week } = data || {};

	const { isLoading, mutateAsync: onUpdateUserProfile } =
		useUpdateUserProfile();

	const updateFormData = (key: string, value: string) => {
		setFormData((formDetails) => ({
			...formDetails,
			[key]: value,
		}));
	};

	useEffect(() => {
		if (age) {
			updateFormData("age", `${age}`);
		}
		if (first_name) {
			updateFormData("name", first_name);
		}
		if (pregnancy_week) {
			updateFormData("week", `${pregnancy_week}`);
		}
	}, [data]);

	useEffect(() => {
		if (fromProfile) {
			fetchUserProfile();
		}
	}, []);

	const checkValidation = () => {
		if (
			age?.toString() === formData?.age &&
			first_name === formData?.name &&
			pregnancy_week?.toString() === formData?.week
		) {
			return true;
		} else if (formData?.age && formData?.name && formData?.week) {
			return false;
		}

		return true;
	};

	const updateUserProfile = async () => {
		const payload = {
			name: formData?.name,
			age: formData?.age,
			pregnancy_week: formData?.week,
		};

		const res = await onUpdateUserProfile(payload);

		if (res?.isSuccess) {
			if (fromProfile) {
				navigation.goBack();
			} else {
				onSetUserRegistration("true");
				navigationRouter([
					{ name: navigations.TRACK, params: { isResetNavigation: true } },
				]);
			}
		}
	};

	const deleteAccount = async () => {
		const res = await onDeleteAccount();

		if (res?.isSuccess) {
			logoutUser();
		}
	};

	const onShowAlert = () => {
		Alert.alert(
			strings.deleteAccount,
			strings.sureDeleteAccount,
			[
				{
					onPress: () => null,
					text: strings.cancel,
				},
				{
					onPress: deleteAccount,
					text: strings.ok,
				},
			],
			{ cancelable: true }
		);
	};

	return (
		<View style={styles.container}>
			<Loader
				visible={isFetching || isLoading || deleteAccountLoading}
				showOverlay={isLoading || deleteAccountLoading}
			/>
			<Header
				onPressBack={() => navigation.goBack()}
				title={fromProfile ? strings.profile : ""}
				hasThreeDotIcon={fromProfile}
				onPressThreeDot={() => setShowMenu(!showMenu)}
			/>
			<View style={[styles.innerContainer, fromProfile && styles.padding]}>
				<Text style={styles.letsKnow}>
					{fromProfile ? strings.fillDetails : strings.letsKnow}
				</Text>
				<Input
					onChangeText={(val) => updateFormData("name", val)}
					value={formData?.name}
					placeholder={strings.yourName}
					label={strings.yourName}
				/>
				<Input
					keyboardType="numeric"
					returnKeyType="done"
					onChangeText={(val) => updateFormData("age", val)}
					value={formData?.age}
					placeholder={strings.yourAge}
					label={strings.yourAge}
				/>
				<Input
					keyboardType="numeric"
					returnKeyType="done"
					onChangeText={(val) => updateFormData("week", val)}
					value={formData?.week}
					placeholder={strings.pregnancyWeek}
					label={strings.pregnancyWeek}
				/>
				<ButtonComponent
					disabled={checkValidation()}
					buttonStyle={[styles.buttonStyle, fromProfile && styles.button]}
					ctaLabel={strings.save}
					onPress={updateUserProfile}
				/>
			</View>
			{showMenu && (
				<TouchableOpacity
					onPress={onShowAlert}
					activeOpacity={0.8}
					style={styles.buttonView}
				>
					<Text style={styles.delete}>{strings.deleteAccount}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};
