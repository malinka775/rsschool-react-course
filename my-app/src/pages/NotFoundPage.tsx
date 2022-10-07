import React from 'react';

class NotFoundPage extends React.Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="error">
            <h2 className="heading">Something went wrong!</h2>
            <p className="text">Oops! This page seems not to exist.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFoundPage;
