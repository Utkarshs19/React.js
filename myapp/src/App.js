import React from 'react';
import Boy from './Boy';
import Girl from './Girl'
import Submit from './Submit' 

function App() {
  return (
    <div style={{
      
      backgroundColor: 'hsl(350, 100%, 95%)', 
    }}>
      <h1><center>Match Making</center></h1>
      <div >
      <div style={{ display: 'flex', marginLeft: '400px',marginBottom:'10px',gap: '100px' }}>
      <Boy/>
      <Girl/>
      </div>
      <div style={{backgroundColor :'blueviolet',marginLeft:'450px',
      marginRight:'350px',borderRadius:'5px',paddingLeft:'200px',paddingTop:'10px',paddingBottom:'10px',color:'white'}}>
      <Submit/>
      </div>
      </div>
    </div>
  );
}

export default App;
