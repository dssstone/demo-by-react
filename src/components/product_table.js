import React from 'react';

var TableCategory = React.createClass({

	render: function(){
		return (
			<tr colSpan='2'>
				<th>{this.props.products}</th>				
			</tr>
		)
	}
});
var TableRow = React.createClass({
	render: function(){
		var name = this.props.products.stocked? <em>{this.props.products.name}</em> : <em style={{color:'red'}}>{this.props.products.name}</em>

		return (
			<tr>
				<td>
					{name}
				</td>
				<td>
					{this.props.products.price}
				</td>
			</tr>
		)
	}
});
var TableDiv = React.createClass({
	render:function(){
		var row=[];
		var lastCategory;
		var filterText = this.props.filterText;
		var inStockOnly = this.props.inStockOnly
		this.props.products.forEach(function(item){
			if (item.name.indexOf(filterText) === -1 || (!item.stocked && inStockOnly)) {
        return;
      }
			if(item.category !== lastCategory) {
				row.push(<TableCategory products={item.category} key={item.category}  />)
			}
			row.push(<TableRow products={item} key={item.name} />);
			lastCategory = item.category;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>price</th>
					</tr>
				</thead>
				<tbody>
					{row}
				</tbody>
			</table>
		)
	}
});
var FormDiv = React.createClass({
	handleChange: function() {
		this.props.onUserInput(
			this.refs.input1.value,
			this.refs.check.checked
		)
	},
	render: function(){
		return (
			<form>
				<input 
					type="text" 
					ref='input1'
					value={this.props.filterText}
					onChange={this.handleChange} 
				/>
				<input type="checkbox" 
					onChange={this.handleChange} 
					ref='check'
					checked={this.props.inStockOnly}
				/>
				‘ony show products in stors’
			</form>
		)
	}
});
var FilterableProductTable = React.createClass({
	getInitialState: function() {
		return {
			filterText: '',
      inStockOnly: false
		};
	},
	handleInput:function(filterText,inStockOnly){
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		});
	},
	render:function(){		
		return (
			<div className="steage1">
				<FormDiv 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput ={this.handleInput}
				/>
				<TableDiv 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					products={this.props.products}
				/>
				
			</div>
		)
	}	
});

export default FilterableProductTable;