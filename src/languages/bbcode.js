/*
Language: bbcode
Author: Paul Reid <paul@reid-family.org>
Description: highlightjs language definition for bbcode files
Category: config, markup
*/
export default function(hljs) {
  const NAME_REGEX = /[^\s\]=/"']+/;
  const QUOTE_STRING_ALLOW_NL = {
    scope: 'string',
    begin: /'/,
    end: /'/,
    variants: [
      {
        begin: /"/,
        end: /"/
      }
    ]
  };
  const OPEN_BRACKET = /\[/;
  const CLOSE_BRACKET = /\]/;

  return {
    name: 'bbcode',
    case_insensitive: true,
    contains: [
      // closing tag
      {
        scope: 'tag',
        match: [/\[\//, NAME_REGEX, CLOSE_BRACKET],
        beginScope: {
          1: 'punctuation',
          2: 'name',
          3: 'punctuation'
        },
        relevance: 2
      },
      // opening tag - no attr
      {
        scope: 'tag',
        match: [OPEN_BRACKET, NAME_REGEX, CLOSE_BRACKET],
        beginScope: {
          1: 'punctuation',
          2: 'name',
          3: 'punctuation'
        }
      },
      // opening tag - single attr
      {
        scope: 'tag',
        begin: [OPEN_BRACKET, NAME_REGEX, /=/],
        end: /\]/,
        beginScope: {
          1: 'punctuation',
          2: 'name',
          3: 'punctuation'
        },
        endScope: 'punctuation',
        contains: [
          QUOTE_STRING_ALLOW_NL,
          {
            scope: 'string',
            match: /[^\]]+/
          }
        ],
        relevance: 2
      },
      // opening tag - multiple attrs
      {
        scope: 'tag',
        begin: [OPEN_BRACKET, NAME_REGEX, /\s/],
        end: /\]/,
        beginScope: {
          1: 'punctuation',
          2: 'name'
        },
        endScope: 'punctuation',
        contains: [
          {
            begin: [/[\w-_]+/, /=/],
            beginScope: { 1: 'attr', 2: 'punctuation' },
            contains: [
              QUOTE_STRING_ALLOW_NL,
              {
                scope: 'string',
                match: /[^\]\s]+/
              }
            ]
          }
        ],
        relevance: 2
      }
    ]
  };
}
