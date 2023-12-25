import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

interface TouchableOpacityControlProps {
  activeOpacity?: number;
  style?: any;
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
  boxShadow?: any;
  borderWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderColor?: string;
  w?: number | string;
  h?: number | string;
  align?: string;
  justify?: string;
  direction?: string;
  bgColor?: string;
  gap?: number;
  disabled?: boolean;
  opacity?: number;
  borderStyle?: any;
  flexWrap?: string;
  position?: string;
  flex?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export type TouchableOpacityProps = RNTouchableOpacityProps &
  TouchableOpacityControlProps;
