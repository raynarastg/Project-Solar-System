import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
// import planets from '../data/planets';
import data from '../DataPlanets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="planets-cards">
          {data.map((planeta) => (
            <PlanetCard
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
              planetClass={ planeta.name }
            />))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
