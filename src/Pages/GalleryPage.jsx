import React from 'react';
import PhotoGallary1 from "../Components/PhotoGallary1.jsx";
import PhotoGallary2 from "../Components/PhotoGallary2.jsx";
import "../assets/CSS/style.css";
import PhotoGallary3 from "../Components/PhotoGallary3.jsx";
import PhotoGallary4 from "../Components/PhotoGallary4.jsx";

const GalleryPage = () => {
    return (
        <div>
            <PhotoGallary1></PhotoGallary1>
            <PhotoGallary2></PhotoGallary2>
            <PhotoGallary3></PhotoGallary3>
            <PhotoGallary4></PhotoGallary4>
        </div>
    );
};

export default GalleryPage;