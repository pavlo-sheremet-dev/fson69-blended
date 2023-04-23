import { Component } from 'react';
import { getImages } from 'service/image-service';
import { Button, SearchForm, Grid, Text, GalleryItem } from 'components';

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
      this.setState({ loading: true, error: '' });
      getImages(query, page)
        .then(({ total_results, images }) => {
          if (!total_results) return;
          this.setState(prevState => ({
            total_results,
            // error: '',
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

    if (page !== prevState.page && page !== 1) {
    }
  }

  onNextButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getQuery = ({ value }) => {
    if (value === this.state.query) return;
    this.setState({ query: value, page: 1, images: [], total_results: 0 });
  };

  render() {
    const { images, loading, total_results, error } = this.state;
    const isButtonVisible = !loading && images.length < total_results;
    return (
      <>
        <SearchForm handleSubmit={this.getQuery} />

        {images.length ? (
          <Grid>
            {images.map(({ id, ...image }) => (
              <GalleryItem key={id} {...image} />
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
        {error && <p>{error}</p>}
      </>
    );
  }
}
