import { LooserActions } from '../actions';
import { Looser } from '../models';
import { RootState } from './state';
import { handleActions } from 'redux-actions';

const initialState: RootState.LooserState = [];

export const looserReducer = handleActions<RootState.LooserState, Looser>(
  {
    [LooserActions.Type.LOOSER_UPDATE_RECEIVED]: (state, action) => {
      return handleLooserUpdateCompleted(state, action.payload);
    },
    [LooserActions.Type.REMOVE_LOOSER_REQUEST]: (state, action) => {
      return handleRemoveLooser(state, action.payload);
    },
  },
  initialState
);

const handleRemoveLooser = (
  state: RootState.LooserState,
  looserRemove: Looser
): RootState.LooserState => {
  const withoutTheId = state.filter(looser => looser.id != looserRemove.id);
  return [...withoutTheId];
};


const handleLooserUpdateCompleted = (
  state: RootState.LooserState,
  looserUpdate: Looser
): RootState.LooserState => {
  const notUpdated = state.filter(looser => looser.id != looserUpdate.id);
  return [looserUpdate, ...notUpdated];
};
