import axios from "axios";

const URL = "https://mock-server-rest.onrender.com";


export const get_restaurant = () => axios.get(URL+"/fitmes")
    .then(function(response){
        return response.data.edges;
    })
    .catch(function(error){
        console.error(error);
    })

export const get_restaurant_by_id = (id : any) => axios.get(URL+"/fitme/"+id)
    .then(function(response){
        return response.data;
    })
    .catch(function(error){
        console.error(error);
    })