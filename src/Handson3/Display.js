import React, { Component }  from "react";
class Display extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className='parent'>
              {this.props.value.map((item,index)=>{
               return(          
                   <>
                 <div className='child' key ={this.props.index}>
                  <h1>Name :{item.name}|</h1>
                  <h1>Dept :{item.dept}|</h1>
                   <h1>Rating :{item.rating}</h1>

                  </div>
                
                 </>
                 )
                 })}
                </div>
           
            <button className="button" onClick={this.props.Fun}>Go Back</button>
            
        
            </>
        )
    }
}
export default Display