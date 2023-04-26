import ButtonBack from 'components/ButtonBack/ButtonBack';
import Filters from 'components/Filters/Filters';
import TweetsList from 'components/TweestList/TweestList';
import { TweestsBtn } from './Tweets.styled';

const Tweets = () => {
  return (
    <>
      <TweestsBtn>
        <ButtonBack />
        <Filters />
      </TweestsBtn>
      <TweetsList />
    </>
  );
};

export default Tweets;
