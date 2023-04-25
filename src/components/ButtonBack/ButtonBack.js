import { Link } from 'react-router-dom';
import { GlowingBtn } from '../Layout/Layout.styled';

const ButtonBack = () => {
  return (
    <div>
      <Link to="/">
        <GlowingBtn>Go back</GlowingBtn>
      </Link>
    </div>
  );
};
export default ButtonBack;
