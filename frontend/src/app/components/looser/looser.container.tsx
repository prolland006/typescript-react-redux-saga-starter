import { connect } from 'react-redux';
import { LooserComponent } from './looser.component';
import { LooserActions } from '../../actions';
import { RootState } from 'app/reducers';

const mapStateToProps = (state: RootState) => ({
  looserCollection: state.looserState,
});

const mapDispatchToProps = (dispatch: any) => ({
  connectCurrencyUpdateSockets: () => dispatch(LooserActions.startSocketSubscriptionAction()),
  disconnectCurrencyUpdateSockets: () => dispatch(LooserActions.stopSocketSubscriptionAction()),
  onRemoveLooserRequest: (id: any) => dispatch(LooserActions.removeLooserRequestAction(id)),
});

export const LooserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LooserComponent);
