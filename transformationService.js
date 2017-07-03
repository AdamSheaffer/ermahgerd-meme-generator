const rp = require('request-promise');

const uri = 'https://calm-bayou-83223.herokuapp.com/trernsferm';

const options = {
    method: 'POST',
    uri,
    json: true
};

exports.transform = (text) => {
    options.body = [{ text }];
    return rp(options);
}