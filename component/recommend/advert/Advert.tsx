import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import style from "./style_advert"

interface Props{

}

interface State{
    
}

export default class Advert extends Component< Props, State> {
    render() {
        return (
            <View style={style.wrap}>
                <Image style={style.img} source={{uri: "http://static.missevan.com/mimages/202001/26/1c41b8e891d951b03f57f3170a8cffd5121546.jpg"}}></Image>
            </View>
        )
    }
}
