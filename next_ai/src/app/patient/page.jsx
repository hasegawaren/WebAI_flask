"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import Link from "next/link";

const PatientPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAddPatient = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setId('');
    setName('');
    setSelectedFile(null);
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`ID: ${id}, Name: ${name}, File: ${selectedFile && selectedFile.name}`);
    setShowPopup(false);
    setId('');
    setName('');
    setSelectedFile();
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

      {showPopup && (
        <div className={styles.popup}>
          <button onClick={handleClosePopup} className={styles.closeButton}><img src="/icon/x-lg.svg"className={styles.icon}/></button>

          {/* <div className={styles.fileUploadContainer}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
          </div> */}

          <form onSubmit={handleSubmit}>
            <div>
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
