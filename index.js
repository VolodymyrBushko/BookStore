const
  // libs
  express = require('express'),
  bodyParser = require('body-parser'),
  expressHbs = require('express-handlebars'),
  mongoose = require('mongoose'),
  hbs = require('hbs'),
  // routes
  homeRouter = require('./routes/home'),
  // other
  app = express();

// config body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// config handlebars
app.engine('hbs', expressHbs(
  {
    layoutsDir: 'views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
  }
));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// init routes
app.use('/', homeRouter);

// run app
(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mongodb_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(3000);
  } catch (e) {
    console.log(e.message);
    process.exit(-1);
  }
})();

// close app & mongodb
process.on('SIGINT', () =>
  mongoose.disconnect(() => process.exit(1)));
