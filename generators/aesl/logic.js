/**
 * @fileoverview Generating AESL for logic blocks.
 * @author Fabian Hahn (fabian@hahn.graphics)
 */
'use strict';

goog.provide('Blockly.AESL.logic');

goog.require('Blockly.AESL');

Blockly.AESL['controls_if'] = function(block)
{
	// If/elseif/else condition.
	var n = 0;
	var argument = Blockly.AESL.valueToCode(block, 'IF' + n, Blockly.AESL.ORDER_NONE) || '0 == 1';
	var branch = Blockly.AESL.statementToCode(block, 'DO' + n);

	var code = 'if ' + argument + ' then\n' + branch;

	for(n = 1; n <= block.elseifCount_; n++) {
		argument = Blockly.AESL.valueToCode(block, 'IF' + n, Blockly.AESL.ORDER_NONE) || '0 == 1';
		branch = Blockly.AESL.statementToCode(block, 'DO' + n);
		code += 'elseif ' + argument + ' then\n' + branch;
	}

	if(block.elseCount_) {
		branch = Blockly.AESL.statementToCode(block, 'ELSE');
		code += 'else\n' + branch;
	}

	code += 'end\n';

	return code;
};

Blockly.AESL['logic_compare'] = function(block)
{
	// AESL only allows int comparisons, so check if both arguments have the correct type
	var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
	
    if((blockA && blockA.outputConnection.check_.indexOf('Number') < 0) || (blockB && blockB.outputConnection.check_.indexOf('Number') < 0)) {
    	return ['0 == 1', Blockly.AESL.ORDER_CONDITION];
    }
	
	// Comparison operator.
	var OPERATORS = {
		'EQ' : '==',
		'NEQ' : '!=',
		'LT' : '<',
		'LTE' : '<=',
		'GT' : '>',
		'GTE' : '>='
	};
	var operator = OPERATORS[block.getFieldValue('OP')];
	var order = Blockly.AESL.ORDER_CONDITION;
	var argument0 = Blockly.AESL.valueToCode(block, 'A', order) || '0';
	var argument1 = Blockly.AESL.valueToCode(block, 'B', order) || '0';
	var code = argument0 + ' ' + operator + ' ' + argument1;
	return [code, order];
};
