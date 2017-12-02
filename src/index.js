import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import axios from 'axios';

const root = document.getElementById('root');
const urls = [
    'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
    'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
];

Promise.all( urls.map(axios.get) )
    .then(results => {
        const store = createStore(reducer);
        const campersPastDays = results[0].data;
        const campersAllTimes = results[1].data;
        render(
            <Provider store={store}>
                <App campersAllTimes={campersAllTimes} campersPastDays={campersPastDays} />
            </Provider>,
            root
        );
    }).catch(error => {
      render(
          <div>
            <h3>Sorry, there is no data to display.</h3>
            <p>It seems that you do not have acces to the requested data.</p>
            <p>Error message: {error.message}</p>
          </div>,
          root
      );
    });
