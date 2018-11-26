const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
  all(){
    return fetch(`${BASE_URL}/auctions`, {
      credentials: "include"
    }).then(res => res.json());
  }
}
