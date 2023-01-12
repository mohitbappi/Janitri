import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../api/services/user-service";
import { apiKeys } from "../../constant";

export interface Root {
    age: string
    pregnancy_week: string
    first_name: string
    id: number
}

const profileDetailsParser = (response: Root) => response;

export const useUserProfile = () => {
    const query = useQuery([apiKeys.userProfile], () => getUserProfile(), { staleTime: 0, enabled: false, refetchOnWindowFocus: false });

    return {
        ...query, data: profileDetailsParser(query.data?.data as Root), isSuccess: query?.data?.isSuccess, isError: query?.data?.isError,
    };
};