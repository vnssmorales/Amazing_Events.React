import axios from "axios";

const baseUrl = "https://mindhub-xj03.onrender.com/api/amazing";

export const fetchData = async () => {
  try{
    const response = await axios.get(baseUrl);
    const allData = response.data.events;
    return Array.isArray(allData) ? allData : [allData];
  }catch(error){
    console.log(error);
    return [];
  }
}; 


/*export const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        const allData = response.data.events;
        setData(Array.isArray(allData) ? allData : [allData]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
}; */

 




