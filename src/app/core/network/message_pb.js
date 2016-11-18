/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Identifier', null, global);
goog.exportSymbol('proto.IdentifierInterval', null, global);
goog.exportSymbol('proto.LogootSAdd', null, global);
goog.exportSymbol('proto.LogootSDel', null, global);
goog.exportSymbol('proto.Message', null, global);
goog.exportSymbol('proto.PeerPseudo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Message.oneofGroups_);
};
goog.inherits(proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Message.displayName = 'proto.Message';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Message.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.Message.TypeCase = {
  TYPE_NOT_SET: 0,
  PEERPSEUDO: 1,
  LOGOOTSADD: 2,
  LOGOOTSDEL: 3
};

/**
 * @return {proto.Message.TypeCase}
 */
proto.Message.prototype.getTypeCase = function() {
  return /** @type {proto.Message.TypeCase} */(jspb.Message.computeOneofCase(this, proto.Message.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Message} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerpseudo: (f = msg.getPeerpseudo()) && proto.PeerPseudo.toObject(includeInstance, f),
    logootsadd: (f = msg.getLogootsadd()) && proto.LogootSAdd.toObject(includeInstance, f),
    logootsdel: (f = msg.getLogootsdel()) && proto.LogootSDel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Message;
  return proto.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PeerPseudo;
      reader.readMessage(value,proto.PeerPseudo.deserializeBinaryFromReader);
      msg.setPeerpseudo(value);
      break;
    case 2:
      var value = new proto.LogootSAdd;
      reader.readMessage(value,proto.LogootSAdd.deserializeBinaryFromReader);
      msg.setLogootsadd(value);
      break;
    case 3:
      var value = new proto.LogootSDel;
      reader.readMessage(value,proto.LogootSDel.deserializeBinaryFromReader);
      msg.setLogootsdel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Message} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Message.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Message.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPeerpseudo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PeerPseudo.serializeBinaryToWriter
    );
  }
  f = this.getLogootsadd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.LogootSAdd.serializeBinaryToWriter
    );
  }
  f = this.getLogootsdel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.LogootSDel.serializeBinaryToWriter
    );
  }
};


/**
 * optional PeerPseudo peerPseudo = 1;
 * @return {?proto.PeerPseudo}
 */
proto.Message.prototype.getPeerpseudo = function() {
  return /** @type{?proto.PeerPseudo} */ (
    jspb.Message.getWrapperField(this, proto.PeerPseudo, 1));
};


/** @param {?proto.PeerPseudo|undefined} value */
proto.Message.prototype.setPeerpseudo = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.Message.oneofGroups_[0], value);
};


proto.Message.prototype.clearPeerpseudo = function() {
  this.setPeerpseudo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Message.prototype.hasPeerpseudo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LogootSAdd logootSAdd = 2;
 * @return {?proto.LogootSAdd}
 */
proto.Message.prototype.getLogootsadd = function() {
  return /** @type{?proto.LogootSAdd} */ (
    jspb.Message.getWrapperField(this, proto.LogootSAdd, 2));
};


/** @param {?proto.LogootSAdd|undefined} value */
proto.Message.prototype.setLogootsadd = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.Message.oneofGroups_[0], value);
};


proto.Message.prototype.clearLogootsadd = function() {
  this.setLogootsadd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Message.prototype.hasLogootsadd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LogootSDel logootSDel = 3;
 * @return {?proto.LogootSDel}
 */
proto.Message.prototype.getLogootsdel = function() {
  return /** @type{?proto.LogootSDel} */ (
    jspb.Message.getWrapperField(this, proto.LogootSDel, 3));
};


/** @param {?proto.LogootSDel|undefined} value */
proto.Message.prototype.setLogootsdel = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.Message.oneofGroups_[0], value);
};


proto.Message.prototype.clearLogootsdel = function() {
  this.setLogootsdel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Message.prototype.hasLogootsdel = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PeerPseudo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PeerPseudo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PeerPseudo.displayName = 'proto.PeerPseudo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PeerPseudo.prototype.toObject = function(opt_includeInstance) {
  return proto.PeerPseudo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PeerPseudo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PeerPseudo.toObject = function(includeInstance, msg) {
  var f, obj = {
    pseudo: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PeerPseudo}
 */
proto.PeerPseudo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PeerPseudo;
  return proto.PeerPseudo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PeerPseudo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PeerPseudo}
 */
proto.PeerPseudo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPseudo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PeerPseudo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PeerPseudo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PeerPseudo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PeerPseudo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPseudo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pseudo = 1;
 * @return {string}
 */
proto.PeerPseudo.prototype.getPseudo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.PeerPseudo.prototype.setPseudo = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LogootSAdd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LogootSAdd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LogootSAdd.displayName = 'proto.LogootSAdd';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LogootSAdd.prototype.toObject = function(opt_includeInstance) {
  return proto.LogootSAdd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LogootSAdd} msg The msg instance to transform.
 * @return {!Object}
 */
proto.LogootSAdd.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.Identifier.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LogootSAdd}
 */
