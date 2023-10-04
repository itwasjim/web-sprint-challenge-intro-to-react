import React, {useState} from 'react'

function Character(props) { 
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const[render, setRender] = useState(false);

  function togglePlanet(homeworld) {
    return props.planets.map((planet) =>  {
      if (planet.id === homeworld) {
        return planet.name;
      }
    })
  }

  const toggle = () => {
    setRender(!render);
  };

  return (
    <div className="character-card">
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 onClick={() => toggle()} className="character-name">
        {props.people.name}
      </h3>
      {render ? (
        <p>
          Planet: {" "}
          {
            <span className="character-planet">
              {" "}
              {togglePlanet(props.people.homeworld)}
            </span>
          }
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Character
