import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  Image,
} from 'react-native';
import COLORS from '../../constants/colors';

const NewsItem = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        Linking.canOpenURL(item.url).then(() => {
          Linking.openURL(item.url);
        });
      }}>
      {item.urlToImage && (
        <Image
          source={{uri: item.urlToImage}}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Text style={styles.text}>{item.title}</Text>
      <View style={styles.row}>
        {item.author ? (
          <Text style={styles.subtext}>Author: {item.author}</Text>
        ) : null}
        {item.publishedAt ? (
          <Text style={styles.subtext}>Published At: {item.publishedAt}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.white,
    margin: 8,
    borderRadius: 12,
    elevation: 4,
  },
  text: {
    padding: 8,
    paddingHorizontal: 12,
    color: COLORS.black,
    fontSize: 18,
  },
  row: {
    paddingBottom: 8,
    paddingHorizontal: 12,
  },
  subtext: {
    color: COLORS.grey,
    fontSize: 14,
  },
  image: {
    height: 180,
    width: '100%',
    borderRadius: 12,
  },
});
export default NewsItem;
