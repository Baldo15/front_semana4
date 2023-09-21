import axios from "axios";
import React, { createContext } from 'react';
const AuthContext = createContext();

export function getPosts() {
  return axios
    .get("https://three-points.herokuapp.com/api/posts", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response.data);
}


export function login(username, password) {
  return axios
    .post("https://three-points.herokuapp.com/api/login", { username, password })
    .then((response) => response.data)
    .catch((error) => {
      throw error; 
    });
}
