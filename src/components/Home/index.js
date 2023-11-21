import Loader from 'react-loaders';
import './index.scss';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>Home</h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
