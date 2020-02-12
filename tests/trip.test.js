const Trip = require('../model/tripModel');
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

describe('Trip Schema test anything', () => {
    // the code below is for insert testing
        it('Add Trip testing anything', () => {
            const trip = {
                'trip_name': 'jorpati',
                'description':'going to jorpati',
                'date':'2020/03/04'
            };
            
            return Trip.create(trip)
                .then((pro_ret) => {
                    expect(pro_ret.trip_name).toEqual('jorpati');
                });
        });
        //test for update
        it('to test the update', async () => {

            return Trip.findOneAndUpdate({date:'2020/03/04'}, {$set : {date:'2020/03/06'}})
            .then((pp)=>{
                expect(pp.trip_name).toEqual('jorpati')
            })
          
        });
    // the code below is for delete testing
        it('to test the delete product is working or not', async () => {
            const status = await Trip.deleteMany();
            expect(status.ok).toBe(1);
    });

    
    
    
})
