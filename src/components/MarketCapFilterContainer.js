import { connect } from 'react-redux';
import ComboboxSelector from './ComboboxSelector';
import { changeFilter } from '../reducers/mainReducer.js';
import { options } from '../types/fields';

const mapStateToProps = (state) => ({
  value: state.main.filters.marketCap,
  options: options('marketCap')
});
const onChange = function(newValue) {
  return changeFilter('marketCap', newValue);
}
const mapDispatchToProps = {
  onChange: onChange
};

export default connect(mapStateToProps, mapDispatchToProps)(ComboboxSelector);
