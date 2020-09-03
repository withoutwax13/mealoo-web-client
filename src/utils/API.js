import axios from 'axios'

{/* Note: adding https://cors-anywhere.herokuapp.com as CORS error solution is only temporary */}

const API = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://mealoodietapp.herokuapp.com/'
})

export default API