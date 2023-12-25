import { ViewProps as RNViewProps } from 'react-native';

interface ViewControlProps {
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
  borderWidth?: number;
  borderColor?: string;
  boxShadow?: any;
  align?: string;
  justify?: string;
  direction?: string;
  flex?: number;
  h?: number;
  w?: number;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  overflow?: string;
  position?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  flexWrap?: string;
  minH?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  style?: any;
}

export type ViewProps = RNViewProps & ViewControlProps;
