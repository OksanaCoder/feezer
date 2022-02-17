import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getPlaylists, getPlaylistByID } from "core/services/api/music-api";
import { playlistLoad, playlistTracksLoad } from "core/redux/actions/playlist";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const playlist = useSelector(state => state.playlistReducer.items)
  const playlistTracks  = useSelector(state => state.playlistReducer.tracks)
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

  const fetchPlayilistTracks = (id) => {
    getPlaylistByID(id)
    .then((response) => {
      const dataFetchedTracks = response.data;
       dispatch(playlistTracksLoad(dataFetchedTracks));
     })
     .then(navigate('/playlistDetails'))
     .catch((error) => {
       console.log(error);
     });
     console.log(playlistTracks, 'playlist')
  }
  return (
  <div className='dark-mode'>
      <Container>
        <Row>
          <h2 className='my-4 text-white'>Special for you</h2>
          {playlist?.map((item) => {
            console.log(item, 'item from playlist')
              return(
                <Col lg={2} md={3} sm={6} xs={6} key={item.id} onClick={(id) => fetchPlayilistTracks(item.id)}>
                  <Card>
                  <svg class="svg-icon svg-icon-play" focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path></svg>
                    <Card.Img variant="top" src={item.picture_medium} className='img-card'/>
                    <Card.Body>
                      <Card.Title className='text-white font-main-header'>{item.title}</Card.Title>
                      <Card.Text className='text-secondary font-main-text'>
                        {item.user.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
          })}
         
        </Row>
      </Container>
  </div>
  )
};



export default Home;


