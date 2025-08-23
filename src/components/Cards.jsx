import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ image, title, description, link, linkText }) => {


    return (
        <div className="card">
            <div className="card1">
                <img className="img" src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <div id="btn-container">
                    {link.startsWith('http') ? (
                        <a href={link} className="btn" target="_blank" rel="noopener noreferrer">{linkText}</a>
                    ) : (
                        <Link to={link} className="btn">{linkText}</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cards;
