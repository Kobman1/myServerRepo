(function($){
	var applicationView = Backbone.View.extend({
		template: _.template( $('#app_template').html()),
		el: $('body'),
		
		initialize: function(){
			_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

			this.render(); // not all views are self-rendering. This one is.
		},
		// `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
		render: function(){
			$(this.el).append("<ul> <li> Welcome </li> </ul>");
		}
	});

	var applicationView = new applicationView();
})(jQuery);
