import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
   async componentDidMount() {
      const sendToServer = {
         email: 'megaman@bluebomber.com',
         password: 'mega123'
      };
      const signInResp = await axios.post('/api/sign-in', sendToServer);
      console.log(signInResp)
      // const resp = await axios.get('/api/test');
      // console.log(resp);
      // const user = await axios.get('/api/user');
      // console.log(user);
   }
   render() {
      return <h1>New Text</h1>
   }
}

export default Test