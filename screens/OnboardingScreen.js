import { View, FlatList, useWindowDimensions, Animated } from 'react-native';
import { slides } from '../constants/constants';
import { React, useState, useRef, useEffect } from 'react'
import OnBoardingItems from '../components/OnBoardingItems';
import Paginator from '../components/Paginator';
import NextButton from '../components/NextButton';

const OnboardingScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const fadeValue = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const slidesRef = useRef(null);
    const viewConfig = useRef({ viewAreaCoveragePercentageThreshold: 50 }).current;
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const intervalRef = useRef(null);
    useEffect(() => {
        const autoScroll = () => {
            if (currentIndex < slides.length - 1) {
                Animated.timing(fadeValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }).start(() => {
                    slidesRef.current.scrollToIndex({ index: currentIndex + 1, animated: false });
                    setCurrentIndex(currentIndex + 1);
                    Animated.timing(fadeValue, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                });
            } else {
                Animated.timing(fadeValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }).start(() => {
                    slidesRef.current.scrollToIndex({ index: 0, animated: false });
                    setCurrentIndex(0);
                    Animated.timing(fadeValue, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: false,
                    }).start();
                });
            }
        };

        intervalRef.current = setInterval(autoScroll, 3000);

        return () => clearInterval(intervalRef.current);
    }, [currentIndex, fadeValue]);
    const opacityValue = new Animated.Value(0);
    const scrollTo = () => {
        console.log(currentIndex);
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 })

        }
        else {
            console.log("last");
        }
    }
    return (
        <View style={{ width: width, height: height - 100, paddingVertical: 20 }} className="flex-col">
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnBoardingItems fadeValue={fadeValue} item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                onViewableItemsChanged={viewableItemsChanged}
                scrollEventThrottle={32}
                ref={slidesRef}
            />
            <Paginator data={slides} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo} />
        </View>
    )
}

export default OnboardingScreen