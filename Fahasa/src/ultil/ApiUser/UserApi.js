import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosInstance from "../AxiosIntance";
import { AppContext } from "../AppContext";
import { getUserId } from "../GetUserId";

// export const login = async (email, password, navigation, setIsLogin) => {
// const {setIsLogin} = useContext(AppContext)

//   try {
//     const response = await AxiosInstance().post('api/users/login', {
//       email: email, 
//       password: password
//     });
    
//     if (response.user) {
//       await AsyncStorage.setItem("userId", response.user._id);
//       console.log(response.user._id);
      
//       if (response.user.isFirstLogin) {
//         navigation.navigate("EditProfile");
//       } else {
//         setIsLogin(true);
//       }
//     }
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }


  export const register = async (email, password,navigation) => {
    try {
      const response = await AxiosInstance().post('api/users/register', { email:email, password:password });
      console.log(response);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  export const updateProfile = async (name,dateofbirth,country,mobile,gender) => {
    try {
      const userId = await getUserId();
      console.log("userId: ",userId);
      if (userId) {
        const response = await AxiosInstance().post(`api/users/${userId}/updateEditProfile`, {
          name: name,
          dateofbirth: dateofbirth,
          country: country,
          mobile: mobile,
          gender: gender,
        });
        console.log("response",response)
      }
    } catch (error) {
      console.log('Save Changes Error:', error);
    }
  }


  
