import { Controller, OnStart } from "@flamework/core";
import { createBroadcastReceiver, loggerMiddleware } from "@rbxts/reflex";
import { Events } from "client/network";
import { store } from "client/store";

import { $NODE_ENV } from "rbxts-transform-env"

@Controller()
export class ReflexController implements OnStart {
    onStart() {
        const receiver = createBroadcastReceiver({
            start: async () => Events.reflex.start(),
        });

        Events.reflex.dispatch.connect((actions) => receiver.dispatch(actions))

        if ($NODE_ENV === "production") store.applyMiddleware(receiver.middleware)
        else store.applyMiddleware(receiver.middleware, loggerMiddleware)
    }
}
