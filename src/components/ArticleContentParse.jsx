import React from 'react';
import parse from 'html-react-parser';
import { Typography, Box } from '@mui/material';

const HTMLContentParser = ({ content }) => {
  const parseOptions = {
    replace: (domNode) => {
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
          default:
            return domNode;
        }
      }
    }
  };

  return <>{parse(content, parseOptions)}</>;
};

export default HTMLContentParser;