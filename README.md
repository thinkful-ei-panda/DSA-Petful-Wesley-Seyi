### PETFUL
Created by Seyi Ariyo and Wesley Rou

[Live App](https://dsa-petful-wesley-seyi.vercel.app)
[Client Repo](https://github.com/thinkful-ei-panda/DSA-Petful-Wesley-Seyi)
[API Repo](https://github.com/SeyiAriyo/DSA-Petful-Server-Wesley-Sey)

# About
Petful is a first in first out adoption agency. This server stores and serves the queue for dogs, cats, and people.

At Petful, we believe every pet deserves a home

We match pets and people on a first-in first-out basis.

Put your name in the queue, and when it's your turn, come back 
      and choose whether you want the next available dog,
        cat, or both!

Petful client is designed to work with the petful server interface

# API calls
GET
/api/dog/ returns the next dog
/api/cat/ returns the next cat
/api/people/next returns the next person
/api/people/all returns all people

DELETE - when a pet is adopted, they get deleted from the list
/api/dog/ removes the dog from the queue and returns it
/api/cat/ removes the next cat from the queue and returns it
/api/people/next removes the next person from the queue and returns it

# Technology

We deployed this using Vercel
The tech used was React, HTML5, CSS3, and Javascript.

The app utilizes asynchronous calls to a Heroku server that responds with data. 
By working on this project, you can learn how to set API calls to state, and utilize that state asynchronously to provide content.
We utilized a queue data structure to store the cat and dog information, so further developing this app can be a great help to learning data structures.