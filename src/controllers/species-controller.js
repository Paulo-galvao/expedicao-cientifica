import Species from "../models/species-model.js";

async function store(req, res) {
    try {
        const content = await Species.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.send(error.message);
    }
}

async function show(req, res) {
    try {
        const content = await Species.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.send(error.message);
    }
}


async function showById(req, res) {
    try {
        const content = await Species.findById(req.params.id, req.body).exec();
        res.status(200).json(content);
    } catch (error) {
        res.send(error.message);
    }
}

async function update(req, res) {
    try {
        const content = await Species.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(200).json(content);
    } catch (error) {
        res.send(error.message);
    }
}

async function destroy(req, res) {
    try {
        const content = await Species.findByIdAndDelete(req.params.id);
        res.status(200).json(content);
    } catch (error) {
        res.send(error.message);
    }
}

export default {
    store,
    show,
    showById,
    update,
    destroy
}