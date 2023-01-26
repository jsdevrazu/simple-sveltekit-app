import axios from "axios";

export async function login(payload={}, url = '') {
  try {
    const { data } = await axios.post(url, payload);
    return { sucessfull: true, data };
  } catch (error) {
    return { error, isError:true };
  }
}
