import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Product} from '../types';
import productsData from '../../products.json';
import {Text} from 'react-native-paper';
import RenderProductList from './RenderProductList';
import FilterIcon from 'react-native-vector-icons/AntDesign';
import FilterModal from './FilterModal';
import CloseIcon from 'react-native-vector-icons/FontAwesome';

const ProductList = () => {
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  const [colorValue, setColorValue] = useState<string | null>(null);
  const [filteredValues, setFilteredValues] = useState<Product[]>([]);

  useEffect(() => {
    if (colorValue) {
      const filterProducts = productsData.filter(item =>
        item.colors.includes(colorValue),
      );

      setFilteredValues(filterProducts);
    }
  }, [colorValue]);

  const handleRemoveFilters = () => {
    setFilteredValues([]);
    setColorValue(null);
  };

  return (
    <View>
      <FilterModal
        filterModalVisible={filterModalVisible}
        setFilterModalVisible={setFilterModalVisible}
        setColorValue={setColorValue}
        colorValue={colorValue}
      />

      <TouchableOpacity
        onPress={() => setFilterModalVisible(true)}
        style={styles.filterWrapper}>
        <FilterIcon name="filter" size={52} color="black" />
        <Text variant="titleMedium">Filter</Text>
      </TouchableOpacity>

      {colorValue && (
        <TouchableOpacity
          style={styles.addedFilters}
          onPress={handleRemoveFilters}>
          <Text variant="titleMedium">{colorValue}</Text>
          <CloseIcon name="close" size={22} />
        </TouchableOpacity>
      )}
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={filteredValues.length > 0 ? filteredValues : productsData}
        keyExtractor={item => item?.productId.toString()}
        numColumns={2}
        initialNumToRender={5}
        renderItem={({item}) => <RenderProductList item={item} />}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: '40%',
  },

  filterWrapper: {
    paddingLeft: 20,
    marginBottom: 10,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addedFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    width: 100,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});
