export type action =
  | { type: "QUERY"; query: string }
  | { type: "SECTION"; section: string }

export type videoObject = {
  title: string
  thumbnail: {
    trending?: {
      small: string
      large: string
    }
    regular: {
      small: string
      medium: string
      large: string
    }
  }
  year: number
  category: string
  rating: string
  isBookmarked: boolean
  isTrending: boolean
}

export type state = {
  trending: videoObject[]
  viewList: videoObject[]
  viewListBookmarks?: videoObject[]
  queryViewList: videoObject[] | null
  section: string
  viewListHeading: string
  viewListHeadingBookmarks: string | null
  placeholder: string
  showTrending: boolean
  query?: boolean
}
