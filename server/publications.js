"use strict";
/* global Tournaments */

Meteor.publish("unfinishedTournaments", function() {
  if(this.userId) {
    return Tournaments.find({finished: false});
  }
  return Tournaments.find({finished: false, enablePublicRegistration: true});
});
