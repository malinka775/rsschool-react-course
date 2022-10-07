import React from 'react';
import ProductsList from '../components/ProductsList';
import Searchbar from '../components/Searchbar';
import db, { IBook } from '../data';

export interface IHomePageState {
  data: IBook[];
}
class HomePage extends React.Component<Record<string, never>, IHomePageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      data: db,
    };
  }

  filterData = (value: string) => {
    this.setState(() => ({
      data: db.filter(
        (item) =>
          item.author.toLowerCase().includes(value) || item.title.toLowerCase().includes(value)
      ),
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <section className="section search">
          <div className="container">
            <Searchbar onChange={this.filterData} />
          </div>
        </section>
        <section className="section products">
          <div className="container">
            <ProductsList data={data} />
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;
