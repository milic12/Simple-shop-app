import React, {memo} from 'react';
import {NavigationProps, Product} from '../types';
import {Card, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type RenderProductListProps = {
  item: Product;
};

const RenderProductList = ({item}: RenderProductListProps) => {
  const navigation = useNavigation<NavigationProps['navigation']>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {selectedProduct: item})
      }>
      <Card style={styles.card}>
        <Card.Cover source={{uri: `${item?.mainImageUrl}`}} />
        <Card.Title
          title={`${item?.name}`}
          titleNumberOfLines={2}
          titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <Text variant="titleSmall">Price: €{item?.price}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default memo(RenderProductList);

const styles = StyleSheet.create({
  card: {
    minWidth: 180,
    margin: 5,
  },

  cardTitle: {
    paddingVertical: 2,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
  },
});
