import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');

type ProductCarouselProps = {
  images: string[];
};
const ProductCarousel = ({images}: ProductCarouselProps) => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1500}
        renderItem={({item}) => (
          <View style={styles.carouselItem}>
            <Image source={{uri: item}} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    objectFit: 'contain',
  },
});

export default ProductCarousel;
