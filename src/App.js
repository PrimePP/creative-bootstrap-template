import "./App.css";
import FavNav from "./Nav";
import FavMast from "./MastHead";
import FavAb from "./FavAbout";
import FavService from "./FavServices";
import FavCta from "./FavCTA"
import Gall from "./FavGal";
import FavCon from "./FavContact";
import FavFoot from "./FavFooter";

const MyApp = () => {
  return (
    <div>
      <FavNav />
      <FavMast/>
      <FavAb/>
      <FavService/>
       <Gall/>
      <FavCta/>
      <FavCon/>
      <FavFoot/>
    </div>
  );
};

export default MyApp;
