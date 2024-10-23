import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animatedValue]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 10],
        outputRange: [0, -100],
    });

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, { transform: [{ translateY }] }]}>
                Home Screen
            </Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        color: 'black',
    },
});

export default HomeScreen;