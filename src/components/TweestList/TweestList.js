import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/user/operations';
import { visibleContacts } from 'redux/filter/selector';
import { selectIsLoading, selectError } from 'redux/user/selector';
import TweetCard from 'components/TweetCard/TweetCard';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { Loader } from 'components/Loader/Loader';
import { TweestList, EmptyMsg } from './TweestList.styled';

const TweetsList = () => {
  const [visible, setVisible] = useState(3);
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  const users = useSelector(visibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchUsers());
    }
    isFirstRender.current = false;
    return;
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisible(prevValue => prevValue + 3);
  };

  return (
    <div>
      {users.length > 0 ? (
        <>
          {isLoading && !error && <Loader />}
          <TweestList>
            {users.slice(0, visible).map(user => (
              <TweetCard key={user.id} user={user} />
            ))}
          </TweestList>
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {users.length > visible && (
              <ButtonLoadMore loadMore={handleLoadMore} />
            )}
          </div>
        </>
      ) : (
        <EmptyMsg>There is nothing here.</EmptyMsg>
      )}
    </div>
  );
};
export default TweetsList;
