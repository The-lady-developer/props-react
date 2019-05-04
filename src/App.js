import React from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

 function App() {
    return (
     <div className="contacts">
     
     <ContactCard 
     contact={{name: "Catty1", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn"
    , Phone: "+91-33333333", Email: "xyz@gmail.com"}}
      />

     <ContactCard 
     contact={{name: "Catty2", imgUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
     , Phone: "+91-33333333", Email: "xyz@gmail.com"}}
     />

     <ContactCard 
     contact={{name: "Catty3", imgUrl: "https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg"
     , Phone: "+91-33333333", Email: "xyz@gmail.com"}}
     />

     <ContactCard 
     contact={{name: "Catty4", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MzAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMTA1NzIxNTkuanBn"
     , Phone: "+91-33333333", Email: "xyz@gmail.com"}}
     />

     </div>
    );
  }


export default App;
