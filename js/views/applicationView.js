(function(app){
    'use strict';

	 var ApplicationView = Backbone.View.extend({
        tagName: 'section',
         el: $('#app'),
		template: _.template( $('#app_template').html()),
		
		initialize: function(){
            console.log("application View is created.");

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
})(jQuery);
