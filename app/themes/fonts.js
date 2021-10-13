// sizes
const size = {
  small: 10,
  medium: 12,
  large: 14,
  extraLarge: 16,
  overSize: 20,
  extraOverSize: 25
};

const style = {
  smallBold: {
    fontSize: size.small,
    fontWeight: 'bold'
  },
  mediumBold: {
    fontSize: size.small,
    fontWeight: 'bold'
  },
  largeBold: { fontSize: size.large, fontWeight: 'bold' },
  extraLargeBold: { fontSize: size.extraLarge, fontWeight: 'bold' },
  overSizeBold: { fontSize: size.extraLarge, fontWeight: 'bold' },
  extraOverSizeBold: { fontSize: size.extraOverSize, fontWeight: 'bold' }
};

export default {
  size,
  style
};
