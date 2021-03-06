const
  // libs
  express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  expressHbs = require('express-handlebars'),
  mongoose = require('mongoose'),
  hbs = require('hbs'),
  // routes
  homeRouter = require('./routes/home'),
  storeRouter = require('./routes/store'),
  collectionRouter = require('./routes/collection'),
  cartRouter = require('./routes/cart'),
  profileRouter = require('./routes/profile'),
  authRouter = require('./routes/auth'),
  // other
  authMw = require('./middlewares/auth.middleware'),
  app = express();

// config body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// config static
app.use(express.static(__dirname + '/public'));

// config session
app.use(session({
  secret: 'my test secret',
  saveUninitialized: false,
  resave: false
}));

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

// use auth middleware
app.use(authMw);

// init routes
app.use('/', homeRouter);
app.use('/store', storeRouter);
app.use('/collection', collectionRouter);
app.use('/cart', cartRouter);
app.use('/profile', profileRouter);
app.use('/auth', authRouter);

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
