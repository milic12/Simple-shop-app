import React, {useState} from 'react';
import {Modal, StyleSheet, Pressable, View} from 'react-native';
import {Text} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import productsData from '../../products.json';
import {getAllColors} from '../helpers';

type FilterModalProps = {
  filterModalVisible: boolean;
  setFilterModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setColorValue: React.Dispatch<React.SetStateAction<string | null>>;
  colorValue: string | null;
};
const FilterModal = ({
  filterModalVisible,
  setFilterModalVisible,
  setColorValue,
  colorValue,
}: FilterModalProps) => {
  const existingColors = getAllColors(productsData);

  const initialColorItems = existingColors.map(color => ({
    label: color.charAt(0).toUpperCase() + color.slice(1),
    value: color,
  }));

  // Dropdown color picker
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initialColorItems);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={filterModalVisible}
        onRequestClose={() => {
          setFilterModalVisible(!filterModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setFilterModalVisible(!filterModalVisible)}>
              <CloseIcon name="close" size={32} />
            </Pressable>
            <Text variant="titleLarge">Filter Products</Text>
            <View style={styles.boxContainer}>
              <Text variant="titleMedium">Filter by color:</Text>
              <View style={styles.dropDownPicker}>
                <DropDownPicker
                  placeholder="Select color"
                  open={open}
                  value={colorValue}
                  items={items}
                  setOpen={setOpen}
                  setValue={setColorValue}
                  setItems={setItems}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },

  buttonClose: {
    alignSelf: 'flex-end',
  },

  boxContainer: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },

  label: {
    margin: 8,
  },

  dropDownPicker: {
    marginTop: 10,
    height: 150,
  },
});

export default FilterModal;
