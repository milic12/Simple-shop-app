import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: {selectedProduct: Product};
};

export type ProductListProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;

export type ProductDetailRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetail'
>;

//Products

interface Breadcrumb {
  label: string;
  slug: string;
}

interface Size {
  id: string;
  name: string;
}

export interface Product {
  brandId: number;
  brandName: string;
  brandSlug: string;
  breadcrumb: Breadcrumb[];
  categoryTagNames: string[];
  colors: string[];
  clickOutAllowed: boolean;
  cpc: number;
  deepLink: string;
  description: string;
  epc: number;
  genders: string[];
  hasCoupon: boolean;
  lowestPrice: number;
  mainImageUrl: string;
  additionalImages: string[];
  materials: string | null;
  name: string;
  originalPrice: number;
  pageTags: string[];
  price: number;
  productId: string;
  productLines: string[];
  retailerId: number;
  retailerName: string;
  retailerScore: number;
  shippingCost: number | null;
  shippingInfo: string | null;
  sizes: Size[];
}
