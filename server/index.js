const path = require('path');
const express = require("express");
const projectsData = require("./dataset.json");



const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// post request from server with app get request

app.use("/api", (req, res) => {
  
    res.json(projectsData)
  });

  
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Port Listener
  app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(projectsData);
});

