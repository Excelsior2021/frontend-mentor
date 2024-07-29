import View from "../View/View"
import type { videoObject } from "../../../types/types"
import "./ViewList.scss"

type props = {
  list: videoObject[]
  queryList?: videoObject[] | null
  heading: string | null
}

const ViewList = ({ list, queryList, heading }: props) => (
  <div className="view-list">
    <h2 className="view-list__heading">{heading}</h2>
    <ul className="view-list__views">
      {queryList
        ? queryList.map(view => <View key={view.title} view={view} />)
        : list.map(view => <View key={view.title} view={view} />)}
    </ul>
  </div>
)

export default ViewList
