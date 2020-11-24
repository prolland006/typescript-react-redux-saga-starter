import * as React from 'react';
import { Looser } from '../../models';
import style from './style.css';

interface Props {
  connectCurrencyUpdateSockets: () => void;
  disconnectCurrencyUpdateSockets: () => void;
  looserCollection: Looser[];
  onRemoveLooserRequest: (looser: Looser) => void;
}

export const LooserComponent: React.FunctionComponent<Props> = props => {
  const {
    connectCurrencyUpdateSockets,
    disconnectCurrencyUpdateSockets,
    onRemoveLooserRequest,
    looserCollection
  } = props;

  React.useEffect(() => {
    connectCurrencyUpdateSockets();
    return () => {
      disconnectCurrencyUpdateSockets();
    };
  }, []);

  return (
    <div>
      <h2>Fucking Loosers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {looserCollection.map(looser => (
            <tr key={looser.id}>
              <td>{looser.employee_name}</td>
              <td>{looser.employee_age}</td>
              <td>{looser.employee_salary}</td>
              <td><button className={style.button} onClick={() => onRemoveLooserRequest(looser)}>Fuck that shit!</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
