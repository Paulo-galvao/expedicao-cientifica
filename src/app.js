import express from 'express';
import explorerRouter from './routes/explorer-route.js';
import speciesRouter from './routes/species-router.js';
import expeditionRouter from './routes/expedition-route.js';

import "dotenv/config";

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/explorer', explorerRouter);
app.use('/species', speciesRouter);
app.use('/expedition', expeditionRouter);

app.listen(port, () => {
    console.log("Server running at port", port);
});