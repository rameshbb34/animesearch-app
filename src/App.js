import React from 'react';
import useSWR from 'swr';
import './App.css'
import AnimeCard from './components/AnimeCard';
import fetcher from './fetcher';


const API_URL = 'https://api.aniapi.com/v1/anime'

const App = () => {
    
    const {data,error} = useSWR(API_URL, fetcher)
   

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading</div>

    console.log(data)

  return (
    <div className="App">
      <h1>AniDB</h1>
      <AnimeCard data={data} error={error}/>
    </div>
  );
}

export default App;