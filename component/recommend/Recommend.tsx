import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { get } from "../../tools/http.js"

import style from "./style_recommend.js"
import Banner from "./banner/Banner"
import CatalogList from  "./catalogList/CatalogList"
import SmallBanner from "./smallBanner/SmallBanner"
import LiveList from './liveList/LiveList'
import GuessLike from "./guessLike/GuessLike"
import Advert from './advert/Advert';
interface Props{

}

interface State{
    bannerList: Array<any>,
    smallBannerList: Array<any>,
    liveList: Array<any>,
    guessLikeList: Array<any>
}
// 链接：https://pan.baidu.com/s/1XXKcO1a7qur4dFlQ1uPuUQ 
// 提取码：3irz

export default class Recommend extends Component< Props, State> {

    state={
        bannerList:[],
        smallBannerList: [{
            "url": "missevan://omikuji/draw?work_id=6",
            "pic": "http://static.missevan.com/mimages/201912/31/3b9a792206e4f4fdc27a52a828e09628135053.jpg",
            "type": "",
            "sort": 0
        }, {
            "url": "missevan://voice/1",
            "pic": "http://static.missevan.com/mimages/201911/07/9889908f9f267c28c20fa8b43cd9a0d9115958.jpg",
            "type": "",
            "sort": 2
        }, {
            "url": "missevan://omikuji/draw?work_id=4",
            "pic": "http://static.missevan.com/mimages/201908/26/b149c8033e670bdec643ea9f69dce9ea110436.jpg",
            "type": "",
            "sort": 3
        }, {
            "url": "missevan://omikuji/draw?work_id=3",
            "pic": "http://static.missevan.com/mimages/201907/29/98bfd54d61a989e77ae9b0205f8a4b08103803.jpg",
            "type": "",
            "sort": 4
        }, {
            "url": "missevan://omikuji/draw?work_id=2",
            "pic": "http://static.missevan.com/mimages/201906/06/6ee3da896ac5c1c7ff9e17153ad938cb161340.jpg",
            "type": "",
            "sort": 5
        }],
        liveList: [],
        guessLikeList: [{
            "id": 86195,
            "soundstr": "【催眠】脑袋进汽水的激爽感觉",
            "catalog_id": 101,
            "create_time": 1451287043,
            "cover_image": "201512/28/f90967ba421f40e94d8adefd181b306d153108.jpg",
            "duration": 626834,
            "view_count": 924791,
            "all_comments": 2376,
            "video": false,
            "front_cover": "http://static.missevan.com/coversmini/201512/28/f90967ba421f40e94d8adefd181b306d153108.jpg",
            "type": 3
        }, {
            "id": 213454,
            "soundstr": "精分系列之 拿小拳拳捶死你",
            "catalog_id": 36,
            "create_time": 1486512595,
            "cover_image": "201702/08/64c89fd07d25f5e74b751951fec4505e080953.jpg",
            "duration": 192426,
            "view_count": 8000,
            "all_comments": 116,
            "video": false,
            "front_cover": "http://static.missevan.com/coversmini/201702/08/64c89fd07d25f5e74b751951fec4505e080953.jpg",
            "type": 3
        }, {
            "id": 342206,
            "soundstr": "你的表白",
            "catalog_id": 18,
            "create_time": 1495176710,
            "cover_image": "201705/19/15bbf0e2ae7a2fc04fdde45b8f8f45f3145148.jpg",
            "duration": 311249,
            "view_count": 84089,
            "all_comments": 628,
            "video": false,
            "front_cover": "http://static.missevan.com/coversmini/201705/19/15bbf0e2ae7a2fc04fdde45b8f8f45f3145148.jpg",
            "type": 3
        }, {
            "id": 511340,
            "soundstr": "欢迎来到实力至上主义的教室01",
            "catalog_id": 16,
            "create_time": 1501691183,
            "cover_image": "201708/03/309ac4e6d90c3f43538c019d5e203dc0002621.jpg",
            "duration": 1205063,
            "view_count": 118758,
            "all_comments": 423,
            "video": false,
            "front_cover": "http://static.missevan.com/coversmini/201708/03/309ac4e6d90c3f43538c019d5e203dc0002621.jpg",
            "type": 3
        }, {
            "id": 525317,
            "soundstr": "“就算大雨把整座城市颠倒 我会给你怀抱”",
            "catalog_id": 101,
            "create_time": 1502804165,
            "cover_image": "201708/15/6b2cd1e67e8e24c5b4f1ac17d8d2d19e213604.jpeg",
            "duration": 349466,
            "view_count": 115385,
            "all_comments": 551,
            "video": false,
            "front_cover": "http://static.missevan.com/coversmini/201708/15/6b2cd1e67e8e24c5b4f1ac17d8d2d19e213604.jpeg",
            "type": 3
        }, {
            "id": 1731629,
            "soundstr": "古风纯爱剧情歌《仙道第一小白脸》——《折竹》",
            "catalog_id": 75,
            "create_time": 1582520148,
            "cover_image": "202002/24/e14b4b226f0c7de7aeab8bcb1e373576125539.jpg",
            "duration": 328125,
            "view_count": 15091,
            "all_comments": 1162,
            "video": false,
            "front_cover": "http://static.missevan.com/coversmini/202002/24/e14b4b226f0c7de7aeab8bcb1e373576125539.jpg",
            "type": 3
        }]
    }

    async componentDidMount(){
        let list= await get({
            // url:"https://www.missevan.com/mobileWeb/newHomepage3"
            url:"https://static.missevan.com/home/sounds/202002/25/recommend_5e551a6790131.json"
        })
        let liveList= await get({
            url: "https://fm.missevan.com/api/chatroom/top"
        })
        this.setState({
            // bannerList:list.info.banner
            bannerList: list.info.links,
            liveList: liveList.info.rooms
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
                    <LiveList liveList={this.state.liveList}></LiveList>
                    <GuessLike guessLikeList={this.state.guessLikeList}></GuessLike>
                    <Advert></Advert>
                </View>
            </ScrollView>
        )
    }
}
