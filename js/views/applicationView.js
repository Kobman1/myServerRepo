var home = home || {};

(function(app){

    'use strict';

	 home.ApplicationView = Backbone.View.extend({
        tagName: 'section',
         el: $('#app'),
		template: _.template( $('#app_template').html()),
		
		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html(this.template());

            return this;
		},

        setContentSubview: function(view){
            this.setSubview('content', view);

        }
	});
})(home);
