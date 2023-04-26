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
import { updateUser } from 'redux/user/operations';
import Notiflix from 'notiflix';

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
    if (!user.isFollowing) {
      Notiflix.Notify.info(`You are following ${user.user}`);
    } else {
      Notiflix.Notify.warning(`You aren't following ${user.user} anymore`);
    }
  };

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
