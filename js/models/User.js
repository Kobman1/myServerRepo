/**
 * Created by Tobias on 20.06.2015.
 */
var home = home || {};

(function(home){
    'use strict';

    home.User = Backbone.Model.extend({
        defaults:{
            id:null,
            firstName: 'Tobias',
            lastName: 'Koopmann',
            email: 'kobman@web.de',
            age: '21'
        },

        initialize: function(){

        }
    })
})(home);