import { call, put, takeEvery, take } from 'redux-saga/effects';
import { natureResourcesDestroyer } from '../middleware';
import { LooserActions} from '../actions';

export function* watchRemoveResource() {
  yield takeEvery(
    LooserActions.Type.REMOVE_RESOURCE_REQUEST,
    requestRemoveResource
  );
}

function* requestRemoveResource(action: LooserActions.BaseAction) {
  const result = yield take(LooserActions.Type.GET_RESOURCE_USER_CONFIRMATION);
  console.log('requestRemoveResource');
  console.log(result);
  console.log(action);
  if (result.payload === true) {
    const quantity = yield call(natureResourcesDestroyer);
    console.log('remove quantity:'+quantity);
    yield put(LooserActions.destroyNatureResourcesAction({id: action.payload, quantity: quantity}));
  }
}
