import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import style from "./style_audioItem"

import { Icon } from "@ant-design/react-native"
import Item from '@ant-design/react-native/lib/list/ListItem';

interface Props{
    item: any
}

interface State{

}

export default class AudioItem extends Component< Props, State> {
    render() {
        return (
            <View style={style.wrap}>
                <View style={style.top}>
                    <ImageBackground source={{uri: this.props.item.front_cover}} style={style.topBg}>
                        <View style={style.top_container}>
                            <View style={style.top_box}>
                                <Icon name="play-square" color="#fff" size={12}></Icon>
                                <Text style={style.top_text}>{this.props.item.view_count}</Text>
                            </View>
                            <View style={style.top_box}>
                                <Icon name="profile" color="#fff" size={12}></Icon>
                                <Text style={style.top_text}>{this.props.item.all_comments}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <Text style={style.bottom} numberOfLines={2}>{this.props.item. soundstr}</Text>
            </View>
        )
    }
}
