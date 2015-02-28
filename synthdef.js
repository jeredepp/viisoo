var synthriver = flock.synth({
	synthDef: {
		ugen: "flock.ugen.scope",

		// The playBuffer ugen plays back audio buffers loaded from a url or file.
		// Currently, Flocking has support for .wav and .aiff files.
		source: {
			id: "player",
			ugen: "flock.ugen.playBuffer",
			buffer: {
				id: "selectedSound",                    // The sound file will be loaded into an environment buffer named "selectedSound."
				url: "sounds/river.mp3"  // The File object selected by the #fileBrowser input element will be read.
			},
			speed: 1.0,
			loop: 1.0
		},

		options: {
			canvas: "#waveform",
			styles: {
				strokeColor: "#888",
				strokeWidth: 5
			}
		}
	}
});

var synthmoldau = flock.synth({
    synthDef: {
        ugen: "flock.ugen.playBuffer",
        buffer: {
            url: "sounds/moldau.mp3"
        },
                        speed: 1.0,
                        loop: 1.0
    }
});

var synthbirds = flock.synth({
    synthDef: {
        ugen: "flock.ugen.playBuffer",
        buffer: {
            url: "sounds/birds.mp3"
        },
                        speed: 1.0,
                        loop: 1.0
    }
});
var synthstone = flock.synth({
    synthDef: {
        ugen: "flock.ugen.playBuffer",
        buffer: {
            id: "chord",
            url: "sounds/stone.mp3"
        },
        trigger: {
            ugen: "flock.ugen.mouse.click"
        }
    }
});


var synthmouse = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sin",
        freq: {
            ugen: "flock.ugen.value",
            rate: "audio",
            value: 1,
            add: {
                ugen: "flock.ugen.sin",
                freq: {
                    ugen: "flock.ugen.mouse.cursor",
                    mul: 124,
                    add: 62,
                },
                mul: {
                    ugen: "flock.ugen.mouse.cursor",
                    mul: 50,
                    add: 50,
                    options: {
                        axis: "y"
                    }
                }
            }
        },
        mul: 0.3
    }
});

var synthmic = flock.synth({
    synthDef: {
        ugen: "flock.ugen.granulator",
        delayDur: 1,
        numGrains: {
            ugen: "flock.ugen.lfNoise",
            freq: 0.5,
            mul: 10,
            add: 10,
            options: {
                interpolation: "linear"
            }
        },
        source: {
            ugen: "flock.ugen.audioIn"
        }
    }
});
