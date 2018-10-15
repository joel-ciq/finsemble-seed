import './FilterSort.css'
import React from  'react'
import SearchBox from './SearchBox'
import TagsMenu from './TagsMenu'
import {getStore} from '../stores/LauncherStore'

export default class FilterSort extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			search: ''
		}
		this.onSearch = this.onSearch.bind(this)
	}
	onSearch(event) {
		this.setState({
			search: event.target.value
		}, () => {
			getStore().setValue({
				field: 'filterText', 
				value: this.state.search
			})
		})
	}

	onItemClick(item) {

	}

	render() {
		const app = this.props.app
		const list = ['one', 'two', 'three']
		return (
			<div className="filter-sort">
				<SearchBox />
				<div className="sort"> 
					Sort by: 
					<span className="first active sort-option pointer">Alphabetical</span>
					<span className="sort-option pointer">Recent</span>
					<span className="sort-option pointer">Favorites</span>
				</div>	
				<TagsMenu label="Tags" align="right" list={list} onItemClick={this.onItemClick}/>		
			</div>
			)
	}
}