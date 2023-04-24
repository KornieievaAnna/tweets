import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { getUsers } from 'redux/selector';
import TweetCard from 'components/TweetCard/TweetCard';

const Tweets = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(getUsers);
  console.log(users);

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
