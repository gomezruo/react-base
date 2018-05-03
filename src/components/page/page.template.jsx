import React from 'react';

import PageTitle from '../pageTitle/pageTitle.component';

export default (
  <div className="page">
    <PageTitle title={ this.props.title } />
    { this.props.children.map(item => {
      return <div className="page__item">{ item }</div>
    }) }
    { if (this.props.action) return [<div className="page__action">{ this.props.action }] }
  </div>
);
