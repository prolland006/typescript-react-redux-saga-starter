import { Looser } from '../models/';
import { createAction } from 'redux-actions';

export namespace LooserActions {
  export enum Type {
    START_SOCKET_SUBSCRIPTION = 'Start listening to the web socket',
    STOP_SOCKET_SUBSCRIPTION = 'Close socket connection',
    LOOSER_UPDATE_RECEIVED = 'Got a looser update from the server',
    REMOVE_LOOSER_REQUEST = 'Remove looser',
    REMOVE_RESOURCE_REQUEST = 'Remove resource',
    GET_RESOURCE_USER_CONFIRMATION = 'Get resource user confirmation',
    DESTROY_NATURE_RESOURCES = 'Destroy nature resources',
  }

  export interface BaseAction {
    type: string;
    payload?: any;
  }

  export const confirmGetResourceAction: (confirm: boolean) => BaseAction = confirm => ({
    type: Type.GET_RESOURCE_USER_CONFIRMATION,
    payload: confirm,
  })

  export const removeResourceAction: (id: string) => BaseAction = id => ({
    type: Type.REMOVE_RESOURCE_REQUEST,
    payload: id,
  });
  export const startSocketSubscriptionAction = createAction(Type.START_SOCKET_SUBSCRIPTION);
  export const stopSocketSubscriptionAction = createAction(Type.STOP_SOCKET_SUBSCRIPTION);

  export const destroyNatureResourcesAction: 
    (resourceToDestroy: {id: string, quantity: number}) => BaseAction = resourceToDestroy => ({
      type: Type.DESTROY_NATURE_RESOURCES,
      payload: resourceToDestroy,
  });

  export const removeLooserRequestAction: (
    id: string
  ) => BaseAction = id => ({
    type: Type.REMOVE_LOOSER_REQUEST,
    payload: id,
  });

  export const looserUpdateReceivedAction: (
    looser: Looser
  ) => BaseAction = looser => ({
    type: Type.LOOSER_UPDATE_RECEIVED,
    payload: looser,
  });
}