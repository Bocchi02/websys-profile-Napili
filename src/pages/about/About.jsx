import React from "react";

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
                        <ul className="info__list grid"></ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
