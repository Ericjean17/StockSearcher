import React, { type JSX, type SyntheticEvent } from 'react'
import "./Card.css"
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio';

// Defines the props that the Card component expects to receive
interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void; // SyntheticEvent provides consistent behavior across different browsers
}

const Card = ({ id, searchResult, onPortfolioCreate }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <h2 className="font-bold text-center text-black md:text-left">
        {searchResult.name} ({searchResult.symbol})
      </h2>
      <p className="text-black">{searchResult.currency}</p>
      <p className="font-bold text-black">
        {searchResult.exchange} - {searchResult.exchangeFullName}
      </p>
      <AddPortfolio 
        onPortfolioCreate={onPortfolioCreate} 
        symbol={searchResult.symbol}
      />
    </div>
  )
}

export default Card