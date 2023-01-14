import moment from "moment";

export const toTwoDigitNumber = (num: number) => {
	if (num < 10) {
		return `0${num}`;
	}
	return `${num}`;
};

export const getTimeFromDate = (date: Date) => moment(date).format("hh:mm A");

export const getDate = (date: Date) => moment(date).format("MMM DD");

export const getDurationBetweenTwoDates = (date1: Date, date2: Date) => {
	const firstDate = new Date(date1) as unknown as number;
	const secondDate = new Date(date2) as unknown as number;
	const diffTime = Math.abs(secondDate - firstDate);

	const seconds = parseInt((diffTime / 1000) as unknown as string, 10);
	if (seconds <= 60) {
		return `${seconds}s`;
	}

	const minutes = parseInt((seconds / 60) as unknown as string, 10);
	return `${minutes}m`;
};

export const convertUTCToIST = (date: Date) => {
	const offset = new Date().getTimezoneOffset();
	const endTime = date.setMinutes(date.getMinutes() - offset);

	return new Date(endTime);
};
