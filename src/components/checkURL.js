import React from 'react';
//import ReactUI from	'rctui';
//var Button = require('rctui/Button');
import {Button, Icon} from 'rctui';
class CheckURL extends React.Component{
	constructor(props){
		super(props);
		this.state = {count: props.cont};
		this.tick = this.tick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	tick() {
		this.setState({cont: this.state.count + 1})
	}
	handleChange(e){
		let num = parseFloat(e.target.value)
		this.setState({count: num})
	}
	render() {
		return  <div>
							<a onClick={this.tick}>
								{this.props.children} {this.state.count}
					 		</a>
					 		<br />
					 		<input value={this.state.count} onChange={this.handleChange}/>
							<Button status='error'>
								button
							</Button>
							<Icon icon='home'>home</Icon>
							<br/>
							
						</div>
	}
}
CheckURL.propTypes = {cont: React.PropTypes.number};
CheckURL.defaultProps ={cont: 0};
export default CheckURL;