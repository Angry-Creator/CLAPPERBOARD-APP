import axios from "axios";

// Creating a backend instance
const backendInstance = axios.create({
    baseURL: "https://api.themoviedb.org/4/",
    params: {
        api_key: "86a0c006f7e26ad9c7ecb2be8ed898de"
    },
})

// Function to get all movies
const TestRoute = async (pageId=1) => {
    try{
        const result = await (await backendInstance.get(`list/${pageId}`)).data;
        return result;
    } catch(Exceptioin){
        //displaying the error
        console.log(Exceptioin);
        return Exceptioin;
    }
};



export default { TestRoute }