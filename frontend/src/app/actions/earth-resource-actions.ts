import { createAction } from 'redux-actions';

export namespace ResourcesActions {
  
  export interface BaseAction {
    type: string;
    payload?: any;
  }
  
  export enum Type {
    REMOVE_RESOURCE_REQUEST = 'Remove resource',
    GET_RESOURCE_USER_CONFIRMATION = 'Get resource user confirmation',
    DESTROY_NATURE_RESOURCES = 'Destroy nature resources',
  }

  export const confirmGetResourceAction = createAction(Type.GET_RESOURCE_USER_CONFIRMATION,
    (confirm: boolean) => confirm);

  export const removeResourceAction = createAction(Type.REMOVE_RESOURCE_REQUEST,
    (id: string) => id);

  export const destroyNatureResourcesAction = createAction(Type.DESTROY_NATURE_RESOURCES, 
    (resourceToDestroy: {id: string, quantity: number}) => resourceToDestroy);
}