const db = require('../util/database')

module.exports = class User {

    constructor() {
        //TODO: to create new user and then save it to db by createUser()
    }


    static async checkDB() {
        const [results, fields] = await db.execute('SELECT * FROM users');
        return results;
    }

    static createUser() {
        console.log('creating user...')
    }

    static findUser() {
        console.log('finding user...');
    }

    static async registerAuthCode(userID, authCode) {

        console.log('registering auth code...')
        const [results, fields] = await db.execute('UPDATE users SET `authCode` = ? WHERE `user_id` = ?', [authCode, userID])

        return results.affectedRows;
    }

    static checkAuthCode() {
        console.log('checking auth code...');
    }

    static async deleteAuthCode(userID) {

        const [results, fields] = await db.execute('UPDATE users SET `authCode` = NULL WHERE `user_id` = ?', [userID])
        console.log('deleting auth code...');
        return results.affectedRows;
    }
}