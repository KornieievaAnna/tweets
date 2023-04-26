import { Link } from 'react-router-dom';
import { GlowingBtn } from '../Layout/Layout.styled';

const ButtonBack = () => {
  return (
    <div style={{ justifyContent: 'flex-start', display: 'flex' }}>
      <Link to="/">
        <GlowingBtn>Go back</GlowingBtn>
      </Link>
    </div>
  );
};
export default ButtonBack;
