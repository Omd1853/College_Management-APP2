import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://your-backend-api.com';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    await AsyncStorage.setItem('userToken', response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCollegeStats = async () => {
  // For demo purposes, returning static data
  // In production, this would fetch from your backend
  return {
    facultyCount: 150,
    studentCount: 3000,
    passPercentage: 92.5
  };
};