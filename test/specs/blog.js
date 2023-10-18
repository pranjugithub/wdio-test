
import BlogPage from '../pages/blog-page'


console.log("file started")
describe('Blog', () => {

  it('Get list of allRecent post& assert the length of each list >1 & assert the total',async ()=>{
  
   await BlogPage.open();

   // Get the Recent post list elements

  //const recentPostList = await $$('#recent-posts-3 ul li');
   const recentPostList = await BlogPage.listRecentPosts;

//loop & text length greater than 10 characters
   for (const item of recentPostList){
    const text = await item.getText();
    await expect(text.length).toBeGreaterThan(10);
   }

 // assert total length og the list is 4

  await expect(recentPostList).toHaveLength(5);
    

  });
});
