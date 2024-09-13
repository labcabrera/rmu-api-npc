const mongoose = require('mongoose');

const npcSkillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true
    },
    bonus: {
        type: Number,
        required: true
    }
});

const npcItemSchema = new mongoose.Schema({
    name: String,
    type: String,
    attackTable: String,
    skill: String
});

const npcEquipment = new mongoose.Schema({
    mainHand: String,
    offHand: String,
    body: String,
    head: String
});

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
    race: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    armorType: {
        type: Number,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    skills: [npcSkillSchema],
    items: [npcItemSchema],
    equipment: npcEquipment,
    description: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Npc = mongoose.model('Npc', npcSchema);

module.exports = Npc;