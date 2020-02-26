import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from "./style_topTitle"

interface Props{

}

interface State{

}

export default class TopTitle extends Component< Props, State> {
    render() {
        return (
            <View style={style.wrap}>
                <Text style={style.text}> 猜你喜欢 </Text>
            </View>
        )
    }
}
