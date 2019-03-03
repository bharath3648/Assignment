import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Hotel from '@material-ui/icons/Hotel';
import Add from '@material-ui/icons/AddCircle';
import Remove from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';

class App extends Component {
  constructor() {
    super();
    this.state= {
      rooms: 1,
      adults: 1,
      children: 0,
	  message: '',
	  display: 'none'
    };
	this.onRoomAdd = this.onRoomAdd.bind(this);
	this.onRoomRemove = this.onRoomRemove.bind(this);
	this.onAdultAdd = this.onAdultAdd.bind(this);
	this.onAdultRemove = this.onAdultRemove.bind(this);
	this.onChildrenAdd = this.onChildrenAdd.bind(this);
	this.onChildrenRemove = this.onChildrenRemove.bind(this);
  }
  
  onRoomAdd () {
	this.setState({
		message: '',
		display: 'none'
	});
	var persons = this.state.adults + this.state.children;
	if (this.state.rooms === 5) {
		this.setState({
			message: '**Maximum 5 rooms for one user.',
			display: 'unset'
		});
		return;
	}
	else {
		if (persons <= this.state.rooms) {
			this.setState({
				adults: this.state.rooms+1,
				rooms: this.state.rooms+1,
			});
		}
		else {
			this.setState({
				rooms: this.state.rooms+1,
			});
		}
	}
  }
  
  onRoomRemove () {
	this.setState({
		message: '',
		display: 'none'
	});
	var persons = this.state.adults + this.state.children;
	if (this.state.rooms === 1) {
		this.setState({
			message: '**Minimum 1 rooms for one user.',
			display: 'unset'
		});
		return;
	}
	if (this.state.rooms === 2 && persons > 4) {
		this.setState({
			rooms: this.state.rooms-1,
			adults: 4,
			children: 0
		});
	}
	else {
		this.setState({
			rooms: this.state.rooms-1,
		});
	}
  }
  
  onAdultAdd () {
	this.setState({
		message: '',
		display: 'none'
	});
	var persons = this.state.adults + this.state.children;
	if (persons/this.state.rooms < 4) {
		this.setState({
			adults: this.state.adults+1,
		});
	}
	else {
		this.setState({
			message: '**Maximum persons reached for each room.',
			display: 'unset'
		});
	}
  }
  
  onAdultRemove () {
	this.setState({
		message: '',
		display: 'none'
	});
	var persons = this.state.adults + this.state.children;
	if (persons/this.state.rooms === 1) {
		this.setState({
			message: '**Minimum 1 person for each room.',
			display: 'unset'
		});
		return;
	}
	else {
		if (this.state.adults === 1) {
			this.setState({
				message: '**Minimum 1 Adult person should along with children.',
				display: 'unset'
			});
			return;
		}
		else{
			this.setState({
				adults: this.state.adults-1,
			});
		}
	}
  }
  
  onChildrenAdd () {
	this.setState({
		message: '',
		display: 'none'
	});
	var persons = this.state.adults + this.state.children;
	if(persons/this.state.rooms === 4) {
		this.setState({
			message: '**Maximum persons reached for each room.',
			display: 'unset'
		});
		return;
	}
	else{
		this.setState({
			children: this.state.children+1,
		});
		
	}
  }
  
  onChildrenRemove () {
	this.setState({
		message: '',
		display: 'none'
	});
	if (this.state.children === 0) {
		return;
	}
	else {
		this.setState({
			children: this.state.children-1,
		});
	}
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
		<div className= "header">
			<span>
				<Icon style= {{fontSize: '15px', color: '#111179', verticalAlign: 'top'}} className='fa fa-users' />
				&nbsp;&nbsp;Choose number of people.
			</span><br />
			<p style={{color: 'red', margin: '0px', display:this.state.display}}>{this.state.message}</p>
		</div>
		<div style={{marginLeft: "20%", marginRight: "20%", border: "1px solid #000", padding: "15px"}}>
			<div style= {{paddingBottom:'15px'}}>
				<div style= {{float:'right'}}>
					<IconButton
					  onClick={this.onRoomRemove}
					  style={{padding: '0px'}}
					>
						<Remove style= {{fontSize: '25px', color: '#111179'}} />
					</IconButton>
					<span className= "text">{this.state.rooms}</span>
					<IconButton
					  onClick={this.onRoomAdd}
					  style={{padding: '0px'}}
					>
						<Add style= {{fontSize: '25px', color: 'red'}} />
					</IconButton>
				</div>
				<div style= {{float:'left'}}>
					<Hotel style= {{fontSize: '25px', color: '#111179', verticalAlign: 'top'}} />&nbsp;&nbsp;ROOMS
				</div>
			</div>
			<br style={{clear: 'both'}} />
			<Divider variant="middle" />
			<div style= {{paddingBottom:'15px', paddingTop: '15px'}}>
				<div style= {{float:'right'}}>
					<IconButton
					  onClick={this.onAdultRemove}
					  style={{padding: '0px'}}
					>
						<Remove style= {{fontSize: '25px', color: '#111179'}} />
					</IconButton>
					<span className= "text">{this.state.adults}</span>
					<IconButton
					  onClick={this.onAdultAdd}
					  style={{padding: '0px'}}
					>
						<Add style= {{fontSize: '25px', color: 'red'}} />
					</IconButton>
				</div>
				<div style= {{float:'left'}}>
					<Icon style= {{fontSize: '25px', color: '#111179', verticalAlign: 'top'}} className='fa fa-user' />&nbsp;&nbsp;ADULTS
				</div>
			</div>
			<br style={{clear: 'both'}} />
			<Divider variant="middle" />
			<div style= {{paddingTop: '15px'}}>
				<div style= {{float:'right'}}>
					<IconButton
					  onClick={this.onChildrenRemove}
					  style={{padding: '0px'}}
					>
						<Remove style= {{fontSize: '25px', color: '#111179'}} />
					</IconButton>
					<span className= "text">{this.state.children}</span>
					<IconButton
					  onClick={this.onChildrenAdd}
					  style={{padding: '0px'}}
					>
						<Add style= {{fontSize: '25px', color: 'red'}} />
					</IconButton>
				</div>
				<div style= {{float:'left'}}>
					<Icon style= {{fontSize: '25px', color: '#111179', verticalAlign: 'top'}} className='fa fa-child'/> &nbsp;&nbsp;CHILDREN
				</div>
			</div>
			<br style={{clear: 'both'}} />
		</div>
      </div>
    );
  }
}

export default App;
