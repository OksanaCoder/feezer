import { useEffect, useState } from "react";
import { getPlaylists } from "core/services/api/music-api";
import { connect } from "react-redux";
import { playlistLoad } from "core/redux/actions/playlist";
import {useSelector, useDispatch} from 'react-redux'

const Home = () => {

  const playlist = useSelector(state => state.playlistReducer.items)
  const dispatch = useDispatch()

  useEffect(() => {
    getPlaylists()
      .then((response) => {
       const dataFetched = response.data;
        dispatch(playlistLoad(dataFetched));
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(playlist, 'playlist')
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


