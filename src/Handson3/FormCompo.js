import React, { Component } from 'react'
import "../Handson3/Style.css"
import Display from './Display';


class FormCompo extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            dept:'',
            rating:'',
            dataToggle:"true",
            error:{},
            stuData:[]
        }
    }
    handleChange =(event) =>{
        
        this.setState({[event.target.name]:event.target.value})
       
    }
    validate =() =>{
        if(!this.state.name){
          this.state.error.name = 'Please fill your name'
        }
        if(!this.state.dept){
          this.state.error.dept = 'Please fill your department'
        }
        if((parseInt(this.state.rating)>1) ||(parseInt(this.state.rating)<5)){
          this.state.error.rating = 'Rating should between 1 to 5'
        }
    }
    handleSubmit = () =>{
        this.validate()
        const tempobj ={
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating
        }
        this.state.stuData.push(tempobj)
        this.setState({stuData:this.state.stuData,dataToggle:!this.state.dataToggle})
        this.setState({stuData:this.state.stuData,name:'',dept:'',rating:''})
        console.log(this.state.error.name)
         console.log(this.state.error.dept)
         console.log(this.state.error.rating)
    }
    togglefunction = () => {
        this.setState({dataToggle:!this.state.dataToggle})
    }
    render(){
        return(
            <>
            
            {this.state.dataToggle
            ?
            <>
            <h1>EMPLOYMENT FEEDBACK FORM</h1>
            <label>Name : </label>
            <input type='text' name='name'value={this.state.name} placeholder='Enter your name' onChange={this.handleChange}></input><br /><br />
            <div>{this.state.error.name && <span>Please fill the name field</span>}</div><br/>
            <label>Departmemt : </label>
            <input type='text' name='dept'value={this.state.dept} placeholder='Enter your department' onChange={this.handleChange}></input><br /><br />
            <div>{this.state.error.dept && <span>Please fill the department field</span>}</div><br/>
            <label>Rating : </label>
            <input type='number' name='rating'value={this.state.rating} placeholder='Enter your rating' onChange={this.handleChange}></input><br /><br />
            <div>{this.state.error.rating && <span>Rating should be 1 to 5</span>}</div><br />
            <button className='button' onClick={this.handleSubmit} >Submit</button>
            </>
            :
            <Display value ={this.state.stuData}Fun ={this.togglefunction} />
    }      
     </>
    )
    }
}
export default FormCompo