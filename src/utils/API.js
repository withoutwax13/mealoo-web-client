import axios from 'axios'

const API = axios.create({
	baseURL: 'https://mealoodietapp.herokuapp.com/'
})

export default API