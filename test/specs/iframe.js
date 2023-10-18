describe('Iframe', () => {
  
    it('Working with iframe' , async()=>{
    

        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        // access the frame

        // const iframe = await $('//*[@id="main-content"]');
        // await browser.switchToFrame(iframe);

        // verify page title

        await expect($('h1.zak-page-title')).toHaveText('IFrame Sample');
        console.log("Successfully found");

    
    });
});
