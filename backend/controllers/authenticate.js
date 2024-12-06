const User = require('../models/user')

exports.generateCode = async (req, res, next) => {

    const user_id = 123; //hardcoded for demo only...

    const actualCode = Math.floor(Math.random() * 99) + 1;
    const dummyCode1 = Math.floor(Math.random() * 99) + 1;
    const dummyCode2 = Math.floor(Math.random() * 99) + 1;

    // const test = await User.checkDB();
    // console.log(test)

    const fieldsChanged = await User.registerAuthCode(user_id, actualCode);

    console.log(`registered: ${fieldsChanged}`);

    await res.send({ codes: { actualCode, dummyCode1, dummyCode2 } });

    //deleting authcode after 10 seconds
    setTimeout(async () => {
        const fieldsChanged = await User.deleteAuthCode(user_id);
        console.log(`done Deleting authcode: ${fieldsChanged}`);
    }, 10000)
}

exports.authenticateCode = (req, res, next) => {

    console.log(req.body)
    const { authCode } = req.body;
    res.send(`checking with stored code ${authCode}...`);
} 
