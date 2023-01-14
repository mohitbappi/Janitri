import { useQuery } from "@tanstack/react-query";
import {
	getDate,
	getDurationBetweenTwoDates,
	getTimeFromDate,
} from "../../../utils/common";
import { getPastRecords } from "../../api/services/track-session-service";
import { apiKeys } from "../../constant";

export interface MonitoringSessions {
	start_time: Date;
	end_time: Date;
	datasets: {
		params_data: {
			baby_kicks: {
				values: object;
			};
		};
	}[];
}

export interface Root {
	monitoring_sessions: MonitoringSessions[];
}

export interface ParsedMonitoringSessions {
	start: string;
	date: string;
	kicks: string;
	duration: string;
}

export interface ParsedData {
	monitoringSessions: ParsedMonitoringSessions[];
}

const pastRecordsParser = (response: Root) => {
	const { monitoring_sessions } = response || {};

	return {
		monitoringSessions: monitoring_sessions?.map((session) => ({
			start: getTimeFromDate(session?.start_time),
			kicks: `${Object.keys(session?.datasets?.[0]?.params_data?.baby_kicks?.values || {})?.length}`,
			date: getDate(session?.start_time),
			duration: getDurationBetweenTwoDates(
				session?.start_time,
				session?.end_time
			),
		})),
	} as ParsedData;
};

export const usePastRecords = (userId: number) => {
	const query = useQuery([apiKeys.pastRecords], () => getPastRecords(userId), {
		staleTime: 0,
	});

	return {
		...query,
		data: pastRecordsParser(query.data?.data as Root),
		isSuccess: query?.data?.isSuccess,
		isError: query?.data?.isError,
	};
};
