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
  const isFollowing = user.isFollowing;
  console.log(isFollowing);

  const handleСhange = () => {
    dispatch(
      updateUser(
        isFollowing
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
    console.log('hfm');
  };

  return (
    <Card>
      <Logo src={logo} alt="logo" />
      <Picture src={picture} alt="picture" />
      <Band></Band>
      <Сircle></Сircle>
      <div>
        <Avatar src={user.avatar} alt="avatar" height={62} width={62} />
      </div>
      <Stats>
        <Text>{user.tweets.toLocaleString('en-US')} tweets</Text>
        <Text>{user.folloewrs.toLocaleString('en-US')} folloewrs</Text>
      </Stats>
      <Button
        type="button"
        style={{ backgroundColor: isFollowing && '#5cd3a8' }}
        onClick={handleСhange}
      >
        {isFollowing ? <>Following</> : <>Follow</>}
      </Button>
    </Card>
  );
};

export default TweetCard;
