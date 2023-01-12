import { API } from "..";
import { apiConstants } from "../../constant";
import { getApiResponse } from "../../utils/get-api-response";

export interface SessionPayload {
    userId: number
    body: {
        start_time: Date
        name: string
        category: string
    }
}

export interface EndSessionPayload {
    userId: number
    sessionId: number
    body: {
        end_time: Date
        status: string
    }
}

export const onStartSession = async (payload: SessionPayload) => {
    const { body, userId } = payload || {}

    const endPoint = `${apiConstants.startSession.baseUrl}${userId}${apiConstants.startSession.endUrl}`;
    const data = await API.trackSessionService.post(endPoint, body);

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};

export const onEndSession = async (payload: EndSessionPayload) => {
    const { body, userId, sessionId } = payload || {}

    const endPoint = `${apiConstants.endSession.baseUrl}${userId}${apiConstants.endSession.endUrl}${sessionId}/`;
    const data = await API.trackSessionService.put(endPoint, body);

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};

export const getPastRecords = async (userId: number) => {
    const endPoint = `${apiConstants.pastRecords.baseUrl}${userId}${apiConstants.pastRecords.endUrl}`;
    const data = await API.trackSessionService.get(endPoint);

    try {
        const response = getApiResponse(data);
        return response;
    } catch {
        return null;
    }
};
