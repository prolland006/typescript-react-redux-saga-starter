import { call, put, takeEvery, take } from 'redux-saga/effects';
import { natureResourcesDestroyer } from '../middleware';
import { ResourcesActions} from '../actions';

export function* watchRemoveResource() {
  yield takeEvery(
    ResourcesActions.Type.REMOVE_RESOURCE_REQUEST,
    requestRemoveResource
  );
}

function* requestRemoveResource(action: ResourcesActions.BaseAction) {
  const result = yield take(ResourcesActions.Type.GET_RESOURCE_USER_CONFIRMATION);
  console.log('requestRemoveResource');
  console.log(result);
  console.log(action);
  if (result.payload === true) {
    const quantity = yield call(natureResourcesDestroyer);
    console.log('remove quantity:'+quantity);
    yield put(ResourcesActions.destroyNatureResourcesAction({id: action.payload, quantity: quantity}));
  }
}
