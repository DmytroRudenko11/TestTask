import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { FidgetSpinner } from "react-loader-spinner";

import { handlePagination } from "../services/handlePagination";
import { fetchUsers } from "../services/fetchAPI";
import { TweetCard } from "../components/TweetCard";
import { DropdownFilter } from "../components/DropdownFilter";
import { filterTweets } from "../services/filterTweets";
import { NothingFound } from "../components/NothingFound";

export const TweetsPage = () => {
  const [data, setData] = useState([]);
  const [dataToRender, setDataToRender] = useState([]);
  const [filterOption, setFilterOption] = useState("");
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  const tweetsListRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await fetchUsers();
      setData(result);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    const filteredData = filterTweets(filterOption, data);
    const { paginatedData, totalPages } = handlePagination(
      filteredData,
      page,
      limit
    );
    setLoadMore(true);
    setDataToRender((prev) => [...prev, ...paginatedData]);

    if (page === totalPages) {
      setLoadMore(false);
      if (totalPages !== 1) toast.info("You riched the last page of tweets");
    }
    handleScrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, data, filterOption]);

  useEffect(() => {
    handleScrollToBottom();
  }, [dataToRender]);

  const handleScrollToBottom = () => {
    if (tweetsListRef.current) {
      tweetsListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const pageHandler = () => {
    setPage((prev) => prev + 1);
  };

  const filterHandler = (option) => {
    setFilterOption(option);
    setDataToRender([]);
    setPage(1);
  };

  return (
    <TweetsSection>
      {isLoading && (
        <FidgetSpinner
          height="100"
          width="100"
          wrapperClass="dna-wrapper"
          ballColors={["#e6c001", "#17aa17", "#0000ff"]}
          backgroundColor="#5736a3"
        />
      )}
      {!isLoading && (
        <ButtonBar>
          <GoBackBtn onClick={goBack}>Back</GoBackBtn>
          <DropdownFilter filterHandler={filterHandler} />
        </ButtonBar>
      )}
      {dataToRender.length === 0 && !isLoading && <NothingFound />}
      {dataToRender.length > 0 && (
        <TweetsList ref={tweetsListRef}>
          {dataToRender.map(({ id, name, avatar, followers, tweets }) => (
            <TweetCard
              key={id}
              id={id}
              name={name}
              avatar={avatar}
              followers={followers}
              tweets={tweets}
            />
          ))}
        </TweetsList>
      )}
      {!isLoading && loadMore && dataToRender.length > 0 && (
        <LoadMoreBtn
          onClick={() => {
            pageHandler();
          }}
          type="button"
        >
          Load more
        </LoadMoreBtn>
      )}
    </TweetsSection>
  );
};

const TweetsSection = styled.section`
  width: 100%;
  position: relative;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;

const GoBackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;

  color: #5736a3;
  background-color: #e3ca3f;

  border-radius: 8px;
  -webkit-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  -moz-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);

  &:hover {
    background-color: #fcd929;
  }
`;

const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150x;
  height: 50px;

  color: #5736a3;
  background-color: #e3ca3f;

  border-radius: 8px;
  -webkit-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  -moz-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);

  &:hover {
    background-color: #fcd929;
  }
`;

const TweetsList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 20px;
`;
