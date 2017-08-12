import React, { Component } from 'react';
import _ from 'lodash';
import style from './customSearchBar.css'
import { Search } from 'semantic-ui-react';

class CustomSearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result[this.props.selector] })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result[this.props.selector])

      this.setState({
        isLoading: false,
        results: _.filter(this.props.search, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div className="custom search-bar">
        <Search
          placeholder={`enter ${this.props.content}`}
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={results}
          showNoResults = {this.props.boolean}
          value={value}
        />
      </div>
    );
  }
}

export default CustomSearchBar;
