import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div  className="container  justify-content-center"  style= {{height:"300px" , marginTop:"100px"}}  >
   
	<h4> Soory the Page not found    </h4>


	<Link to="/">
      Back to Home Page
    </Link>
  </div>
);

export default NotFound;
