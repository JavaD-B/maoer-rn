import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import { Tabs, Icon } from "@ant-design/react-native"
import style from "./style_home"
import boy from "../../assets/boy.png"

import Recommend from "../../component/recommend/Recommend"
import Classification from '../../component/classification/Classification';

interface Props{

}

interface State{
    sexType: string,
    tabs:Array<any>,
    page:String
}

export default class Home extends Component<Props, State> {

    state={
        sexType: "boy",
        tabs:[
            { title: "直播" },
            { title: "推荐" },
            { title: "分类" }
        ],
        page:'推荐'
    }

    changeTab=(tabProps,i)=>{
        return ()=>{
            tabProps.onTabClick&&tabProps.onTabClick(this.state.tabs[i],i)
            tabProps.goToTab&&tabProps.goToTab(i)
        }
    }

    onTabChange=(e)=>{
        this.setState({
            page:e.title
        })
    }

    render() {
        return (
            <View
                style={style.home}
            >
                <Tabs
                    renderTabBar={
                        (tabProps)=>{
                            return (
                                <View
                                    style={style.navigator}
                                >
                                    <View style={style.iconWrap}>
                                        <Image source={this.state.sexType==="boy"?boy:null} style={style.boyIcon}/>
                                    </View>
                                    {
                                        this.state.tabs.map((item,i)=>(
                                            <TouchableWithoutFeedback
                                                key={i}
                                                onPress={this.changeTab(tabProps,i)}
                                            >
                                                <View
                                                    style={{...style.tag,...(this.state.page===item.title&&style.tag_active)}}
                                                >
                                                    <Text style={{...style.tag_text,...(this.state.page===item.title&&style.tag_text_active)}}>{item.title}</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        ))
                                    }
                                   <View style={style.top_left}>
                                       <Icon name="search" color="#3d3d3d" size="xs"/>
                                       <Icon name="down"   color="#3d3d3d" size="xs"/>
                                   </View>
                                </View>
                            )
                        }
                    }
                    tabs={this.state.tabs}
                    tabBarUnderlineStyle={{backgroundColor:"#fff"}}
                    initialPage={1}
                    onChange={this.onTabChange}
                >
                    <Classification></Classification>
                    <Recommend></Recommend>
                    <View>
                        <Text>123</Text>
                    </View>
                </Tabs>
            </View>
        )
    }
}
