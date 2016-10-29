'use strict';

angular.module('eshop').service('sound', function() {
	
	var audio = new Audio();

	return {
		sounds: {
			// 'new_order': './sounds/order_coming.mp3'
			'new_order': './sounds/pacman.wav'
		},

		play: function(soundKey) {
			audio.pause();
			audio.src = this.sounds[soundKey];
			audio.play();
		}
	}
});