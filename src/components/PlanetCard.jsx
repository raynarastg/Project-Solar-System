import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    const { planetClass } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name" className="planetName">{planetName}</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `${planetClass}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetClass: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
export default PlanetCard;
