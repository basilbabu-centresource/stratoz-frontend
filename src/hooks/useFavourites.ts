import { useQuery } from "react-query";
import axios from "axios";
import api from "../api";

function useFavourites() {
  return useQuery("favourites", async () => {
    const { data } = await api.get(`/favorites`);
    return data;
  });
}

export default useFavourites;
