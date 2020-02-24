import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from "./pages/index/Index"
import * as Font from 'expo-font';
import { AppLoading } from "expo"

interface Props{

}

interface State{
  isReady: boolean
}

export default class App extends Component< Props, State> {

  state={
    isReady:false
  }

  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }

  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Index></Index>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%"
  },
});
