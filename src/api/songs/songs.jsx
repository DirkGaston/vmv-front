import axios from "axios";
import { AESDecrypt } from "../../utils/Encrypt";

export async function GetSongs() {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.get(
      "https://run.mocky.io/v3/cbf6197f-782d-4741-ab59-45c8ac464158",
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function AddSong(song) {
  try {
    const newSong = {
      user_id: song.user,
      title: song.title,
      artist: song.artist,
      is_practicing: true,
      recording_url: ""
    };
    const res = await axios.post(
      "https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4",
      newSong
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateSong(id, updatedSong) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.patch(
      `https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4/${id}`,
      updatedSong,
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function DeleteSong(id) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.delete(
      `https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4/${id}`,
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
}
