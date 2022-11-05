import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Chatbot from './Chatbot'
import Clinics from './Clinics/Clinics'
import Providers from './Providers/Providers'
import Donate from './Donate/Donate'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import '../styling/reactsite.css'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


function ReactSite() {

    return(
        <div className='containerReactsite'>
            <Router>
                    <Switch>
                        <Route path='/' exact> 
                            <Chatbot/>
                        </Route>
                        <Route path='/clinics' exact> 
                            <Clinics/>
                        </Route>
                        <Route path='/providers' exact>
                            <Providers/>
                        </Route>
                        <Route path='/donate' exact>
                            <Donate/>
                        </Route>                
                    </Switch>
            </Router>
        </div>
    )
}
export default ReactSite