'use strict';

var A = AUI();

var requests = [];
var server;

describe(
	'Liferay.DDM.Renderer.FormPaginationSupport',
	function() {
		var form;

		afterEach(
			function(done) {
				form.destroy();

				done();
			}
		);

		beforeEach(
			function() {
				server = sinon.fakeServer.create();
			}
		);

		before(
			function(done) {
				AUI().use(
					'liferay-ddm-form-renderer',
					function(A) {
						Liferay.DDM.Renderer.FieldTypes.register(
							{
								'javaScriptClass': 'Liferay.DDM.Field.Select',
								'name': 'select',
								'templateNamespace': 'ddm.select'
							}
						);

						done();
					}
				);
			}
		);

		describe(
			'.nextPage()',
			function() {
				it(
					'should call .validatePage()',
					function() {
						form = new Liferay.DDM.Renderer.Form(
							{
								context: {
									readOnly: true,
									pagesState: [{}, {}, {}],
									strings: {},
									templateNamespace: 'ddm.paginated_form',
									pages: [
										{
											rows: []
										},
										{
											rows: []
										}
									]
								}
							}
						);
						form.render();

						var spy = sinon.spy(form, 'validatePage');

						form.nextPage();

						assert.ok(spy.calledOnce);

						spy.restore();
					}
				);
			}
		);
	}
);