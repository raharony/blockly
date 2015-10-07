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

Blockly.Blocks['thymio_onevent_buttons'] = {
	/**
	 * Block for Thymio buttons event.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTONS_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTONS_TOOLTIP);
		this.appendDummyInput().appendField('on button event');
		this.appendStatementInput('HANDLER');
	},
};

Blockly.Blocks['thymio_onevent_button'] = {
	/**
	 * Block for Thymio button event.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_TOOLTIP);

		var dropdown = new Blockly.FieldDropdown([['center', 'CENTER'], ['forward', 'FORWARD'], ['backward', 'BACKWARD'], ['left', 'LEFT'], ['right', 'RIGHT']]);
		this.appendDummyInput().appendField('on').appendField(dropdown, 'BUTTON').appendField('button press');
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