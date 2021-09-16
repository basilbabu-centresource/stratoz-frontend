import { useQuery } from "react-query";
import axios from "axios";

function useStores() {
  return useQuery("stores", async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/store-details`
    );
    return data;
  });
}

export default useStores;
