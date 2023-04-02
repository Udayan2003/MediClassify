import React from "react";

const styles = {
    color: 'white',
    'text-align':'center',
};

function Home() {
    return (
        <div className='Body' style={styles}>
            Welcome to our medical image classification website!<br/> 
            Our website provides a platform for medical professionals<br/> 
            and researchers to upload and classify medical images based on selected criteria.<br/> 
            Our image classification API uses state-of-the-art algorithms<br/>
            to accurately classify the uploaded images, and the compressed images <br/>
            are stored securely in our database. With our easy-to-use search <br/>
            function, you can quickly and easily find images<br/>
            based on a class or patient ID.<br/>
        </div>
    )
}
export default Home;