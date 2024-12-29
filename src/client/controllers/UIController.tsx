import { Controller, OnStart } from "@flamework/core";
import React from "@rbxts/react";
import { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import App from "ui/App";

@Controller()
export class UIController implements OnStart {
    onStart() {
        const playerGui = Players.LocalPlayer.FindFirstChild("PlayerGui")!

        const root = createRoot(new Instance("Folder"));
        root.render(
            <StrictMode>
                {createPortal(<App />, playerGui)}
            </StrictMode>
        );
    }
}
