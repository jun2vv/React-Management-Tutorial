import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'

const customers = [{
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
]

class App extends Component {
  render() {
    return (
      <div>
        { 
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
