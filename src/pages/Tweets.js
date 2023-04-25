import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { getUsers } from 'redux/selector';
import TweetCard from 'components/TweetCard/TweetCard';

const Tweets = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchUsers());
    }
    isFirstRender.current = false;
    return;
  }, [dispatch]);

  const users = useSelector(getUsers);

  return (
    <>
      {users.length > 0 && (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {users.map(user => (
            <TweetCard key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Tweets;
