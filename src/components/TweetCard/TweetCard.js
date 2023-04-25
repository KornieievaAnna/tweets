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
import { useState, useEffect } from 'react';

const TweetCard = ({ user }) => {
  const [subscription, setSubscription] = useState(user.isFollowing);
  const [subscriber, setSubscriber] = useState(user.followers);

  const dispatch = useDispatch();

  const handleСhange = () => {
    if (subscription) {
      setSubscriber(subscriber - 1);
      setSubscription(false);
    } else {
      setSubscriber(subscriber + 1);
      setSubscription(true);
      // You are following ${user.user}
    }
  };

  useEffect(() => {
    dispatch(
      updateUser({
        userId: user.id,
        followers: subscriber,
        isFollowing: subscription,
      })
    );
  }, [subscription, dispatch, subscriber, user.id]);

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
        <Text>{subscriber.toLocaleString('en-US')} followers</Text>
      </Stats>
      <Button
        type="button"
        style={{ backgroundColor: subscription && '#5cd3a8' }}
        onClick={handleСhange}
      >
        {subscription ? <>Following</> : <>Follow</>}
      </Button>
    </Card>
  );
};

export default TweetCard;
