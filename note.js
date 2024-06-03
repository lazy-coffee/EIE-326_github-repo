/*
Using js, write only one
> function convertMassScale()
  with two argumants (type, value) that converts:

  1. kg to lbs --> 1lb = 0.4535 kg
  2. lbs to kg
  3. ounce to kg
  4. kg to ounce
  5. lbs to oz
  6. oz to lbs


Write a small js body tag to embed a header tag, <h1>,
and a paragraph tag , <p>, in a div tag , <div>, with your name,
matric number and your mother's maiden name in a html webpage

Write a python script for computing the first 100 elements of the Fibonnacei series. Store the element in a list a; a = [0, 1];

Using CSS, set the width, height of the following objects as the last three digits of your matric no 

Complete the following
1._______ <head> ______ <body> ______ </html>
2._______ <li> My Account </li> ______ Our loaction </li> <li> help _____
3.<table> ________ <tr> <th> Product Name </th> <th> Price </th> ______ _____ </table>
4.<div>____ click me </span> <h3> Here _____ _____

Replace the following javascript statement with it's jquery equivalent
1. document.getElementById ("Megan")
2. document.getElementByTagname("a")
3. MyElement.innerHTML = "<p> Hello world </p>"

Using Javascript, write one function ConvertTemperatureScale() with two arguments (type, value)

> F TO C --> K = 273 + C
> C TO F --> F = 18C + 32
> C TO K
> K TO C
> F TO K
> K TO F

<div id = "handle" class "exit"> </div>
Using JQuery create a class selector, Id selector, a tag ID multi selector for the Object above (Assume it's the first div tag on the webpage)
*/

let e = document.getElementById('Megan');
e.html = "<h1><p> Megan Forun 21CJ029213 Ebitemi </p></h1>";


/*JQuery*/
$("") /*normal format*/
$("#id") // id
$(".class") // class
$(object) // object

$('#Megan')
$('a')
$('myElement').html('<p> Hello world </p>')


function ConvertTemperatureScale(type, value) {
  let convertedTemp = 0;

  if (type === 1) {
    convertedTemp = (value - 32) / 1.8;
  }

  if (type === 2) {
    convertedTemp = (1.8 * value) + 32;
  }

  if (type === 3) {
    convertedTemp = value - 273;
  }

  if (type === 4) {
    convertedTemp = 273 + value;
  }

  if (type === 5) {
    convertedTemp = 273 + ((value - 32) / 1.8);
  }

  if (type === 6) {
    convertedTemp = 1.8 * (value -273) + 32;
  }

  return convertedTemp;
}

$('#handle')
$('.exit')
$('')