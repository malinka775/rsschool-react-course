import React from 'react';
import { IBook } from '../../data';
import NoMatches from '../NoMatches';
import ProductsListItem from '../ProductsListItem';

import './ProductsList.scss';

interface IProductListProps {
  data: IBook[] | null;
}

class ProductsList extends React.Component<IProductListProps> {
  render() {
    const { data } = this.props;
    const productsList = data?.map((product) => {
      const { id, ...productProps } = product;
      return <ProductsListItem key={id} {...productProps} />;
    });
    return <div className="products-list">{data?.length ? productsList : <NoMatches />}</div>;
  }
}

export default ProductsList;
