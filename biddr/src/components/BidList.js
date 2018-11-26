import React from 'react';

const BidList = props => {
  return(
    <div className="BidList">
      <ul>
        {props.bids.map(bid => (
          <li key={bid.id} >
            $ {bid.offer} on {bid.created_at}
          </li>
        )) }
      </ul>
    </div>
  )
}

export default BidList
