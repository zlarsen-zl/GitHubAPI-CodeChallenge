import React, { Component } from 'react';
import Repo from './Repo';

class Repos extends Component {
  repositories = () => {
    return this.props.data.repos.map( repo => (
      <Repo key={repo.id} repo={repo} />
    ));
  }
  render() { 
    return (
      <div>
        {this.repositories()}
      </div>
    );
  }
}
export default Repos;
