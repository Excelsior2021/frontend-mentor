import TrendingView from "../TrendingView/TrendingView"
import { videoObjectType } from "../../types/types"
import "./TrendingList.scss"

type trendingType = {
  trending: videoObjectType[]
}

const TrendingList = ({ trending }: trendingType) => (
  <div className="trending-list">
    <h2 className="trending-list__heading">trending</h2>
    <ul className="trending-list__views">
      {trending.map(view => (
        <TrendingView key={view.title} view={view} />
      ))}
    </ul>
  </div>
)

export default TrendingList
