import express from "express";
import path from "path";
import router from "./views/router";
import routerAdmin from "./views/router-admin";
import morgan from "morgan";
import {MORGAN_FORMAT} from "./libs/types/config";

// 1- Entrance 
const app = express();
app.use(express.static(path.join(__dirname, 'public'))); // Middleware Design Pattern => public API
app.use(express.urlencoded({ extended: true }));  // Middleware Design Pattern => Traditional API
app.use(express.json());  // Middleware Design Pattern => Rest API
app.use(morgan(MORGAN_FORMAT)); // har bir  htpp faylgan jonatilgan log uchun ketgan vaqtdi console,logda korsatadi 
// 2- Session

// 3- Views 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 4- Routing 
app.use("/admin", routerAdmin);//SSR = Service Site Rendining : EJS admin uchun 
app.use("/", router);// SPA - single page application : REACT  loyihamizda REST API korinishida ishlatamiuz  public uchun  


export default app;