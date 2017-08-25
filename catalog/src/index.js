import React, {Component} from 'react'

export default class extends Component {

  products = [
    { name: "Bananas", price: 2 },
    { name: "Apples", price: 3 },
    { name: "Oranges", price: 4 },
  ];

  render() {
    return <div>
      <h2>Catalog</h2>
      <p>This actually comes from a totally separated module!</p>

      <ul>
        {this.products.map(p => <li>
            <b>{p.name}</b> (€ p.price)
          </li>)}
      </ul>
    </div>
  }
}
