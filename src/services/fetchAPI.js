import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://64a7b8c5dca581464b84a70b.mockapi.io/api";

export const fetchUsers = async () => {
  try {
    const data = await axios.get("/users");

    return data.data;
  } catch (error) {
    console.log(error.message);
    toast.error("Sorry, smth went wrong");
  }
};

export const fetchFollowTweet = async (id, followers, signal) => {
  try {
    const data = await axios.put(
      `/users/${id}`,
      {
        followers,
      },
      {
        signal,
      }
    );

    return data.data;
  } catch (error) {
    if (error.response?.status === 429) {
      toast.warning("Clicking so fast - is not a good idea");
    }
    if (error.name === "CanceledError") {
      throw error;
    } else {
      console.log(error);
      toast.error("Sorry, smth went wrong");
    }
  }
};
