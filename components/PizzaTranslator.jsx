import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const PizzaTranslator = () => {
    const [text, setText] = useState("")
    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder='type your text here'
                onChangeText={(text) => setText(text)}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 40 }}>
                {
                    text
                        .split(" ")
                        .map(text => text && "🍕")
                        .join(" ")
                }
            </Text>
        </View>
    )
}

export default PizzaTranslator