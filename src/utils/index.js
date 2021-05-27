import axios from "axios";

export const getData = async (setter) => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  setter(res.data);
};
