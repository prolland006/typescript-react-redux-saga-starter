import { call, put, takeEvery, take } from 'redux-saga/effects';
import { natureResourcesDestroyer } from '../middleware';
import { destroyNatureResourcesAction, actionIds, BaseAction } from '../actions';

export function* watchRemoveResource() {
  yield takeEvery(
    actionIds.REMOVE_RESOURCE_REQUEST,
    requestRemoveResource
  );
}

function* requestRemoveResource(action: BaseAction) {
  const result = yield take(actionIds.GET_RESOURCE_USER_CONFIRMATION);
  console.log('requestRemoveResource');
  console.log(result);
  console.log(action);
  if (result.payload === true) {
    const quantity = yield call(natureResourcesDestroyer);
    console.log('remove quantity:'+quantity);
    yield put(destroyNatureResourcesAction({id: action.payload, quantity: quantity}));
  }
}
