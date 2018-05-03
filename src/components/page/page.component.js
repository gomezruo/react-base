import React, { Component } from 'react';

import template from './page.template';

class Page extends Component {
  constructor() {
    this.props.action = this.props.children
  }
  render() {
    return template;
  }
}

export default Page;
