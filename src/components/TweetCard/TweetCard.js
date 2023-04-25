import logo from '../images/logo.png';
import picture from '../images/picture.png';
import {
  Card,
  Logo,
  Picture,
  Band,
  Сircle,
  Avatar,
  Stats,
  Text,
  Button,
} from './TweetCard.styled';

import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/operations';

const TweetCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleСhange = () => {
    dispatch(
      updateUser(
        user.isFollowing
          ? {
              userId: user.id,
              followers: user.followers - 1,
              isFollowing: false,
            }
          : {
              userId: user.id,
              followers: user.followers + 1,
              isFollowing: true,
            }
      )
    );
  };

  //   const handleСhange = () => {
  //   if (subscription === true) {
  //     setSubscription(false);
  //     setSubscriber(subscriber - 1);
  //     console.log('работает с тру');
  //   } else {
  //   //   console.log('работает с фолс');
  //     setSubscriber(subscriber + 1);
  //     setSubscription(true);
  //   //   console.log('работает с фолс');
  //     // You are following ${user.user}
  //   }
  //   console.log(subscription);
  //   dispatch(
  //     updateUser({
  //       userId: user.id,
  //       followers: subscriber,
  //       isFollowing: subscription,
  //     })
  //   );
  // };

  //   const users = useSelector(getUsers);

  // useEffect(() => {
  //   dispatch(
  //     updateUser({
  //       userId: user.id,
  //       followers: subscriber,
  //       isFollowing: subscription,
  //     })
  //   );
  // }, [subscription]);

  return (
    <Card>
      <Logo src={logo} alt="logo" />
      <Picture src={picture} alt="picture" />
      <Band></Band>
      <Сircle></Сircle>
      <div>
        <Avatar src={user.avatar} alt={user.user} height={62} width={62} />
      </div>
      <Stats>
        <Text>{user.tweets.toLocaleString('en-US')} tweets</Text>
        <Text>{user.followers.toLocaleString('en-US')} followers</Text>
      </Stats>
      <Button
        type="button"
        style={{ backgroundColor: user.isFollowing && '#5cd3a8' }}
        onClick={handleСhange}
      >
        {user.isFollowing ? <>Following</> : <>Follow</>}
      </Button>
    </Card>
  );
};

export default TweetCard;
