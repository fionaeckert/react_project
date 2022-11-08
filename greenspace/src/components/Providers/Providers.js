import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import '../../styling/providers.css'


function Providers() {

  const [providers, setProviders] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('https://data.cityofchicago.org/resource/g7ng-5vwp.json')
    let data = await response.json();
    console.log(data)
    console.log(data[0].site_name)
    
    for(let i=0;i<=data.length; i++) {
      let newProvider = {
        'Site name': data[i].site_name,
        'Clinic type': data.clinic_type,
        'Hours of operation': data.hours_of_operation,
        'Street address': data.street_address,
        'Zip': data.zip,
        'State': data.state
    }
      setProviders(data => ({
        ...providers,
        ...newProvider
      }))
    }
    
    // setProviders(data)
    console.log(providers)
  }

  
  return (
    <div className='container'>
      <div className='headerContainer'>
        <h4 className="header">Find local clinics and providers that meet your needs, without sacrificing your comfort.</h4>
     </div>
    <div className='formContainer'>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Select the specialty of the clinic you're looking for and hit "Submit" to see your personalized options:</Form.Label>
          <Form.Select>
            <option>All</option>
            <option>Mental Health</option>
            <option>Women, Children, and Infants</option>
            <option>Public Health</option>
            <option>STIs</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    {/* <div className='cardContainer'>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
{/*     
      <ul>
        {providers.map(providersObj => {
          return <li key={providers.site_name}>
            {providers.site_name}
            <br />
            {providers.clinic_type}
            <br />
            {providers.hours_of_operation}
            <br />
            {providers.street_address}
            <br />
            {providers.zip}
            <br />
            {providers.state}
          </li>
        })}
      </ul> */}
    </div>

  );
}

export default Providers;