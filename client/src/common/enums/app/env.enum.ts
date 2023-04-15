const { REACT_APP_API_PREFIX, REACT_APP_TEXT_EDITOR_API_KEY } = process.env;

const ENV = {
  API: {
    PREFIX: REACT_APP_API_PREFIX as string,
  },
  TEXT_EDITOR: {
    API_KEY: REACT_APP_TEXT_EDITOR_API_KEY as string,
  },
} as const;

export { ENV };
