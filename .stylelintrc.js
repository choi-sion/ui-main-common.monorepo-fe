module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-styled-components'
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
      rules: {
        'block-closing-brace-empty-line-before': null,
        'block-closing-brace-newline-after': null,
        'block-closing-brace-newline-before': null,
        'block-closing-brace-space-before': null,
        'block-opening-brace-newline-after': null,
        'block-opening-brace-space-after': null,
        'block-opening-brace-space-before': null,
        'declaration-block-semicolon-newline-after': null,
        'declaration-block-semicolon-space-after': null,
        'declaration-block-semicolon-space-before': null,
        'declaration-block-trailing-semicolon': null,
        indentation: 4,
        'selector-max-type': null,
        'selector-class-pattern': null,
        'media-query-no-invalid': null,
        'selector-anb-no-unmatchable': null,
        'color-function-notation': null,
        'alpha-value-notation': null,
        'order/properties-alphabetical-order': null,
        'property-no-vendor-prefix': null,
        'selector-pseudo-element-colon-notation': null,
        'selector-type-case': [
          'lower',
          {
            ignore: 'camel'
          }
        ],
        'string-quotes': 'double',
        'value-keyword-case': null,
        'color-hex-case': 'lower',
        'at-rule-no-unknown': null,
        'number-leading-zero': 'never',
        'annotation-no-unknown': [
          true,
          {
            ignoreAnnotations: 'default'
          }
        ],
        'import-notation': 'string',
        'custom-property-pattern': null,
        'no-invalid-position-at-import-rule': null,
        'no-descending-specificity': null,
        'declaration-empty-line-before': 'never',
        'font-weight-notation': null,
        'shorthand-property-no-redundant-values': null,
        'selector-max-compound-selectors': null,
        'max-nesting-depth': null,
        'media-feature-range-notation': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'comment-whitespace-inside': null,
        'comment-word-disallowed-list': null,
        'declaration-block-no-duplicate-properties': true,
        'value-no-vendor-prefix': null,
        'function-no-unknown': null,
        'declaration-block-no-shorthand-property-overrides': null,
        'keyframes-name-pattern': null,
        'selector-id-pattern': null,
        'selector-nested-pattern': null,
        'font-family-name-quotes': null,
        'selector-no-vendor-prefix': null,
        'no-duplicate-selectors': null,
        'function-linear-gradient-no-nonstandard-direction': null,
        'selector-not-notation': null,
        'number-max-precision': null,
        'comment-empty-line-before': null,
        'at-rule-no-vendor-prefix': null
      }
    }
  ]
};
