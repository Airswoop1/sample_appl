// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .



<script src="http://static.opentok.com/webrtc/v2.0/js/TB.min.js" type="text/javascript" charset="utf-8"></script>


  <script type="text/javascript" charset="utf-8">
			TB.addEventListener("exception", exceptionHandler);

			var session = TB.initSession("1_MX4zMTQ2MDA1Mn4xMjcuMC4wLjF-RnJpIEp1biAwNyAxMTozMzozNyBQRFQgMjAxM34wLjA1NTU1OTgxNH4"); // Replace with your own session ID. See https://dashboard.tokbox.com/projects

			session.addEventListener("sessionConnected", sessionConnectedHandler);
			session.addEventListener("streamCreated", streamCreatedHandler);

			session.connect(31460052, "T1==cGFydG5lcl9pZD0zMTQ2MDA1MiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz0xOWQ3MDg2YzlhMjExNmE5M2MyMDQxNmMxMjcxZmY4ZTZjNDg0ZjkzOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9JmNyZWF0ZV90aW1lPTEzNzA2MzAwMDQmbm9uY2U9MC43MTQ0NDQ2NTkxMjA0NzMxJmV4cGlyZV90aW1lPTEzNzA3MTY0MDQmY29ubmVjdGlvbl9kYXRhPQ=="); // Replace with your API key and token. See https://dashboard.tokbox.com/projects

			function sessionConnectedHandler(event) {
				 subscribeToStreams(event.streams);
				 session.publish();
			}
			
			function streamCreatedHandler(event) {
				subscribeToStreams(event.streams);
			}
			
			function subscribeToStreams(streams) {
				for (var i = 0; i < streams.length; i++) {
					var stream = streams[i];
					if (stream.connection.connectionId != session.connection.connectionId) {
						session.subscribe(stream);
					}
				}
			}
			
			function exceptionHandler(event) {
				alert(event.message);
			}
			

		</script>




#JS for the video group layouts

var videos = 1;
var publisherObj;

var subscriberObj = {};

var MAX_WIDTH_VIDEO = 264;
var MAX_HEIGHT_VIDEO = 198;

var MIN_WIDTH_VIDEO = 200;
var MIN_HEIGHT_VIDEO = 150;

var MAX_WIDTH_BOX = 800;
var MAX_HEIGHT_BOX = 600;

var CURRENT_WIDTH = MAX_WIDTH_VIDEO;
var CURRENT_HEIGHT = MAX_HEIGHT_VIDEO;

function layoutManager() {
  var estBoxWidth = MAX_WIDTH_BOX / videos;
  var width = Math.min(MAX_WIDTH_VIDEO, Math.max(MIN_WIDTH_VIDEO, 
        estBoxWidth));
  var height = 3*width/4;

  publisherObj.height = height;
  publisherObj.width = width;

  for(var subscriberDiv in subscriberObj) {
    subscriberDiv.height = height;
    subscriberDiv.width = width;
  }

  CURRENT_HEIGHT = height;
  CURRENT_WIDTH = width;
}