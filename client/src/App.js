import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop :theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080
  }
})

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
    const { classes } =this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { customers.map(c => {
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles) (App);
