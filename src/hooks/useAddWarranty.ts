import { useMutation } from "react-query";
import axios from "axios";

function useAddWarranty() {
  const URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/warranty-registrations`;

  return useMutation((warranty) => axios.post(URL, warranty));
}

export default useAddWarranty;
