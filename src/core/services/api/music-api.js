import { axiosInstance } from "core/helpers/http/httpInstance";

export const getPlaylists = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axiosInstance.get(`/chart/0/playlists?limit=30`);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

export const getPlaylistByID = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axiosInstance.get(`/playlist/${id}`);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};