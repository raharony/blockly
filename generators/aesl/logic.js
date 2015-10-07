/**
 * @fileoverview Generating AESL for logic blocks.
 * @author Fabian Hahn (fabian@hahn.graphics)
 */
'use strict';

goog.provide('Blockly.AESL.logic');

goog.require('Blockly.AESL');

Blockly.AESL['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.AESL.valueToCode(block, 'IF' + n,
      Blockly.AESL.ORDER_NONE) || 'false';
  var branch = Blockly.AESL.statementToCode(block, 'DO' + n);
  
  var code = 'if ' + argument + ' then\n' + branch;
  
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.AESL.valueToCode(block, 'IF' + n,
        Blockly.AESL.ORDER_NONE) || 'false';
    branch = Blockly.AESL.statementToCode(block, 'DO' + n);
    code += 'elseif ' + argument + ' then\n' + branch;
  }
  
  if (block.elseCount_) {
    branch = Blockly.AESL.statementToCode(block, 'ELSE');
    code += 'else\n' + branch;
  }
  
  code += 'end\n';
  
  return code;
};
