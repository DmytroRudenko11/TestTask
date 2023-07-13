import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import topimage from "../images/topimage.png";
import { fetchFollowTweet } from "../services/fetchAPI";

export const TweetCard = ({ id, avatar, followers, tweets }) => {
  const [following, setFollowing] = useState(false);
  const [updFollowers, setUpdFollowers] = useState(followers);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const isFollowing = localStorage.getItem(`following_${id}`);
    if (isFollowing === "true") {
      setFollowing(true);
    }

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [id, controller]);

  const handleFollow = async () => {
    if (controller) {
      controller.abort();
    }

    const newController = new AbortController();
    setController(newController);

    let request;
    if (!following) {
      request = updFollowers + 1;
      setFollowing(true);
      localStorage.setItem(`following_${id}`, "true");
    }
    if (following) {
      request = updFollowers - 1;
      setFollowing(false);
      localStorage.removeItem(`following_${id}`);
    }
    try {
      const updUser = await fetchFollowTweet(id, request, newController.signal);
      setUpdFollowers(updUser.followers);
    } finally {
      setController(null);
    }
  };

  return (
    <CardWrapper>
      <TopSideImage src={topimage} alt={"bgcimage"} />
      <AvatarWrapper>
        <Avatar src={avatar} alt={"user image"} />
      </AvatarWrapper>
      <BottomSideInfo>
        <TextInfo>
          {tweets === 1 ? `${tweets} tweet` : `${tweets} tweets`}
        </TextInfo>
        <TextInfo>
          {updFollowers === 1
            ? `${updFollowers} Follower`
            : `${updFollowers} Followers`}
        </TextInfo>
        <Btn onClick={handleFollow} $following={following}>
          {following ? "following" : "follow"}
        </Btn>
      </BottomSideInfo>
    </CardWrapper>
  );
};

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
};

const CardWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 460px;
  padding-bottom: 36px;
  padding-top: 28px;
  border-radius: 20px;

  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);

  &::before {
    position: absolute;
    top: 50%;
    content: "";
    display: block;
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
      0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
      0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  }
`;

const TopSideImage = styled.img`
  height: 168px;
  width: 308px;
`;

const AvatarWrapper = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;

  overflow: hidden;
`;

const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

const BottomSideInfo = styled.div`
  text-align: center;
`;

const TextInfo = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Btn = styled.button`
  height: 50px;
  width: 196px;
  text-transform: uppercase;
  background-color: ${(props) => (props.$following ? "#5CD3A8" : "#ebd8ff")};
  border-radius: 10px;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
`;
