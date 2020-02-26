import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
// import LinearGradient from "react-native-linear-gradient"
import style from "./style_liveList"

interface Props{
    liveList: Array<any>
}

interface State{

}

export default class LiveList extends Component< Props, State> {
    render() {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={style.wrap}
                >
                    {
                        this.props.liveList.map( item =>{
                            return (
                                <View
                                    key={item._id}
                                    style={style.item}
                                >
                                    <ImageBackground style={{flex: 1}} source={{uri: item.cover_url}}>
                                        <View
                                            style={style.item_tag}
                                        >
                                            <Text style={style.item_tag_text}>直播中</Text>
                                        </View>
                                        <View
                                            style={style.item_title}
                                        >
                                            <Text style={style.item_title_text} numberOfLines={1}>{item.name}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            )
                        })
                    }    
                </View>
            </ScrollView>
        )
    }
}
