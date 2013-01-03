Eventify
========

Simple and very lightweight event API build from inspiration from jQuery's events.

##Usage

	var obj = ...Some Object..
	var e = require('Eventify');
	e.Eventify(obj);

this will give the object following methods

###off (and unbind)
	obj.off('event'[, func])

Removes every listeners for that event or only the specific listener bounded to the function `func` given

###on (and bind)
	obj.on('event', function(){ .. }
	
Here can arguments get passed along from the trigger calls

###trigger
	obj.trigger('event'[, [arguments*]])

triggers every function how is listening for that event. if arguments is given these are passed along

###one
	obj.one('event', function(){ .. }
	
Listens for an event but first time it is fired the event listener will be unbound.


###unbindAll
	obj.unbindAll()

Removes every event listeners from the hole object.


###Why?
The library was build during my [https://github.com/lindstroem/FileTransfer](FileTransfer project)