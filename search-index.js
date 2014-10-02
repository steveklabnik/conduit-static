var searchIndex = {};
searchIndex['conduit-static'] = {"items":[[0,"","conduit-static",""],[1,"Static","",""],[10,"new","","",0],[10,"call","","",0]],"paths":[[1,"Static"]]};
searchIndex['conduit'] = {"items":[[0,"","conduit",""],[1,"TypeMap","",""],[1,"Response","",""],[11,"status","","The status code as a tuple of the return code and status string",0],[11,"headers","","A Map of the headers",0],[11,"body","","A Writer for body of the response",0],[2,"Scheme","",""],[12,"Http","","",1],[12,"Https","","",1],[2,"Host","",""],[12,"HostName","","",2],[12,"HostIp","","",2],[2,"Method","",""],[12,"Get","","",3],[12,"Post","","",3],[12,"Put","","",3],[12,"Delete","","",3],[12,"Head","","",3],[12,"Connect","","",3],[12,"Options","","",3],[12,"Trace","","",3],[12,"Patch","","",3],[12,"Purge","","",3],[12,"Other","","",3],[10,"new","","",4],[10,"find","","",4],[10,"find_mut","","",4],[10,"insert","","",4],[10,"remove","","",4],[10,"contains","","",4],[10,"pop","","",4],[4,"Extensions","","A Dictionary for extensions provided by the server or middleware"],[4,"HeaderEntries","",""],[6,"Request","",""],[9,"http_version","","The version of HTTP being used",5],[9,"conduit_version","","The version of the conduit spec being used",5],[9,"method","","The request method, such as GET, POST, PUT, DELETE or PATCH",5],[9,"scheme","","The scheme part of the request URL",5],[9,"host","","The host part of the requested URL",5],[9,"virtual_root","","The initial part of the request URL's path that corresponds\nto a virtual root. This allows an application to have a\nvirtual location that consumes part of the path.",5],[9,"path","","The remainder of the path.",5],[9,"query_string","","The portion of the request URL that follows the \"?\"",5],[9,"remote_ip","","The remote IP address of the client or the last proxy that\nsent the request.",5],[9,"content_length","","The byte-size of the body, if any",5],[9,"headers","","The request's headers, as conduit::Headers.",5],[9,"body","","A Reader for the body of the request",5],[9,"extensions","","A readable map of extensions",5],[9,"mut_extensions","","A mutable map of extensions",5],[6,"Headers","",""],[9,"find","","Find the value of a given header. Multi-line headers are represented\nas an array.",6],[9,"has","","Returns true if a particular header exists",6],[9,"iter","","Iterate over all of the available headers.",6],[6,"Handler","","A Handler takes a request and returns a response or an error.\nBy default, a bare function implements `Handler`."],[9,"call","","",7],[10,"clone","","",1],[10,"fmt","","",1],[10,"eq","","",1],[10,"ne","","",1],[10,"clone","","",2],[10,"fmt","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"clone","","",3],[10,"fmt","","",3],[10,"hash","","",3],[10,"eq","","",3],[10,"ne","","",3]],"paths":[[1,"Response"],[2,"Scheme"],[2,"Host"],[2,"Method"],[1,"TypeMap"],[6,"Request"],[6,"Headers"],[6,"Handler"]]};

searchIndex['semver'] = {"items":[[0,"","semver","Semantic version parsing and comparison."],[1,"Version","","Represents a version number conforming to the semantic versioning scheme."],[11,"major","","The major version, to be incremented on incompatible changes.",0],[11,"minor","","The minor version, to be incremented when functionality is added in a\nbackwards-compatible manner.",0],[11,"patch","","The patch version, to be incremented when backwards-compatible bug\nfixes are made.",0],[11,"pre","","The pre-release version identifier, if one exists.",0],[11,"build","","The build metadata, ignored when determining version precedence.",0],[1,"VersionReq","","A `VersionReq` is a struct containing a list of predicates that can apply to ranges of version\nnumbers. Matching operations can then be done with the `VersionReq` against a particular\nversion to see if it satisfies some or all of the constraints."],[2,"Identifier","","An identifier in the pre-release or build metadata."],[12,"Numeric","","An identifier that's solely numbers.",1],[12,"AlphaNumeric","","An identifier with letters and numbers.",1],[2,"ParseError","","A `ParseError` is returned as the `Err` side of a `Result` when a version is attempted\nto be parsed."],[12,"NonAsciiIdentifier","","All identifiers must be ASCII.",2],[12,"IncorrectParse","","The version was mis-parsed.",2],[12,"GenericFailure","","Any other failure.",2],[2,"ReqParseError","","A `ReqParseError` is returned from methods which parse a string into a `VersionReq`. Each\nenumeration is one of the possible errors that can occur."],[12,"InvalidVersionRequirement","","The given version requirement is invalid.",3],[12,"OpAlreadySet","","You have already provided an operation, such as `=`, `~`, or `^`. Only use one.",3],[12,"InvalidSigil","","The sigil you have written is not correct.",3],[12,"VersionComponentsMustBeNumeric","","All components of a version must be numeric.",3],[12,"OpRequired","","An operation is required. To match an exact version, use `=`.",3],[12,"MajorVersionRequired","","At least a major version is required.",3],[10,"hash","","",1],[10,"cmp","","",1],[10,"partial_cmp","","",1],[10,"lt","","",1],[10,"le","","",1],[10,"gt","","",1],[10,"ge","","",1],[10,"eq","","",1],[10,"ne","","",1],[10,"clone","","",1],[10,"fmt","","",1],[10,"clone","","",0],[10,"partial_cmp","","",2],[10,"lt","","",2],[10,"le","","",2],[10,"gt","","",2],[10,"ge","","",2],[10,"fmt","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"clone","","",2],[10,"parse","","Parse a string into a semver object.",0],[10,"fmt","","",0],[10,"eq","","",0],[10,"partial_cmp","","",0],[10,"cmp","","",0],[10,"hash","","",0],[10,"clone","","",4],[10,"eq","","",4],[10,"ne","","",4],[10,"fmt","","",3],[10,"any","","`any()` is a factory method which creates a `VersionReq` with no constraints. In other\nwords, any version will match against it.",4],[10,"parse","","`parse()` is the main constructor of a `VersionReq`. It turns a string like `\"^1.2.3\"`\nand turns it into a `VersionReq` that matches that particular constraint.",4],[10,"exact","","`exact()` is a factory method which creates a `VersionReq` with one exact constraint.",4],[10,"matches","","`matches()` matches a given `Version` against this `VersionReq`.",4],[10,"fmt","","",4]],"paths":[[1,"Version"],[2,"Identifier"],[2,"ParseError"],[2,"ReqParseError"],[1,"VersionReq"]]};

searchIndex['mime-types'] = {"items":[[0,"","mime-types",""],[1,"Types","",""],[10,"new","","",0],[10,"get_extension","","",0],[10,"get_mime_type","","",0],[10,"mime_for_path","","",0]],"paths":[[1,"Types"]]};

initSearch(searchIndex);
