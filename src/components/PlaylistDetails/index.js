import { playlistTracksLoad } from "core/redux/actions/playlist";
import { getPlaylistByID } from "core/services/api/music-api";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PlaylistDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const playlistTracks = useSelector((state) => state.playlistReducer.tracks);

  useEffect(() => {
    getPlaylistByID(id)
      .then((response) => {
        const dataFetchedTracks = response.data;
        dispatch(playlistTracksLoad(dataFetchedTracks));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, id]);

  console.log(playlistTracks, "playlistTracks");
  
  return (
    <div className="dark-mode">
      <Container>
        <Row>
          <Col>
            <img src="" alt="" />
          </Col>
          <Col>
            <h4></h4>
            <div>
              <img src="" alt="" />
              <small></small>
            </div>
            <p></p>
            <div>
              <button></button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <img src="" alt="" />
              <h6></h6>
            </div>
            <div></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaylistDetails;
