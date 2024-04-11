import React, { useState, useEffect } from 'react';
import { fetchData } from './services/dataService';
import { handleData } from './handlers/dataHandler';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

 

  useEffect(() => {
    const fetchDataAndHandle = async () => {
      try {
        const response = await fetchData();
        const handledData = handleData(response);
        setData(handledData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDataAndHandle();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {data && data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

