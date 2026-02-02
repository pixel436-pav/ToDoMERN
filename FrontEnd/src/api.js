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

export const createTodo = async (data)=> { const response = await axios.post(API_URL,data)
    return response.data.todo // this will return the actual data not the axios response 
}

export const updateTodo = async (id,updatedData) => {const response = await axios.put(`${API_URL}/${id}`,updatedData)
return response.data.todo}

export const toggleTodo = async (id)=>{const response = await axios.patch(`${API_URL}/${id}/toggle`)
response.data.todo}

export const getTodoById = async (id) => {const response = await axios.get(`${API_URL}/${id}`)
response.data.todo}

export const deleteTodo = async (id) => {const response = await axios.delete(`${API_URL}/${id}`)
response.data}