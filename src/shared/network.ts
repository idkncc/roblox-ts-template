import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";

interface ClientToServerEvents {
    reflex: {
        start(): void
    }
}

interface ServerToClientEvents {
    reflex: {
        dispatch(actions: BroadcastAction[]): void
    }
}

interface ClientToServerFunctions { }

interface ServerToClientFunctions { }

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
