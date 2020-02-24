import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Carousel } from "@ant-design/react-native"
import style from "./style_banner"

interface Props{
    bannerList: Array<any>
}

interface State{
    
}

export default class Banner extends Component< Props, State> {


    render() {
        return (
            <View
                style={style.wrap}
            >
                {
                    this.props.bannerList.length>0?(
                        <Carousel
                            autoplay
                            infinite
                        >
                            {
                                this.props.bannerList.map( (item, index) =>{
                                    return(
                                        <View
                                            key={index}
                                        >
                                            <Image
                                                style={style.img}
                                                source={{uri: item.pic}}
                                            />
                                        </View>
                                    )
                                })
                            }
                        </Carousel>
                    ):(
                        null
                    )
                }
            </View>
        )
    }
}
