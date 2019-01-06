"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('bookmarker/app', ['exports', 'ember', 'bookmarker/resolver', 'ember-load-initializers', 'bookmarker/config/environment'], function (exports, _ember, _bookmarkerResolver, _emberLoadInitializers, _bookmarkerConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _bookmarkerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bookmarkerConfigEnvironment['default'].podModulePrefix,
    Resolver: _bookmarkerResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _bookmarkerConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('bookmarker/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'bookmarker/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _bookmarkerConfigEnvironment) {

  var name = _bookmarkerConfigEnvironment['default'].APP.name;
  var version = _bookmarkerConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('bookmarker/components/bookmark-listing', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('bookmarker/components/bookmarks/edit-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    bookmark: null,
    router: _ember['default'].inject.service('-routing'),

    actions: {
      save: function save(bookmark) {
        var _this = this;

        _ember['default'].Logger.info('save called');
        bookmark.save().then(function (value) {
          _ember['default'].Logger.info(value);
          _this.get('router').transitionTo('bookmarks');
        })['catch'](function () {
          _ember['default'].Logger.info('failure to save');
        });
      },
      cancel: function cancel() {
        _ember['default'].Logger.info('Cancel called');
      },
      'delete': function _delete(bookmark) {
        bookmark.destroyRecord();
        this.get('router').transitionTo('bookmarks');
      }
    }
  });
});
define("bookmarker/components/users-list", ["exports", "ember"], function (exports, _ember) {

  var UsersListComponent = _ember["default"].Component.extend({
    imgClass: "avatar",
    click: function click() {
      _ember["default"].Logger.info("users-list was clicked");
      return false;
    }
  });

  UsersListComponent.reopenClass({
    positionalParams: ['avatarUrl', 'email']
  });
  exports["default"] = UsersListComponent;
});
define('bookmarker/controllers/users/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    testProperty: 'this is a string'
  });
});
define('bookmarker/helpers/bookmark-title', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.bookmarkTitle = bookmarkTitle;

  function bookmarkTitle(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 2);

    var title = _ref2[0];
    var about = _ref2[1];

    var returnStr = title;
    if (about != null) {
      returnStr += ' - ' + about;
    }
    return returnStr;
  }

  exports['default'] = _ember['default'].Helper.helper(bookmarkTitle);
});
define('bookmarker/helpers/is-after', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/is-before', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/is-between', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/is-same-or-after', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/is-same-or-before', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/is-same', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/moment-calendar', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('bookmarker/helpers/moment-format', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/moment-from-now', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/moment-to-now', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('bookmarker/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('bookmarker/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('bookmarker/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('bookmarker/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'bookmarker/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _bookmarkerConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_bookmarkerConfigEnvironment['default'].APP.name, _bookmarkerConfigEnvironment['default'].APP.version)
  };
});
define('bookmarker/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('bookmarker/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('bookmarker/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'bookmarker/config/environment', 'bookmarker/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _bookmarkerConfigEnvironment, _bookmarkerMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_bookmarkerConfigEnvironment['default'].environment, _bookmarkerConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_bookmarkerConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _bookmarkerConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _bookmarkerMirageConfig['default'], testConfig: _bookmarkerMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('bookmarker/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('bookmarker/initializers/export-application-global', ['exports', 'ember', 'bookmarker/config/environment'], function (exports, _ember, _bookmarkerConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_bookmarkerConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _bookmarkerConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_bookmarkerConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('bookmarker/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('bookmarker/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('bookmarker/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("bookmarker/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('bookmarker/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */

    this.get('/users');
    this.get('/users/:id');
    this.post('/users');
    this.put('/users/:id');
    this.patch('/users/:id');
    this.del('/users/:id');

    //this.get('/bookmarks');
    this.get('/bookmarks/:id');
    this.post('/bookmarks');
    this.put('/bookmarks/:id');
    this.patch('/bookmarks/:id');
    this.del('/bookmarks/:id');

    this.get('/users', function (db, request) {
      var users = [];

      if (Object.keys(request.queryParams).length === 0) {
        users = db.users.all();
      } else {
        var filterByIsAdmin = request.queryParams['isAdmin'];
        users = db.users.where({ isAdmin: filterByIsAdmin });
      }
      return users;
    });

    this.get('/bookmarks', function (db, request) {
      var bookmarks = [];

      if (Object.keys(request.queryParams).length === 0) {
        bookmarks = db.bookmarks.all();
      } else {
        bookmarks = db.bookmarks.where({ about: null, id: 3 });
      }

      return bookmarks;
    });
  };
});
define('bookmarker/mirage/factories/bookmark', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    link: function link() {
      return _emberCliMirage.faker.internet.url();
    },
    userId: function userId() {
      return _emberCliMirage.faker.random.number({ max: 10, min: 1 });
    },
    title: function title() {
      return _emberCliMirage.faker.lorem.words(5);
    },
    about: function about(i) {
      if (i % 3 === 0) {
        return _emberCliMirage.faker.lorem.sentences(2);
      } else {
        return null;
      }
    },
    'public': function _public() {
      return _emberCliMirage.faker.random.boolean(0.2);
    },
    created: function created() {
      return _emberCliMirage.faker.date.past();
    }
  });
});
define('bookmarker/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    username: function username() {
      return _emberCliMirage.faker.internet.userName();
    },
    email: function email() {
      return _emberCliMirage.faker.internet.email();
    },
    firstName: function firstName() {
      return _emberCliMirage.faker.name.firstName();
    },
    lastName: function lastName() {
      return _emberCliMirage.faker.name.lastName();
    },
    avatar: function avatar() {
      return _emberCliMirage.faker.internet.avatar();
    },
    isAdmin: function isAdmin() {
      return _emberCliMirage.faker.random.boolean(0.1);
    },
    created: function created() {
      return _emberCliMirage.faker.date.past();
    }
  });
});
define('bookmarker/mirage/models/bookmark', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({
    user: (0, _emberCliMirage.belongsTo)()
  });
});
define('bookmarker/mirage/models/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({
    bookmarks: (0, _emberCliMirage.hasMany)()
  });
});
define('bookmarker/mirage/scenarios/default', ['exports'], function (exports) {
  exports['default'] = function (server) {

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
    server.createList('user', 10);
    server.createList('bookmark', 20);
  };
});
define('bookmarker/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('bookmarker/models/bookmark', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    link: (0, _emberDataAttr['default'])('string'),
    title: (0, _emberDataAttr['default'])('string'),
    about: (0, _emberDataAttr['default'])('string'),
    'public': (0, _emberDataAttr['default'])('boolean'),
    created: (0, _emberDataAttr['default'])('date', {
      defaultValue: function defaultValue() {
        return new Date();
      }
    }),
    user: (0, _emberDataRelationships.belongsTo)('user')
  });
});
define('bookmarker/models/user', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships', 'ember'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships, _ember) {
  exports['default'] = _emberDataModel['default'].extend({
    username: (0, _emberDataAttr['default'])('string'),
    email: (0, _emberDataAttr['default'])('string'),
    firstName: (0, _emberDataAttr['default'])('string'),
    lastName: (0, _emberDataAttr['default'])('string'),
    avatar: (0, _emberDataAttr['default'])('string'),
    isAdmin: (0, _emberDataAttr['default'])('boolean', {
      defaultValue: false
    }),
    created: (0, _emberDataAttr['default'])('date', {
      defaultValue: function defaultValue() {
        return new Date();
      }
    }),
    bookmarks: (0, _emberDataRelationships.hasMany)('bookmark'),
    fullName: _ember['default'].computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    })
  });
});
define('bookmarker/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('bookmarker/router', ['exports', 'ember', 'bookmarker/config/environment'], function (exports, _ember, _bookmarkerConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _bookmarkerConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('about');
    this.route('bookmarks', function () {
      this.route('new');

      this.route('edit', {
        path: '/edit/:bookmark_id'
      });
      this.route('about');
    });

    this.route('page-not-found', {
      path: '/*wildcard'
    });

    this.route('users', function () {
      this.route('list-active');
    });
  });

  exports['default'] = Router;
});
define('bookmarker/routes/about', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.get('store').findAll('bookmark');
		}
	});
});
define('bookmarker/routes/bookmarks', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('bookmarker/routes/bookmarks/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findRecord('bookmark', 1);
      //this.get('store').queryRecord('bookmark', {aboutIsNull: true});
    }
  });
});
define('bookmarker/routes/bookmarks/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('bookmark', params.bookmark_id);
    }
  });
});
define('bookmarker/routes/bookmarks/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('bookmark');
    },
    renderTemplate: function renderTemplate() {
      this.render('about');
    }
  });
});
define('bookmarker/routes/bookmarks/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').createRecord('bookmark');
    }
  });
});
define('bookmarker/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('bookmarker/routes/page-not-found', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('bookmarker/routes/users/index', ['exports', 'ember', 'bookmarker/config/environment'], function (exports, _ember, _bookmarkerConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      //alert(ENV.APP.title);
      return this.get('store').findAll('user');
    }
  });
});
define('bookmarker/routes/users/list-active', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').query('user', { isAdmin: false });
    }
  });
});
define('bookmarker/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('bookmarker/services/moment', ['exports', 'ember', 'bookmarker/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _bookmarkerConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_bookmarkerConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("bookmarker/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 3,
                "column": 53
              }
            },
            "moduleName": "bookmarker/templates/about.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Edit Bookmark");
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
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "bookmarker/templates/about.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	 ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bookmark-listing", [], ["bookmark", ["subexpr", "@mut", [["get", "bookmark", ["loc", [null, [5, 30], [5, 38]]]]], [], []]], ["loc", [null, [5, 2], [5, 40]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "bookmarker/templates/about.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("article");
            var el2 = dom.createTextNode("Not public bookmark");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
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
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "bookmarker/templates/about.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["bookmarks.edit", ["get", "bookmark", ["loc", [null, [3, 30], [3, 38]]]]], [], 0, null, ["loc", [null, [3, 2], [3, 65]]]], ["block", "if", [["get", "bookmark.public", ["loc", [null, [4, 8], [4, 23]]]]], [], 1, 2, ["loc", [null, [4, 2], [8, 9]]]]],
        locals: ["bookmark"],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 9
          }
        },
        "moduleName": "bookmarker/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("About");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [2, 8], [2, 13]]]]], [], 0, null, ["loc", [null, [2, 0], [9, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("bookmarker/templates/bookmarks", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/bookmarks.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Bookmarks");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/bookmarks/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/bookmarks/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/bookmarks/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/bookmarks/edit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "bookmarks/edit-form", [], ["bookmark", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 31], [1, 36]]]]], [], []]], ["loc", [null, [1, 0], [1, 38]]]], ["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/bookmarks/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/bookmarks/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("List of Bookmarks");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/bookmarks/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/bookmarks/new.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Add Bookmark");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["inline", "bookmarks/edit-form", [], ["bookmark", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 31], [2, 36]]]]], [], []]], ["loc", [null, [2, 0], [2, 38]]]], ["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/components/bookmark-listing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/components/bookmark-listing.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "target", "_blank");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        morphs[1] = dom.createAttrMorph(element1, 'href');
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        morphs[4] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["attribute", "id", ["get", "bookmark.id", ["loc", [null, [1, 14], [1, 25]]]]], ["attribute", "href", ["get", "bookmark.link", ["loc", [null, [2, 28], [2, 41]]]]], ["inline", "bookmark-title", [["get", "bookmark.title", ["loc", [null, [3, 19], [3, 33]]]], ["get", "bookmark.about", ["loc", [null, [3, 34], [3, 48]]]]], [], ["loc", [null, [3, 2], [3, 50]]]], ["inline", "moment-from-now", [["get", "bookmark.created", ["loc", [null, [5, 20], [5, 36]]]]], [], ["loc", [null, [5, 2], [5, 38]]]], ["content", "yield", ["loc", [null, [7, 0], [7, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/components/bookmarks/edit-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 2
            },
            "end": {
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "bookmarker/templates/components/bookmarks/edit-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "id", "delete");
          var el2 = dom.createTextNode("Delete");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["delete", ["get", "bookmark", ["loc", [null, [18, 42], [18, 50]]]]], [], ["loc", [null, [18, 24], [18, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/components/bookmarks/edit-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Link:");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Title:");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("About:");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Public:");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "submit");
        dom.setAttribute(el2, "value", "Save");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "cancel");
        var el3 = dom.createTextNode("Cancel");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [13]);
        var morphs = new Array(9);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [5, 1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [7, 1]), 1, 1);
        morphs[5] = dom.createMorphAt(element1, 9, 9);
        morphs[6] = dom.createElementMorph(element2);
        morphs[7] = dom.createMorphAt(element1, 15, 15);
        morphs[8] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["save", ["get", "bookmark", ["loc", [null, [1, 22], [1, 30]]]]], ["on", "submit"], ["loc", [null, [1, 6], [1, 44]]]], ["inline", "input", [], ["name", "link", "value", ["subexpr", "@mut", [["get", "bookmark.link", ["loc", [null, [3, 42], [3, 55]]]]], [], []]], ["loc", [null, [3, 16], [3, 57]]]], ["inline", "input", [], ["name", "title", "value", ["subexpr", "@mut", [["get", "bookmark.title", ["loc", [null, [6, 44], [6, 58]]]]], [], []]], ["loc", [null, [6, 17], [6, 60]]]], ["inline", "input", [], ["name", "about", "value", ["subexpr", "@mut", [["get", "bookmark.about", ["loc", [null, [9, 44], [9, 58]]]]], [], []]], ["loc", [null, [9, 17], [9, 60]]]], ["inline", "input", [], ["type", "checkbox", "name", "public", "checked", ["subexpr", "@mut", [["get", "bookmark.public", ["loc", [null, [12, 64], [12, 79]]]]], [], []]], ["loc", [null, [12, 18], [12, 81]]]], ["inline", "input", [], ["type", "hidden", "name", "user_id", "value", ["subexpr", "@mut", [["get", "bookmark.user_id", ["loc", [null, [14, 45], [14, 61]]]]], [], []]], ["loc", [null, [14, 2], [14, 63]]]], ["element", "action", ["cancel"], [], ["loc", [null, [16, 10], [16, 29]]]], ["block", "unless", [["get", "bookmark.isNew", ["loc", [null, [17, 12], [17, 26]]]]], [], 0, null, ["loc", [null, [17, 2], [19, 13]]]], ["content", "yield", ["loc", [null, [22, 0], [22, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("bookmarker/templates/components/users-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/components/users-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "alt", "avatar");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createAttrMorph(element0, 'class');
        morphs[2] = dom.createAttrMorph(element1, 'href');
        morphs[3] = dom.createMorphAt(element1, 1, 1);
        return morphs;
      },
      statements: [["attribute", "src", ["get", "avatarUrl", ["loc", [null, [1, 11], [1, 20]]]]], ["attribute", "class", ["get", "imgClass", ["loc", [null, [1, 44], [1, 52]]]]], ["attribute", "href", ["concat", ["mailto:", ["get", "email", ["loc", [null, [2, 18], [2, 23]]]]]]], ["content", "yield", ["loc", [null, [3, 0], [3, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 30
            }
          },
          "moduleName": "bookmarker/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About Page");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Welcome");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Our site lest you bookmark urls to save them.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["about"], [], 0, null, ["loc", [null, [3, 0], [3, 42]]]], ["content", "outlet", ["loc", [null, [4, 0], [4, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("bookmarker/templates/page-not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/page-not-found.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("404");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("bookmarker/templates/users/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "bookmarker/templates/users/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "user.fullName", ["loc", [null, [5, 4], [5, 21]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "bookmarker/templates/users/index.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "users-list", [["get", "user.avatar", ["loc", [null, [4, 16], [4, 27]]]], ["get", "user.email", ["loc", [null, [4, 28], [4, 38]]]]], [], 0, null, ["loc", [null, [4, 2], [6, 17]]]]],
        locals: ["user", "index"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/users/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Users");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        return morphs;
      },
      statements: [["content", "testProperty", ["loc", [null, [2, 3], [2, 19]]]], ["block", "each", [["get", "model", ["loc", [null, [3, 8], [3, 13]]]]], [], 0, null, ["loc", [null, [3, 0], [7, 9]]]], ["content", "outlet", ["loc", [null, [8, 0], [8, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("bookmarker/templates/users/list-active", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "bookmarker/templates/users/list-active.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "bookmark.id", ["loc", [null, [5, 8], [5, 23]]]]],
          locals: ["bookmark"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "bookmarker/templates/users/list-active.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["content", "user.fullName", ["loc", [null, [2, 5], [2, 22]]]], ["block", "each", [["get", "user.bookmarks", ["loc", [null, [4, 10], [4, 24]]]]], [], 0, null, ["loc", [null, [4, 2], [6, 11]]]]],
        locals: ["user"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "bookmarker/templates/users/list-active.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [1, 8], [1, 13]]]]], [], 0, null, ["loc", [null, [1, 0], [8, 9]]]], ["content", "outlet", ["loc", [null, [9, 0], [9, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('bookmarker/tests/mirage/mirage/config.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
define('bookmarker/tests/mirage/mirage/factories/bookmark.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/factories/bookmark.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/bookmark.js should pass jshint.');
  });
});
define('bookmarker/tests/mirage/mirage/factories/user.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/factories/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/user.js should pass jshint.');
  });
});
define('bookmarker/tests/mirage/mirage/models/bookmark.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/bookmark.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/bookmark.js should pass jshint.');
  });
});
define('bookmarker/tests/mirage/mirage/models/user.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/user.js should pass jshint.');
  });
});
define('bookmarker/tests/mirage/mirage/scenarios/default.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('bookmarker/tests/mirage/mirage/serializers/application.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('bookmarker/config/environment', ['ember'], function(Ember) {
  var prefix = 'bookmarker';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("bookmarker/app")["default"].create({"title":"Bookmarks","LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"bookmarker","version":"0.0.0+8ec24f2e"});
}

/* jshint ignore:end */
//# sourceMappingURL=bookmarker.map