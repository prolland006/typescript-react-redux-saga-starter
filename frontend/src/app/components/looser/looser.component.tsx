import { LooserActions } from 'app/actions';
import { RootState } from 'app/reducers';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.css';

interface Props {
}

export const LooserComponent: React.FunctionComponent<Props> = props => {

  const dispatch = useDispatch();
  const looserState = useSelector((state: RootState) => state.looserState);


  React.useEffect(() => {
    dispatch(LooserActions.startSocketSubscriptionAction());
    return () => {
      dispatch(LooserActions.stopSocketSubscriptionAction());
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
          {looserState.map(looser => (
            <tr key={looser.id}>
              <td>{looser.employee_name}</td>
              <td>{looser.employee_age}</td>
              <td>{looser.employee_salary}</td>
              <td>
                <button 
                  className={style.button} 
                  onClick={() => dispatch(LooserActions.removeLooserRequestAction(looser.id))}
                >
                  Fuck that shit!
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
