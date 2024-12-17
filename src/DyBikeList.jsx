import React, { useState } from 'react';
import './Dylist.css';

function Dylist() {
    const [bike, setBike] = useState(["Karizma", "Royal Enfield", "Hero Splender"]);
    let removeBike = () => {
        setBike(bike.slice(0, -1));
        document.getElementById('deletedbike').innerText="🗑️" + bike.slice(-1)
        document.getElementById('binbike').innerText = "Removed Bike : "
    };
    let addBike = () => {
        let carr = document.getElementById('input2').value;
        if (carr === '') {
            alert('Enter a Bike name');
        } else {
            setBike([...bike, carr]);
            document.getElementById('input2').value = '';
        }
    };
    return (
        <>
            <div className="container">
               <h3 className= "bikesListHead" >
                    Bikes List
                </h3>
                <div className="imageContainer">
                    <img src="/bikehead.jpg" width='200px' alt="Car Header" />
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Enter Bike Name" id="input2" />
                </div>
                <div className="buttonContainer">
                    <button id="green" onClick={addBike}>
                        Set 🏍️
                    </button>
                    <button id="red" onClick={removeBike}>
                        <img src="https://cdn-icons-png.freepik.com/256/4556/4556942.png?uid=R117028257&ga=GA1.1.1665732723.1704781657&semt=ais_hybrid"
                            width="25px"
                            alt="deleteimage"
                        />
                    </button>
                </div>
                <div className="listContainer">
                    {bike.map((x, index) => (<li key={index}>🏍️ {x}</li>))}
                </div>
                <div className="deletedContainer">
                    <h2 id='binbike'>
                    </h2>
                    <p id='deletedbike'></p>
                </div>
            </div>
        </>
    );
}

export default Dylist;
