import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
import Card from 'react-bootstrap/Card'
import {useDispatch, useSelector} from 'react-redux'
import {getClinics} from '../../actions/clinicActions'
import '../../styling/clinics.css'


function Clinics() {
  const dispatch = useDispatch();
  const clinics = useSelector(state => state.clinics)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('https://data.cityofchicago.org/resource/g7ng-5vwp.json')
    let data = await response.json();
    dispatch(getClinics.data)
  }

  
  return (
    <div className='container'>
      <div className='headerContainer'>
        <h4 className="header">Find local clinics that meet your needs, without sacrificing your comfort.</h4>
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
    <div className='cardContainer'>
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
    </Card>
    
  </div>
    {/* <ul>
      {clinics.map(clinicsObj => {
        return <li key={clinics.site_name}>
          {clinics.site_name}
          <br />
          {clinics.clinic_type}
          <br />
          {clinics.hours_of_operation}
          <br />
          {clinics.street_address}
          <br />
          {clinics.zip}
          <br />
          {clinics.state}
        </li>
      })}
    </ul> */}
    </div>
  );
}

export default Clinics;