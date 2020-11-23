import { connect } from 'react-redux';
import { LooserComponent } from './looser.component';
import {
  startSocketSubscriptionAction,
  stopSocketSubscriptionAction,
  removeLooserRequestAction,
} from '../../actions';
import { RootState } from 'app/reducers';

const mapStateToProps = (state: RootState) => ({
  looserCollection: state.looserState,
});

const mapDispatchToProps = (dispatch: any) => ({
  connectCurrencyUpdateSockets: () => dispatch(startSocketSubscriptionAction()),
  disconnectCurrencyUpdateSockets: () => dispatch(stopSocketSubscriptionAction()),
  onRemoveLooserRequest: (id: any) => dispatch(removeLooserRequestAction(id)),
});

export const LooserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LooserComponent);
