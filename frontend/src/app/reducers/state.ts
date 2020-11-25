import { Looser, TodoModel, EarthResource } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  looserState : RootState.LooserState;
  earthResourceState: RootState.EarthResourceState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type LooserState = Looser[];
  export type EarthResourceState = EarthResource[];
}
