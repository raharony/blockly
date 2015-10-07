AeslTests = [
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="238" y="13"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#000000</field><next><block type="thymio_leds"><field name="LED">BOTTOMLEFT</field><field name="COLOR">#000000</field><next><block type="thymio_leds"><field name="LED">BOTTOMRIGHT</field><field name="COLOR">#000000</field></block></next></block></next></block></statement></block><block type="thymio_onevent_button" x="237" y="163"><field name="BUTTON">RIGHT</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">BOTTOMRIGHT</field><field name="COLOR">#33cc00</field></block></statement></block><block type="thymio_onevent_button" x="488" y="163"><field name="BUTTON">FORWARD</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#cc33cc</field></block></statement></block><block type="thymio_onevent_button" x="237" y="263"><field name="BUTTON">LEFT</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">BOTTOMLEFT</field><field name="COLOR">#ff6600</field></block></statement></block><block type="thymio_onevent_button" x="488" y="263"><field name="BUTTON">BACKWARD</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#6633ff</field></block></statement></block></xml>',
'onevent button.center\n' + 
'	call leds.top(0,0,0)\n' +
'	call leds.bottom.left(0,0,0)\n' +
'	call leds.bottom.right(0,0,0)\n\n\n' +
'onevent button.right\n' +
'	call leds.bottom.right(6,26,0)\n\n\n' +
'onevent button.forward\n' +
'	call leds.top(26,6,26)\n\n\n' +
'onevent button.left\n' +
'	call leds.bottom.left(32,13,0)\n\n\n' +
'onevent button.backward\n' +
'	call leds.top(13,6,32)\n']	 
];