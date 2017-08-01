var knex = require('./knexfile.js');

//Search database for users of type
exports.userList = function (req, res) {
    console.log('Query Users Called');
    var filters = req.params;
    console.log(req.params);
    knex('users').select(
        'username', 'name', 'type', 'nextapprover', 'approvelimit'
    )
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query failed.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};

//Updates user account settings
exports.editUser  = function (req, res) {
    console.log('EditUser function Hit');
    console.log('User:', req.params.username,' is trying to change their', req.body.key, ' to ', req.body.value);
    knex('users')
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query failed.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};

//Create new row in database with values
exports.makeUser = function (req, res) {
    console.log('MakeUser function Hit');
    knex('users')
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query failed.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};


//If user is still connected, SEND ERROR DANGER MESSAGE
//Otherwise, move to deleted pile
exports.removeUser = function (req, res) {
    console.log('RemoveUser function Hit');
    knex('users')
        .then(function(data) {
            console.log(data);
            res.send(data);
        })
        .catch(function(err){
            console.log('Database query failed.');
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        })
};
