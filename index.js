const axios = require("axios");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  const { user, password } = req.body;
  const { data: users } = await axios.get("https://api.myjson.com/bins/kj4aq");

  let isValidUser = false;

  users.forEach(dataUser => {
    if (dataUser.user === user && dataUser.password === password) {
      isValidUser = true;
    }
  });

  if (isValidUser) {
    return res.json({ success: "Usuário Logado" });
  } else {
    return res.json({ error: "Usuário ou senha incorretos" });
  }
});

app.listen(3333);
