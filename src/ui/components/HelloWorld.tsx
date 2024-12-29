import React from "@rbxts/react";

import { Text } from "@rbxts/better-react-components";

export default function HelloWorld({ text }: { text: string }) {
    return (
        <Text
            text={text}

            size={new UDim2(0, 300, 0, 200)}

            textColor="#000"
            background="#FFF"

            font={"BuilderSansBold"}
            textSize={24}
        />
    )
}
