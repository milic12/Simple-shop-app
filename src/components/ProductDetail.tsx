import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import ProductCarousel from './Carousel';
import {ProductDetailRouteProp} from '../types';

interface ProductDetailProps {
  route: ProductDetailRouteProp;
}

const ProductDetail = ({route}: ProductDetailProps) => {
  const {selectedProduct} = route.params;

  //Dropdown picker
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<{label: string; value: string}[]>(
    selectedProduct.sizes.map(size => ({label: size.name, value: size.id})),
  );

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <>
        <Text variant="titleLarge" style={styles.title}>
          {selectedProduct?.name}
        </Text>

        <ProductCarousel images={selectedProduct.additionalImages} />

        <Text variant="titleMedium" style={styles.subTitle}>
          Description:
        </Text>
        <Text style={styles.text}>{selectedProduct?.description}</Text>

        <View style={styles.dropDownPicker}>
          <DropDownPicker
            listMode="SCROLLVIEW"
            placeholder="Select size"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <Text variant="titleMedium" style={styles.subTitle}>
          Price:
        </Text>
        <Text style={styles.text}>{selectedProduct?.price} €</Text>

        <Text variant="titleMedium" style={styles.subTitle}>
          Shipping Info:
        </Text>
        <Text style={styles.text}>{selectedProduct?.shippingInfo} €</Text>

        <Text variant="titleMedium" style={styles.subTitle}>
          Shipping Cost:
        </Text>
        <Text style={styles.text}>{selectedProduct?.shippingCost} €</Text>
      </>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subTitle: {
    marginTop: 16,
    paddingVertical: 8,
    alignSelf: 'center',
  },

  text: {
    paddingHorizontal: 10,
    textAlign: 'center',
  },

  dropDownPicker: {
    alignSelf: 'center',
    marginTop: 10,
    width: 150,
  },
});
