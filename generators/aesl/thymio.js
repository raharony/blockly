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

Blockly.AESL['thymio_when'] = function(block)
{
	var condition = Blockly.AESL.valueToCode(block, 'WHEN', Blockly.AESL.ORDER_NONE);
	var branch = Blockly.AESL.statementToCode(block, 'DO');
	
	var code = 'when ' + condition + ' do\n' + branch + 'end\n';
	return code;
};

Blockly.AESL['thymio_for'] = function(block)
{
	var iterator = Blockly.AESL.variableDB_.getName(block.getFieldValue('ITER'), Blockly.Variables.NAME_TYPE);
	var from = parseInt(block.getFieldValue('FROM'));
	var to = parseInt(block.getFieldValue('TO'));
	var branch = Blockly.AESL.statementToCode(block, 'DO');
	
	var code = 'for ' + iterator + ' in ' + from + ':' + to + ' do\n' + branch + 'end\n';
	return code;
};

Blockly.AESL['thymio_event'] = function(block)
{
	var event = block.getFieldValue('EVENT');
	var handler = Blockly.AESL.statementToCode(block, 'HANDLER');
	
	Blockly.AESL.addEventHandler(event, handler);
	return null;
};

Blockly.AESL['thymio_event_button'] = function(block)
{
	var button = block.getFieldValue('BUTTON');
	var mode = block.getFieldValue('MODE');
	var handler = Blockly.AESL.statementToCode(block, 'HANDLER');
	
	var code = '\twhen ' + button + ' == ' + (mode == 'PRESS' ? '1' : '0') + ' do\n';
	
	if(handler.length > 0) {
		code += Blockly.AESL.prefixLines(handler, '\t');
	}
	
	code += '\tend\n';

	Blockly.AESL.addEventHandler(button, code);
	return null;
};

Blockly.AESL['thymio_event_prox'] = function(block)
{
	var sensor = block.getFieldValue('SENSOR');
	var mode = block.getFieldValue('MODE');
	var handler = Blockly.AESL.statementToCode(block, 'HANDLER');
	
	var condition = '';
	if(mode == 'BLOCK') {
		if(sensor.indexOf('prox.ground') == 0) {
			condition = ' > 450';
		} else {
			condition = ' > 2000';
		}
	} else {
		if(sensor.indexOf('prox.ground') == 0) {
			condition = ' < 400';
		} else {
			condition = ' < 1000';
		}		
	}
	
	var code = '\twhen ' + sensor + condition + ' do\n';
	
	if(handler.length > 0) {
		code += Blockly.AESL.prefixLines(handler, '\t');
	}
	
	code += '\tend\n';

	Blockly.AESL.addEventHandler('prox', code);
	return null;
};

Blockly.AESL['thymio_led'] = function(block)
{
	var led = block.getFieldValue('LED');
	var color = hexToAesl(block.getFieldValue('COLOR'));

	var code = 'call ' + led + '(' + color.r + ',' + color.g + ',' + color.b + ')\n';
	return code;
};

Blockly.AESL['thymio_led_rgb'] = function(block)
{
	var led = block.getFieldValue('LED');
	var red = Blockly.AESL.valueToCode(block, 'RED', Blockly.AESL.ORDER_NONE);
	var green = Blockly.AESL.valueToCode(block, 'GREEN', Blockly.AESL.ORDER_NONE);
	var blue = Blockly.AESL.valueToCode(block, 'BLUE', Blockly.AESL.ORDER_NONE);

	var code = 'call ' + led + '(' + red + ',' + green + ',' + blue + ')\n';
	return code;
};

Blockly.AESL['thymio_led_off'] = function(block)
{
	var led = block.getFieldValue('LED');

	var code = 'call ' + led + '(0,0,0)\n';
	return code;
};

Blockly.AESL['thymio_sound_system'] = function(block)
{
	var sound = block.getFieldValue('SOUND');

	var code = 'call sound.system(' + sound + ')\n';
	return code;
};

Blockly.AESL['thymio_sound_stop'] = function(block)
{
	var code = 'call sound.system(-1)\n';
	return code;
};

Blockly.AESL['thymio_button_pressed'] = function(block)
{
	var button = block.getFieldValue('BUTTON');
	return [button + ' == 1', Blockly.AESL.ORDER_LOGICAL_AND];
};

Blockly.AESL['thymio_prox_check'] = function(block)
{
	var sensor = block.getFieldValue('SENSOR');
	var mode = block.getFieldValue('MODE');
	
	var condition = '';
	if(mode == 'BLOCK') {
		if(sensor.indexOf('prox.ground') == 0) {
			condition = ' > 450';
		} else {
			condition = ' > 2000';
		}
	} else {
		if(sensor.indexOf('prox.ground') == 0) {
			condition = ' < 400';
		} else {
			condition = ' < 1000';
		}		
	}
	
	return [sensor + condition, Blockly.AESL.ORDER_CONDITION];
};

Blockly.AESL['thymio_get_sensor_state'] = function(block)
{
	var sensor = block.getFieldValue('SENSOR');
	return [sensor, Blockly.AESL.ORDER_ATOMIC];
};

Blockly.AESL['thymio_set_variable'] = function(block)
{
	var variable = block.getFieldValue('VARIABLE');
	var value = Blockly.AESL.valueToCode(block, 'VALUE', Blockly.AESL.ORDER_ASSIGNMENT) || '0';

	var code = variable + ' = ' + value + '\n';
	return code;
};
