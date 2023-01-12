import CodePush, { CodePushOptions } from "react-native-code-push";

export interface EnvData {
	CODE_PUSH_DEPLOYMENT_KEY_IOS: string;
	CODE_PUSH_DEPLOYMENT_KEY_ANDROID: string;
}

export interface CodePushResponse {
	codePushOptions: CodePushOptions;
	isUpdateRequired: boolean;
	codePushDeploymentKey: string;
}

export const initialiseCodePush = () => {
	let isUpdateRequired = false;

	// Todo:- Will use these for different servers.
	// Staging - XZDtJ3ImWzUNMYa6s7Cs27zT45ojZdI6A9RZJ
	// Production - wKXu92mkVX79K3HYpCCPVEzlP2Lpi7uRp_dMa

	const codePushDeploymentKey = "wKXu92mkVX79K3HYpCCPVEzlP2Lpi7uRp_dMa";
	const codePushOptions = {
		checkFrequency: CodePush.CheckFrequency.MANUAL,
		installMode: CodePush.InstallMode.IMMEDIATE,
		deploymentKey: codePushDeploymentKey,
	};

	CodePush?.checkForUpdate(codePushDeploymentKey).then((update) => {
		if (!update?.isMandatory) {
			isUpdateRequired = true;
		}

		return null;
	});

	return {
		codePushOptions,
		isUpdateRequired,
		codePushDeploymentKey,
	} as CodePushResponse;
};
