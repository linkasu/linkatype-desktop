import fs from 'fs'
import Path from 'path'

import homedir from 'homedir'
import lowdb from 'lowdb'

import FileSync from 'lowdb/adapters/FileSync'

const homepath = Path.join(homedir(), 'DisType/');
console.log(fs.existsSync(homepath))

if (!fs.existsSync(homepath)) {

    fs.mkdirSync(homepath);
}


const db = lowdb(new FileSync(Path.join(homepath, 'db.json')));

db.defaults({ categories: {store:[{
    id:0,
    text:'Без категории'
}], inc:1},  phrases: {store:[], inc:0} })
    .write()

export default db;