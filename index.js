(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.1.0";
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
              return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a2) {
            return isArrayImpl(a2);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type,
              key,
              ref,
              props,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement6(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement2(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          function isValidElement2(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c2) {
                  return c2;
                });
              } else if (mappedChild != null) {
                if (isValidElement2(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement2(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext7(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef3(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext14(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState3(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef9(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect12(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect2(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback3(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo5(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId2() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame2 = componentFrameCache.get(fn);
              if (frame2 !== void 0) {
                return frame2;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c2 = controlLines.length - 1;
                while (s >= 1 && c2 >= 0 && sampleLines[s] !== controlLines[c2]) {
                  c2--;
                }
                for (; s >= 1 && c2 >= 0; s--, c2--) {
                  if (sampleLines[s] !== controlLines[c2]) {
                    if (s !== 1 || c2 !== 1) {
                      do {
                        s--;
                        c2--;
                        if (c2 < 0 || sampleLines[s] !== controlLines[c2]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c2 >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement6.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement2.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children2 = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children2;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext7;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef3;
          exports.isValidElement = isValidElement2;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback3;
          exports.useContext = useContext14;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect12;
          exports.useId = useId2;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect2;
          exports.useMemo = useMemo5;
          exports.useReducer = useReducer;
          exports.useRef = useRef9;
          exports.useState = useState3;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = [];
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              if (arg.length) {
                var inner = classNames2.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              }
            } else if (argType === "object") {
              if (arg.toString === Object.prototype.toString) {
                for (var key in arg) {
                  if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                  }
                }
              } else {
                classes.push(arg.toString());
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames2.default = classNames2;
          module.exports = classNames2;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames2;
          });
        } else {
          window.classNames = classNames2;
        }
      })();
    }
  });

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __classPrivateFieldIn2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id2, v) {
            return exports2[id2] = previous ? previous(id2, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
          d.__proto__ = b2;
        } || function(d, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d[p] = b2[p];
        };
        __extends2 = function(d, b2) {
          if (typeof b2 !== "function" && b2 !== null)
            throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
          extendStatics(d, b2);
          function __() {
            this.constructor = d;
          }
          d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
          return c2 > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
              r[k] = a2[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a2, b2) {
                  q.push([n, v, a2, b2]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn2 = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      });
    }
  });

  // node_modules/@emotion/memoize/dist/memoize.browser.cjs.js
  var require_memoize_browser_cjs = __commonJS({
    "node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function memoize(fn) {
        var cache = {};
        return function(arg) {
          if (cache[arg] === void 0)
            cache[arg] = fn(arg);
          return cache[arg];
        };
      }
      exports.default = memoize;
    }
  });

  // node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js
  var require_is_prop_valid_browser_cjs = __commonJS({
    "node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _interopDefault(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var memoize = _interopDefault(require_memoize_browser_cjs());
      var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      var index = memoize(function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      });
      exports.default = index;
    }
  });

  // packages/message-box-react/src/MessageBox.tsx
  var import_react2 = __toESM(require_react());
  var import_classnames = __toESM(require_classnames());

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // packages/icon-button-react/build/browser/index.js
  var import_react = __toESM(require_react());
  var IconSearch = () => /* @__PURE__ */ import_react.default.createElement("svg", {
    "data-testid": "jkl-search-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react.default.createElement("circle", {
    cx: "9.5",
    cy: "9.5",
    r: "8.5",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M23 23L15 15",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }));
  var IconClear = () => /* @__PURE__ */ import_react.default.createElement("svg", {
    "data-testid": "jkl-clear-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M3 21L21 3",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M3 3L21 21",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }));
  var IconCalendar = () => /* @__PURE__ */ import_react.default.createElement("svg", {
    "data-testid": "jkl-calendar-icon",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    stroke: "currentColor",
    d: "M.5 3.5h23v20H.5zM6.5 0v7M17.5 0v7"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    fill: "currentColor",
    d: "M4.5 9.5H6V11H4.5zM4.5 14H6v1.5H4.5zM4.5 18.5H6V20H4.5zM9 9.5h1.5V11H9zM9 14h1.5v1.5H9zM9 18.5h1.5V20H9zM13.5 9.5H15V11h-1.5zM13.5 14H15v1.5h-1.5zM13.5 18.5H15V20h-1.5zM18 9.5h1.5V11H18zM18 14h1.5v1.5H18zM18 18.5h1.5V20H18z"
  }));
  function getIcon(iconType) {
    switch (iconType) {
      case "clear":
        return /* @__PURE__ */ import_react.default.createElement(IconClear, null);
      case "search":
        return /* @__PURE__ */ import_react.default.createElement(IconSearch, null);
      case "calendar":
        return /* @__PURE__ */ import_react.default.createElement(IconCalendar, null);
      default:
        return null;
    }
  }
  var IconButton = ({
    iconType = "clear",
    buttonTitle,
    ...rest
  }) => {
    return /* @__PURE__ */ import_react.default.createElement("button", _extends({
      type: "button",
      title: buttonTitle,
      "data-testid": "jkl-icon-button",
      className: "jkl-icon-button"
    }, rest), /* @__PURE__ */ import_react.default.createElement("span", {
      "data-testid": "jkl-action-icon",
      className: "jkl-icon-button__icon"
    }, getIcon(iconType)), /* @__PURE__ */ import_react.default.createElement("span", {
      className: "jkl-sr-only"
    }, buttonTitle));
  };

  // packages/message-box-react/src/MessageBox.tsx
  var getIcon2 = (messageType) => {
    switch (messageType) {
      case "error":
        return /* @__PURE__ */ import_react2.default.createElement("svg", {
          className: "jkl-message-box__icon",
          "aria-hidden": true,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /* @__PURE__ */ import_react2.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM17.43 8.41421L13.6371 12.2071L17.43 16L16.0158 17.4142L12 13.6213L8.43001 17.4142L7.01579 16L10.8087 12.2071L7.01579 8.41421L8.43001 7L12 10.7929L16.0158 7L17.43 8.41421Z",
          fill: "currentColor"
        }));
      case "info":
        return /* @__PURE__ */ import_react2.default.createElement("svg", {
          className: "jkl-message-box__icon",
          "aria-hidden": true,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /* @__PURE__ */ import_react2.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24 12C24 18.6274 18.8503 24 12 24C5.59548 24 0 18.6274 0 12C0 5.37258 5.59548 0 12 0C18.8503 0 24 5.37258 24 12ZM11 17.4142V10H13.2229V17.4142H11.2229ZM12 8.5C12.9133 8.5 13.4729 7.94036 13.4729 7.25C13.4729 6.55964 12.9133 6 12 6C11.5325 6 10.9729 6.55964 10.9729 7.25C10.9729 7.94036 11.5325 8.5 12 8.5Z",
          fill: "currentColor"
        }));
      case "success":
        return /* @__PURE__ */ import_react2.default.createElement("svg", {
          className: "jkl-message-box__icon",
          "aria-hidden": true,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /* @__PURE__ */ import_react2.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM11.5503 16.7071L19.0503 9.20711L17.6361 7.79289L10.8432 14.5858L7.26909 11.0116L5.85486 12.4258L10.1361 16.7071L10.8432 17.4142L11.5503 16.7071Z",
          fill: "currentColor"
        }));
      case "warning":
        return /* @__PURE__ */ import_react2.default.createElement("svg", {
          className: "jkl-message-box__icon",
          "aria-hidden": true,
          viewBox: "2 3 20 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /* @__PURE__ */ import_react2.default.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.3588 20.5107L5.64157 20.5107C3.33259 20.5107 1.88917 18.0116 3.04301 16.0116L9.40163 4.98996C10.5561 2.98885 13.4443 2.98885 14.5987 4.98996L20.9574 16.0116C22.1112 18.0116 20.6678 20.5107 18.3588 20.5107ZM12.7515 13.6525L12.7515 7.63131L11.9988 7.63131L11.2462 7.63131L11.2462 13.6525L12.7515 13.6525ZM12.0012 15.0458C11.441 15.0458 10.9868 15.5 10.9868 16.0602C10.9868 16.6205 11.441 17.0747 12.0012 17.0747C12.5615 17.0747 13.0157 16.6205 13.0157 16.0602C13.0157 15.5 12.5615 15.0458 12.0012 15.0458Z",
          fill: "currentColor"
        }));
      default:
        return null;
    }
  };
  var getRole = (messageType) => {
    switch (messageType) {
      case "error":
      case "warning":
        return "alert";
      case "info":
      case "success":
        return "status";
      default:
        return void 0;
    }
  };
  function messageFactory(messageType) {
    const MessageBox = ({
      title,
      fullWidth,
      forceCompact,
      className = "",
      dismissed,
      dismissAction,
      children,
      role
    }) => {
      const componentClassName = (0, import_classnames.default)("jkl-message-box", "jkl-message-box--" + messageType, className, {
        "jkl-message-box--full": fullWidth,
        "jkl-message-box--compact": forceCompact,
        "jkl-message-box--dismissed": dismissed
      });
      const hasStringChild = import_react2.default.Children.map(children, (child) => typeof child === "string");
      const newChildren = hasStringChild?.[0] ? /* @__PURE__ */ import_react2.default.createElement("p", {
        className: "jkl-body"
      }, children) : children;
      return /* @__PURE__ */ import_react2.default.createElement("div", {
        className: componentClassName,
        role: role || getRole(messageType),
        "data-theme": "light"
      }, getIcon2(messageType), /* @__PURE__ */ import_react2.default.createElement("div", {
        className: "jkl-message-box__content"
      }, title !== void 0 && /* @__PURE__ */ import_react2.default.createElement("p", {
        className: "jkl-message-box__title"
      }, title), newChildren), dismissAction?.handleDismiss && /* @__PURE__ */ import_react2.default.createElement(IconButton, {
        className: "jkl-message-box__dismiss-button",
        iconType: "clear",
        buttonTitle: dismissAction.buttonTitle || "Lukk",
        onClick: dismissAction.handleDismiss
      }));
    };
    return MessageBox;
  }
  var InfoMessageBox = messageFactory("info");
  InfoMessageBox.displayName = "InfoMessageBox";
  var ErrorMessageBox = messageFactory("error");
  ErrorMessageBox.displayName = "ErrorMessageBox";
  var WarningMessageBox = messageFactory("warning");
  WarningMessageBox.displayName = "WarningMessageBox";
  var SuccessMessageBox = messageFactory("success");
  SuccessMessageBox.displayName = "SuccessMessageBox";

  // packages/message-box-react/src/FormErrorMessageBox.tsx
  var import_react36 = __toESM(require_react());
  var import_classnames2 = __toESM(require_classnames());

  // node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn
  } = import_tslib.default;

  // node_modules/framer-motion/dist/es/motion/index.mjs
  var React4 = __toESM(require_react(), 1);
  var import_react18 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/motion/features/use-features.mjs
  var React3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/utils/process.mjs
  var mockProcess = { env: { NODE_ENV: "production" } };
  var safeProcess = typeof process === "undefined" ? mockProcess : process;
  var process$1 = safeProcess;

  // node_modules/framer-motion/dist/es/motion/features/definitions.mjs
  var createDefinition = function(propNames) {
    return {
      isEnabled: function(props) {
        return propNames.some(function(name) {
          return !!props[name];
        });
      }
    };
  };
  var featureDefinitions = {
    measureLayout: createDefinition(["layout", "layoutId", "drag"]),
    animation: createDefinition([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
      "whileInView"
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
      "onPan",
      "onPanStart",
      "onPanSessionStart",
      "onPanEnd"
    ]),
    inView: createDefinition([
      "whileInView",
      "onViewportEnter",
      "onViewportLeave"
    ])
  };
  function loadFeatures(features) {
    for (var key in features) {
      if (features[key] === null)
        continue;
      if (key === "projectionNodeConstructor") {
        featureDefinitions.projectionNodeConstructor = features[key];
      } else {
        featureDefinitions[key].Component = features[key];
      }
    }
  }

  // node_modules/hey-listen/dist/hey-listen.es.js
  var warning = function() {
  };
  var invariant = function() {
  };
  if (true) {
    warning = function(check, message) {
      if (!check && typeof console !== "undefined") {
        console.warn(message);
      }
    };
    invariant = function(check, message) {
      if (!check) {
        throw new Error(message);
      }
    };
  }

  // node_modules/framer-motion/dist/es/context/LazyContext.mjs
  var import_react3 = __toESM(require_react(), 1);
  var LazyContext = (0, import_react3.createContext)({ strict: false });

  // node_modules/framer-motion/dist/es/motion/features/use-features.mjs
  var featureNames = Object.keys(featureDefinitions);
  var numFeatures = featureNames.length;
  function useFeatures(props, visualElement2, preloadedFeatures) {
    var features = [];
    var lazyContext = (0, import_react4.useContext)(LazyContext);
    if (!visualElement2)
      return null;
    if (process$1.env.NODE_ENV !== "production" && preloadedFeatures && lazyContext.strict) {
      invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (var i = 0; i < numFeatures; i++) {
      var name_1 = featureNames[i];
      var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
      if (isEnabled(props) && Component) {
        features.push(React3.createElement(Component, __assign({ key: name_1 }, props, { visualElement: visualElement2 })));
      }
    }
    return features;
  }

  // node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
  var import_react5 = __toESM(require_react(), 1);
  var MotionConfigContext = (0, import_react5.createContext)({
    transformPagePoint: function(p) {
      return p;
    },
    isStatic: false,
    reducedMotion: "never"
  });

  // node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
  var import_react6 = __toESM(require_react(), 1);
  var MotionContext = (0, import_react6.createContext)({});
  function useVisualElementContext() {
    return (0, import_react6.useContext)(MotionContext).visualElement;
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  var import_react10 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/context/PresenceContext.mjs
  var import_react7 = __toESM(require_react(), 1);
  var PresenceContext = (0, import_react7.createContext)(null);

  // node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  var import_react8 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/utils/is-browser.mjs
  var isBrowser = typeof document !== "undefined";

  // node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  var useIsomorphicLayoutEffect = isBrowser ? import_react8.useLayoutEffect : import_react8.useEffect;

  // node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs
  var import_react9 = __toESM(require_react(), 1);
  var prefersReducedMotion = { current: null };
  var hasDetected = false;
  function initPrefersReducedMotion() {
    hasDetected = true;
    if (!isBrowser)
      return;
    if (window.matchMedia) {
      var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
      var setReducedMotionPreferences = function() {
        return prefersReducedMotion.current = motionMediaQuery_1.matches;
      };
      motionMediaQuery_1.addListener(setReducedMotionPreferences);
      setReducedMotionPreferences();
    } else {
      prefersReducedMotion.current = false;
    }
  }
  function useReducedMotion() {
    !hasDetected && initPrefersReducedMotion();
    var _a = __read((0, import_react9.useState)(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
    return shouldReduceMotion;
  }
  function useReducedMotionConfig() {
    var reducedMotionPreference = useReducedMotion();
    var reducedMotion = (0, import_react9.useContext)(MotionConfigContext).reducedMotion;
    if (reducedMotion === "never") {
      return false;
    } else if (reducedMotion === "always") {
      return true;
    } else {
      return reducedMotionPreference;
    }
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  function useVisualElement(Component, visualState, props, createVisualElement) {
    var lazyContext = (0, import_react10.useContext)(LazyContext);
    var parent = useVisualElementContext();
    var presenceContext = (0, import_react10.useContext)(PresenceContext);
    var shouldReduceMotion = useReducedMotionConfig();
    var visualElementRef = (0, import_react10.useRef)(void 0);
    if (!createVisualElement)
      createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
      visualElementRef.current = createVisualElement(Component, {
        visualState,
        parent,
        props,
        presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
        blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
        shouldReduceMotion
      });
    }
    var visualElement2 = visualElementRef.current;
    useIsomorphicLayoutEffect(function() {
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
    });
    (0, import_react10.useEffect)(function() {
      var _a;
      (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    useIsomorphicLayoutEffect(function() {
      return function() {
        return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
      };
    }, []);
    return visualElement2;
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
  var import_react11 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
  function isRefObject(ref) {
    return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
  function useMotionRef(visualState, visualElement2, externalRef) {
    return (0, import_react11.useCallback)(function(instance) {
      var _a;
      instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
      if (visualElement2) {
        instance ? visualElement2.mount(instance) : visualElement2.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    }, [visualElement2]);
  }

  // node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  var import_react12 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/render/utils/variants.mjs
  function isVariantLabels(v) {
    return Array.isArray(v);
  }
  function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
  }
  function getCurrent(visualElement2) {
    var current = {};
    visualElement2.forEachValue(function(value, key) {
      return current[key] = value.get();
    });
    return current;
  }
  function getVelocity(visualElement2) {
    var velocity = {};
    visualElement2.forEachValue(function(value, key) {
      return velocity[key] = value.getVelocity();
    });
    return velocity;
  }
  function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) {
      currentValues = {};
    }
    if (currentVelocity === void 0) {
      currentVelocity = {};
    }
    if (typeof definition === "function") {
      definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    if (typeof definition === "string") {
      definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    if (typeof definition === "function") {
      definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
  }
  function resolveVariant(visualElement2, definition, custom) {
    var props = visualElement2.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity(visualElement2));
  }
  function checkIfControllingVariants(props) {
    var _a;
    return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
  }
  function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
  }

  // node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
  function getCurrentTreeVariants(props, context) {
    if (checkIfControllingVariants(props)) {
      var initial = props.initial, animate3 = props.animate;
      return {
        initial: initial === false || isVariantLabel(initial) ? initial : void 0,
        animate: isVariantLabel(animate3) ? animate3 : void 0
      };
    }
    return props.inherit !== false ? context : {};
  }

  // node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  function useCreateMotionContext(props) {
    var _a = getCurrentTreeVariants(props, (0, import_react12.useContext)(MotionContext)), initial = _a.initial, animate3 = _a.animate;
    return (0, import_react12.useMemo)(function() {
      return { initial, animate: animate3 };
    }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate3)]);
  }
  function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  }

  // node_modules/framer-motion/dist/es/utils/use-constant.mjs
  var import_react13 = __toESM(require_react(), 1);
  function useConstant(init) {
    var ref = (0, import_react13.useRef)(null);
    if (ref.current === null) {
      ref.current = init();
    }
    return ref.current;
  }

  // node_modules/framesync/dist/es/on-next-frame.mjs
  var defaultTimestep = 1 / 60 * 1e3;
  var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
  var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

  // node_modules/framesync/dist/es/create-render-step.mjs
  function createRenderStep(runNextFrame2) {
    let toRun = [];
    let toRunNextFrame = [];
    let numToRun = 0;
    let isProcessing2 = false;
    let flushNextFrame = false;
    const toKeepAlive = /* @__PURE__ */ new WeakSet();
    const step = {
      schedule: (callback, keepAlive = false, immediate = false) => {
        const addToCurrentFrame = immediate && isProcessing2;
        const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
        if (keepAlive)
          toKeepAlive.add(callback);
        if (buffer.indexOf(callback) === -1) {
          buffer.push(callback);
          if (addToCurrentFrame && isProcessing2)
            numToRun = toRun.length;
        }
        return callback;
      },
      cancel: (callback) => {
        const index = toRunNextFrame.indexOf(callback);
        if (index !== -1)
          toRunNextFrame.splice(index, 1);
        toKeepAlive.delete(callback);
      },
      process: (frameData) => {
        if (isProcessing2) {
          flushNextFrame = true;
          return;
        }
        isProcessing2 = true;
        [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
        toRunNextFrame.length = 0;
        numToRun = toRun.length;
        if (numToRun) {
          for (let i = 0; i < numToRun; i++) {
            const callback = toRun[i];
            callback(frameData);
            if (toKeepAlive.has(callback)) {
              step.schedule(callback);
              runNextFrame2();
            }
          }
        }
        isProcessing2 = false;
        if (flushNextFrame) {
          flushNextFrame = false;
          step.process(frameData);
        }
      }
    };
    return step;
  }

  // node_modules/framesync/dist/es/index.mjs
  var maxElapsed = 40;
  var useDefaultElapsed = true;
  var runNextFrame = false;
  var isProcessing = false;
  var frame = {
    delta: 0,
    timestamp: 0
  };
  var stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender"
  ];
  var steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => runNextFrame = true);
    return acc;
  }, {});
  var sync = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        startLoop();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  var cancelSync = stepsOrder.reduce((acc, key) => {
    acc[key] = steps[key].cancel;
    return acc;
  }, {});
  var flushSync = stepsOrder.reduce((acc, key) => {
    acc[key] = () => steps[key].process(frame);
    return acc;
  }, {});
  var processStep = (stepId) => steps[stepId].process(frame);
  var processFrame = (timestamp) => {
    runNextFrame = false;
    frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
      useDefaultElapsed = false;
      onNextFrame(processFrame);
    }
  };
  var startLoop = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
      onNextFrame(processFrame);
  };
  var getFrameData = () => frame;
  var es_default = sync;

  // node_modules/popmotion/dist/es/utils/clamp.mjs
  var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

  // node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
  var safeMin = 1e-3;
  var minDuration = 0.01;
  var maxDuration = 10;
  var minDamping = 0.05;
  var maxDamping = 1;
  function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
    let envelope;
    let derivative;
    warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration, duration / 1e3);
    if (dampingRatio < 1) {
      envelope = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const a2 = exponentialDecay - velocity;
        const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
        const c2 = Math.exp(-delta);
        return safeMin - a2 / b2 * c2;
      };
      derivative = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const d = delta * velocity + velocity;
        const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        const f = Math.exp(-delta);
        const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d - e) * f) / g;
      };
    } else {
      envelope = (undampedFreq2) => {
        const a2 = Math.exp(-undampedFreq2 * duration);
        const b2 = (undampedFreq2 - velocity) * duration + 1;
        return -safeMin + a2 * b2;
      };
      derivative = (undampedFreq2) => {
        const a2 = Math.exp(-undampedFreq2 * duration);
        const b2 = (velocity - undampedFreq2) * (duration * duration);
        return a2 * b2;
      };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1e3;
    if (isNaN(undampedFreq)) {
      return {
        stiffness: 100,
        damping: 10,
        duration
      };
    } else {
      const stiffness = Math.pow(undampedFreq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration
      };
    }
  }
  var rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
      result = result - envelope(result) / derivative(result);
    }
    return result;
  }
  function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }

  // node_modules/popmotion/dist/es/animations/generators/spring.mjs
  var durationKeys = ["duration", "bounce"];
  var physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== void 0);
  }
  function getSpringOptions(options) {
    let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
      const derived = findSpring(options);
      springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
      springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
  }
  function spring(_a) {
    var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
    const state = { done: false, value: from };
    let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
    let resolveSpring = zero;
    let resolveVelocity = zero;
    function createSpring() {
      const initialVelocity = velocity ? -(velocity / 1e3) : 0;
      const initialDelta = to - from;
      const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
      const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
      if (restDelta === void 0) {
        restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
      }
      if (dampingRatio < 1) {
        const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        resolveSpring = (t) => {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
          return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
        };
        resolveVelocity = (t) => {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
          return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
        };
      } else if (dampingRatio === 1) {
        resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
      } else {
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
          const freqForT = Math.min(dampedAngularFreq * t, 300);
          return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
      }
    }
    createSpring();
    return {
      next: (t) => {
        const current = resolveSpring(t);
        if (!isResolvedFromDuration) {
          const currentVelocity = resolveVelocity(t) * 1e3;
          const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
          const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
          state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        } else {
          state.done = t >= duration;
        }
        state.value = state.done ? to : current;
        return state;
      },
      flipTarget: () => {
        velocity = -velocity;
        [from, to] = [to, from];
        createSpring();
      }
    };
  }
  spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
  var zero = (_t) => 0;

  // node_modules/popmotion/dist/es/utils/progress.mjs
  var progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };

  // node_modules/popmotion/dist/es/utils/mix.mjs
  var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;

  // node_modules/style-value-types/dist/es/utils.mjs
  var clamp2 = (min, max) => (v) => Math.max(Math.min(v, max), min);
  var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
  var floatRegex = /(-)?([\d]*\.?[\d])+/g;
  var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
  var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
  function isString(v) {
    return typeof v === "string";
  }

  // node_modules/style-value-types/dist/es/numbers/index.mjs
  var number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v
  };
  var alpha = Object.assign(Object.assign({}, number), { transform: clamp2(0, 1) });
  var scale = Object.assign(Object.assign({}, number), { default: 1 });

  // node_modules/style-value-types/dist/es/numbers/units.mjs
  var createUnitType = (unit) => ({
    test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`
  });
  var degrees = createUnitType("deg");
  var percent = createUnitType("%");
  var px = createUnitType("px");
  var vh = createUnitType("vh");
  var vw = createUnitType("vw");
  var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

  // node_modules/style-value-types/dist/es/color/utils.mjs
  var isColorString = (type, testProp) => (v) => {
    return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
  };
  var splitColor = (aName, bName, cName) => (v) => {
    if (!isString(v))
      return v;
    const [a2, b2, c2, alpha2] = v.match(floatRegex);
    return {
      [aName]: parseFloat(a2),
      [bName]: parseFloat(b2),
      [cName]: parseFloat(c2),
      alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
    };
  };

  // node_modules/style-value-types/dist/es/color/hsla.mjs
  var hsla = {
    test: isColorString("hsl", "hue"),
    parse: splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
      return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };

  // node_modules/style-value-types/dist/es/color/rgba.mjs
  var clampRgbUnit = clamp2(0, 255);
  var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
  var rgba = {
    test: isColorString("rgb", "red"),
    parse: splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
  };

  // node_modules/style-value-types/dist/es/color/hex.mjs
  function parseHex(v) {
    let r = "";
    let g = "";
    let b2 = "";
    let a2 = "";
    if (v.length > 5) {
      r = v.substr(1, 2);
      g = v.substr(3, 2);
      b2 = v.substr(5, 2);
      a2 = v.substr(7, 2);
    } else {
      r = v.substr(1, 1);
      g = v.substr(2, 1);
      b2 = v.substr(3, 1);
      a2 = v.substr(4, 1);
      r += r;
      g += g;
      b2 += b2;
      a2 += a2;
    }
    return {
      red: parseInt(r, 16),
      green: parseInt(g, 16),
      blue: parseInt(b2, 16),
      alpha: a2 ? parseInt(a2, 16) / 255 : 1
    };
  }
  var hex = {
    test: isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };

  // node_modules/style-value-types/dist/es/color/index.mjs
  var color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
      if (rgba.test(v)) {
        return rgba.parse(v);
      } else if (hsla.test(v)) {
        return hsla.parse(v);
      } else {
        return hex.parse(v);
      }
    },
    transform: (v) => {
      return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    }
  };

  // node_modules/style-value-types/dist/es/complex/index.mjs
  var colorToken = "${c}";
  var numberToken = "${n}";
  function test(v) {
    var _a, _b, _c, _d;
    return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
  }
  function analyse(v) {
    if (typeof v === "number")
      v = `${v}`;
    const values = [];
    let numColors = 0;
    const colors = v.match(colorRegex);
    if (colors) {
      numColors = colors.length;
      v = v.replace(colorRegex, colorToken);
      values.push(...colors.map(color.parse));
    }
    const numbers = v.match(floatRegex);
    if (numbers) {
      v = v.replace(floatRegex, numberToken);
      values.push(...numbers.map(number.parse));
    }
    return { values, numColors, tokenised: v };
  }
  function parse(v) {
    return analyse(v).values;
  }
  function createTransformer(v) {
    const { values, numColors, tokenised } = analyse(v);
    const numValues = values.length;
    return (v2) => {
      let output = tokenised;
      for (let i = 0; i < numValues; i++) {
        output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
      }
      return output;
    };
  }
  var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
  function getAnimatableNone(v) {
    const parsed = parse(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
  }
  var complex = { test, parse, createTransformer, getAnimatableNone };

  // node_modules/style-value-types/dist/es/complex/filter.mjs
  var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function applyDefaultFilter(v) {
    let [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
      return v;
    const [number2] = value.match(floatRegex) || [];
    if (!number2)
      return v;
    const unit = value.replace(number2, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value)
      defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
  }
  var functionRegex = /([a-z-]*)\(.*?\)/g;
  var filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  } });

  // node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
  function hueToRgb(p, q, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
      red = green = blue = lightness;
    } else {
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      red = hueToRgb(p, q, hue + 1 / 3);
      green = hueToRgb(p, q, hue);
      blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: alpha2
    };
  }

  // node_modules/popmotion/dist/es/utils/mix-color.mjs
  var mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = (v) => colorTypes.find((type) => type.test(v));
  var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
  var mixColor = (from, to) => {
    let fromColorType = getColorType(from);
    let toColorType = getColorType(to);
    invariant(!!fromColorType, notAnimatable(from));
    invariant(!!toColorType, notAnimatable(to));
    let fromColor = fromColorType.parse(from);
    let toColor = toColorType.parse(to);
    if (fromColorType === hsla) {
      fromColor = hslaToRgba(fromColor);
      fromColorType = rgba;
    }
    if (toColorType === hsla) {
      toColor = hslaToRgba(toColor);
      toColorType = rgba;
    }
    const blended = Object.assign({}, fromColor);
    return (v) => {
      for (const key in blended) {
        if (key !== "alpha") {
          blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
        }
      }
      blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
      return fromColorType.transform(blended);
    };
  };

  // node_modules/popmotion/dist/es/utils/inc.mjs
  var isNum = (v) => typeof v === "number";

  // node_modules/popmotion/dist/es/utils/pipe.mjs
  var combineFunctions = (a2, b2) => (v) => b2(a2(v));
  var pipe = (...transformers) => transformers.reduce(combineFunctions);

  // node_modules/popmotion/dist/es/utils/mix-complex.mjs
  function getMixer(origin, target) {
    if (isNum(origin)) {
      return (v) => mix(origin, target, v);
    } else if (color.test(origin)) {
      return mixColor(origin, target);
    } else {
      return mixComplex(origin, target);
    }
  }
  var mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
      for (let i = 0; i < numValues; i++) {
        output[i] = blendValue[i](v);
      }
      return output;
    };
  };
  var mixObject = (origin, target) => {
    const output = Object.assign(Object.assign({}, origin), target);
    const blendValue = {};
    for (const key in output) {
      if (origin[key] !== void 0 && target[key] !== void 0) {
        blendValue[key] = getMixer(origin[key], target[key]);
      }
    }
    return (v) => {
      for (const key in blendValue) {
        output[key] = blendValue[key](v);
      }
      return output;
    };
  };
  function analyse2(value) {
    const parsed = complex.parse(value);
    const numValues = parsed.length;
    let numNumbers = 0;
    let numRGB = 0;
    let numHSL = 0;
    for (let i = 0; i < numValues; i++) {
      if (numNumbers || typeof parsed[i] === "number") {
        numNumbers++;
      } else {
        if (parsed[i].hue !== void 0) {
          numHSL++;
        } else {
          numRGB++;
        }
      }
    }
    return { parsed, numNumbers, numRGB, numHSL };
  }
  var mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyse2(origin);
    const targetStats = analyse2(target);
    const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
      return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
    } else {
      warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
      return (p) => `${p > 0 ? target : origin}`;
    }
  };

  // node_modules/popmotion/dist/es/utils/interpolate.mjs
  var mixNumber = (from, to) => (p) => mix(from, to, p);
  function detectMixerFactory(v) {
    if (typeof v === "number") {
      return mixNumber;
    } else if (typeof v === "string") {
      if (color.test(v)) {
        return mixColor;
      } else {
        return mixComplex;
      }
    } else if (Array.isArray(v)) {
      return mixArray;
    } else if (typeof v === "object") {
      return mixObject;
    }
  }
  function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
      let mixer = mixerFactory(output[i], output[i + 1]);
      if (ease) {
        const easingFunction = Array.isArray(ease) ? ease[i] : ease;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function fastInterpolate([from, to], [mixer]) {
    return (v) => mixer(progress(from, to, v));
  }
  function slowInterpolate(input, mixers) {
    const inputLength = input.length;
    const lastInputIndex = inputLength - 1;
    return (v) => {
      let mixerIndex = 0;
      let foundMixerIndex = false;
      if (v <= input[0]) {
        foundMixerIndex = true;
      } else if (v >= input[lastInputIndex]) {
        mixerIndex = lastInputIndex - 1;
        foundMixerIndex = true;
      }
      if (!foundMixerIndex) {
        let i = 1;
        for (; i < inputLength; i++) {
          if (input[i] > v || i === lastInputIndex) {
            break;
          }
        }
        mixerIndex = i - 1;
      }
      const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
      return mixers[mixerIndex](progressInRange);
    };
  }
  function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length");
    invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
    if (input[0] > input[inputLength - 1]) {
      input = [].concat(input);
      output = [].concat(output);
      input.reverse();
      output.reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
    return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
  }

  // node_modules/popmotion/dist/es/easing/utils.mjs
  var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
  var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  var createExpoIn = (power) => (p) => Math.pow(p, power);
  var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
  var createAnticipate = (power) => {
    const backEasing = createBackIn(power);
    return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };

  // node_modules/popmotion/dist/es/easing/index.mjs
  var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
  var BOUNCE_FIRST_THRESHOLD = 4 / 11;
  var BOUNCE_SECOND_THRESHOLD = 8 / 11;
  var BOUNCE_THIRD_THRESHOLD = 9 / 10;
  var linear = (p) => p;
  var easeIn = createExpoIn(2);
  var easeOut = reverseEasing(easeIn);
  var easeInOut = mirrorEasing(easeIn);
  var circIn = (p) => 1 - Math.sin(Math.acos(p));
  var circOut = reverseEasing(circIn);
  var circInOut = mirrorEasing(circOut);
  var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
  var backOut = reverseEasing(backIn);
  var backInOut = mirrorEasing(backIn);
  var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
  var ca = 4356 / 361;
  var cb = 35442 / 1805;
  var cc = 16061 / 1805;
  var bounceOut = (p) => {
    if (p === 1 || p === 0)
      return p;
    const p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
  };
  var bounceIn = reverseEasing(bounceOut);
  var bounceInOut = (p) => p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;

  // node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
  function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
  }
  function defaultOffset(values) {
    const numValues = values.length;
    return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
  }
  function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
  }
  function keyframes({ from = 0, to = 1, ease, offset, duration = 300 }) {
    const state = { done: false, value: from };
    const values = Array.isArray(to) ? to : [from, to];
    const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
    function createInterpolator() {
      return interpolate(times, values, {
        ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
      });
    }
    let interpolator = createInterpolator();
    return {
      next: (t) => {
        state.value = interpolator(t);
        state.done = t >= duration;
        return state;
      },
      flipTarget: () => {
        values.reverse();
        interpolator = createInterpolator();
      }
    };
  }

  // node_modules/popmotion/dist/es/animations/generators/decay.mjs
  function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
    const state = { done: false, value: from };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal)
      amplitude = target - from;
    return {
      next: (t) => {
        const delta = -amplitude * Math.exp(-t / timeConstant);
        state.done = !(delta > restDelta || delta < -restDelta);
        state.value = state.done ? target : target + delta;
        return state;
      },
      flipTarget: () => {
      }
    };
  }

  // node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
  var types = { keyframes, spring, decay };
  function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
      return keyframes;
    } else if (types[config.type]) {
      return types[config.type];
    }
    const keys = new Set(Object.keys(config));
    if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
      return keyframes;
    } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
      return spring;
    }
    return keyframes;
  }

  // node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
  function loopElapsed(elapsed, duration, delay = 0) {
    return elapsed - duration - delay;
  }
  function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
    return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
  }
  function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
  }

  // node_modules/popmotion/dist/es/animations/index.mjs
  var framesync = (update) => {
    const passTimestamp = ({ delta }) => update(delta);
    return {
      start: () => es_default.update(passTimestamp, true),
      stop: () => cancelSync.update(passTimestamp)
    };
  };
  function animate(_a) {
    var _b, _c;
    var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let { to } = options;
    let driverControls;
    let repeatCount = 0;
    let computedDuration = options.duration;
    let latest;
    let isComplete = false;
    let isForwardPlayback = true;
    let interpolateFromNumber;
    const animator = detectAnimationFromOptions(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
      interpolateFromNumber = interpolate([0, 100], [from, to], {
        clamp: false
      });
      from = 0;
      to = 100;
    }
    const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
    function repeat() {
      repeatCount++;
      if (repeatType === "reverse") {
        isForwardPlayback = repeatCount % 2 === 0;
        elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
      } else {
        elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
        if (repeatType === "mirror")
          animation.flipTarget();
      }
      isComplete = false;
      onRepeat && onRepeat();
    }
    function complete() {
      driverControls.stop();
      onComplete && onComplete();
    }
    function update(delta) {
      if (!isForwardPlayback)
        delta = -delta;
      elapsed += delta;
      if (!isComplete) {
        const state = animation.next(Math.max(0, elapsed));
        latest = state.value;
        if (interpolateFromNumber)
          latest = interpolateFromNumber(latest);
        isComplete = isForwardPlayback ? state.done : elapsed <= 0;
      }
      onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
      if (isComplete) {
        if (repeatCount === 0)
          computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
        if (repeatCount < repeatMax) {
          hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
        } else {
          complete();
        }
      }
    }
    function play() {
      onPlay === null || onPlay === void 0 ? void 0 : onPlay();
      driverControls = driver(update);
      driverControls.start();
    }
    autoplay && play();
    return {
      stop: () => {
        onStop === null || onStop === void 0 ? void 0 : onStop();
        driverControls.stop();
      }
    };
  }

  // node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
  function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1e3 / frameDuration) : 0;
  }

  // node_modules/popmotion/dist/es/animations/inertia.mjs
  function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
    let currentAnimation;
    function isOutOfBounds(v) {
      return min !== void 0 && v < min || max !== void 0 && v > max;
    }
    function boundaryNearest(v) {
      if (min === void 0)
        return max;
      if (max === void 0)
        return min;
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation2(options) {
      currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
      currentAnimation = animate(Object.assign(Object.assign({}, options), {
        driver,
        onUpdate: (v) => {
          var _a;
          onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
          (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
        },
        onComplete,
        onStop
      }));
    }
    function startSpring(options) {
      startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
    }
    if (isOutOfBounds(from)) {
      startSpring({ from, velocity, to: boundaryNearest(from) });
    } else {
      let target = power * velocity + from;
      if (typeof modifyTarget !== "undefined")
        target = modifyTarget(target);
      const boundary = boundaryNearest(target);
      const heading = boundary === min ? -1 : 1;
      let prev;
      let current;
      const checkBoundary = (v) => {
        prev = current;
        current = v;
        velocity = velocityPerSecond(v - prev, getFrameData().delta);
        if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
          startSpring({ from: v, to: boundary, velocity });
        }
      };
      startAnimation2({
        type: "decay",
        from,
        velocity,
        timeConstant,
        power,
        restDelta,
        modifyTarget,
        onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
      });
    }
    return {
      stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
    };
  }

  // node_modules/popmotion/dist/es/utils/is-point.mjs
  var isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");

  // node_modules/popmotion/dist/es/utils/is-point-3d.mjs
  var isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");

  // node_modules/popmotion/dist/es/utils/distance.mjs
  var distance1D = (a2, b2) => Math.abs(a2 - b2);
  function distance(a2, b2) {
    if (isNum(a2) && isNum(b2)) {
      return distance1D(a2, b2);
    } else if (isPoint(a2) && isPoint(b2)) {
      const xDelta = distance1D(a2.x, b2.x);
      const yDelta = distance1D(a2.y, b2.y);
      const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
      return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
  }

  // node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
  var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  var b = (a1, a2) => 3 * a2 - 6 * a1;
  var c = (a1) => 3 * a1;
  var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  var subdivisionPrecision = 1e-7;
  var subdivisionMaxIterations = 10;
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
  }
  var newtonIterations = 8;
  var newtonMinSlope = 1e-3;
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < newtonIterations; ++i) {
      const currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return linear;
    const sampleValues = new Float32Array(kSplineTableSize);
    for (let i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
      let intervalStart = 0;
      let currentSample = 1;
      const lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      const guessForT = intervalStart + dist * kSampleStepSize;
      const initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= newtonMinSlope) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  }

  // node_modules/framer-motion/dist/es/utils/array.mjs
  function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
  }
  function removeItem(arr, item) {
    var index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
  }

  // node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
  var SubscriptionManager = function() {
    function SubscriptionManager2() {
      this.subscriptions = [];
    }
    SubscriptionManager2.prototype.add = function(handler) {
      var _this = this;
      addUniqueItem(this.subscriptions, handler);
      return function() {
        return removeItem(_this.subscriptions, handler);
      };
    };
    SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
      var numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a2, b2, c2);
      } else {
        for (var i = 0; i < numSubscriptions; i++) {
          var handler = this.subscriptions[i];
          handler && handler(a2, b2, c2);
        }
      }
    };
    SubscriptionManager2.prototype.getSize = function() {
      return this.subscriptions.length;
    };
    SubscriptionManager2.prototype.clear = function() {
      this.subscriptions.length = 0;
    };
    return SubscriptionManager2;
  }();

  // node_modules/framer-motion/dist/es/value/index.mjs
  var isFloat = function(value) {
    return !isNaN(parseFloat(value));
  };
  var MotionValue = function() {
    function MotionValue2(init) {
      var _this = this;
      this.timeDelta = 0;
      this.lastUpdated = 0;
      this.updateSubscribers = new SubscriptionManager();
      this.velocityUpdateSubscribers = new SubscriptionManager();
      this.renderSubscribers = new SubscriptionManager();
      this.canTrackVelocity = false;
      this.updateAndNotify = function(v, render) {
        if (render === void 0) {
          render = true;
        }
        _this.prev = _this.current;
        _this.current = v;
        var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
        if (_this.lastUpdated !== timestamp) {
          _this.timeDelta = delta;
          _this.lastUpdated = timestamp;
          es_default.postRender(_this.scheduleVelocityCheck);
        }
        if (_this.prev !== _this.current) {
          _this.updateSubscribers.notify(_this.current);
        }
        if (_this.velocityUpdateSubscribers.getSize()) {
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
        if (render) {
          _this.renderSubscribers.notify(_this.current);
        }
      };
      this.scheduleVelocityCheck = function() {
        return es_default.postRender(_this.velocityCheck);
      };
      this.velocityCheck = function(_a) {
        var timestamp = _a.timestamp;
        if (timestamp !== _this.lastUpdated) {
          _this.prev = _this.current;
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
      };
      this.hasAnimated = false;
      this.prev = this.current = init;
      this.canTrackVelocity = isFloat(this.current);
    }
    MotionValue2.prototype.onChange = function(subscription) {
      return this.updateSubscribers.add(subscription);
    };
    MotionValue2.prototype.clearListeners = function() {
      this.updateSubscribers.clear();
    };
    MotionValue2.prototype.onRenderRequest = function(subscription) {
      subscription(this.get());
      return this.renderSubscribers.add(subscription);
    };
    MotionValue2.prototype.attach = function(passiveEffect) {
      this.passiveEffect = passiveEffect;
    };
    MotionValue2.prototype.set = function(v, render) {
      if (render === void 0) {
        render = true;
      }
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v, render);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    };
    MotionValue2.prototype.get = function() {
      return this.current;
    };
    MotionValue2.prototype.getPrevious = function() {
      return this.prev;
    };
    MotionValue2.prototype.getVelocity = function() {
      return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
    };
    MotionValue2.prototype.start = function(animation) {
      var _this = this;
      this.stop();
      return new Promise(function(resolve) {
        _this.hasAnimated = true;
        _this.stopAnimation = animation(resolve);
      }).then(function() {
        return _this.clearAnimation();
      });
    };
    MotionValue2.prototype.stop = function() {
      if (this.stopAnimation)
        this.stopAnimation();
      this.clearAnimation();
    };
    MotionValue2.prototype.isAnimating = function() {
      return !!this.stopAnimation;
    };
    MotionValue2.prototype.clearAnimation = function() {
      this.stopAnimation = null;
    };
    MotionValue2.prototype.destroy = function() {
      this.updateSubscribers.clear();
      this.renderSubscribers.clear();
      this.stop();
    };
    return MotionValue2;
  }();
  function motionValue(init) {
    return new MotionValue(init);
  }

  // node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
  var isMotionValue = function(value) {
    return Boolean(value !== null && typeof value === "object" && value.getVelocity);
  };

  // node_modules/framer-motion/dist/es/utils/time-conversion.mjs
  var secondsToMilliseconds = function(seconds) {
    return seconds * 1e3;
  };

  // node_modules/framer-motion/dist/es/animation/utils/easing.mjs
  var easingLookup = {
    linear,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate,
    bounceIn,
    bounceInOut,
    bounceOut
  };
  var easingDefinitionToFunction = function(definition) {
    if (Array.isArray(definition)) {
      invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
      var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
      return cubicBezier(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
      invariant(easingLookup[definition] !== void 0, "Invalid easing type '".concat(definition, "'"));
      return easingLookup[definition];
    }
    return definition;
  };
  var isEasingArray = function(ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
  };

  // node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
  var isAnimatable = function(key, value) {
    if (key === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
      return true;
    }
    return false;
  };

  // node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
  var isKeyframesTarget = function(v) {
    return Array.isArray(v);
  };

  // node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
  var underDampedSpring = function() {
    return {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restSpeed: 10
    };
  };
  var criticallyDampedSpring = function(to) {
    return {
      type: "spring",
      stiffness: 550,
      damping: to === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
    };
  };
  var linearTween = function() {
    return {
      type: "keyframes",
      ease: "linear",
      duration: 0.3
    };
  };
  var keyframes2 = function(values) {
    return {
      type: "keyframes",
      duration: 0.8,
      values
    };
  };
  var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring
  };
  var getDefaultTransition = function(valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
      transitionFactory = keyframes2;
    } else {
      transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return __assign({ to }, transitionFactory(to));
  };

  // node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
  var int = __assign(__assign({}, number), { transform: Math.round });

  // node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
  var numberValueTypes = {
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    zIndex: int,
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  };

  // node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
  var defaultValueTypes = __assign(__assign({}, numberValueTypes), {
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter
  });
  var getDefaultValueType = function(key) {
    return defaultValueTypes[key];
  };

  // node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
  function getAnimatableNone2(key, value) {
    var _a;
    var defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
      defaultValueType = complex;
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
  }

  // node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
  var instantAnimationState = {
    current: false
  };

  // node_modules/framer-motion/dist/es/utils/resolve-value.mjs
  var isCustomValue = function(v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
  };
  var resolveFinalValueInKeyframes = function(v) {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  };

  // node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
  function isTransitionDefined(_a) {
    _a.when;
    _a.delay;
    _a.delayChildren;
    _a.staggerChildren;
    _a.staggerDirection;
    _a.repeat;
    _a.repeatType;
    _a.repeatDelay;
    _a.from;
    var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
  }
  var legacyRepeatWarning = false;
  function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = __assign({}, transition);
    if (times)
      options["offset"] = times;
    if (transition.duration)
      options["duration"] = secondsToMilliseconds(transition.duration);
    if (transition.repeatDelay)
      options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
    if (ease) {
      options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
    }
    if (transition.type === "tween")
      options.type = "keyframes";
    if (yoyo || loop || flip) {
      warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
      legacyRepeatWarning = true;
      if (yoyo) {
        options.repeatType = "reverse";
      } else if (loop) {
        options.repeatType = "loop";
      } else if (flip) {
        options.repeatType = "mirror";
      }
      options.repeat = loop || yoyo || flip || transition.repeat;
    }
    if (transition.type !== "spring")
      options.type = "keyframes";
    return options;
  }
  function getDelayFromTransition(transition, key) {
    var _a, _b;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
  }
  function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
      options.to = __spreadArray([], __read(options.to), false);
      options.to[0] = options.from;
    }
    return options;
  }
  function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
      (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
    }
    hydrateKeyframes(options);
    if (!isTransitionDefined(transition)) {
      transition = __assign(__assign({}, transition), getDefaultTransition(key, options.to));
    }
    return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition));
  }
  function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = isAnimatable(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
      origin = getAnimatableNone2(key, target);
    } else if (isZero(origin) && typeof target === "string") {
      origin = getZeroUnit(target);
    } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
      target = getZeroUnit(origin);
    }
    var isOriginAnimatable = isAnimatable(key, origin);
    warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, ' from "').concat(origin, '" to "').concat(target, '". ').concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));
    function start() {
      var options = {
        from: origin,
        to: target,
        velocity: value.getVelocity(),
        onComplete,
        onUpdate: function(v) {
          return value.set(v);
        }
      };
      return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign(__assign({}, options), valueTransition)) : animate(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v) {
        var _a2;
        options.onUpdate(v);
        (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
      }, onComplete: function() {
        var _a2;
        options.onComplete();
        (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
      } }));
    }
    function set() {
      var _a2, _b;
      var finalTarget = resolveFinalValueInKeyframes(target);
      value.set(finalTarget);
      onComplete();
      (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
      (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
      return { stop: function() {
      } };
    }
    return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
  }
  function isZero(value) {
    return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
  }
  function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
  }
  function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
  }
  function startAnimation(key, value, target, transition) {
    if (transition === void 0) {
      transition = {};
    }
    if (instantAnimationState.current) {
      transition = { type: false };
    }
    return value.start(function(onComplete) {
      var delayTimer;
      var controls;
      var animation = getAnimation(key, value, target, transition, onComplete);
      var delay = getDelayFromTransition(transition, key);
      var start = function() {
        return controls = animation();
      };
      if (delay) {
        delayTimer = window.setTimeout(start, secondsToMilliseconds(delay));
      } else {
        start();
      }
      return function() {
        clearTimeout(delayTimer);
        controls === null || controls === void 0 ? void 0 : controls.stop();
      };
    });
  }

  // node_modules/framer-motion/dist/es/animation/animate.mjs
  function animate2(from, to, transition) {
    if (transition === void 0) {
      transition = {};
    }
    var value = isMotionValue(from) ? from : motionValue(from);
    startAnimation("", value, to, transition);
    return {
      stop: function() {
        return value.stop();
      },
      isAnimating: function() {
        return value.isAnimating();
      }
    };
  }

  // node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
  var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  var numBorders = borders.length;
  var asNumber = function(value) {
    return typeof value === "string" ? parseFloat(value) : value;
  };
  var isPx = function(value) {
    return typeof value === "number" || px.test(value);
  };
  function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
    var _a, _b, _c, _d;
    if (shouldCrossfadeOpacity) {
      target.opacity = mix(0, (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress2));
      target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress2));
    } else if (isOnlyMember) {
      target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress2);
    }
    for (var i = 0; i < numBorders; i++) {
      var borderLabel = "border".concat(borders[i], "Radius");
      var followRadius = getRadius(follow, borderLabel);
      var leadRadius = getRadius(lead, borderLabel);
      if (followRadius === void 0 && leadRadius === void 0)
        continue;
      followRadius || (followRadius = 0);
      leadRadius || (leadRadius = 0);
      var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
      if (canMix) {
        target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
        if (percent.test(leadRadius) || percent.test(followRadius)) {
          target[borderLabel] += "%";
        }
      } else {
        target[borderLabel] = leadRadius;
      }
    }
    if (follow.rotate || lead.rotate) {
      target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
    }
  }
  function getRadius(values, radiusName) {
    var _a;
    return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
  }
  var easeCrossfadeIn = compress(0, 0.5, circOut);
  var easeCrossfadeOut = compress(0.5, 0.95, linear);
  function compress(min, max, easing) {
    return function(p) {
      if (p < min)
        return 0;
      if (p > max)
        return 1;
      return easing(progress(min, max, p));
    };
  }

  // node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
  function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
  }
  function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
  }

  // node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
  function isIdentityScale(scale2) {
    return scale2 === void 0 || scale2 === 1;
  }
  function hasScale(_a) {
    var scale2 = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
    return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
  }
  function hasTransform(values) {
    return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
  }
  function hasTranslate(value) {
    return value && value !== "0%";
  }

  // node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
  function scalePoint(point, scale2, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale2 * distanceFromOrigin;
    return originPoint + scaled;
  }
  function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
    if (boxScale !== void 0) {
      point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale2, originPoint) + translate;
  }
  function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
    if (translate === void 0) {
      translate = 0;
    }
    if (scale2 === void 0) {
      scale2 = 1;
    }
    axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
    var _a, _b;
    if (isSharedTransition === void 0) {
      isSharedTransition = false;
    }
    var treeLength = treePath.length;
    if (!treeLength)
      return;
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for (var i = 0; i < treeLength; i++) {
      node = treePath[i];
      delta = node.projectionDelta;
      if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
        continue;
      if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
        transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
      }
      if (delta) {
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        applyBoxDelta(box, delta);
      }
      if (isSharedTransition && hasTransform(node.latestValues)) {
        transformBox(box, node.latestValues);
      }
    }
  }
  function translateAxis(axis, distance2) {
    axis.min = axis.min + distance2;
    axis.max = axis.max + distance2;
  }
  function transformAxis(axis, transforms, _a) {
    var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
    var originPoint = mix(axis.min, axis.max, axisOrigin);
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
  }
  var xKeys = ["x", "scaleX", "originX"];
  var yKeys = ["y", "scaleY", "originY"];
  function transformBox(box, transform) {
    transformAxis(box.x, transform, xKeys);
    transformAxis(box.y, transform, yKeys);
  }

  // node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
  function calcLength(axis) {
    return axis.max - axis.min;
  }
  function isNear(value, target, maxDistance) {
    if (target === void 0) {
      target = 0;
    }
    if (maxDistance === void 0) {
      maxDistance = 0.01;
    }
    return distance(value, target) < maxDistance;
  }
  function calcAxisDelta(delta, source, target, origin) {
    if (origin === void 0) {
      origin = 0.5;
    }
    delta.origin = origin;
    delta.originPoint = mix(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
      delta.scale = 1;
    delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
      delta.translate = 0;
  }
  function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
    calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
  }
  function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
  }
  function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
  }
  function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
  }
  function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
  }

  // node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
  function removePointDelta(point, translate, scale2, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale2, originPoint);
    if (boxScale !== void 0) {
      point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
  }
  function removeAxisDelta(axis, translate, scale2, origin, boxScale, originAxis, sourceAxis) {
    if (translate === void 0) {
      translate = 0;
    }
    if (scale2 === void 0) {
      scale2 = 1;
    }
    if (origin === void 0) {
      origin = 0.5;
    }
    if (originAxis === void 0) {
      originAxis = axis;
    }
    if (sourceAxis === void 0) {
      sourceAxis = axis;
    }
    if (percent.test(translate)) {
      translate = parseFloat(translate);
      var relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
      translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
      return;
    var originPoint = mix(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
      originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
    var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
  }
  var xKeys2 = ["x", "scaleX", "originX"];
  var yKeys2 = ["y", "scaleY", "originY"];
  function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
    removeAxisTransforms(box.y, transforms, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
  }

  // node_modules/framer-motion/dist/es/projection/geometry/models.mjs
  var createAxisDelta = function() {
    return {
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0
    };
  };
  var createDelta = function() {
    return {
      x: createAxisDelta(),
      y: createAxisDelta()
    };
  };
  var createAxis = function() {
    return { min: 0, max: 0 };
  };
  var createBox = function() {
    return {
      x: createAxis(),
      y: createAxis()
    };
  };

  // node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
  function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
  }
  function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
  }
  function boxEquals(a2, b2) {
    return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
  }

  // node_modules/framer-motion/dist/es/projection/shared/stack.mjs
  var NodeStack = function() {
    function NodeStack2() {
      this.members = [];
    }
    NodeStack2.prototype.add = function(node) {
      addUniqueItem(this.members, node);
      node.scheduleRender();
    };
    NodeStack2.prototype.remove = function(node) {
      removeItem(this.members, node);
      if (node === this.prevLead) {
        this.prevLead = void 0;
      }
      if (node === this.lead) {
        var prevLead = this.members[this.members.length - 1];
        if (prevLead) {
          this.promote(prevLead);
        }
      }
    };
    NodeStack2.prototype.relegate = function(node) {
      var indexOfNode = this.members.findIndex(function(member2) {
        return node === member2;
      });
      if (indexOfNode === 0)
        return false;
      var prevLead;
      for (var i = indexOfNode; i >= 0; i--) {
        var member = this.members[i];
        if (member.isPresent !== false) {
          prevLead = member;
          break;
        }
      }
      if (prevLead) {
        this.promote(prevLead);
        return true;
      } else {
        return false;
      }
    };
    NodeStack2.prototype.promote = function(node, preserveFollowOpacity) {
      var _a;
      var prevLead = this.lead;
      if (node === prevLead)
        return;
      this.prevLead = prevLead;
      this.lead = node;
      node.show();
      if (prevLead) {
        prevLead.instance && prevLead.scheduleRender();
        node.scheduleRender();
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity) {
          node.resumeFrom.preserveOpacity = true;
        }
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
          node.snapshot.isShared = true;
        }
        if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
          node.isLayoutDirty = true;
        }
        var crossfade = node.options.crossfade;
        if (crossfade === false) {
          prevLead.hide();
        }
      }
    };
    NodeStack2.prototype.exitAnimationComplete = function() {
      this.members.forEach(function(node) {
        var _a, _b, _c, _d, _e;
        (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
      });
    };
    NodeStack2.prototype.scheduleRender = function() {
      this.members.forEach(function(node) {
        node.instance && node.scheduleRender(false);
      });
    };
    NodeStack2.prototype.removeLeadSnapshot = function() {
      if (this.lead && this.lead.snapshot) {
        this.lead.snapshot = void 0;
      }
    };
    return NodeStack2;
  }();

  // node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
  var scaleCorrectors = {};
  function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
  }

  // node_modules/framer-motion/dist/es/projection/styles/transform.mjs
  var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1)";
  function buildProjectionTransform(delta, treeScale, latestTransform) {
    var xTranslate = delta.x.translate / treeScale.x;
    var yTranslate = delta.y.translate / treeScale.y;
    var transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
    if (latestTransform) {
      var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
      if (rotate)
        transform += "rotate(".concat(rotate, "deg) ");
      if (rotateX)
        transform += "rotateX(".concat(rotateX, "deg) ");
      if (rotateY)
        transform += "rotateY(".concat(rotateY, "deg) ");
    }
    transform += "scale(".concat(delta.x.scale, ", ").concat(delta.y.scale, ")");
    return transform === identityProjection ? "none" : transform;
  }

  // node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
  function eachAxis(callback) {
    return [callback("x"), callback("y")];
  }

  // node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
  var transformAxes = ["", "X", "Y", "Z"];
  var order = ["translate", "scale", "rotate", "skew"];
  var transformProps = ["transformPerspective", "x", "y", "z"];
  order.forEach(function(operationKey) {
    return transformAxes.forEach(function(axesKey) {
      return transformProps.push(operationKey + axesKey);
    });
  });
  function sortTransformProps(a2, b2) {
    return transformProps.indexOf(a2) - transformProps.indexOf(b2);
  }
  var transformPropSet = new Set(transformProps);
  function isTransformProp(key) {
    return transformPropSet.has(key);
  }
  var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
  function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
  }

  // node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
  var compareByDepth = function(a2, b2) {
    return a2.depth - b2.depth;
  };

  // node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
  var FlatTree = function() {
    function FlatTree2() {
      this.children = [];
      this.isDirty = false;
    }
    FlatTree2.prototype.add = function(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.remove = function(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.forEach = function(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      this.isDirty = false;
      this.children.forEach(callback);
    };
    return FlatTree2;
  }();

  // node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
  function resolveMotionValue(value) {
    var unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
  }

  // node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
  var animationTarget = 1e3;
  var globalProjectionState = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  };
  function createProjectionNode(_a) {
    var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, resetTransform = _a.resetTransform;
    return function() {
      function ProjectionNode(id2, latestValues, parent) {
        var _this = this;
        if (latestValues === void 0) {
          latestValues = {};
        }
        if (parent === void 0) {
          parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
        }
        this.children = /* @__PURE__ */ new Set();
        this.options = {};
        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        this.isLayoutDirty = false;
        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        this.isUpdating = false;
        this.isSVG = false;
        this.needsReset = false;
        this.shouldResetTransform = false;
        this.treeScale = { x: 1, y: 1 };
        this.eventHandlers = /* @__PURE__ */ new Map();
        this.potentialNodes = /* @__PURE__ */ new Map();
        this.checkUpdateFailed = function() {
          if (_this.isUpdating) {
            _this.isUpdating = false;
            _this.clearAllSnapshots();
          }
        };
        this.updateProjection = function() {
          _this.nodes.forEach(resolveTargetDelta);
          _this.nodes.forEach(calcProjection);
        };
        this.hasProjected = false;
        this.isVisible = true;
        this.animationProgress = 0;
        this.sharedNodes = /* @__PURE__ */ new Map();
        this.id = id2;
        this.latestValues = latestValues;
        this.root = parent ? parent.root || parent : this;
        this.path = parent ? __spreadArray(__spreadArray([], __read(parent.path), false), [parent], false) : [];
        this.parent = parent;
        this.depth = parent ? parent.depth + 1 : 0;
        id2 && this.root.registerPotentialNode(id2, this);
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].shouldResetTransform = true;
        }
        if (this.root === this)
          this.nodes = new FlatTree();
      }
      ProjectionNode.prototype.addEventListener = function(name, handler) {
        if (!this.eventHandlers.has(name)) {
          this.eventHandlers.set(name, new SubscriptionManager());
        }
        return this.eventHandlers.get(name).add(handler);
      };
      ProjectionNode.prototype.notifyListeners = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var subscriptionManager = this.eventHandlers.get(name);
        subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, __spreadArray([], __read(args), false));
      };
      ProjectionNode.prototype.hasListeners = function(name) {
        return this.eventHandlers.has(name);
      };
      ProjectionNode.prototype.registerPotentialNode = function(id2, node) {
        this.potentialNodes.set(id2, node);
      };
      ProjectionNode.prototype.mount = function(instance, isLayoutDirty) {
        var _this = this;
        var _a2;
        if (isLayoutDirty === void 0) {
          isLayoutDirty = false;
        }
        if (this.instance)
          return;
        this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
        this.instance = instance;
        var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement2 = _b.visualElement;
        if (visualElement2 && !visualElement2.getInstance()) {
          visualElement2.mount(instance);
        }
        this.root.nodes.add(this);
        (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
        this.id && this.root.potentialNodes.delete(this.id);
        if (isLayoutDirty && (layout || layoutId)) {
          this.isLayoutDirty = true;
        }
        if (attachResizeListener) {
          var unblockTimeout_1;
          var resizeUnblockUpdate_1 = function() {
            return _this.root.updateBlockedByResize = false;
          };
          attachResizeListener(instance, function() {
            _this.root.updateBlockedByResize = true;
            clearTimeout(unblockTimeout_1);
            unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
            if (globalProjectionState.hasAnimatedSinceResize) {
              globalProjectionState.hasAnimatedSinceResize = false;
              _this.nodes.forEach(finishAnimation);
            }
          });
        }
        if (layoutId) {
          this.root.registerSharedNode(layoutId, this);
        }
        if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
          this.addEventListener("didUpdate", function(_a3) {
            var _b2, _c, _d, _e, _f;
            var delta = _a3.delta, hasLayoutChanged = _a3.hasLayoutChanged, hasRelativeTargetChanged = _a3.hasRelativeTargetChanged, newLayout = _a3.layout;
            if (_this.isTreeAnimationBlocked()) {
              _this.target = void 0;
              _this.relativeTarget = void 0;
              return;
            }
            var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
            var _g = visualElement2.getProps(), onLayoutAnimationStart = _g.onLayoutAnimationStart, onLayoutAnimationComplete = _g.onLayoutAnimationComplete;
            var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
            var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
            if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
              if (_this.resumeFrom) {
                _this.resumingFrom = _this.resumeFrom;
                _this.resumingFrom.resumingFrom = void 0;
              }
              _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
              var animationOptions = __assign(__assign({}, getValueTransition(layoutTransition, "layout")), { onPlay: onLayoutAnimationStart, onComplete: onLayoutAnimationComplete });
              if (visualElement2.shouldReduceMotion) {
                animationOptions.delay = 0;
                animationOptions.type = false;
              }
              _this.startAnimation(animationOptions);
            } else {
              if (!hasLayoutChanged && _this.animationProgress === 0) {
                _this.finishAnimation();
              }
              _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
            }
            _this.targetLayout = newLayout;
          });
        }
      };
      ProjectionNode.prototype.unmount = function() {
        var _a2, _b;
        this.options.layoutId && this.willUpdate();
        this.root.nodes.remove(this);
        (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
        (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
        this.instance = void 0;
        cancelSync.preRender(this.updateProjection);
      };
      ProjectionNode.prototype.blockUpdate = function() {
        this.updateManuallyBlocked = true;
      };
      ProjectionNode.prototype.unblockUpdate = function() {
        this.updateManuallyBlocked = false;
      };
      ProjectionNode.prototype.isUpdateBlocked = function() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      };
      ProjectionNode.prototype.isTreeAnimationBlocked = function() {
        var _a2;
        return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
      };
      ProjectionNode.prototype.startUpdate = function() {
        var _a2;
        if (this.isUpdateBlocked())
          return;
        this.isUpdating = true;
        (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
      };
      ProjectionNode.prototype.willUpdate = function(shouldNotifyListeners) {
        var _a2, _b, _c;
        if (shouldNotifyListeners === void 0) {
          shouldNotifyListeners = true;
        }
        if (this.root.isUpdateBlocked()) {
          (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
          return;
        }
        !this.root.isUpdating && this.root.startUpdate();
        if (this.isLayoutDirty)
          return;
        this.isLayoutDirty = true;
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.shouldResetTransform = true;
          node.updateScroll();
        }
        var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
        if (layoutId === void 0 && !layout)
          return;
        var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
        this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
        this.updateSnapshot();
        shouldNotifyListeners && this.notifyListeners("willUpdate");
      };
      ProjectionNode.prototype.didUpdate = function() {
        var updateWasBlocked = this.isUpdateBlocked();
        if (updateWasBlocked) {
          this.unblockUpdate();
          this.clearAllSnapshots();
          this.nodes.forEach(clearMeasurements);
          return;
        }
        if (!this.isUpdating)
          return;
        this.isUpdating = false;
        if (this.potentialNodes.size) {
          this.potentialNodes.forEach(mountNodeEarly);
          this.potentialNodes.clear();
        }
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
        this.clearAllSnapshots();
        flushSync.update();
        flushSync.preRender();
        flushSync.render();
      };
      ProjectionNode.prototype.clearAllSnapshots = function() {
        this.nodes.forEach(clearSnapshot);
        this.sharedNodes.forEach(removeLeadSnapshots);
      };
      ProjectionNode.prototype.scheduleUpdateProjection = function() {
        es_default.preRender(this.updateProjection, false, true);
      };
      ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
        var _this = this;
        es_default.postRender(function() {
          if (_this.isLayoutDirty) {
            _this.root.didUpdate();
          } else {
            _this.root.checkUpdateFailed();
          }
        });
      };
      ProjectionNode.prototype.updateSnapshot = function() {
        if (this.snapshot || !this.instance)
          return;
        var measured = this.measure();
        var layout = this.removeTransform(this.removeElementScroll(measured));
        roundBox(layout);
        this.snapshot = {
          measured,
          layout,
          latestValues: {}
        };
      };
      ProjectionNode.prototype.updateLayout = function() {
        var _a2;
        if (!this.instance)
          return;
        this.updateScroll();
        if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
          return;
        }
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (var i = 0; i < this.path.length; i++) {
            var node = this.path[i];
            node.updateScroll();
          }
        }
        var measured = this.measure();
        roundBox(measured);
        var prevLayout = this.layout;
        this.layout = {
          measured,
          actual: this.removeElementScroll(measured)
        };
        this.layoutCorrected = createBox();
        this.isLayoutDirty = false;
        this.projectionDelta = void 0;
        this.notifyListeners("measure", this.layout.actual);
        (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
      };
      ProjectionNode.prototype.updateScroll = function() {
        if (this.options.layoutScroll && this.instance) {
          this.scroll = measureScroll(this.instance);
        }
      };
      ProjectionNode.prototype.resetTransform = function() {
        var _a2;
        if (!resetTransform)
          return;
        var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
        var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
        var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
        var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
        var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
        if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
          resetTransform(this.instance, transformTemplateValue);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      };
      ProjectionNode.prototype.measure = function() {
        var visualElement2 = this.options.visualElement;
        if (!visualElement2)
          return createBox();
        var box = visualElement2.measureViewportBox();
        var scroll = this.root.scroll;
        if (scroll) {
          translateAxis(box.x, scroll.x);
          translateAxis(box.y, scroll.y);
        }
        return box;
      };
      ProjectionNode.prototype.removeElementScroll = function(box) {
        var boxWithoutScroll = createBox();
        copyBoxInto(boxWithoutScroll, box);
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          var scroll_1 = node.scroll, options = node.options;
          if (node !== this.root && scroll_1 && options.layoutScroll) {
            translateAxis(boxWithoutScroll.x, scroll_1.x);
            translateAxis(boxWithoutScroll.y, scroll_1.y);
          }
        }
        return boxWithoutScroll;
      };
      ProjectionNode.prototype.applyTransform = function(box, transformOnly) {
        if (transformOnly === void 0) {
          transformOnly = false;
        }
        var withTransforms = createBox();
        copyBoxInto(withTransforms, box);
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
            transformBox(withTransforms, {
              x: -node.scroll.x,
              y: -node.scroll.y
            });
          }
          if (!hasTransform(node.latestValues))
            continue;
          transformBox(withTransforms, node.latestValues);
        }
        if (hasTransform(this.latestValues)) {
          transformBox(withTransforms, this.latestValues);
        }
        return withTransforms;
      };
      ProjectionNode.prototype.removeTransform = function(box) {
        var _a2;
        var boxWithoutTransform = createBox();
        copyBoxInto(boxWithoutTransform, box);
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          if (!node.instance)
            continue;
          if (!hasTransform(node.latestValues))
            continue;
          hasScale(node.latestValues) && node.updateSnapshot();
          var sourceBox = createBox();
          var nodeBox = node.measure();
          copyBoxInto(sourceBox, nodeBox);
          removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
        }
        if (hasTransform(this.latestValues)) {
          removeBoxTransforms(boxWithoutTransform, this.latestValues);
        }
        return boxWithoutTransform;
      };
      ProjectionNode.prototype.setTargetDelta = function(delta) {
        this.targetDelta = delta;
        this.root.scheduleUpdateProjection();
      };
      ProjectionNode.prototype.setOptions = function(options) {
        var _a2;
        this.options = __assign(__assign(__assign({}, this.options), options), { crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true });
      };
      ProjectionNode.prototype.clearMeasurements = function() {
        this.scroll = void 0;
        this.layout = void 0;
        this.snapshot = void 0;
        this.prevTransformTemplateValue = void 0;
        this.targetDelta = void 0;
        this.target = void 0;
        this.isLayoutDirty = false;
      };
      ProjectionNode.prototype.resolveTargetDelta = function() {
        var _a2;
        var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
        if (!this.layout || !(layout || layoutId))
          return;
        if (!this.targetDelta && !this.relativeTarget) {
          this.relativeParent = this.getClosestProjectingParent();
          if (this.relativeParent && this.relativeParent.layout) {
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          }
        }
        if (!this.relativeTarget && !this.targetDelta)
          return;
        if (!this.target) {
          this.target = createBox();
          this.targetWithTransforms = createBox();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
          calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
        } else if (this.targetDelta) {
          if (Boolean(this.resumingFrom)) {
            this.target = this.applyTransform(this.layout.actual);
          } else {
            copyBoxInto(this.target, this.layout.actual);
          }
          applyBoxDelta(this.target, this.targetDelta);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          this.relativeParent = this.getClosestProjectingParent();
          if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
            this.relativeTarget = createBox();
            this.relativeTargetOrigin = createBox();
            calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
          }
        }
      };
      ProjectionNode.prototype.getClosestProjectingParent = function() {
        if (!this.parent || hasTransform(this.parent.latestValues))
          return void 0;
        if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      };
      ProjectionNode.prototype.calcProjection = function() {
        var _a2;
        var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
        this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = void 0;
        }
        if (!this.layout || !(layout || layoutId))
          return;
        var lead = this.getLead();
        copyBoxInto(this.layoutCorrected, this.layout.actual);
        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
        var target = lead.target;
        if (!target)
          return;
        if (!this.projectionDelta) {
          this.projectionDelta = createDelta();
          this.projectionDeltaWithTransform = createDelta();
        }
        var prevTreeScaleX = this.treeScale.x;
        var prevTreeScaleY = this.treeScale.y;
        var prevProjectionTransform = this.projectionTransform;
        calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
        this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
        if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", target);
        }
      };
      ProjectionNode.prototype.hide = function() {
        this.isVisible = false;
      };
      ProjectionNode.prototype.show = function() {
        this.isVisible = true;
      };
      ProjectionNode.prototype.scheduleRender = function(notifyAll) {
        var _a2, _b, _c;
        if (notifyAll === void 0) {
          notifyAll = true;
        }
        (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
        notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = void 0;
        }
      };
      ProjectionNode.prototype.setAnimationOrigin = function(delta, hasOnlyRelativeTargetChanged) {
        var _this = this;
        var _a2;
        if (hasOnlyRelativeTargetChanged === void 0) {
          hasOnlyRelativeTargetChanged = false;
        }
        var snapshot = this.snapshot;
        var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
        var mixedValues = __assign({}, this.latestValues);
        var targetDelta = createDelta();
        this.relativeTarget = this.relativeTargetOrigin = void 0;
        this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
        var relativeLayout = createBox();
        var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
        var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
        var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
        this.animationProgress = 0;
        this.mixTargetDelta = function(latest) {
          var _a3;
          var progress2 = latest / 1e3;
          mixAxisDelta(targetDelta.x, delta.x, progress2);
          mixAxisDelta(targetDelta.y, delta.y, progress2);
          _this.setTargetDelta(targetDelta);
          if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
            calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
            mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress2);
          }
          if (isSharedLayoutAnimation) {
            _this.animationValues = mixedValues;
            mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
          }
          _this.root.scheduleUpdateProjection();
          _this.scheduleRender();
          _this.animationProgress = progress2;
        };
        this.mixTargetDelta(0);
      };
      ProjectionNode.prototype.startAnimation = function(options) {
        var _this = this;
        var _a2, _b;
        this.notifyListeners("animationStart");
        (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
        if (this.resumingFrom) {
          (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
        }
        if (this.pendingAnimation) {
          cancelSync.update(this.pendingAnimation);
          this.pendingAnimation = void 0;
        }
        this.pendingAnimation = es_default.update(function() {
          globalProjectionState.hasAnimatedSinceResize = true;
          _this.currentAnimation = animate2(0, animationTarget, __assign(__assign({}, options), { onUpdate: function(latest) {
            var _a3;
            _this.mixTargetDelta(latest);
            (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
          }, onComplete: function() {
            var _a3;
            (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);
            _this.completeAnimation();
          } }));
          if (_this.resumingFrom) {
            _this.resumingFrom.currentAnimation = _this.currentAnimation;
          }
          _this.pendingAnimation = void 0;
        });
      };
      ProjectionNode.prototype.completeAnimation = function() {
        var _a2;
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = void 0;
          this.resumingFrom.preserveOpacity = void 0;
        }
        (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
        this.notifyListeners("animationComplete");
      };
      ProjectionNode.prototype.finishAnimation = function() {
        var _a2;
        if (this.currentAnimation) {
          (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      };
      ProjectionNode.prototype.applyTransformsToTarget = function() {
        var _a2 = this.getLead(), targetWithTransforms = _a2.targetWithTransforms, target = _a2.target, layout = _a2.layout, latestValues = _a2.latestValues;
        if (!targetWithTransforms || !target || !layout)
          return;
        copyBoxInto(targetWithTransforms, target);
        transformBox(targetWithTransforms, latestValues);
        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      };
      ProjectionNode.prototype.registerSharedNode = function(layoutId, node) {
        var _a2, _b, _c;
        if (!this.sharedNodes.has(layoutId)) {
          this.sharedNodes.set(layoutId, new NodeStack());
        }
        var stack = this.sharedNodes.get(layoutId);
        stack.add(node);
        node.promote({
          transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
          preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
        });
      };
      ProjectionNode.prototype.isLead = function() {
        var stack = this.getStack();
        return stack ? stack.lead === this : true;
      };
      ProjectionNode.prototype.getLead = function() {
        var _a2;
        var layoutId = this.options.layoutId;
        return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
      };
      ProjectionNode.prototype.getPrevLead = function() {
        var _a2;
        var layoutId = this.options.layoutId;
        return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
      };
      ProjectionNode.prototype.getStack = function() {
        var layoutId = this.options.layoutId;
        if (layoutId)
          return this.root.sharedNodes.get(layoutId);
      };
      ProjectionNode.prototype.promote = function(_a2) {
        var _b = _a2 === void 0 ? {} : _a2, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
        var stack = this.getStack();
        if (stack)
          stack.promote(this, preserveFollowOpacity);
        if (needsReset) {
          this.projectionDelta = void 0;
          this.needsReset = true;
        }
        if (transition)
          this.setOptions({ transition });
      };
      ProjectionNode.prototype.relegate = function() {
        var stack = this.getStack();
        if (stack) {
          return stack.relegate(this);
        } else {
          return false;
        }
      };
      ProjectionNode.prototype.resetRotation = function() {
        var visualElement2 = this.options.visualElement;
        if (!visualElement2)
          return;
        var hasRotate = false;
        var resetValues = {};
        for (var i = 0; i < transformAxes.length; i++) {
          var axis = transformAxes[i];
          var key = "rotate" + axis;
          if (!visualElement2.getStaticValue(key)) {
            continue;
          }
          hasRotate = true;
          resetValues[key] = visualElement2.getStaticValue(key);
          visualElement2.setStaticValue(key, 0);
        }
        if (!hasRotate)
          return;
        visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
        for (var key in resetValues) {
          visualElement2.setStaticValue(key, resetValues[key]);
        }
        visualElement2.scheduleRender();
      };
      ProjectionNode.prototype.getProjectionStyles = function(styleProp) {
        var _a2, _b, _c, _d, _e, _f;
        if (styleProp === void 0) {
          styleProp = {};
        }
        var styles = {};
        if (!this.instance || this.isSVG)
          return styles;
        if (!this.isVisible) {
          return { visibility: "hidden" };
        } else {
          styles.visibility = "";
        }
        var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
        if (this.needsReset) {
          this.needsReset = false;
          styles.opacity = "";
          styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
          styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
          return styles;
        }
        var lead = this.getLead();
        if (!this.projectionDelta || !this.layout || !lead.target) {
          var emptyStyles = {};
          if (this.options.layoutId) {
            emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
            emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
          }
          if (this.hasProjected && !hasTransform(this.latestValues)) {
            emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
            this.hasProjected = false;
          }
          return emptyStyles;
        }
        var valuesToRender = lead.animationValues || lead.latestValues;
        this.applyTransformsToTarget();
        styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
        if (transformTemplate) {
          styles.transform = transformTemplate(valuesToRender, styles.transform);
        }
        var _g = this.projectionDelta, x = _g.x, y = _g.y;
        styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
        if (lead.animationValues) {
          styles.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
        } else {
          styles.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
        }
        for (var key in scaleCorrectors) {
          if (valuesToRender[key] === void 0)
            continue;
          var _h = scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
          var corrected = correct(valuesToRender[key], lead);
          if (applyTo) {
            var num = applyTo.length;
            for (var i = 0; i < num; i++) {
              styles[applyTo[i]] = corrected;
            }
          } else {
            styles[key] = corrected;
          }
        }
        if (this.options.layoutId) {
          styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
        }
        return styles;
      };
      ProjectionNode.prototype.clearSnapshot = function() {
        this.resumeFrom = this.snapshot = void 0;
      };
      ProjectionNode.prototype.resetTree = function() {
        this.root.nodes.forEach(function(node) {
          var _a2;
          return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
        });
        this.root.nodes.forEach(clearMeasurements);
        this.root.sharedNodes.clear();
      };
      return ProjectionNode;
    }();
  }
  function updateLayout(node) {
    node.updateLayout();
  }
  function notifyLayoutUpdate(node) {
    var _a, _b, _c, _d;
    var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
      var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
      if (node.options.animationType === "size") {
        eachAxis(function(axis) {
          var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
          var length = calcLength(axisSnapshot);
          axisSnapshot.min = layout_1[axis].min;
          axisSnapshot.max = axisSnapshot.min + length;
        });
      } else if (node.options.animationType === "position") {
        eachAxis(function(axis) {
          var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
          var length = calcLength(layout_1[axis]);
          axisSnapshot.max = axisSnapshot.min + length;
        });
      }
      var layoutDelta = createDelta();
      calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
      var visualDelta = createDelta();
      if (snapshot.isShared) {
        calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
      } else {
        calcBoxDelta(visualDelta, layout_1, snapshot.layout);
      }
      var hasLayoutChanged = !isDeltaZero(layoutDelta);
      var hasRelativeTargetChanged = false;
      if (!node.resumeFrom) {
        node.relativeParent = node.getClosestProjectingParent();
        if (node.relativeParent && !node.relativeParent.resumeFrom) {
          var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
          if (parentSnapshot && parentLayout) {
            var relativeSnapshot = createBox();
            calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
            var relativeLayout = createBox();
            calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);
            if (!boxEquals(relativeSnapshot, relativeLayout)) {
              hasRelativeTargetChanged = true;
            }
          }
        }
      }
      node.notifyListeners("didUpdate", {
        layout: layout_1,
        snapshot,
        delta: visualDelta,
        layoutDelta,
        hasLayoutChanged,
        hasRelativeTargetChanged
      });
    } else if (node.isLead()) {
      (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
    node.options.transition = void 0;
  }
  function clearSnapshot(node) {
    node.clearSnapshot();
  }
  function clearMeasurements(node) {
    node.clearMeasurements();
  }
  function resetTransformStyle(node) {
    var visualElement2 = node.options.visualElement;
    if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
      visualElement2.notifyBeforeLayoutMeasure();
    }
    node.resetTransform();
  }
  function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = void 0;
  }
  function resolveTargetDelta(node) {
    node.resolveTargetDelta();
  }
  function calcProjection(node) {
    node.calcProjection();
  }
  function resetRotation(node) {
    node.resetRotation();
  }
  function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
  }
  function mixAxisDelta(output, delta, p) {
    output.translate = mix(delta.translate, 0, p);
    output.scale = mix(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
  }
  function mixAxis(output, from, to, p) {
    output.min = mix(from.min, to.min, p);
    output.max = mix(from.max, to.max, p);
  }
  function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
  }
  function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== void 0;
  }
  var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  function mountNodeEarly(node, id2) {
    var searchNode = node.root;
    for (var i = node.path.length - 1; i >= 0; i--) {
      if (Boolean(node.path[i].instance)) {
        searchNode = node.path[i];
        break;
      }
    }
    var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
    var element = searchElement.querySelector('[data-projection-id="'.concat(id2, '"]'));
    if (element)
      node.mount(element, true);
  }
  function roundAxis(axis) {
    axis.min = Math.round(axis.min);
    axis.max = Math.round(axis.max);
  }
  function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
  }

  // node_modules/framer-motion/dist/es/projection/node/id.mjs
  var id = 1;
  function useProjectionId() {
    return useConstant(function() {
      if (globalProjectionState.hasEverUpdated) {
        return id++;
      }
    });
  }

  // node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
  var import_react14 = __toESM(require_react(), 1);
  var LayoutGroupContext = (0, import_react14.createContext)({});

  // node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
  var import_react16 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
  var import_react15 = __toESM(require_react(), 1);
  var SwitchLayoutGroupContext = (0, import_react15.createContext)({});

  // node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
  function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
    var _b;
    var layoutId = _a.layoutId, layout = _a.layout, drag2 = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
    var initialPromotionConfig = (0, import_react16.useContext)(SwitchLayoutGroupContext);
    if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
      return;
    }
    visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
    visualElement2.projection.setOptions({
      layoutId,
      layout,
      alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
      visualElement: visualElement2,
      scheduleRender: function() {
        return visualElement2.scheduleRender();
      },
      animationType: typeof layout === "string" ? layout : "both",
      initialPromotionConfig,
      layoutScroll
    });
  }

  // node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs
  var import_react17 = __toESM(require_react(), 1);
  var VisualElementHandler = function(_super) {
    __extends(VisualElementHandler2, _super);
    function VisualElementHandler2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function() {
      this.updateProps();
      return null;
    };
    VisualElementHandler2.prototype.componentDidUpdate = function() {
    };
    VisualElementHandler2.prototype.updateProps = function() {
      var _a = this.props, visualElement2 = _a.visualElement, props = _a.props;
      if (visualElement2)
        visualElement2.setProps(props);
    };
    VisualElementHandler2.prototype.render = function() {
      return this.props.children;
    };
    return VisualElementHandler2;
  }(import_react17.default.Component);

  // node_modules/framer-motion/dist/es/motion/index.mjs
  function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
      var layoutId = useLayoutId(props);
      props = __assign(__assign({}, props), { layoutId });
      var config = (0, import_react18.useContext)(MotionConfigContext);
      var features = null;
      var context = useCreateMotionContext(props);
      var projectionId = config.isStatic ? void 0 : useProjectionId();
      var visualState = useVisualState(props, config.isStatic);
      if (!config.isStatic && isBrowser) {
        context.visualElement = useVisualElement(Component, visualState, __assign(__assign({}, config), props), createVisualElement);
        useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
        features = useFeatures(props, context.visualElement, preloadedFeatures);
      }
      return React4.createElement(VisualElementHandler, { visualElement: context.visualElement, props: __assign(__assign({}, config), props) }, features, React4.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config.isStatic, context.visualElement)));
    }
    return (0, import_react18.forwardRef)(MotionComponent);
  }
  function useLayoutId(_a) {
    var _b;
    var layoutId = _a.layoutId;
    var layoutGroupId = (_b = (0, import_react18.useContext)(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
  }

  // node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
  function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
      if (customMotionComponentConfig === void 0) {
        customMotionComponentConfig = {};
      }
      return createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
      return custom;
    }
    var componentCache = /* @__PURE__ */ new Map();
    return new Proxy(custom, {
      get: function(_target, key) {
        if (!componentCache.has(key)) {
          componentCache.set(key, custom(key));
        }
        return componentCache.get(key);
      }
    });
  }

  // node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
  var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view"
  ];

  // node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
  function isSVGComponent(Component) {
    if (typeof Component !== "string" || Component.includes("-")) {
      return false;
    } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
      return true;
    }
    return false;
  }

  // node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  var import_react21 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/render/html/use-props.mjs
  var import_react19 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
  function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
  }

  // node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
  var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys2 = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    var transformString = "";
    transformKeys2.sort(sortTransformProps);
    var transformHasZ = false;
    var numTransformKeys = transformKeys2.length;
    for (var i = 0; i < numTransformKeys; i++) {
      var key = transformKeys2[i];
      transformString += "".concat(translateAlias[key] || key, "(").concat(transform[key], ") ");
      if (key === "z")
        transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += "translateZ(0)";
    } else {
      transformString = transformString.trim();
    }
    if (transformTemplate) {
      transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    } else if (allowTransformNone && transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }
  function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return "".concat(originX, " ").concat(originY, " ").concat(originZ);
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
  function isCSSVariable(key) {
    return key.startsWith("--");
  }

  // node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
  var getValueAsType = function(value, type) {
    return type && typeof value === "number" ? type.transform(value) : value;
  };

  // node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
  function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
    transformKeys2.length = 0;
    var hasTransform2 = false;
    var hasTransformOrigin = false;
    var transformIsNone = true;
    for (var key in latestValues) {
      var value = latestValues[key];
      if (isCSSVariable(key)) {
        vars[key] = value;
        continue;
      }
      var valueType = numberValueTypes[key];
      var valueAsType = getValueAsType(value, valueType);
      if (isTransformProp(key)) {
        hasTransform2 = true;
        transform[key] = valueAsType;
        transformKeys2.push(key);
        if (!transformIsNone)
          continue;
        if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
          transformIsNone = false;
      } else if (isTransformOriginProp(key)) {
        transformOrigin[key] = valueAsType;
        hasTransformOrigin = true;
      } else {
        style[key] = valueAsType;
      }
    }
    if (hasTransform2) {
      style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    } else if (transformTemplate) {
      style.transform = transformTemplate({}, "");
    } else if (!latestValues.transform && style.transform) {
      style.transform = "none";
    }
    if (hasTransformOrigin) {
      style.transformOrigin = buildTransformOrigin(transformOrigin);
    }
  }

  // node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
  var createHtmlRenderState = function() {
    return {
      style: {},
      transform: {},
      transformKeys: [],
      transformOrigin: {},
      vars: {}
    };
  };

  // node_modules/framer-motion/dist/es/render/html/use-props.mjs
  function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
      if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
        target[key] = source[key];
      }
    }
  }
  function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return (0, import_react19.useMemo)(function() {
      var state = createHtmlRenderState();
      buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
      var vars = state.vars, style = state.style;
      return __assign(__assign({}, vars), style);
    }, [visualState]);
  }
  function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
      style = props.transformValues(style);
    }
    return style;
  }
  function useHTMLProps(props, visualState, isStatic) {
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag) && props.dragListener !== false) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
  }

  // node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
  var validMotionProps = /* @__PURE__ */ new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "layoutDependency",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragSnapToOrigin",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
    "whileInView",
    "onViewportEnter",
    "onViewportLeave",
    "viewport",
    "layoutScroll"
  ]);
  function isValidMotionProp(key) {
    return validMotionProps.has(key);
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
  var shouldForward = function(key) {
    return !isValidMotionProp(key);
  };
  function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
      return;
    shouldForward = function(key) {
      return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
    };
  }
  try {
    loadExternalIsValidProp(require_is_prop_valid_browser_cjs().default);
  } catch (_a) {
  }
  function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
      if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
        filteredProps[key] = props[key];
      }
    }
    return filteredProps;
  }

  // node_modules/framer-motion/dist/es/render/svg/use-props.mjs
  var import_react20 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
  function calcOrigin(origin, offset, size) {
    return typeof origin === "string" ? origin : px.transform(offset + size * origin);
  }
  function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return "".concat(pxOriginX, " ").concat(pxOriginY);
  }

  // node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
  var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
    if (spacing === void 0) {
      spacing = 1;
    }
    if (offset === void 0) {
      offset = 0;
    }
    if (useDashCase === void 0) {
      useDashCase = true;
    }
    attrs.pathLength = 1;
    var keys = useDashCase ? dashKeys : camelKeys;
    attrs[keys.offset] = px.transform(-offset);
    var pathLength = px.transform(length);
    var pathSpacing = px.transform(spacing);
    attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
  }

  // node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
  function buildSVGAttrs(state, _a, options, transformTemplate) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    buildHTMLStyles(state, latest, options, transformTemplate);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
    if (attrs.transform) {
      if (dimensions)
        style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
      style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (pathLength !== void 0) {
      buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
  }

  // node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
  var createSvgRenderState = function() {
    return __assign(__assign({}, createHtmlRenderState()), { attrs: {} });
  };

  // node_modules/framer-motion/dist/es/render/svg/use-props.mjs
  function useSVGProps(props, visualState) {
    var visualProps = (0, import_react20.useMemo)(function() {
      var state = createSvgRenderState();
      buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
      return __assign(__assign({}, state.attrs), { style: __assign({}, state.style) });
    }, [visualState]);
    if (props.style) {
      var rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
    }
    return visualProps;
  }

  // node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) {
      forwardMotionProps = false;
    }
    var useRender = function(Component, props, projectionId, ref, _a, isStatic) {
      var latestValues = _a.latestValues;
      var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
      var visualProps = useVisualProps(props, latestValues, isStatic);
      var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
      var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), { ref });
      if (projectionId) {
        elementProps["data-projection-id"] = projectionId;
      }
      return (0, import_react21.createElement)(Component, elementProps);
    };
    return useRender;
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
  var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
  var REPLACE_TEMPLATE = "$1-$2";
  var camelToDash = function(str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
  };

  // node_modules/framer-motion/dist/es/render/html/utils/render.mjs
  function renderHTML(element, _a, styleProp, projection) {
    var style = _a.style, vars = _a.vars;
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    for (var key in vars) {
      element.style.setProperty(key, vars[key]);
    }
  }

  // node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
  var camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength"
  ]);

  // node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
  function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for (var key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }

  // node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
      if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }

  // node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps2(props) {
    var newValues = scrapeMotionValuesFromProps(props);
    for (var key in props) {
      if (isMotionValue(props[key])) {
        var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
  var import_react22 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
  function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
  function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
      latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
      renderState: createRenderState()
    };
    if (onMount) {
      state.mount = function(instance) {
        return onMount(props, instance, state);
      };
    }
    return state;
  }
  var makeUseVisualState = function(config) {
    return function(props, isStatic) {
      var context = (0, import_react22.useContext)(MotionContext);
      var presenceContext = (0, import_react22.useContext)(PresenceContext);
      return isStatic ? makeState(config, props, context, presenceContext) : useConstant(function() {
        return makeState(config, props, context, presenceContext);
      });
    };
  };
  function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
      values[key] = resolveMotionValue(motionValues[key]);
    }
    var initial = props.initial, animate3 = props.animate;
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
      initial !== null && initial !== void 0 ? initial : initial = context.initial;
      animate3 !== null && animate3 !== void 0 ? animate3 : animate3 = context.animate;
    }
    var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
    var variantToSet = initialAnimationIsBlocked ? animate3 : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
      var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
      list.forEach(function(definition) {
        var resolved = resolveVariantFromProps(props, definition);
        if (!resolved)
          return;
        var transitionEnd = resolved.transitionEnd;
        resolved.transition;
        var target = __rest(resolved, ["transitionEnd", "transition"]);
        for (var key2 in target) {
          var valueTarget = target[key2];
          if (Array.isArray(valueTarget)) {
            var index = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key2] = valueTarget;
          }
        }
        for (var key2 in transitionEnd)
          values[key2] = transitionEnd[key2];
      });
    }
    return values;
  }

  // node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
  var svgMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
      createRenderState: createSvgRenderState,
      onMount: function(props, instance, _a) {
        var renderState = _a.renderState, latestValues = _a.latestValues;
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
        buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
        renderSVG(instance, renderState);
      }
    })
  };

  // node_modules/framer-motion/dist/es/render/html/config-motion.mjs
  var htmlMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps,
      createRenderState: createHtmlRenderState
    })
  };

  // node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
  function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
    return __assign(__assign({}, baseConfig), { preloadedFeatures, useRender: createUseRender(forwardMotionProps), createVisualElement, projectionNodeConstructor, Component });
  }

  // node_modules/framer-motion/dist/es/render/utils/types.mjs
  var AnimationType;
  (function(AnimationType2) {
    AnimationType2["Animate"] = "animate";
    AnimationType2["Hover"] = "whileHover";
    AnimationType2["Tap"] = "whileTap";
    AnimationType2["Drag"] = "whileDrag";
    AnimationType2["Focus"] = "whileFocus";
    AnimationType2["InView"] = "whileInView";
    AnimationType2["Exit"] = "exit";
  })(AnimationType || (AnimationType = {}));

  // node_modules/framer-motion/dist/es/events/use-dom-event.mjs
  var import_react23 = __toESM(require_react(), 1);
  function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function() {
      return target.removeEventListener(eventName, handler, options);
    };
  }
  function useDomEvent(ref, eventName, handler, options) {
    (0, import_react23.useEffect)(function() {
      var element = ref.current;
      if (handler && element) {
        return addDomEvent(element, eventName, handler, options);
      }
    }, [ref, eventName, handler, options]);
  }

  // node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
  function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
    var onFocus = function() {
      var _a2;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
    };
    var onBlur = function() {
      var _a2;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
    };
    useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
    useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
  }

  // node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs
  function isMouseEvent(event) {
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
      return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
  }
  function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
  }

  // node_modules/framer-motion/dist/es/events/event-info.mjs
  function filterPrimaryPointer(eventHandler) {
    return function(event) {
      var isMouseEvent2 = event instanceof MouseEvent;
      var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
      if (isPrimaryPointer) {
        eventHandler(event);
      }
    };
  }
  var defaultPagePoint = { pageX: 0, pageY: 0 };
  function pointFromTouch(e, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
      x: point[pointType + "X"],
      y: point[pointType + "Y"]
    };
  }
  function pointFromMouse(point, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    return {
      x: point[pointType + "X"],
      y: point[pointType + "Y"]
    };
  }
  function extractEventInfo(event, pointType) {
    if (pointType === void 0) {
      pointType = "page";
    }
    return {
      point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
    };
  }
  var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) {
      shouldFilterPrimaryPointer = false;
    }
    var listener = function(event) {
      return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
  };

  // node_modules/framer-motion/dist/es/events/utils.mjs
  var supportsPointerEvents = function() {
    return isBrowser && window.onpointerdown === null;
  };
  var supportsTouchEvents = function() {
    return isBrowser && window.ontouchstart === null;
  };
  var supportsMouseEvents = function() {
    return isBrowser && window.onmousedown === null;
  };

  // node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
  var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave"
  };
  var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel"
  };
  function getPointerEventName(name) {
    if (supportsPointerEvents()) {
      return name;
    } else if (supportsTouchEvents()) {
      return touchEventNames[name];
    } else if (supportsMouseEvents()) {
      return mouseEventNames[name];
    }
    return name;
  }
  function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
  }
  function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
  }

  // node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
  function createLock(name) {
    var lock = null;
    return function() {
      var openLock = function() {
        lock = null;
      };
      if (lock === null) {
        lock = name;
        return openLock;
      }
      return false;
    };
  }
  var globalHorizontalLock = createLock("dragHorizontal");
  var globalVerticalLock = createLock("dragVertical");
  function getGlobalLock(drag2) {
    var lock = false;
    if (drag2 === "y") {
      lock = globalVerticalLock();
    } else if (drag2 === "x") {
      lock = globalHorizontalLock();
    } else {
      var openHorizontal_1 = globalHorizontalLock();
      var openVertical_1 = globalVerticalLock();
      if (openHorizontal_1 && openVertical_1) {
        lock = function() {
          openHorizontal_1();
          openVertical_1();
        };
      } else {
        if (openHorizontal_1)
          openHorizontal_1();
        if (openVertical_1)
          openVertical_1();
      }
    }
    return lock;
  }
  function isDragActive() {
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
      return true;
    openGestureLock();
    return false;
  }

  // node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
  function createHoverEvent(visualElement2, isActive, callback) {
    return function(event, info) {
      var _a;
      if (!isMouseEvent(event) || isDragActive())
        return;
      (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
      callback === null || callback === void 0 ? void 0 : callback(event, info);
    };
  }
  function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
    usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0);
    usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0);
  }

  // node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
  var import_react25 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
  var isNodeOrChild = function(parent, child) {
    if (!child) {
      return false;
    } else if (parent === child) {
      return true;
    } else {
      return isNodeOrChild(parent, child.parentElement);
    }
  };

  // node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
  var import_react24 = __toESM(require_react(), 1);
  function useUnmountEffect(callback) {
    return (0, import_react24.useEffect)(function() {
      return function() {
        return callback();
      };
    }, []);
  }

  // node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
  function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = (0, import_react25.useRef)(false);
    var cancelPointerEndListeners = (0, import_react25.useRef)(null);
    function removePointerEndListener() {
      var _a2;
      (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
      cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
      var _a2;
      removePointerEndListener();
      isPressing.current = false;
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
      return !isDragActive();
    }
    function onPointerUp(event, info) {
      if (!checkPointerEnd())
        return;
      !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
      if (!checkPointerEnd())
        return;
      onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
      var _a2;
      removePointerEndListener();
      if (isPressing.current)
        return;
      isPressing.current = true;
      cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
      onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
    }
    usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0);
    useUnmountEffect(removePointerEndListener);
  }

  // node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
  var import_react26 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/utils/warn-once.mjs
  var warned = /* @__PURE__ */ new Set();
  function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
      return;
    console.warn(message);
    if (element)
      console.warn(element);
    warned.add(message);
  }

  // node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
  var observerCallbacks = /* @__PURE__ */ new WeakMap();
  var observers = /* @__PURE__ */ new WeakMap();
  var fireObserverCallback = function(entry) {
    var _a;
    (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
  };
  var fireAllObserverCallbacks = function(entries) {
    entries.forEach(fireObserverCallback);
  };
  function initIntersectionObserver(_a) {
    var root = _a.root, options = __rest(_a, ["root"]);
    var lookupRoot = root || document;
    if (!observers.has(lookupRoot)) {
      observers.set(lookupRoot, {});
    }
    var rootObservers = observers.get(lookupRoot);
    var key = JSON.stringify(options);
    if (!rootObservers[key]) {
      rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __assign({ root }, options));
    }
    return rootObservers[key];
  }
  function observeIntersection(element, options, callback) {
    var rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return function() {
      observerCallbacks.delete(element);
      rootInteresectionObserver.unobserve(element);
    };
  }

  // node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
  function useViewport(_a) {
    var visualElement2 = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
    var state = (0, import_react26.useRef)({
      hasEnteredView: false,
      isInView: false
    });
    var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
    if (viewport.once && state.current.hasEnteredView)
      shouldObserve = false;
    var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
    useObserver(shouldObserve, state.current, visualElement2, viewport);
  }
  var thresholdNames = {
    some: 0,
    all: 1
  };
  function useIntersectionObserver(shouldObserve, state, visualElement2, _a) {
    var root = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once = _a.once;
    (0, import_react26.useEffect)(function() {
      if (!shouldObserve)
        return;
      var options = {
        root: root === null || root === void 0 ? void 0 : root.current,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholdNames[amount]
      };
      var intersectionCallback = function(entry) {
        var _a2;
        var isIntersecting = entry.isIntersecting;
        if (state.isInView === isIntersecting)
          return;
        state.isInView = isIntersecting;
        if (once && !isIntersecting && state.hasEnteredView) {
          return;
        } else if (isIntersecting) {
          state.hasEnteredView = true;
        }
        (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, isIntersecting);
        var props = visualElement2.getProps();
        var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
        callback === null || callback === void 0 ? void 0 : callback(entry);
      };
      return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
    }, [shouldObserve, root, rootMargin, amount]);
  }
  function useMissingIntersectionObserver(shouldObserve, state, visualElement2, _a) {
    var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
    (0, import_react26.useEffect)(function() {
      if (!shouldObserve || !fallback)
        return;
      if (process$1.env.NODE_ENV !== "production") {
        warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
      }
      requestAnimationFrame(function() {
        var _a2;
        state.hasEnteredView = true;
        var onViewportEnter = visualElement2.getProps().onViewportEnter;
        onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
        (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, true);
      });
    }, [shouldObserve]);
  }

  // node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs
  var makeRenderlessComponent = function(hook) {
    return function(props) {
      hook(props);
      return null;
    };
  };

  // node_modules/framer-motion/dist/es/motion/features/gestures.mjs
  var gestureAnimations = {
    inView: makeRenderlessComponent(useViewport),
    tap: makeRenderlessComponent(useTapGesture),
    focus: makeRenderlessComponent(useFocusGesture),
    hover: makeRenderlessComponent(useHoverGesture)
  };

  // node_modules/framer-motion/dist/es/motion/features/animations.mjs
  var import_react28 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
  var import_react27 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/utils/use-id.mjs
  var counter = 0;
  var incrementId = function() {
    return counter++;
  };
  var useId = function() {
    return useConstant(incrementId);
  };

  // node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
  function usePresence() {
    var context = (0, import_react27.useContext)(PresenceContext);
    if (context === null)
      return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    var id2 = useId();
    (0, import_react27.useEffect)(function() {
      return register(id2);
    }, []);
    var safeToRemove = function() {
      return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id2);
    };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
  }

  // node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
  function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
      return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
      return false;
    for (var i = 0; i < prevLength; i++) {
      if (prev[i] !== next[i])
        return false;
    }
    return true;
  }

  // node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
  var isNumericalString = function(v) {
    return /^\-?\d*\.?\d+$/.test(v);
  };

  // node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
  var isZeroValueString = function(v) {
    return /^0[^.\s]+$/.test(v);
  };

  // node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
  var testValueType = function(v) {
    return function(type) {
      return type.test(v);
    };
  };

  // node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
  var auto = {
    test: function(v) {
      return v === "auto";
    },
    parse: function(v) {
      return v;
    }
  };

  // node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
  var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  var findDimensionValueType = function(v) {
    return dimensionValueTypes.find(testValueType(v));
  };

  // node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
  var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes), false), [color, complex], false);
  var findValueType = function(v) {
    return valueTypes.find(testValueType(v));
  };

  // node_modules/framer-motion/dist/es/render/utils/setters.mjs
  function setMotionValue(visualElement2, key, value) {
    if (visualElement2.hasValue(key)) {
      visualElement2.getValue(key).set(value);
    } else {
      visualElement2.addValue(key, motionValue(value));
    }
  }
  function setTarget(visualElement2, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
    _a.transition;
    var target = __rest(_a, ["transitionEnd", "transition"]);
    target = __assign(__assign({}, target), transitionEnd);
    for (var key in target) {
      var value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement2, key, value);
    }
  }
  function checkTargetForNewValues(visualElement2, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function(key2) {
      return !visualElement2.hasValue(key2);
    });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
      return;
    for (var i = 0; i < numNewValues; i++) {
      var key = newValueKeys[i];
      var targetValue = target[key];
      var value = null;
      if (Array.isArray(targetValue)) {
        value = targetValue[0];
      }
      if (value === null) {
        value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
      }
      if (value === void 0 || value === null)
        continue;
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(targetValue)) {
        value = getAnimatableNone2(key, targetValue);
      }
      visualElement2.addValue(key, motionValue(value));
      (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
      visualElement2.setBaseTarget(key, value);
    }
  }
  function getOriginFromTransition(key, transition) {
    if (!transition)
      return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
  }
  function getOrigin(target, transition, visualElement2) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
      origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
  }

  // node_modules/framer-motion/dist/es/render/utils/animation.mjs
  function animateVisualElement(visualElement2, definition, options) {
    if (options === void 0) {
      options = {};
    }
    visualElement2.notifyAnimationStart(definition);
    var animation;
    if (Array.isArray(definition)) {
      var animations2 = definition.map(function(variant) {
        return animateVariant(visualElement2, variant, options);
      });
      animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
      animation = animateVariant(visualElement2, definition, options);
    } else {
      var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
      animation = animateTarget(visualElement2, resolvedDefinition, options);
    }
    return animation.then(function() {
      return visualElement2.notifyAnimationComplete(definition);
    });
  }
  function animateVariant(visualElement2, variant, options) {
    var _a;
    if (options === void 0) {
      options = {};
    }
    var resolved = resolveVariant(visualElement2, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
      transition = options.transitionOverride;
    }
    var getAnimation2 = resolved ? function() {
      return animateTarget(visualElement2, resolved, options);
    } : function() {
      return Promise.resolve();
    };
    var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
      if (forwardDelay === void 0) {
        forwardDelay = 0;
      }
      var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
      return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
    } : function() {
      return Promise.resolve();
    };
    var when = transition.when;
    if (when) {
      var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
      return first().then(last);
    } else {
      return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
    }
  }
  function animateTarget(visualElement2, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
      transition = transitionOverride;
    var animations2 = [];
    var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
      var value = visualElement2.getValue(key);
      var valueTarget = target[key];
      if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      var valueTransition = __assign({ delay }, transition);
      if (visualElement2.shouldReduceMotion && isTransformProp(key)) {
        valueTransition = __assign(__assign({}, valueTransition), { type: false, delay: 0 });
      }
      var animation = startAnimation(key, value, valueTarget, valueTransition);
      animations2.push(animation);
    }
    return Promise.all(animations2).then(function() {
      transitionEnd && setTarget(visualElement2, transitionEnd);
    });
  }
  function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) {
      delayChildren = 0;
    }
    if (staggerChildren === void 0) {
      staggerChildren = 0;
    }
    if (staggerDirection === void 0) {
      staggerDirection = 1;
    }
    var animations2 = [];
    var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1 ? function(i) {
      if (i === void 0) {
        i = 0;
      }
      return i * staggerChildren;
    } : function(i) {
      if (i === void 0) {
        i = 0;
      }
      return maxStaggerDuration - i * staggerChildren;
    };
    Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
      animations2.push(animateVariant(child, variant, __assign(__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
        return child.notifyAnimationComplete(variant);
      }));
    });
    return Promise.all(animations2);
  }
  function sortByTreeOrder(a2, b2) {
    return a2.sortNodePosition(b2);
  }
  function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }

  // node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
  var variantPriorityOrder = [
    AnimationType.Animate,
    AnimationType.InView,
    AnimationType.Focus,
    AnimationType.Hover,
    AnimationType.Tap,
    AnimationType.Drag,
    AnimationType.Exit
  ];
  var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder), false).reverse();
  var numAnimationTypes = variantPriorityOrder.length;
  function animateList(visualElement2) {
    return function(animations2) {
      return Promise.all(animations2.map(function(_a) {
        var animation = _a.animation, options = _a.options;
        return animateVisualElement(visualElement2, animation, options);
      }));
    };
  }
  function createAnimationState(visualElement2) {
    var animate3 = animateList(visualElement2);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    var buildResolvedTypeValues = function(acc, definition) {
      var resolved = resolveVariant(visualElement2, definition);
      if (resolved) {
        resolved.transition;
        var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
        acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
      }
      return acc;
    };
    function isAnimated(key) {
      return allAnimatedKeys[key] !== void 0;
    }
    function setAnimateFunction(makeAnimator) {
      animate3 = makeAnimator(visualElement2);
    }
    function animateChanges(options, changedActiveType) {
      var _a;
      var props = visualElement2.getProps();
      var context = visualElement2.getVariantContext(true) || {};
      var animations2 = [];
      var removedKeys = /* @__PURE__ */ new Set();
      var encounteredKeys = {};
      var removedVariantIndex = Infinity;
      var _loop_1 = function(i2) {
        var type = reversePriorityOrder[i2];
        var typeState = state[type];
        var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
        var propIsVariant = isVariantLabel(prop);
        var activeDelta = type === changedActiveType ? typeState.isActive : null;
        if (activeDelta === false)
          removedVariantIndex = i2;
        var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
        if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
          isInherited = false;
        }
        typeState.protectedKeys = __assign({}, encounteredKeys);
        if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
          return "continue";
        }
        var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
        var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
        var definitionList = Array.isArray(prop) ? prop : [prop];
        var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
        if (activeDelta === false)
          resolvedValues = {};
        var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
        var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);
        var markToAnimate = function(key2) {
          shouldAnimateType = true;
          removedKeys.delete(key2);
          typeState.needsAnimating[key2] = true;
        };
        for (var key in allKeys) {
          var next = resolvedValues[key];
          var prev = prevResolvedValues[key];
          if (encounteredKeys.hasOwnProperty(key))
            continue;
          if (next !== prev) {
            if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
              if (!shallowCompare(next, prev) || variantDidChange) {
                markToAnimate(key);
              } else {
                typeState.protectedKeys[key] = true;
              }
            } else if (next !== void 0) {
              markToAnimate(key);
            } else {
              removedKeys.add(key);
            }
          } else if (next !== void 0 && removedKeys.has(key)) {
            markToAnimate(key);
          } else {
            typeState.protectedKeys[key] = true;
          }
        }
        typeState.prevProp = prop;
        typeState.prevResolvedValues = resolvedValues;
        if (typeState.isActive) {
          encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
        }
        if (isInitialRender && visualElement2.blockInitialAnimation) {
          shouldAnimateType = false;
        }
        if (shouldAnimateType && !isInherited) {
          animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
            return {
              animation,
              options: __assign({ type }, options)
            };
          })), false));
        }
      };
      for (var i = 0; i < numAnimationTypes; i++) {
        _loop_1(i);
      }
      allAnimatedKeys = __assign({}, encounteredKeys);
      if (removedKeys.size) {
        var fallbackAnimation_1 = {};
        removedKeys.forEach(function(key) {
          var fallbackTarget = visualElement2.getBaseTarget(key);
          if (fallbackTarget !== void 0) {
            fallbackAnimation_1[key] = fallbackTarget;
          }
        });
        animations2.push({ animation: fallbackAnimation_1 });
      }
      var shouldAnimate = Boolean(animations2.length);
      if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
        shouldAnimate = false;
      }
      isInitialRender = false;
      return shouldAnimate ? animate3(animations2) : Promise.resolve();
    }
    function setActive(type, isActive, options) {
      var _a;
      if (state[type].isActive === isActive)
        return Promise.resolve();
      (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
        var _a2;
        return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
      });
      state[type].isActive = isActive;
      var animations2 = animateChanges(options, type);
      for (var key in state) {
        state[key].protectedKeys = {};
      }
      return animations2;
    }
    return {
      isAnimated,
      animateChanges,
      setActive,
      setAnimateFunction,
      getState: function() {
        return state;
      }
    };
  }
  function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
      return next !== prev;
    } else if (isVariantLabels(next)) {
      return !shallowCompare(next, prev);
    }
    return false;
  }
  function createTypeState(isActive) {
    if (isActive === void 0) {
      isActive = false;
    }
    return {
      isActive,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function createState() {
    var _a;
    return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
  }

  // node_modules/framer-motion/dist/es/motion/features/animations.mjs
  var animations = {
    animation: makeRenderlessComponent(function(_a) {
      var visualElement2 = _a.visualElement, animate3 = _a.animate;
      visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
      if (isAnimationControls(animate3)) {
        (0, import_react28.useEffect)(function() {
          return animate3.subscribe(visualElement2);
        }, [animate3]);
      }
    }),
    exit: makeRenderlessComponent(function(props) {
      var custom = props.custom, visualElement2 = props.visualElement;
      var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
      var presenceContext = (0, import_react28.useContext)(PresenceContext);
      (0, import_react28.useEffect)(function() {
        var _a2, _b;
        visualElement2.isPresent = isPresent;
        var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
        !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
      }, [isPresent]);
    })
  };

  // node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
  var import_react29 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/gestures/PanSession.mjs
  var PanSession = function() {
    function PanSession2(event, handlers, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.updatePoint = function() {
        if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
          return;
        var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
        var isPanStarted = _this.startEvent !== null;
        var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        var point2 = info2.point;
        var timestamp2 = getFrameData().timestamp;
        _this.history.push(__assign(__assign({}, point2), { timestamp: timestamp2 }));
        var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
        if (!isPanStarted) {
          onStart && onStart(_this.lastMoveEvent, info2);
          _this.startEvent = _this.lastMoveEvent;
        }
        onMove && onMove(_this.lastMoveEvent, info2);
      };
      this.handlePointerMove = function(event2, info2) {
        _this.lastMoveEvent = event2;
        _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
        if (isMouseEvent(event2) && event2.buttons === 0) {
          _this.handlePointerUp(event2, info2);
          return;
        }
        es_default.update(_this.updatePoint, true);
      };
      this.handlePointerUp = function(event2, info2) {
        _this.end();
        var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
        var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
        if (_this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (isTouchEvent(event) && event.touches.length > 1)
        return;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      var info = extractEventInfo(event);
      var initialInfo = transformPoint(info, this.transformPagePoint);
      var point = initialInfo.point;
      var timestamp = getFrameData().timestamp;
      this.history = [__assign(__assign({}, point), { timestamp })];
      var onSessionStart = handlers.onSessionStart;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
    }
    PanSession2.prototype.updateHandlers = function(handlers) {
      this.handlers = handlers;
    };
    PanSession2.prototype.end = function() {
      this.removeListeners && this.removeListeners();
      cancelSync.update(this.updatePoint);
    };
    return PanSession2;
  }();
  function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a2, b2) {
    return { x: a2.x - b2.x, y: a2.y - b2.y };
  }
  function getPanInfo(_a, history) {
    var point = _a.point;
    return {
      point,
      delta: subtractPoint(point, lastDevicePoint(history)),
      offset: subtractPoint(point, startDevicePoint(history)),
      velocity: getVelocity2(history, 0.1)
    };
  }
  function startDevicePoint(history) {
    return history[0];
  }
  function lastDevicePoint(history) {
    return history[history.length - 1];
  }
  function getVelocity2(history, timeDelta) {
    if (history.length < 2) {
      return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
      timestampedPoint = history[i];
      if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
        break;
      }
      i--;
    }
    if (!timestampedPoint) {
      return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
    if (time === 0) {
      return { x: 0, y: 0 };
    }
    var currentVelocity = {
      x: (lastPoint.x - timestampedPoint.x) / time,
      y: (lastPoint.y - timestampedPoint.y) / time
    };
    if (currentVelocity.x === Infinity) {
      currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
      currentVelocity.y = 0;
    }
    return currentVelocity;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
  function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== void 0 && point < min) {
      point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== void 0 && point > max) {
      point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
  }
  function calcRelativeAxisConstraints(axis, min, max) {
    return {
      min: min !== void 0 ? axis.min + min : void 0,
      max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
  }
  function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
      x: calcRelativeAxisConstraints(layoutBox.x, left, right),
      y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
  }
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
      _a = __read([max, min], 2), min = _a[0], max = _a[1];
    }
    return { min, max };
  }
  function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
      x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
      y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
  }
  function calcOrigin2(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
      origin = progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
      origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
  }
  function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== void 0) {
      relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== void 0) {
      relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
  }
  var defaultElastic = 0.35;
  function resolveDragElastic(dragElastic) {
    if (dragElastic === void 0) {
      dragElastic = defaultElastic;
    }
    if (dragElastic === false) {
      dragElastic = 0;
    } else if (dragElastic === true) {
      dragElastic = defaultElastic;
    }
    return {
      x: resolveAxisElastic(dragElastic, "left", "right"),
      y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
  }
  function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
      min: resolvePointElastic(dragElastic, minLabel),
      max: resolvePointElastic(dragElastic, maxLabel)
    };
  }
  function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
  }

  // node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
  function convertBoundingBoxToBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function convertBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
  }
  function transformBoxPoints(point, transformPoint2) {
    if (!transformPoint2)
      return point;
    var topLeft = transformPoint2({ x: point.left, y: point.top });
    var bottomRight = transformPoint2({ x: point.right, y: point.bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }

  // node_modules/framer-motion/dist/es/projection/utils/measure.mjs
  function measureViewportBox(instance, transformPoint2) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
  }
  function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
    var viewportBox = measureViewportBox(element, transformPagePoint);
    var scroll = rootProjectionNode2.scroll;
    if (scroll) {
      translateAxis(viewportBox.x, scroll.x);
      translateAxis(viewportBox.y, scroll.y);
    }
    return viewportBox;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
  var elementDragControls = /* @__PURE__ */ new WeakMap();
  var VisualElementDragControls = function() {
    function VisualElementDragControls2(visualElement2) {
      this.openGlobalLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = { x: 0, y: 0 };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = createBox();
      this.visualElement = visualElement2;
    }
    VisualElementDragControls2.prototype.start = function(originEvent, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
      if (this.visualElement.isPresent === false)
        return;
      var onSessionStart = function(event) {
        _this.stopAnimation();
        if (snapToCursor) {
          _this.snapToCursor(extractEventInfo(event, "page").point);
        }
      };
      var onStart = function(event, info) {
        var _a2;
        var _b2 = _this.getProps(), drag2 = _b2.drag, dragPropagation = _b2.dragPropagation, onDragStart = _b2.onDragStart;
        if (drag2 && !dragPropagation) {
          if (_this.openGlobalLock)
            _this.openGlobalLock();
          _this.openGlobalLock = getGlobalLock(drag2);
          if (!_this.openGlobalLock)
            return;
        }
        _this.isDragging = true;
        _this.currentDirection = null;
        _this.resolveConstraints();
        if (_this.visualElement.projection) {
          _this.visualElement.projection.isAnimationBlocked = true;
          _this.visualElement.projection.target = void 0;
        }
        eachAxis(function(axis) {
          var _a3, _b3;
          var current = _this.getAxisMotionValue(axis).get() || 0;
          if (percent.test(current)) {
            var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];
            if (measuredAxis) {
              var length_1 = calcLength(measuredAxis);
              current = length_1 * (parseFloat(current) / 100);
            }
          }
          _this.originPoint[axis] = current;
        });
        onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
        (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Drag, true);
      };
      var onMove = function(event, info) {
        var _a2 = _this.getProps(), dragPropagation = _a2.dragPropagation, dragDirectionLock = _a2.dragDirectionLock, onDirectionLock = _a2.onDirectionLock, onDrag = _a2.onDrag;
        if (!dragPropagation && !_this.openGlobalLock)
          return;
        var offset = info.offset;
        if (dragDirectionLock && _this.currentDirection === null) {
          _this.currentDirection = getCurrentDirection(offset);
          if (_this.currentDirection !== null) {
            onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
          }
          return;
        }
        _this.updateAxis("x", info.point, offset);
        _this.updateAxis("y", info.point, offset);
        _this.visualElement.syncRender();
        onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
      };
      var onSessionEnd = function(event, info) {
        return _this.stop(event, info);
      };
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd
      }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    };
    VisualElementDragControls2.prototype.stop = function(event, info) {
      var isDragging = this.isDragging;
      this.cancel();
      if (!isDragging)
        return;
      var velocity = info.velocity;
      this.startAnimation(velocity);
      var onDragEnd = this.getProps().onDragEnd;
      onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
    };
    VisualElementDragControls2.prototype.cancel = function() {
      var _a, _b;
      this.isDragging = false;
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = false;
      }
      (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
      this.panSession = void 0;
      var dragPropagation = this.getProps().dragPropagation;
      if (!dragPropagation && this.openGlobalLock) {
        this.openGlobalLock();
        this.openGlobalLock = null;
      }
      (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
    };
    VisualElementDragControls2.prototype.updateAxis = function(axis, _point, offset) {
      var drag2 = this.getProps().drag;
      if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
        return;
      var axisValue = this.getAxisMotionValue(axis);
      var next = this.originPoint[axis] + offset[axis];
      if (this.constraints && this.constraints[axis]) {
        next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
      }
      axisValue.set(next);
    };
    VisualElementDragControls2.prototype.resolveConstraints = function() {
      var _this = this;
      var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
      var layout = (this.visualElement.projection || {}).layout;
      var prevConstraints = this.constraints;
      if (dragConstraints && isRefObject(dragConstraints)) {
        if (!this.constraints) {
          this.constraints = this.resolveRefConstraints();
        }
      } else {
        if (dragConstraints && layout) {
          this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
        } else {
          this.constraints = false;
        }
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
        eachAxis(function(axis) {
          if (_this.getAxisMotionValue(axis)) {
            _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
          }
        });
      }
    };
    VisualElementDragControls2.prototype.resolveRefConstraints = function() {
      var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
      if (!constraints || !isRefObject(constraints))
        return false;
      var constraintsElement = constraints.current;
      invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      var projection = this.visualElement.projection;
      if (!projection || !projection.layout)
        return false;
      var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
      var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
      if (onMeasureDragConstraints) {
        var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToBox(userConstraints);
        }
      }
      return measuredConstraints;
    };
    VisualElementDragControls2.prototype.startAnimation = function(velocity) {
      var _this = this;
      var _a = this.getProps(), drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
      var constraints = this.constraints || {};
      var momentumAnimations = eachAxis(function(axis) {
        var _a2;
        if (!shouldDrag(axis, drag2, _this.currentDirection)) {
          return;
        }
        var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
        if (dragSnapToOrigin)
          transition = { min: 0, max: 0 };
        var bounceStiffness = dragElastic ? 200 : 1e6;
        var bounceDamping = dragElastic ? 40 : 1e7;
        var inertia2 = __assign(__assign({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness, bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
        return _this.startAxisValueAnimation(axis, inertia2);
      });
      return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    };
    VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
      var axisValue = this.getAxisMotionValue(axis);
      return startAnimation(axis, axisValue, 0, transition);
    };
    VisualElementDragControls2.prototype.stopAnimation = function() {
      var _this = this;
      eachAxis(function(axis) {
        return _this.getAxisMotionValue(axis).stop();
      });
    };
    VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
      var _a, _b;
      var dragKey = "_drag" + axis.toUpperCase();
      var externalMotionValue = this.visualElement.getProps()[dragKey];
      return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
    };
    VisualElementDragControls2.prototype.snapToCursor = function(point) {
      var _this = this;
      eachAxis(function(axis) {
        var drag2 = _this.getProps().drag;
        if (!shouldDrag(axis, drag2, _this.currentDirection))
          return;
        var projection = _this.visualElement.projection;
        var axisValue = _this.getAxisMotionValue(axis);
        if (projection && projection.layout) {
          var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
          axisValue.set(point[axis] - mix(min, max, 0.5));
        }
      });
    };
    VisualElementDragControls2.prototype.scalePositionWithinConstraints = function() {
      var _this = this;
      var _a;
      var _b = this.getProps(), drag2 = _b.drag, dragConstraints = _b.dragConstraints;
      var projection = this.visualElement.projection;
      if (!isRefObject(dragConstraints) || !projection || !this.constraints)
        return;
      this.stopAnimation();
      var boxProgress = { x: 0, y: 0 };
      eachAxis(function(axis) {
        var axisValue = _this.getAxisMotionValue(axis);
        if (axisValue) {
          var latest = axisValue.get();
          boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, _this.constraints[axis]);
        }
      });
      var transformTemplate = this.visualElement.getProps().transformTemplate;
      this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
      this.resolveConstraints();
      eachAxis(function(axis) {
        if (!shouldDrag(axis, drag2, null))
          return;
        var axisValue = _this.getAxisMotionValue(axis);
        var _a2 = _this.constraints[axis], min = _a2.min, max = _a2.max;
        axisValue.set(mix(min, max, boxProgress[axis]));
      });
    };
    VisualElementDragControls2.prototype.addListeners = function() {
      var _this = this;
      var _a;
      elementDragControls.set(this.visualElement, this);
      var element = this.visualElement.getInstance();
      var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
        var _a2 = _this.getProps(), drag2 = _a2.drag, _b = _a2.dragListener, dragListener = _b === void 0 ? true : _b;
        drag2 && dragListener && _this.start(event);
      });
      var measureDragConstraints = function() {
        var dragConstraints = _this.getProps().dragConstraints;
        if (isRefObject(dragConstraints)) {
          _this.constraints = _this.resolveRefConstraints();
        }
      };
      var projection = this.visualElement.projection;
      var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
      if (projection && !projection.layout) {
        (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
        projection.updateLayout();
      }
      measureDragConstraints();
      var stopResizeListener = addDomEvent(window, "resize", function() {
        _this.scalePositionWithinConstraints();
      });
      projection.addEventListener("didUpdate", function(_a2) {
        var delta = _a2.delta, hasLayoutChanged = _a2.hasLayoutChanged;
        if (_this.isDragging && hasLayoutChanged) {
          eachAxis(function(axis) {
            var motionValue2 = _this.getAxisMotionValue(axis);
            if (!motionValue2)
              return;
            _this.originPoint[axis] += delta[axis].translate;
            motionValue2.set(motionValue2.get() + delta[axis].translate);
          });
          _this.visualElement.syncRender();
        }
      });
      return function() {
        stopResizeListener();
        stopPointerListener();
        stopMeasureLayoutListener();
      };
    };
    VisualElementDragControls2.prototype.getProps = function() {
      var props = this.visualElement.getProps();
      var _a = props.drag, drag2 = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props.dragElastic, dragElastic = _e === void 0 ? defaultElastic : _e, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
      return __assign(__assign({}, props), { drag: drag2, dragDirectionLock, dragPropagation, dragConstraints, dragElastic, dragMomentum });
    };
    return VisualElementDragControls2;
  }();
  function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
  }
  function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) {
      lockThreshold = 10;
    }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
      direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
      direction = "x";
    }
    return direction;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
  function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement2 = props.visualElement;
    var dragControls = useConstant(function() {
      return new VisualElementDragControls(visualElement2);
    });
    (0, import_react29.useEffect)(function() {
      return groupDragControls && groupDragControls.subscribe(dragControls);
    }, [dragControls, groupDragControls]);
    (0, import_react29.useEffect)(function() {
      return dragControls.addListeners();
    }, [dragControls]);
  }

  // node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs
  var import_react30 = __toESM(require_react(), 1);
  function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = (0, import_react30.useRef)(null);
    var transformPagePoint = (0, import_react30.useContext)(MotionConfigContext).transformPagePoint;
    var handlers = {
      onSessionStart: onPanSessionStart,
      onStart: onPanStart,
      onMove: onPan,
      onEnd: function(event, info) {
        panSession.current = null;
        onPanEnd && onPanEnd(event, info);
      }
    };
    (0, import_react30.useEffect)(function() {
      if (panSession.current !== null) {
        panSession.current.updateHandlers(handlers);
      }
    });
    function onPointerDown(event) {
      panSession.current = new PanSession(event, handlers, {
        transformPagePoint
      });
    }
    usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function() {
      return panSession.current && panSession.current.end();
    });
  }

  // node_modules/framer-motion/dist/es/motion/features/drag.mjs
  var drag = {
    pan: makeRenderlessComponent(usePanGesture),
    drag: makeRenderlessComponent(useDrag)
  };

  // node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs
  var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "LayoutAnimationStart",
    "SetAxisTarget",
    "Unmount"
  ];
  function createLifecycles() {
    var managers = names.map(function() {
      return new SubscriptionManager();
    });
    var propSubscriptions = {};
    var lifecycles = {
      clearAllListeners: function() {
        return managers.forEach(function(manager) {
          return manager.clear();
        });
      },
      updatePropListeners: function(props) {
        names.forEach(function(name) {
          var _a;
          var on = "on" + name;
          var propListener = props[on];
          (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
          if (propListener) {
            propSubscriptions[name] = lifecycles[on](propListener);
          }
        });
      }
    };
    managers.forEach(function(manager, i) {
      lifecycles["on" + names[i]] = function(handler) {
        return manager.add(handler);
      };
      lifecycles["notify" + names[i]] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return manager.notify.apply(manager, __spreadArray([], __read(args), false));
      };
    });
    return lifecycles;
  }

  // node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
  function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
      var nextValue = next[key];
      var prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          var existingValue = element.getValue(key);
          !existingValue.hasAnimated && existingValue.set(nextValue);
        } else {
          element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
        }
      }
    }
    for (var key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }

  // node_modules/framer-motion/dist/es/render/index.mjs
  var visualElement = function(_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox2 = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps;
    return function(_a2, options) {
      var parent = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState, shouldReduceMotion = _a2.shouldReduceMotion;
      if (options === void 0) {
        options = {};
      }
      var isMounted = false;
      var latestValues = visualState.latestValues, renderState = visualState.renderState;
      var instance;
      var lifecycles = createLifecycles();
      var values = /* @__PURE__ */ new Map();
      var valueSubscriptions = /* @__PURE__ */ new Map();
      var prevMotionValues = {};
      var baseTarget = __assign({}, latestValues);
      var removeFromVariantTree;
      function render() {
        if (!instance || !isMounted)
          return;
        triggerBuild();
        renderInstance(instance, renderState, props.style, element.projection);
      }
      function triggerBuild() {
        build(element, renderState, latestValues, options, props);
      }
      function update() {
        lifecycles.notifyUpdate(latestValues);
      }
      function bindToMotionValue(key2, value2) {
        var removeOnChange = value2.onChange(function(latestValue) {
          latestValues[key2] = latestValue;
          props.onUpdate && es_default.update(update, false, true);
        });
        var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
        valueSubscriptions.set(key2, function() {
          removeOnChange();
          removeOnRenderRequest();
        });
      }
      var initialMotionValues = scrapeMotionValuesFromProps3(props);
      for (var key in initialMotionValues) {
        var value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key], false);
        }
      }
      var isControllingVariants = checkIfControllingVariants(props);
      var isVariantNode = checkIfVariantNode(props);
      var element = __assign(__assign({
        treeType,
        current: null,
        depth: parent ? parent.depth + 1 : 0,
        parent,
        children: /* @__PURE__ */ new Set(),
        presenceId,
        shouldReduceMotion,
        variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
        isVisible: void 0,
        manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
        blockInitialAnimation,
        isMounted: function() {
          return Boolean(instance);
        },
        mount: function(newInstance) {
          isMounted = true;
          instance = element.current = newInstance;
          if (element.projection) {
            element.projection.mount(newInstance);
          }
          if (isVariantNode && parent && !isControllingVariants) {
            removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
          }
          values.forEach(function(value2, key2) {
            return bindToMotionValue(key2, value2);
          });
          parent === null || parent === void 0 ? void 0 : parent.children.add(element);
          element.setProps(props);
        },
        unmount: function() {
          var _a3;
          (_a3 = element.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
          cancelSync.update(update);
          cancelSync.render(render);
          valueSubscriptions.forEach(function(remove) {
            return remove();
          });
          removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
          parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
          lifecycles.clearAllListeners();
          instance = void 0;
          isMounted = false;
        },
        addVariantChild: function(child) {
          var _a3;
          var closestVariantNode = element.getClosestVariantNode();
          if (closestVariantNode) {
            (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
            return function() {
              return closestVariantNode.variantChildren.delete(child);
            };
          }
        },
        sortNodePosition: function(other) {
          if (!sortNodePosition || treeType !== other.treeType)
            return 0;
          return sortNodePosition(element.getInstance(), other.getInstance());
        },
        getClosestVariantNode: function() {
          return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
        },
        getLayoutId: function() {
          return props.layoutId;
        },
        getInstance: function() {
          return instance;
        },
        getStaticValue: function(key2) {
          return latestValues[key2];
        },
        setStaticValue: function(key2, value2) {
          return latestValues[key2] = value2;
        },
        getLatestValues: function() {
          return latestValues;
        },
        setVisibility: function(visibility) {
          if (element.isVisible === visibility)
            return;
          element.isVisible = visibility;
          element.scheduleRender();
        },
        makeTargetAnimatable: function(target, canMutate) {
          if (canMutate === void 0) {
            canMutate = true;
          }
          return makeTargetAnimatable(element, target, props, canMutate);
        },
        measureViewportBox: function() {
          return measureViewportBox2(instance, props);
        },
        addValue: function(key2, value2) {
          if (element.hasValue(key2))
            element.removeValue(key2);
          values.set(key2, value2);
          latestValues[key2] = value2.get();
          bindToMotionValue(key2, value2);
        },
        removeValue: function(key2) {
          var _a3;
          values.delete(key2);
          (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
          valueSubscriptions.delete(key2);
          delete latestValues[key2];
          removeValueFromRenderState(key2, renderState);
        },
        hasValue: function(key2) {
          return values.has(key2);
        },
        getValue: function(key2, defaultValue) {
          var value2 = values.get(key2);
          if (value2 === void 0 && defaultValue !== void 0) {
            value2 = motionValue(defaultValue);
            element.addValue(key2, value2);
          }
          return value2;
        },
        forEachValue: function(callback) {
          return values.forEach(callback);
        },
        readValue: function(key2) {
          var _a3;
          return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
        },
        setBaseTarget: function(key2, value2) {
          baseTarget[key2] = value2;
        },
        getBaseTarget: function(key2) {
          if (getBaseTarget) {
            var target = getBaseTarget(props, key2);
            if (target !== void 0 && !isMotionValue(target))
              return target;
          }
          return baseTarget[key2];
        }
      }, lifecycles), {
        build: function() {
          triggerBuild();
          return renderState;
        },
        scheduleRender: function() {
          es_default.render(render, false, true);
        },
        syncRender: render,
        setProps: function(newProps) {
          if (newProps.transformTemplate || props.transformTemplate) {
            element.scheduleRender();
          }
          props = newProps;
          lifecycles.updatePropListeners(newProps);
          prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps3(props), prevMotionValues);
        },
        getProps: function() {
          return props;
        },
        getVariant: function(name) {
          var _a3;
          return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
        },
        getDefaultTransition: function() {
          return props.transition;
        },
        getTransformPagePoint: function() {
          return props.transformPagePoint;
        },
        getVariantContext: function(startAtParent) {
          if (startAtParent === void 0) {
            startAtParent = false;
          }
          if (startAtParent)
            return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
          if (!isControllingVariants) {
            var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
            if (props.initial !== void 0) {
              context_1.initial = props.initial;
            }
            return context_1;
          }
          var context = {};
          for (var i = 0; i < numVariantProps; i++) {
            var name_1 = variantProps[i];
            var prop = props[name_1];
            if (isVariantLabel(prop) || prop === false) {
              context[name_1] = prop;
            }
          }
          return context;
        }
      });
      return element;
    };
  };
  var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder), false);
  var numVariantProps = variantProps.length;

  // node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
  function isCSSVariable2(value) {
    return typeof value === "string" && value.startsWith("var(--");
  }
  var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
      return [,];
    var _a = __read(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
  }
  var maxDepth = 4;
  function getVariableValue(current, element, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    invariant(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'));
    var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    if (!token)
      return;
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      return resolved.trim();
    } else if (isCSSVariable2(fallback)) {
      return getVariableValue(fallback, element, depth + 1);
    } else {
      return fallback;
    }
  }
  function resolveCSSVariables(visualElement2, _a, transitionEnd) {
    var _b;
    var target = __rest(_a, []);
    var element = visualElement2.getInstance();
    if (!(element instanceof Element))
      return { target, transitionEnd };
    if (transitionEnd) {
      transitionEnd = __assign({}, transitionEnd);
    }
    visualElement2.forEachValue(function(value) {
      var current2 = value.get();
      if (!isCSSVariable2(current2))
        return;
      var resolved2 = getVariableValue(current2, element);
      if (resolved2)
        value.set(resolved2);
    });
    for (var key in target) {
      var current = target[key];
      if (!isCSSVariable2(current))
        continue;
      var resolved = getVariableValue(current, element);
      if (!resolved)
        continue;
      target[key] = resolved;
      if (transitionEnd)
        (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
    }
    return { target, transitionEnd };
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
  var positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y"
  ]);
  var isPositionalKey = function(key) {
    return positionalKeys.has(key);
  };
  var hasPositionalKey = function(target) {
    return Object.keys(target).some(isPositionalKey);
  };
  var setAndResetVelocity = function(value, to) {
    value.set(to, false);
    value.set(to);
  };
  var isNumOrPxType = function(v) {
    return v === number || v === px;
  };
  var BoundingBoxDimension;
  (function(BoundingBoxDimension2) {
    BoundingBoxDimension2["width"] = "width";
    BoundingBoxDimension2["height"] = "height";
    BoundingBoxDimension2["left"] = "left";
    BoundingBoxDimension2["right"] = "right";
    BoundingBoxDimension2["top"] = "top";
    BoundingBoxDimension2["bottom"] = "bottom";
  })(BoundingBoxDimension || (BoundingBoxDimension = {}));
  var getPosFromMatrix = function(matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
  };
  var getTranslateFromMatrix = function(pos2, pos3) {
    return function(_bbox, _a) {
      var transform = _a.transform;
      if (transform === "none" || !transform)
        return 0;
      var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
      if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
      } else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
          return getPosFromMatrix(matrix[1], pos2);
        } else {
          return 0;
        }
      }
    };
  };
  var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformProps.filter(function(key) {
    return !transformKeys.has(key);
  });
  function removeNonTranslationalTransform(visualElement2) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    if (removedTransforms.length)
      visualElement2.syncRender();
    return removedTransforms;
  }
  var positionalValues = {
    width: function(_a, _b) {
      var x = _a.x;
      var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
      return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: function(_a, _b) {
      var y = _a.y;
      var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
      return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: function(_bbox, _a) {
      var top = _a.top;
      return parseFloat(top);
    },
    left: function(_bbox, _a) {
      var left = _a.left;
      return parseFloat(left);
    },
    bottom: function(_a, _b) {
      var y = _a.y;
      var top = _b.top;
      return parseFloat(top) + (y.max - y.min);
    },
    right: function(_a, _b) {
      var x = _a.x;
      var left = _b.left;
      return parseFloat(left) + (x.max - x.min);
    },
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
  };
  var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
    var originBbox = visualElement2.measureViewportBox();
    var element = visualElement2.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display;
    var origin = {};
    if (display === "none") {
      visualElement2.setStaticValue("display", target.display || "block");
    }
    changedKeys.forEach(function(key) {
      origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    visualElement2.syncRender();
    var targetBbox = visualElement2.measureViewportBox();
    changedKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      setAndResetVelocity(value, origin[key]);
      target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
  };
  var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
    if (origin === void 0) {
      origin = {};
    }
    if (transitionEnd === void 0) {
      transitionEnd = {};
    }
    target = __assign({}, target);
    transitionEnd = __assign({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function(key) {
      var value = visualElement2.getValue(key);
      if (!visualElement2.hasValue(key))
        return;
      var from = origin[key];
      var fromType = findDimensionValueType(from);
      var to = target[key];
      var toType;
      if (isKeyframesTarget(to)) {
        var numKeyframes = to.length;
        var fromIndex = to[0] === null ? 1 : 0;
        from = to[fromIndex];
        fromType = findDimensionValueType(from);
        for (var i = fromIndex; i < numKeyframes; i++) {
          if (!toType) {
            toType = findDimensionValueType(to[i]);
            invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
          } else {
            invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
          }
        }
      } else {
        toType = findDimensionValueType(to);
      }
      if (fromType !== toType) {
        if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
          var current = value.get();
          if (typeof current === "string") {
            value.set(parseFloat(current));
          }
          if (typeof to === "string") {
            target[key] = parseFloat(to);
          } else if (Array.isArray(to) && toType === px) {
            target[key] = to.map(parseFloat);
          }
        } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
          if (from === 0) {
            value.set(toType.transform(from));
          } else {
            target[key] = fromType.transform(to);
          }
        } else {
          if (!hasAttemptedToRemoveTransformValues) {
            removedTransformValues = removeNonTranslationalTransform(visualElement2);
            hasAttemptedToRemoveTransformValues = true;
          }
          changedValueTypeKeys.push(key);
          transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
          setAndResetVelocity(value, to);
        }
      }
    });
    if (changedValueTypeKeys.length) {
      var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
      if (removedTransformValues.length) {
        removedTransformValues.forEach(function(_a) {
          var _b = __read(_a, 2), key = _b[0], value = _b[1];
          visualElement2.getValue(key).set(value);
        });
      }
      visualElement2.syncRender();
      return { target: convertedTarget, transitionEnd };
    } else {
      return { target, transitionEnd };
    }
  };
  function unitConversion(visualElement2, target, origin, transitionEnd) {
    return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
  var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
    var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement2, target, origin, transitionEnd);
  };

  // node_modules/framer-motion/dist/es/render/html/visual-element.mjs
  function getComputedStyle2(element) {
    return window.getComputedStyle(element);
  }
  var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function(domElement, key) {
      if (isTransformProp(key)) {
        var defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      } else {
        var computedStyle = getComputedStyle2(domElement);
        return (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      }
    },
    sortNodePosition: function(a2, b2) {
      return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
    },
    getBaseTarget: function(props, key) {
      var _a;
      return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function(element, _a) {
      var transformPagePoint = _a.transformPagePoint;
      return measureViewportBox(element, transformPagePoint);
    },
    resetTransform: function(element, domElement, props) {
      var transformTemplate = props.transformTemplate;
      domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      element.scheduleRender();
    },
    restoreTransform: function(instance, mutableState) {
      instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function(key, _a) {
      var vars = _a.vars, style = _a.style;
      delete vars[key];
      delete style[key];
    },
    makeTargetAnimatable: function(element, _a, _b, isMounted) {
      var transformValues = _b.transformValues;
      if (isMounted === void 0) {
        isMounted = true;
      }
      var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
      var origin = getOrigin(target, transition || {}, element);
      if (transformValues) {
        if (transitionEnd)
          transitionEnd = transformValues(transitionEnd);
        if (target)
          target = transformValues(target);
        if (origin)
          origin = transformValues(origin);
      }
      if (isMounted) {
        checkTargetForNewValues(element, target, origin);
        var parsed = parseDomVariant(element, target, origin, transitionEnd);
        transitionEnd = parsed.transitionEnd;
        target = parsed.target;
      }
      return __assign({ transition, transitionEnd }, target);
    },
    scrapeMotionValuesFromProps,
    build: function(element, renderState, latestValues, options, props) {
      if (element.isVisible !== void 0) {
        renderState.style.visibility = element.isVisible ? "visible" : "hidden";
      }
      buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
    },
    render: renderHTML
  };
  var htmlVisualElement = visualElement(htmlConfig);

  // node_modules/framer-motion/dist/es/render/svg/visual-element.mjs
  var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), { getBaseTarget: function(props, key) {
    return props[key];
  }, readValueFromInstance: function(domElement, key) {
    var _a;
    if (isTransformProp(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return domElement.getAttribute(key);
  }, scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, build: function(_element, renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
  }, render: renderSVG }));

  // node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
  var createDomVisualElement = function(Component, options) {
    return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
  };

  // node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
  var import_react31 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
  function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
      return 0;
    return pixels / (axis.max - axis.min) * 100;
  }
  var correctBorderRadius = {
    correct: function(latest, node) {
      if (!node.target)
        return latest;
      if (typeof latest === "string") {
        if (px.test(latest)) {
          latest = parseFloat(latest);
        } else {
          return latest;
        }
      }
      var x = pixelsToPercent(latest, node.target.x);
      var y = pixelsToPercent(latest, node.target.y);
      return "".concat(x, "% ").concat(y, "%");
    }
  };

  // node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
  var varToken = "_$css";
  var correctBoxShadow = {
    correct: function(latest, _a) {
      var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
      var original = latest;
      var containsCSSVariables = latest.includes("var(");
      var cssVariables = [];
      if (containsCSSVariables) {
        latest = latest.replace(cssVariableRegex, function(match) {
          cssVariables.push(match);
          return varToken;
        });
      }
      var shadow = complex.parse(latest);
      if (shadow.length > 5)
        return original;
      var template = complex.createTransformer(latest);
      var offset = typeof shadow[0] !== "number" ? 1 : 0;
      var xScale = projectionDelta.x.scale * treeScale.x;
      var yScale = projectionDelta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      var averageScale = mix(xScale, yScale, 0.5);
      if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
      if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
      var output = template(shadow);
      if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function() {
          var cssVariable = cssVariables[i_1];
          i_1++;
          return cssVariable;
        });
      }
      return output;
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
  var MeasureLayoutWithContext = function(_super) {
    __extends(MeasureLayoutWithContext2, _super);
    function MeasureLayoutWithContext2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MeasureLayoutWithContext2.prototype.componentDidMount = function() {
      var _this = this;
      var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
      var projection = visualElement2.projection;
      addScaleCorrector(defaultScaleCorrectors);
      if (projection) {
        if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
          layoutGroup.group.add(projection);
        if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
          switchLayoutGroup.register(projection);
        }
        projection.root.didUpdate();
        projection.addEventListener("animationComplete", function() {
          _this.safeToRemove();
        });
        projection.setOptions(__assign(__assign({}, projection.options), { onExitComplete: function() {
          return _this.safeToRemove();
        } }));
      }
      globalProjectionState.hasEverUpdated = true;
    };
    MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
      var _this = this;
      var _a = this.props, layoutDependency = _a.layoutDependency, visualElement2 = _a.visualElement, drag2 = _a.drag, isPresent = _a.isPresent;
      var projection = visualElement2.projection;
      if (!projection)
        return null;
      projection.isPresent = isPresent;
      if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
        projection.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (prevProps.isPresent !== isPresent) {
        if (isPresent) {
          projection.promote();
        } else if (!projection.relegate()) {
          es_default.postRender(function() {
            var _a2;
            if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
              _this.safeToRemove();
            }
          });
        }
      }
      return null;
    };
    MeasureLayoutWithContext2.prototype.componentDidUpdate = function() {
      var projection = this.props.visualElement.projection;
      if (projection) {
        projection.root.didUpdate();
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      }
    };
    MeasureLayoutWithContext2.prototype.componentWillUnmount = function() {
      var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
      var projection = visualElement2.projection;
      if (projection) {
        projection.scheduleCheckAfterUnmount();
        if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
          layoutGroup.group.remove(projection);
        if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
          promoteContext.deregister(projection);
      }
    };
    MeasureLayoutWithContext2.prototype.safeToRemove = function() {
      var safeToRemove = this.props.safeToRemove;
      safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
    };
    MeasureLayoutWithContext2.prototype.render = function() {
      return null;
    };
    return MeasureLayoutWithContext2;
  }(import_react31.default.Component);
  function MeasureLayout(props) {
    var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
    var layoutGroup = (0, import_react31.useContext)(LayoutGroupContext);
    return import_react31.default.createElement(MeasureLayoutWithContext, __assign({}, props, { layoutGroup, switchLayoutGroup: (0, import_react31.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove }));
  }
  var defaultScaleCorrectors = {
    borderRadius: __assign(__assign({}, correctBorderRadius), { applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ] }),
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
  };

  // node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
  var layoutFeatures = {
    measureLayout: MeasureLayout
  };

  // node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
  var DocumentProjectionNode = createProjectionNode({
    attachResizeListener: function(ref, notify) {
      ref.addEventListener("resize", notify, { passive: true });
      return function() {
        return ref.removeEventListener("resize", notify);
      };
    },
    measureScroll: function() {
      return {
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
      };
    }
  });

  // node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
  var rootProjectionNode = {
    current: void 0
  };
  var HTMLProjectionNode = createProjectionNode({
    measureScroll: function(instance) {
      return {
        x: instance.scrollLeft,
        y: instance.scrollTop
      };
    },
    defaultParent: function() {
      if (!rootProjectionNode.current) {
        var documentNode = new DocumentProjectionNode(0, {});
        documentNode.mount(window);
        documentNode.setOptions({ layoutScroll: true });
        rootProjectionNode.current = documentNode;
      }
      return rootProjectionNode.current;
    },
    resetTransform: function(instance, value) {
      instance.style.transform = value !== null && value !== void 0 ? value : "none";
    }
  });

  // node_modules/framer-motion/dist/es/render/dom/motion.mjs
  var featureBundle = __assign(__assign(__assign(__assign({}, animations), gestureAnimations), drag), layoutFeatures);
  var motion = /* @__PURE__ */ createMotionProxy(function(Component, config) {
    return createDomMotionConfig(Component, config, featureBundle, createDomVisualElement, HTMLProjectionNode);
  });

  // node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
  var React6 = __toESM(require_react(), 1);
  var import_react35 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/utils/use-force-update.mjs
  var import_react33 = __toESM(require_react(), 1);

  // node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
  var import_react32 = __toESM(require_react(), 1);
  function useIsMounted() {
    var isMounted = (0, import_react32.useRef)(false);
    useIsomorphicLayoutEffect(function() {
      isMounted.current = true;
      return function() {
        isMounted.current = false;
      };
    }, []);
    return isMounted;
  }

  // node_modules/framer-motion/dist/es/utils/use-force-update.mjs
  function useForceUpdate() {
    var isMounted = useIsMounted();
    var _a = __read((0, import_react33.useState)(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    var forceRender = (0, import_react33.useCallback)(function() {
      isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    var deferredForceRender = (0, import_react33.useCallback)(function() {
      return es_default.postRender(forceRender);
    }, [forceRender]);
    return [deferredForceRender, forcedRenderCount];
  }

  // node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
  var React5 = __toESM(require_react(), 1);
  var import_react34 = __toESM(require_react(), 1);
  var PresenceChild = function(_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
    var presenceChildren = useConstant(newChildrenMap);
    var id2 = useId();
    var context = (0, import_react34.useMemo)(function() {
      return {
        id: id2,
        initial,
        isPresent,
        custom,
        onExitComplete: function(childId) {
          var e_1, _a2;
          presenceChildren.set(childId, true);
          try {
            for (var _b = __values(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var isComplete = _c.value;
              if (!isComplete)
                return;
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a2 = _b.return))
                _a2.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
        },
        register: function(childId) {
          presenceChildren.set(childId, false);
          return function() {
            return presenceChildren.delete(childId);
          };
        }
      };
    }, presenceAffectsLayout ? void 0 : [isPresent]);
    (0, import_react34.useMemo)(function() {
      presenceChildren.forEach(function(_, key) {
        return presenceChildren.set(key, false);
      });
    }, [isPresent]);
    React5.useEffect(function() {
      !isPresent && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
    }, [isPresent]);
    return React5.createElement(PresenceContext.Provider, { value: context }, children);
  };
  function newChildrenMap() {
    return /* @__PURE__ */ new Map();
  }

  // node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
  var getChildKey = function(child) {
    return child.key || "";
  };
  var isDev = process$1.env.NODE_ENV !== "production";
  function updateChildLookup(children, allChildren) {
    var seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
    children.forEach(function(child) {
      var key = getChildKey(child);
      if (isDev && seenChildren && seenChildren.has(key)) {
        console.warn('Children of AnimatePresence require unique keys. "'.concat(key, '" is a duplicate.'));
        seenChildren.add(key);
      }
      allChildren.set(key, child);
    });
  }
  function onlyElements(children) {
    var filtered = [];
    import_react35.Children.forEach(children, function(child) {
      if ((0, import_react35.isValidElement)(child))
        filtered.push(child);
    });
    return filtered;
  }
  var AnimatePresence = function(_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
    var _d = __read(useForceUpdate(), 1), forceRender = _d[0];
    var forceRenderLayoutGroup = (0, import_react35.useContext)(LayoutGroupContext).forceRender;
    if (forceRenderLayoutGroup)
      forceRender = forceRenderLayoutGroup;
    var isMounted = useIsMounted();
    var filteredChildren = onlyElements(children);
    var childrenToRender = filteredChildren;
    var exiting = /* @__PURE__ */ new Set();
    var presentChildren = (0, import_react35.useRef)(childrenToRender);
    var allChildren = (0, import_react35.useRef)(/* @__PURE__ */ new Map()).current;
    var isInitialRender = (0, import_react35.useRef)(true);
    useIsomorphicLayoutEffect(function() {
      isInitialRender.current = false;
      updateChildLookup(filteredChildren, allChildren);
      presentChildren.current = childrenToRender;
    });
    useUnmountEffect(function() {
      isInitialRender.current = true;
      allChildren.clear();
      exiting.clear();
    });
    if (isInitialRender.current) {
      return React6.createElement(React6.Fragment, null, childrenToRender.map(function(child) {
        return React6.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout }, child);
      }));
    }
    childrenToRender = __spreadArray([], __read(childrenToRender), false);
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
      var key = presentKeys[i];
      if (targetKeys.indexOf(key) === -1) {
        exiting.add(key);
      }
    }
    if (exitBeforeEnter && exiting.size) {
      childrenToRender = [];
    }
    exiting.forEach(function(key2) {
      if (targetKeys.indexOf(key2) !== -1)
        return;
      var child = allChildren.get(key2);
      if (!child)
        return;
      var insertionIndex = presentKeys.indexOf(key2);
      var onExit = function() {
        allChildren.delete(key2);
        exiting.delete(key2);
        var removeIndex = presentChildren.current.findIndex(function(presentChild) {
          return presentChild.key === key2;
        });
        presentChildren.current.splice(removeIndex, 1);
        if (!exiting.size) {
          presentChildren.current = filteredChildren;
          if (isMounted.current === false)
            return;
          forceRender();
          onExitComplete && onExitComplete();
        }
      };
      childrenToRender.splice(insertionIndex, 0, React6.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout }, child));
    });
    childrenToRender = childrenToRender.map(function(child) {
      var key2 = child.key;
      return exiting.has(key2) ? child : React6.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout }, child);
    });
    if (process$1.env.NODE_ENV !== "production" && exitBeforeEnter && childrenToRender.length > 1) {
      console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return React6.createElement(React6.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map(function(child) {
      return (0, import_react35.cloneElement)(child);
    }));
  };

  // packages/message-box-react/src/FormErrorMessageBox.tsx
  var defaultMessageBoxProps = {
    title: "Feil og mangler i skjemaet"
  };
  var FormErrorMessageBox = (0, import_react36.forwardRef)((props, ref) => {
    const { className, errors, isSubmitted, isValid, messageBoxProps, ...rest } = props;
    const previousErrors = (0, import_react36.useRef)(errors);
    (0, import_react36.useEffect)(() => {
      previousErrors.current = errors;
    }, [errors]);
    const hasNewErrors = errors.length > previousErrors.current.length;
    return /* @__PURE__ */ import_react36.default.createElement(AnimatePresence, null, isSubmitted && !isValid && /* @__PURE__ */ import_react36.default.createElement(motion.div, {
      ref,
      className: (0, import_classnames2.default)("jkl-form-error-message-box", className),
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      ...rest
    }, /* @__PURE__ */ import_react36.default.createElement(ErrorMessageBox, {
      ...defaultMessageBoxProps,
      ...messageBoxProps,
      role: hasNewErrors ? "alert" : "presentation"
    }, /* @__PURE__ */ import_react36.default.createElement("ul", {
      className: "jkl-list"
    }, errors.filter((error) => typeof error !== "undefined").map((error) => /* @__PURE__ */ import_react36.default.createElement(motion.li, {
      className: "jkl-list__item",
      key: error,
      layout: true,
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }, error))))));
  });
  FormErrorMessageBox.displayName = "FormErrorMessageBox";
})();
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
