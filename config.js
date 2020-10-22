const { api = 'http://localhost:8080/api' } = process.env;

module.exports = {
  publicRuntimeConfig: {
    pageConfig: {
      auth: false,
      footer: true, // default values of header,footer,layout and auth configs.
      header: true,
      layout: true,
    },
    api: 'https://jsonplaceholder.typicode.com',
  },
  serverRuntimeConfig: {},
};
