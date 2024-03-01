/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'
import {  PassangerType, Usertype , NewUser} from '../type/index'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/'
const FAKE_DELAY = 1500

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
const get = async <T>(endpoint: string) => {
	const response = await instance.get<T>(endpoint)
	// Simulate a delay
	!!FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY))
	return response.data
}



export const getUser = () => {
	return get<Usertype[]>("/drivers")
}


export const getPassenger = () => {
	return get<PassangerType[]>("/passengers")
}

export const createRide = async (newRide: NewUser) => {
	const response = await axios.post<Usertype>("http://localhost:8001/ride", newRide)
	return response.data
}


//test 

export const getRide = () => {
	return get<Usertype[]>("/drivers")
}