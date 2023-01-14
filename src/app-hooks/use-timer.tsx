import { useEffect, useState } from "react";
import BackgroundTimer from "react-native-background-timer";
import { useDispatch } from "react-redux";
import {
	endTimer,
	setTimer,
	Timer,
} from "../network/reducers/baby-kicks-reducer";

type Props = {
	endMinutes: number;
	endSeconds: number;
	startMinutes: number;
	startSeconds: number;
	onEnd?: () => void;
};

export const useTimer = (props: Props) => {
	const { endMinutes, endSeconds, onEnd, startMinutes, startSeconds } = props;
	const dispatch = useDispatch();
	const [localTimer, setLocalTimer] = useState({
		minutes: 0,
		seconds: 0,
	});

	const setTime = (payload: Timer) => {
		dispatch(setTimer(payload));
	};

	const resetTimer = () => {
		dispatch(endTimer());
		setLocalTimer({
			minutes: 0,
			seconds: 0,
		});
		BackgroundTimer.stopBackgroundTimer();
	};

	const startTimer = () => {
		BackgroundTimer.runBackgroundTimer(() => {
			setLocalTimer((_timer) => {
				if (_timer.minutes >= endMinutes && _timer.seconds === endSeconds) {
					resetTimer();
					onEnd?.();
					return {
						minutes: 0,
						seconds: 0,
					};
				}
				setTime({
					minutes: _timer.seconds === 59 ? _timer.minutes + 1 : _timer.minutes,
					seconds: _timer.seconds === 59 ? 0 : _timer.seconds + 1,
				});
				return {
					minutes: _timer.seconds === 59 ? _timer.minutes + 1 : _timer.minutes,
					seconds: _timer.seconds === 59 ? 0 : _timer.seconds + 1,
				};
			});
		}, 1000);
	};

	useEffect(() => {
		if (localTimer.minutes >= endMinutes && localTimer.seconds === endSeconds) {
			resetTimer();
			return;
		}
		setLocalTimer({
			minutes: startMinutes,
			seconds: startSeconds,
		});
	}, [startMinutes, startSeconds]);

	return { timer: localTimer, startTimer, resetTimer };
};
