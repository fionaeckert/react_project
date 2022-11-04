export const getClinics = (site_name, clinic_type, hours_of_operation, street_address, zip, state) => {
    return{
        type:"GET_CLINICS",
        data: {
            site_name, clinic_type, hours_of_operation, street_address, zip, state
        }
    }
}