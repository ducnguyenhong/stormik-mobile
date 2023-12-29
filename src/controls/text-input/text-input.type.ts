import { TextInputProps as RNTextInputProps } from 'react-native';

interface TextInputControlProps {
  w?: number | string;
  h?: number | string;
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
  fontFamily?: string;
}

export type TextInputProps = RNTextInputProps & TextInputControlProps;
