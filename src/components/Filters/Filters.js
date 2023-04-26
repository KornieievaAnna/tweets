import { useDispatch } from 'react-redux';
import { filterUsers } from '../../redux/filter/filterSlice';
import { Btn } from '../Btn.styled';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilter = filter => {
    dispatch(filterUsers(filter));
    
  };

  return (
    <div>
      <Btn type="button" onClick={() => handleFilter('all')}>
        Show All
      </Btn>
      <Btn type="button" onClick={() => handleFilter('follow')}>
        Follow
      </Btn>
      <Btn type="button" onClick={() => handleFilter('following')}>
        Following
      </Btn>
    </div>
  );
};
export default Filters;
