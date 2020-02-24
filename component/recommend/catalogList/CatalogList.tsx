import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import style from "./style_catalogList"

interface Props{

}

interface State{

}

export default class CatalogList extends Component< Props, State> {

    state={
        icons: [{
			"work_id": 5,
			"title": "剑网 3",
			"icon": "http://static.missevan.com/image/works/201911/06/935f792e140a2efc4c9ac3b839af81a8140242.png",
			"notice": 0,
			"free": [],
			"url": "missevan://voice/homepage?work_id=5",
			"msg_num": 1
		}, {
			"id": 6,
			"url": "missevan://live",
			"title": "直播",
			"icon": "http://static.missevan.com/system/app/icons/normal/b631054382650c6c769e9c06df784823.png"
		}, {
			"id": 4,
			"url": "https://m.missevan.com/summerdrama",
			"title": "精品周更",
			"icon": "http://static.missevan.com/system/app/icons/normal/af6c576fc033497ebd2cc63db98139c4.png"
		}, {
			"id": 3,
			"url": "missevan://drama",
			"title": "广播剧",
			"icon": "http://static.missevan.com/system/app/icons/normal/e356df9347b3e92b7fddda82a5914f7c.png"
		}, {
			"id": 5,
			"url": "missevan://mall/homepage",
			"title": "猫耳商城",
			"icon": "http://static.missevan.com/system/app/icons/normal/19bb54871f04e0c366fe5d73bdb9245e.png"
		}, {
			"id": 2,
			"url": "missevan://powersound",
			"title": "启动音",
			"icon": "http://static.missevan.com/system/app/icons/normal/ed7f20365af639653f58c61ed8779928.png"
		}]
    }

    render() {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={style.wrap}
            >
                {
                    this.state.icons.map( item =>{
                        return (
                            <View
                                key={item.url}
                                style={style.item}
                            >
                                <Image
                                    source={{uri: item.icon}}
                                    style={style.icon}
                                ></Image>
                                <Text style={style.text}>{item.title}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}
