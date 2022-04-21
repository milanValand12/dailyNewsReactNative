import React, {useState} from 'react';
import {FlatList, Pressable, Text, View, StyleSheet} from 'react-native';
import CategoryItem from '../../../components/news/CategoryItem';
import CATEGORIES from '../../../constants/categories';
import COLORS from '../../../constants/colors';
import COUNTRIES from '../../../constants/countries';

const NewsCategoryScreen = ({navigation}) => {
  const categories = Object.keys(CATEGORIES);
  const countries = Object.keys(COUNTRIES);

  const [selectedCountry, setSelectedCountry] = useState(countries?.[0]);

  return (
    <>
      <View style={styles.row}>
        {countries.map(country => {
          return (
            <Pressable
              key={country}
              style={[
                styles.countryBtn,
                selectedCountry === country && styles.activeCountryBtn,
              ]}
              onPress={() => setSelectedCountry(country)}>
              <Text>{COUNTRIES[country]}</Text>
            </Pressable>
          );
        })}
      </View>

      <FlatList
        data={categories}
        renderItem={({item}) => {
          return (
            <CategoryItem
              name={CATEGORIES[item]}
              key={item}
              category={item}
              onPress={() =>
                navigation.navigate('NewsListScreen', {
                  key: item,
                  name: CATEGORIES[item],
                  selectedCountry,
                })
              }
            />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 12,
  },
  countryBtn: {
    padding: 8,
    paddingHorizontal: 18,
    marginRight: 8,
    borderRadius: 12,
    borderColor: COLORS.white,
    borderWidth: 1,
  },
  activeCountryBtn: {
    backgroundColor: COLORS.white,
    elevation: 2,
    borderColor: COLORS.black,
  },
});

export default NewsCategoryScreen;
