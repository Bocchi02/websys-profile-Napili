import React from "react";
import Infos from "../components/Infos";
import Stats from "../components/Stats";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/blank-cv.pdf";

const About = () => {
    return (
        <div className="section container">
            <section className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Info</h3>
                        <ul className="info__list grid">
                            <Infos />
                        </ul>
                        <a href={CV} download="" className="button">
                            Download CV
                            <span className="button__icon">
                                <FaDownload />
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
