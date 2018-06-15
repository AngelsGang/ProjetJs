import{message} from './messages'
import axios from 'axios'
axios.get('http://127.0.0.1:8080')
.then((response) => console.log(response))

console.log('app.js Loaded')
console.log(messages)