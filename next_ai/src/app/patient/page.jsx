"use client";

import React, { useState } from "react";
import styles from "./dkd.module.css";

const PatientPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [patients, setPatients] = useState([
        { id: '1', name: 'Patient 1' },
        { id: '2', name: 'Patient 2' },
        { id: '3', name: 'Patient 3' },
        { id: '4', name: 'Patient 4' },
        { id: '5', name: 'Patient 5' },
        { id: '6', name: 'Patient 6' },
        { id: '7', name: 'Patient 7' },
        { id: '8', name: 'Patient 8' },
        { id: '9', name: 'Patient 9' },
        { id: '10', name: 'Patient 10' },
        { id: '11', name: 'Patient 11' },
        { id: '12', name: 'Patient 12' },
    ]);

    const handleAddPatient = () => setShowPopup(true);
    const handleClosePopup = () => {
        setShowPopup(false);
        setId('');
        setName('');
    };

    const handleChangeId = (e) => setId(e.target.value);
    const handleChangeName = (e) => setName(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPatients([...patients, { id, name }]);
        console.log(`ID: ${id}, Name: ${name}`);
        handleClosePopup();
    };

    return (
        <div className={styles.container}>
            <div className={styles.text}>Select Patient</div>
            <div>
                <button className={styles.add} onClick={handleAddPatient}>
                    <img src="/icon/plus-square.svg" alt="Plus Icon" /> Add Patient
                </button>
            </div>
            <div>
                <input
                    type="text"
                    className={styles.search}
                    placeholder="Search Patient's ID"
                />
                <img src="/icon/search.svg" alt="Search Icon" className={styles.icon} />
            </div>
            <div className={styles.patientContainer}>
                {patients.map((patient, index) => (
                    <button key={index} className={styles.patientCard} >  
                        <img src="/noavatar.png" className={styles.picavatar}/>
                        <div>{patient.name}</div>
                        <div> ID: {patient.id}</div>
                    </button>
                ))}
            </div>
            {/* Popup */}
            {showPopup && (
                <div className={styles.popup}>
                    <button onClick={handleClosePopup} className={styles.closeButton}>
                        <img src="/icon/x-lg.svg" alt="Close Icon" />
                    </button>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <img src="/noavatar.png" className={styles.pic1}/>
                            <div className={styles.text1}>Patient's name</div>
                            <input
                                className={styles.input1}
                                type="text"
                                id="patientName"
                                value={name}
                                onChange={handleChangeName}
                                required
                            />
                        </div>
                        <div>
                            <div className={styles.text2}>Patient's ID</div>
                            <input
                                className={styles.input2}
                                type="text"
                                id="patientId"
                                value={id}
                                onChange={handleChangeId}
                                required
                            />
                        </div>
                        <button className={styles.btn} type="submit">Enter</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PatientPage;
