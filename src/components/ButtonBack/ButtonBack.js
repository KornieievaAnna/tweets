import { Link } from 'react-router-dom';
import { Btn } from '../Btn.styled';

const ButtonBack = () => {
  return (
      <Link to="/">
        <Btn>Go back</Btn>
      </Link>
  );
};
export default ButtonBack;
