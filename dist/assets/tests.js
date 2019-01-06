define('bookmarker/tests/acceptance/bookmark-delete-test', ['exports', 'qunit', 'bookmarker/tests/helpers/module-for-acceptance'], function (exports, _qunit, _bookmarkerTestsHelpersModuleForAcceptance) {

  (0, _bookmarkerTestsHelpersModuleForAcceptance['default'])('Acceptance | bookmark delete');

  (0, _qunit.test)('visiting /bookmark-delete', function (assert) {
    var user = server.create('user', {});
    var bookmark = server.create('bookmark', {
      title: 'Test Bookmark',
      userId: user.id
    });
    visit('/bookmarks/edit/' + bookmark.id);
    click('button#delete');
    andThen(function () {
      assert.equal(currentURL(), '/bookmarks');
    });
  });
});
define('bookmarker/tests/acceptance/bookmark-delete-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/bookmark-delete-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/bookmark-delete-test.js should pass jshint.\nacceptance/bookmark-delete-test.js: line 16, col 5, Missing semicolon.\n\n1 error');
  });
});
define('bookmarker/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('bookmarker/tests/components/bookmark-listing.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/bookmark-listing.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bookmark-listing.js should pass jshint.');
  });
});
define('bookmarker/tests/components/bookmarks/edit-form.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/bookmarks/edit-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bookmarks/edit-form.js should pass jshint.');
  });
});
define('bookmarker/tests/components/users-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/users-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/users-list.js should pass jshint.');
  });
});
define('bookmarker/tests/controllers/users/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/users/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/users/index.js should pass jshint.');
  });
});
define('bookmarker/tests/helpers/bookmark-title.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/bookmark-title.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/bookmark-title.js should pass jshint.');
  });
});
define('bookmarker/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    server.shutdown();
  }
});
define('bookmarker/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('bookmarker/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'bookmarker/tests/helpers/start-app', 'bookmarker/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _bookmarkerTestsHelpersStartApp, _bookmarkerTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _bookmarkerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _bookmarkerTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('bookmarker/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('bookmarker/tests/helpers/resolver', ['exports', 'bookmarker/resolver', 'bookmarker/config/environment'], function (exports, _bookmarkerResolver, _bookmarkerConfigEnvironment) {

  var resolver = _bookmarkerResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _bookmarkerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bookmarkerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('bookmarker/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('bookmarker/tests/helpers/start-app', ['exports', 'ember', 'bookmarker/app', 'bookmarker/config/environment'], function (exports, _ember, _bookmarkerApp, _bookmarkerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _bookmarkerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _bookmarkerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('bookmarker/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('bookmarker/tests/integration/components/bookmark-listing-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('bookmark-listing', 'Integration | Component | bookmark listing', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'bookmark-listing', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bookmark-listing', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bookmarker/tests/integration/components/bookmark-listing-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/bookmark-listing-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bookmark-listing-test.js should pass jshint.');
  });
});
define('bookmarker/tests/integration/components/bookmarks/edit-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('bookmarks/edit-form', 'Integration | Component | bookmarks/edit form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'bookmarks/edit-form', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bookmarks/edit-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 28]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bookmarker/tests/integration/components/bookmarks/edit-form-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/bookmarks/edit-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bookmarks/edit-form-test.js should pass jshint.');
  });
});
define('bookmarker/tests/integration/components/users-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('users-list', 'Integration | Component | users list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 36
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'users-list', [['get', 'fake-url', ['loc', [null, [1, 13], [1, 21]]]], ['get', 'sample-email', ['loc', [null, [1, 22], [1, 34]]]]], [], ['loc', [null, [1, 0], [1, 36]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('img').attr('class'), 'avatar');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'users-list', [['get', 'fake-url', ['loc', [null, [2, 18], [2, 26]]]], ['get', 'sample-email', ['loc', [null, [2, 27], [2, 39]]]]], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$('img').attr('class'), 'avatar');
  });
});
define('bookmarker/tests/integration/components/users-list-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/users-list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/users-list-test.js should pass jshint.');
  });
});
define('bookmarker/tests/models/bookmark.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/bookmark.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/bookmark.js should pass jshint.\nmodels/bookmark.js: line 3, col 21, \'hasMany\' is defined but never used.\n\n1 error');
  });
});
define('bookmarker/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/user.js should pass jshint.\nmodels/user.js: line 3, col 10, \'belongsTo\' is defined but never used.\n\n1 error');
  });
});
define('bookmarker/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('bookmarker/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/bookmarks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bookmarks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bookmarks.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/bookmarks/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bookmarks/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bookmarks/about.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/bookmarks/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bookmarks/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bookmarks/edit.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/bookmarks/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bookmarks/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bookmarks/index.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/bookmarks/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bookmarks/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bookmarks/new.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/page-not-found.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/page-not-found.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/page-not-found.js should pass jshint.');
  });
});
define('bookmarker/tests/routes/users/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/users/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/users/index.js should pass jshint.\nroutes/users/index.js: line 2, col 8, \'ENV\' is defined but never used.\n\n1 error');
  });
});
define('bookmarker/tests/routes/users/list-active.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/users/list-active.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/list-active.js should pass jshint.');
  });
});
define('bookmarker/tests/test-helper', ['exports', 'bookmarker/tests/helpers/resolver', 'ember-qunit'], function (exports, _bookmarkerTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_bookmarkerTestsHelpersResolver['default']);
});
define('bookmarker/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/controllers/users/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:users/index', 'Unit | Controller | users/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('bookmarker/tests/unit/controllers/users/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/users/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/users/index-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/helpers/bookmark-title-test', ['exports', 'bookmarker/helpers/bookmark-title', 'qunit'], function (exports, _bookmarkerHelpersBookmarkTitle, _qunit) {

  (0, _qunit.module)('Unit | Helper | bookmark title');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _bookmarkerHelpersBookmarkTitle.bookmarkTitle)(['canary', 'baz']);
    assert.equal(result, 'canary - baz');
    result = (0, _bookmarkerHelpersBookmarkTitle.bookmarkTitle)(['canary', null]);
    assert.equal(result, 'canary');
  });
});
define('bookmarker/tests/unit/helpers/bookmark-title-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/bookmark-title-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/bookmark-title-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/models/bookmark-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('bookmark', 'Unit | Model | bookmark', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('bookmarker/tests/unit/models/bookmark-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/bookmark-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/bookmark-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: ['model:bookmark']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject({ firstName: 'Foo', lastName: 'Bar' });
    // let store = this.store();
    assert.equal(model.get('fullName'), 'Foo Bar', 'valid fullname');
  });
});
define('bookmarker/tests/unit/models/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/bookmarks-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bookmarks', 'Unit | Route | bookmarks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/bookmarks-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bookmarks-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bookmarks-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/bookmarks/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bookmarks/about', 'Unit | Route | bookmarks/about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/bookmarks/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bookmarks/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bookmarks/about-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/bookmarks/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bookmarks/edit', 'Unit | Route | bookmarks/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/bookmarks/edit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bookmarks/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bookmarks/edit-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/bookmarks/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bookmarks/index', 'Unit | Route | bookmarks/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/bookmarks/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bookmarks/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bookmarks/index-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/bookmarks/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bookmarks/new', 'Unit | Route | bookmarks/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/bookmarks/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bookmarks/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bookmarks/new-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/page-not-found-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:page-not-found', 'Unit | Route | page not found', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/page-not-found-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/page-not-found-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/page-not-found-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/users/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/index', 'Unit | Route | users/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/users/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/users/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users/index-test.js should pass jshint.');
  });
});
define('bookmarker/tests/unit/routes/users/list-active-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/list-active', 'Unit | Route | users/list active', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bookmarker/tests/unit/routes/users/list-active-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/users/list-active-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users/list-active-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('bookmarker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map