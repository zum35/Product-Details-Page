import { useState,useEffect} from 'react'

const useFetch=(baseUrl,id)=>{
  const [loading, setLoading] = useState(true);
const [data,setData]=useState(null);
const [error,setError]=useState(null);
useEffect(()=>{
  const fetchData=async()=>{
    setLoading(true);
    try{
      const response=await fetch(`${baseUrl}/products/${id}`);
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      const result=await response.json();
      setData(result);
    }catch(error){
      setError(error.message);
    }finally{
      setLoading(false);
    }
  };
if(id){
  fetchData();
}
},[baseUrl,id]);
return{data,loading,error};
};
export default useFetch;

  