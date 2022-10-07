import React from 'react';

class AboutUsPage extends React.Component {
  render() {
    return (
      <section className="section about">
        <div className="container">
          <p className="text">
            This SPA made using React JS library during The Rolling Scopes School React-2022 course.
          </p>
          <p className="text">
            Author:{' '}
            <a
              className="bold"
              href="https://malinka775.github.io/rsschool-cv/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <b>
                <i>Alina Khasanova</i>
              </b>
            </a>
            , junior front-end developer.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutUsPage;
