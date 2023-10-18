//import { faker } from '@faker-js/faker';

import ContactPage from '../pages/contact-page'
describe('Contact', () => {
  it("Fill all the input fields,submit from and assert success message",async ()=>{
    await  ContactPage.open();
    // fill out the input fields
   

   
    await ContactPage.submitForm('Ram','ram@gmail.com','123456789','Test Name');
    
    //await ContactPage.submitForm(faker.findName,faker.internet.email(),faker.phone,faker.lorem.paragraphs(2));

        // debug 
      //  await browser.debug(); 
      //   await $('//*[@id="evf-submit-277"]').click();

          // assert the success message
          const successAlert = ContactPage.alertSuccess;
          await expect( successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');



  });
});
