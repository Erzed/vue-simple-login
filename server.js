var history = require('connect-history-api-fallback');
var path = require('path')
var router = require('./api')
const bodyParser = require('body-parser');

const express = require('express');


const app = express();


app.disable('x-powered-by');





app.use(express.static(path.join(__dirname, 'build')));

const staticFileMiddleware = express.static('views');
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.use(bodyParser.json());
app.use('/api', router)



const port = 8080;
app.listen(port, () => {
  console.log(`Now ON port ${8080}!`);
});


