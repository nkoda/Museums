import logo from './logo.svg';
import './App.css';
import Title from './Header.js';
import ImageGrid from './ImageGrid';
import Post from './Post';


function App() {
  return (
    <div className="app">
      <div className="app__header"> <Title /> </div>
      <ImageGrid/>
      <Post username="Emma Chu" caption="JavaScript > TypeScript" nft_name="lolol1" img_url = "https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"/>
      <Post username="Michael Ge" caption="COVALENT WOOT WOOT" nft_name="lolasdasd2" img_url = "https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"/>
      <Post username="Nikko Dumrique" caption="LOL REACT <3" nft_name="lolteeee3" img_url = "https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"/>
      <Post username="1" caption="test" img_url = "https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"/>
      {/* Posts */}
    </div>
  );
}

export default App;
