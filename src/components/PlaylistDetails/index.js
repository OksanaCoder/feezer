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
      <Container className='text-white'>
        <Row className='pt-5'>
          <Col className='d-flex align-items-center flex-wrap'>
            <img src={playlistTracks.picture_medium} alt="" className='me-4'/>
            <div>
            <h4>{playlistTracks.title}</h4>
            <div>
              <img src={playlistTracks.picture_small} alt="" className='me-4 my-2 img-circle' />
              <small>{playlistTracks.creator.name}</small>
            </div>
            <p className='font-main-text text-secondary '>{playlistTracks.description}</p>
            <div>
              <button className='btn-primary'>Listen</button>
            </div>
            </div>
          </Col>
        </Row>

        <Row  className='mt-5'>
          <Col lg={6} md={12} sm={12} xs={12}>TRACK</Col>
          <Col lg={6} md={12} sm={12} xs={12}>ARTIST</Col>
        </Row>

        <Container className=' pt-2 grey-line'>
        {playlistTracks?.tracks?.data?.map((item) => {
          return (
          <Row className='my-2'>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Row className='d-flex justify-content-between align-items-center'>
            <Col className='d-flex align-items-center'>
              <img src={item.album.cover_small} alt=""  className='me-4' />
              <h6 className='text-white'>{item.album.title}</h6>
            </Col>
            <Col>
            <svg className='ms-2 me-2' fill="#fff" viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" class="sk__sc-1vdzswr-0 jFctkk"><g><path d="M15 4.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm1 0a4.5 4.5 0 0 1-5.099 4.46L3.048 15 0 12l7-7.58v.08a4.5 4.5 0 1 1 9 0zM7.166 5.715l-5.774 6.252 1.736 1.71 6.57-5.053a4.511 4.511 0 0 1-2.532-2.91z"></path></g></svg>
            <svg className='ms-2 me-2' fill="#fff" viewBox="0 0 16 16" width="16" height="16" focusable="false" role="img" aria-hidden="true" class="sk__sc-1vdzswr-0 jFctkk"><g><path clip-rule="evenodd" fill-rule="evenodd" d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z"></path><path d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z"></path></g></svg>
            <svg className='ms-2 me-2' viewBox="0 0 16 16" fill="#fff" width="16" height="16" focusable="false" role="img" aria-hidden="true" class="sk__sc-1vdzswr-0 jFctkk"><g><path d="M5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></g></svg></Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} >
            <Row className='d-flex justify-content-between align-items-center'>
              <Col>
              <p className='text-white'>{item.artist.name}</p>
              </Col>
              <Col>
              <p className='text-white'>{item.duration}</p>
              </Col>
              <Col>
              <input type="checkbox" />
              </Col>
            </Row>
          
          
          
          </Col>
        </Row>
        
        )
                })}
                </Container>
      </Container>
    </div>
  );
};

export default PlaylistDetails;
