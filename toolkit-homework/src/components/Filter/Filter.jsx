import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <input
      value={value}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Find contacts"
    />
  );
};

Filter.propTypes = {};

export default Filter;
