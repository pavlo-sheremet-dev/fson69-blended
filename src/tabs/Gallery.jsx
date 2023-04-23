import { Component } from 'react';
import { getImages } from 'service/image-service';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  getQuery = query => {
    this.setState({ query: query, page: 1, images: [] });
  };

  render() {
    return (
      <>
        <SearchForm handleSubmit={this.getQuery} />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
