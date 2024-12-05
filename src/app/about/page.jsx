import React from 'react';
import AboutMain from '../../components/about/AboutMain';
import Vision from '../../components/about/Vision';
import Rols from '../../components/about/Rols';
export default function Book() {
    return (
        <div className="about-page">
            <AboutMain></AboutMain>
            <Vision></Vision>
            <Rols></Rols>
        </div>
    );
}
