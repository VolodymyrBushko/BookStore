const
  // libs
  express = require('express'),
  bodyParser = require('body-parser'),
  expressHbs = require('express-handlebars'),
  mongoose = require('mongoose'),
  hbs = require('hbs'),
  // routes
  homeRouter = require('./routes/home'),
  storeRouter = require('./routes/store'),
  collectionRouter = require('./routes/collection'),
  cartRouter = require('./routes/cart'),
  profileRouter = require('./routes/profile'),
  // other
  app = express();

// config body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// config static
app.use(express.static(__dirname + '/public'));

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
app.use('/store', storeRouter);
app.use('/collection', collectionRouter);
app.use('/cart', cartRouter);
app.use('/profile', profileRouter);

// run app & mongodb
(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookStore', {
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
