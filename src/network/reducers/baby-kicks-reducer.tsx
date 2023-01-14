import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface KickData {
	kicks: number;
	first: string;
	last: string;
}

export interface Timer {
	minutes: number;
	seconds: number;
}

export interface BabyKicksState {
	kickData: KickData;
	timer: Timer;
	kickDataSet: object;
}

export const initialState: BabyKicksState = {
	kickData: {
		kicks: 0,
		first: "-",
		last: "-",
	},
	timer: {
		minutes: 0,
		seconds: 0,
	},
	kickDataSet: {},
};

const babyKicksSlice = createSlice({
	name: "babyKicks",
	initialState,
	reducers: {
		setKickData: (state, action: PayloadAction<KickData>) => ({
			...state,
			kickData: action.payload,
		}),
		setKickDataSet: (state, action: PayloadAction<object>) => ({
			...state,
			kickDataSet: { ...state.kickDataSet, ...action.payload },
		}),
		setTimer: (state, action: PayloadAction<Timer>) => ({
			...state,
			timer: action.payload,
		}),
		endTimer: () => initialState,
	},
});

export const babyKicksReducer = babyKicksSlice.reducer;

export const { setKickData, setKickDataSet, setTimer, endTimer } =
	babyKicksSlice.actions;
