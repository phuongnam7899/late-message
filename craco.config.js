const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@styles": path.resolve(__dirname, 'src/styles/'),
      "@hooks": path.resolve(__dirname, 'src/hooks/'),
      "@helpers": path.resolve(__dirname, 'src/helpers/'),
      "@pages": path.resolve(__dirname, 'src/pages/'),
      "@classes": path.resolve(__dirname, 'src/classes/'),
    }
  }
};