AngularJS AlertBox Service
==========================

Disclaimer
----------
angular-alertbox.js is an AngularJS module containing a service and a directive to perform alert boxes in your application. 

Usage
-----
Link js file into your html right after angular.min.js or using requirejs lib.
```html
<script src="angular-alertbox.js"></script>
```
Add the module **AlertBox** to dependency injector and use the service **AlertService** in your controllers:
```javascript
angular.module('myApplication' [ 'AlertBox' ])
  .controller('MainCtrl', [ '$scope', 'AlertService', function(AlertService) {
    $scope.showAlert = function(message) {
        AlertService.Alert(message);
    };
  } ] );
```

Place HTML tag **alert-box** into your application to point the place you want your alerts to appear in:
```html
<alert-box box-class="alert-box radius" alert-class="alert" warning-class="warning" notice-class="success"></alert-box>
```
API
---

**AlertService**
----

**AlertService.Message(messageType, message)**

shows message of messageType: alert, warning, notice

----
**AlertService.Alert(message)**

**AlertService.Warning(message)**

**AlertService.Notice(message)**

shortcuts to Message('alert', message) etc...

----
**AlertService.removeMessage(messageType, message, [delay])**

removes message from the screen [in a __delay__ milliseconds]

----
Every message automatically hides after a couple of seconds. To set delay manually, use

**AlertService.setCloseDelay(delay)**

----

Directive < alert-box >
---------
**Attributes**
  * box-class
  * alert-class
  * notice-class
  * warning-class

Directive generates divs of a specified class with your message inside. Every div has classes set in **box-class**, and alerts have also **alert-class**, notices have **notice-class** and so on

