
import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import TheHeader from './components/TheHeader';
import TheMyBillsSectionMain from './components/TheMyBillsSectionMain';

const App = () => {
    return (
        <View style={ styles.theMyBillsSection }>
            <StatusBar backgroundColor="#29E298" />
            <TheHeader />
            <TheMyBillsSectionMain />
        </View>
    )
}

const styles = StyleSheet.create({
    theMyBillsSection: {
        width: '100%',
        height: '100%'
    }
});

export default App;