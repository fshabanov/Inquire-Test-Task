const { REACT_APP_API_PREFIX } = process.env;

const ENV = {
  API: {
    PREFIX: REACT_APP_API_PREFIX as string,
  },
} as const;

export { ENV };
