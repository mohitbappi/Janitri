import { NavigationContainerRef } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { useTimer } from "../../app-hooks/use-timer";
import { clock, reset } from "../../assets/images";
import { strings } from "../../assets/strings";
import { CircularProgressWithImage } from "../../components/circular-progress-with-Image";
import { Header } from "../../components/header";
import { ImageComponent } from "../../components/image-component";
import { Loader } from "../../components/loader";
import { SecondaryButton } from "../../components/secondary-button";
import { navigations } from "../../config/app-navigation/constant";
import { useCreateDataSet } from "../../network/hooks/track-session-service/use-create-data-set";
import { useEndSession } from "../../network/hooks/track-session-service/use-end-session";
import { useStartSession } from "../../network/hooks/track-session-service/use-start-session";
import { useUserProfile } from "../../network/hooks/user-service/use-user-profile";
import {
	setKickData,
	setKickDataSet,
} from "../../network/reducers/baby-kicks-reducer";
import { StoreType } from "../../network/reducers/store";
import { alert } from "../../utils/alert";
import { getTimeFromDate, toTwoDigitNumber } from "../../utils/common";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";

export interface BabyKicksProps {
	navigation: NavigationContainerRef;
}

export const BabyKicks = (props: BabyKicksProps) => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const { navigation } = props || {};
	const dispatch = useDispatch();
	const { kickData, timer, kickDataSet } = useSelector(
		(state: StoreType) => state.babyKicksReducer
	);

	const onSessionAutoComplete = () => {
		alert(strings.sessionAuto, strings.sessionLastAuto, endSession);
	};

	const {
		timer: timerData,
		startTimer,
		resetTimer,
	} = useTimer({
		startMinutes: timer?.minutes,
		startSeconds: timer?.seconds,
		endMinutes: 120,
		endSeconds: 0,
		onEnd: onSessionAutoComplete,
	});
	const { minutes, seconds } = timerData || {};
	const [sessionId, setSessionId] = useState(0);

	const { data: userProfile, refetch: fetchUserProfile } = useUserProfile();
	const { id } = userProfile || {};

	const { mutateAsync: onStartSession, isLoading } = useStartSession();

	const { mutateAsync: onCreateDataSet } = useCreateDataSet();

	const { mutateAsync: onEndSession, isLoading: endSessionLoading } =
		useEndSession();

	useEffect(() => {
		fetchUserProfile();
		if (kickData?.kicks) {
			startTimer();
		}
	}, []);

	const data = [
		{
			label: strings.kicks,
			value: kickData?.kicks,
		},
		{
			label: strings.first,
			value: kickData?.first,
		},
		{
			label: strings.last,
			value: kickData?.last,
		},
	];

	const onReset = () => {
		alert(strings.reset, strings.dataLost, resetSession);
	};

	const onNavigateToPastRecord = () => {
		navigationRouter([
			{ name: navigations.PAST_RECORDS, params: { userId: id } },
		]);
	};

	const createDataSet = async () => {
		const payload = {
			userId: id,
			sessionId,
			body: {
				data_time: new Date(),
				params_data: {
					baby_kicks: {
						values: kickDataSet,
						meta_data: {},
					},
				},
			},
		};

		await onCreateDataSet(payload);
	};

	const endSession = async () => {
		await createDataSet();

		const payload = {
			userId: id,
			sessionId,
			body: {
				end_time: new Date(),
				status: "completed",
			},
		};

		const res = await onEndSession(payload);

		if (res?.isSuccess) {
			resetSession();
			onNavigateToPastRecord();
		}
	};

	const onCompleteSession = () => {
		alert(strings.completeSession, strings.youSure, endSession);
	};

	const onIncreaseKick = async () => {
		let time = kickData?.first;
		if (kickData?.kicks === 0) {
			const payload = {
				userId: id,
				body: {
					start_time: new Date(),
					name: "Session",
					category: "baby_kicks",
				},
			};

			try {
				const res = await onStartSession(payload);
				const { id: sessionIdNumber } = (res?.data as { id: number }) || {};
				setSessionId(sessionIdNumber);
			} catch {
				// Error
			}

			startTimer();
			time = getTimeFromDate(new Date());
		}

		dispatch(
			setKickData({
				...kickData,
				kicks: kickData?.kicks + 1,
				first: time,
				last: getTimeFromDate(new Date()),
			})
		);

		const epochTime = new Date().getTime() / 1000.0;
		dispatch(setKickDataSet({ [epochTime]: "200" }));
	};

	const getKickProgress = () => {
		if (kickData?.kicks < 20) {
			return kickData?.kicks * 5;
		}
		return 100;
	};

	const resetSession = () => {
		resetTimer();
	};

	return (
		<View style={styles.container}>
			<Loader showOverlay visible={isLoading || endSessionLoading} />
			<Header
				onPressBack={() => navigation.goBack()}
				title={strings.babyKicks}
				hasInfoIcon
				onPressInfo={() =>
					navigationRouter([{ name: navigations.INFORMATION }])
				}
			/>
			<View style={styles.subHeader}>
				{data.map((ele, index) => {
					return (
						<View key={ele?.label}>
							<Text style={[styles.value, index !== 0 && styles.black]}>
								{ele?.value}
							</Text>
							<Text style={styles.label}>{ele?.label}</Text>
						</View>
					);
				})}
			</View>
			{!!kickData?.kicks ? (
				<View style={styles.timerView}>
					<View style={styles.rowOnly}>
						<ImageComponent source={clock} style={styles.clock} />
						<Text style={styles.timer}>{`${toTwoDigitNumber(
							minutes
						)}:${toTwoDigitNumber(seconds)}`}</Text>
					</View>
					<Text style={styles.maxHrs}>({strings.maxHrs})</Text>
				</View>
			) : (
				<Text style={styles.desc}>{strings.tapIcon}</Text>
			)}
			<TouchableOpacity activeOpacity={1} onPress={onIncreaseKick}>
				<CircularProgressWithImage
					progressPercent={getKickProgress()}
					size={200}
					strokeWidth={15}
					style={styles.progress}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.recordView} activeOpacity={0.8}>
				<TouchableOpacity
					style={styles.record}
					activeOpacity={0.8}
					onPress={onNavigateToPastRecord}
				>
					<Text style={styles.records}>{strings.viewPastRecords}</Text>
				</TouchableOpacity>
				{!!kickData?.kicks && (
					<View style={styles.row}>
						<SecondaryButton
							image={reset}
							onPress={onReset}
							buttonStyle={[styles.buttonStyle, styles.margin]}
							ctaLabel={strings.reset}
						/>
						<SecondaryButton
							onPress={onCompleteSession}
							buttonStyle={styles.buttonStyle}
							ctaLabel={strings.complete}
						/>
					</View>
				)}
			</TouchableOpacity>
		</View>
	);
};
