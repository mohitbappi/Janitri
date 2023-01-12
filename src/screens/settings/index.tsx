import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { getVersion } from "react-native-device-info";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { useLogout } from "../../app-hooks/use-logout";
import { email, janitriWebsiteUrl } from "../../assets/constants";
import { arrowBack } from "../../assets/images";
import { strings } from "../../assets/strings";
import { ImageComponent } from "../../components/image-component";
import { navigations } from "../../config/app-navigation/constant";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";
import { appVersion } from "../../../app.json";
import { Header } from "../../components/header";

export const Settings = () => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const { onLogout } = useLogout();

	const profileSections = [
		{
			label: strings.profile,
			action: () =>
				navigationRouter([
					{ name: navigations.PROFILE, params: { fromProfile: true } },
				]),
		},
		{
			label: strings.shareFeedback,
			action: () =>
				Linking.openURL(
					`mailto:${email}?subject=Janitri for Mothers App: Feedback`
				),
		},
		{
			label: strings.aboutJanitri,
			action: () =>
				navigationRouter([
					{
						name: navigations.GENERIC_WEB_VIEW,
						params: { header: strings.aboutJanitri, uri: janitriWebsiteUrl },
					},
				]),
		},
		{
			label: strings.contactUs,
			action: () =>
				Linking.openURL(
					`mailto:${email}?subject=Janitri for Mothers App: Contact Us`
				),
		},
		{
			label: strings.logout,
			action: onLogout,
		},
	];

	return (
		<View style={styles.container}>
			<Header title={strings.settings} hasBackIcon={false} />
			{profileSections.map((section) => {
				return (
					<TouchableOpacity
						key={section.label}
						onPress={section.action}
						activeOpacity={1}
						style={styles.sectionView}
					>
						<Text style={styles.label}>{section.label}</Text>
						<ImageComponent source={arrowBack} style={styles.arrowBack} />
					</TouchableOpacity>
				);
			})}
			<Text style={styles.version}>{`${
				strings.appVersion
			}: ${getVersion()}(${appVersion})`}</Text>
		</View>
	);
};
