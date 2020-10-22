
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { 
    Circle, Ellipse, G, TSpan, Text, TextPath, Image, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
  } from 'react-native-svg';

const NotificationBell = () => {
    return (
        <View style={styleSheet.theNotificationBell}>
            <Svg width="40" height="40" viewBox="0 0 18.899 23.238">
                <G id="notification-bell" transform="translate(307.02 22)">
                    <G id="bell" transform="translate(-307.02 -22)">
                    <Path id="Path_13" data-name="Path 13" d="M184.9,465.044a3.6,3.6,0,0,0,6.594,0Z" transform="translate(-178.752 -443.957)" fill="#29e298"/>
                    <Path id="Path_14" data-name="Path 14" d="M199.043,2.278a8.1,8.1,0,0,1,2.766.485V2.656A2.659,2.659,0,0,0,199.153,0h-.22a2.659,2.659,0,0,0-2.656,2.656v.105A8.118,8.118,0,0,1,199.043,2.278Z" transform="translate(-189.594 0)" fill="#29e298"/>
                    <Path id="Path_15" data-name="Path 15" d="M71.194,94.846H53.732a.707.707,0,0,1-.7-.526.647.647,0,0,1,.374-.744A3.6,3.6,0,0,0,54.531,92.1a16.507,16.507,0,0,0,1.176-6.754,6.761,6.761,0,0,1,13.511-.026c0,.009,0,.017,0,.026A16.507,16.507,0,0,0,70.394,92.1a3.6,3.6,0,0,0,1.128,1.477.647.647,0,0,1,.374.744A.707.707,0,0,1,71.194,94.846Zm.336-1.266h0Z" transform="translate(-53.013 -75.158)" fill="#29e298"/>
                    </G>
                </G>
            </Svg>
        </View>
    )
}

const styleSheet = StyleSheet.create({
    theNotificationBell: {
        marginLeft: 'auto',
        marginRight: 12
    }
});

export default NotificationBell;