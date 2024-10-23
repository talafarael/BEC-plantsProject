const express = require('express')
const app = express()
const port = 3005
const { ClientTCP } = require('@nestjs/microservices');
const { lastValueFrom } = require('rxjs');

(async () => {
    const client = new ClientTCP({
        host: 'localhost',
        port: 3002,
    });

    await client.connect();

    app.get('/', async (req:any, res:any) => {
        const pattern = { cmd: 'sum' };
        const data = JSON.parse(req.query.data)

        const result = await lastValueFrom(client.send(pattern, data))

        res.json({ result })
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

})();