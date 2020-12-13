const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const incidentModel = require("./models/incident");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

const CONNECTION_URL =
  "mongodb+srv://shivppatel:pasword123@cluster0.dinmg.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

//////////////API calls/////////////////
/*Shape of expected reqeust for each end point
  -/api/report-incident
    - expected data shape 
    { "type":"ASSAULT", "date":"2020/12/12", "location": {
            "lat": "39.980818972",
            "lng": "-76.8469380289"
        }}

  -/api/update-incident 
    - expected data shape
    {
      {
    "query": {
        "date": "2020-12-12",
        "type": "ASSAULT",
        "location": {
            "lat": "39.980818972",
            "lng": "-76.8469380289"
        }
    },
    "update": 
    {
        "date": "2020-12-12",
        "type": "MURDER",
        "location": {
            "lat": "39.980818972",
            "lng": "-76.8469380289"
        }
    }
    }
  
  -/api/delete-incident
    -expected data shape
    { "type":"ASSAULT", "date":"2020/12/12", "location": {
            "lat": "39.980818972",
            "lng": "-76.8469380289"
        }}
 */

app.get("/api", (req, res) => {
  // Sends a basic hello respone if the root endpoint of our api is hit
  res.send("Hello, welcome to CrimeSurge's API");
});

app.get("/api/incident-data", async (req, res) => {
  //Sends a json representation of all of the reported incidents in our database
  const incidents = await incidentModel.find({});
  try {
    res.json(incidents);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/report-incident", async (req, res) => {
  //Adds an incident to our database
  const incident = new incidentModel(req.body);
  try {
    await incident.save();
    res.send(incident);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/api/update-incident", async (req, res) => {
  //updates the details of a speciffic incident with the data provided
  const query = req.body["query"];
  const update = req.body["update"];
  console.log(query, update);
  try {
    const response = await incidentModel.updateOne(query, update);
    res.send(req.body["update"]);
  } catch (err) {
    res.status(500).send(err, req.body);
  }
});
app.delete("/api/delete-incident", async (req, res) => {
  //deletes the incident that matches the req.body
  try {
    const response = await incidentModel.deleteOne(req.body);
    res.send(response);
  } catch (err) {
    res.status(500).send(err, req.body);
  }
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "Client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "Client/build", "index.html"));
  });
}
