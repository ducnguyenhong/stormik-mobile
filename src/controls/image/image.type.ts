import { ImageResizeMode, ImageProps as RNImageProps } from 'react-native';

interface ImageControlProps {
  style?: any;
  fallback?: any;
  url?: string;
  m?: number;
  p?: number;
  mx?: number;
  my?: number;
  px?: number;
  py?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  borderRadius?: number;
  zIndex?: number;
  w?: number | string;
  h?: number | string;
  borderWidth?: number;
  borderColor?: string;
  position?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  resizeMode?: ImageResizeMode;
}

export type ImageProps = RNImageProps & ImageControlProps;
