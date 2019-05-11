var where = 'body';
var ww = '$(document).ready(download ());'+
'function download()'+
'{'+
	'$("#mep_0-qualities-720").click();'+
			'var w = $("#player_html5").attr(\'src\');'+
			'if (w != undefined && w.split(\'=\').length > 1) {'+
	'var name=$("title").html();'+
				'$("#player-below-container-desktop").prepend(\'<div id="do" class="mdl-cell--8-col mdl-button mdl-button--raised dideo-font" style="width: 100%;"><a href="\''+
'+w'+
'+\'" target="_blank"  style="width: 100%;"> دانلود \'+ name +\' </a><i class=" mdi mdi-download icon"></i></div>\');'+
		'}'+
		'else'+
		'{'+
			'setTimeout(download, 1000);'+
		'}'+
	''+
'}';
var textnode = document.createTextNode(ww);
var elm = document.createElement('script');
elm.appendChild(textnode);
document[where || 'head'].appendChild(elm);
