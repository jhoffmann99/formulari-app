//Install express server
const express = require("express");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res);
}

app.use(compression({
  filter: shouldCompress,
  level: 7,
}));

const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["html", "js", "scss", "css", "gz"],
  index: false,
  maxAge: "1y",
  redirect: true,
};

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/formulari-app", options));


/*
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
*/
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.disable("x-powered-by");

app.use(
  cors({
    origin: "http://localhost:4200"
  })
);

app.get("/*", function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname + "/dist/formulari-app/index.html"));
});

const port = process.env.PORT || 8080;
// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log(
    "Formulari server started on port " +
      port
  );
});