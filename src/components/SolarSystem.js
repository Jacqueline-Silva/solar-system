import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet, index) => (
          <PlanetCard
            planetImage={ planet.image }
            planetName={ planet.name }
            key={ index }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
