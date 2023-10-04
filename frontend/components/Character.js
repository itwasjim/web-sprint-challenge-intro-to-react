import React, {useState} from 'react'

function Character({people, homeworld}) {
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const[render, setRender] = useState(false);
  const togglePlanet = () => setRender(!render);

  return (
    <div className="character-card" onClick={togglePlanet}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">
        {people.name}
      </h3>
      {render && (
        <p>
          Planet:
          <span className="character-planet">
            {homeworld}
          </span>
        </p>
      )}
    </div>
  );
}

export default Character
