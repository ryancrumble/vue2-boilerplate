const API = {
  REST_CONFIG: {
    baseURL: process.env.APP_API_URL
      ? process.env.APP_API_URL + "api"
      : "http://localhost:1234/api",
    timeout: parseInt(process.env.APP_AJAX_TIMEOUT as string, 10) || 30000,
  },
  GRAPHQL_CONFIG: {
    baseURL: process.env.APP_API_URL
      ? process.env.APP_API_URL + "graphql"
      : "http://localhost:1234/graphql",
    timeout: parseInt(process.env.APP_AJAX_TIMEOUT as string, 10) || 30000,
  },
};

export default API;
