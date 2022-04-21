import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import NewsItem from '../../../components/news/NewsItem';
import COUNTRIES from '../../../constants/countries';
import useGetNews from '../../../hooks/news/useGetNews';

const NewsListScreen = ({route, navigation}) => {
  const {key, name, selectedCountry} = route.params;
  const {news, loading, getNews} = useGetNews(key, selectedCountry);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${name} (${COUNTRIES?.[selectedCountry]})`,
    });
  }, [key, selectedCountry]);

  return (
    <>
      <FlatList
        refreshing={loading}
        onRefresh={() => getNews(key, selectedCountry)}
        data={news}
        renderItem={({item}) => {
          return <NewsItem item={item} />;
        }}
      />
    </>
  );
};

export default NewsListScreen;
