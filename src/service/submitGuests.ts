import axios from "axios"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const submitGuest = async (data: any) => {
  try {
    const resp = await axios.post('http://localhost:3000/api/guests', data)
    console.log(resp);
    return resp
  } catch (error) {
    console.error(error);
    throw error
  }
}