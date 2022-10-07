import React from 'react';
import './Searchbar.scss';
import searchIcon from '../../assets/search.svg';

interface ISearchbarState {
  searchValue: string;
}

interface ISearchbarProps {
  onChange: (value: string) => void;
}

class Searchbar extends React.Component<ISearchbarProps, ISearchbarState> {
  state: ISearchbarState = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        searchValue: e.target.value,
      },
      () => this.props.onChange(this.state.searchValue.toLowerCase())
    );
  };

  componentDidMount() {
    if (this.state.searchValue.length > 0) {
      this.props.onChange(this.state.searchValue.toLowerCase());
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    return (
      <div className="searchbar">
        <div className="container">
          <input
            data-testid="searchInput"
            type="text"
            name="search"
            id="search"
            className="searchbar__input"
            placeholder="Start typing book author or title"
            value={this.state.searchValue}
            onChange={this.onChangeHandler}
          />
          <img className="searchbar__icon" src={searchIcon} alt="" />
        </div>
      </div>
    );
  }
}

export default Searchbar;
