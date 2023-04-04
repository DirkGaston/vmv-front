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
      `${API_BASE_URL}${API_VERSION}/exercises/${id}`,
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
      image_url: exercise.imageURL,
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
      `${API_BASE_URL}${API_VERSION}exercises/${id}`,
      updatedExercise,
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    return res;
  } catch (err) {
    if (err.response) {
      console.log("Error response:", err.response);
    } else if (err.request) {
      console.log("Error request:", err.request);
    } else {
      console.log("Error message:", err.message);
    }
    throw err;
  }
}

export async function DeleteExercise(id) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.delete(
      `${API_BASE_URL}${API_VERSION}/exercises/${id}`,
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
