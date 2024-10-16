import React from 'react';
import parse from 'html-react-parser';
import { Typography, Box } from '@mui/material';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const HTMLContentParser = ({ content }) => {
  const extractCode = (node) => {
    if (node.type === 'text') {
      return node.data;
    }
    if (node.children && node.children.length > 0) {
      return node.children.map(extractCode).join('');
    }
    return '';
  };
  const parseOptions = {
    replace: (domNode) => {
      // console.log(domNode);
      if (domNode.type === 'tag') {
        switch (domNode.name) {
          case 'h1':
            return <Typography variant="h4" component="h2" gutterBottom>{domNode.children[0].data}</Typography>;
          case 'p':
            return (
              <Typography paragraph>
                {domNode.children.map((child, index) =>
                  child.type === 'tag' && child.name === 'img'
                    ? <Box
                      component="img"
                      key={`img-${index}-${child.attribs.src}`}
                      src={child.attribs.src}
                      alt={child.attribs.alt}
                      sx={{ maxWidth: '100%', height: 'auto', my: 2 }}
                    />
                    : child.data || ''
                )}
              </Typography>
            );
          case 'img':
            return (
              <Box
                component="img"
                key={`img-${domNode.attribs.src}`}
                src={domNode.attribs.src}
                alt={domNode.attribs.alt}
                sx={{ maxWidth: '100%', height: 'auto', my: 2 }}
              />
            );
          case 'blockquote':
            return (
              <Box sx={{
                borderLeft: 4,
                borderColor: 'primary.main',
                pl: 2,
                my: 2,
                width: '100%',
              }}
              >
                <Typography variant="body1" fontStyle="italic">
                  {domNode.children[0].children[0].data}
                </Typography>
              </Box>
            );
          case 'div':
            if (domNode.attribs.class === 'toastui-editor-ww-code-block-highlighting') {
              const code = extractCode(domNode);
              const language = domNode.attribs['data-language'] || 'javascript';
              return (
                <Box sx={{ my: 2 }}>
                  <SyntaxHighlighter language={language} style={prism}>
                    {code}
                  </SyntaxHighlighter>
                </Box>
              );
            }
            return domNode;
          default:
            return domNode;
        }
      }
    },
  };

  return <>{parse(content, parseOptions)}</>;
};

export default HTMLContentParser;
