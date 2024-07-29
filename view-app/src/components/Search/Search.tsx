import { useState, Dispatch } from "react"
import search from "../../assets/images/icon-search.svg"
import "./Search.scss"

import type { action, videoObject } from "../../../types/types"

type props = {
  dispatch: Dispatch<action>
  placeholder: string
  query: videoObject[] | null
}

const Search = ({ dispatch, placeholder, query }: props) => {
  const [queryValue, setQueryValue] = useState("")
  return (
    <div className="search">
      <img className="search__icon" src={search} alt="search" />
      <input
        className="search__input"
        type="text"
        value={query ? queryValue : ""}
        placeholder={placeholder}
        onChange={e => {
          dispatch({ type: "QUERY", query: e.target.value })
          setQueryValue(e.target.value)
        }}></input>
    </div>
  )
}

export default Search
