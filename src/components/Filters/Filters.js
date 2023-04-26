import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { GlowingBtn } from '../Layout/Layout.styled';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilter = filter => {
    dispatch(filterContact(filter));
  };

  return (
    <div>
      <GlowingBtn type="button" onClick={() => handleFilter('all')}>
        Show All
      </GlowingBtn>
      <GlowingBtn type="button" onClick={() => handleFilter('follow')}>
        Follow
      </GlowingBtn>
      <GlowingBtn type="button" onClick={() => handleFilter('following')}>
        Following
      </GlowingBtn>
    </div>
  );
};
export default Filters;
