import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Chatbot from './Chatbot'
import Clinics from './Clinics/Clinics'
import Providers from './Providers/Providers'
import Resources from './Resources/Resources'
import GoodVibes from './Vibes/GoodVibes'

function ReactSite() {
    return(
        <div>
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
                        <Route path='/resources' exact>
                            <Resources/>
                        </Route>   
                        <Route path='/vibes' exact>
                            <GoodVibes/>
                        </Route>                
                    </Switch>
            </Router>
        </div>
    )
}
export default ReactSite