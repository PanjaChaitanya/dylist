import React, { useState } from 'react';
import './Dylist.css';

function Dylist() {
    const [mobile, setMobile] = useState(["Samsung", "Black Berry", "iPhone"]);

    let removeMobile = () => {
        setMobile(mobile.slice(0, -1));
        document.getElementById('deleted').innerText= "🗑️" + mobile.slice(-1)
        document.getElementById('bin').innerText = "Removed Mobile : "
    };
    let addMobile = () => {
        let carr = document.getElementById('input3').value;
        if (carr === '') {
            alert('Enter Mobile name');
        } else {
            setMobile([...mobile, carr]);
            document.getElementById('input3').value = '';
        }
    };
    return (
        <>
            <div className="container">
               <h3 className= "mobilesListHead" >
                    Mobiles List
                </h3>
                <div className="imageContainer">
                    <img src="/mobilehead.jpg" width='200px' alt="Car Header" />
                </div>
                <div className="inputbox">
                    <input type="text" placeholder="Enter Mobile Name" id="input3" />
                </div>
                <div className="buttonContainer">
                    <button id="green" onClick={addMobile}>
                        Set 📱
                    </button>
                    <button id="red" onClick={removeMobile}>
                        <img src="https://cdn-icons-png.freepik.com/256/4556/4556942.png?uid=R117028257&ga=GA1.1.1665732723.1704781657&semt=ais_hybrid"
                            width="25px"
                            alt="deleteimage"
                        />
                    </button>
                </div>
                <div className="listContainer">
                    {mobile.map((x, index) => (<li key={index}>📱 {x}</li>))}
                </div>
                <div className="deletedContainer">
                    <h2 id='bin'>

                    </h2>
                    <p id='deleted'></p>
                </div>
            </div>
        </>
    );
}

export default Dylist;
