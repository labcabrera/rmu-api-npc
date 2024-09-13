const mongoose = require('mongoose');

const npcSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    realm: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Npc = mongoose.model('Npc', npcSchema);

module.exports = Npc;