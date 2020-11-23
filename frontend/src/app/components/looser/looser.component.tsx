import * as React from 'react';
import { Looser } from '../../models';

interface Props {
  connectCurrencyUpdateSockets: () => void;
  disconnectCurrencyUpdateSockets: () => void;
  looserCollection: Looser[];
  onRemoveLooserRequest: (id: string) => void;
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
          {looserCollection.map(currency => (
            <tr key={currency.id}>
              <td>{currency.employee_name}</td>
              <td>{currency.employee_age}</td>
              <td>{currency.employee_salary}</td>
              <td><button onClick={() => onRemoveLooserRequest(currency.id)}>Fuck that shit!</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
