import axios from "axios";
import { AESEncrypt, AESDecrypt } from "../../utils/Encrypt";
import { API_BASE_URL, API_VERSION } from "../api.config";
import jwtDecode from "jwt-decode";

export async function UserLogin(email, password, setUser) {
  try {
    const payload = {
      email,
      password,
    };
    const res = await axios.post(
      `${API_BASE_URL}${API_VERSION}auth/login`,
      payload
    );
    const data = res.data;

    const { accessToken, refreshToken } = data.data;

    const decodedToken = jwtDecode(accessToken);

    console.log(decodedToken);

    const { role, id, username, firstName } = decodedToken;

    setUser((prevUser) => ({
      ...prevUser,
      id: id,
      role: role,
      username: username,
      firstName: firstName,
    }));

    localStorage.setItem("accessToken", AESEncrypt(accessToken));
    localStorage.setItem("refreshToken", AESEncrypt(refreshToken));
    console.log(data);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function UserLogout(accessToken) {
  try {
    const decryptedToken = AESDecrypt(accessToken);
    const res = await axios.post(
      `${API_BASE_URL}${API_VERSION}auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    const data = res.data;

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export async function GetUsers() {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.get(`${API_BASE_URL}${API_VERSION}/users/`, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });
    const data = res.data;
    console.log(data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetUser(id) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const decodedToken = jwtDecode(decryptedToken);
    const id = decodedToken.ID;

    const res = await axios.get(`${API_BASE_URL}${API_VERSION}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function RegisterUser(username, email, password, setUser) {
  try {
    const payload = {
      username,
      email,
      password,
    };
    const res = await axios.post(
      `${API_BASE_URL}${API_VERSION}users/`,
      payload
    );
    const data = res.data;
    const registeredUser = data.data;

    const loginData = await UserLogin(email, password, setUser);

    return {
      status: res.status,
      ...registeredUser,
      accessToken: loginData.data.accessToken,
      refreshToken: loginData.data.refreshToken,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateUser(id, updatedUser) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.patch(
      `${API_BASE_URL}${API_VERSION}/users/${id}`,
      updatedUser,
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

export async function DeleteUser(id) {
  try {
    const token = localStorage.getItem("accessToken");
    const decryptedToken = AESDecrypt(token);

    const res = await axios.delete(
      `${API_BASE_URL}${API_VERSION}/users/${id}`,
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

export async function ResetPasswordRequest(email) {
  try {
    const res = await axios.post(
      `${API_BASE_URL}${API_VERSION}auth/reset-password`,
      { email }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}
