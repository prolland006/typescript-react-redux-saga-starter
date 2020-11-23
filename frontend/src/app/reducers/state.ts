import { Looser, TodoModel, EarthResource } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  looserState : RootState.LooserState;
  earthResources: EarthResource[];
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type LooserState = Looser[];
  export type EarthResource = EarthResource[];
}
