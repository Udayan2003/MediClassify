import React from "react";
import TypewriterComponent from "typewriter-effect";

const styles = {
    'font-size':'2.5em',
    color: 'white',
    'text-align':'center',
};

function Home() {
    return (
        <div className='Body' style={styles}>
            <TypewriterComponent onInit={(typewriter) => { 
                typewriter.typeString('Welcome to our medical image classification Website 👋')
                .changeDelay(30)
                .start()
                }
            }/>
        </div>
    )
}
export default Home;