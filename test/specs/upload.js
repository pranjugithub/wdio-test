const path = require('path');

describe('Upload Tests', () => {
    it('Simple upload test',async () =>{
       
        await browser.url('https://the-internet.herokuapp.com/upload');
         // eslint-disable-next-line wdio/no-pause
         browser.pause(3000);
         console.log(__dirname);
        // /home/im/wdio1-course/test/specs
        // store test file path
        // eslint-disable-next-line no-unused-vars
        const filePath = path.join(__dirname,'../data/logotitle.png')
    })
  
})
