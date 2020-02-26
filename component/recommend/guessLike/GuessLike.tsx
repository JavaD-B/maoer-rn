import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from "./style_guessLike"

import TopTitle from "../topTitle/TopTitle"
import AudioItem from "../audioItem/AudioItem"
import { Icon } from "@ant-design/react-native"

interface Props{
    guessLikeList: Array<any>
}

interface State{

}

export default class GuseeLike extends Component< Props, State> {
    render() {
        return (
            <View style={style.wrap}>
                <TopTitle></TopTitle>
                {
                    this.props.guessLikeList.map( item =>{
                        return (
                            <AudioItem item={item}></AudioItem>
                        )
                    })
                }    
                <View style={style.button_wrap}>
                    <View style={style.button}>
                        <Text style={style.button_text}>换一批</Text>
                        <Icon name="sync" size={16} color="#3d3d3d"></Icon>
                    </View>
                </View>
            </View>
        )
    }
}
