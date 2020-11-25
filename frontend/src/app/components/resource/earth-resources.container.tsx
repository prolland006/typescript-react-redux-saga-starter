import { connect } from 'react-redux';
import { ResourcesActions } from '../../actions';
import { RootState } from 'app/reducers';
import { EarthResourceComponent } from './earth-resource.component';

const mapStateToProps = (state: RootState) => ({
  earthResource: state.earthResourceState,
});

const mapDispatchToProps = (dispatch: any) => ({
  removeResource: (id: any) => dispatch(ResourcesActions.removeResourceAction(id)),
  onUserConfirmGetResourceRequest: (confirm: any) => dispatch(ResourcesActions.confirmGetResourceAction(confirm)),
});

export const EarthResourceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EarthResourceComponent);
