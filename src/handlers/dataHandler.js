//este es el procesamiento de los datos y su manejo de errores
export const handleData = (data) => {
    try {
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data.map((item) => ({
        id: item.id,
        name: item.name.toUpperCase(),
      }));
    } catch (error) {
      throw new Error(`Error handling data: ${error.message}`);
    }
  };