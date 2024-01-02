import { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import { TextInput } from 'react-native';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../states/common';
import { TextInputProps } from './text-input.type';

const TextInputComponent = forwardRef((props: TextInputProps, ref: any) => {
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const defaultColor = useMemo(
    () => (isDarkMode ? '#f2f2f2' : '#4f4f4f'),
    [isDarkMode],
  );

  const defaultBgColor = useMemo(
    () => (isDarkMode ? '#4d4d4d' : '#FFF'),
    [isDarkMode],
  );

  const {
    w,
    h,
    m,
    p,
    mx,
    my,
    px,
    py,
    mt,
    mr,
    ml,
    mb,
    pt,
    pb,
    pr,
    pl,
    bgColor = defaultBgColor,
    borderRadius = 8,
    multiline,
    borderWidth = multiline ? 0 : 1,
    borderColor = '#DFDBD6',
    boxShadow,
    placeholderTextColor,
    style,
    textAlignVertical,
    secureTextEntry,
    editable,
    fontFamily = 'Inter-Regular',
    ...rest
  } = props;
  const inputRef = useRef<any>(null);

  const primaryStyle = useMemo(() => {
    if (Array.isArray(style) && !!style.length) {
      return style.reduce((prev, curr) => ({ ...prev, ...curr }));
    }
    return style;
  }, [style]);

  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation } =
    boxShadow || {};

  const defaultStyle = {
    fontFamily,
    fontSize: 14,
    color: defaultColor,
    backgroundColor: bgColor,
    borderRadius,
    borderWidth,
    borderColor,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
    padding: p,
    margin: m,
    paddingHorizontal: px,
    paddingVertical: py,
    paddingBottom: pb,
    paddingTop: pt,
    marginHorizontal: mx,
    marginVertical: my,
    marginTop: mt,
    marginBottom: mb,
    paddingLeft: pl,
    paddingRight: pr,
    marginLeft: ml,
    marginRight: mr,
    width: w,
    height: h,
    textAlignVertical,
  };

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  return (
    <TextInput
      ref={inputRef}
      style={primaryStyle ? [defaultStyle, { ...primaryStyle }] : defaultStyle}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : '#828282'
      }
      editable={editable}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
      {...rest}
    />
  );
});

export default memo(TextInputComponent);
