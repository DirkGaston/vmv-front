import axios from "axios";
import { AESDecrypt } from "../../utils/Encrypt";

export async function GetRecordings() {
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

export async function AddRecording(recording) {
  try {
    const newRecording = {
      user_id: recording.user,
      exercise_id: recording.exercise,
      recording_url: recording.url,
    };
    const res = await axios.post(
      "https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4",
      newRecording
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateRecording(id, updatedRecording) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.patch(
      `https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4/${id}`,
      updatedRecording,
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

export async function DeleteRecording(id) {
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
