const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get("/api/find_new_activity", async (req, res) => {
    const URL = "http://www.boredapi.com/api/activity/";

    const activity = await axios.get(URL).then((res) => {
        return res.data.activity;
    });

    res.json({ message: activity });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
