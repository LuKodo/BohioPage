import axios from "axios";

const user = "ZICO149@HOTMAIL.COM"
const pwd = "123456"
const base64Credentials = btoa(`${user}:${pwd}`)

export const instance = axios.create({
    baseURL: 'https://inversiones-matisa-sanbox0001-9767354.dev.odoo.com/api/v1/',
    headers: {
        'Authorization': `Basic ${base64Credentials}`,
    }
});