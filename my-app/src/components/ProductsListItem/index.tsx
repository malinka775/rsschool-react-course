import React from 'react';

import './ProductsListItem.scss';

import Button from '../Button';

interface IProductsListItem {
  title: string;
  author: string;
  image: string;
  year: number;
  publisher: string;
  price: number;
}
class ProductsListItem extends React.Component<IProductsListItem> {
  onClickHandler = () => {
    console.log('clicked');
  };

  render() {
    const { title, author, publisher, year, price, image } = this.props;
    return (
      <div className="card">
        <div className="card__photo">
          <img src={image} alt="book cover" />
        </div>
        <div className="card__footer">
          <div className="card__info">
            <h4 className="card__title">{title}</h4>
            <p className="card__author">{author} </p>
            <p className="card__publisher"> Publisher: {publisher}</p>
            <span className="card__year"> Year of release: {year}</span>
            <div className="card__cost">
              <span className="price">Price: {price}</span>$
            </div>
          </div>
          <Button name="Add" callback={this.onClickHandler} clName="button_add" />
        </div>
      </div>
    );
  }
}

export default ProductsListItem;
