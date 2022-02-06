import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import toast from './toastify';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchForm.styled';

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      toast('Enter something to find!!!', 'warn');
      return;
    }
    if (!query.trim()) return;

    onSearch(query);

    resetForm();
  };

  const resetForm = () => setQuery('');

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={query}
          onChange={handleSearchInput}
        />
                
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

      </Form>
    </Header>
  );
};
Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;