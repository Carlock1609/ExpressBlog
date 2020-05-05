
app.get('/', (req,res) => {
    res.render('home')
});

app.get('/user', (req,res) => {
    res.render('userProfile')
})




module.exports = router;

