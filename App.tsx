import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CodePush from "react-native-code-push";
import { Provider } from "react-redux";
import { useToken } from "./src/app-hooks/use-token";
import { light } from "./src/assets/constants";
import { strings } from "./src/assets/strings";
import { AppNavigation } from "./src/config/app-navigation";
import { API } from "./src/network/api";
import { store } from "./src/network/reducers/store";
import { queryConfig } from "./src/network/utils/query-config";
import { getTheme } from "./src/theme";
import { initialiseCodePush } from "./src/utils/codepush";

const theme = getTheme(light);

const { codePushOptions, codePushDeploymentKey } = initialiseCodePush();

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
	},
});

export const queryClient = new QueryClient(queryConfig);

const AppComponent = () => {
	const { token } = useToken();

	useEffect(() => {
		if (token) {
			axios.defaults.headers.common.authorization = `Bearer ${token}`;
			API.initService();
		}
		codePushSync();
	}, [token]);

	const codePushSync = () => {
		CodePush.sync({
			updateDialog: {
				title: "",
				mandatoryUpdateMessage: strings.newUpdateAvailable,
				mandatoryContinueButtonLabel: strings.updateNow,
			},
			installMode: CodePush.InstallMode.IMMEDIATE,
			deploymentKey: codePushDeploymentKey,
		});
	};

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<SafeAreaView style={styles.container} />
				<AppNavigation />
			</Provider>
		</QueryClientProvider>
	);
};

export const App = CodePush(codePushOptions)(AppComponent);
