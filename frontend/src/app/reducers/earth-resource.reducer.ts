import { BaseAction, actionIds } from '../actions';
import { EarthResource } from '../models';

const initialEarthResources = [
  {id: '0', type: 'Fer', quantity: 10},
  {id: '1', type: 'Or', quantity: 3},
  {id: '2', type: 'Argent', quantity: 3},
  {id: '3', type: 'Fuel', quantity: 6},
  {id: '4', type: 'Uranium', quantity: 5},
]

export const earthResourceReducer = (
  state: EarthResource[] = initialEarthResources,
  action: BaseAction
) => {
  console.log(action);
  switch (action.type) {
    case actionIds.DESTROY_NATURE_RESOURCES:
      console.log('DESTROY_NATURE_RESOURCES');
      console.log(action);
      return state.map(
          earthResource=>(earthResource.id===action.payload.id?
            {...earthResource,quantity: earthResource.quantity-action.payload.quantity}:earthResource)
        )
  }
  return state;
};
