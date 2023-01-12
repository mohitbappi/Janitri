import { API } from "..";
import { apiConstants } from "../../constant";
import { getApiResponse } from "../../utils/get-api-response";

export interface LoginProps {
    mobileNumber: string
}

export interface OtpProps {
    mobileNumber: string
    otp: string
}

export interface UserProfileProps {
    name: string
    age: string
    pregnancy_week: string
}

export const onLogin = async (props: LoginProps) => {
    const { mobileNumber } = props || {};
    const endPoint = apiConstants.login;
    const data = await API.userService.post(endPoint, { phone: mobileNumber });

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};

export const onVerifyOtp = async (props: OtpProps) => {
    const { mobileNumber, otp } = props || {};
    const endPoint = apiConstants.verifyOtp;
    const data = await API.userService.post(endPoint, { phone: mobileNumber, otp });

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};

export const getUserProfile = async () => {
    const endPoint = apiConstants.userProfile;
    const data = await API.userService.get(endPoint);

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};

export const onUpdateUserProfile = async (props: UserProfileProps) => {
    const endPoint = apiConstants.userProfile;
    const data = await API.userService.put(endPoint, props);

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};

export const onUserLogout = async () => {
    const endPoint = apiConstants.userLogout;
    const data = await API.userService.post(endPoint);

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};

