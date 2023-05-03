const images = require.context('../assets/images', true, /\.((png)|(jpe?g)|(gif))$/);
const imagesMap = {};

images.keys().forEach(key => {
  imagesMap[key] = images(key);
});

export default imagesMap;
