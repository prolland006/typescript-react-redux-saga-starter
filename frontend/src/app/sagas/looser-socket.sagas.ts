import { all, fork, take, call, put, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { LooserActions } from '../actions';

const ioClient = require('socket.io-client');

function connect() {
  console.log('connecting...');
  // Real life project extract this into an API module
  const socket = ioClient.connect('http://localhost:1337/', null);

  // We need to wrap the socket connection into a promise (socket returs callback)
  return new Promise((resolve, reject) => {
    socket.on('connect', () => {
      console.log('connection up and running');
      socket.emit('messages');
      resolve({ socket });
    });

    socket.on('connect_error', (err: any) => {
      console.log('connect failed :-(');
      reject(new Error('ws:connect_failed '));
    });
  }).catch(error => {console.log('error');});
}

function subscribe(socket: any) {
  console.log('subscribe');
  return eventChannel(emit => {
    socket.on('currency', (message: any) => {
      console.log(message);
      emit(LooserActions.looserUpdateReceivedAction(message));
    });
    socket.on('disconnect', (e: any) => {
      // TODO: handle
    });
    socket.on('error', (error: any) => {
      // TODO: handle
      console.log(
        'Error while trying to connect, TODO: proper handle of this event'
      );
    });

    return () => {};
  });
}

function* read(socket: any) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* flow() {
  console.log('flow');
  while (true) {
    console.log('while true');
    yield take(LooserActions.Type.START_SOCKET_SUBSCRIPTION);
    const { socket, error } = yield call(connect);
    console.log('if socket');
    if (socket) {
      console.log('connection to socket succeeded');
      const ioTask = yield fork(handleIO, socket);
      yield take(LooserActions.Type.STOP_SOCKET_SUBSCRIPTION);
      yield cancel(ioTask);
      socket.disconnect();
    } else {
      console.log('error connecting '+error);
    }
  }
}

function* handleIO(socket: any) {
  yield fork(read, socket);
  // TODO in the future we could add here a write fork
}

export function* socketRootSaga() {
  yield all([fork(flow)]);
}
