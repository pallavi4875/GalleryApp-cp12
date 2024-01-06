// Write your code here.
import './index.css'

const ThumbNailItem = ({id, image, handleClick}) => {
  const handleThumbnailClick = () => {
    handleClick(image)
  }

  return (
    <ul>
      <li>
        <button>
          <ul>
            <img
              src={image.thumbnailUrl}
              alt={image.thumbnailAltText}
              className="thumbnail"
              onClick={handleThumbnailClick}
            />
          </ul>
        </button>
      </li>
    </ul>
  )
}

export default ThumbNailItem
