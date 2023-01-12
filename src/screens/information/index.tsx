import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { strings } from "../../assets/strings";
import { Header } from "../../components/header";
import { data } from "./mock-data";
import { createStyleSheet } from "./style";

export interface InformationProps {
	navigation: NavigationContainerRef;
}

export interface InfoData {
	question: string;
	answer: string;
}

export const Information = (props: InformationProps) => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const { navigation } = props || {};

	const renderItem: ListRenderItem<InfoData> = ({ item }) => {
		const { answer, question } = item || {};

		return (
			<View>
				<Text style={styles.question}>{question}</Text>
				<Text style={styles.answer}>{answer}</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Header
				onPressBack={() => navigation.goBack()}
				title={`${strings.babyKicks} - ${strings.information}`}
			/>
			<FlatList data={data} renderItem={renderItem} />
		</View>
	);
};
