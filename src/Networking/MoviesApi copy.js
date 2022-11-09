import axios from "axios";

// Creating a backend instance
const backendInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {},
    params: {
        api_key: "86a0c006f7e26ad9c7ecb2be8ed898de"
    },
})

// Function to get all movies
const TestRoute = async () => {
    try{
        const result = await backendInstance.get("list/1");
        return result;
    } catch(Exceptioin){
        //displaying the error
        console.log(Exceptioin);
        return Exceptioin;
    }
};


export default { TestRoute }