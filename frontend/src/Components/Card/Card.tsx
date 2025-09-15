import React, { type JSX } from 'react'
import "./Card.css"

// Defines the props that the Card component expects to receive
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
      <img 
        src="https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=1200:*" 
        alt="Image" 
      />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className="infon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quasi.</p>
    </div>
  )
}

export default Card