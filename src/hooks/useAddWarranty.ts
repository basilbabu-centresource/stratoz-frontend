import { useMutation } from "react-query";
import api from "../api";

function useAddWarranty() {
  const URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/warranty-registrations`;

  return useMutation((warranty: any) => api.post(URL, warranty));
}

export default useAddWarranty;
