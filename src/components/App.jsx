import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchPixabay } from '../Api/Api';
import Button from './BtnLoadMore/Button';
import { Container } from './App.styled';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    data: [],
    loader: false,
    searchQuery: '',
    page: 1,

    totalHits: 0,
    pagesPerPage: 12,
    modal: { isOpen: false, src: '', alt: '' },
  };

  newUserQuery = query => {
    this.setState({
      searchQuery: query,
      page: 1,
    });
  };

  async userSearchQuery() {
    try {
      const { hits, totalHits } = await fetchPixabay(
        this.state.searchQuery,
        this.state.page,
        this.state.pagesPerPage,
      );
      this.setState({
        data: [...this.state.data, ...hits],
        totalHits: totalHits,
      });
    } catch (err) {
      console.log(err);
    }
  }

  loadMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery || this.state.page !== prevState.page) {
      this.userSearchQuery();
    }
  }

  handleOpenModal = (src, alt) => {
    this.setState({ modal: { isOpen: true, src, alt }});
    console.log(this.state)
  };

  handleCloseModal = () => {
    this.setState(() => ({ modal: { isOpen: false, src: '', alt: '' } }));
  };

  render() {
    const isVisibleBtn =
      this.state.data.length !== 0 &&
      this.state.data.length < this.state.totalHits;

    return (
      <>
        <Container>
          <Searchbar newUserQuery={this.newUserQuery} />
        </Container>
        <ImageGallery
          resultQuery={this.state.data}
          clickToItem={this.clickToItem}
          openFullScreenMode={this.handleOpenModal}
        />
        {isVisibleBtn && (
          <Button pageNum={this.state.page} loadMore={this.loadMore} />
        )}
        {this.state.modal.isOpen && (
          <Modal closeModal={this.handleCloseModal}>
            <img src={this.state.modal.src} alt={this.state.modal.alt} />
          </Modal>
        )}
      </>
    );
  }
}
