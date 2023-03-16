import dataSource from "./auth.json";

// export const logIn = async (email, password) => {
//   try {
//     const payload = {
//       email,
//       password,
//     };
//     const resp = await fetch(`${process.env.VITE_APP_BASE_URL}/login`, payload);
//     const data = await resp.json();
//     return data;
//   } catch (err) {
//     return {
//       error: err,
//     };
//   }
// };

export const userLogin = (async = (email, password) => {
  return dataSource.user.find(
    (data) => data.email === email && data.password === password
  );
});

export const registerUser = () => {
  throw new Error("no implementado");
};
