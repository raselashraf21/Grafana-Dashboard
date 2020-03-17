/* global _ */

'use strict' ;

var window, document, ARGS, $, jQuery, moment, kbn;

var ScriptedDashboard= {
	dashboard :{},
	overwrite: true
};

/* Create a simple dashboard*/
function createDashboard(dashboard){
	dashboard.title = 'Grafana Dashboard';
	dashboard.time = {
  		from : "now-6h",
  	to : "now"
	};
	dashboard.id= null;
	dashboard.uid= null;
}



function sendHTTPData(method, url, data){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open( method,url , true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.setRequestHeader("Access-Control-Allow-Origin","*");
    var reqData = JSON.stringify(data);
    httpRequest.send(reqData);
}

createDashboard(ScriptedDashboard.dashboard);
createpanel(ScriptedDashboard.dashboard.panels);
sendHTTPData("POST", "http://192.168.0.104:3000/api/dashboards/db", ScriptedDashboard);

return ScriptedDashboard.dashboard;
