//this example demostrated the ONE TO MANY relationship where one document of parent collection can be linked to thousands of documents of child collection 
//it is made by storing the references of child documents in a parent document


const mongoose = require('mongoose')
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/RelationsDemo');
    console.log("Connection has been established")
}

const orderSchema = new mongoose.Schema({
    item : String, 
    price : Number
})
const Order = mongoose.model('Order', orderSchema);

const customerSchema = new mongoose.Schema({
    name : String ,
    orders:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Order'
        }
    ] 

})
// post mongoose query middleware -- called after a specific query is executed on the mentioned schema
//we have to attach this post mongoose query middleware to the schema before the model is created to create the model with all provisions
customerSchema.post('findOneAndDelete', async(customer)=>{
    console.log('post middleware called');
    await Order.deleteMany({_id: {$in:customer.orders}})
    console.log('exiting post middleware');
})
const Customer = mongoose.model('Customer', customerSchema);

const addCustomer = async()=>{
    const customer1 = new Customer({name : 'ritik'})
    const order1 = await Order.findOne({item: 'brownie'});
    const order2 = await Order.findOne({item: 'chips'});

    customer1.orders.push(order1)
    customer1.orders.push(order2);

    let result = await customer1.save();
}


const addOrder = async()=>{
    let result = await Order.insertMany(
        [{item:'chips', price: 20},
        {item: 'brownie', price: 50},
        {item : 'chocolate', price: 100}]
    )
    console.log(result);
}


const deleteCustomer = async () =>{
    console.log('Customer is going to be deleted')
    await Customer.findByIdAndDelete('68fe33cafe1e84eae758a9f4')
    console.log('deletion statement executed')
}

async function run(){
    await main();
    // await addOrder();
    // await addCustomer();
    await deleteCustomer();
}

run().catch(err=>console.log(err))