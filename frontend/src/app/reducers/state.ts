import { Looser, TodoModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  looserState : RootState.LooserState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type LooserState = Looser[];
}
