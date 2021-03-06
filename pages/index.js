import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to</h1>
      <p>Check current bitcoin rate</p>
      {/* {props.bpi.time.updated} */}
      <Prices bpi={props.bpi}/>
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const result = await Fetch(
    'https://api.coindesk.com/v1/bpi/currentprice.json'
  );
  const data = await result.json();

  return {
    // bpi : data,
    bpi: data.bpi,
  };
};

export default Index;
