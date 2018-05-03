import React, { Component } from 'react';

import PageTitle from '../components/pageTitle/pageTitle.component';

class Route {
  constructor(title) {
    this.title = title;
  }

  render() {
    return (
      <PageTitle title={this.title} />
    )
  }
}

export default Route;
