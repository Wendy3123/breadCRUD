// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}

//We finished our Mongoose schema,It will not do much just yet, however. For our schema to actually do anything, we need to create a model with it.
const Bread = mongoose.model('Bread', breadSchema)
// const Bread: The variable we are saving our model to. Conventionally, it should be capitalized and use the singular version of the collection the model is for.
// mongoose.model: A Mongoose method that creates a model for us based on the arguments we pass it. This is what will later allow us to interact with our Mongo database.
// Bread: The first argument we passed is the name of the collection (folder) we want to connect this model to. As with the variable, this should be capitalized and use the singular version of the collection name. In our case, we want to connect it to a collection named breads, so that becomes Bread when singular and capitalized.
// breadSchema: The second argument we passed is the schema we want our model to use.


module.exports = Bread











