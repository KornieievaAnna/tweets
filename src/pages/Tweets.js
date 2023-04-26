import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { visibleContacts } from 'redux/selector';
import TweetCard from 'components/TweetCard/TweetCard';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Filters from 'components/Filters/Filters';

const Tweets = () => {
  const [visible, setVisible] = useState(3);

  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchUsers());
    }
    isFirstRender.current = false;
    return;
  }, [dispatch]);

  const users = useSelector(visibleContacts);

  const handleLoadMore = () => {
    setVisible(prevValue => prevValue + 3);
  };

  return (
    <>
      <div style={{ justifyContent: 'space-between', display: 'flex' }}>
        <ButtonBack />
        <Filters />
      </div>

      {users.length > 0 && (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {users.slice(0, visible).map(user => (
            <TweetCard key={user.id} user={user} />
          ))}
        </ul>
      )}
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        {users.length >= visible && (
          <ButtonLoadMore loadMore={handleLoadMore} />
        )}
      </div>
    </>
  );
};

export default Tweets;
