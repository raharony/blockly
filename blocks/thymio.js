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
Blockly.Blocks.thymio.ACTUATORS_HUE = 60;
Blockly.Blocks.thymio.SENSORS_HUE = 90;
Blockly.Blocks.thymio.EVENTS_HUE = 10;
Blockly.Blocks.thymio.ARRAYS_HUE = 156;

Blockly.Blocks['thymio_when'] = {
	/**
	 * Block for Thymio when conditions.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.logic.HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_WHEN_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_WHEN_TOOLTIP);
		this.setPreviousStatement(true);
	    this.setNextStatement(true);
		
		this.appendValueInput('WHEN').setCheck('Boolean').appendField('when');
		this.appendStatementInput('DO').appendField('do');
	},
};

Blockly.Blocks['thymio_for'] = {
	/**
	 * Block for Thymio count loops.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.loops.HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_FOR_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_FOR_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var variableField = new Blockly.FieldVariable('');
		var fromField = new Blockly.FieldTextInput('1', Blockly.FieldTextInput.numberValidator);
		var toField = new Blockly.FieldTextInput('10', Blockly.FieldTextInput.numberValidator);

		this.appendDummyInput().appendField('for').appendField(variableField, 'ITER').appendField('from').appendField(fromField, 'FROM').appendField('to').appendField(toField, 'TO');
		this.appendStatementInput('DO').appendField('do');
	},
	/**
	 * Return all variables referenced by this block.
	 * 
	 * @return {!Array.<string>} List of variable names.
	 * @this Blockly.Block
	 */
	getVars : function()
	{
		return [this.getFieldValue('ITER')];
	},
	/**
	 * Notification that a variable is renaming. If the name matches one of this
	 * block's variables, rename it.
	 * 
	 * @param {string} oldName Previous name of variable.
	 * @param {string} newName Renamed variable.
	 * @this Blockly.Block
	 */
	renameVar : function(oldName, newName)
	{
		if(Blockly.Names.equals(oldName, this.getFieldValue('ITER'))) {
			this.setFieldValue(newName, 'ITER');
		}
	},
};

Blockly.Blocks['thymio_subroutine_define'] = {
	/**
	 * Block to define Thymio subroutines
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.procedures.HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_SUBROUTINE_DEFINE_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_SUBROUTINE_DEFINE_TOOLTIP);

		var nameField = new Blockly.FieldTextInput('name', Blockly.Procedures.rename);

		this.appendDummyInput().appendField('subroutine').appendField(nameField, 'NAME');
		this.appendStatementInput('STACK');
	},
	/**
	 * Dispose of any callers.
	 * 
	 * @this Blockly.Block
	 */
	dispose : function()
	{
		var name = this.getFieldValue('NAME');
		Blockly.Procedures.disposeCallers(name, this.workspace);
		// Call parent's destructor.
		this.constructor.prototype.dispose.apply(this, arguments);
	},

	/**
	 * Return the signature of this procedure definition.
	 * 
	 * @return {!Array} Tuple containing three elements: - the name of the
	 *         defined procedure, - a list of all its arguments, - that it DOES
	 *         NOT have a return value.
	 * @this Blockly.Block
	 */
	getProcedureDef : function()
	{
		return [this.getFieldValue('NAME'), [], false];
	},
	callType_ : 'procedures_callnoreturn'
};

