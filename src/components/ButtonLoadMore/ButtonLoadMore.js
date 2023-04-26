import { Btn } from '../Btn.styled';

export function ButtonLoadMore({ loadMore }) {
  return (
    <Btn type="button" onClick={loadMore}>
      Load more
    </Btn>
  );
}

export default ButtonLoadMore;
