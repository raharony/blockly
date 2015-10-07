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

Blockly.Blocks['thymio_onevent_button'] = {
  /**
   * Block for Thymio button event.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_HELPURL);
    this.setTooltip(Blockly.Msg.TEXT_THYMIO_EVENT_BUTTON_TOOLTIP);
    this.appendDummyInput()
    	.appendField('onevent button')
    this.appendStatementInput('HANDLER')

  },
};

Blockly.Blocks['thymio_leds'] = {
  /**
   * Block for Thymio LEDs.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_THYMIO_LEDS_TOP_HELPURL);
    this.setTooltip(Blockly.Msg.TEXT_THYMIO_LEDS_TOP_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    
    var dropdown = new Blockly.FieldDropdown([['top', 'TOP'], ['bottom left', 'BOTTOMLEFT'], ['bottom right', 'BOTTOMRIGHT']]);
    this.appendDummyInput()
    	.appendField('set')
    	.appendField(dropdown, 'LED')
    	.appendField('led to')
    	.appendField(new Blockly.FieldColour('#ff0000'), 'COLOR')
  },
};