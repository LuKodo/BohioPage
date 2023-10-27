const Odoo = require("odoo-await");

const url = 'https://inversiones-matisa-sanbox0001-9767354.dev.odoo.com/xmlrpc/2/common';
const db = 'inversiones-matisa-sanbox0001-9767354'
const username = 'ZICO149@HOTMAIL.COM'
const password = '12345'

export const odoo = new Odoo({
    baseUrl: url,
    port: undefined,
    db: db,
    username: username,
    password: password
})