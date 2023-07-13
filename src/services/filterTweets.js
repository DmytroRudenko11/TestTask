export const filterTweets = (filterOption, data) => {
  const storedId = JSON.parse(localStorage.getItem("following")) || [];

  switch (filterOption) {
    case "Not followed":
      return data.filter((user) => !storedId.includes(user.id));

    case "Followed by you":
      return data.filter((user) => storedId.includes(user.id));

    default:
      return data;
  }
};
