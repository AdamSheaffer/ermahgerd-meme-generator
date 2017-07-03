const rp = require('request-promise');

const imgflipUrl = 'https://api.imgflip.com/caption_image';
const imgflipReqBody = {
    username: process.env.IMG_USERNAME,
    password: process.env.IMG_PASSWORD,
    template_id: 101462,
    text0: 'Ermahgerd!',
};

const imgReqOptions = {
    method: 'POST',
    uri: imgflipUrl,
    form: imgflipReqBody,
    json: true
};

exports.getMemeUrl = (text) => {
    imgflipReqBody.text1 = text;
    return rp(imgReqOptions);
}
