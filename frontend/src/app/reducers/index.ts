import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { looserReducer} from './looser.reducer';


export { RootState };

export const rootReducer = combineReducers<RootState>({
  todos: todoReducer,
  looserState: looserReducer,
});
