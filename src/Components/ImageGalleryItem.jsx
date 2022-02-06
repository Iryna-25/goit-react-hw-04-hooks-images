import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryItemImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

const ImageGalleryItem = ({ image, onImageClick }) => {
  const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <li>
      <GalleryItemImg
        src={image.webformatURL}
        alt={image.tags}
        onClick={fullImage}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;