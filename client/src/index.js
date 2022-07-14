import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./features/users";
import skillsReducer from "./features/skills";
import userReducer from "./features/user"
import showcasesReducer from './features/showcases';
import { Auth0Provider } from "@auth0/auth0-react";


const store = configureStore({
  reducer: {
    users: usersReducer,
    skills: skillsReducer,
    user: userReducer,
    showcases: showcasesReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-s088tu6z.us.auth0.com"
    clientId="yg1bceygqIoyncUbj1gak2rCRIl8sBO3"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>  
    </BrowserRouter>
  </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
