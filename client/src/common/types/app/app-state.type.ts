import { store } from 'store/store';

type AppState = ReturnType<typeof store.getState>;

export { AppState };