Blockly.Blocks['thymio_event'] = {
	/**
	 * Block for Thymio events.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_TOOLTIP);
		
		var eventList = [];		
		eventList.push(['button values probed', 'buttons']);
		eventList.push(['proximity sensors read', 'prox']);
		eventList.push(['communication value received', 'prox.comm']);
		eventList.push(['shock detected', 'tap']);
		eventList.push(['accelerometer read', 'acc']);
		eventList.push(['sound intensity above threshold', 'mic']);
		eventList.push(['sound finished playing', 'sound.finished']);
		eventList.push(['temperature read', 'temperature']);
		eventList.push(['remote control signal', 'rc5']);
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
		this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_TOOLTIP);

		var buttonDropdown = new Blockly.FieldDropdown([['center', 'button.center'], ['forward', 'button.forward'], ['backward', 'button.backward'], ['left', 'button.left'], ['right', 'button.right']]);
		var modeDropdown = new Blockly.FieldDropdown([['pressed', 'PRESS'], ['released', 'RELEASE']]);
		
		this.appendDummyInput().appendField('on').appendField(buttonDropdown, 'BUTTON').appendField('button').appendField(modeDropdown, 'MODE');
		this.appendStatementInput('HANDLER');
	},
};

Blockly.Blocks['thymio_event_prox'] = {
	/**
	 * Block for Thymio proximity event.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_PROX_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_PROX_TOOLTIP);

		var sensorList = [];
		sensorList.push(['front left', 'prox.horizontal[0]']);
		sensorList.push(['front left/middle', 'prox.horizontal[1]']);
		sensorList.push(['front middle', 'prox.horizontal[2]']);
		sensorList.push(['front right/middle', 'prox.horizontal[3]']);
		sensorList.push(['front right', 'prox.horizontal[4]']);
		sensorList.push(['rear left', 'prox.horizontal[5]']);
		sensorList.push(['rear right', 'prox.horizontal[6]']);
		
		var sensorDropdown = new Blockly.FieldDropdown(sensorList);
		var modeDropdown = new Blockly.FieldDropdown([['blocked', 'BLOCK'], ['cleared', 'CLEAR']]);
		
		this.appendDummyInput().appendField('on').appendField(sensorDropdown, 'SENSOR').appendField('proximity sensor').appendField(modeDropdown, 'MODE');
		this.appendStatementInput('HANDLER');
	},
};

Blockly.Blocks['thymio_event_prox_ground'] = {
	/**
	 * Block for Thymio ground proximity event.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_PROX_GROUND_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_PROX_GROUND_TOOLTIP);

		var sensorList = [];
		sensorList.push(['left', 'prox.ground.delta[0]']);
		sensorList.push(['right', 'prox.ground.delta[1]']);
		
		var sensorDropdown = new Blockly.FieldDropdown(sensorList);
		var modeDropdown = new Blockly.FieldDropdown([['black', 'BLACK'], ['white', 'WHITE']]);
		
		this.appendDummyInput().appendField('on').appendField(sensorDropdown, 'SENSOR').appendField('ground sensor').appendField(modeDropdown, 'MODE');
		this.appendStatementInput('HANDLER');
	},
};

Blockly.Blocks['thymio_led'] = {
	/**
	 * Block to set Thymio LEDs.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_LED_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_LED_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var dropdown = new Blockly.FieldDropdown([['top', 'leds.top'], ['bottom left', 'leds.bottom.left'], ['bottom right', 'leds.bottom.right']]);
		this.appendDummyInput().appendField('set').appendField(dropdown, 'LED').appendField('led to').appendField(new Blockly.FieldColour('#ff0000'), 'COLOR');
	},
};

Blockly.Blocks['thymio_led_rgb'] = {
	/**
	 * Block to set Thymio LEDs by RGB values.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_LED_RGB_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_LED_RGB_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var dropdown = new Blockly.FieldDropdown([['top', 'leds.top'], ['bottom left', 'leds.bottom.left'], ['bottom right', 'leds.bottom.right']]);
		this.appendValueInput('RED').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('set').appendField(dropdown, 'LED').appendField('led to red');
		this.appendValueInput('GREEN').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('green');
		this.appendValueInput('BLUE').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('blue');
	},
};

Blockly.Blocks['thymio_led_off'] = {
	/**
	 * Block to turn off Thymio LEDs.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_LED_OFF_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_LED_OFF_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var dropdown = new Blockly.FieldDropdown([['top', 'leds.top'], ['bottom left', 'leds.bottom.left'], ['bottom right', 'leds.bottom.right']]);
		this.appendDummyInput().appendField('turn off').appendField(dropdown, 'LED').appendField('led');
	},
};

Blockly.Blocks['thymio_sound_system'] = {
	/**
	 * Block to play Thymio system sounds.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_SOUND_SYSTEM_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_SOUND_SYSTEM_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		
		var soundList = [];
		soundList.push(['startup', '0']);
		soundList.push(['shutdown', '1']);
		soundList.push(['arrow', '2']);
		soundList.push(['central', '3']);
		soundList.push(['scary', '4']);
		soundList.push(['collision', '5']);
		soundList.push(['target friendly', '6']);
		soundList.push(['target detected', '7']);
		var dropdown = new Blockly.FieldDropdown(soundList);
		
		this.appendDummyInput().appendField('play').appendField(dropdown, 'SOUND').appendField('sound');
	},
};

Blockly.Blocks['thymio_sound_note'] = {
	/**
	 * Block to play Thymio sound notes.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_SOUND_NOTE_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_SOUND_NOTE_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		
		this.appendValueInput('FREQ').setCheck('Number').appendField('play');
		this.appendValueInput('DURATION').setCheck('Number').appendField('Hz note for');
		this.appendDummyInput().appendField('/ 60 seconds')
		this.setInputsInline(true);
	},
};

Blockly.Blocks['thymio_sound_stop'] = {
	/**
	 * Block to cause Thymio to stop playing sound.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_SOUND_STOP_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_SOUND_STOP_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.appendDummyInput().appendField('stop playing sound');
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
		this.setColour(Blockly.Blocks.thymio.SENSORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_BUTTON_PRESSED_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_BUTTON_PRESSED_TOOLTIP);

		var buttonDropdown = new Blockly.FieldDropdown([['center', 'button.center'], ['forward', 'button.forward'], ['backward', 'button.backward'], ['left', 'button.left'], ['right', 'button.right']]);
		this.setOutput(true, 'Boolean');
		this.appendDummyInput().appendField(buttonDropdown, 'BUTTON').appendField('button pressed');
	},
};

Blockly.Blocks['thymio_prox_check'] = {
	/**
	 * Block for checking whether a proximity sensor is blocked or cleared
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.SENSORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_PROX_CHECK_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_PROX_CHECK_TOOLTIP);
		
		var sensorList = [];
		sensorList.push(['front left', 'prox.horizontal[0]']);
		sensorList.push(['front left/middle', 'prox.horizontal[1]']);
		sensorList.push(['front middle', 'prox.horizontal[2]']);
		sensorList.push(['front right/middle', 'prox.horizontal[3]']);
		sensorList.push(['front right', 'prox.horizontal[4]']);
		sensorList.push(['rear left', 'prox.horizontal[5]']);
		sensorList.push(['rear right', 'prox.horizontal[6]']);

		var sensorDropdown = new Blockly.FieldDropdown(sensorList);
		var modeDropdown = new Blockly.FieldDropdown([['blocked', 'BLOCK'], ['cleared', 'CLEAR']]);
		
		this.setOutput(true, 'Boolean');
		this.appendDummyInput().appendField(sensorDropdown, 'SENSOR').appendField('proximity sensor').appendField(modeDropdown, 'MODE');
	},
};

Blockly.Blocks['thymio_prox_ground_check'] = {
	/**
	 * Block for checking whether a ground proximity sensor is white or black
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.SENSORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_PROX_GROUND_CHECK_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_PROX_GROUND_CHECK_TOOLTIP);
		
		var sensorList = [];
		sensorList.push(['left', 'prox.ground.delta[0]']);
		sensorList.push(['right', 'prox.ground.delta[1]']);

		var sensorDropdown = new Blockly.FieldDropdown(sensorList);
		var modeDropdown = new Blockly.FieldDropdown([['black', 'BLACK'], ['white', 'WHITE']]);
		
		this.setOutput(true, 'Boolean');
		this.appendDummyInput().appendField(sensorDropdown, 'SENSOR').appendField('ground sensor').appendField(modeDropdown, 'MODE');
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
		this.setColour(Blockly.Blocks.thymio.SENSORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_GET_SENSOR_STATE_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_GET_SENSOR_STATE_TOOLTIP);

		var sensorList = [];		
		sensorList.push(['front left proximity sensor', 'prox.horizontal[0]']);
		sensorList.push(['front left/middle proximity sensor', 'prox.horizontal[1]']);
		sensorList.push(['front middle proximity sensor', 'prox.horizontal[2]']);
		sensorList.push(['front right/middle proximity sensor', 'prox.horizontal[3]']);
		sensorList.push(['front right proximity sensor', 'prox.horizontal[4]']);
		sensorList.push(['rear left proximity sensor', 'prox.horizontal[5]']);
		sensorList.push(['rear right proximity sensor', 'prox.horizontal[6]']);
		sensorList.push(['left ground sensor', 'prox.ground.delta[0]']);
		sensorList.push(['right ground sensor', 'prox.ground.delta[1]']);
		sensorList.push(['left motor speed', 'motor.left.speed']);
		sensorList.push(['right motor speed', 'motor.right.speed']);
		sensorList.push(['accelorometer x', 'acc[0]']);
		sensorList.push(['accelorometer y', 'acc[1]']);
		sensorList.push(['accelorometer z', 'acc[2]']);
		sensorList.push(['temperature', 'temperature']);
		sensorList.push(['microphone intensity', 'mic.intensity']);
		sensorList.push(['received communication', 'prox.comm.rx']);
		sensorList.push(['remote control address', 'rc5.address']);
		sensorList.push(['remote control command', 'rc5.command']);

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
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_SET_VARIABLE_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_SET_VARIABLE_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var variables = [];		
		variables.push(['left motor speed', 'motor.left.target']);
		variables.push(['right motor speed', 'motor.right.target']);
		variables.push(['microphone threshold', 'mic.threshold']);
		variables.push(['first timer period','timer.period[0]']);
		variables.push(['second timer period','timer.period[1]']);
		variables.push(['communication to transmit','prox.comm.tx']);

		var dropdown = new Blockly.FieldDropdown(variables);
		this.appendValueInput('VALUE').setCheck('Number').appendField('set Thymio').appendField(dropdown, 'VARIABLE').appendField('to');
	},
};

Blockly.Blocks['thymio_declare_array'] = {
	/**
	 * Block to declare Thymio arrays.
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ARRAYS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_DECLARE_ARRAY_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_DECLARE_ARRAY_TOOLTIP);

		var variableField = new Blockly.FieldVariable('a');
		var sizeField = new Blockly.FieldTextInput('3', Blockly.FieldTextInput.numberValidator);

		this.appendDummyInput().appendField('declare').appendField(variableField, 'VAR').appendField('as array of size').appendField(sizeField, 'SIZE');
	},
	/**
	 * Return all variables referenced by this block.
	 * 
	 * @return {!Array.<string>} List of variable names.
	 * @this Blockly.Block
	 */
	getVars : function()
	{
		return [this.getFieldValue('VAR')];
	},
	/**
	 * Notification that a variable is renaming. If the name matches one of this
	 * block's variables, rename it.
	 * 
	 * @param {string} oldName Previous name of variable.
	 * @param {string} newName Renamed variable.
	 * @this Blockly.Block
	 */
	renameVar : function(oldName, newName)
	{
		if(Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
			this.setFieldValue(newName, 'VAR');
		}
	},
};

