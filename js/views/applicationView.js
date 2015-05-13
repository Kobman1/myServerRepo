(function($){
	var applicationView = Backbone.View.extend({
		template: _.template($('#calender-template').html()),
		el: $('body'), 
		
		initialize: function(){
			_.bindAll(this, 'render'); 
			
			this.header = this.$('#header');
			this.main = $('#main');
			this.nav = $('#nav');
			
			this.render(); 
		},
		
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	var applicationView = new applicationView();
});