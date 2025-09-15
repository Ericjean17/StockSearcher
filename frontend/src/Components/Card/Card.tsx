import React, { type JSX, type SyntheticEvent } from 'react'
import "./Card.css"
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio';

// Defines the props that the Card component expects to receive
interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card = ({ id, searchResult, onPortfolioCreate }: Props) => {
  return (
    <div className='card'>
      <img 
        alt="company logo" 
      />
      <div className="details">
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>{searchResult.currency}</p>
      </div>
      <p className="info">
        {searchResult.exchange} - {searchResult.exchangeFullName}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card