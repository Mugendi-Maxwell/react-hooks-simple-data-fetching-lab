// create your App component here
import { useEffect, useState } from "react";



function App() {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setPics([data.message]); 
            });
    }, []); 

    return (
        <div>
            {pics.length === 0 ? (
                <p>Loading...</p> 
            ) : (
                pics.map((pic, index) => (
                    <img key={index} src={pic} alt="A Random Dog" />
                ))
            )}
        </div>
    );
}




export default App;