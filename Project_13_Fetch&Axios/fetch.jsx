// by default the GET, in GET there is no need of the methods in the GET method
export const myFetchGetRequest = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });
    const resJson = await response.json();
    return resJson;
};


// POST METHOD, you need to give the data in the POst METHOD
export const myFetchPostRequest = async (data) =>{

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const resJson = await response.json();
    return resJson;
};

// PUT method, in the put method you need to give the existing data
// and the extra data so that the existing data could stay otherwise erase the data,

export const myFetchPutResponse  = async (id, data) =>{
    const response = await  fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers : {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const resJson = await response.json();
    return resJson;
}

// PATCH Method, in the patch method you need to send yhe unique id and the value which you need to change in the object

export const myFetchPatchResponse = async (idata) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PATCH',
        boyd: JSO.stringify(data),
        headers : {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });
    const resJson = await response.json();
    return resJson;
}


// DELETE method in the fetch we dont need anynof the functionalities just the fetch >> link and the METHOD in the object part

export const myFetchDeleteResponse = async (data) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id, {
        method:'DELETE'
    })
    const resJson = await response.json();
    return resJson;
}