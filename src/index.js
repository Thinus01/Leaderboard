import './style.css';
import { fetchData, sendData } from './modules/list.js';

const refreshBtn = document.getElementById('RefreshButton');
const form = document.getElementById('submit');

refreshBtn.addEventListener('click', fetchData);
form.addEventListener('submit', sendData);