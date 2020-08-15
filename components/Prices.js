class Prices extends React.Component {
  state = {
    currency: 'EUR',
  };

  render() {
    let list = '';
    const currency = this.state.currency;

    list = (
      <li className="list-group-item">
        Bitcoin rate for {this.props.bpi[currency].description}:{' '}
        <span class="badge badge-primary">{this.props.bpi[currency].code}</span>
        <strong>{this.props.bpi[currency].rate}</strong>
      </li>
    );

    return (
      <div>
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className="form-control"
          style={{ width: '10%' }}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
        <ul className="list-group" style={{ margin: '1rem 0' }}>
          {list}
        </ul>
        <br />
      </div>
    );
  }
}

export default Prices;
