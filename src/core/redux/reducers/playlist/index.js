import {actionTypes} from "core/redux/actions/playlist";

const initialState = {
    items: [], 
    tracks: [],
    loaded: false,
    pending: false,
};

export default function playlistReducer(
    state = initialState,
    action = {type: null, data: {}}
) {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.PLAYLIST_LOAD:
            newState.items = action.data.data;
            newState.loaded = true;
            newState.pending = false;
            return newState;
        case actionTypes.PLAYLIST_TRACKS_LOAD: 
            newState.tracks = action.data.data;
            newState.loaded = true;
            newState.pending = false;
            return newState;
        case actionTypes.PENDING:
            newState.loaded = false;
            newState.pending = true;
            return newState;
        default:
            return state;
    }
}
