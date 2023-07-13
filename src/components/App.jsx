import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchPixabay } from '../Api/Api';
import Button from './BtnLoadMore/Button';
import { Container } from './App.styled';
import Modal from './Modal/Modal';

function App() {
  const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [modalBool, setModalBool] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    async function userSearchQuery(searchQuery, page) {
      try {
        const { hits, totalHits } = await fetchPixabay(searchQuery, page);

        if (page === 1) {
          setData(hits);
        } else {
          setData(prevState => [...prevState, ...hits]);
        }
        setTotalHits(totalHits);
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
    if (searchQuery === '') {
      return;
    }
    userSearchQuery(searchQuery, page);
  }, [searchQuery, page, data]);

  const newUserQuery = query => {
    setPage(1);
    setSearchQuery(query);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (src, alt) => {
    setModalAlt(alt);
    setModalBool(true);
    setModalSrc(src);
  };

  const handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      setModalAlt('');
      setModalBool(false);
      setModalSrc('');
    }
  };

  const isVisibleBtn = data.length !== 0 && data.length < totalHits;

  return (
    <>
      <Container>
        <Searchbar newUserQuery={newUserQuery} />
      </Container>
      <ImageGallery resultQuery={data} openFullScreenMode={handleOpenModal} />
      {isVisibleBtn && <Button pageNum={page} loadMore={loadMore} />}
      {modalBool && (
        <Modal closeModal={handleCloseModal}>
          <img src={modalSrc} alt={modalAlt} />
        </Modal>
      )}
    </>
  );
}

export default App;
