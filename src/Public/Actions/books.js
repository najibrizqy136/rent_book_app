import Axios from 'axios';

const token = window.localStorage.getItem("token");

export const getBooks = (Source, search) => {
  let url = `${Source}`
  if(search !== null )
    url += `?search=${search}`

  return {
    type: 'GET_BOOKS',
    payload: Axios.get (url),
  };
};

export const addBook = (data) => {
  return {
    type:'ADD_BOOKS',
    payload: Axios.post('http://localhost:8016/books', data, {
        headers:{
          Authorization : token
        }
      }
    )
  }
}
