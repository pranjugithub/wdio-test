//#zak-primary-menu li[id*=menu]
import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter'
describe('Navigation Menu', () =>{
    it('Get the Text og all menu & assert them',async() =>{

      allureReporter.addFeature("Navigation");
      allureReporter.addSeverity("critical")
        // open url
       //await browser.url('/'); // '/' - basic url which is add in conf.js
      await HomePage.open();
       const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",

       ];

       const actualLinks = [];

        // assert title
      //  const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
      //  const navLinks = await $$('#zak-primary-menu li[id*=menu]');
      const navLinks = await HomePage.NavComponent.linkNavMenu;

        

        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
        console.log(actualLinks);

        await expect(expectedLinks).toEqual(actualLinks);
    });

    it('Get the Text of all menu & assert them - using wait commands',async() =>{
        // hardcoded timeout 
        //browser.pause(1000);
        // open url
      // await browser.url('/'); // '/' - basic url which is add in conf.js
        await HomePage.open();
       const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",

       ];

       const actualLinks = [];

        // assert title
      //  const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');

        //await $('#zak-primary-menu').waitForDisplayed({timeout: 1000});
        // clickable
      //   await $('#zak-primary-menu li').waitForClickable();


      // wait unil the Home page is displayed on the navigation menu

      await browser.waitUntil(async function(){
        const homeText = await HomePage.NavComponent.firstNavMenuList.getText(); //Home
        return homeText === "Home";
      } ,{
        timeout: 2000,
        timeoutMsg:'could not verify the Home '
      })

        const navLinks = await HomePage.NavComponent.linkNavMenu;
        

        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
       // console.log(actualLinks);

        await expect(actualLinks).toEqual(expectedLinks);
    });
});