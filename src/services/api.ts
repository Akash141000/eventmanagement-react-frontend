import axios from "axios"

const authUri = '/api/auth';
const eventsUri = '/api/events';
const bookingUri = '/api/bookings';


export const login = (data:any)=>{
    return axios.post(`${authUri}/login?type=${data.loginType}`,data)
}

export const signup = (data:any)=>{
    return axios.post(`${authUri}/signup?type=${data.loginType}`,data)
}

export const getEvents = () =>{
    return axios.get(`${eventsUri}/getEvents`)
}

export const addEvent = (data:any) =>{
    return axios.post(`${eventsUri}/addEvent`,data)
}
