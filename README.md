# Course Outline
A gentle introduction to the PHP programming language.

This class will provide a brief introduction to the use of PHP, the widely-used
language that powers some of the most popular web sites today. For example,
WordPress is said to be in use on 26% of web sites [citation needed] and is
written in PHP. Along with PHP, we'll be looking at MySQL, a relational database
management system, which is used to store the information between calls to your
web application.

## Prerequisites:

* Good working knowledge of command line, including navigation, using
  git, etc. Must be comfortable with a code editor such as Atom,
  Sublime Text, and Visual Code
* Good working knowledge of HTML, CSS, and JavaScript
* A GitHub account (or similar, but we'll only be showing GitHub)
* A Cloud9 account (we will provide one)

## Learning Objectives

### This course will cover:

* How servers work
* The components of a web application
* How you write a web application
* Data modeling
* Data manipulation: CRUD
* Data reporing
* Integrating front-end and back-end
* Using PHP and MySQL together
* Setting up a development environemnt, using development tools to
  build a web application, and deploying the application into a
  production environment
* Testing your web application before you put it out in front of a
  Billion people

### This course is not:

A mere description of PHP syntax, nor a read-through of information
that is widely available to you on the web.

## Tools You'll Use

* PHP
* Apache
* MySQL

### Environments

#### Development/Test
* LAMP/WAMP/MAMP
* Cloud9

#### Production
* Heroku
* DigitalOcean

## Introduction

* What is HTTP and the Request-Response cycle?
* What's a Web application? How is it different from a plain old web
  site?
* What is the difference between front-end and back-end?
* What's a web server?
* What's a database?

## Case Study 1 - the Contact Form

You have a landing page, but you want to provide a simple way for
people to contact you, while you keep track of the contacts so you
have a history over time of the activity, and to follow up with people
that have contacted you in the past.

While you could perhaps use email for this, you want more detailed and
structured information for each contact, and to be able to record and
keep further contacts with each person.

* introduction to MySQL databases and PhpMyAdmin
* introduction to PHP scripting for form data collection and storing
  in a data base
* determine what data to collect, data modeling, MySQL database
  creation and manipulation
* introduction to PHP report generation
* creating public and private interfaces
* protecting your application from malicious data insertion

## Case Study 2 - Photo Gallery

You're a world traveler and love taking snapshots of everything around
you. You want to be able to share these images with your thoughts, and
keep them organized by trip, date, and image content. You want your
words and pictures to tell a compelling story about your travels.

You'll need a way to upload your files and store them until you
display them on your website. You'll need a way to capture text about
the images, and tag them. You need a way to keep trip information and
link the images to a particular trip.

* determine what data to collect, data modeling, MySQL database
  creation and manipulation
* data base relationships
* using PHP to manage database relationships
* determine how and where to store large media
* determine uploading and distribution of large media
* public viewing, private editing and uploading
* integrating good front-end code with back-end code

## Case Study 3 - Pinboard Clone

You're a regular web surfer and blogger, but you see so many places on
the web and don't have a ready way to capture what you've seen. Enter
the world of LinkSaver - a handy application with a simple bookmarklet
that you add to your browser bar to click and save the page you are
currently on.

You want to publish your links in an Atom feed, as well as provide a
nice looking web site to sort through them later.

* determine what data to collect, data modeling, MySQL database
  creation and manipulation
* learn how to integrate JavaScript bookmarklets into a PHP
  application
* learn how to provide alternative output such as RSS and Atom XML feeds
* learn how to integrate front-end applicaiton authentication and
  authorization with back-end account management
* more PHP report generation
