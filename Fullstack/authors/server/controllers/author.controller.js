const Author = require('../models/author.model');

module.exports = {
    create: (request, response) => {
        const { name } = request.body;
        Author.create({
            name: name
        })
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    },
    getAllAuthors: (req, res) => {
        Author.find({})
            .then((authors) => {
                res.json({ authors : authors})
            })
            .catch((err) => {
                res.json({ messaage: 'Something went wrong', err: err})
            });
    },
    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(oneSingleAuthor => {
                res.json({ authors: oneSingleAuthor })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    editOneAuthor: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthors => {
                res.json({ author: updatedAuthors })
            })
            .catch(err => res.status(400).json(err));
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }
}