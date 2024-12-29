import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";

import HelloWorld from "ui/components/HelloWorld";

import { CreateReactStory } from "@rbxts/ui-labs";

export = CreateReactStory(
    {
        name: "HelloWorld component",
        react: React,
        reactRoblox: ReactRoblox,
        controls: {
            text: "Hello, World!"
        },
    },
    (props) => {
        return (
            <HelloWorld text={props.controls.text} />
        )
    }
)
