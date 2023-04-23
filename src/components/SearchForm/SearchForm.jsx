import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    const inputValue = value.trim().toLowerCase();
    if (!inputValue) return this.setState({ value: '' });
    this.props.handleSubmit({ value: inputValue });
  };

  render() {
    const { value } = this.state;
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
          value={value}
          onChange={this.handleChange}
        />
      </SearchFormStyled>
    );
  }
}
