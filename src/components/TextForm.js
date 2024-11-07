
import React, {useState} from 'react'
//here useState is a hook it provides class 
//like features without actually creating classes

export default function TextForm(props) {
    
    // const handleUpClick = ()=>{
    //     //console.log("Tecnology" + text);
    //     setText("You have clicked on Action")

    //     //let new text = text.toUpperCase();
    //     //setText(newText)
    // }

    // const handleOnChange = (event)=>{
    //     //console.log("On change");
    //     setText(event.target.value);
    // }
    
    // const [text, setText] = useState('Post your Startup reels here');
    
    
    
    //text="ihfsjka";
    //setText("new Text");

    
  return (
    <>

    <div className="container">
        <h1>{props.heading}  </h1>
        {/* <div className="mb-3">
        <label htmlFor="myBoxInput" className="form-label">Email address</label>
        <input type="email" className="form-control" id="myBoxInput" 
        placeholder="name@example.com"/>
        </div> */}

        {/* <button className='btn btn-primary' onClick={handleUpClick}>Action</button>
      
   
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Text Area</label>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>

        <div className="container my-3"> 
        {/* // my-3 helps to provide margin here it gives margin from above div */}
        {/* <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        </div>  */}

       <nav className="navbar1 navbar-expand-lg bg-body-tertiary "> 

        <div className="mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">Technology Startup</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <div className="mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">Food Startup</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <div className=" mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">Space Startup</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <div className="mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">Fintech Startups</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <div className=" mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">Biotech Startups</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <div className="mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">E-commerce Startups</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <div className="mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">Education Startups</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <div className="mb-3 p-1  bg-primary-subtle border border-primary rounded-3">
        <label htmlFor="myBox" className="form-label">Services Startups</label>
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>

        <div className="p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        Example element with utilities
        </div>
        </nav>


</div>
</>
  )
}
