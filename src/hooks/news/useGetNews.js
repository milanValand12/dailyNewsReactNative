import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchNews,
  fetchNewsReject,
  fetchNewsSuccess,
} from '../../redux/slices/NewsSlice';
import {doGetNews} from '../../services/news';

const useGetNews = (key, selectedCountry) => {
  const dispatch = useDispatch();
  const {news, loading, error} = useSelector(state => state.news);
  const getNews = async (key, selectedCountry) => {
    try {
      dispatch(fetchNews());
      const news = await doGetNews({category: key, country: selectedCountry});
      dispatch(fetchNewsSuccess(news));
    } catch (error) {
      dispatch(fetchNewsReject(error));
    }
  };

  useEffect(() => {
    getNews(key, selectedCountry);
  }, [key, selectedCountry]);

  return {
    getNews,
    news,
    loading,
    error,
  };
};

export default useGetNews;
