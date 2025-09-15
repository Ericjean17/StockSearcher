import React, { useState, type ChangeEvent, type MouseEvent, type SyntheticEvent } from 'react'

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({onClick, search, handleChange}: Props) => {
  // const [search, setSearch] = useState<string>("");

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // }

  // const onClick = (e: SyntheticEvent) => {
  //   console.log(e);
  // }

  return (
    <div>
      <input type="text" value={search} onChange={(e) => handleChange(e)}/>
      <button onClick={(e) => onClick(e)}></button>
    </div>
  )
}

export default Search;