/**
 * @fileoverview Blocks for Thymio.
 * @author fabian@hahn.graphics (Fabian Hahn)
 */
'use strict';

goog.provide('Blockly.Blocks.thymio');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.thymio.HUE = 27;

Blockly.Blocks['thymio_event'] = {
	/**
	 * Block for Thymio events.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_TOOLTIP);
		
		var eventList = [];		
		eventList.push(['back button pressed/released', 'button.backward']);
		eventList.push(['left button pressed/released', 'button.left']);
		eventList.push(['center button pressed/released', 'button.center']);
		eventList.push(['forward button pressed/released','button.forward']);
		eventList.push(['right button pressed/released','button.right']);
		eventList.push(['button values probed', 'buttons']);
		eventList.push(['proximity sensors read', 'prox']);
		eventList.push(['IR sensor values received', 'prox.comm']);
		eventList.push(['shock detected', 'tap']);
		eventList.push(['accelerometer read', 'acc']);
		eventList.push(['sound intensity above threshold', 'mic']);
		eventList.push(['sound finished playing', 'sound.finished']);
		eventList.push(['temperature read', 'temperature']);
		eventList.push(['infrared signal', 'rc5']);
		eventList.push(['motor PID executed', 'motor']);
		eventList.push(['first timer expired', 'timer0']);
		eventList.push(['second timer expired', 'timer1']);

		var dropdown = new Blockly.FieldDropdown(eventList);
		
		this.appendDummyInput().appendField('on').appendField(dropdown, 'EVENT').appendField(' event');
		this.appendStatementInput('HANDLER');
	},
};

Blockly.Blocks['thymio_event_button'] = {
	/**
	 * Block for Thymio button event.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_TOOLTIP);

		var buttonDropdown = new Blockly.FieldDropdown([['center', 'button.center'], ['forward', 'button.forward'], ['backward', 'button.backward'], ['left', 'button.left'], ['right', 'button.right']]);
		var modeDropdown = new Blockly.FieldDropdown([['press', 'PRESS'], ['release', 'RELEASE']]);
		
		this.appendDummyInput().appendField('on').appendField(buttonDropdown, 'BUTTON').appendField('button').appendField(modeDropdown, 'MODE');
		this.appendStatementInput('HANDLER');
	},
};

Blockly.Blocks['thymio_leds'] = {
	/**
	 * Block for Thymio LEDs.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_LEDS_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_LEDS_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var dropdown = new Blockly.FieldDropdown([['top', 'TOP'], ['bottom left', 'BOTTOMLEFT'], ['bottom right', 'BOTTOMRIGHT']]);
		this.appendDummyInput().appendField('set').appendField(dropdown, 'LED').appendField('led to').appendField(new Blockly.FieldColour('#ff0000'), 'COLOR');
	},
};

Blockly.Blocks['thymio_button_pressed'] = {
	/**
	 * Block for checking whether a button is pressed
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_BUTTON_PRESSED_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_BUTTON_PRESSED_TOOLTIP);

		var dropdown = new Blockly.FieldDropdown([['center', 'CENTER'], ['forward', 'FORWARD'], ['backward', 'BACKWARD'], ['left', 'LEFT'], ['right', 'RIGHT']]);
		this.setOutput(true, 'Boolean');
		this.appendDummyInput().appendField(dropdown, 'BUTTON').appendField('button pressed');
	},
};

Blockly.Blocks['thymio_get_sensor_state'] = {
	/**
	 * Block for retrieving a sensor state
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_GET_SENSOR_STATE_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_GET_SENSOR_STATE_TOOLTIP);

		var sensorList = [];		
		sensorList.push(['backward button', 'button.backward']);
		sensorList.push(['left button', 'button.left']);
		sensorList.push(['center button', 'button.center']);
		sensorList.push(['forward button','button.forward']);
		sensorList.push(['right button','button.right']);
		sensorList.push(['front left proximity sensor', 'prox.horizontal[0]']);
		sensorList.push(['front left/middle proximity sensor', 'prox.horizontal[1]']);
		sensorList.push(['front middle proximity sensor', 'prox.horizontal[2]']);
		sensorList.push(['front right/middle proximity sensor', 'prox.horizontal[3]']);
		sensorList.push(['front right proximity sensor', 'prox.horizontal[4]']);
		sensorList.push(['rear left proximity sensor', 'prox.horizontal[5]']);
		sensorList.push(['rear right proximity sensor', 'prox.horizontal[6]']);
		sensorList.push(['left motor speed', 'motor.left.speed']);
		sensorList.push(['right motor speed', 'motor.right.speed']);
		sensorList.push(['accelorometer x', 'acc[0]']);
		sensorList.push(['accelorometer y', 'acc[1]']);
		sensorList.push(['accelorometer z', 'acc[2]']);
		sensorList.push(['temperature', 'temperature']);
		sensorList.push(['microphone intensity', 'mic.intensity']);

		var dropdown = new Blockly.FieldDropdown(sensorList);
		this.setOutput(true, 'Number');
		this.appendDummyInput().appendField('Thymio').appendField(dropdown, 'SENSOR');
	},
};

Blockly.Blocks['thymio_set_variable'] = {
	/**
	 * Block for setting a Thymio variable
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_SET_VARIABLE_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_SET_VARIABLE_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var variables = [];		
		variables.push(['left motor speed', 'motor.left.target']);
		variables.push(['right motor speed', 'motor.right.target']);
		variables.push(['microphone threshold', 'mic.threshold']);
		variables.push(['timer 1 period','timer.period[0]']);
		variables.push(['timer 2 period','timer.period[1]']);

		var dropdown = new Blockly.FieldDropdown(variables);
		this.appendValueInput('VALUE').setCheck('Number').appendField('set Thymio').appendField(dropdown, 'VARIABLE').appendField('to');
	},
};