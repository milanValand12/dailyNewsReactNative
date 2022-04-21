import axiosInstance from '../axiosInstance';

export const doGetNews = async filters => {
  const news = await axiosInstance.get(
    `top-headlines?${Object.keys(filters)
      .map(k => `${k}=${filters[k]}`)
      .join('&')}`,
  );

  return news?.articles ?? [];
};
