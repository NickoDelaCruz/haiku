import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from './haiku-logic';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    var poem1 = $('#poem1').val();
    var poem2 = $('#poem2').val();
    var poem3 = $('#poem3').val();
    var output = new Haiku(poem1, poem2, poem3);
    output.vowelChecker()
    console.log(output);
    $('#solution').append("<li>" + output.line1 + " " + output.line2  + " " + output.line3 + "</li>");
  });
});
