import * as React from 'react';
import { EarthResource } from '../../models'
import style from './style.css';

interface Props {
  earthResource: EarthResource[];
  removeResource: (id: string)=>void;
  onUserConfirmGetResourceRequest: (result: boolean) => void;
}

export const EarthResourceComponent: React.FunctionComponent<Props> = props => {
  const {earthResource, removeResource, onUserConfirmGetResourceRequest} = props;
  const [showConfirm, setShowConfirm] = React.useState(false);

  const removeClicked = (id: string) => {
    setShowConfirm(true);
    removeResource(id);
  }

  const confirmClicked = (confirm: boolean) => {
    setShowConfirm(false);
    onUserConfirmGetResourceRequest(confirm);
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
        {earthResource.map(earthResource=>
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
