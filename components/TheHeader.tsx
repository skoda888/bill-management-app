import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NotificationBell from './svgs/NotificationBell';
import Svg, { 
    Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
  } from 'react-native-svg';
import HamburgerMenuIcon from './svgs/HamburgerMenuIcon';

const TheHeader = () => {
    return (
        <View style={ styleSheet.theHeader }>
            <View style={ styleSheet.theProfileAndNotificationsSection }>
                <Image source={ require('../assets/img/profile-picture-girl.jpg') } style={styleSheet.theProfilePicture} />
                <NotificationBell />
            </View>
            {/* <HamburgerMenuIcon /> */}
        </View>
    )
}

const styleSheet = StyleSheet.create({
    theHeader: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    theProfileAndNotificationsSection: {
        width: '41%',
        flex: 0.6,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F3F3F3',
        borderRadius: 25
    },

    theProfilePicture: {
        width: 41,
        height: 41,
        borderRadius: 50,
        marginLeft: 15
    }
});


export default TheHeader;