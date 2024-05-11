import useFetch from "../../hooks/useFetch";
import BlurryLoader from "../loader/loader";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch("/countByCity?cities=Mumbai,Jodhpur,Jaipur,Udaipur");

  console.log(data);
  
  return (
    <div>
      {loading ? <BlurryLoader/> :
        <div className="featured">
          <div className="featuredItem">
            <img
              src="https://images.trvl-media.com/lodging/20000000/19460000/19458500/19458493/8cf0d468.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/1996_-218-20A_Jodhpur_Hotel_Umaid_Bhawan_Palace_%282233393509%29.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jodhpur</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ec/03/df/facade-of-rambagh-palace.jpg?w=1200&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jaipur</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.tata.com/content/dam/tata/images/newsroom/heritage/desktop/50_years_taj_lake_palace_banner_desktop_1920x1080.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Udaipur</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Featured;
