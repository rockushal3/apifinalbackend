const Post = require('../model/postModel');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/testJourneyMate'; 
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('Post Schema test anything', () => {
    // the code below is for insert testing
        it('Add Post testing anything', () => {
            const post = {
                'caption': 'jorpati',
                'image':'kushal.jpg'
            };
            
            return Post.create(post)
                .then((pro_ret) => {
                    expect(pro_ret.caption).toEqual('jorpati');
                });
        });
        //test for update
        it('to test the update', async () => {

            return Post.findOneAndUpdate({caption:'jorpati'}, {$set : {caption:'ram'}})
            .then((pp)=>{
                expect(pp.image).toEqual('kushal.jpg')
            })
          
        });
    // the code below is for delete testing
        it('to test the delete product is working or not', async () => {
            const status = await Post.deleteMany();
            expect(status.ok).toBe(1);
    });

    
    
    
})
