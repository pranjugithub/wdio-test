// // utl https://practice.sdetunicorns.com/
// // title  Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.

import allureReporter from '@wdio/allure-reporter';
import HomePage from '../pages/home-page';
// Rest of your test code using the 'HomePage' variable

describe('Home', () => {

  before(async () => {
    console.log('This could be used for test setup');
  })

  beforeEach(async () => {
    console.log('This runs before each test');
    // open url
    await HomePage.open();
  })
  
  after(async () => {
    console.log('This could be used for test cleanup');
  })

  afterEach(async () => {
    console.log('This runs before each test');
    
  })


  it('Open url & assert title', async () => {

    allureReporter.addSeverity("minor");
    // open url
    // await HomePage.open();
   
    // assert title
    await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
  });

  it('Open About Page & assert url', async () => {
    // open About page
   await browser.url('https://practice.sdetunicorns.com/about');

    // assert url
    await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
  });

  it('click get started button & contains get-started text', async () => {
    // open home page

     // await HomePage.open();

    //  click get started button
  
    await HomePage.btnGetStarted.click();

    //assert url contains get-started text
   await expect(browser).toHaveUrlContaining('get-started');
  });

  it('click logo & contains get-started text', async () => {
    allureReporter.addFeature("Logo Verification");
     // open url
    // await HomePage.open();
      
 // logo
    await HomePage.imageLogo.click();

    // assert url  doesn't contains get-started text
    await expect(browser).not.toHaveUrlContaining('get-started');
  });

  it('finding heading element & assert test', async () => {
  // open url
  //await HomePage.open();

    //  finding heading element
   
    const headingElement =  await HomePage.txtHeading;

    // get text
    const headingText = await headingElement.getText();

    const arr = [];

    arr.push(headingText);
    console.log("Heading Text", arr);

    // assert the text
    // await expect(headingText).toEqual('Think different. Make different.');
    await expect(headingElement).toHaveText('Think different. Make different.');
  });

});











