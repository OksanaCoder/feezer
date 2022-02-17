export const actionTypes = {
    PLAYLIST_LOAD: 'PLAYLIST_LOAD',
    PLAYLIST_TRACKS_LOAD: 'PLAYLIST_TRACKS_LOAD',
    PENDING: 'DOMAIN_PENDING',
}


export const playlistLoad = (data={}) => {
    return ({
        type: actionTypes.PLAYLIST_LOAD,
        data
    })
}
export const playlistTracksLoad = (data={}) => {
    return ({
        type: actionTypes.PLAYLIST_TRACKS_LOAD,
        data
    })
}
export const playlistPending = (data={}) => {
    return ({
        type: actionTypes.PENDING,
        data
    })
}
