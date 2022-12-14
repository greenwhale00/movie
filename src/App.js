import React from 'react'
import List from './List';
import './common.scss'
import { Link, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Glist from './Glist';
import All from './All';
import Detail from './Detail';

const App = () => {
  const genreList = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Romance",
    "Thriller",
    "Western"
  ]
  return (
    <div>

      <Header>
        <ul className='flex'>
          {
            genreList.map(it => {
              return (
                <li>
                  <Link to={it}>{it}</Link>
                </li>
              )
            })
          }
        </ul>
      </Header>
      <Routes>
        <Route path="/" element={<Main limit={50} />} />
        {
          genreList.map(it => {
            return (
              <Route path={it} element={<Glist genre={it} limit={20} />} />
            )
          })
        }
        <Route path="/detail/:id" element={<Detail limit={50} />} />
      </Routes>
      <All />

      <List genre='Drama' limit={16} />
      <List genre='Action' limit={16} />
      <List genre='Horror' limit={16} />
    </div>
  )
}

export default App