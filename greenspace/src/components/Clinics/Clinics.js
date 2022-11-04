import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getClinics} from '../../actions/clinicActions'

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
    <div>
      <br />
      <h3>Looking for a local clinic? We can help!</h3>
      <br />
      <br />
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Clinic Type</Form.Label>
        <Form.Select>
          <option>All</option>
          <option>Public Health WIC</option>
          <option>Mental Health</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <ul>
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
    </ul>
    </div>
  );
}

export default Clinics;