Blockly.Blocks['thymio_set_array'] = {
	/**
	 * Block for setting a array element
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ARRAYS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_SET_ARRAY_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_SET_ARRAY_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);

		var variableField = new Blockly.FieldVariable('a');

	    this.appendValueInput('INDEX').setCheck('Number').appendField('set array').appendField(variableField, 'VAR').appendField('element');
	    this.appendValueInput('VALUE').setCheck('Number').appendField('to');
	    this.setInputsInline(true);
	},
	/**
	 * Return all variables referenced by this block.
	 * 
	 * @return {!Array.<string>} List of variable names.
	 * @this Blockly.Block
	 */
	getVars : function()
	{
		return [this.getFieldValue('VAR')];
	},
	/**
	 * Notification that a variable is renaming. If the name matches one of this
	 * block's variables, rename it.
	 * 
	 * @param {string} oldName Previous name of variable.
	 * @param {string} newName Renamed variable.
	 * @this Blockly.Block
	 */
	renameVar : function(oldName, newName)
	{
		if(Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
			this.setFieldValue(newName, 'VAR');
		}
	},
};

Blockly.Blocks['thymio_get_array'] = {
	/**
	 * Block for getting a array element
	 * 
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ARRAYS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_GET_ARRAY_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_GET_ARRAY_TOOLTIP);

		var variableField = new Blockly.FieldVariable('a');
		
		this.setOutput(true, 'Number');
		this.appendValueInput('INDEX').setCheck('Number').appendField('get array').appendField(variableField, 'VAR').appendField('element');
	    this.setInputsInline(true);
	},
	/**
	 * Return all variables referenced by this block.
	 * 
	 * @return {!Array.<string>} List of variable names.
	 * @this Blockly.Block
	 */
	getVars : function()
	{
		return [this.getFieldValue('VAR')];
	},
	/**
	 * Notification that a variable is renaming. If the name matches one of this
	 * block's variables, rename it.
	 * 
	 * @param {string} oldName Previous name of variable.
	 * @param {string} newName Renamed variable.
	 * @this Blockly.Block
	 */
	renameVar : function(oldName, newName)
	{
		if(Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
			this.setFieldValue(newName, 'VAR');
		}
	},
};

