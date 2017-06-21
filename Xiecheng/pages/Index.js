import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Swiper = require('react-native-swiper');
var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];
var Slider = React.createClass({
    render: function () {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
                <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
            </Swiper>
        );
    }
});

export default class Index extends Component {
    render() {
        return (
            <View>
                {/*<Slider/>*/}
                <View style={{flex: 1}}>
                    <Image
                        style={{
                            width: 55,
                            height: 55,
                            marginTop: 14,
                            resizeMode: Image.resizeMode.cover
                        }}
                        source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}>
                    </Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height:80,
    },
});

module.exports = Index;