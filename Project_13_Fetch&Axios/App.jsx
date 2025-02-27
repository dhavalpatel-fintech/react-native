import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  myFetchDeleteResponse,
  myFetchGetRequest,
  myFetchPatchResponse,
  myFetchPostRequest,
  myFetchPutResponse,
} from './FetchData/fetch';
import {myAxiosGetResponse, myAxiosPostResponse} from './Axios/axios';

const App = () => {
  // FETCH IN THE JAVASCRIPT:
  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   const getData = async () => {
  //     // const res = await myFetchGetRequest();
  //     const data = {
  //       id:1,
  //       // title: 'foo',
  //       title: 'pooo', // especially changed for the PATCH method in the fetch
  //       body: 'bar',
  //       userId: 1,
  //     };
  //     // const res = await myFetchPostRequest(data);
  //     // const res = await myFetchPutResponse(1, data);
  //     // const res =  await myFetchPatchResponse(data);
  //     const res = await myFetchDeleteResponse(data);
  //     console.log('data', res);
  //   };

  // AXIOS IN THE JAVA SCRIPT:
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // get

    // await myAxiosGetResponse()
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // post
    await myAxiosPostResponse({id:62, name:'Dhaval Patel'})
      .then(response => {
        console.log("response data: ",  response.data);
        console.log('response status: ',response.status);
      })
      .catch(error => {
        console.log('error: ',error);
      });

      // put 
    await myFetchPutResponse()
      .then(response => {
        console.log(response.data);
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });

      // patch


      // delete
      await myFetchDeleteResponse();
  
  };
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
