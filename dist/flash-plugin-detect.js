var e="Shockwave",a=e+" Flash",i=e+"Flash."+e+"Flash",r="application/x-shockwave-flash";module.exports=function(){var e=navigator.plugins,t=navigator.mimeTypes;if(e&&"object"==typeof e[a]){if(e[a].description&&t&&t[r]&&t[r].enabledPlugin)return parseFloat(d.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{var s=new ActiveXObject(i);if(s){var n=s.GetVariable("$version");if(n)return parse(n.replace(/^\S+\s+(\d+),(\d+).*$/i,"$1.$2"))}}catch(e){}return-1};
//# sourceMappingURL=flash-plugin-detect.js.map