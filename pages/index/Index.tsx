import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TabBar, Icon } from "@ant-design/react-native"
import logo_center from "../../assets/logo-center.png"
import myIcon from "../../assets/myIcon"
import styles from "./style_index"

import Home from "../home/Home"

interface Prop{

}

interface State{
    selectTab: string
}

export default class Index extends Component<Prop, State> {

    state={
        selectTab:"home"
    }

    onChangeTab=(tagname: string)=>{
        return ()=>{
            this.setState({
                selectTab:tagname
            })
        }
    }

    render() {
        return (
            <TabBar
                barTintColor="rgba(61,61,61,0.01)"
                tintColor="#3d3d3d"
                unselectedTintColor="#aaa"
            >
                <TabBar.Item
                    title="首页"
                    icon={<Icon name="home" color="#aaa"/>}
                    selectedIcon={<Icon name="home" />}
                    selected={this.state.selectTab==="home"}
                    onPress={this.onChangeTab("home")}
                >
                    <Home></Home>
                </TabBar.Item>
                <TabBar.Item
                    title="我听"
                    icon={<Icon name="compass" />}
                    selectedIcon={<Icon name="compass" />}
                    selected={this.state.selectTab==="listen"}
                    onPress={this.onChangeTab("listen")}
                >
                    <Home></Home>
                </TabBar.Item>
                <TabBar.Item
                    title=""
                    icon={<Image style={{height: 50, width: 70}} source={logo_center} />}
                    selectedIcon={<Image style={{height: 50, width: 70}} source={logo_center} />}
                    selected={this.state.selectTab==="detail"}
                    onPress={this.onChangeTab("detail")}
                >
                    <Home></Home>
                </TabBar.Item>
                <TabBar.Item
                    title="发现"
                    icon={<Icon name="search" />}
                    selectedIcon={<Icon name="search" />}
                    selected={this.state.selectTab==="find"}
                    onPress={this.onChangeTab("find")}
                >
                    <Home></Home>
                </TabBar.Item>
                <TabBar.Item
                    title="我的"
                    icon={<Icon name="user" />}
                    selectedIcon={<Icon name="user" />}
                    selected={this.state.selectTab==="mine"}
                    onPress={this.onChangeTab("mine")}
                >
                    <Home></Home>
                </TabBar.Item>
            </TabBar>
        )
    }
}
