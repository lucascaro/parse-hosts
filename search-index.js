var searchIndex={};searchIndex.parse_hosts={doc:"",items:[[3,"DataLine","parse_hosts","Data from a line in `/etc/hosts`.",null,null],[3,"Hosts","","Iterator over the hosts on a line.",null,null],[3,"HostsFile","","Representation of `/etc/hosts`.",null,null],[3,"Lines","","Iterator over the lines in `/etc/hosts`.",null,null],[3,"DataLines","","Iterator over the lines in `/etc/hosts` with data.",null,null],[3,"Line","","Formatted line in `/etc/hosts`.",null,null],[4,"DataParseError","","Error parsing a line in `/etc/hosts`.",null,null],[13,"NoInternalSpace","","The line didn't have a space between the host and IP.",0,null],[13,"HostWasIp","","The given host was actually an IPv4 address.",0,null],[13,"BadHost","","The given host had an invalid character.",0,null],[13,"BadIp","","The IP failed to parse.",0,null],[4,"LineReadError","","Error found when reading a line in `/etc/hosts`.",null,null],[13,"Read","","The line failed to read.",1,null],[13,"Parse","","The line failed to parse.",1,null],[5,"minify_lines","","Minifies a list of data lines.`",null,{inputs:[{name:"vec"}],output:null}],[11,"clone","","",2,{inputs:[{name:"self"}],output:{name:"dataline"}}],[11,"fmt","","",2,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[11,"cmp","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"ordering"}}],[11,"eq","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"bool"}}],[11,"ne","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"bool"}}],[11,"partial_cmp","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"option"}}],[11,"lt","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"bool"}}],[11,"le","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"bool"}}],[11,"gt","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"bool"}}],[11,"ge","","",2,{inputs:[{name:"self"},{name:"dataline"}],output:{name:"bool"}}],[11,"from_raw","","Creates a new line from its raw parts.",2,{inputs:[{name:"ipaddr"},{name:"stringvec"}],output:{name:"dataline"}}],[11,"ip","","Gets the IP for this line.",2,{inputs:[{name:"self"}],output:{name:"ipaddr"}}],[11,"hosts","","Iterates over the hosts on this line.",2,{inputs:[{name:"self"}],output:{name:"hosts"}}],[11,"next","","",3,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"clone","","",0,{inputs:[{name:"self"}],output:{name:"dataparseerror"}}],[11,"fmt","","",0,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[11,"eq","","",0,{inputs:[{name:"self"},{name:"dataparseerror"}],output:{name:"bool"}}],[11,"ne","","",0,{inputs:[{name:"self"},{name:"dataparseerror"}],output:{name:"bool"}}],[11,"description","","",0,{inputs:[{name:"self"}],output:{name:"str"}}],[11,"cause","","",0,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"fmt","","",0,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[11,"from_str","","",2,{inputs:[{name:"str"}],output:{name:"result"}}],[11,"fmt","","",2,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[11,"load","","Loads the data from `/etc/hosts`.",4,{inputs:[],output:{name:"result"}}],[11,"read_buffered","","Loads the data from `/etc/hosts` from a generic reader wrapped in a `BufReader`.",4,{inputs:[{name:"r"}],output:{name:"hostsfile"}}],[11,"read","","Loads the data from `/etc/hosts` from a generic reader.",4,{inputs:[{name:"r"}],output:{name:"hostsfile"}}],[11,"lines","","Iterates over all lines in the file.",4,{inputs:[{name:"self"}],output:{name:"lines"}}],[11,"data_lines","","Iterates over the lines in the file with data.",4,{inputs:[{name:"self"}],output:{name:"datalines"}}],[11,"fmt","","",1,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[11,"from","","",1,{inputs:[{name:"error"}],output:{name:"linereaderror"}}],[11,"from","","",1,{inputs:[{name:"dataparseerror"}],output:{name:"linereaderror"}}],[11,"description","","",1,{inputs:[{name:"self"}],output:{name:"str"}}],[11,"cause","","",1,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"fmt","","",1,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[11,"next","","",5,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"next","","",6,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"clone","","",7,{inputs:[{name:"self"}],output:{name:"line"}}],[11,"fmt","","",7,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[11,"eq","","",7,{inputs:[{name:"self"},{name:"line"}],output:{name:"bool"}}],[11,"ne","","",7,{inputs:[{name:"self"},{name:"line"}],output:{name:"bool"}}],[11,"empty","","Creates an empty line.",7,{inputs:[],output:{name:"line"}}],[11,"from_data","","Creates a line directly from data",7,{inputs:[{name:"dataline"}],output:{name:"line"}}],[11,"new","","Creates a line from a string.",7,{inputs:[{name:"str"}],output:{name:"result"}}],[11,"from_comment","","Creates a line directly from a comment.",7,{inputs:[{name:"str"}],output:{name:"line"}}],[11,"from_raw","","Creates a line from data and a comment.",7,{inputs:[{name:"dataline"},{name:"str"}],output:{name:"line"}}],[11,"ip","","Gets the IP for this line.",7,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"hosts","","Gets the IP for this line.",7,{inputs:[{name:"self"}],output:{name:"hosts"}}],[11,"data","","Gets the data from this line.",7,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"comment","","Gets the comment from this line.",7,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"into_data","","Strips the comment from the line.",7,{inputs:[{name:"self"}],output:{name:"option"}}],[11,"into_owned","","Makes an owned version of the line.",7,{inputs:[{name:"self"}],output:{name:"line"}}],[11,"from_str","","",7,{inputs:[{name:"str"}],output:{name:"result"}}],[11,"fmt","","",7,{inputs:[{name:"self"},{name:"formatter"}],output:{name:"result"}}],[6,"BufHostsFile","","Shorthand for `HostsFile<BufReader<R>>`.",null,null],[6,"ActualHostsFile","","Shorthand for `HostsFile<BufReader<File>>`.",null,null]],paths:[[4,"DataParseError"],[4,"LineReadError"],[3,"DataLine"],[3,"Hosts"],[3,"HostsFile"],[3,"Lines"],[3,"DataLines"],[3,"Line"]]},initSearch(searchIndex);
