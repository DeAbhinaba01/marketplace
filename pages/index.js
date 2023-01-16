import React from 'react'

//import sanity client
import { client } from '../lib/Client'

//import components
import { Footer, Layout, Navbar, Product, HeroBanner, FooterBanner, Cart} from '../components'

const Home = ({ products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}
      {console.log(products)}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Hedaphones and speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      {console.log(products)}


      <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home