proto.LogootSAdd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LogootSAdd;
  return proto.LogootSAdd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LogootSAdd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LogootSAdd}
 */
proto.LogootSAdd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Identifier;
      reader.readMessage(value,proto.Identifier.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.LogootSAdd} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.LogootSAdd.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LogootSAdd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.LogootSAdd.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Identifier.serializeBinaryToWriter
    );
  }
  f = this.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Identifier id = 1;
 * @return {?proto.Identifier}
 */
proto.LogootSAdd.prototype.getId = function() {
  return /** @type{?proto.Identifier} */ (
    jspb.Message.getWrapperField(this, proto.Identifier, 1));
};


/** @param {?proto.Identifier|undefined} value */
proto.LogootSAdd.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.LogootSAdd.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LogootSAdd.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.LogootSAdd.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.LogootSAdd.prototype.setContent = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LogootSDel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LogootSDel.repeatedFields_, null);
};
goog.inherits(proto.LogootSDel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LogootSDel.displayName = 'proto.LogootSDel';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LogootSDel.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LogootSDel.prototype.toObject = function(opt_includeInstance) {
  return proto.LogootSDel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LogootSDel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.LogootSDel.toObject = function(includeInstance, msg) {
  var f, obj = {
    lidList: jspb.Message.toObjectList(msg.getLidList(),
    proto.IdentifierInterval.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LogootSDel}
 */
proto.LogootSDel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LogootSDel;
  return proto.LogootSDel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LogootSDel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LogootSDel}
 */
proto.LogootSDel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.IdentifierInterval;
      reader.readMessage(value,proto.IdentifierInterval.deserializeBinaryFromReader);
      msg.addLid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.LogootSDel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.LogootSDel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LogootSDel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.LogootSDel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLidList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.IdentifierInterval.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IdentifierInterval lid = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.IdentifierInterval>}
 */
proto.LogootSDel.prototype.getLidList = function() {
  return /** @type{!Array.<!proto.IdentifierInterval>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IdentifierInterval, 1));
};


/** @param {!Array.<!proto.IdentifierInterval>} value */
proto.LogootSDel.prototype.setLidList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.IdentifierInterval=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IdentifierInterval}
 */
proto.LogootSDel.prototype.addLid = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.IdentifierInterval, opt_index);
};


proto.LogootSDel.prototype.clearLidList = function() {
  this.setLidList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Identifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Identifier.repeatedFields_, null);
};
goog.inherits(proto.Identifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Identifier.displayName = 'proto.Identifier';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Identifier.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Identifier.prototype.toObject = function(opt_includeInstance) {
  return proto.Identifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Identifier} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Identifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseList: jspb.Message.getRepeatedFloatingPointField(msg, 1),
    last: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Identifier}
 */
proto.Identifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Identifier;
  return proto.Identifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Identifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Identifier}
 */
proto.Identifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setBaseList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLast(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Identifier} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Identifier.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Identifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Identifier.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBaseList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
  f = this.getLast();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated double base = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.Identifier.prototype.getBaseList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/** @param {!Array.<number>} value */
proto.Identifier.prototype.setBaseList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.Identifier.prototype.addBase = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.Identifier.prototype.clearBaseList = function() {
  this.setBaseList([]);
};


/**
 * optional int32 last = 2;
 * @return {number}
 */
proto.Identifier.prototype.getLast = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Identifier.prototype.setLast = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IdentifierInterval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IdentifierInterval.repeatedFields_, null);
};
goog.inherits(proto.IdentifierInterval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IdentifierInterval.displayName = 'proto.IdentifierInterval';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IdentifierInterval.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IdentifierInterval.prototype.toObject = function(opt_includeInstance) {
  return proto.IdentifierInterval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IdentifierInterval} msg The msg instance to transform.
 * @return {!Object}
 */
proto.IdentifierInterval.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseList: jspb.Message.getRepeatedFloatingPointField(msg, 1),
    begin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    end: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IdentifierInterval}
 */
proto.IdentifierInterval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IdentifierInterval;
  return proto.IdentifierInterval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IdentifierInterval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IdentifierInterval}
 */
proto.IdentifierInterval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setBaseList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBegin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.IdentifierInterval} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.IdentifierInterval.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IdentifierInterval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.IdentifierInterval.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBaseList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
  f = this.getBegin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getEnd();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated double base = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.IdentifierInterval.prototype.getBaseList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/** @param {!Array.<number>} value */
proto.IdentifierInterval.prototype.setBaseList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.IdentifierInterval.prototype.addBase = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.IdentifierInterval.prototype.clearBaseList = function() {
  this.setBaseList([]);
};


/**
 * optional int32 begin = 2;
 * @return {number}
 */
proto.IdentifierInterval.prototype.getBegin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.IdentifierInterval.prototype.setBegin = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 end = 3;
 * @return {number}
 */
proto.IdentifierInterval.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.IdentifierInterval.prototype.setEnd = function(value) {
  jspb.Message.setField(this, 3, value);
};


goog.object.extend(exports, proto);