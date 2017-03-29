'use strict';

var A = AUI();

describe(
	'Liferay.DDM.Field.Radio',
	function() {
		before(
			function(done) {
				AUI().use(
					'liferay-ddm-form-field-radio-template',
					'liferay-ddm-form-field-radio',
					function(A) {
						Liferay.DDM.Renderer.FieldTypes.register(
							{
								'javaScriptClass': 'Liferay.DDM.Field.Radio',
								'name': 'radio',
								'templateNamespace': 'ddm.radio'
							}
						);

						done();
					}
				);
			}
		);

		describe(
			'.getValue()',
			function() {
				it(
					'should return the same value as seted',
					function(done) {
						var radioField = new Liferay.DDM.Field.Radio(
							{
								options: [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}]
							}
						);

						radioField.render();

						var value = ['a'];

						radioField.setValue(value);

						assert.deepEqual(radioField.getValue(), value);

						done();
					}
				);

				it(
					'should return clicked item',
					function(done) {
						var radioField = new Liferay.DDM.Field.Radio(
							{
								options: [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}]
							}
						);

						radioField.render();


						assert.deepEqual(radioField.getValue(), ['']);

						var container = radioField.get('container');

						var item = container.all('.field').item(1);

						item.simulate('click');

						assert.deepEqual(radioField.getValue(), ['b']);

						done();
					}
				);
			}
		);
	}
);