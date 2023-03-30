import axios from "axios";
import { AESDecrypt } from "../../utils/Encrypt";
import { API_BASE_URL, API_VERSION } from "../api.config";

export async function GetExercises() {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.get(`${API_BASE_URL}${API_VERSION}/exercises/`, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetExercise(id) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.get(
      `https://run.mocky.io/v3/4497928d-849b-4ae1-a25c-03ca0a5444c2/${id}`,
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

export async function AddExercise(exercise) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const newExercise = {
      title: exercise.title,
      video_url: exercise.videoURL,
      description: exercise.description,
    };
    const res = await axios.post(
      `${API_BASE_URL}${API_VERSION}/exercises/`,
      newExercise,
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateExercise(id, updatedExercise) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.patch(
      `https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4/${id}`,
      updatedExercise,
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

export async function DeleteExercise(id) {
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
