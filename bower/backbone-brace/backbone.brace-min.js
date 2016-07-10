(function(){function m(a){return c.isArray(a)?c.reduce(a,function(b,a){b[a]=null;return b},{}):a}function k(a,b){if(!a||null==b)return b;if("string"===typeof a||a instanceof String){if(typeof b!==""+a)throw"The typeof "+b+" is "+typeof b+" but expected it to be "+a;return b}if(c.isArray(a)||a===Array){if(!c.has(b,"length")||b instanceof String||c.has({string:1,"function":1},typeof b)||b instanceof f.Collection)throw"Array type expected, but nonnull, non-Array value provided.";return a===Array||!a[0]?
b:c.map(b,c.bind(k,null,a[0]))}if("function"!==typeof a)throw"Invalid expected type "+a+". Should be falsy, String, Array, Backbone.Collection constructor, or function.";return b instanceof a?b:n(a)?new a(k([a.model],b)):new a(b)}function n(a,b){return a&&(a.__super__ instanceof(b||f.Collection)||a.__super__===(b||f.Collection).prototype||a===(b||f.Collection))}function s(a,b){var e={};c.each(a,function(a,c){if(!b[c]||o(a,b[c]))e[c]=a;else if(a&&!o(b[c],a))throw c+" has conflicted type descriptors.";
});return e}function o(a,b){return!b||b===a?!0:!a||"string"===typeof a?!1:a instanceof Array?b===Array||b instanceof Array&&o(a[0],b[0]):"function"!==typeof b?!1:n(b)?n(a,b):a.prototype instanceof b}function l(a){var b=a.extend(),e=a.extend;b.extend=function t(a,b){var h,f=c.extend({},a),j;a&&a.mixins&&(j=a.mixins,delete f.mixins);h=e.call(this,f,b);this.prototype.namedEvents&&g.Mixins.applyMixin(h,{namedEvents:this.prototype.namedEvents});this.prototype.namedAttributes&&g.Mixins.applyMixin(h,{namedAttributes:this.prototype.namedAttributes});
j&&c.each(a.mixins,function(a){g.Mixins.applyMixin(h,a)});h.prototype.namedEvents&&g.Mixins.applyMixin(h,g.EventsMixinCreator.create(h.prototype.namedEvents));h.prototype.namedAttributes&&(h.prototype.namedAttributes=m(h.prototype.namedAttributes),g.Mixins.applyMixin(h,g.AttributesMixinCreator.create(h.prototype.namedAttributes)));if(h.prototype.toJSON){var k=h.prototype.toJSON;h.prototype.toJSON=function(){var a=k.call(this);return c.isObject(a)?c.reduce(a,function(a,b,e){b&&c.isFunction(b.toJSON)?
a[e]=b.toJSON():c.isArray(b)&&(a[e]=c.map(b,function(a){return a&&c.isFunction(a.toJSON)?a.toJSON():a}));return a},a):a}}h.extend=t;return h};return b}var g;g="undefined"!==typeof exports?exports:this.Brace={};var c=this._;!c&&"undefined"!==typeof require&&(c=require("underscore"));var f=this.Backbone;!f&&"undefined"!==typeof require&&(f=require("backbone"));g.Mixins={createMethodName:function(a,b){return a+b.charAt(0).toUpperCase()+b.substr(1)},applyMixin:function(a,b){c.forEach(c.keys(b),function(e){var d=
a.prototype;if("initialize"===e){var g=d.initialize;d.initialize=function(){g&&g.apply(this,arguments);b.initialize.apply(this,arguments)}}else if("validate"===e){var f=d.validate;d.validate=function(){if(f){var a=f.apply(this,arguments);if(a)return a}return b.validate.apply(this,arguments)}}else if("defaults"===e){var d=d.defaults||(d.defaults={}),e=b[e],i;for(i in e){if(d.hasOwnProperty(i))throw"Mixin error: class already has default '"+i+"' defined";d[i]=e[i]}}else if("namedAttributes"===e)i=m(d.namedAttributes)||
{},e=m(b[e]),d.namedAttributes=c.extend(i,s(e,i));else if("namedEvents"===e){if(!c.isArray(b[e]))throw"Expects events member on mixin to be an array";d.namedEvents||(d.namedEvents=[]);d.namedEvents=c.uniq(d.namedEvents.concat(b[e]))}else{if(d.hasOwnProperty(e))throw"Mixin error: class already has property '"+e+"' defined";d[e]=b[e]}},this)}};g.AttributesMixinCreator={create:function(a){var b={};a||(a={});c.has(a,"id")||(a.id=null);c.each(a,function(a,c){var f=g.Mixins.createMethodName("set",c);b[f]=
function(a,b){return this.set(c,a,b)};f=g.Mixins.createMethodName("get",c);b[f]=function(){return this.get(c)}});return b},ensureType:k};g.EventsMixinCreator={create:function(a){var b={};c.each(a,c.bind(function(a){var d=g.Mixins.createMethodName("on",a);b[d]=function(){return this.on.apply(this,[a].concat(c.toArray(arguments)))};d=g.Mixins.createMethodName("trigger",a);b[d]=function(){return this.trigger.apply(this,[a].concat(c.toArray(arguments)))}},this));return b}};var u=g,j=f.Model,p=l(j),j=
j.prototype,q=p.prototype,r=j.set;q.set=function(a,b,e){var d,g=this.namedAttributes;if(!g||null==a)return r.apply(this,arguments);c.isObject(a)?(d=c.clone(a),e=b):(d={},d[a]=b);for(var f in d)if(c.has(d,f)){if(!c.has(g,f))throw"Attribute '"+f+"' does not exist";d[f]=k(g[f],d[f])}return r.call(this,d,e)};var v=j.get;q.get=function(a){if(this.namedAttributes&&!c.has(this.namedAttributes,a))throw"Attribute '"+a+"' does not exist";return v.apply(this,arguments)};u.Model=p;g.Collection=l(f.Collection);
g.View=l(f.View);g.Router=l(f.Router)})();