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
  dashboard.rows=[];
  dashboard.rows.push({
      title: 'Chart',
    height: '300px',
        panels: [
            {
            title: 'Events',
            type: 'graph',
            span: 12,
            fill: 1,
            linewidth: 2,
              targets: [
        {
                'target': "randomWalk('random walk2')"        
          }
      
      ],
            seriesOverrides: [
              {
                alias: '/random/',
                yaxis: 2,
                fill: 0,
                linewidth: 5
              }
            ],
            tooltip: {
              shared: true
       }
           }
         ]
       });
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
sendHTTPData("POST", "http://192.168.0.101:3000/api/dashboards/db", ScriptedDashboard);

return ScriptedDashboard.dashboard;
