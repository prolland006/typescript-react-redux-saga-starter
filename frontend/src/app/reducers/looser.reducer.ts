import { BaseAction, actionIds } from '../actions';
import { Looser } from '../models';
import { RootState } from './state';

export const looserReducer = (
  state: RootState.LooserState = [],
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.LOOSER_UPDATE_RECEIVED:
      return handleLooserUpdateCompleted(state, action.payload);
    case actionIds.REMOVE_LOOSER_REQUEST:
      return handleRemoveLooser(state, action.payload);
  }

  return state;
};

const handleRemoveLooser = (
  state: RootState.LooserState,
  id: string
): RootState.LooserState => {
  const withoutTheId = state.filter(currency => currency.id != id);
  return [...withoutTheId];
};


const handleLooserUpdateCompleted = (
  state: RootState.LooserState,
  currencyUpdate: Looser
): RootState.LooserState => {
  const notUpdated = state.filter(currency => currency.id != currencyUpdate.id);
  return [currencyUpdate, ...notUpdated];
};
