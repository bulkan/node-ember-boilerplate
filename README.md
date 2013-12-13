Boilerplate Node.js / Ember application
=======================================

## work in progress

Basic application structure for using `Node.js` on the backend and `Ember` on the frontend.

`Bower` is used to handle the frontend dependencies.

I've tried to keep the backend seperate from the frontend, so that the frontend can be hosted on some sort of CDN.


Usage
=====

* clone/download repo
* install `bower` if you don't have it already then run `bower install`
* run `npm install`
* modify code


Structure
=========

`index.html` to load all the dependencies.

`templates.js` that syncronously loads in Handlebars templates. This will change in the future.

There is a single `resource` called `tasks` for a simple _Todo_ task management.
