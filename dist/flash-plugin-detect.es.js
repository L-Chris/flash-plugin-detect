var e="Shockwave",a=e+" Flash",i=e+"Flash."+e+"Flash",r="application/x-shockwave-flash";export default function(){var e=navigator.plugins,t=navigator.mimeTypes;if(e&&"object"==typeof e[a]){if(e[a].description&&t&&t[r]&&t[r].enabledPlugin)return parseFloat(d.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{var n=new ActiveXObject(i);if(n){var s=n.GetVariable("$version");if(s)return parse(s.replace(/^\S+\s+(\d+),(\d+).*$/i,"$1.$2"))}}catch(e){}return-1}
//# sourceMappingURL=flash-plugin-detect.es.js.map
