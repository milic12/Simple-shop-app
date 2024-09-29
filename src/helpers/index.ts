import {Product} from '../types';

export const getAllColors = (products: Product[]) => {
  const colors = products.flatMap(product => product.colors);
  const uniqueColors = [...new Set(colors)];
  return uniqueColors;
};
