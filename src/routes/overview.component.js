import React, { Component } from 'react';

import Page from '../components/page/page.component';
import BookmarkForm from '../components/BookmarkForm.component';
import BookmarkList from '../components/BookmarkList.component';

class Overview {
  render() {
    return (
      <Page title="Add a Bookmark">
        <BookmarkForm />
        <BookmarkList />
      </Page>
    )
  }
}

export default Overview;
