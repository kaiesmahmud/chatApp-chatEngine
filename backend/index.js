const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//Project ID
//2448873f-267b-41f7-b28b-1e4d1151401a

// Private Key 
//20e31fad-128b-4100-a880-f70edaa7551a

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username},
        {headers: { "private-key": "20e31fad-128b-4100-a880-f70edaa7551a"}}
    )
    return res.status(r.status).json(r.data);
} catch (error) {
    console.log("Error found --", error)
    return res.status(error.response.status).json(e.response.data);
  }


  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);