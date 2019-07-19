import React from 'react';
import Main from '../Main';
import Login from '../Login';
import SignUp from '../SignUp';
import Loading from '../Loading';

import renderer from 'react-test-renderer';
import * as firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDkG9poCkpPyXXDTM_YjRgY6j1Nf6t1jEQ",
//     authDomain: "lunchapp-59882.firebaseapp.com",
//     databaseURL: "https://lunchapp-59882.firebaseio.com",
//     projectId: "lunchapp-59882",
//     storageBucket: "",
//     messagingSenderId: "478034506469",
//     appId: "1:478034506469:web:aaef94b1312298ca"
//   };
  

// firebase.initializeApp(firebaseConfig);

test('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

test('renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
});
