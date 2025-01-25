import axios from "axios";

const API_URL = "http://localhost:5000";
// const API_ORDERS = "/orders";
export const createOrder = async (order) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, order);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const getOrderDetails = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
