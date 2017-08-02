var checkUsername = function(username) {
    return true;
};

var checkPassword = function(password) {
    return true;
};

var checkType = function(type) {
    console.log('check type', type);
    if (['approver', 'requester', 'admin'].indexOf(type) > -1) {
        console.log('check type worked');
        return true;
    }
    else {
        return false;
    }
};

var checkName = function(name) {
    return true;
};

var checkApprover = function(approver) {
    return true;
};

var checkApproveLimit = function(limit) {
    return true;
};

exports.checkUpdateUser = function(req, res,next) {
    console.log('Check Update User Called');
    console.log('Key', req.body.key, 'Value', req.body.value);
    if ((req.body.key === 'password') && checkPassword(req.body.value)) {
        next();
    }
    else if ((req.body.key === 'name') && checkName(req.body.value)) {
        next();
    }
    else if ((req.body.key === 'approver') && checkApprover(req.body.value)) {
        next();
    }
    else if ((req.body.key === 'approvelimit') && checkApproveLimit(req.body.value)) {
        next();
    }
    else {
        res.status(200).json({
            data: 0,
            string: 'failed to pass specific key, value requirements'
        });
    }
};

exports.checkMakeUser = function(req, res, next) {
    console.log('Check Make User Called');
    if (checkUsername(req.body.username) &&
        checkPassword(req.body.password) &&
        checkType(req.body.type)  &&
        checkApprover(req.body.approver)  &&
        checkApproveLimit(req.body.approvelimit)) {
                        next();
    } else {
        res.status(200).json({
            data: 0,
            string: 'failed to pass user requirements'
        })
    }
};

exports.checkUserListParams = function(req, res, next) {
    console.log('Check User Params', req.params.type, req.params.status);
    if (checkType(req.params.type)){
        if (req.params.status === 'true') {
            req.params.status = true;
            next()
        } else if (req.params.status==='false') {
            req.params.status = false;
            next();
        }
    }
};