/**
 * Created by Tobias on 20.06.2015.
 */
(function(app){
    'use strict';

    var User = Backbone.Model.extend({
        defaults:{
            id:null,
            firstName: 'Tobias',
            lastName: 'Koopmann',
            email: 'kobman@web.de',
            age: '21'
        },

        initialize: function(){
            console.log("I live ...");
        }
    })
})(jQuery);