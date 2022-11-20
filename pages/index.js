import Head from 'next/head';
import MainCarousel from '../components/MainCarousel';
import ShoppingList from '../components/ShoppingList';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fashion Ecommerce</title>
        <meta name='description' content='Fashion Ecommerce Site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='home'>
        <MainCarousel />
        <ShoppingList />
        <Subscribe />
      </div>
    </div>
  );
}
