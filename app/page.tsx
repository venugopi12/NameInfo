"use client"
import React, { useState } from 'react';
import NameForm from '../components/NameForm';
import Results from '../components/Result';
import { fetchData } from '../api';
import '../style.css'
import LoadingAnimation from '../components/LoadingAnimation'
const Home = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previousName, setPreviousName] = useState(null);

  const handleNameSubmit = async (name) => {
    if(!name){
      alert('Please enter a name before clicking "Get Info"');
      return;
    }
    if (name === previousName) {
      alert('Please enter a different name');
      return;
    }
  
    setPreviousName(name);
  
    try {
      setLoading(true);


      const ageData = await fetchData(name, 'age');
      const genderData = await fetchData(name, 'gender');
      const nationalityData = await fetchData(name, 'nationality');

      // Combine the data into a single object
      const data = {
        age: ageData.age,
        gender: genderData.gender,
        nationality: nationalityData.country[0].country_id,
      };

      setInfo(data);
    } catch (error) {
      console.log(error)
    }finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className='Heading'>Name Info App</h1>
      <NameForm onNameSubmit={handleNameSubmit} />
      {loading ? (
        <LoadingAnimation />
      ) : info ? (
        <Results data={info} />
      ) : null}
    </div>
  );
};

export default Home;
