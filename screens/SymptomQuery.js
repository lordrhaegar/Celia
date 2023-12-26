import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import SymptomQueryBody from '../components/screen body/SymptomQueryBody'
import { styles } from '../styles/Styles'
import axios from 'axios'

const SymptomQuery = (props) => {
  const pageName = 'SymptomQuery';
  const [symptom, setSymptom] = useState('')
    const [symptomList, setSymptomList] = useState([])
    const [allSymptom, setAllSymptoms] = useState([])
    const [filteredSymptoms, setFilteredSymptoms] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const filteredSymptom = () => {
        setFilteredSymptoms(allSymptom.filter(item => item.toLowerCase().includes(symptom.toLowerCase())))
        console.log(filteredSymptoms);
    }
    const addSymptomToList = (value) => {
      setSymptomList(prevList => [...prevList, value]);
  }
  const removeSymptomFromList = (index) => {
    const updatedList = [...symptomList];
    updatedList.splice(index, 1);
    setSymptomList(updatedList)
}
    useEffect(()=>{
      const fetchAllSymptoms = async ()=>{
        console.log('heree');
        try {
          const allSymptoms = await axios.get('https://celiabackendtestapis.onrender.com/diagnosis/symptoms')
          setAllSymptoms(allSymptoms.data.symptoms)

        } catch (error) {
          
        }
      }
      fetchAllSymptoms()
    },[])
    useEffect(()=>{
      filteredSymptom()
    },[symptom])
  return (
    <SafeAreaView
      style={styles.safeArea}
    >

      <Header pageName={pageName} />
      <SymptomQueryBody setIsChecked={setIsChecked} pageName={pageName} symptomList={symptomList} symptom={filteredSymptoms} setSymptom={setSymptom} addSymptomToList={addSymptomToList} removeSymptomFromList={removeSymptomFromList}/>
      <Footer isChecked={isChecked} pageName={pageName} symptomList={symptomList}/>
    </SafeAreaView>
  )
}

export default SymptomQuery