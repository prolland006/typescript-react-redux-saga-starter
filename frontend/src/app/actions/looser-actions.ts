import { Looser } from '../models';
import { createAction } from 'redux-actions';

export namespace LooserActions {
  
  export enum Type {
    START_SOCKET_SUBSCRIPTION = 'Start listening to the web socket',
    STOP_SOCKET_SUBSCRIPTION = 'Close socket connection',
    LOOSER_UPDATE_RECEIVED = 'Got a looser update from the server',
    REMOVE_LOOSER_REQUEST = 'Remove looser',
  }

  export const startSocketSubscriptionAction = createAction(Type.START_SOCKET_SUBSCRIPTION);
  export const stopSocketSubscriptionAction = createAction(Type.STOP_SOCKET_SUBSCRIPTION);

  export const removeLooserRequestAction = createAction(Type.REMOVE_LOOSER_REQUEST, 
    (id: string) => id);
  export const looserUpdateReceivedAction = createAction(Type.LOOSER_UPDATE_RECEIVED, 
    (looser: Looser) => looser);
}