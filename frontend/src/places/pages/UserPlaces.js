import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
const axios = require("axios");
const UserPlaces = () => {
  const [imageUrl, setImageUrl] = useState("");
  const auth = useContext(AuthContext);

  useEffect(() => {
    axios({
      method: "get",
      timeout: 5000,
      url: "http://do.geareab.com/api/images/fetch/1",
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((res) => {
        setImageUrl(res.data.url);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="center">
      {imageUrl ? <img src={imageUrl} alt="Nasa" /> : <p>Loading...</p>}
    </div>
  );
};

export default UserPlaces;
