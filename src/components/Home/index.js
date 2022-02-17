import { useEffect, useState } from "react";
import { getPlaylists } from "core/services/api/music-api";
import { connect } from "react-redux";
import { playlistLoad } from "core/redux/actions/playlist";
import {useSelector, useDispatch} from 'react-redux'

const Home = () => {
  const [dataFetched, setData] = useState([]);

  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  useEffect(() => {
    getPlaylists()
      .then((response) => {
        setData(response.data);
      })
      .then(dispatch(playlistLoad(dataFetched)))
      .then(console.log(setData, "data"))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>Home</>;
};



export default connect(
  // (state) => ({
  //     playlist: state.playlistReducer.items,
  // }),

  // (dispatch) => ({
  //     getPlaylistAction: (data) => dispatch(playlistLoad(data)),
  // })
)(Home);


