import { useMutation } from "@tanstack/react-query";
import { onCreateDataSet } from "../../api/services/track-session-service";

export const useCreateDataSet = () => {
	const query = useMutation(onCreateDataSet);

	return query;
};
