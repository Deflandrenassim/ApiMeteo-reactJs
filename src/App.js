import React from 'react';
const api = {
  key: "2387b871ee3326872b7e4f4735f6b383",
  url: "https://api.openweathermap.org/data/2.5/"
}


function App() {
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
     <div class="container">
        <div class="container-search">
            <input type="text" 
              className="search-box"
              placeholder="Quel temps fait il ?"
              />
        </div>
          <div class="container-info">
            <div class="date"> {dateBuilder(new Date())} </div>
            <div class="ville"> New york </div>
            <div class="temps"> Temps celsius</div>
          </div>
        
     </div>
    
    </div>
    
  );
}

export default App;
