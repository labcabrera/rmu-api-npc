const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();
const Npc = require("../models/npc")

router.get('/', async (req, res) => {
    try {
        const items = await Npc.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Npc.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    console.log("NPC creation << " + JSON.stringify(req.body, null, 2));
    const { name, realm, level, race, size, armorType, hp, skills, items, equipment, description } = req.body;
    try {
        const newItem = new Npc({ name, realm, level, race, size, armorType, hp, skills, items, equipment, description });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    console.log("NPC update << " + req.params.id);
    try {
        const updatedItem = await Npc.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'NPC not found' });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    console.log("NPC delete << " + req.params.id);
    try {
        const id = req.params.id;
        const deletedItem = await Npc.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'NPC not found' });
        }
        res.json({ message: 'Deleted NPC ' + id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;