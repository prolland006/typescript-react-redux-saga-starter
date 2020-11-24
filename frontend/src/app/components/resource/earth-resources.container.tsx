import { connect } from 'react-redux';
import { LooserActions} from '../../actions';
import { RootState } from 'app/reducers';
import { EarthResourceComponent } from './earth-resource.component';

const mapStateToProps = (state: RootState) => ({
  earthResource: state.earthResources,
});

const mapDispatchToProps = (dispatch: any) => ({
  removeResource: (id: any) => dispatch(LooserActions.removeResourceAction(id)),
  onUserConfirmGetResourceRequest: (confirm: any) => dispatch(LooserActions.confirmGetResourceAction(confirm)),
});

export const EarthResourceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EarthResourceComponent);
