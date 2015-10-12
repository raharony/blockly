AeslTests = [
['button events and leds',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="238" y="13">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#000000</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">BOTTOMLEFT</field>\n' + 
 '            <field name="COLOR">#000000</field>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_leds">\n' + 
 '                <field name="LED">BOTTOMRIGHT</field>\n' + 
 '                <field name="COLOR">#000000</field>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="237" y="163">\n' + 
 '    <field name="BUTTON">button.right</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">BOTTOMRIGHT</field>\n' + 
 '        <field name="COLOR">#33cc00</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="488" y="163">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#cc33cc</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="237" y="263">\n' + 
 '    <field name="BUTTON">button.left</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">BOTTOMLEFT</field>\n' + 
 '        <field name="COLOR">#ff6600</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="488" y="263">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#6633ff</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		call leds.top(0,0,0)\n' + 
 '		call leds.bottom.left(0,0,0)\n' + 
 '		call leds.bottom.right(0,0,0)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.right\n' + 
 '	when button.right == 1 do\n' + 
 '		call leds.bottom.right(6,26,0)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		call leds.top(26,6,26)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.left\n' + 
 '	when button.left == 1 do\n' + 
 '		call leds.bottom.left(32,13,0)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.backward\n' + 
 '	when button.backward == 1 do\n' + 
 '		call leds.top(13,6,32)\n' + 
 '	end\n' + 
 ''],
['button pressed and leds',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="188" y="63">\n' + 
 '    <field name="EVENT">buttons</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_if">\n' + 
 '        <mutation elseif="1" else="1"></mutation>\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="thymio_button_pressed">\n' + 
 '            <field name="BUTTON">FORWARD</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#ff0000</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <value name="IF1">\n' + 
 '          <block type="thymio_button_pressed">\n' + 
 '            <field name="BUTTON">BACKWARD</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO1">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#000000</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent buttons\n' + 
 '	if button.forward == 1 then\n' + 
 '		call leds.top(32,0,0)\n' + 
 '	elseif button.backward == 1 then\n' + 
 '		call leds.top(6,32,6)\n' + 
 '	else\n' + 
 '		call leds.top(0,0,0)\n' + 
 '	end\n' + 
 ''],
['if-else with condition and leds',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="controls_if" x="113" y="63">\n' + 
 '    <mutation else="1"></mutation>\n' + 
 '    <value name="IF0">\n' + 
 '      <block type="logic_compare">\n' + 
 '        <field name="OP">GT</field>\n' + 
 '        <value name="A">\n' + 
 '          <block type="thymio_get_sensor_state">\n' + 
 '            <field name="SENSOR">motor.left.speed</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <value name="B">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">100</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '    <statement name="DO0">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '    <statement name="ELSE">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#ff0000</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'if motor.left.speed > 100 then\n' + 
 '	call leds.top(6,32,6)\n' + 
 'else\n' + 
 '	call leds.top(32,0,0)\n' + 
 'end\n' + 
 ''],
['set thymio variables',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="138" y="38">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">500</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_set_variable">\n' + 
 '                <field name="VARIABLE">motor.right.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">500</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="138" y="163">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#ff0000</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_set_variable">\n' + 
 '                <field name="VARIABLE">motor.right.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		call leds.top(6,32,6)\n' + 
 '		motor.left.target = 500\n' + 
 '		motor.right.target = 500\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.backward\n' + 
 '	when button.backward == 1 do\n' + 
 '		call leds.top(32,0,0)\n' + 
 '		motor.left.target = 0\n' + 
 '		motor.right.target = 0\n' + 
 '	end\n' + 
 ''],
['set variables to arithmetic expression',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="63" y="63">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_set_variable">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_arithmetic">\n' + 
 '            <field name="OP">MULTIPLY</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="math_arithmetic">\n' + 
 '                <field name="OP">ADD</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">200</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">50</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_arithmetic">\n' + 
 '                <field name="OP">MULTIPLY</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">2</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">1</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="187">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">RELEASE</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_set_variable">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		motor.left.target = (200 + 50) * (2 * 1)\n' + 
 '	end\n' + 
 '\n' + 
 '	when button.center == 0 do\n' + 
 '		motor.left.target = 0\n' + 
 '	end\n' + 
 ''],
['logical expression operator precedence 1',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="38" y="63">\n' + 
 '    <field name="EVENT">buttons</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_if">\n' + 
 '        <mutation else="1"></mutation>\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="logic_operation">\n' + 
 '            <field name="OP">OR</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">AND</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">FORWARD</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">BACKWARD</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">AND</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">LEFT</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">RIGHT</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#ff0000</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent buttons\n' + 
 '	if (button.forward == 1) and (button.backward == 1) or (button.left == 1) and (button.right == 1) then\n' + 
 '		call leds.top(6,32,6)\n' + 
 '	else\n' + 
 '		call leds.top(32,0,0)\n' + 
 '	end\n' + 
 ''],
['logical expression operator precedence 2',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="38" y="63">\n' + 
 '    <field name="EVENT">buttons</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_if">\n' + 
 '        <mutation else="1"></mutation>\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="logic_operation">\n' + 
 '            <field name="OP">AND</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">OR</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">FORWARD</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">BACKWARD</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">OR</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">LEFT</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">RIGHT</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#ff0000</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent buttons\n' + 
 '	if (button.forward == 1 or button.backward == 1) and (button.left == 1 or button.right == 1) then\n' + 
 '		call leds.top(6,32,6)\n' + 
 '	else\n' + 
 '		call leds.top(32,0,0)\n' + 
 '	end\n' + 
 ''],
['negation of logical literal',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="138" y="37">\n' + 
 '    <field name="EVENT">buttons</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_if">\n' + 
 '        <mutation else="1"></mutation>\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="logic_negate">\n' + 
 '            <value name="BOOL">\n' + 
 '              <block type="logic_boolean">\n' + 
 '                <field name="BOOL">FALSE</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#ff0000</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent buttons\n' + 
 '	if not 0 == 1 then\n' + 
 '		call leds.top(6,32,6)\n' + 
 '	else\n' + 
 '		call leds.top(32,0,0)\n' + 
 '	end\n' + 
 ''],
['disallow boolean comparisons',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="controls_if" x="213" y="88">\n' + 
 '    <value name="IF0">\n' + 
 '      <block type="logic_compare">\n' + 
 '        <field name="OP">EQ</field>\n' + 
 '        <value name="A">\n' + 
 '          <block type="logic_boolean">\n' + 
 '            <field name="BOOL">TRUE</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <value name="B">\n' + 
 '          <block type="logic_boolean">\n' + 
 '            <field name="BOOL">TRUE</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '  </block>\n' + 
 '</xml>',
 'if 0 == 1 then\n' + 
 'end\n' + 
 ''],
['repeat while loop',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="88" y="38">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_whileUntil">\n' + 
 '        <field name="MODE">WHILE</field>\n' + 
 '        <value name="BOOL">\n' + 
 '          <block type="thymio_button_pressed">\n' + 
 '            <field name="BUTTON">CENTER</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO">\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#ff0000</field>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_leds">\n' + 
 '                <field name="LED">TOP</field>\n' + 
 '                <field name="COLOR">#3366ff</field>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#000000</field>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		while button.center == 1 do\n' + 
 '			call leds.top(32,0,0)\n' + 
 '			call leds.top(6,13,32)\n' + 
 '		end\n' + 
 '		call leds.top(0,0,0)\n' + 
 '	end\n' + 
 ''],
['nested repeat n loops',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="63" y="38">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_repeat">\n' + 
 '        <field name="TIMES">100</field>\n' + 
 '        <statement name="DO">\n' + 
 '          <block type="controls_repeat">\n' + 
 '            <field name="TIMES">100</field>\n' + 
 '            <statement name="DO">\n' + 
 '              <block type="thymio_leds">\n' + 
 '                <field name="LED">TOP</field>\n' + 
 '                <field name="COLOR">#ff0000</field>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">TOP</field>\n' + 
 '            <field name="COLOR">#000000</field>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var i\n' + 
 'var i2\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		for i2 in 1:100 do\n' + 
 '			for i in 1:100 do\n' + 
 '				call leds.top(32,0,0)\n' + 
 '			end\n' + 
 '		end\n' + 
 '		call leds.top(0,0,0)\n' + 
 '	end\n' + 
 ''],
['complex example involving several events, conditions, loops and arithmetics',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="38" y="-187">\n' + 
 '    <field name="EVENT">buttons</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_if">\n' + 
 '        <mutation elseif="2"></mutation>\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="logic_operation">\n' + 
 '            <field name="OP">AND</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_button_pressed">\n' + 
 '                <field name="BUTTON">BACKWARD</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="thymio_button_pressed">\n' + 
 '                <field name="BUTTON">RIGHT</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">500</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_set_variable">\n' + 
 '                <field name="VARIABLE">motor.right.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <value name="IF1">\n' + 
 '          <block type="logic_operation">\n' + 
 '            <field name="OP">AND</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_button_pressed">\n' + 
 '                <field name="BUTTON">BACKWARD</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="thymio_button_pressed">\n' + 
 '                <field name="BUTTON">LEFT</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO1">\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_set_variable">\n' + 
 '                <field name="VARIABLE">motor.right.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_arithmetic">\n' + 
 '                    <field name="OP">MULTIPLY</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <block type="math_arithmetic">\n' + 
 '                        <field name="OP">ADD</field>\n' + 
 '                        <value name="A">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">200</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                        <value name="B">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">50</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <block type="math_arithmetic">\n' + 
 '                        <field name="OP">ADD</field>\n' + 
 '                        <value name="A">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">1</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                        <value name="B">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">1</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <value name="IF2">\n' + 
 '          <block type="thymio_button_pressed">\n' + 
 '            <field name="BUTTON">BACKWARD</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO2">\n' + 
 '          <block type="controls_repeat">\n' + 
 '            <field name="TIMES">10</field>\n' + 
 '            <statement name="DO">\n' + 
 '              <block type="thymio_leds">\n' + 
 '                <field name="LED">TOP</field>\n' + 
 '                <field name="COLOR">#ff0000</field>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_leds">\n' + 
 '                    <field name="LED">TOP</field>\n' + 
 '                    <field name="COLOR">#000000</field>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="738" y="-187">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_set_variable">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">500</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">500</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="737" y="-87">\n' + 
 '    <field name="BUTTON">button.left</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">BOTTOMLEFT</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="737" y="-12">\n' + 
 '    <field name="BUTTON">button.right</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">BOTTOMRIGHT</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="737" y="63">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_set_variable">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_leds">\n' + 
 '                <field name="LED">BOTTOMLEFT</field>\n' + 
 '                <field name="COLOR">#000000</field>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_leds">\n' + 
 '                    <field name="LED">BOTTOMRIGHT</field>\n' + 
 '                    <field name="COLOR">#000000</field>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var i\n' + 
 '\n' + 
 '\n' + 
 'onevent buttons\n' + 
 '	if (button.backward == 1) and (button.right == 1) then\n' + 
 '		motor.left.target = 500\n' + 
 '		motor.right.target = 0\n' + 
 '	elseif (button.backward == 1) and (button.left == 1) then\n' + 
 '		motor.left.target = 0\n' + 
 '		motor.right.target = (200 + 50) * (1 + 1)\n' + 
 '	elseif button.backward == 1 then\n' + 
 '		for i in 1:10 do\n' + 
 '			call leds.top(32,0,0)\n' + 
 '			call leds.top(0,0,0)\n' + 
 '		end\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		motor.left.target = 500\n' + 
 '		motor.right.target = 500\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.left\n' + 
 '	when button.left == 1 do\n' + 
 '		call leds.bottom.left(6,32,6)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.right\n' + 
 '	when button.right == 1 do\n' + 
 '		call leds.bottom.right(6,32,6)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		motor.left.target = 0\n' + 
 '		motor.right.target = 0\n' + 
 '		call leds.bottom.left(0,0,0)\n' + 
 '		call leds.bottom.right(0,0,0)\n' + 
 '	end\n' + 
 ''],
['multiple handlers for the same event',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="88" y="38">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#000000</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_leds">\n' + 
 '            <field name="LED">BOTTOMLEFT</field>\n' + 
 '            <field name="COLOR">#000000</field>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_leds">\n' + 
 '                <field name="LED">BOTTOMRIGHT</field>\n' + 
 '                <field name="COLOR">#000000</field>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="87" y="187">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_set_variable">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		call leds.top(0,0,0)\n' + 
 '		call leds.bottom.left(0,0,0)\n' + 
 '		call leds.bottom.right(0,0,0)\n' + 
 '	end\n' + 
 '\n' + 
 '	when button.center == 1 do\n' + 
 '		motor.left.target = 0\n' + 
 '		motor.right.target = 0\n' + 
 '	end\n' + 
 ''],
['setting and getting global variables',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="63" y="87">\n' + 
 '    <field name="EVENT">buttons</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_set_variable">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="variables_get">\n' + 
 '            <field name="VAR">speed</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="variables_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="213">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="variables_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="312">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="variables_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_arithmetic">\n' + 
 '            <field name="OP">MINUS</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="variables_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">100</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="413">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="variables_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_arithmetic">\n' + 
 '            <field name="OP">ADD</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="variables_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">100</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var speed\n' + 
 '\n' + 
 '\n' + 
 'onevent buttons\n' + 
 '	motor.left.target = speed\n' + 
 '	motor.right.target = speed\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		speed = 0\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.backward\n' + 
 '	when button.backward == 1 do\n' + 
 '		speed = speed - 100\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		speed = speed + 100\n' + 
 '	end\n' + 
 ''],
['subroutine being called from several event handlers',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="112" y="38">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="variables_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="procedures_callnoreturn">\n' + 
 '            <mutation name="updateSpeed"></mutation>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="procedures_defnoreturn" x="488" y="38">\n' + 
 '    <field name="NAME">updateSpeed</field>\n' + 
 '    <statement name="STACK">\n' + 
 '      <block type="thymio_set_variable">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="variables_get">\n' + 
 '            <field name="VAR">speed</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_variable">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="variables_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="controls_if">\n' + 
 '                <mutation elseif="1" else="1"></mutation>\n' + 
 '                <value name="IF0">\n' + 
 '                  <block type="logic_compare">\n' + 
 '                    <field name="OP">GT</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <block type="variables_get">\n' + 
 '                        <field name="VAR">speed</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">0</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <statement name="DO0">\n' + 
 '                  <block type="thymio_leds">\n' + 
 '                    <field name="LED">TOP</field>\n' + 
 '                    <field name="COLOR">#33ff33</field>\n' + 
 '                  </block>\n' + 
 '                </statement>\n' + 
 '                <value name="IF1">\n' + 
 '                  <block type="logic_compare">\n' + 
 '                    <field name="OP">LT</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <block type="variables_get">\n' + 
 '                        <field name="VAR">speed</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">0</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <statement name="DO1">\n' + 
 '                  <block type="thymio_leds">\n' + 
 '                    <field name="LED">TOP</field>\n' + 
 '                    <field name="COLOR">#ff0000</field>\n' + 
 '                  </block>\n' + 
 '                </statement>\n' + 
 '                <statement name="ELSE">\n' + 
 '                  <block type="thymio_leds">\n' + 
 '                    <field name="LED">TOP</field>\n' + 
 '                    <field name="COLOR">#000000</field>\n' + 
 '                  </block>\n' + 
 '                </statement>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="112" y="163">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="variables_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_arithmetic">\n' + 
 '            <field name="OP">ADD</field>\n' + 
 '            <value name="A">\n' + 
 '              <shadow type="math_number">\n' + 
 '                \n' + 
 '                <field name="NUM">1</field>\n' + 
 '              \n' + 
 '              </shadow>\n' + 
 '              <block type="variables_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <shadow type="math_number">\n' + 
 '                <field name="NUM">100</field>\n' + 
 '              </shadow>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="procedures_callnoreturn">\n' + 
 '            <mutation name="updateSpeed"></mutation>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="112" y="288">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="variables_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_arithmetic">\n' + 
 '            <field name="OP">MINUS</field>\n' + 
 '            <value name="A">\n' + 
 '              <shadow type="math_number">\n' + 
 '                \n' + 
 '                <field name="NUM">1</field>\n' + 
 '              \n' + 
 '              </shadow>\n' + 
 '              <block type="variables_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <shadow type="math_number">\n' + 
 '                <field name="NUM">100</field>\n' + 
 '              </shadow>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="procedures_callnoreturn">\n' + 
 '            <mutation name="updateSpeed"></mutation>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var speed\n' + 
 '\n' + 
 '\n' + 
 'sub updateSpeed\n' + 
 '	motor.left.target = speed\n' + 
 '	motor.right.target = speed\n' + 
 '	if speed > 0 then\n' + 
 '		call leds.top(6,32,6)\n' + 
 '	elseif speed < 0 then\n' + 
 '		call leds.top(32,0,0)\n' + 
 '	else\n' + 
 '		call leds.top(0,0,0)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		speed = 0\n' + 
 '		callsub updateSpeed\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		speed = speed + 100\n' + 
 '		callsub updateSpeed\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.backward\n' + 
 '	when button.backward == 1 do\n' + 
 '		speed = speed - 100\n' + 
 '		callsub updateSpeed\n' + 
 '	end\n' + 
 ''],
['disallow subs calling other subs',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="procedures_defnoreturn" x="38" y="63">\n' + 
 '    <field name="NAME">foo</field>\n' + 
 '    <statement name="STACK">\n' + 
 '      <block type="thymio_leds">\n' + 
 '        <field name="LED">TOP</field>\n' + 
 '        <field name="COLOR">#ff0000</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="procedures_defnoreturn" x="37" y="163">\n' + 
 '    <field name="NAME">bar</field>\n' + 
 '    <statement name="STACK">\n' + 
 '      <block type="procedures_callnoreturn">\n' + 
 '        <mutation name="foo"></mutation>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="37" y="262">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="procedures_callnoreturn">\n' + 
 '        <mutation name="foo"></mutation>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'sub foo\n' + 
 '	call leds.top(32,0,0)\n' + 
 '\n' + 
 '\n' + 
 'sub bar\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		callsub foo\n' + 
 '	end\n' + 
 ''],
];
