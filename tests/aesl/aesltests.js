AeslTests = [
['button events and leds',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="238" y="13">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#000000</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.bottom.left</field>\n' + 
 '            <field name="COLOR">#000000</field>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.bottom.right</field>\n' + 
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
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.bottom.right</field>\n' + 
 '        <field name="COLOR">#33cc00</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="488" y="163">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#cc33cc</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="237" y="263">\n' + 
 '    <field name="BUTTON">button.left</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.bottom.left</field>\n' + 
 '        <field name="COLOR">#ff6600</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="488" y="263">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
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
 '            <field name="BUTTON">button.forward</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '            <field name="COLOR">#ff0000</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <value name="IF1">\n' + 
 '          <block type="thymio_button_pressed">\n' + 
 '            <field name="BUTTON">button.backward</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO1">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
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
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '    <statement name="ELSE">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
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
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">500</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_actuator_set">\n' + 
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
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#ff0000</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_actuator_set">\n' + 
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
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_arithmetic">\n' + 
 '            <field name="OP">*</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">+</field>\n' + 
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
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">*</field>\n' + 
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
 '      <block type="thymio_actuator_set">\n' + 
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
 '                    <field name="BUTTON">button.forward</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">button.backward</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">AND</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">button.left</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">button.right</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
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
 '                    <field name="BUTTON">button.forward</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">button.backward</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">OR</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">button.left</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_button_pressed">\n' + 
 '                    <field name="BUTTON">button.right</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
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
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
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
 '            <field name="BUTTON">button.center</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '            <field name="COLOR">#ff0000</field>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <field name="COLOR">#3366ff</field>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
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
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <field name="COLOR">#ff0000</field>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
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
 '                <field name="BUTTON">button.backward</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="thymio_button_pressed">\n' + 
 '                <field name="BUTTON">button.right</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">500</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_actuator_set">\n' + 
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
 '                <field name="BUTTON">button.backward</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="thymio_button_pressed">\n' + 
 '                <field name="BUTTON">button.left</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO1">\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_actuator_set">\n' + 
 '                <field name="VARIABLE">motor.right.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="thymio_arithmetic">\n' + 
 '                    <field name="OP">*</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <block type="thymio_arithmetic">\n' + 
 '                        <field name="OP">+</field>\n' + 
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
 '                      <block type="thymio_arithmetic">\n' + 
 '                        <field name="OP">+</field>\n' + 
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
 '            <field name="BUTTON">button.backward</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO2">\n' + 
 '          <block type="controls_repeat">\n' + 
 '            <field name="TIMES">10</field>\n' + 
 '            <statement name="DO">\n' + 
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <field name="COLOR">#ff0000</field>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_led">\n' + 
 '                    <field name="LED">leds.top</field>\n' + 
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
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">500</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
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
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.bottom.left</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="737" y="-12">\n' + 
 '    <field name="BUTTON">button.right</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.bottom.right</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="737" y="63">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.bottom.left</field>\n' + 
 '                <field name="COLOR">#000000</field>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_led">\n' + 
 '                    <field name="LED">leds.bottom.right</field>\n' + 
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
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#000000</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.bottom.left</field>\n' + 
 '            <field name="COLOR">#000000</field>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.bottom.right</field>\n' + 
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
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
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
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_variable_get">\n' + 
 '            <field name="VAR">speed</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_variable_get">\n' + 
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
 '      <block type="thymio_variable_set">\n' + 
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
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_arithmetic">\n' + 
 '            <field name="OP">-</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_variable_get">\n' + 
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
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_arithmetic">\n' + 
 '            <field name="OP">+</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_variable_get">\n' + 
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
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="procedures_callnoreturn">\n' + 
 '            <mutation name="updateSpeed"></mutation>\n' + 
 '            <next>\n' + 
 '              <block type="procedures_callnoreturn">\n' + 
 '                <mutation name="updateColor"></mutation>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_subroutine_define" x="488" y="38">\n' + 
 '    <field name="NAME">updateSpeed</field>\n' + 
 '    <statement name="STACK">\n' + 
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_variable_get">\n' + 
 '            <field name="VAR">speed</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.right.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_variable_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_subroutine_define" x="488" y="163">\n' + 
 '    <field name="NAME">updateColor</field>\n' + 
 '    <statement name="STACK">\n' + 
 '      <block type="controls_if">\n' + 
 '        <mutation elseif="1" else="1"></mutation>\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="logic_compare">\n' + 
 '            <field name="OP">GT</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_variable_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_variable_set">\n' + 
 '            <field name="VAR">intensity</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">/</field>\n' + 
 '                <value name="A">\n' + 
 '                  <shadow type="math_number">\n' + 
 '                    <field name="NUM">32</field>\n' + 
 '                  </shadow>\n' + 
 '                  <block type="thymio_arithmetic">\n' + 
 '                    <field name="OP">*</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <shadow type="math_number">\n' + 
 '                        <field name="NUM">32</field>\n' + 
 '                      </shadow>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <shadow type="math_number">\n' + 
 '                        <field name="NUM">32</field>\n' + 
 '                      </shadow>\n' + 
 '                      <block type="thymio_variable_get">\n' + 
 '                        <field name="VAR">speed</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <shadow type="math_number">\n' + 
 '                    <field name="NUM">500</field>\n' + 
 '                  </shadow>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_led_rgb">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <value name="RED">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="GREEN">\n' + 
 '                  <block type="thymio_variable_get">\n' + 
 '                    <field name="VAR">intensity</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="BLUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <value name="IF1">\n' + 
 '          <block type="logic_compare">\n' + 
 '            <field name="OP">LT</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_variable_get">\n' + 
 '                <field name="VAR">speed</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO1">\n' + 
 '          <block type="thymio_variable_set">\n' + 
 '            <field name="VAR">intensity</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">/</field>\n' + 
 '                <value name="A">\n' + 
 '                  <shadow type="math_number">\n' + 
 '                    <field name="NUM">-32</field>\n' + 
 '                  </shadow>\n' + 
 '                  <block type="thymio_arithmetic">\n' + 
 '                    <field name="OP">*</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <shadow type="math_number">\n' + 
 '                        <field name="NUM">-32</field>\n' + 
 '                      </shadow>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <shadow type="math_number">\n' + 
 '                        <field name="NUM">-32</field>\n' + 
 '                      </shadow>\n' + 
 '                      <block type="thymio_variable_get">\n' + 
 '                        <field name="VAR">speed</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <shadow type="math_number">\n' + 
 '                    <field name="NUM">500</field>\n' + 
 '                  </shadow>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_led_rgb">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <value name="RED">\n' + 
 '                  <block type="thymio_variable_get">\n' + 
 '                    <field name="VAR">intensity</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="GREEN">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="BLUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <statement name="ELSE">\n' + 
 '          <block type="thymio_led_off">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="113" y="188">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_arithmetic">\n' + 
 '            <field name="OP">+</field>\n' + 
 '            <value name="A">\n' + 
 '              <shadow type="math_number"> \n' + 
 '                <field name="NUM">1</field> \n' + 
 '              </shadow>\n' + 
 '              <block type="thymio_variable_get">\n' + 
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
 '            <next>\n' + 
 '              <block type="procedures_callnoreturn">\n' + 
 '                <mutation name="updateColor"></mutation>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="113" y="338">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">speed</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_arithmetic">\n' + 
 '            <field name="OP">-</field>\n' + 
 '            <value name="A">\n' + 
 '              <shadow type="math_number"> \n' + 
 '                <field name="NUM">1</field> \n' + 
 '              </shadow>\n' + 
 '              <block type="thymio_variable_get">\n' + 
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
 '            <next>\n' + 
 '              <block type="procedures_callnoreturn">\n' + 
 '                <mutation name="updateColor"></mutation>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var speed\n' + 
 'var intensity\n' + 
 '\n' + 
 '\n' + 
 'sub updateSpeed\n' + 
 '	motor.left.target = speed\n' + 
 '	motor.right.target = speed\n' + 
 '\n' + 
 '\n' + 
 'sub updateColor\n' + 
 '	if speed > 0 then\n' + 
 '		intensity = (32 * speed) / 500\n' + 
 '		call leds.top(0,intensity,0)\n' + 
 '	elseif speed < 0 then\n' + 
 '		intensity = (-32 * speed) / 500\n' + 
 '		call leds.top(intensity,0,0)\n' + 
 '	else\n' + 
 '		call leds.top(0,0,0)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		speed = 0\n' + 
 '		callsub updateSpeed\n' + 
 '		callsub updateColor\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		speed = speed + 100\n' + 
 '		callsub updateSpeed\n' + 
 '		callsub updateColor\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.backward\n' + 
 '	when button.backward == 1 do\n' + 
 '		speed = speed - 100\n' + 
 '		callsub updateSpeed\n' + 
 '		callsub updateColor\n' + 
 '	end\n' + 
 ''],
['disallow subs calling other subs',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_subroutine_define" x="38" y="63">\n' + 
 '    <field name="NAME">foo</field>\n' + 
 '    <statement name="STACK">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#ff0000</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_subroutine_define" x="37" y="163">\n' + 
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
['proximity events',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_prox" x="63" y="38">\n' + 
 '    <field name="SENSOR">prox.horizontal[2]</field>\n' + 
 '    <field name="MODE">BLOCK</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">500</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
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
 '  <block type="thymio_event_prox_ground" x="438" y="38">\n' + 
 '    <field name="SENSOR">prox.ground.delta[0]</field>\n' + 
 '    <field name="MODE">WHITE</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.bottom.left</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_prox_ground" x="438" y="113">\n' + 
 '    <field name="SENSOR">prox.ground.delta[0]</field>\n' + 
 '    <field name="MODE">BLACK</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led_off">\n' + 
 '        <field name="LED">leds.bottom.left</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_prox" x="63" y="163">\n' + 
 '    <field name="SENSOR">prox.horizontal[2]</field>\n' + 
 '    <field name="MODE">CLEAR</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
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
 '  <block type="thymio_event_prox_ground" x="438" y="188">\n' + 
 '    <field name="SENSOR">prox.ground.delta[1]</field>\n' + 
 '    <field name="MODE">WHITE</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.bottom.right</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_prox_ground" x="438" y="263">\n' + 
 '    <field name="SENSOR">prox.ground.delta[1]</field>\n' + 
 '    <field name="MODE">BLACK</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led_off">\n' + 
 '        <field name="LED">leds.bottom.right</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent prox\n' + 
 '	when prox.horizontal[2] > 2000 do\n' + 
 '		motor.left.target = 500\n' + 
 '		motor.right.target = 500\n' + 
 '	end\n' + 
 '\n' + 
 '	when prox.ground.delta[0] < 400 do\n' + 
 '		call leds.bottom.left(6,32,6)\n' + 
 '	end\n' + 
 '\n' + 
 '	when prox.ground.delta[0] > 450 do\n' + 
 '		call leds.bottom.left(0,0,0)\n' + 
 '	end\n' + 
 '\n' + 
 '	when prox.horizontal[2] < 1000 do\n' + 
 '		motor.left.target = 0\n' + 
 '		motor.right.target = 0\n' + 
 '	end\n' + 
 '\n' + 
 '	when prox.ground.delta[1] < 400 do\n' + 
 '		call leds.bottom.right(6,32,6)\n' + 
 '	end\n' + 
 '\n' + 
 '	when prox.ground.delta[1] > 450 do\n' + 
 '		call leds.bottom.right(0,0,0)\n' + 
 '	end\n' + 
 ''],
['proximity checks',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="13" y="13">\n' + 
 '    <field name="EVENT">prox</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_if">\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="logic_compare">\n' + 
 '            <field name="OP">GT</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_variable_get">\n' + 
 '                <field name="VAR">active</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="controls_if">\n' + 
 '            <mutation elseif="2" else="1"></mutation>\n' + 
 '            <value name="IF0">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">AND</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_prox_ground_check">\n' + 
 '                    <field name="SENSOR">prox.ground.delta[0]</field>\n' + 
 '                    <field name="MODE">BLACK</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_prox_ground_check">\n' + 
 '                    <field name="SENSOR">prox.ground.delta[1]</field>\n' + 
 '                    <field name="MODE">BLACK</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <statement name="DO0">\n' + 
 '              <block type="thymio_actuator_set">\n' + 
 '                <field name="VARIABLE">motor.left.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">500</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_actuator_set">\n' + 
 '                    <field name="VARIABLE">motor.right.target</field>\n' + 
 '                    <value name="VALUE">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">500</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '            <value name="IF1">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">AND</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_prox_ground_check">\n' + 
 '                    <field name="SENSOR">prox.ground.delta[0]</field>\n' + 
 '                    <field name="MODE">BLACK</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_prox_ground_check">\n' + 
 '                    <field name="SENSOR">prox.ground.delta[1]</field>\n' + 
 '                    <field name="MODE">WHITE</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <statement name="DO1">\n' + 
 '              <block type="thymio_actuator_set">\n' + 
 '                <field name="VARIABLE">motor.left.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">-500</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_actuator_set">\n' + 
 '                    <field name="VARIABLE">motor.right.target</field>\n' + 
 '                    <value name="VALUE">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">-250</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '            <value name="IF2">\n' + 
 '              <block type="logic_operation">\n' + 
 '                <field name="OP">AND</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_prox_ground_check">\n' + 
 '                    <field name="SENSOR">prox.ground.delta[0]</field>\n' + 
 '                    <field name="MODE">WHITE</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_prox_ground_check">\n' + 
 '                    <field name="SENSOR">prox.ground.delta[1]</field>\n' + 
 '                    <field name="MODE">BLACK</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <statement name="DO2">\n' + 
 '              <block type="thymio_actuator_set">\n' + 
 '                <field name="VARIABLE">motor.left.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">-250</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_actuator_set">\n' + 
 '                    <field name="VARIABLE">motor.right.target</field>\n' + 
 '                    <value name="VALUE">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">-500</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '            <statement name="ELSE">\n' + 
 '              <block type="thymio_actuator_set">\n' + 
 '                <field name="VARIABLE">motor.left.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_actuator_set">\n' + 
 '                    <field name="VARIABLE">motor.right.target</field>\n' + 
 '                    <value name="VALUE">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">0</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="13" y="488">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">active</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_actuator_set">\n' + 
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
 '  <block type="thymio_event_button" x="363" y="488">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">active</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">1</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var active\n' + 
 '\n' + 
 '\n' + 
 'onevent prox\n' + 
 '	if active > 0 then\n' + 
 '		if prox.ground.delta[0] > 450 and prox.ground.delta[1] > 450 then\n' + 
 '			motor.left.target = 500\n' + 
 '			motor.right.target = 500\n' + 
 '		elseif prox.ground.delta[0] > 450 and prox.ground.delta[1] < 400 then\n' + 
 '			motor.left.target = -500\n' + 
 '			motor.right.target = -250\n' + 
 '		elseif prox.ground.delta[0] < 400 and prox.ground.delta[1] > 450 then\n' + 
 '			motor.left.target = -250\n' + 
 '			motor.right.target = -500\n' + 
 '		else\n' + 
 '			motor.left.target = 0\n' + 
 '			motor.right.target = 0\n' + 
 '		end\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		active = 0\n' + 
 '		motor.left.target = 0\n' + 
 '		motor.right.target = 0\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		active = 1\n' + 
 '	end\n' + 
 ''],
['playing and stopping system sounds',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="63" y="213">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_sound_system">\n' + 
 '        <field name="SOUND">0</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="338" y="213">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_sound_stop"></block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="313">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_sound_system">\n' + 
 '        <field name="SOUND">1</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="413">\n' + 
 '    <field name="BUTTON">button.left</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_sound_system">\n' + 
 '        <field name="SOUND">3</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="513">\n' + 
 '    <field name="BUTTON">button.right</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_sound_system">\n' + 
 '        <field name="SOUND">4</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		call sound.system(0)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		call sound.system(-1)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.backward\n' + 
 '	when button.backward == 1 do\n' + 
 '		call sound.system(1)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.left\n' + 
 '	when button.left == 1 do\n' + 
 '		call sound.system(3)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.right\n' + 
 '	when button.right == 1 do\n' + 
 '		call sound.system(4)\n' + 
 '	end\n' + 
 ''],
['when condition',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="62" y="63">\n' + 
 '    <field name="EVENT">prox</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_when">\n' + 
 '        <value name="WHEN">\n' + 
 '          <block type="logic_operation">\n' + 
 '            <field name="OP">OR</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_prox_ground_check">\n' + 
 '                <field name="SENSOR">prox.ground.delta[0]</field>\n' + 
 '                <field name="MODE">BLACK</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="thymio_prox_ground_check">\n' + 
 '                <field name="SENSOR">prox.ground.delta[1]</field>\n' + 
 '                <field name="MODE">BLACK</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO">\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">motor.left.target</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">+</field>\n' + 
 '                <value name="A">\n' + 
 '                  <shadow type="math_number"> \n' + 
 '                    \n' + 
 '                    <field name="NUM">1</field> \n' + 
 '                  \n' + 
 '                  </shadow>\n' + 
 '                  <block type="thymio_get_sensor_state">\n' + 
 '                    <field name="SENSOR">motor.left.speed</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <shadow type="math_number">\n' + 
 '                    <field name="NUM">100</field>\n' + 
 '                  </shadow>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_actuator_set">\n' + 
 '                <field name="VARIABLE">motor.right.target</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="thymio_arithmetic">\n' + 
 '                    <field name="OP">+</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <shadow type="math_number"> \n' + 
 '                        \n' + 
 '                        <field name="NUM">1</field> \n' + 
 '                      \n' + 
 '                      </shadow>\n' + 
 '                      <block type="thymio_get_sensor_state">\n' + 
 '                        <field name="SENSOR">motor.right.speed</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <shadow type="math_number">\n' + 
 '                        <field name="NUM">100</field>\n' + 
 '                      </shadow>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="62" y="262">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_actuator_set">\n' + 
 '        <field name="VARIABLE">motor.left.target</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
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
 'onevent prox\n' + 
 '	when prox.ground.delta[0] > 450 or prox.ground.delta[1] > 450 do\n' + 
 '		motor.left.target = motor.left.speed + 100\n' + 
 '		motor.right.target = motor.right.speed + 100\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		motor.left.target = 0\n' + 
 '		motor.right.target = 0\n' + 
 '	end\n' + 
 ''],
['for loop computation',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_variable_set" x="113" y="62">\n' + 
 '    <field name="VAR">result</field>\n' + 
 '    <value name="VALUE">\n' + 
 '      <block type="math_number">\n' + 
 '        <field name="NUM">0</field>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '    <next>\n' + 
 '      <block type="thymio_for">\n' + 
 '        <field name="ITER">i</field>\n' + 
 '        <field name="FROM">1</field>\n' + 
 '        <field name="TO">10</field>\n' + 
 '        <statement name="DO">\n' + 
 '          <block type="thymio_variable_set">\n' + 
 '            <field name="VAR">result</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">+</field>\n' + 
 '                <value name="A">\n' + 
 '                  <shadow type="math_number">\n' + 
 '                    <field name="NUM">1</field>\n' + 
 '                  </shadow>\n' + 
 '                  <block type="thymio_variable_get">\n' + 
 '                    <field name="VAR">result</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <shadow type="math_number">\n' + 
 '                    <field name="NUM">1</field>\n' + 
 '                  </shadow>\n' + 
 '                  <block type="thymio_variable_get">\n' + 
 '                    <field name="VAR">i</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <next>\n' + 
 '          <block type="controls_if">\n' + 
 '            <mutation else="1"></mutation>\n' + 
 '            <value name="IF0">\n' + 
 '              <block type="logic_compare">\n' + 
 '                <field name="OP">EQ</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_variable_get">\n' + 
 '                    <field name="VAR">result</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">55</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <statement name="DO0">\n' + 
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <field name="COLOR">#33ff33</field>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '            <statement name="ELSE">\n' + 
 '              <block type="thymio_led">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <field name="COLOR">#ff0000</field>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </next>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var result\n' + 
 'var i\n' + 
 '\n' + 
 '\n' + 
 'result = 0\n' + 
 'for i in 1:10 do\n' + 
 '	result = result + i\n' + 
 'end\n' + 
 'if result == 55 then\n' + 
 '	call leds.top(6,32,6)\n' + 
 'else\n' + 
 '	call leds.top(32,0,0)\n' + 
 'end\n' + 
 ''],
['fibonacci numbers in an array',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_declare_array" x="63" y="12">\n' + 
 '    <field name="VAR">a</field>\n' + 
 '    <field name="SIZE">10</field>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_set_array" x="62" y="62">\n' + 
 '    <field name="VAR">a</field>\n' + 
 '    <value name="INDEX">\n' + 
 '      <block type="math_number">\n' + 
 '        <field name="NUM">1</field>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '    <value name="VALUE">\n' + 
 '      <block type="math_number">\n' + 
 '        <field name="NUM">0</field>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '    <next>\n' + 
 '      <block type="thymio_set_array">\n' + 
 '        <field name="VAR">a</field>\n' + 
 '        <value name="INDEX">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">2</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">1</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_for">\n' + 
 '            <field name="ITER">i</field>\n' + 
 '            <field name="FROM">3</field>\n' + 
 '            <field name="TO">10</field>\n' + 
 '            <statement name="DO">\n' + 
 '              <block type="thymio_set_array">\n' + 
 '                <field name="VAR">a</field>\n' + 
 '                <value name="INDEX">\n' + 
 '                  <block type="thymio_variable_get">\n' + 
 '                    <field name="VAR">i</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="thymio_arithmetic">\n' + 
 '                    <field name="OP">+</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <shadow type="math_number">\n' + 
 '                        \n' + 
 '                        <field name="NUM">1</field>\n' + 
 '                      \n' + 
 '                      </shadow>\n' + 
 '                      <block type="thymio_get_array">\n' + 
 '                        <field name="VAR">a</field>\n' + 
 '                        <value name="INDEX">\n' + 
 '                          <block type="thymio_arithmetic">\n' + 
 '                            <field name="OP">-</field>\n' + 
 '                            <value name="A">\n' + 
 '                              <shadow type="math_number">\n' + 
 '                                \n' + 
 '                                <field name="NUM">1</field>\n' + 
 '                              \n' + 
 '                              </shadow>\n' + 
 '                              <block type="thymio_variable_get">\n' + 
 '                                <field name="VAR">i</field>\n' + 
 '                              </block>\n' + 
 '                            </value>\n' + 
 '                            <value name="B">\n' + 
 '                              <shadow type="math_number">\n' + 
 '                                <field name="NUM">1</field>\n' + 
 '                              </shadow>\n' + 
 '                            </value>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <shadow type="math_number">\n' + 
 '                        \n' + 
 '                        <field name="NUM">1</field>\n' + 
 '                      \n' + 
 '                      </shadow>\n' + 
 '                      <block type="thymio_get_array">\n' + 
 '                        <field name="VAR">a</field>\n' + 
 '                        <value name="INDEX">\n' + 
 '                          <block type="thymio_arithmetic">\n' + 
 '                            <field name="OP">-</field>\n' + 
 '                            <value name="A">\n' + 
 '                              <shadow type="math_number">\n' + 
 '                                \n' + 
 '                                <field name="NUM">1</field>\n' + 
 '                              \n' + 
 '                              </shadow>\n' + 
 '                              <block type="thymio_variable_get">\n' + 
 '                                <field name="VAR">i</field>\n' + 
 '                              </block>\n' + 
 '                            </value>\n' + 
 '                            <value name="B">\n' + 
 '                              <shadow type="math_number">\n' + 
 '                                <field name="NUM">2</field>\n' + 
 '                              </shadow>\n' + 
 '                            </value>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '            <next>\n' + 
 '              <block type="controls_if">\n' + 
 '                <mutation else="1"></mutation>\n' + 
 '                <value name="IF0">\n' + 
 '                  <block type="logic_compare">\n' + 
 '                    <field name="OP">EQ</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <block type="thymio_get_array">\n' + 
 '                        <field name="VAR">a</field>\n' + 
 '                        <value name="INDEX">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">10</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">34</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <statement name="DO0">\n' + 
 '                  <block type="thymio_led">\n' + 
 '                    <field name="LED">leds.top</field>\n' + 
 '                    <field name="COLOR">#33ff33</field>\n' + 
 '                  </block>\n' + 
 '                </statement>\n' + 
 '                <statement name="ELSE">\n' + 
 '                  <block type="thymio_led">\n' + 
 '                    <field name="LED">leds.top</field>\n' + 
 '                    <field name="COLOR">#ff0000</field>\n' + 
 '                  </block>\n' + 
 '                </statement>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </next>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="63" y="387">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led_off">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var a[11]\n' + 
 'var i\n' + 
 '\n' + 
 '\n' + 
 'a[1] = 0\n' + 
 'a[2] = 1\n' + 
 'for i in 3:10 do\n' + 
 '	a[i] = a[i - 1] + a[i - 2]\n' + 
 'end\n' + 
 'if a[10] == 34 then\n' + 
 '	call leds.top(6,32,6)\n' + 
 'else\n' + 
 '	call leds.top(32,0,0)\n' + 
 'end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		call leds.top(0,0,0)\n' + 
 '	end\n' + 
 ''],
['arithmetic and binary crazyness',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_variable_set" x="-138" y="112">\n' + 
 '    <field name="VAR">crazy</field>\n' + 
 '    <value name="VALUE">\n' + 
 '      <block type="thymio_arithmetic">\n' + 
 '        <field name="OP">+</field>\n' + 
 '        <value name="A">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <value name="B">\n' + 
 '          <block type="thymio_arithmetic">\n' + 
 '            <field name="OP">-</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">1</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">*</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">2</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="thymio_arithmetic">\n' + 
 '                    <field name="OP">/</field>\n' + 
 '                    <value name="A">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">3</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="B">\n' + 
 '                      <block type="thymio_arithmetic">\n' + 
 '                        <field name="OP">%</field>\n' + 
 '                        <value name="A">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">4</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                        <value name="B">\n' + 
 '                          <block type="thymio_binary">\n' + 
 '                            <field name="OP">&lt;&lt;</field>\n' + 
 '                            <value name="A">\n' + 
 '                              <block type="math_number">\n' + 
 '                                <field name="NUM">5</field>\n' + 
 '                              </block>\n' + 
 '                            </value>\n' + 
 '                            <value name="B">\n' + 
 '                              <block type="thymio_binary">\n' + 
 '                                <field name="OP">&gt;&gt;</field>\n' + 
 '                                <value name="A">\n' + 
 '                                  <block type="math_number">\n' + 
 '                                    <field name="NUM">6</field>\n' + 
 '                                  </block>\n' + 
 '                                </value>\n' + 
 '                                <value name="B">\n' + 
 '                                  <block type="thymio_binary">\n' + 
 '                                    <field name="OP">&amp;</field>\n' + 
 '                                    <value name="A">\n' + 
 '                                      <block type="math_number">\n' + 
 '                                        <field name="NUM">7</field>\n' + 
 '                                      </block>\n' + 
 '                                    </value>\n' + 
 '                                    <value name="B">\n' + 
 '                                      <block type="thymio_binary">\n' + 
 '                                        <field name="OP">|</field>\n' + 
 '                                        <value name="A">\n' + 
 '                                          <block type="math_number">\n' + 
 '                                            <field name="NUM">8</field>\n' + 
 '                                          </block>\n' + 
 '                                        </value>\n' + 
 '                                        <value name="B">\n' + 
 '                                          <block type="thymio_binary">\n' + 
 '                                            <field name="OP">^</field>\n' + 
 '                                            <value name="A">\n' + 
 '                                              <block type="math_number">\n' + 
 '                                                <field name="NUM">9</field>\n' + 
 '                                              </block>\n' + 
 '                                            </value>\n' + 
 '                                            <value name="B">\n' + 
 '                                              <block type="math_number">\n' + 
 '                                                <field name="NUM">10</field>\n' + 
 '                                              </block>\n' + 
 '                                            </value>\n' + 
 '                                          </block>\n' + 
 '                                        </value>\n' + 
 '                                      </block>\n' + 
 '                                    </value>\n' + 
 '                                  </block>\n' + 
 '                                </value>\n' + 
 '                              </block>\n' + 
 '                            </value>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var crazy\n' + 
 '\n' + 
 '\n' + 
 'crazy = 0 + (1 - 2 * (3 / (4 % (5 << (6 >> (7 & (8 | 9 ^ 10)))))))\n' + 
 ''],
['unary mix',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_variable_set" x="38" y="138">\n' + 
 '    <field name="VAR">item</field>\n' + 
 '    <value name="VALUE">\n' + 
 '      <block type="thymio_unary">\n' + 
 '        <field name="OP">-</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_unary">\n' + 
 '            <field name="OP">abs</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_unary">\n' + 
 '                <field name="OP">~</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var item\n' + 
 '\n' + 
 '\n' + 
 'item = -(abs ~0)\n' + 
 ''],
['communication client',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event_button" x="138" y="38">\n' + 
 '    <field name="BUTTON">button.forward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_communication">\n' + 
 '        <field name="MODE">ENABLE</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">prox.comm.tx</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">1</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event_button" x="538" y="38">\n' + 
 '    <field name="BUTTON">button.backward</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_communication">\n' + 
 '        <field name="MODE">ENABLE</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">prox.comm.tx</field>\n' + 
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
 '  <block type="thymio_event_button" x="137" y="138">\n' + 
 '    <field name="BUTTON">button.center</field>\n' + 
 '    <field name="MODE">PRESS</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led_off">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_communication">\n' + 
 '            <field name="MODE">DISABLE</field>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event" x="138" y="237">\n' + 
 '    <field name="EVENT">prox.comm</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led_rgb">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <value name="RED">\n' + 
 '          <block type="thymio_get_sensor_state">\n' + 
 '            <field name="SENSOR">prox.comm.rx</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <value name="GREEN">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <value name="BLUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent button.forward\n' + 
 '	when button.forward == 1 do\n' + 
 '		call prox.comm.enable(1)\n' + 
 '		prox.comm.tx = 1\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.backward\n' + 
 '	when button.backward == 1 do\n' + 
 '		call prox.comm.enable(1)\n' + 
 '		prox.comm.tx = 0\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent button.center\n' + 
 '	when button.center == 1 do\n' + 
 '		call leds.top(0,0,0)\n' + 
 '		call prox.comm.enable(0)\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent prox.comm\n' + 
 '	call leds.top(prox.comm.rx,0,0)\n' + 
 ''], 
['communication server',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_communication" x="63" y="62">\n' + 
 '    <field name="MODE">ENABLE</field>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event" x="62" y="113">\n' + 
 '    <field name="EVENT">prox.comm</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_when">\n' + 
 '        <value name="WHEN">\n' + 
 '          <block type="logic_compare">\n' + 
 '            <field name="OP">EQ</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_get_sensor_state">\n' + 
 '                <field name="SENSOR">prox.comm.rx</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">1</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO">\n' + 
 '          <block type="thymio_led">\n' + 
 '            <field name="LED">leds.top</field>\n' + 
 '            <field name="COLOR">#33ff33</field>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_variable_set">\n' + 
 '                <field name="VAR">message</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_actuator_set">\n' + 
 '                    <field name="VARIABLE">timer.period[0]</field>\n' + 
 '                    <value name="VALUE">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">100</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_when">\n' + 
 '            <value name="WHEN">\n' + 
 '              <block type="logic_compare">\n' + 
 '                <field name="OP">EQ</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_get_sensor_state">\n' + 
 '                    <field name="SENSOR">prox.comm.rx</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">0</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <statement name="DO">\n' + 
 '              <block type="thymio_led_off">\n' + 
 '                <field name="LED">leds.top</field>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_actuator_set">\n' + 
 '                    <field name="VARIABLE">prox.comm.tx</field>\n' + 
 '                    <value name="VALUE">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">0</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <next>\n' + 
 '                      <block type="thymio_actuator_set">\n' + 
 '                        <field name="VARIABLE">timer.period[0]</field>\n' + 
 '                        <value name="VALUE">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">0</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                      </block>\n' + 
 '                    </next>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </statement>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event" x="537" y="112">\n' + 
 '    <field name="EVENT">timer0</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">message</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="thymio_arithmetic">\n' + 
 '            <field name="OP">%</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_arithmetic">\n' + 
 '                <field name="OP">+</field>\n' + 
 '                <value name="A">\n' + 
 '                  <block type="thymio_variable_get">\n' + 
 '                    <field name="VAR">message</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="B">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">1</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">33</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">prox.comm.tx</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="thymio_variable_get">\n' + 
 '                <field name="VAR">message</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_actuator_set">\n' + 
 '                <field name="VARIABLE">timer.period[0]</field>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">100</field>\n' + 
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
 'var message\n' + 
 '\n' + 
 '\n' + 
 'call prox.comm.enable(1)\n' + 
 '\n' + 
 '\n' + 
 'onevent prox.comm\n' + 
 '	when prox.comm.rx == 1 do\n' + 
 '		call leds.top(6,32,6)\n' + 
 '		message = 0\n' + 
 '		timer.period[0] = 100\n' + 
 '	end\n' + 
 '	when prox.comm.rx == 0 do\n' + 
 '		call leds.top(0,0,0)\n' + 
 '		prox.comm.tx = 0\n' + 
 '		timer.period[0] = 0\n' + 
 '	end\n' + 
 '\n' + 
 '\n' + 
 'onevent timer0\n' + 
 '	message = (message + 1) % 33\n' + 
 '	prox.comm.tx = message\n' + 
 '	timer.period[0] = 100\n' + 
 ''],
['remote control receiver',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="88" y="38">\n' + 
 '    <field name="EVENT">rc5</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '        <field name="COLOR">#33ff33</field>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_actuator_set">\n' + 
 '            <field name="VARIABLE">timer.period[0]</field>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">100</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_event" x="88" y="163">\n' + 
 '    <field name="EVENT">timer0</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="thymio_led_off">\n' + 
 '        <field name="LED">leds.top</field>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent rc5\n' + 
 '	call leds.top(6,32,6)\n' + 
 '	timer.period[0] = 100\n' + 
 '\n' + 
 '\n' + 
 'onevent timer0\n' + 
 '	call leds.top(0,0,0)\n' + 
 ''],
['play notes on proximity',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_event" x="38" y="38">\n' + 
 '    <field name="EVENT">prox</field>\n' + 
 '    <statement name="HANDLER">\n' + 
 '      <block type="controls_if">\n' + 
 '        <value name="IF0">\n' + 
 '          <block type="logic_compare">\n' + 
 '            <field name="OP">GT</field>\n' + 
 '            <value name="A">\n' + 
 '              <block type="thymio_get_sensor_state">\n' + 
 '                <field name="SENSOR">prox.horizontal[2]</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="B">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <statement name="DO0">\n' + 
 '          <block type="thymio_sound_note">\n' + 
 '            <value name="FREQ">\n' + 
 '              <block type="thymio_get_sensor_state">\n' + 
 '                <field name="SENSOR">prox.horizontal[2]</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="DURATION">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">10</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '          </block>\n' + 
 '        </statement>\n' + 
 '      </block>\n' + 
 '    </statement>\n' + 
 '  </block>\n' + 
 '</xml>',
 'onevent prox\n' + 
 '	if prox.horizontal[2] > 0 then\n' + 
 '		call sound.freq(prox.horizontal[2],10)\n' + 
 '	end\n' + 
 ''],
['safe array access',
 '<xml xmlns="http://www.w3.org/1999/xhtml">\n' + 
 '  <block type="thymio_declare_array" x="63" y="38">\n' + 
 '    <field name="VAR">c</field>\n' + 
 '    <field name="SIZE">3</field>\n' + 
 '  </block>\n' + 
 '  <block type="thymio_variable_set" x="63" y="87">\n' + 
 '    <field name="VAR">a</field>\n' + 
 '    <value name="VALUE">\n' + 
 '      <block type="math_number">\n' + 
 '        <field name="NUM">0</field>\n' + 
 '      </block>\n' + 
 '    </value>\n' + 
 '    <next>\n' + 
 '      <block type="thymio_variable_set">\n' + 
 '        <field name="VAR">b</field>\n' + 
 '        <value name="VALUE">\n' + 
 '          <block type="math_number">\n' + 
 '            <field name="NUM">0</field>\n' + 
 '          </block>\n' + 
 '        </value>\n' + 
 '        <next>\n' + 
 '          <block type="thymio_set_array">\n' + 
 '            <field name="VAR">b</field>\n' + 
 '            <value name="INDEX">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">1</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <value name="VALUE">\n' + 
 '              <block type="math_number">\n' + 
 '                <field name="NUM">0</field>\n' + 
 '              </block>\n' + 
 '            </value>\n' + 
 '            <next>\n' + 
 '              <block type="thymio_set_array">\n' + 
 '                <field name="VAR">c</field>\n' + 
 '                <value name="INDEX">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">1</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <value name="VALUE">\n' + 
 '                  <block type="math_number">\n' + 
 '                    <field name="NUM">1</field>\n' + 
 '                  </block>\n' + 
 '                </value>\n' + 
 '                <next>\n' + 
 '                  <block type="thymio_set_array">\n' + 
 '                    <field name="VAR">c</field>\n' + 
 '                    <value name="INDEX">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">2</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <value name="VALUE">\n' + 
 '                      <block type="math_number">\n' + 
 '                        <field name="NUM">2</field>\n' + 
 '                      </block>\n' + 
 '                    </value>\n' + 
 '                    <next>\n' + 
 '                      <block type="thymio_set_array">\n' + 
 '                        <field name="VAR">c</field>\n' + 
 '                        <value name="INDEX">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">3</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                        <value name="VALUE">\n' + 
 '                          <block type="math_number">\n' + 
 '                            <field name="NUM">3</field>\n' + 
 '                          </block>\n' + 
 '                        </value>\n' + 
 '                        <next>\n' + 
 '                          <block type="thymio_variable_set">\n' + 
 '                            <field name="VAR">c</field>\n' + 
 '                            <value name="VALUE">\n' + 
 '                              <block type="thymio_arithmetic">\n' + 
 '                                <field name="OP">+</field>\n' + 
 '                                <value name="A">\n' + 
 '                                  <block type="thymio_variable_get">\n' + 
 '                                    <field name="VAR">a</field>\n' + 
 '                                  </block>\n' + 
 '                                </value>\n' + 
 '                                <value name="B">\n' + 
 '                                  <block type="thymio_variable_get">\n' + 
 '                                    <field name="VAR">b</field>\n' + 
 '                                  </block>\n' + 
 '                                </value>\n' + 
 '                              </block>\n' + 
 '                            </value>\n' + 
 '                          </block>\n' + 
 '                        </next>\n' + 
 '                      </block>\n' + 
 '                    </next>\n' + 
 '                  </block>\n' + 
 '                </next>\n' + 
 '              </block>\n' + 
 '            </next>\n' + 
 '          </block>\n' + 
 '        </next>\n' + 
 '      </block>\n' + 
 '    </next>\n' + 
 '  </block>\n' + 
 '</xml>',
 'var c[4]\n' + 
 'var a\n' + 
 'var b[2]\n' + 
 '\n' + 
 '\n' + 
 'a = 0\n' + 
 'b[0] = 0\n' + 
 'b[1] = 0\n' + 
 'c[1] = 1\n' + 
 'c[2] = 2\n' + 
 'c[3] = 3\n' + 
 'c[0] = a + b[0]\n' + 
 ''],
];
