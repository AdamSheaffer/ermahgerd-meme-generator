const express = require('express');
const { getMemeUrl } = require('./memeService');
const { transform } = require('./transformationService');

const router = express.Router();

const processText = async (req, res) => {
    const text = req.body.text;
    let ermahgerd;
    try {
        const [data] = await transform(text);
        ermahgerd = data.text;
    } catch(err) {
        ermahgerd = '';
    }

    try {
        const { data } = await getMemeUrl(ermahgerd);
        return res.send({
            text: data.url,
            response_type: 'in_channel'
        });
    } catch(err) {
        console.error(err);
        return res.send('Whoops! Looks like something went wrong...');
    }    
    
}

router.post('/', processText);

module.exports = router;
