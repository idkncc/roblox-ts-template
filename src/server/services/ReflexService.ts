import { OnStart, Service } from "@flamework/core";

import { createBroadcaster } from "@rbxts/reflex";
import { slices } from "shared/slices";
import { store } from "server/store";

import { Events } from "server/network";

@Service()
export class ReflexService implements OnStart {
    onStart() {
        const broadcaster = createBroadcaster({
            producers: slices,
            dispatch: (player, actions) => Events.reflex.dispatch(player, actions)
        });

        Events.reflex.start.connect((player) => broadcaster.start(player))

        store.applyMiddleware(broadcaster.middleware)
    }
}
