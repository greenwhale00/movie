import React from "react";
import List from './List';
import './common.scss'

function App() {

  const genreList = [
    "Action",
    "Fantasy",
    "Romance",
    "Thriller",
    "Comedy",
    "Crime",
    "Animation",
    "Adventure",
    "Drama",
    "Western"
  ]


  return (
    <div>

      <ul className="List">
        {
          genreList.map(it => {
return {
  <li>
  <Link to ={it}>{it}</Link>
  </li>
}
          })
        }
      </ul>

<Routes>
  {
    genreList.map(it => {
      return (
        <Route path={genreList[0]} />
      )
    })
  }
  
</Routes>




     
        <List genre='Drama' limit={20} />
        <List genre='Action' limit={20} />
        <List genre='horror' limit={20} />
     

    </div >

  );
}

export default App;
