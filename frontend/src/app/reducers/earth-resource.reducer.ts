import { ResourcesActions } from '../actions';
import { RootState } from './state';
import { handleActions } from 'redux-actions';
import { EarthResource } from '../models';
const initialState = [
  {id: '0', type: 'Fer', quantity: 10},
  {id: '1', type: 'Or', quantity: 3},
  {id: '2', type: 'Argent', quantity: 3},
  {id: '3', type: 'Fuel', quantity: 6},
  {id: '4', type: 'Uranium', quantity: 5},
]

export const earthResourceReducer = handleActions<RootState.EarthResourceState, EarthResource>(
{
  [ResourcesActions.Type.DESTROY_NATURE_RESOURCES]: (state, action) => {
    console.log('DESTROY_NATURE_RESOURCES');
    console.log(action);
    return state.map(
        earthResource=>(earthResource.id===action.payload.id?
          {...earthResource,quantity: earthResource.quantity-action.payload.quantity}:earthResource)
      )
    }
  },
  initialState
);
