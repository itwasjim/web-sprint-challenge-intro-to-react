import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState ([])

  useEffect(() => {
    axios.get(urlPeople)
    .then(res => {
      setPeople(res.data)
    })
    .catch(err => {console.err(err)})
  
    axios.get(urlPlanets)
    .then(res => {
      setPlanets(res.data)
    })
    .catch(err => {console.err(err)})
  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}

    {people.map((people) => {
      const homeworld = planets.find(planet => planet.id === people.homeworld)?.name || 'Error finding planet';
      return (
        <Character homeworld={homeworld} key={people.id} people={people}/>
      )
    })}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
