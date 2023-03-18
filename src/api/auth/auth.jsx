import axios from "axios";
import { AESEncrypt, AESDecrypt } from "../../utils/Encrypt";

export async function UserLogin(email, password) {
  try {
    const payload = {
      email,
      password,
    };
    const res = await axios.post(
      "https://run.mocky.io/v3/9eab2033-a976-4d8e-bc44-49f990b3e786",
      payload
    );
    const data = res.data;

    const isAdmin = email === "admin@vmv.com" && password === "garroshino";
    if (isAdmin) {
      localStorage.setItem("isAdmin", true);
    } else {
      localStorage.removeItem("isAdmin");
    }

    localStorage.setItem("token", AESEncrypt(data.token));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetUsers() {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.get("/auth.json", {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });
    const data = res.data.user;
    console.log(data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetUser(id) {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.get(
      `https://run.mocky.io/v3/e6b48a6c-eee6-4385-91a8-322c4e254b06/${id}`,
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

export async function RegisterUser(user) {
  try {
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    const res = await axios.post(
      "https://run.mocky.io/v3/fff1e720-4850-4904-af29-cb1a20b4fbc4",
      newUser
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateUser(id, updatedUser) {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.patch(
      `https://run.mocky.io/v3/e6b48a6c-eee6-4385-91a8-322c4e254b06/${id}`,
      updatedUser,
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

export async function DeleteUser(id) {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.delete(
      `https://run.mocky.io/v3/e6b48a6c-eee6-4385-91a8-322c4e254b06/${id}`,
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
