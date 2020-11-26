import { ResourcesActions } from 'app/actions';
import { EarthResource } from 'app/models';
import { RootState } from 'app/reducers/state';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.css';

interface Props {
}

export const EarthResourceComponent: React.FunctionComponent<Props> = props => {
  const [showConfirm, setShowConfirm] = React.useState(false);

  const dispatch = useDispatch();
  const earthResourceState = useSelector((state: RootState) => state.earthResourceState);

  const removeClicked = (id: string) => {
    setShowConfirm(true);
    dispatch(ResourcesActions.removeResourceAction(id));
  }

  const confirmClicked = (confirm: boolean) => {
    setShowConfirm(false);
    dispatch(ResourcesActions.confirmGetResourceAction(confirm));
  }

  return (
  <>
    <h2>Earth Resources</h2>
    <table>
      <thead>
        <th>Resource</th>
        <th>Quantity</th>
        <th>Action</th>
      </thead>
      <tbody>
        {earthResourceState.map((earthResource: EarthResource)=>
          <tr><td>{earthResource.type}</td><td>{earthResource.quantity}</td><td><button className={style.button} onClick={() => removeClicked(earthResource.id)}>Get the resource</button></td></tr>
        )}
      </tbody>
    </table>
    {showConfirm && (
        <div>
          <span>Destroy the earth ?</span>
          <button className={style.button} onClick={() => confirmClicked(true)}>Yes</button>
          <button className={style.button} onClick={() => confirmClicked(false)}>No</button>
        </div>
      )}
  </>
  )
};
