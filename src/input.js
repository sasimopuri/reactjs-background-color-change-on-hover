import { Component } from "react";
import './styles/input.css'

class Textfeild extends Component
{
    state={
        bgcolor:'blue'
    }
    
    changebg=(event)=>{
        this.setState({bgcolor:event.target.style.backgroundColor})
    }
    render(){
        return(
            <>
            <div className="maincon" style={{backgroundColor:this.state.bgcolor}}>
                <div className="container" >
                    <div className="block" style={{backgroundColor: '#00005C'}}  onMouseEnter={this.changebg}>dad</div>
                    <div className="block" style={{backgroundColor: '#C060A1'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#E5D9B6'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#5F8D4E'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#B2B2B2'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#C69749'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#FFADBC'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#FFE15D'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#BA94D1'}}  onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: "#D6E4E5"}} onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: "#6C4AB6"}} onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#285430'}} onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#47B5FF'}} onMouseEnter={this.changebg}></div>
                    <div className="block" style={{backgroundColor: '#4C0033'}} onMouseEnter={this.changebg}></div>
                </div>
            </div>
            </>
            
        )
    }
    
}

export default Textfeild