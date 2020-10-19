import {
  useSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import { ApplicationState } from '../store';

const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default useTypedSelector;
