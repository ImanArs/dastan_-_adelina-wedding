import axios from "axios"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const submitGuest = async (data: any) => {
  try {
    const resp = await axios.post('https://636a27e5b10125b78fd2189a.mockapi.io/data', data)
    return resp
  } catch (error) {
    console.error(error);
    throw error
  }
}