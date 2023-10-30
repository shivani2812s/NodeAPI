const express = require('express');
const connectDB = require('../db/connection');
const book = require('../model/books');
const router = express.Router();
connectDB();
router.get('/getAllBooks', async (req, res) => {
    try {
        const books = await book.find();
        res.json(books);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
router.get('/getBooks/:id', async (req, res) => {
    try {
        const getBook = await book.findById(req.params.id);
        if(!getBook){
            return res.status(404).send('book not found');
        }
        res.json(getBook);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
router.post('/addBooks', async (req, res) => {
    try {
        const { title, author, summary } = req.body;
        const newBook = new book({ title, author, summary });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).send(err.message);
    }

});
router.delete('/deleteBooks/:id', async (req, res) => {
    try {
        const deletedBook = await book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).send('Book not found');
        }
        res.json(deletedBook);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
router.put('/updateBooks/:id', async (req, res) => {
    try {
        const { title, author, summary } = req.body;
        const updatedBook = await book.findByIdAndUpdate(req.params.id, { title, author, summary }, { new: true });
        if (!updatedBook) {
            return res.status(404).send('Book not found');
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;