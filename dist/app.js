import express from 'express';
import route from './routes.js';
import connectdatabase from './dbconnection.js';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/apis", route);
app.listen(3000, async () => {
    await connectdatabase.connectdb();
    console.log("server started on the port 3000");
});
//# sourceMappingURL=app.js.map