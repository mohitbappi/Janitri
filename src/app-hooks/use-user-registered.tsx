import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { persistKeys } from "../network/constant";

const onSetUserRegistration = async (data: string) => {
	await AsyncStorage.setItem(persistKeys.isUserRegistered, data);
};

export const useUserRegistered = () => {
	const [isUserRegistered, setIsUserRegistered] = useState("false");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAsyncStorage = async () => {
			setLoading(true);
			const res =
				(await AsyncStorage.getItem(persistKeys.isUserRegistered)) || "false";

			setIsUserRegistered(res);
			setLoading(false);
		};

		checkAsyncStorage();
	}, []);

	return { isUserRegistered, loading, onSetUserRegistration };
};
