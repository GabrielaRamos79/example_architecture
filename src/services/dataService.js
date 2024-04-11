//esta es la solicitud a la API y su manejo de errores

export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/data');
      if (!response.ok) {
        throw new Error('Error fetching data from API');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };