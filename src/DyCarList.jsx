import React, { useState } from 'react';
import './Dylist.css';

function Dylist() {
    const [car, setCar] = useState(["Ferrari", "Jaguar", "Rolls Royce"]);

    let removeCar = () => {
        setCar(car.slice(0, -1));
        document.getElementById('deletedcar').innerText= "🗑️" + car.slice(-1)
document.getElementById('bincar').innerText = "Removed Car : "
    };
    let addCar = () => {
        let carr = document.getElementById('input').value;
        if (carr === '') {
            alert('Enter a car name');
        } else {
            setCar([...car, carr]);
            document.getElementById('input').value = '';
        }
    };
    return (
        <>
            <div className="container">
                <h3 className= "carsListHead" >
                    Cars List
                </h3>
                <div className="imageContainer">
                    <img src="/carhead.jpg" width='200px' alt="Car Header" />
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Enter Car Name" id="input" />
                </div>
                <div className="buttonContainer">
                    <button id="green" onClick={addCar}>
                        Set 🚘
                    </button>
                    <button id="red" onClick={removeCar}>
                        <img src="https://cdn-icons-png.freepik.com/256/4556/4556942.png?uid=R117028257&ga=GA1.1.1665732723.1704781657&semt=ais_hybrid"
                            width="25px"
                            alt="deleteimage"
                        />
                    </button>
                </div>
                <div className="listContainer">
                    {car.map((x, index) => (<li key={index}>🚘 {x}</li>))}
                </div>
                <div className="deletedContainer">
                    <h2 id='bincar'>
                    </h2>
                    <p id='deletedcar'></p>
                </div>
            </div>
        </>
    );
}

export default Dylist;