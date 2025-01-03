import { InferState, combineProducers } from "@rbxts/reflex";

import { slices } from "shared/slices";

export type RootState = InferState<typeof store>;

export const store = combineProducers({
    ...slices,
});
