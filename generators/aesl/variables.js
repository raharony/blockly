/**
 * @fileoverview Generating AESL for variable blocks.
 * @author fabian@hahn.graphics (Fabian Hahn)
 */
'use strict';

goog.provide('Blockly.AESL.variables');

goog.require('Blockly.AESL');

Blockly.AESL['variables_get'] = function(block)
{
	// Variable getter.
	var code = Blockly.AESL.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	return [code, Blockly.AESL.ORDER_ATOMIC];
};

Blockly.AESL['variables_set'] = function(block)
{
	var varName = Blockly.AESL.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	
	// AESL only allows int variables, so check if our input has the correct type
	var valueBlock = this.getInputTargetBlock('VALUE');
	
    if(valueBlock && valueBlock.outputConnection.check_.indexOf('Number') < 0) {
    	return 'varName = 0\n';
    }
	
	// Variable setter.
	var argument0 = Blockly.AESL.valueToCode(block, 'VALUE', Blockly.AESL.ORDER_ASSIGNMENT) || '0';
	return varName + ' = ' + argument0 + '\n';
};
