import express, {json, urlencoded} from "express"; 
import productsRoutes from './routes/products/index.js'
import authRoutes from './routes/auth/index.js';
import serverless from "serverless-http";

const port= 3000;

const app = express();

app.use(urlencoded({extended: false}));
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World1234!');
  });
  


app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

if (process.env.NODE_ENV === "dev") {

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

}

  export const handler = serverless(app);