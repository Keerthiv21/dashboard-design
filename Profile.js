import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/profile")
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}

export default Profile;
