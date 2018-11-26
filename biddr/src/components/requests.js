const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
  all() {
    return fetch(`${BASE_URL}/auctions`, {
      credentials: "include"
    }).then(res => res.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
}

export const Bid = {
  all(id) {
    return fetch(`${BASE_URL}/auctions${id}/bids`, {
      credentials: "include"
    }).then(res => res.json());
  }
}
