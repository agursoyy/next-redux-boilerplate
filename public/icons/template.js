const template = `
@include font-face(icons);

.icon {
  font-family: icons;
  font-style: normal;

  @each $icon, $content in map-get($data, icons) {

    &-#{$icon} {
      
      // stylelint-disable-next-line max-nesting-depth
      &::before {
        content: $content;
      }
    }
  }
}
`;

module.exports = ({ family, fontPath, unicodes }) => {
  const glyphs = unicodes.reduce(
    (prev, { name, unicode }) => ({
      ...prev,
      [name.toLowerCase().replace(/\s/g, '-')]:
        '\\' +
        unicode
          .charCodeAt(0)
          .toString(16)
          .toLowerCase(),
    }),
    {},
  );

  const data = {
    [family]: glyphs,
  };

  const toSCSS = items =>
    JSON.stringify(items, null, '\t')
      .replace(/\{/g, '(')
      .replace(/\}/g, ')')
      .replace(/\\\\/g, '\\')
      .replace(/\t/g, '  ');

  return `$data: ${toSCSS(data)};\n${template}`;
};
