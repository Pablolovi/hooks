// src/components/CharacterCard.jsx
import React from 'react';

const CharacterCard = ({ name, image, title }) => {
    return (
    <div className="card">
        <h2>{title}</h2>
        <p>{name}</p>
        <img src={image} alt={name} />
    </div>
    );
};

export default CharacterCard;
