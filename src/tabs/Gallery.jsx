import { Component } from 'react';
import { getImages } from 'service/image-service';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    total_results: 0,
    error: '',
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ loading: true });
      getImages(query, page)
        .then(({ total_results, images }) => {
          if (!total_results) return;
          this.setState(prevState => ({
            total_results,
            images: [...prevState.images, ...images],
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  onNextButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getQuery = query => {
    this.setState({ query: query, page: 1, images: [] });
  };

  render() {
    const { images, loading, total_results } = this.state;
    const isButtonVisible = !loading && images.length < total_results;
    return (
      <>
        <SearchForm handleSubmit={this.getQuery} />

        {images.length ? (
          <Grid>
            {images.map(({ id, alt, src, avg_color }) => (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={src} alt={alt} />
                </CardItem>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {isButtonVisible && (
          <Button type="button" onClick={this.onNextButton}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
