import React, { useState } from 'react';
const api = {
  key: "2387b871ee3326872b7e4f4735f6b383",
  url: "https://api.openweathermap.org/data/2.5/"
}


function App() {

    const [query, setQuery] = useState('');
    const [weather, setWeather]= useState('');

    const search = evt => {
      if(evt.key === "Enter") {
        fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result =>  {
          setWeather(result)
          setQuery('');
          console.log(result);

      });
    }
  }




  const dateBuilder = (d) =>{ /* ma const dateBuilder */
    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août",
    "Septembre", "Octobre", "Novembre", "Décembre"];
    let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]; 
    let year = d.getFullYear();

    return `${day}  ${date} ${month} ${year}`
  }
  return (
    <div className="app">
     <div className="container">
        <div className="container-search">
            <input type="text" 
              className="search-box"
              placeholder="Quel temps fait il ?"
              onChange= {e => setQuery(e.target.value)}
              value={query}
              onKeyPress={ search }
              />
        </div>
          <div className="container-info">
            <div className="date"> {dateBuilder(new Date())} </div>
            <div className="ville"> New york </div>
            <div className="temp"> Temps celsius</div>
          </div>
        
     </div>
    
    </div>
    
  );
}

export default App;
