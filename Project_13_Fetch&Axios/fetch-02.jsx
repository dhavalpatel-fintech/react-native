import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  // useEffect to fetch data on mount (if needed)
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () =>{
    setIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }

  return (
    <View>
      {isLoading && <ActivityIndicator size={100} />}
      <Button title="Make an API Call" onPress={fetchData} />
      
      {data && (
        <View>
          <Text>Title: {data.title}</Text>
          <Text>Body: {data.body}</Text>
        </View>
      )}
    </View>
  );
};

export default App;
