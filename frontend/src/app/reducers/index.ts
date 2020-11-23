import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { looserReducer} from './looser.reducer';
import { earthResourceReducer } from './earth-resource.reducer';


export { RootState };

export const rootReducer = combineReducers<RootState>({
  todos: todoReducer,
  looserState: looserReducer,
  earthResources: earthResourceReducer,
});
