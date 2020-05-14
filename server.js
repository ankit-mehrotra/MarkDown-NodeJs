const express = require('express');
const app = express();
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const Article = require('./models/article');

mongoose.connect('mongodb+srv://ankit:Mphasisnew150@cluster0-zmbaq.mongodb.net/data?retryWrites=true&w=majority');
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use('/articles',articleRouter);


app.get('/', async (req,res) => {
    const article = await Article.find().sort({createdAt: 'desc'});
    res.render('articles/index', {articles: article});
})
app.listen(5000);