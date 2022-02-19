import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="cardPlanet">
        <Title headline="Planetas" />
        <div className="divSolar">
          {planets.map((planet, index) => (
            <PlanetCard
              planetImage={ planet.image }
              planetName={ planet.name }
              key={ index }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
