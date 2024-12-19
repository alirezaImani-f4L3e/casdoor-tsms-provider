const express = require('express')
const app = express()
const port = 3200

app.get('/', async(req, res) => {
    const { query } = req;
    const { from, phoneNumber: mobile, username, password, user_login, message } = query;
    const url = `http://tsms.ir/url/tsmshttp.php?from=${from}&to=${mobile}&username=${username}&password=${password}&user_login=${user_login}&message=${message}`;
    const response = await fetch(url);
    const json = await response.json();

    res.send({
        status_code: json
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})