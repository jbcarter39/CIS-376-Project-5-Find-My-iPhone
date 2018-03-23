# Project-5-Find-My-iPhone
Find My iPhone mobile interface

Design Approach

//HTML 
I made a div class that that would essential be the size of a mobile phone screen and 
would hold all of the content

Inside that div, I added an image of the "Find My iPhone" symbol

Then I added another div that held the username and password input and a form that would validate
the email entered by the user

I also placed a button to submit the username and password input

The last thing I add was div for a snackbar message

//CSS
There is a lot of stuff going on with the stylesheet

I added imported a new font for the text that looked a little cleaner

I styled the text at the bottom of the page to look like how it does in the actual Find My iPhone app

I edited the style of the image and the div classes so everything is laid out correctly.

I made the overall div display flex so it will shift with the size of the screen

I set the size of the input areas and made the sign in button gray until input is enter into the
email field.

I created animation that would fade the snackbar in and out 


//JavaScript
After adding jquery, I created a function and a loop that would change the color of the sign in button red if
the email entered was not valid, and green if it is valid.

I also have function that will alert the user if he/she tries to enter an invalid email or password.

I also have a a function that will tell the user to input the email and/or password if the sign in
button is pressed when nothing is entered.

I call made a function that essentially will bring up the snackbar when the page loads.

I added a function that hides the password entered by the user.


