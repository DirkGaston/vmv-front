import axios from "axios";
import { AESDecrypt } from "../../utils/Encrypt";

export async function GetExercises() {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.get(
      "https://run.mocky.io/v3/4497928d-849b-4ae1-a25c-03ca0a5444c2",
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

export async function GetExercise(id) {
  try {
    const token = localStorage.getItem("token");
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
    const newExercise = {
      title: exercise.title,
      description: exercise.description,
      video_url: exercise.video_url,
    };
    const res = await axios.post(
      "https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4",
      newExercise
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateExercise(id, updatedExercise) {
  try {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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
