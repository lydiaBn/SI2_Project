import mysql from 'mysql';

export const db=mysql.createConnection({
host:'localhost',
user:'Amine',
password:'moha2002',
database:'test'
})