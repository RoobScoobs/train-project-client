# Deployed Application

https://roobscoobs.github.io/train-project-client/

# Development Process

I knew I wanted to take a more methodical approach this time around, so I began
with the navigation bar, specifically taking a focus on each button. It was the
easiest place to start considering that I already had working code from the previous
project that can be implemented. Besides transferring the functionality over to
the buttons, I wanted to take the UI a step further and include Bootstrap elements,
such as the modal.

After finishing the navigation, my attention turned to creating the user-facing
features, beginning with the index action. In building out the index, which would
require all the runs stored by that particular user, I began by inserting a button
whose aim was to connect and communicate with the API. Upon clicking the button a
modal would neatly display all the runs logged by the user. The basic interface
was there, and the next step was to write out the AJAX call that would ping the server
in order to retrieve the requested information.

At this point the challenge was actually rendering the information on the client side.
I thought about using handlebars, but ultimately, decided to stay in Javascript land
to get further practice with the language. I had mixed feelings by the end of that
venture. On one side I was really happy that I rendered the information on a modal
that utilized a table, but on the other side, I cringed every time I saw the actual function.
The code isn't pretty, and it's difficult to read. If I had more time,I would
certainly go back and figure out how to implement handlebars in order to write
less code.

I spent some time deliberating the approach to the rest of the user actions. Apart
from adding a run, I didn't want to make additional input fields that would require
the user to manually identify which particular entry he or she would like to update
or delete, so I followed intuition (aka examples from other websites) and I settled
on the idea that buttons for editing, saving and deleting should exist within the
table itself in each row.

This was by far the coolest part of the table, at least I thought so. Almost immediately
the user would know how to edit the entry fields and update them. Also, once the
actions are completed, the table is rendered again through another get request, thus
any update or delete action will be reflected in the table. The trickiest part was
actually identifying the ID of the element that was either deleted or updated. That
was fun, and that's all I'll say about it.

I felt confident about finishing on time since I had an entire day to write the
final crud action – update. What I didn't expect was the most troublesome bug I had
to this day. I spent hours upon hours trying to figure out why I was getting an
Access Control Method error. I was certain that my back end was set up correctly,
given that I had tested it using curl requests, so it came down to something in the
AJAX function that was not playing well with the server.

The result was one additional character – literally, one – that gave me the error.
Instead of passing runs in the data object found in the AJAX call, I needed to
remove the 's' and everything would run smoothly. The felt so light after it had
worked. It was like the burden of that nasty bug was thrown off my shoulders and arms.

The value in that painstaking process is to be absolutely vigilant in exactly what
data is passed, and of course, because you're updating a single item, you can expect
that object to exist as a singular entity.


## Technologies Used

- HTML & CSS
- Javascript
- AJAX
- jQuery

# User Stories

- As a user I want to view all my runs on the application, so I can keep track
  of my progress throughout the training program.
- As a user I want to add new runs, so I can follow the program as laid out.
- As a user I want to update my existing log of runs, so I can make changes that
  are necessary.
- As a user I want to delete certain run entries, so I can keep an accurate display
  of my runs.

# Wireframes

![home page](https://cloud.githubusercontent.com/assets/16338632/16675279/9f8403b0-448d-11e6-9d3e-23bd85cf30ef.png)

# Link to API Repo

https://github.com/RoobScoobs/train-project-rails-api
