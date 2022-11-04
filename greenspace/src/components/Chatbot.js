import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { BrowserRouter as Router, Switch, 
    Route, NavLink } from 'react-router-dom'

function Chatbot() {
  return (
    <ChatBot
        steps={[
            {
                id: 'welcome-message',
                message: "Hi, thanks for visiting Greenspace 💚 My name's Greta, and I'm here to connect you with mental health resources.",
                trigger: 'name-message'
            },
            {
                id: 'name-message',
                message: "Who am I speaking with today?",
                trigger: 'welcome-user-response'
            },
            {
                id: 'welcome-user-response',
                user: true,
                validator: (value) => {
                    if (isNaN(value) == false) {
                    return 'Please enter your name!';
                    }
                    return true;
                },
                trigger: 'nice-to-meet-message'
            },
            {
                id: 'nice-to-meet-message',
                message: 'Such a gorgeous name! Nice to meet you {previousValue}.',
                trigger: 'services-message'
            },
            {
                id: 'services-message',
                message: 'Finding the appropriate services to fit your needs is incredibly difficult and super personal.',
                trigger: 'trusting-message'
            },
            {
                id: 'trusting-message',
                message: 'I appreciate you choosing Greenspace to connect you with what you need. Please select which option below best fits your needs.',
                trigger: 'options-message'
            },
            {
                id: 'options-message',
                options: [
                  { value: 'clinics', label: 'Chicago Clinics', trigger:'clinics'},
                  { value: 'providers', label: 'Local Providers', trigger:'providers'},
                  { value: 'resources', label: 'Mental Health Resources',trigger:'resources'},
                  { value: 'goodVibes', label: 'Just Good Vibes',trigger:'vibes'},
                ],
            },
            {
                id:'clinics',
                component: (
                    <div>Please navigate to the following link:
                        <br />
                        <Router>
                            <Switch>
                                <NavLink to='/clinics' target="_blank">Chicago-Area Clinics</NavLink>
                            </Switch>
                        </Router>
                    </div>
                )
            },
            {
                id:'providers',
                component: (
                    <div>Please navigate to the following link:
                        <br />
                        <Router>
                            <Switch>
                                <NavLink to='/providers' target="_blank">Providers</NavLink>
                            </Switch>
                        </Router>
                    </div>
                )
            },
            {
                id:'resources',
                component: (
                    <div>Please navigate to the following link:
                        <br />
                        <Router>
                            <Switch>
                                <NavLink to='/resources' target="_blank">Resources</NavLink>
                            </Switch>
                        </Router>
                    </div>
                )
            },
            {
                id:'vibes',
                component: (
                    <div>Please navigate to the following link:
                        <br />
                        <Router>
                            <Switch>
                                <NavLink to='/vibes' target="_blank">Good Vibes</NavLink>
                            </Switch>
                        </Router>
                    </div>
                )
            }
        ]}
    />
  )
}

export default Chatbot