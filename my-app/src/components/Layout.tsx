import React from 'react';
import Header from './Header';

type LayoutProps = {
  children: JSX.Element;
};

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
