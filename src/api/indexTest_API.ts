/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'
import { TRide } from '../type/index'

const BASE_URL =  'http://localhost:8001'


// Create a new axios instance
const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})

/**
 * Make a generic HTTP GET request.
 *
 * @param endpoint Endpoint to get
 * @returns
 */


const getMethod = async <T>(endpoint: string) => {
	const response = await instance.get<T>(endpoint)
	return response.data
}



/**
 * Get all todos
 */
export const getRide = () => {
	return getMethod<TRide[]>("/ride")
}




