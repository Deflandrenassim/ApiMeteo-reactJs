import React from 'react';
const api = {
  key: "2387b871ee3326872b7e4f4735f6b383",
  url: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app">
     <div class="container">
        <div class="container-search">
            <input type="text" 
              className="search-box"
              placeholder="Quel temps fait il ?"
              />
        </div>
     </div>
    
    </div>
    
  );
}

export default App;
