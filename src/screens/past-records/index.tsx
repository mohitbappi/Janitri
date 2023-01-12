import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { strings } from "../../assets/strings";
import { Header } from "../../components/header";
import { Loader } from "../../components/loader";
import { navigations } from "../../config/app-navigation/constant";
import { usePastRecords } from "../../network/hooks/track-session-service/use-past-records";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";

export interface PastRecordsProps {
	navigation: NavigationContainerRef;
	route: {
		params: {
			userId: number;
		};
	};
}

export interface Records {
	date: string;
	start: string;
	duration: string;
	kicks: string;
}

export const PastRecords = (props: PastRecordsProps) => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const { navigation, route } = props || {};
	const { userId } = route?.params || {};

	const { data: pastRecords, isFetching } = usePastRecords(userId);
	const { monitoringSessions } = pastRecords || {};

	const renderItem: ListRenderItem<Records> = ({ item }) => {
		const { date, duration, kicks, start } = item || {};

		return (
			<View style={styles.tableBody}>
				<Text style={styles.value}>{date}</Text>
				<Text style={[styles.value, styles.start]}>{start}</Text>
				<Text numberOfLines={1} style={[styles.value, styles.duration]}>
					{duration}
				</Text>
				<Text style={[styles.value, styles.kicks]}>{kicks}</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Loader visible={isFetching} />
			<Header
				onPressBack={() => navigation.goBack()}
				title={`${strings.babyKicks} - ${strings.records}`}
				hasInfoIcon
				onPressInfo={() =>
					navigationRouter([{ name: navigations.INFORMATION }])
				}
			/>
			<View style={styles.bottomView}>
				<Text style={styles.bottom}>{strings.takeScreenshot}</Text>
			</View>
			<View style={styles.tableHeader}>
				<Text style={styles.key}>{strings.date}</Text>
				<Text style={styles.key}>{strings.start}</Text>
				<Text style={styles.key}>{strings.duration}</Text>
				<Text style={styles.key}>{strings.kicks}</Text>
			</View>
			<FlatList
				data={monitoringSessions}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};
