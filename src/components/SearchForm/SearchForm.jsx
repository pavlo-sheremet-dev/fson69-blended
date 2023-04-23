import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { searchValue } = this.state;
    const query = searchValue.trim().toLowerCase();
    if (!query) return this.setState({ searchValue: '' });
    this.props.handleSubmit(query);
  };

  render() {
    const { searchValue } = this.state;
    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={searchValue}
          onChange={this.handleChange}
        />
      </SearchFormStyled>
    );
  }
}
