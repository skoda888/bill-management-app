
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { 
    Circle, Ellipse, G, TSpan, Text, TextPath, Image, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
  } from 'react-native-svg';

const HamburgerMenuIcon = () => {
    return (
        <View style={styleSheet.hamburgerMenuIcon}>
            <Svg width="4.554" height="20.554" viewBox="0 0 4.554 20.554">
                <G id="hamburger-menu" transform="translate(-327 -28)">
                    <Path id="Path_7" data-name="Path 7" d="M2.277,0A2.277,2.277,0,1,1,0,2.277,2.277,2.277,0,0,1,2.277,0Z" transform="translate(327 28)" fill="#29e298"/>
                    <Path id="Path_8" data-name="Path 8" d="M2.277,0A2.277,2.277,0,1,1,0,2.277,2.277,2.277,0,0,1,2.277,0Z" transform="translate(327 36)" fill="#29e298"/>
                    <Path id="Path_9" data-name="Path 9" d="M2.277,0A2.277,2.277,0,1,1,0,2.277,2.277,2.277,0,0,1,2.277,0Z" transform="translate(327 44)" fill="#29e298"/>
                </G>
            </Svg>
        </View>
    )
}

const styleSheet = StyleSheet.create({
    hamburgerMenuIcon: {
        marginLeft: 'auto'
    }
});

export default HamburgerMenuIcon;