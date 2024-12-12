import { useContext } from 'react';
import { AppContext } from '../context/Productcontext';
import Footer from './Footer'; // Corrected the folder name

const About = () => {
  const myName = useContext(AppContext);
  const Data = {
    name: "Dawood store"
  };

  return (
    <div>
      {myName}
      <img
        src="https://i.ytimg.com/vi/nz4Zqy8uyEY/maxresdefault.jpg"
        width={1400}
        height={500}
        alt="About Dawood Store"
      />
      {/* You can add Footer here if needed */}
      {/* <Footer /> */}
    </div>
  );
};

export default About;

