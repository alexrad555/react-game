import React from 'react';
import './style.module.css';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';

import img from '../../assets/bg3.jpg'



const App = () => {


  return (
    <div className="App">
      <Header
        title="This is title"
        descr="This is Description!" 
      />
      <Layout 
        title="This is title"
        descr="This is Description!" 
        urlBg={img}
      />
       <Layout 
        title="This is title"
        descr="This is Description!" 
        colorBg='#2dd42d'
        
      />
       <Layout 
        title="This is title"
        descr="This is Description!" 
        urlBg={img}
      />
      
      <Footer />
    </div>
  );
}

export default App;
