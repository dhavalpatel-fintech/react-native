import axios from 'axios';


// GET MEthod in the axios:
export const myAxiosGetResponse = async () =>{
    const response = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
    })
    return response; 
}


// POST Method in the axios:
export const myAxiosPostResponse = async (id, data) =>{
    const response = await axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts' + id, 
        data : data,
    });
    return response;
}

// put in the axios:
export const myAxiosPutResponse = async (id, data) =>{
    const response = await axios({
        method: 'Put',
        url: 'https://jsonplaceholder.typicode.com/posts' + id, 
        data : data,
    });
    return response;
}

// patch in the axios
export const myAxiosPatchResponse = async (id, data) =>{
    const response = await axios({
        method: 'PATCH',
        url: 'https://jsonplaceholder.typicode.com/posts' + id, 
        data : data,
    });
    return response;
}

// delete
export const myAxiosDeleteResponse = async (id, data) =>{
    const response = await axios({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts' + id, 
        data : data,
    });
    return response;
}
