import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Greeting = props => {

  const {name} = props;

  console.log(name);
  return (
    <>
        <h1>
          {name} have a Great day!"
        </h1>
    </>
  );
};

export default Greeting;
