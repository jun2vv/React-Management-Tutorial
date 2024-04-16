const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req, res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https//placeimg.com/64/64/1',
          'name' : '최준',
          'birthday' : '990920',
          'gender' : '남자',
          'job' : '테스트'
        },
        {
          'id' : 2,
          'image' : 'https//placeimg.com/64/64/2',
          'name' : '김채은',
          'birthday' : '991125',
          'gender' : '여자',
          'job' : '멋쟁이'
        },
        {
          'id' : 3,
          'image' : 'https//placeimg.com/64/64/3',
          'name' : '밍밍이',
          'birthday' : '180000',
          'gender' : '중성',
          'job' : '고양이'
        },
        {
          'id' : 4,
          'image' : 'https//placeimg.com/64/64/3',
          'name' : '단추',
          'birthday' : '180000',
          'gender' : '중성',
          'job' : '고양이'
        }  
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));