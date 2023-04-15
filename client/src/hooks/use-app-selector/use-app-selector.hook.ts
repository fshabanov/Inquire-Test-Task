import { AppState } from 'common/types/types';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export { useAppSelector };
