/*
 * Flocking demo utilities
 * http://github.com/colinbdclark/flocking
 *
 * Copyright 2011-2014, Colin Clark
 * Dual licensed under the MIT and GPL Version 2 licenses.
 */

/*global require*/
var fluid = fluid || require("infusion"),
    demo = fluid.registerNamespace("demo");

(function () {
    
    "use strict";
    
    demo.toggleButtonView = function(synth, options) {
        var that = {
            model: {
                isPlaying: false
            },
            
            synth: synth,
            button: document.querySelector(typeof (options) === "string" ? options : options.selectors.button),
            onPlay: options.onPlay,
            onPause: options.onPause
        };
        that.buttonBaseClass = that.button.className; // TODO: ummm... library, anyone?
        
        that.play = function () {
            if (that.onPlay) {
                that.onPlay(that.button);
            }
            
            that.button.innerHTML = "Pause";
            that.button.className = that.buttonBaseClass + " " + "playing";
            that.synth.play();
            that.model.isPlaying = true;
        };
        
        that.pause = function () {
            if (that.onPause) {
                that.onPause(that.button);
            }
            
            that.button.innerHTML = "Play";
            that.button.className = that.buttonBaseClass + " " + "paused";
            that.synth.pause();

            that.model.isPlaying = false;
        };
        
        // Wire it up to a button on the page.
        that.button.addEventListener("click", function () {
            if (!that.model.isPlaying) {
                that.play();
            } else {
                that.pause();
            }
        }, false);
        
        that.pause();
        return that;
    };
    

    
})();