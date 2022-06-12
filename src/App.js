import React,{useEffect, useState} from 'react';
import './index.css';
import Form from './components/Form';
import Weather from './components/Weather';

const apiKey = '2962982e023c152bac3c08d0451a6dfc';
const App = () => {
    const[latitude,setLatitude] = useState(null);
    const [longitude,setLongitude] = useState(null);
    const [search,setSearch] = useState();
    const [loading,setLoading] = useState(true);
    const [weather,setWeather] = useState('');

// form data
    const searchData = data => setSearch(data);

useEffect(()=>{
    // current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos)=>{
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    },(err)=>{
      if (err.PERMISSION_DENIED) {
        if (!(typeof(search)==='string')) {
            setSearch('mumbai');   
        }
      }
    });
  }

    //condition to run asyn function
    if ((latitude != null && longitude != null) || search != null) {
    getWeather(latitude,longitude,search)
  }
},[latitude,longitude,search]);

// asyn function
const getWeather = async (lat,lon,search) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  if ((typeof lat == 'number' && typeof lon == 'number' && typeof search == 'string') || (typeof lat == 'object' && typeof lon == 'object')) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
  }
   const api = await fetch(url);
  setLoading(false);
  setWeather( await api.json());
};

if (loading) {
  return<h2 className="text-center py-5 text-white">Loading</h2>
}
  return (
    <>
        <Form searchData={searchData}/>
        {!weather.main ? <h2 className='text-center text-white bg-danger py-4'>no data found</h2>:<Weather weather={weather}/> }
        <p className="text-center py-5 text-white">Develop by <a href="#">Mustafa dabir</a></p>
    </>
  )
}

export default App;