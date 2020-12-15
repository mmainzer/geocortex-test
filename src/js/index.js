const $ = require('jquery');
import { cursor, getArea } from './getArea.js';

$("li").hover( cursor );

$("li").click( getArea );