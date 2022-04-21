import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const CategoryItem = ({name, category, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress?.(category)}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.white,
    padding: 16,
    margin: 4,
    borderRadius: 12,
  },
  text: {
    color: COLORS.black,
  },
});
export default CategoryItem;
