import BookmarkIcon from "../BookmarkIcon/BookmarkIcon"
import PlayModal from "../PlayModal/PlayModal"
import ViewDetails from "../ViewDetails/ViewDetails"
import type { videoObject } from "../../../types/types"
import "./View.scss"

type props = {
  view: videoObject
}

const View = ({ view }: props) => (
  <li className="view">
    <div className="view__view">
      <div className="view__play-modal">
        <PlayModal />
      </div>
      <img
        className="view__thumbnail"
        src={view.thumbnail.regular.small}
        alt={view.title}
      />
      <BookmarkIcon bookmarked={view.isBookmarked} />
    </div>
    <div className="view__details">
      <ViewDetails view={view} />
    </div>
  </li>
)
export default View
