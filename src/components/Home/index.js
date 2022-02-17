import { useEffect, useState } from "react";
import { getPlaylists } from "core/services/api/music-api";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlaylists()
      .then((response) => {
        setData(response.data);
      })
      .then(console.log(setData, "data"))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>Home</>;
};

export default Home;
