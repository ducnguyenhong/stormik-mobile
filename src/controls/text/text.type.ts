import { TextProps as RNTextProps } from 'react-native';

interface TextControlProps {
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
  bgColor?: string;
  borderRadius?: number;
  boxShadow?: any;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  w?: number | string;
  h?: number | string;
  textAlign?: 'justify' | 'left' | 'right' | 'auto' | 'center';
  style?: any;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  lineHeight?: number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  flex?: number;
  borderColor?: string;
}

export type TextProps = RNTextProps & TextControlProps;
