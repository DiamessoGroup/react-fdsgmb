import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

import './style.css';

const Header = () => {
  return (
    <div>
      <Container>
        <h1>Search App</h1>
        <p>This is a simple search app</p>
        <SearchForm />
      </Container>
      <Results />
    </div>
  );
};

export default function App() {
  return <Header />;
}
