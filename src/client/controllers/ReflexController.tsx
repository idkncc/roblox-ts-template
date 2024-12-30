import { Controller, OnStart } from "@flamework/core";
import { createBroadcastReceiver, loggerMiddleware } from "@rbxts/reflex";
import { Events } from "client/network";
import { store } from "client/store";

@Controller()
export class ReflexController implements OnStart {
    onStart() {
        const receiver = createBroadcastReceiver({
            start: async () => Events.reflex.start(),
        });

        Events.reflex.dispatch.connect((actions) => receiver.dispatch(actions))

        store.applyMiddleware(receiver.middleware, loggerMiddleware)
    }
}
