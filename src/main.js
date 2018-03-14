import $ from 'jquery';
import './styles.css';
import { Haiku } from './haiku-logic';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    var poem = $('#poem').val();
    console.log(poem);
    var output = Haiku(poem);
    console.log(output);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
