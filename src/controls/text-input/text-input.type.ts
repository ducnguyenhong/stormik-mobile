import {
  DimensionValue,
  TextInputProps as RNTextInputProps,
} from 'react-native';

interface TextInputControlProps {
  w?: DimensionValue;
  h?: DimensionValue;
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
  fontSize?: number;
  flex?: number;
  bgColor?: string;
  borderRadius?: number;
  multiline?: boolean;
  borderWidth?: number;
  borderColor?: string;
  boxShadow?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: any;
  textAlignVertical?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  fontFamily?:
    | 'Thin'
    | 'Light'
    | 'ExtraLight'
    | 'Regular'
    | 'Medium'
    | 'SemiBold'
    | 'Bold'
    | 'ExtraBold'
    | 'Black';
}

export type TextInputProps = RNTextInputProps & TextInputControlProps;
