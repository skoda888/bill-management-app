import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';


const TheHeader = () => {
    return (
        <View>
            <SafeAreaView style= { styles.SafeAreaView } />
            <Text>The Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        backgroundColor: '#29E298'
    }
});


export default TheHeader;