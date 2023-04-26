import { GlowingBtn } from '../Layout/Layout.styled';

export function ButtonLoadMore({ loadMore }) {
  return (
    <GlowingBtn type="button" onClick={loadMore}>
      Load more
    </GlowingBtn>
  );
}

export default ButtonLoadMore;
