Ti._5.createClass('Ti.UI.3DMatrix', function(args){

	// Interfaces
	Ti._5.DOMView(this, '3dmatrix', args, '3DMatrix');

	// Methods
	this.invert = function(){
		console.debug('Method "Titanium.UI.3DMatrix#.invert" is not implemented yet.');
	};
	this.multiply = function(){
		console.debug('Method "Titanium.UI.3DMatrix#.multiply" is not implemented yet.');
	};
	this.rotate = function(){
		console.debug('Method "Titanium.UI.3DMatrix#.rotate" is not implemented yet.');
	};
	this.scale = function(){
		console.debug('Method "Titanium.UI.3DMatrix#.scale" is not implemented yet.');
	};
	this.translate = function(){
		console.debug('Method "Titanium.UI.3DMatrix#.translate" is not implemented yet.');
	};

	require.mix(this, args);
});