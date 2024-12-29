import React from "@rbxts/react";

import HelloWorld from "ui/components/HelloWorld";

export default function App() {
    return (
        <screengui
            ResetOnSpawn={false}
            ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
        >
            <HelloWorld text="Hello, World!" />
        </screengui>
    )
}
