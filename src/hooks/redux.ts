import { useRef } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { AppDispatch, AppStore, RootState } from 'store';

import { allActionCreators } from 'store/action-creators';

// Использовать вместо `useDispatch` и `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useActions = () => {
  const dispatch = useDispatch();
  const actions = useRef(bindActionCreators(allActionCreators, dispatch));

  return actions.current;
};
