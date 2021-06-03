import React, { Component } from 'react';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const API='AIzaSyCrabFFe6a48icSTxTv9zUTRCxB2qyzElw' 
const channelId = 'UCkgY5iy0Y4SqQustDKlee7g' 
const result = 10;

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrabFFe6a48icSTxTv9zUTRCxB2qyzElw&channelId=UCkgY5iy0Y4SqQustDKlee7g&part=snippet,id&order=date&maxResults=10
// https://www.googleapis.com/youtube/v3/search?key=${AIzaSyCrabFFe6a48icSTxTv9zUTRCxB2qyzElw}&channelId=${UCkgY5iy0Y4SqQustDKlee7g}&part=snippet,id&order=date&maxResults=20

var AURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}` ;

//const resultyt=[];

class Youtube extends Component  {

constructor(props) {
super(props);

this.state = {
  eos:[],
  vtitle :[] ,
 

};

//this.fucnx=this.fucnx.bind(this);
}
//<button className="btn btn-primary" style={{ marginTop: 15 }} onClick={this.fucnx}> Youtube Video </button>

componentDidMount() { console.log("Hello Avanish");
  
fetch(AURL)
    .then((response) => response.json())
    .then((rjson) => {
            //rjson.items.map((obj,i)=>console.log (obj.items[i].snippet.items) );
       
      
       
            //if(rjson.itemes) {
           
        const  eos =   rjson.items.map((obj,i)=>"https://www.youtube.com/embed/" +obj.id.videoId);
        
        const vtitle = rjson.items.map((obj,i)=>obj.snippet.title);
    
        
        
        //this.setState(resultyt,resultyt);
          //this.setState(resultyt);
         
        //}
         //console.log(vtitle);    
         //this.setState({ list: [] });
         
         this.setState({eos});
         this.setState({vtitle});

     })
    .catch((error) => {
      console.error("Error Has Occurred");
      console.error(error);
    });
 

    
}

render() {
console.log(AURL);  //this.state.resultyt.map((link,i)=> console.log(link) );


return ( 
<div>
    
 



    

<div className="container"  style={{ marginTop: 15 }}  >
  <div className="row">
    <div className="  container  col-lg-6  col-md-12 col-sm-12">
   
    
    { this.state.eos.map((link,i)=>

   
{ 
    
    var frame = <div > <iframe key= {i} className="container-fluid" height="300px" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> <h4 style={{color:'#5052e4'}}>{this.state.vtitle[i]}</h4>  </div>   
   
    if(i%2===0) {return frame   ; } else { return  "" }
  
    
    //return (i%2==0 ? frame : '');
    //return frame; 

}) 
}
    </div>
    
    
    <div className="    col-lg-6  col-md-12 col-sm-12  ">
    
    
    
    { this.state.eos.map((link,i)=>
{ 
  
  
  var frame1 = <div > <iframe key= {i} className="container-fluid" height="300px" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> <h4 style={{color:'#5052e4'}} > {this.state.vtitle[i]} </h4>  </div>   
  //return (i%2!==0 ? frame1 : '');
  if(i%2!==0) {return frame1;} else { return ''; }
  
  //return frame1; 
})
}
    </div>
  </div>

</div>
















</div>












);


}


}


export default Youtube; 