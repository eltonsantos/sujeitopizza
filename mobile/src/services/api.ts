import axios from 'axios';

// Needed use ngrok to open port
// Install ngrok and run: ngrok http <YOUR BACKEND PORT>
const api = axios.create({
  baseURL: 'https://7109-2804-248-ef23-b000-de8f-1796-f185-487b.ngrok-free.app'
})

export { api }