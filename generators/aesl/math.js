/**
 * @fileoverview Generating AESL for math blocks.
 * @author Fabian Hahn (fabian@hahn.graphics)
 */
'use strict';

goog.provide('Blockly.AESL.math');

goog.require('Blockly.AESL');

Blockly.AESL['math_number'] = function(block)
{
	// Numeric value.
	var code = parseInt(block.getFieldValue('NUM'));
	return [code, Blockly.AESL.ORDER_ATOMIC];
};
