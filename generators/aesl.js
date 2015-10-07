/**
 * @fileoverview Helper functions for generating AESL for blocks.
 * @author fabian@hahn.graphics (Fabian Hahn)
 */
'use strict';

goog.provide('Blockly.AESL');

goog.require('Blockly.Generator');

/**
 * AESL code generator.
 * @type {!Blockly.Generator}
 */
Blockly.AESL = new Blockly.Generator('AESL');

Blockly.AESL.INDENT = '\t';

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.AESL.addReservedWords(
	'var,if,then,else,end,when,do,for,in,step,while,call,callsub,sub,onevent,emit,or,' +
	'and,not,abs,event,button,buttons,prox,motor,acc,temperature,rc5,mic,timer,math,' +
	'sound,leds,sd'
);

/**
 * Order of operation ENUMs.
 * see aseba/compiler/parser.cpp
 */
Blockly.AESL.ORDER_ATOMIC = 0;
Blockly.AESL.ORDER_LOGICAL_NOT = 1;
Blockly.AESL.ORDER_BINARY_NOT = 2;
Blockly.AESL.ORDER_ABS = 3;
Blockly.AESL.ORDER_UNARY = 4;
Blockly.AESL.ORDER_MULT = 5;
Blockly.AESL.ORDER_ADD = 6;
Blockly.AESL.ORDER_SHIFT = 7;
Blockly.AESL.ORDER_BINARY_AND = 8;
Blockly.AESL.ORDER_BINARY_XOR = 9;
Blockly.AESL.ORDER_BINARY_OR = 10;
Blockly.AESL.ORDER_CONDITION = 11;
Blockly.AESL.ORDER_LOGICAL_NOT = 12;
Blockly.AESL.ORDER_LOGICAL_AND = 13;
Blockly.AESL.ORDER_LOGICAL_OR = 14;
Blockly.AESL.ORDER_ASSIGNMENT = 15;
Blockly.AESL.ORDER_NONE = 99;

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.AESL.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.AESL.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.AESL.functionNames_ = Object.create(null);

  if (!Blockly.AESL.variableDB_) {
    Blockly.AESL.variableDB_ =
        new Blockly.Names(Blockly.AESL.RESERVED_WORDS_);
  } else {
    Blockly.AESL.variableDB_.reset();
  }

  var defvars = [];
  var variables = Blockly.Variables.allVariables(workspace);
  for (var i = 0; i < variables.length; i++) {
    defvars[i] = 'var ' +
        Blockly.AESL.variableDB_.getName(variables[i],
        Blockly.Variables.NAME_TYPE) + ';';
  }
  Blockly.AESL.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.AESL.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];
  for (var name in Blockly.AESL.definitions_) {
    definitions.push(Blockly.AESL.definitions_[name]);
  }
  // Clean up temporary data.
  delete Blockly.AESL.definitions_;
  delete Blockly.AESL.functionNames_;
  Blockly.AESL.variableDB_.reset();
  return definitions.join('\n\n') + '\n\n\n' + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.AESL.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a properly escaped AESL string, complete with
 * quotes.
 * @param {string} string Text to encode.
 * @return {string} JavaScript string.
 * @private
 */
Blockly.AESL.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating JavaScript from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The JavaScript code created for this block.
 * @return {string} JavaScript code with comments and subsequent blocks added.
 * @private
 */
Blockly.AESL.scrub_ = function(block, code) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.AESL.prefixLines(comment, '# ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.AESL.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.AESL.prefixLines(comment, '# ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.AESL.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