Blockly.Blocks['thymio_arithmetic'] = {
	/**
	 * Block for Thymio arithmetic operators.
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.math.HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_ARITHMETIC_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_ARITHMETIC_TOOLTIP);
		
		var operators = [];
		
		operators.push(['+', '+']);
		operators.push(['-', '-']);
		operators.push(['*', '*']);
		operators.push(['÷', '/']);
		operators.push(['mod', '%']);
		
		this.setOutput(true, 'Number');
		this.appendValueInput('A').setCheck('Number');
		this.appendValueInput('B').setCheck('Number').appendField(new Blockly.FieldDropdown(operators), 'OP');
		this.setInputsInline(true);
	}
};

Blockly.Blocks['thymio_binary'] = {
	/**
	 * Block for Thymio binary operators.
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.math.HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_BINARY_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_BINARY_TOOLTIP);
		
		var operators = [];
		
		operators.push(['left shift', '<<']);
		operators.push(['right shift', '>>']);
		operators.push(['and', '&']);
		operators.push(['or', '|']);
		operators.push(['xor', '^']);
		
		this.setOutput(true, 'Number');
		this.appendValueInput('A').setCheck('Number').appendField('binary');
		this.appendValueInput('B').setCheck('Number').appendField(new Blockly.FieldDropdown(operators), 'OP');
		this.setInputsInline(true);
	}
};

Blockly.Blocks['thymio_unary'] = {
	/**
	 * Block for Thymio unary operators.
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.math.HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_UNARY_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_UNARY_TOOLTIP);
		
		var operators = [];
		
		operators.push(['negative', '-']);
		operators.push(['absolute', 'abs']);
		operators.push(['binary not', '~']);
		
		this.setOutput(true, 'Number');
		this.appendValueInput('VALUE').setCheck('Number').appendField(new Blockly.FieldDropdown(operators), 'OP');
	}
};

Blockly.Blocks['thymio_communication'] = {
	/**
	 * Block for controlling Thymio's communication feature
	 * @this Blockly.Block
	 */
	init : function()
	{
		this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);
		this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_COMMUNICATION_HELPURL);
		this.setTooltip(Blockly.Msg.TEXT_THYMIO_COMMUNICATION_TOOLTIP);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		
		var modeDropdown = new Blockly.FieldDropdown([['enable', 'ENABLE'], ['disable', 'DISABLE']]);
		
		this.appendDummyInput().appendField(modeDropdown, 'MODE').appendField('communication');
	}
};
