import { connect } from 'react-redux';
import { removeResourceAction, confirmGetResourceAction } from '../../actions';
import { RootState } from 'app/reducers';
import { EarthResourceComponent } from './earth-resource.component';

const mapStateToProps = (state: RootState) => ({
  earthResource: state.earthResources,
});

const mapDispatchToProps = (dispatch: any) => ({
  removeResource: (id: any) => dispatch(removeResourceAction(id)),
  onUserConfirmGetResourceRequest: (confirm: any) => dispatch(confirmGetResourceAction(confirm)),
});

export const EarthResourceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EarthResourceComponent);
