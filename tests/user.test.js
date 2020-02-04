const User = require('../model/userModel');
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

describe('User Schema test anything', () => {
    // the code below is for insert testing
        it('Add User testing anything', () => {
            const user = {
                'name': 'Kushal',
                'address': 'jorpati'
            };
            
            return User.create(user)
                .then((pro_ret) => {
                    expect(pro_ret.name).toEqual('Kushal');
                });
        });
    // the code below is for delete testing
        it('to test the delete product is working or not', async () => {
            const status = await User.deleteMany();
            expect(status.ok).toBe(1);
    });
})
