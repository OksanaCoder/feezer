import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const PlaylistDetails = () => {

    const playlistTracks  = useSelector(state => state.playlistReducer.tracks)
    console.log(playlistTracks, 'playlistTracks')
    return (
        <div className='dark-mode'>
           <Container>
            <Row>
                <Col>
                <img src='' alt="" />
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
                <div>

                </div>
                </Col>
                <Col>
                </Col>
            </Row>
           </Container>
        </div>
    )
}

export default PlaylistDetails