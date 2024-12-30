import { CombineStates } from "@rbxts/reflex";

import { counterSlice } from "./counter";

export type SharedState = CombineStates<typeof slices>;

export const slices = {
    counter: counterSlice,
};
