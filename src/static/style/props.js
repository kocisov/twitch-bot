export default function({
  align,
  background,
  color,
  display,
  flex,
  fontSize,
  fontWeight,
  height,
  margin,
  padding,
  position,
  width,
  direction,
  justify,
}) {
  return `
    ${background && `background: ${background}`};
    ${color && `color: ${color}`};
    ${display && `display: ${display}`};
    ${align && `align-items: ${align}`};
    ${flex && `flex: ${flex}`};
    ${fontSize && `font-size: ${fontSize}px`};
    ${fontWeight && `font-weight: ${fontWeight}`};
    ${height && `height: ${height}px`};
    ${margin && `margin: ${margin}px`};
    ${padding && `padding: ${padding}px`};
    ${position && `position: ${position}`};
    ${width && `width: ${width}px`};
    ${direction && `flex-direction: ${direction}`};
    ${justify && `justify-content: ${justify}`};
  `
}
