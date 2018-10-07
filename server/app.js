const express = require('express')
const schema = require ('./schema/schema')
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose')
const app = express();
mongoose.connect('mongodb://localhost:27017/gql-ninja')
mongoose.connection.once('open',() =>{
    console.log('connected to database');
})
app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}));

app.listen(4000,() => {
    console.log("now listrning for request on port 4000")
});