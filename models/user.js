var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    class: {
        modules: [{
            name: {
                type: String,
                required: true
            },
            assignement:[{
                completed: {
                    type: Boolean,
                    required: false,
                },
                understood: {
                    type: Boolean,
                    required: false,
                },
                topic: {
                    type: String,
                    required: false,
                },
                summary: {
                    type: String,
                    required: false,
                }
            }]
        }]
    },
    classCounter: {
        type: Number,
        required: false
    }
},{collection: 'classCatalog'});

module.exports = mongoose.model("classCatalog", userSchema);