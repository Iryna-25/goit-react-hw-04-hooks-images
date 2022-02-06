// App.js
import "./App.css";

import { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Loader from "./Components/Loader";
import Modal from "./Components/Modal";
import fetchImages from "./Components/images-api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [searchQuery, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);
  const [largeImage, setlargeImage] = useState("");

  useEffect(() => {
    if (!searchQuery) return;

    getFetchImages();
    // eslint-disable-next-line
  }, [searchQuery]);

  const onSearch = (query) => {
    setImages([]);
    setPage(1);
    setQuery(query);
    setLoading(false);
    setModal(false);
    setlargeImage("");
  };

  const getFetchImages = async () => {
    setLoading(true);

    try {
      const { hits } = await fetchImages(searchQuery, currentPage);

      setImages((prev) => [...prev, ...hits]);

      setPage((prevPage) => prevPage + 1);

      if (currentPage !== 1) {
        scrollOnLoadButton();
      }
    } catch (error) {
      console.log("Smth wrong with App fetch", error);
    } finally {
      setLoading(false);
    }
  };

  const getLargeImage = (fullImageUrl) => {
    setlargeImage(fullImageUrl);
    setModal(true);
  };

  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const ShowLoadMore = images.length > 0 && images.length >= 12;

  return (
    <>
      <Searchbar onSearch={onSearch}></Searchbar>
      <ImageGallery images={images} onImageClick={getLargeImage}></ImageGallery>
      {isLoading && <Loader />}

      {ShowLoadMore && (
        <Button onClick={getFetchImages} aria-label="Load more">
          Load more
        </Button>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage} alt="" />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};

export default App;
