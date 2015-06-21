/**
 * Created by Tobias on 20.06.2015.
 */
var home = home || {};

(function(home){
    'use strict';

    home.Application = Backbone.Model.extend({
        defaults: {
            user: null
        }
    })
})(home);