import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import '../../styling/providers.css'


function Providers() {

  const [providers, setProviders] = useState([])

  // const [test, setTest] = useState('test')

  // let listProviders = []
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let response = await fetch('https://data.cityofchicago.org/resource/g7ng-5vwp.json')
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((data) =>{
  //     // for(let i=0;i<=data.length; i++){
  //     //         let newProvider = {
  //     //               'Site name': data.providers[i].provider.name,
  //     //           }
     
  //     // console.log(data.providers)
  //     console.log(data)
  //     listProviders.push(data)
  //     setProviders(listProviders)
  //     setProviders(listProviders => ({
  //               ...providers,
  //               ...listProviders
  //             }))
  //   })
  // }
  // }})}

  useEffect(() => {
    getAPI()
}, [])  
  
  const getAPI = () => {
    fetch('https://data.cityofchicago.org/resource/g7ng-5vwp.json')
    .then(res => res.json())
    .then(providers => {
      setProviders(providers)
      // console.log(providers)
    })
  }

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let response = await fetch('')
  //   .then((response) =>{
  //     return response.json()
  //   })
  //    .then((data) => {
  //     for(let i=0;i<=data.length; i++){
  //       let newProvider = {
  //             'Site name': data[i].site_name,
  //             'Clinic type': data[i].clinic_type,
  //             'Hours of operation': data[i].hours_of_operation,
  //             'Street address': data[i].street_address,
  //             'Zip': data[i].zip,
  //             'State': data[i].state
  //         }
  //         newProviderList.push(newProvider)
  //         // console.log(newProviderList)
          
  //         // console.log(newProviderList)
  //       }
  //       setProviders(providers => ({
  //         ...providers,
  //         ...newProviderList
  //       }))
  //       console.log(providers)

      //  console.log(newProviderList)
 
    // console.log(data)
    // console.log(data[4].site_name)
    
    // for(let i=0;i<=data.length; i++) {
    //   let newProvider = {
    //     'Site name': data[i].site_name,
    //     'Clinic type': data[i].clinic_type,
    //     'Hours of operation': data[i].hours_of_operation,
    //     'Street address': data[i].street_address,
    //     'Zip': data[i].zip,
    //     'State': data[i].state
    // }
    //   setProviders(data => ({
    //     ...providers,
    //     ...newProvider
    //   }))
    //   console.log(providers)
    // }
    
    // // setProviders(data)
    // console.log(providers)

  
  return (
    <div className='container'>
      <div className='headerContainer'>
        <h4 className="header">Find local clinics that meet your needs, without sacrificing your comfort.</h4>
    </div>
    <div className='cardContainer'>
      <Card style={{ width: '18rem' }} className="cards">
        <Card.Body>
          <Card.Title><a target="_blank" href="https://cookcountyhealth.org/locations/englewood-health-center/">{providers[0].site_name}</a></Card.Title>
          <Card.Text className='cardText'>
            Hours of operation:
            <br />
          {providers[0].hours_of_operation}
          <br />
          Address:
          <br />
          {providers[0].street_address}
          <br />
          {providers[0].zip}, <nbsp />
          {providers[0].state}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="cards">
        <Card.Body>
          <Card.Title><a target="_blank" href="http://cdph.purplebinder.com/locations/city-of-chicago/greater-grand-slash-mid-south-mental-health-center">{providers[1].site_name}</a></Card.Title>
          <Card.Text className='cardText'>
            Hours of Operation:
            <br />
          {providers[1].hours_of_operation}
          <br />
          Address:
          <br />
          {providers[1].street_address}
          <br />
          {providers[1].zip}, <nbsp />
          {providers[1].state}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="cards">
        <Card.Body>
          <Card.Title><a target="_blank" href="http://cdph.purplebinder.com/locations/city-of-chicago/greater-lawn-mental-health-center">{providers[2].site_name}</a></Card.Title>
          <Card.Text className='cardText'>
            Hours of Operation:
            <br />
          {providers[2].hours_of_operation}
          <br />
          Address:
          <br />
          {providers[2].street_address}
          <br />
          {providers[2].zip}, <nbsp />
          {providers[2].state}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="cards">
        <Card.Body>
          <Card.Title><a target="_blank" href="https://lawndale.org/">{providers[3].site_name}</a></Card.Title>
          <Card.Text className='cardText'>
            Hours of Operation:
            <br />
          {providers[3].hours_of_operation}
          <br />
          Address:
          <br />
          {providers[3].street_address}
          <br />
          {providers[3].zip}, <nbsp />
          {providers[3].state}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="cards">
        <Card.Body>
          <Card.Title><a target="_blank" href="http://cdph.purplebinder.com/locations/city-of-chicago/north-river-mental-health-center">{providers[4].site_name}</a></Card.Title>
          <Card.Text className='cardText'>
            Hours of Operation:
            <br />
          {providers[4].hours_of_operation}
          <br />
          Address:
          <br />
          {providers[4].street_address}
          <br />
          {providers[4].zip}, <nbsp />
          {providers[4].state}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>

  );
}

export default Providers;