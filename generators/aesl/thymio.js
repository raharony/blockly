/**
 * @fileoverview Generating AESL for Thymio blocks.
 * @author fabian@hahn.graphics (Fabian Hahn)
 */
'use strict';

goog.provide('Blockly.AESL.thymio');

goog.require('Blockly.AESL');

function hexToRgb(hex)
{
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r : parseInt(result[1], 16),
		g : parseInt(result[2], 16),
		b : parseInt(result[3], 16)
	} : null;
}

function rgbToAesl(rgb)
{
	return rgb ? {
		r : Math.round(rgb.r / 8),
		g : Math.round(rgb.g / 8),
		b : Math.round(rgb.b / 8)
	} : null;
}

function hexToAesl(hex)
{
	return rgbToAesl(hexToRgb(hex));
}

Blockly.AESL['thymio_onevent_buttons'] = function(block)
{
	var handler = Blockly.AESL.statementToCode(block, 'HANDLER');
	var code = 'onevent buttons\n' + handler;

	code = Blockly.AESL.scrub_(block, code);
	Blockly.AESL.definitions_['onevent buttons'] = code;
	return null;
};

Blockly.AESL['thymio_onevent_button'] = function(block)
{
	var button = block.getFieldValue('BUTTON');
	var handler = Blockly.AESL.statementToCode(block, 'HANDLER');

	var buttonevent;
	if(button == 'CENTER') {
		buttonevent = 'button.center';
	} else if(button == 'FORWARD') {
		buttonevent = 'button.forward';
	} else if(button == 'BACKWARD') {
		buttonevent = 'button.backward';
	} else if(button == 'LEFT') {
		buttonevent = 'button.left';
	} else if(button == 'RIGHT') {
		buttonevent = 'button.right';
	}

	var code = 'onevent ' + buttonevent + '\n' + handler;

	code = Blockly.AESL.scrub_(block, code);
	Blockly.AESL.definitions_['onevent ' + buttonevent] = code;
	return null;
};

Blockly.AESL['thymio_leds'] = function(block)
{
	var led = block.getFieldValue('LED');
	var color = hexToAesl(block.getFieldValue('COLOR'));

	var ledvar;
	if(led == 'TOP') {
		ledvar = 'leds.top';
	} else if(led == 'BOTTOMLEFT') {
		ledvar = 'leds.bottom.left';
	} else {
		ledvar = 'leds.bottom.right';
	}

	var code = 'call ' + ledvar + '(' + color.r + ',' + color.g + ',' + color.b + ')\n';
	return code;
};

Blockly.AESL['thymio_button_pressed'] = function(block)
{
	var button = block.getFieldValue('BUTTON');

	var buttonname;
	if(button == 'CENTER') {
		buttonname = 'button.center';
	} else if(button == 'FORWARD') {
		buttonname = 'button.forward';
	} else if(button == 'BACKWARD') {
		buttonname = 'button.backward';
	} else if(button == 'LEFT') {
		buttonname = 'button.left';
	} else if(button == 'RIGHT') {
		buttonname = 'button.right';
	}

	return [buttonname + ' == 1', Blockly.AESL.ORDER_LOGICAL_AND];
};

Blockly.AESL['thymio_get_sensor_state'] = function(block)
{
	var sensor = block.getFieldValue('SENSOR');
	return [sensor, Blockly.AESL.ORDER_ATOMIC];
};
