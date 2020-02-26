import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import { Carousel } from "@ant-design/react-native"
import style from "./style_smallBanner"

interface Props{
    smallBannerList: Array<any>
}

interface State{

}

export default class SmallBanner extends Component< Props, State> {
    render() {
        return (
            <View
                style={style.wrap}
            >
                <Carousel
                    autoplay
                    infinite
                >
                    {
                        this.props.smallBannerList.map(item => {
                            return (
                                <View key={item.pic+"smallBanner"}>
                                    <Image source={{uri: item.pic}} style={style.item}/>
                                </View>
                            )
                        })
                    }
                </Carousel>
            </View>
        )
    }
}
