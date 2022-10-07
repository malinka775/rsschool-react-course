import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../HomePage';
import Searchbar from '../../components/Searchbar';
import ProductsList from '../../components/ProductsList';

test('renders "Sorry, nothing matches your requirements" when no props', () => {
  const { getByTestId } = render(<HomePage />);
  const inputEl = getByTestId('searchInput');

  fireEvent.change(inputEl, {
    target: {
      value: 'testValue',
    },
  });

  expect(screen.getByText('Sorry, nothing matches your requirements')).toBeInTheDocument();
});

test('renders cards correctly in accordance to search input value', () => {
  const db = [
    {
      id: 1,
      title: 'title test1',
      author: 'author1',
      language: 'en',
      genres: ['nonfiction'],
      image: 'https://m.media-amazon.com/images/I/51WErrbDtdL.jpg',
      year: 2022,
      publisher: '',
      price: 0,
      bestseller: true,
    },
    {
      id: 2,
      title: 'title test2',
      author: 'author2',
      language: 'en',
      genres: ['nonfiction'],
      image: 'https://m.media-amazon.com/images/I/51WErrbDtdL.jpg',
      year: 2022,
      publisher: '',
      price: 0,
      bestseller: true,
    },
    {
      id: 3,
      title: 'title test3',
      author: 'author2',
      language: 'en',
      genres: ['nonfiction'],
      image: 'https://m.media-amazon.com/images/I/51WErrbDtdL.jpg',
      year: 2022,
      publisher: '',
      price: 0,
      bestseller: true,
    },
  ];

  const props = {
    data: db,
  };
  const filterData = (value: string) => {
    props.data = db.filter(
      (item) =>
        item.author.toLowerCase().includes(value) || item.title.toLowerCase().includes(value)
    );
  };

  const component = render(
    <>
      <section className="section search">
        <div className="container">
          <Searchbar onChange={filterData} />
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <ProductsList data={props.data} />
        </div>
      </section>
    </>
  );

  const inputEl = component.getByTestId('searchInput') as HTMLInputElement;

  //changing input value 'test1', rerendering and checking number of remdered cards (by author name)
  fireEvent.change(inputEl, {
    target: {
      value: 'test1',
    },
  });

  component.rerender(
    <>
      <section className="section search">
        <div className="container">
          <Searchbar onChange={filterData} />
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <ProductsList data={props.data} />
        </div>
      </section>
    </>
  );

  expect(screen.getByText('author1')).toBeInTheDocument();
  expect(screen.queryAllByText(/title/i)).toHaveLength(1);

  //changing input value to 'author2' and checking number of cards (by author name)
  fireEvent.change(inputEl, {
    target: {
      value: 'author2',
    },
  });
  component.rerender(
    <>
      <section className="section search">
        <div className="container">
          <Searchbar onChange={filterData} />
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <ProductsList data={props.data} />
        </div>
      </section>
    </>
  );
  expect(screen.queryAllByText(/title/i)).toHaveLength(2);
  expect(screen.queryAllByText(/author/i)).toHaveLength(2);
  expect(screen.queryAllByText('author2')).toHaveLength(2);

  //changing input value to 'author' and checking number of cards (by author name)
  fireEvent.change(inputEl, {
    target: {
      value: 'author',
    },
  });
  component.rerender(
    <>
      <section className="section search">
        <div className="container">
          <Searchbar onChange={filterData} />
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <ProductsList data={props.data} />
        </div>
      </section>
    </>
  );
  expect(screen.queryAllByText(/title/i)).toHaveLength(3);
  expect(screen.queryAllByText('author2')).toHaveLength(2);
  expect(screen.queryAllByText('author1')).toHaveLength(1);

  //changing input value to 'title' and checking number of cards (by title name)
  fireEvent.change(inputEl, {
    target: {
      value: 'title',
    },
  });
  component.rerender(
    <>
      <section className="section search">
        <div className="container">
          <Searchbar onChange={filterData} />
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <ProductsList data={props.data} />
        </div>
      </section>
    </>
  );
  expect(screen.queryAllByText(/title/i)).toHaveLength(3);

  //changing input value to 'title1' and checking number of cards (by title name)
  fireEvent.change(inputEl, {
    target: {
      value: 'nonExistingTitle',
    },
  });
  component.rerender(
    <>
      <section className="section search">
        <div className="container">
          <Searchbar onChange={filterData} />
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <ProductsList data={props.data} />
        </div>
      </section>
    </>
  );
  expect(screen.queryAllByText(/title/i)).toHaveLength(0);

  //changing input value to 'title1' and checking number of cards (by title name)
  fireEvent.change(inputEl, {
    target: {
      value: 'title test1',
    },
  });
  component.rerender(
    <>
      <section className="section search">
        <div className="container">
          <Searchbar onChange={filterData} />
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <ProductsList data={props.data} />
        </div>
      </section>
    </>
  );
  expect(screen.queryAllByText(/author/i)).toHaveLength(1);
});
