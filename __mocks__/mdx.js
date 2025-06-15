const React = require('react');

module.exports = function MockMDXComponent() {
  return React.createElement('div', { 'data-testid': 'mock-mdx-content' }, 'Mock MDX Content');
};