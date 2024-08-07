import bookmarkEmpty from "../../assets/images/icon-bookmark-empty.svg"
import bookmarkFull from "../../assets/images/icon-bookmark-full.svg"
import "./BookmarkIcon.scss"

type props = {
  bookmarked: boolean
}

const BookmarkIcon = ({ bookmarked }: props) => (
  <div className="bookmark">
    <button className="bookmark__button">
      <img
        className="bookmark__icon"
        src={bookmarked ? bookmarkFull : bookmarkEmpty}
        alt="bookmark"
      />
    </button>
  </div>
)

export default BookmarkIcon
