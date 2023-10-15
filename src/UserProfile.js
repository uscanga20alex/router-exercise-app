import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const userId = useParams().userId

  useEffect(() => {
    const abortController = new AbortController();
    const signal = AbortController.signal;
    async function loadUser() {
        try{
            const response = await fetch (
                `https://jsonplaceholder.typicode.com/users/${userId}`, {signal}
            );
            const userFromAPI = await response.json();
            console.log(setUser);
            setUser(userFromAPI);
        } catch (error) {
            if (error.name === "AbortError"){
                console.log("aborted");
            } else {
                throw error;
            }
        }
    }
    loadUser();
    return() => abortController.abort();
  }, [userId])

  // Use `useParams()` and `useEffect()`
  // Load profile data from https://jsonplaceholder.typicode.com/users/${userId}

  // No need to change anything below here
  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading...";
}

export default UserProfile;