import RetroSpyDevice from "../../device.class.js";

/*
	RetroSpyDevice_SmashBox
	Parses the input from a Smash Box by Hit Box and parses it into an chromium gamepad response.

	Original NintendoSpy implementation by Jeremy Burns (jaburns). https://github.com/jaburns/NintendoSpy
	RetroSpy fork by Christopher J. Mallery (zoggins). https://github.com/zoggins/RetroSpy

	RetroSpy Copyright 2018 Christopher J. Mallery <http://www.zoggins.net> NintendoSpy Copyright (c) 2014 Jeremy Burns
	LICENSE: https://github.com/zoggins/RetroSpy/blob/master/LICENSE

	Open Joystick Display implementation:
	Port by Anthony 'Dragoni' Mattera (RetroWeeb) https://github.com/RetroWeeb
	Copyright 2019 Open Joystick Display Project, Anthony 'Dragoni' Mattera (RetroWeeb)
	LICENSE: https://ojdproject.com/license

    Smash Box Implementation:
    Written by Dylan 'Luberry' Kozicki https://github.com/Luberry 2019


*/
export default class RetroSpyDevice_SMASHBOX extends RetroSpyDevice {
	constructor() {
		super(0, 23+4, "RetroSpy Ardunio Hit Box Smash Box. 23 Buttons, 4 Switch Positions, 0 Axes");
	}

	read(line: string) {
		const b = [...line];
		for (const i in b) {
			if (this.joystick.buttons[i]) {
				if (b[i] === '1') {
					this.joystick.buttons[i] = {pressed:true, value:1};
				} else {
					this.joystick.buttons[i] = {pressed:false, value:0};
				}
			}
		}
	}
}