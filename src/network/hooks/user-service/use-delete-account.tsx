import { useMutation } from "@tanstack/react-query";
import { onDeleteAccount, onLogin } from "../../api/services/user-service";

export const useDeleteAccount = () => {
	const query = useMutation(onDeleteAccount);

	return query;
};
