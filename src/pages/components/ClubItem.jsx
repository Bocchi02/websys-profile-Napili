import React from "react";
import parse from "html-react-parser";

const ClubItem = ({ icon, title, desc }) => {
    return (
        <div className="resume__item">
            <div className="resume__icon">{icon}</div>
            <h3 className="resume__subtitle">{parse(title)}</h3>
            <p className="resume__description">{parse(desc)}</p>
        </div>
    );
};

export default ClubItem;
