import axios from 'axios';

const API_URL = 'http://localhost:3001/api/todo'

export const testConnection = async () => {
    try {
        console.log('Testing connection to backend ')
        const response = await axios.get(API_URL)
        return  response.data
    } catch (error) {
        console.error('Connection failed',error.message);
        return null;


    }
}

export const getAllTodo = async () => {const response = await axios.get(API_URL)
    return response.data ;}

export const createTodo = (data)=> axios.post(API_URL,data)

export const updateTodo = (id,updatedData) => axios.put(`${API_URL}/${id}`,updatedData)

export const toggleTodo = (id)=>axios.patch(`${API_URL}/${id}`)

export const getTodoById = (id) =>
    axios.get(`${API_URL}/${id}`)

export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`)