const app = require('./app');
require('./database')

async function init(){
    await app.listen(5001);
    console.log('Server running on port 5001')
}

init();