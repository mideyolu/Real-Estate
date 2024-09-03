import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.scss'

function HomePage(){
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Places</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique, dignissimos quidem eveniet harum dolorum tempore, quae sapiente pariatur nulla commodi fuga.
          </p>

          <SearchBar/>

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gains</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage