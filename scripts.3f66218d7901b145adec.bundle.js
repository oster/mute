webpackJsonp([1,3],{444:function(e,r){e.exports=function(e){"undefined"!=typeof execScript?execScript(e):eval.call(null,e)}},448:function(e,r,t){t(444)(t(661))},449:function(e,r,t){t(444)(t(662))},661:function(e,r){e.exports='(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module \'"+o+"\'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var util=require("util");var canLog=require("./bragi/canLog");var Transports=require("./bragi/transports/Transports");var transports=require("./bragi/transports");var STYLES=require("./bragi/styles");var SYMBOLS=require("./bragi/symbols");(function(root,factory){if(typeof define==="function"&&define.amd){define(["exports"],function(exports){root=factory(root,exports);return root})}else if(typeof exports!=="undefined"){factory(root,exports);module.exports=factory()}else{root.logger=factory(root,{})}})(this,function(root,logger){var LOGGER={util:{},canLog:canLog};LOGGER.util.__stack=function(){var stack=null;try{var orig=Error.prepareStackTrace;Error.prepareStackTrace=function(_,stack){return stack};var err=new Error;Error.captureStackTrace(err,arguments.callee);stack=err.stack;Error.prepareStackTrace=orig}catch(e){}return stack};LOGGER.util.colors=STYLES.colors;LOGGER.util.symbols=SYMBOLS;LOGGER.options={groupsEnabled:true,groupsDisabled:[],storeStackTrace:false};LOGGER.transports=new Transports;var _defaultTransports=[new transports.Console({showMeta:true,showStackTrace:false})];for(var i=0;i<_defaultTransports.length;i++){LOGGER.transports.add(_defaultTransports[i])}LOGGER.transportClasses=transports;LOGGER.addGroup=function addGroup(group){var groupsEnabled=LOGGER.options.groupsEnabled;if(groupsEnabled===true||groupsEnabled===false){LOGGER.options.groupsEnabled=groupsEnabled=[]}var i=0,len=groupsEnabled.length;for(i=0;i<len;i++){if(groupsEnabled[i].toString()===group.toString()){return LOGGER}}groupsEnabled.push(group);return LOGGER};LOGGER.removeGroup=function removeGroup(group){var groupsEnabled=LOGGER.options.groupsEnabled;if(groupsEnabled===true||groupsEnabled===false){LOGGER.options.groupsEnabled=groupsEnabled=[]}var i=0,len=groupsEnabled.length;var groupsEnabledWithoutGroup=[];for(i=0;i<len;i++){if(groupsEnabled[i].toString()!==group.toString()){groupsEnabledWithoutGroup.push(groupsEnabled[i])}}LOGGER.options.groupsEnabled=groupsEnabledWithoutGroup;return LOGGER};LOGGER.util.print=function print(message,color){color=color?color:"black";return LOGGER.util.colors[color]+message+LOGGER.util.colors.reset};LOGGER.log=function loggerLog(group,message){var groupsEnabled,groupsDisabled,currentTransport;var transportFuncsToCall=[];for(var transport in LOGGER.transports._transports){currentTransport=LOGGER.transports._transports[transport];groupsEnabled=LOGGER.options.groupsEnabled;groupsDisabled=LOGGER.options.groupsDisabled;if(currentTransport.groupsEnabled!==undefined){groupsEnabled=currentTransport.groupsEnabled}if(currentTransport.groupsDisabled!==undefined){groupsDisabled=currentTransport.groupsDisabled}if(canLog(group,groupsEnabled,groupsDisabled)){transportFuncsToCall.push(currentTransport)}}if(transportFuncsToCall.length<1){if(!LOGGER.options.storeAllHistory){return false}}var extraArgs=Array.prototype.slice.call(arguments,2);var loggedObject={};var caller=null;if(LOGGER.options.storeStackTrace){caller="global scope";if(loggerLog.caller&&loggerLog.caller.name){caller=loggerLog.caller.name}else if((loggerLog.caller+"").indexOf("function ()")===0){caller="anonymous function"}}loggedObject.properties={};loggedObject.originalArgs=[];for(var i=0;i<extraArgs.length;i++){if(!(extraArgs[i]instanceof Array)&&typeof extraArgs[i]==="object"){for(var key in extraArgs[i]){loggedObject.properties[key]=extraArgs[i][key]}}else{loggedObject.properties["_argument"+i]=extraArgs[i]}loggedObject.originalArgs.push(extraArgs[i])}loggedObject.meta={caller:caller,date:(new Date).toJSON()};loggedObject.unixTimestamp=(new Date).getTime()/1e3;var stack=false;if(LOGGER.options.storeStackTrace){stack=LOGGER.util.__stack();if(stack){var stackLength=stack.length;var trace=[];for(i=1;i<stack.length;i++){trace.push(stack[i]+"")}loggedObject.meta.file=stack[1].getFileName();loggedObject.meta.line=stack[1].getLineNumber();loggedObject.meta.column=stack[1].getColumnNumber();loggedObject.meta.trace=trace}}loggedObject.group=group;loggedObject.message=message;for(i=0,len=transportFuncsToCall.length;i<len;i++){transportFuncsToCall[i].log.call(transportFuncsToCall[i],loggedObject)}};if(!(typeof define==="function"&&define.amd)){window.BRAGI=LOGGER}return LOGGER})},{"./bragi/canLog":2,"./bragi/styles":3,"./bragi/symbols":4,"./bragi/transports":5,"./bragi/transports/Transports":8,util:13}],2:[function(require,module,exports){function canLog(group,groupsEnabled,groupsDisabled){if(groupsEnabled===undefined){groupsEnabled=true}var i,len;var canLogIt=true;if(groupsEnabled===true){canLogIt=true}else if(groupsEnabled===false||groupsEnabled===null){canLogIt=false}else if(groupsEnabled instanceof Array){canLogIt=false;for(i=0,len=groupsEnabled.length;i<len;i++){if(groupsEnabled[i]instanceof RegExp){if(groupsEnabled[i].test(group)){canLogIt=true;break}}else if(group.indexOf(groupsEnabled[i])===0){canLogIt=true;break}}}if(group.indexOf("error")===0||group.indexOf("warn")===0){canLogIt=true}if(groupsDisabled&&groupsDisabled instanceof Array){for(i=0,len=groupsDisabled.length;i<len;i++){if(groupsDisabled[i]instanceof RegExp){if(groupsDisabled[i].test(group)){canLogIt=false;break}}else if(group.indexOf(groupsDisabled[i])===0){canLogIt=false;break}}}return canLogIt}module.exports=canLog},{}],3:[function(require,module,exports){module.exports={colors:{white:"[37m",grey:"[90m",gray:"[90m",black:"[30m",blue:"[34m",cyan:"[36m",green:"[32m",magenta:"[35m",red:"[31m",yellow:"[33m",reset:"[0m"},styles:{blink:"[49;5;8m",underline:"[4m",bold:"[1m"},backgrounds:{white:"[47m",black:"[40m",blue:"[44m",cyan:"[46m",green:"[42m",magenta:"[45m",red:"[41m",yellow:"[43m"}}},{}],4:[function(require,module,exports){var STYLES=require("./styles");module.exports={success:STYLES.colors.green+"✔︎ "+STYLES.colors.reset,error:STYLES.colors.red+"✘ "+STYLES.colors.reset,warn:STYLES.colors.yellow+"⚑ "+STYLES.colors.reset,arrow:"➤ ",star:"☆ ",box:STYLES.colors.yellow+"☐ "+STYLES.colors.reset,boxSuccess:STYLES.colors.green+"☑︎ "+STYLES.colors.reset,boxError:STYLES.colors.red+"☒ "+STYLES.colors.reset,circle:"◯ ",circleFilled:"◉ ",asterisk:"✢",floral:"❧",snowflake:"❄︎",fourDiamond:"❖",spade:"♠︎",club:"♣︎",heart:"♥︎",diamond:"♦︎",queen:"♛",rook:"♜",pawn:"♟",atom:"⚛"}},{"./styles":3}],5:[function(require,module,exports){var files=require("./transports/index");var transports={};for(var file in files){transports[file]=files[file]}module.exports=transports},{"./transports/index":9}],6:[function(require,module,exports){var STYLES=require("../styles");var SYMBOLS=require("../symbols");if(window.console&&window.console.log){if(typeof window.console.log!=="function"){window.console.log=function(){}}}else{window.console={};window.console.log=function(){}}GROUP_COLORS=[["#3182bd","#ffffff","#225588"],["#f38630","#ffffff"],["#e0e4cc","#000000","#c8cbb6"],["#8c510a","#ffffff"],["#35978f","#ffffff","#13756d"],["#c51b7d","#ffffff"],["#c6dbef","#000000"],["#af8dc3","#000000"],["#543005","#ffffff","#321002"],["#7fbf7b","#000000"],["#dfc27d","#000000","#bda05b"],["#f5f5f5","#000000"],["#e9a3c9","#000000"],["#59323C","#ffffff"],["#66c2a5","#000000"],["#f6e8c3","#000000"],["#606060","#f0f0f0"],["#8c510a","#ffffff"],["#80cdc1","#000000"],["#542788","#ffffff"],["#FB8AFE","#343434"],["#003c30","#ffffff"],["#e6f598","#000000"],["#c7eae5","#000000"],["#000000","#f0f0f0"],["#C3FF0E","#343434"]];OVERFLOW_SYMBOLS=["asterisk","floral","snowflake","fourDiamond","spade","club","heart","diamond","queen","rook","pawn","atom"];var BASE_CSS="padding: 2px; margin:2px; line-height: 1.8em;";var META_STYLE=BASE_CSS+"font-size:0.9em; color: #cdcdcd; padding-left:30px;";function TransportConsole(options){options=options||{};this.groupsEnabled=options.groupsEnabled;this.groupsDisabled=options.groupsDisabled;this.addLineBreak=options.addLineBreak!==undefined?options.addLineBreak:false;this.showMeta=options.showMeta!==undefined?options.showMeta:false;this.showStackTrace=options.showStackTrace!==undefined?options.showStackTrace:true;this.showColors=options.showColors===undefined?true:options.showColor;this._foundColors=[];this._colorDict={error:BASE_CSS+"background: #ff0000; color: #ffffff; font-style: bold; border: 4px solid #cc0000;",warn:BASE_CSS+"padding: 2px; background: #ffff00; color: #343434; font-style: bold; border: 4px solid #cccc00;"};this.curSymbolIndex=0;return this}TransportConsole.prototype.getColor=function getColor(group){var color="";var baseColor="";var curSymbol;var cssString="";group=group.split(":")[0];if(this._colorDict[group]){return this._colorDict[group]}if(this._foundColors.length>=GROUP_COLORS.length){color=GROUP_COLORS[this._foundColors.length%GROUP_COLORS.length];baseColor=color;cssString+="font-style: italic;"}else{color=GROUP_COLORS[this._foundColors.length]}var borderColor=color[2];if(!color[2]){borderColor="#";for(var i=1;i<color[0].length;i++){borderColor+=Math.max(0,parseInt(color[0][i],16)-2).toString(16)}}cssString+=BASE_CSS+"background: "+color[0]+";"+"border: 1px solid "+borderColor+";"+"color: "+color[1]+";";this._foundColors.push(color);this._colorDict[group]=cssString;return cssString};TransportConsole.prototype.name="Console";TransportConsole.prototype.log=function transportConsoleLog(loggedObject){var consoleMessage="";if(this.showColors){consoleMessage+="%c"}consoleMessage+="[ "+loggedObject.group+" "+" ] \t";consoleMessage+=loggedObject.message+" \t";if(this.addLineBreak){consoleMessage+="\\n"}var toLogArray=[];toLogArray.push(consoleMessage);if(this.showColors){toLogArray.push(this.getColor(loggedObject.group))}toLogArray=toLogArray.concat(loggedObject.originalArgs);console.log.apply(console,toLogArray);var metaConsoleMessage="";var metaLogArray=[];if(this.showMeta){if(this.showColors){metaConsoleMessage+="%c"}metaConsoleMessage+=(new Date).toJSON()+" \t \t ";if(loggedObject.meta.caller){metaConsoleMessage+="caller: "+loggedObject.meta.caller+" \t \t "}if(loggedObject.meta.file&&loggedObject.meta.line){metaConsoleMessage+=loggedObject.meta.file+":"+loggedObject.meta.line+":"+loggedObject.meta.column+""}}if(this.showMeta&&this.showStackTrace&&loggedObject.meta.trace){metaConsoleMessage+="\\n"+"(Stack Trace)"+"\\n";for(i=0;i<loggedObject.meta.trace.length;i++){metaConsoleMessage+="\t"+loggedObject.meta.trace[i]+"\\n"}}if(this.showMeta&&this.showColors){metaLogArray.push(metaConsoleMessage);metaLogArray.push(META_STYLE)}if(metaLogArray.length>0){console.log.apply(console,metaLogArray)}return this};module.exports=TransportConsole},{"../styles":3,"../symbols":4}],7:[function(require,module,exports){function TransportHistory(options){options=options||{};this.groupsEnabled=options.groupsEnabled;this.groupsDisabled=options.groupsDisabled;this.storeEverything=false;if(options.storeEverything===true){this.storeEverything=true;this.groupsEnabled=true}this.historySize=options.historySize!==undefined?options.historySize:200;this.history={};return this}TransportHistory.prototype.name="History";TransportHistory.prototype.log=function transportHistoryLog(loggedObject){var group=loggedObject.group.split(":")[0];if(this.history[group]===undefined){this.history[group]=[]}this.history[group].push(loggedObject);if(this.historySize>0&&this.history[group].length>this.historySize){this.history[group].shift()}return this};module.exports=TransportHistory},{}],8:[function(require,module,exports){function Transports(){this._transports={};this._transportCount={};return this}Transports.prototype.get=function get(transportName){var returnedTransportObjects=new Array;for(var key in this._transports){if(key.toLowerCase().indexOf(transportName.toLowerCase())>-1){returnedTransportObjects.push(this._transports[key])}}returnedTransportObjects.property=function transportProperty(keyOrObject,value){var i=0;var len=this.length;if(typeof keyOrObject==="string"&&value===undefined){var vals=[];for(i=0;i<len;i++){vals.push(this[i][keyOrObject])}return vals}else if(typeof keyOrObject==="string"&&value!==undefined){for(i=0;i<len;i++){this[i][keyOrObject]=value}}else if(typeof keyOrObject==="object"){for(i=0;i<len;i++){for(var keyName in keyOrObject){this[i][keyName]=keyOrObject[keyName]}}}return this};return returnedTransportObjects};Transports.prototype.add=function add(transport){if(this._transportCount[transport.name]===undefined){this._transportCount[transport.name]=1;this._transports[transport.name]=transport}else{this._transportCount[transport.name]+=1;this._transports[transport.name+""+(this._transportCount[transport.name]-1)]=transport}return this};Transports.prototype.remove=function remove(transportName,index){transportName=transportName;if(transportName.name){transportName=transportName.name}for(var key in this._transports){if(index!==undefined){if(transportName+""+index===key){delete this._transports[key]}}else{if(key.indexOf(transportName)>-1){delete this._transports[key]}}}return this};Transports.prototype.empty=function empty(){for(var key in this._transports){delete this._transports[key]}return this};module.exports=Transports},{}],9:[function(require,module,exports){module.exports.Console=require("./Console");module.exports.History=require("./History")},{"./Console":6,"./History":7}],10:[function(require,module,exports){if(typeof Object.create==="function"){module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}})}}else{module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor;ctor.prototype.constructor=ctor}}},{}],11:[function(require,module,exports){var process=module.exports={};process.nextTick=function(){var canSetImmediate=typeof window!=="undefined"&&window.setImmediate;var canPost=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;if(canSetImmediate){return function(f){return window.setImmediate(f)}}if(canPost){var queue=[];window.addEventListener("message",function(ev){var source=ev.source;if((source===window||source===null)&&ev.data==="process-tick"){ev.stopPropagation();if(queue.length>0){var fn=queue.shift();fn()}}},true);return function nextTick(fn){queue.push(fn);window.postMessage("process-tick","*")}}return function nextTick(fn){setTimeout(fn,0)}}();process.title="browser";process.browser=true;process.env={};process.argv=[];function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")}},{}],12:[function(require,module,exports){module.exports=function isBuffer(arg){return arg&&typeof arg==="object"&&typeof arg.copy==="function"&&typeof arg.fill==="function"&&typeof arg.readUInt8==="function"}},{}],13:[function(require,module,exports){(function(process,global){var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){var objects=[];for(var i=0;i<arguments.length;i++){objects.push(inspect(arguments[i]))}return objects.join(" ")}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x==="%%")return"%";if(i>=len)return x;switch(x){case"%s":return String(args[i++]);case"%d":return Number(args[i++]);case"%j":try{return JSON.stringify(args[i++])}catch(_){return"[Circular]"}default:return x}});for(var x=args[i];i<len;x=args[++i]){if(isNull(x)||!isObject(x)){str+=" "+x}else{str+=" "+inspect(x)}}return str};exports.deprecate=function(fn,msg){if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments)}}if(process.noDeprecation===true){return fn}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg)}else if(process.traceDeprecation){console.trace(msg)}else{console.error(msg)}warned=true}return fn.apply(this,arguments)}return deprecated};var debugs={};var debugEnviron;exports.debuglog=function(set){if(isUndefined(debugEnviron))debugEnviron=process.env.NODE_DEBUG||"";set=set.toUpperCase();if(!debugs[set]){if(new RegExp("\\\\b"+set+"\\\\b","i").test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error("%s %d: %s",set,pid,msg)}}else{debugs[set]=function(){}}}return debugs[set]};function inspect(obj,opts){var ctx={seen:[],stylize:stylizeNoColor};if(arguments.length>=3)ctx.depth=arguments[2];if(arguments.length>=4)ctx.colors=arguments[3];if(isBoolean(opts)){ctx.showHidden=opts}else if(opts){exports._extend(ctx,opts)}if(isUndefined(ctx.showHidden))ctx.showHidden=false;if(isUndefined(ctx.depth))ctx.depth=2;if(isUndefined(ctx.colors))ctx.colors=false;if(isUndefined(ctx.customInspect))ctx.customInspect=true;if(ctx.colors)ctx.stylize=stylizeWithColor;return formatValue(ctx,obj,ctx.depth)}exports.inspect=inspect;inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};inspect.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return"["+inspect.colors[style][0]+"m"+str+"["+inspect.colors[style][1]+"m"}else{return str}}function stylizeNoColor(str,styleType){return str}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val]=true});return hash}function formatValue(ctx,value,recurseTimes){if(ctx.customInspect&&value&&isFunction(value.inspect)&&value.inspect!==exports.inspect&&!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret=formatValue(ctx,ret,recurseTimes)}return ret}var primitive=formatPrimitive(ctx,value);if(primitive){return primitive}var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys=Object.getOwnPropertyNames(value)}if(isError(value)&&(keys.indexOf("message")>=0||keys.indexOf("description")>=0)){return formatError(value)}if(keys.length===0){if(isFunction(value)){var name=value.name?": "+value.name:"";return ctx.stylize("[Function"+name+"]","special")}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),"date")}if(isError(value)){return formatError(value)}}var base="",array=false,braces=["{","}"];if(isArray(value)){array=true;braces=["[","]"]}if(isFunction(value)){var n=value.name?": "+value.name:"";base=" [Function"+n+"]"}if(isRegExp(value)){base=" "+RegExp.prototype.toString.call(value)}if(isDate(value)){base=" "+Date.prototype.toUTCString.call(value)}if(isError(value)){base=" "+formatError(value)}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1]}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}else{return ctx.stylize("[Object]","special")}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys)}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)})}ctx.seen.pop();return reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize("undefined","undefined");if(isString(value)){var simple="\'"+JSON.stringify(value).replace(/^"|"$/g,"").replace(/\'/g,"\\\\\'").replace(/\\\\"/g,\'"\')+"\'";return ctx.stylize(simple,"string")}if(isNumber(value))return ctx.stylize(""+value,"number");if(isBoolean(value))return ctx.stylize(""+value,"boolean");if(isNull(value))return ctx.stylize("null","null")}function formatError(value){return"["+Error.prototype.toString.call(value)+"]"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true))}else{output.push("")}}keys.forEach(function(key){if(!key.match(/^\\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true))}});return output}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};if(desc.get){if(desc.set){str=ctx.stylize("[Getter/Setter]","special")}else{str=ctx.stylize("[Getter]","special")}}else{if(desc.set){str=ctx.stylize("[Setter]","special")}}if(!hasOwnProperty(visibleKeys,key)){name="["+key+"]"}if(!str){if(ctx.seen.indexOf(desc.value)<0){if(isNull(recurseTimes)){str=formatValue(ctx,desc.value,null)}else{str=formatValue(ctx,desc.value,recurseTimes-1)}if(str.indexOf("\\n")>-1){if(array){str=str.split("\\n").map(function(line){return"  "+line}).join("\\n").substr(2)}else{str="\\n"+str.split("\\n").map(function(line){return"   "+line}).join("\\n")}}}else{str=ctx.stylize("[Circular]","special")}}if(isUndefined(name)){if(array&&key.match(/^\\d+$/)){return str}name=JSON.stringify(""+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,"name")}else{name=name.replace(/\'/g,"\\\\\'").replace(/\\\\"/g,\'"\').replace(/(^"|"$)/g,"\'");name=ctx.stylize(name,"string")}}return name+": "+str}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf("\\n")>=0)numLinesEst++;return prev+cur.replace(/\\u001b\\[\\d\\d?m/g,"").length+1},0);if(length>60){return braces[0]+(base===""?"":base+"\\n ")+" "+output.join(",\\n  ")+" "+braces[1]}return braces[0]+base+" "+output.join(", ")+" "+braces[1]}function isArray(ar){return Array.isArray(ar)}exports.isArray=isArray;function isBoolean(arg){return typeof arg==="boolean"}exports.isBoolean=isBoolean;function isNull(arg){return arg===null}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==="number"}exports.isNumber=isNumber;function isString(arg){return typeof arg==="string"}exports.isString=isString;function isSymbol(arg){return typeof arg==="symbol"}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0}exports.isUndefined=isUndefined;function isRegExp(re){return isObject(re)&&objectToString(re)==="[object RegExp]"}exports.isRegExp=isRegExp;function isObject(arg){return typeof arg==="object"&&arg!==null}exports.isObject=isObject;function isDate(d){return isObject(d)&&objectToString(d)==="[object Date]"}exports.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==="[object Error]"||e instanceof Error)}exports.isError=isError;function isFunction(arg){return typeof arg==="function"}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==="boolean"||typeof arg==="number"||typeof arg==="string"||typeof arg==="symbol"||typeof arg==="undefined"}exports.isPrimitive=isPrimitive;exports.isBuffer=require("./support/isBuffer");function objectToString(o){return Object.prototype.toString.call(o)}function pad(n){return n<10?"0"+n.toString(10):n.toString(10)}var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function timestamp(){var d=new Date;var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(":");return[d.getDate(),months[d.getMonth()],time].join(" ")}exports.log=function(){console.log("%s - %s",timestamp(),exports.format.apply(exports,arguments))};exports.inherits=require("inherits");exports._extend=function(origin,add){if(!add||!isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]]}return origin};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}}).call(this,require("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./support/isBuffer":12,_process:11,inherits:10}]},{},[1]);'},662:function(e,r){e.exports='/*! loglevel - v1.4.1 - https://github.com/pimterry/loglevel - (c) 2016 Tim Perry - licensed MIT */\n!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b):"object"==typeof module&&module.exports?module.exports=b():a.log=b()}(this,function(){"use strict";function a(a){return typeof console===h?!1:void 0!==console[a]?b(console,a):void 0!==console.log?b(console,"log"):g}function b(a,b){var c=a[b];if("function"==typeof c.bind)return c.bind(a);try{return Function.prototype.bind.call(c,a)}catch(d){return function(){return Function.prototype.apply.apply(c,[a,arguments])}}}function c(a,b,c){return function(){typeof console!==h&&(d.call(this,b,c),this[a].apply(this,arguments))}}function d(a,b){for(var c=0;c<i.length;c++){var d=i[c];this[d]=a>c?g:this.methodFactory(d,a,b)}}function e(b,d,e){return a(b)||c.apply(this,arguments)}function f(a,b,c){function f(a){var b=(i[a]||"silent").toUpperCase();try{return void(window.localStorage[l]=b)}catch(c){}try{window.document.cookie=encodeURIComponent(l)+"="+b+";"}catch(c){}}function g(){var a;try{a=window.localStorage[l]}catch(b){}if(typeof a===h)try{var c=window.document.cookie,d=c.indexOf(encodeURIComponent(l)+"=");d&&(a=/^([^;]+)/.exec(c.slice(d))[1])}catch(b){}return void 0===k.levels[a]&&(a=void 0),a}var j,k=this,l="loglevel";a&&(l+=":"+a),k.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},k.methodFactory=c||e,k.getLevel=function(){return j},k.setLevel=function(b,c){if("string"==typeof b&&void 0!==k.levels[b.toUpperCase()]&&(b=k.levels[b.toUpperCase()]),!("number"==typeof b&&b>=0&&b<=k.levels.SILENT))throw"log.setLevel() called with invalid level: "+b;return j=b,c!==!1&&f(b),d.call(k,b,a),typeof console===h&&b<k.levels.SILENT?"No console available for logging":void 0},k.setDefaultLevel=function(a){g()||k.setLevel(a,!1)},k.enableAll=function(a){k.setLevel(k.levels.TRACE,a)},k.disableAll=function(a){k.setLevel(k.levels.SILENT,a)};var m=g();null==m&&(m=null==b?"WARN":b),k.setLevel(m,!1)}var g=function(){},h="undefined",i=["trace","debug","info","warn","error"],j=new f,k={};j.getLogger=function(a){if("string"!=typeof a||""===a)throw new TypeError("You must supply a name when creating a logger.");var b=k[a];return b||(b=k[a]=new f(a,j.getLevel(),j.methodFactory)),b};var l=typeof window!==h?window.log:void 0;return j.noConflict=function(){return typeof window!==h&&window.log===j&&(window.log=l),j},j});'},940:function(e,r,t){t(449),e.exports=t(448)}},[940]);
//# sourceMappingURL=scripts.3f66218d7901b145adec.bundle.map