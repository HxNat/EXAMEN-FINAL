import axios from "axios";

export const getUsuarios = async () => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/users");

  return response.data;
};