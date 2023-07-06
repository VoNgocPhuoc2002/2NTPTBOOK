const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");

export const getUserId = async () => {
  try {
    const userId = await AsyncStorage.getItem('userId');
    console.log('User ID:', userId);
    if (userId) {
      return userId;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};