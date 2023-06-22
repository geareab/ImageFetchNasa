import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../shared/context/auth-context";
const ulStyle = {
  border: "0px",
};
const axios = require("axios");
const UserPlaces = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [mediatype, setMediatype] = useState(0);

  const auth = useContext(AuthContext);

  useEffect(() => {
    axios({
      method: "get",
      timeout: 5000,
      url: "https://image-nasa-fetch-back.onrender.com/api/images/fetch/1",
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((res) => {
        if (res.data.media_type === "video") {
          setMediatype(1);
        }
        setImageUrl(res.data.url);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {mediatype ? (
        <div className="center">
          {imageUrl ? (
            <iframe
              title="Nasa"
              style={ulStyle}
              src={imageUrl}
              width="640"
              height="360"
            ></iframe>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <div className="center">
          {imageUrl ? (
            <img
              src="https://apod.nasa.gov/apod/image/2306/corona_aus1024.jpg"
              alt="Nasa"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserPlaces;
