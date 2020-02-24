import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { get } from "../../tools/http.js"

import style from "./style_recommend.js"
import Banner from "./banner/Banner"
import CatalogList from  "./catalogList/CatalogList"
import SmallBanner from "./smallBanner/SmallBanner"
interface Props{

}

interface State{
    bannerList: Array<any>,
    smallBannerList: Array<any>
}
// 链接：https://pan.baidu.com/s/1XXKcO1a7qur4dFlQ1uPuUQ 
// 提取码：3irz

export default class Recommend extends Component< Props, State> {

    state={
        bannerList:[],
        smallBannerList: [{
            pic: "http://static.missevan.com/mimages/202001/26/1c41b8e891d951b03f57f3170a8cffd5121546.jpg",
            title: "非天夜翔原著|《定海浮生录》广播剧 第一季 第七集",
            url: "https://www.missevan.com/sound/1727400"
        },{
            pic: "http://static.missevan.com/mimages/202002/01/b3926da420695d1ceabf2d096804571f150528.jpg",
            title: "木苏里原著| 玄幻广播剧《铜钱龛世》第一季·第十三集",
            url: "https://www.missevan.com/sound/1725823"
        }]
    }

    async componentDidMount(){
        let list= await get({
            // url:"https://www.missevan.com/mobileWeb/newHomepage3"
            url:"https://static.missevan.com/home/sounds/202002/23/recommend_5e5233658f2a9.json"
        })
        console.log(list)
        this.setState({
            // bannerList:list.info.banner
            bannerList:list.links
        })
    }

    render() {
        return (
            <ScrollView>
                <View
                    style={style.wrap}
                >
                    <Banner bannerList={this.state.bannerList}></Banner>
                    <CatalogList></CatalogList>
                    <SmallBanner smallBannerList={this.state.smallBannerList}></SmallBanner>
                </View>
            </ScrollView>
        )
    }
}
