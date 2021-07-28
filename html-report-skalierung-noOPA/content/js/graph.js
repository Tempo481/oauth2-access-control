/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 960.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 7.0], [6.7, 7.0], [6.8, 7.0], [6.9, 7.0], [7.0, 7.0], [7.1, 7.0], [7.2, 7.0], [7.3, 7.0], [7.4, 7.0], [7.5, 7.0], [7.6, 7.0], [7.7, 7.0], [7.8, 7.0], [7.9, 7.0], [8.0, 7.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 7.0], [8.9, 7.0], [9.0, 7.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 8.0], [11.7, 8.0], [11.8, 8.0], [11.9, 8.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 8.0], [12.4, 8.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 8.0], [13.0, 8.0], [13.1, 8.0], [13.2, 8.0], [13.3, 8.0], [13.4, 8.0], [13.5, 8.0], [13.6, 8.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 9.0], [15.0, 9.0], [15.1, 9.0], [15.2, 9.0], [15.3, 9.0], [15.4, 9.0], [15.5, 9.0], [15.6, 9.0], [15.7, 9.0], [15.8, 9.0], [15.9, 9.0], [16.0, 9.0], [16.1, 9.0], [16.2, 9.0], [16.3, 9.0], [16.4, 9.0], [16.5, 9.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 9.0], [18.2, 9.0], [18.3, 9.0], [18.4, 9.0], [18.5, 9.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 10.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 10.0], [21.5, 10.0], [21.6, 10.0], [21.7, 10.0], [21.8, 10.0], [21.9, 10.0], [22.0, 10.0], [22.1, 10.0], [22.2, 10.0], [22.3, 10.0], [22.4, 10.0], [22.5, 10.0], [22.6, 10.0], [22.7, 10.0], [22.8, 10.0], [22.9, 10.0], [23.0, 10.0], [23.1, 10.0], [23.2, 10.0], [23.3, 10.0], [23.4, 10.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 12.0], [32.6, 12.0], [32.7, 12.0], [32.8, 12.0], [32.9, 12.0], [33.0, 12.0], [33.1, 12.0], [33.2, 12.0], [33.3, 12.0], [33.4, 12.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 13.0], [36.4, 13.0], [36.5, 13.0], [36.6, 13.0], [36.7, 13.0], [36.8, 13.0], [36.9, 13.0], [37.0, 13.0], [37.1, 13.0], [37.2, 13.0], [37.3, 13.0], [37.4, 13.0], [37.5, 13.0], [37.6, 13.0], [37.7, 13.0], [37.8, 13.0], [37.9, 13.0], [38.0, 13.0], [38.1, 13.0], [38.2, 13.0], [38.3, 13.0], [38.4, 13.0], [38.5, 13.0], [38.6, 14.0], [38.7, 14.0], [38.8, 14.0], [38.9, 14.0], [39.0, 14.0], [39.1, 14.0], [39.2, 14.0], [39.3, 14.0], [39.4, 14.0], [39.5, 14.0], [39.6, 14.0], [39.7, 14.0], [39.8, 14.0], [39.9, 14.0], [40.0, 14.0], [40.1, 14.0], [40.2, 14.0], [40.3, 14.0], [40.4, 14.0], [40.5, 14.0], [40.6, 14.0], [40.7, 14.0], [40.8, 14.0], [40.9, 14.0], [41.0, 14.0], [41.1, 14.0], [41.2, 14.0], [41.3, 14.0], [41.4, 14.0], [41.5, 14.0], [41.6, 14.0], [41.7, 14.0], [41.8, 14.0], [41.9, 14.0], [42.0, 14.0], [42.1, 14.0], [42.2, 14.0], [42.3, 14.0], [42.4, 14.0], [42.5, 14.0], [42.6, 14.0], [42.7, 14.0], [42.8, 14.0], [42.9, 14.0], [43.0, 14.0], [43.1, 14.0], [43.2, 14.0], [43.3, 14.0], [43.4, 14.0], [43.5, 14.0], [43.6, 15.0], [43.7, 15.0], [43.8, 15.0], [43.9, 15.0], [44.0, 15.0], [44.1, 15.0], [44.2, 15.0], [44.3, 15.0], [44.4, 15.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 15.0], [44.9, 15.0], [45.0, 15.0], [45.1, 15.0], [45.2, 15.0], [45.3, 15.0], [45.4, 15.0], [45.5, 15.0], [45.6, 15.0], [45.7, 15.0], [45.8, 15.0], [45.9, 15.0], [46.0, 15.0], [46.1, 15.0], [46.2, 15.0], [46.3, 15.0], [46.4, 15.0], [46.5, 15.0], [46.6, 15.0], [46.7, 15.0], [46.8, 15.0], [46.9, 15.0], [47.0, 15.0], [47.1, 15.0], [47.2, 15.0], [47.3, 15.0], [47.4, 15.0], [47.5, 15.0], [47.6, 15.0], [47.7, 15.0], [47.8, 15.0], [47.9, 15.0], [48.0, 15.0], [48.1, 15.0], [48.2, 15.0], [48.3, 15.0], [48.4, 15.0], [48.5, 16.0], [48.6, 16.0], [48.7, 16.0], [48.8, 16.0], [48.9, 16.0], [49.0, 16.0], [49.1, 16.0], [49.2, 16.0], [49.3, 16.0], [49.4, 16.0], [49.5, 16.0], [49.6, 16.0], [49.7, 16.0], [49.8, 16.0], [49.9, 16.0], [50.0, 16.0], [50.1, 16.0], [50.2, 16.0], [50.3, 16.0], [50.4, 16.0], [50.5, 16.0], [50.6, 16.0], [50.7, 16.0], [50.8, 16.0], [50.9, 16.0], [51.0, 16.0], [51.1, 16.0], [51.2, 16.0], [51.3, 16.0], [51.4, 16.0], [51.5, 16.0], [51.6, 16.0], [51.7, 16.0], [51.8, 16.0], [51.9, 16.0], [52.0, 16.0], [52.1, 16.0], [52.2, 16.0], [52.3, 16.0], [52.4, 16.0], [52.5, 16.0], [52.6, 16.0], [52.7, 16.0], [52.8, 16.0], [52.9, 17.0], [53.0, 17.0], [53.1, 17.0], [53.2, 17.0], [53.3, 17.0], [53.4, 17.0], [53.5, 17.0], [53.6, 17.0], [53.7, 17.0], [53.8, 17.0], [53.9, 17.0], [54.0, 17.0], [54.1, 17.0], [54.2, 17.0], [54.3, 17.0], [54.4, 17.0], [54.5, 17.0], [54.6, 17.0], [54.7, 17.0], [54.8, 17.0], [54.9, 17.0], [55.0, 17.0], [55.1, 17.0], [55.2, 17.0], [55.3, 17.0], [55.4, 17.0], [55.5, 17.0], [55.6, 17.0], [55.7, 17.0], [55.8, 17.0], [55.9, 17.0], [56.0, 17.0], [56.1, 17.0], [56.2, 17.0], [56.3, 17.0], [56.4, 17.0], [56.5, 17.0], [56.6, 17.0], [56.7, 17.0], [56.8, 17.0], [56.9, 17.0], [57.0, 17.0], [57.1, 17.0], [57.2, 17.0], [57.3, 18.0], [57.4, 18.0], [57.5, 18.0], [57.6, 18.0], [57.7, 18.0], [57.8, 18.0], [57.9, 18.0], [58.0, 18.0], [58.1, 18.0], [58.2, 18.0], [58.3, 18.0], [58.4, 18.0], [58.5, 18.0], [58.6, 18.0], [58.7, 18.0], [58.8, 18.0], [58.9, 18.0], [59.0, 18.0], [59.1, 18.0], [59.2, 18.0], [59.3, 18.0], [59.4, 18.0], [59.5, 18.0], [59.6, 18.0], [59.7, 18.0], [59.8, 18.0], [59.9, 18.0], [60.0, 18.0], [60.1, 18.0], [60.2, 18.0], [60.3, 18.0], [60.4, 18.0], [60.5, 18.0], [60.6, 18.0], [60.7, 18.0], [60.8, 18.0], [60.9, 18.0], [61.0, 18.0], [61.1, 18.0], [61.2, 18.0], [61.3, 18.0], [61.4, 18.0], [61.5, 19.0], [61.6, 19.0], [61.7, 19.0], [61.8, 19.0], [61.9, 19.0], [62.0, 19.0], [62.1, 19.0], [62.2, 19.0], [62.3, 19.0], [62.4, 19.0], [62.5, 19.0], [62.6, 19.0], [62.7, 19.0], [62.8, 19.0], [62.9, 19.0], [63.0, 19.0], [63.1, 19.0], [63.2, 19.0], [63.3, 19.0], [63.4, 19.0], [63.5, 19.0], [63.6, 19.0], [63.7, 19.0], [63.8, 19.0], [63.9, 19.0], [64.0, 19.0], [64.1, 19.0], [64.2, 19.0], [64.3, 19.0], [64.4, 19.0], [64.5, 19.0], [64.6, 19.0], [64.7, 19.0], [64.8, 19.0], [64.9, 19.0], [65.0, 19.0], [65.1, 19.0], [65.2, 19.0], [65.3, 19.0], [65.4, 20.0], [65.5, 20.0], [65.6, 20.0], [65.7, 20.0], [65.8, 20.0], [65.9, 20.0], [66.0, 20.0], [66.1, 20.0], [66.2, 20.0], [66.3, 20.0], [66.4, 20.0], [66.5, 20.0], [66.6, 20.0], [66.7, 20.0], [66.8, 20.0], [66.9, 20.0], [67.0, 20.0], [67.1, 20.0], [67.2, 20.0], [67.3, 20.0], [67.4, 20.0], [67.5, 20.0], [67.6, 20.0], [67.7, 20.0], [67.8, 20.0], [67.9, 20.0], [68.0, 20.0], [68.1, 20.0], [68.2, 20.0], [68.3, 20.0], [68.4, 20.0], [68.5, 20.0], [68.6, 20.0], [68.7, 21.0], [68.8, 21.0], [68.9, 21.0], [69.0, 21.0], [69.1, 21.0], [69.2, 21.0], [69.3, 21.0], [69.4, 21.0], [69.5, 21.0], [69.6, 21.0], [69.7, 21.0], [69.8, 21.0], [69.9, 21.0], [70.0, 21.0], [70.1, 21.0], [70.2, 21.0], [70.3, 21.0], [70.4, 21.0], [70.5, 21.0], [70.6, 21.0], [70.7, 21.0], [70.8, 21.0], [70.9, 21.0], [71.0, 21.0], [71.1, 21.0], [71.2, 21.0], [71.3, 21.0], [71.4, 22.0], [71.5, 22.0], [71.6, 22.0], [71.7, 22.0], [71.8, 22.0], [71.9, 22.0], [72.0, 22.0], [72.1, 22.0], [72.2, 22.0], [72.3, 22.0], [72.4, 22.0], [72.5, 22.0], [72.6, 22.0], [72.7, 22.0], [72.8, 22.0], [72.9, 22.0], [73.0, 22.0], [73.1, 22.0], [73.2, 22.0], [73.3, 22.0], [73.4, 22.0], [73.5, 22.0], [73.6, 22.0], [73.7, 22.0], [73.8, 23.0], [73.9, 23.0], [74.0, 23.0], [74.1, 23.0], [74.2, 23.0], [74.3, 23.0], [74.4, 23.0], [74.5, 23.0], [74.6, 23.0], [74.7, 23.0], [74.8, 23.0], [74.9, 23.0], [75.0, 23.0], [75.1, 23.0], [75.2, 23.0], [75.3, 23.0], [75.4, 23.0], [75.5, 23.0], [75.6, 23.0], [75.7, 23.0], [75.8, 24.0], [75.9, 24.0], [76.0, 24.0], [76.1, 24.0], [76.2, 24.0], [76.3, 24.0], [76.4, 24.0], [76.5, 24.0], [76.6, 24.0], [76.7, 24.0], [76.8, 24.0], [76.9, 24.0], [77.0, 24.0], [77.1, 24.0], [77.2, 24.0], [77.3, 24.0], [77.4, 24.0], [77.5, 24.0], [77.6, 24.0], [77.7, 25.0], [77.8, 25.0], [77.9, 25.0], [78.0, 25.0], [78.1, 25.0], [78.2, 25.0], [78.3, 25.0], [78.4, 25.0], [78.5, 25.0], [78.6, 25.0], [78.7, 25.0], [78.8, 25.0], [78.9, 25.0], [79.0, 25.0], [79.1, 25.0], [79.2, 25.0], [79.3, 25.0], [79.4, 26.0], [79.5, 26.0], [79.6, 26.0], [79.7, 26.0], [79.8, 26.0], [79.9, 26.0], [80.0, 26.0], [80.1, 26.0], [80.2, 26.0], [80.3, 26.0], [80.4, 26.0], [80.5, 26.0], [80.6, 26.0], [80.7, 26.0], [80.8, 26.0], [80.9, 27.0], [81.0, 27.0], [81.1, 27.0], [81.2, 27.0], [81.3, 27.0], [81.4, 27.0], [81.5, 27.0], [81.6, 27.0], [81.7, 27.0], [81.8, 27.0], [81.9, 27.0], [82.0, 27.0], [82.1, 27.0], [82.2, 28.0], [82.3, 28.0], [82.4, 28.0], [82.5, 28.0], [82.6, 28.0], [82.7, 28.0], [82.8, 28.0], [82.9, 28.0], [83.0, 28.0], [83.1, 28.0], [83.2, 28.0], [83.3, 29.0], [83.4, 29.0], [83.5, 29.0], [83.6, 29.0], [83.7, 29.0], [83.8, 29.0], [83.9, 29.0], [84.0, 29.0], [84.1, 29.0], [84.2, 29.0], [84.3, 30.0], [84.4, 30.0], [84.5, 30.0], [84.6, 30.0], [84.7, 30.0], [84.8, 30.0], [84.9, 30.0], [85.0, 30.0], [85.1, 30.0], [85.2, 31.0], [85.3, 31.0], [85.4, 31.0], [85.5, 31.0], [85.6, 31.0], [85.7, 31.0], [85.8, 31.0], [85.9, 31.0], [86.0, 32.0], [86.1, 32.0], [86.2, 32.0], [86.3, 32.0], [86.4, 32.0], [86.5, 32.0], [86.6, 32.0], [86.7, 33.0], [86.8, 33.0], [86.9, 33.0], [87.0, 33.0], [87.1, 33.0], [87.2, 33.0], [87.3, 33.0], [87.4, 34.0], [87.5, 34.0], [87.6, 34.0], [87.7, 34.0], [87.8, 34.0], [87.9, 34.0], [88.0, 34.0], [88.1, 35.0], [88.2, 35.0], [88.3, 35.0], [88.4, 35.0], [88.5, 35.0], [88.6, 35.0], [88.7, 36.0], [88.8, 36.0], [88.9, 36.0], [89.0, 36.0], [89.1, 36.0], [89.2, 37.0], [89.3, 37.0], [89.4, 37.0], [89.5, 37.0], [89.6, 37.0], [89.7, 38.0], [89.8, 38.0], [89.9, 38.0], [90.0, 38.0], [90.1, 38.0], [90.2, 39.0], [90.3, 39.0], [90.4, 39.0], [90.5, 39.0], [90.6, 40.0], [90.7, 40.0], [90.8, 40.0], [90.9, 40.0], [91.0, 41.0], [91.1, 41.0], [91.2, 41.0], [91.3, 41.0], [91.4, 42.0], [91.5, 42.0], [91.6, 42.0], [91.7, 43.0], [91.8, 43.0], [91.9, 43.0], [92.0, 43.0], [92.1, 44.0], [92.2, 44.0], [92.3, 44.0], [92.4, 45.0], [92.5, 45.0], [92.6, 45.0], [92.7, 46.0], [92.8, 46.0], [92.9, 47.0], [93.0, 47.0], [93.1, 47.0], [93.2, 48.0], [93.3, 48.0], [93.4, 48.0], [93.5, 49.0], [93.6, 49.0], [93.7, 50.0], [93.8, 50.0], [93.9, 50.0], [94.0, 51.0], [94.1, 51.0], [94.2, 52.0], [94.3, 52.0], [94.4, 53.0], [94.5, 53.0], [94.6, 53.0], [94.7, 54.0], [94.8, 54.0], [94.9, 55.0], [95.0, 55.0], [95.1, 56.0], [95.2, 56.0], [95.3, 57.0], [95.4, 58.0], [95.5, 58.0], [95.6, 59.0], [95.7, 59.0], [95.8, 60.0], [95.9, 61.0], [96.0, 61.0], [96.1, 62.0], [96.2, 63.0], [96.3, 63.0], [96.4, 64.0], [96.5, 65.0], [96.6, 65.0], [96.7, 66.0], [96.8, 67.0], [96.9, 68.0], [97.0, 68.0], [97.1, 69.0], [97.2, 70.0], [97.3, 71.0], [97.4, 72.0], [97.5, 73.0], [97.6, 74.0], [97.7, 76.0], [97.8, 77.0], [97.9, 78.0], [98.0, 80.0], [98.1, 81.0], [98.2, 83.0], [98.3, 84.0], [98.4, 86.0], [98.5, 87.0], [98.6, 89.0], [98.7, 91.0], [98.8, 93.0], [98.9, 95.0], [99.0, 98.0], [99.1, 101.0], [99.2, 104.0], [99.3, 108.0], [99.4, 113.0], [99.5, 120.0], [99.6, 128.0], [99.7, 142.0], [99.8, 168.0], [99.9, 310.0], [100.0, 960.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 708139.0, "series": [{"data": [[0.0, 708139.0], [300.0, 560.0], [600.0, 3.0], [400.0, 154.0], [200.0, 342.0], [100.0, 5804.0], [900.0, 10.0], [500.0, 35.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 715001.0, "series": [{"data": [[0.0, 715001.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 46.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.687731897067606, "minX": 1.62748602E12, "maxY": 93.95578124860454, "series": [{"data": [[1.6274862E12, 57.45589597894067], [1.62748632E12, 93.95578124860454], [1.62748602E12, 5.687731897067606], [1.62748614E12, 37.551939577725264], [1.62748608E12, 19.00467489895901], [1.62748626E12, 77.59306216201422]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748632E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 6.704855842185137, "minX": 1.0, "maxY": 35.07363615078438, "series": [{"data": [[2.0, 24.905579399141615], [3.0, 17.154901960784304], [4.0, 14.655819774718408], [5.0, 11.084218512898332], [6.0, 7.649344978165943], [7.0, 7.0145911096029785], [8.0, 7.1502872694284845], [9.0, 6.704855842185137], [10.0, 6.962130177514796], [11.0, 6.846349206349208], [12.0, 7.050481241406411], [13.0, 7.299235181644364], [14.0, 10.666313559322038], [15.0, 15.93749999999999], [16.0, 14.649209792376823], [17.0, 15.329829648423337], [18.0, 10.924381625441688], [19.0, 8.925967025998721], [20.0, 10.40267276244059], [21.0, 9.238907849829374], [22.0, 10.387122801355531], [23.0, 10.429241713334326], [24.0, 9.463391906283293], [25.0, 9.747538400945235], [26.0, 9.920849420849411], [27.0, 10.125314861460975], [28.0, 10.248274161735718], [29.0, 11.015005771450511], [30.0, 11.85737094199043], [31.0, 12.01979424404218], [32.0, 12.065609137055805], [33.0, 11.928693112679452], [34.0, 12.314826113483853], [35.0, 12.91348063555112], [36.0, 12.81786695330227], [37.0, 14.265424912689147], [38.0, 14.40471337579616], [39.0, 14.956931012250108], [40.0, 14.665558428764914], [41.0, 14.83633268482494], [42.0, 15.519106699751877], [43.0, 18.368134232037892], [44.0, 16.641232945932376], [45.0, 16.506968215158942], [46.0, 17.41657121038567], [47.0, 17.14530123426623], [48.0, 17.625971143174283], [49.0, 18.33620905226305], [50.0, 19.11984635083233], [51.0, 18.485613265057307], [52.0, 19.166357681374414], [53.0, 19.17515422765207], [54.0, 18.982352941176558], [55.0, 19.32834060620363], [56.0, 19.956552791334342], [57.0, 19.96952941176467], [58.0, 20.46545411597969], [59.0, 20.481550459783474], [60.0, 20.72299651567937], [61.0, 21.62629141432132], [62.0, 23.11382113821134], [63.0, 22.74292935371277], [64.0, 26.30994646379253], [65.0, 25.68763782591768], [66.0, 25.506027219701885], [67.0, 26.04985031888587], [68.0, 25.84967733771986], [69.0, 24.59640933572705], [70.0, 24.68341589997639], [71.0, 25.13773382580725], [72.0, 28.460500198491385], [73.0, 27.09112207151674], [74.0, 25.823170731707275], [75.0, 26.07133668576774], [76.0, 26.55735037768739], [77.0, 29.40520540954329], [78.0, 27.811918951132384], [79.0, 28.704900048756606], [80.0, 29.109130859375092], [81.0, 28.93607903820971], [82.0, 28.977528089887695], [83.0, 28.986432748537972], [84.0, 29.3001749271137], [85.0, 30.044189657231495], [86.0, 33.47074054893834], [87.0, 30.04195323246218], [88.0, 31.798565523948568], [89.0, 30.019015280135857], [90.0, 30.52955190017018], [91.0, 30.547717842323646], [92.0, 30.75521821631866], [93.0, 30.99910001124988], [94.0, 33.37556080283358], [95.0, 33.89191762885384], [96.0, 33.97068945057534], [97.0, 34.530465949820915], [98.0, 34.23126015316768], [99.0, 34.05781015146254], [100.0, 35.07363615078438], [1.0, 28.210000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[57.042265753161495, 21.07450559193961]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 97297.56666666667, "minX": 1.62748602E12, "maxY": 4724615.95, "series": [{"data": [[1.6274862E12, 1897783.0333333334], [1.62748632E12, 1302552.4], [1.62748602E12, 97297.56666666667], [1.62748614E12, 1847124.8666666667], [1.62748608E12, 1250486.0333333334], [1.62748626E12, 1931621.9833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6274862E12, 4641843.383333334], [1.62748632E12, 3185946.283333333], [1.62748602E12, 237978.25], [1.62748614E12, 4517940.883333334], [1.62748608E12, 3058597.3], [1.62748626E12, 4724615.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748632E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 9.671127377027739, "minX": 1.62748602E12, "maxY": 32.60100310228615, "series": [{"data": [[1.6274862E12, 21.073198868482812], [1.62748632E12, 32.60100310228615], [1.62748602E12, 9.92016756433273], [1.62748614E12, 14.087834217013274], [1.62748608E12, 9.671127377027739], [1.62748626E12, 27.928282481175614]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748632E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 7.414003590664243, "minX": 1.62748602E12, "maxY": 27.969290050333885, "series": [{"data": [[1.6274862E12, 16.241214479005055], [1.62748632E12, 27.969290050333885], [1.62748602E12, 7.414003590664243], [1.62748614E12, 11.32432210923163], [1.62748608E12, 8.454228827922758], [1.62748626E12, 23.089429865017227]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748632E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.061280670257330805, "minX": 1.62748602E12, "maxY": 0.1189775866539133, "series": [{"data": [[1.6274862E12, 0.08913461007443294], [1.62748632E12, 0.1189775866539133], [1.62748602E12, 0.061280670257330805], [1.62748614E12, 0.0800418618433076], [1.62748608E12, 0.06252444543778346], [1.62748626E12, 0.09279388447788275]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748632E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.62748602E12, "maxY": 960.0, "series": [{"data": [[1.6274862E12, 613.0], [1.62748632E12, 550.0], [1.62748602E12, 427.0], [1.62748614E12, 508.0], [1.62748608E12, 960.0], [1.62748626E12, 548.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6274862E12, 47.0], [1.62748632E12, 79.0], [1.62748602E12, 18.0], [1.62748614E12, 27.0], [1.62748608E12, 14.0], [1.62748626E12, 57.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6274862E12, 99.0], [1.62748632E12, 175.0], [1.62748602E12, 35.0], [1.62748614E12, 40.0], [1.62748608E12, 19.0], [1.62748626E12, 340.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6274862E12, 61.0], [1.62748632E12, 105.0], [1.62748602E12, 20.0], [1.62748614E12, 32.0], [1.62748608E12, 15.0], [1.62748626E12, 78.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6274862E12, 5.0], [1.62748632E12, 5.0], [1.62748602E12, 3.0], [1.62748614E12, 4.0], [1.62748608E12, 3.0], [1.62748626E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6274862E12, 19.0], [1.62748632E12, 21.0], [1.62748602E12, 7.0], [1.62748614E12, 16.0], [1.62748608E12, 9.0], [1.62748626E12, 20.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748632E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 6.0, "minX": 18.0, "maxY": 35.5, "series": [{"data": [[18.0, 35.5], [42.0, 19.0], [49.0, 19.0], [61.0, 19.0], [73.0, 19.0], [106.0, 18.0], [160.0, 15.0], [170.0, 17.0], [198.0, 16.0], [249.0, 15.0], [262.0, 16.0], [289.0, 14.0], [309.0, 15.0], [480.0, 9.0], [596.0, 7.0], [624.0, 7.0], [666.0, 6.0], [731.0, 8.0], [777.0, 7.0], [800.0, 8.0], [861.0, 6.0], [917.0, 7.0], [919.0, 7.0], [950.0, 7.0], [972.0, 6.0], [1067.0, 6.0], [1056.0, 6.0], [1087.0, 7.0], [1050.0, 7.0], [1146.0, 7.0], [1091.0, 7.0], [1116.0, 7.0], [1157.0, 6.0], [1184.0, 8.0], [1280.0, 6.0], [1297.0, 6.0], [1330.0, 6.0], [1378.0, 6.0], [1456.0, 6.0], [1481.0, 6.0], [1487.0, 8.0], [1599.0, 6.0], [1570.0, 6.0], [1572.0, 6.0], [1608.0, 7.0], [1647.0, 10.0], [1723.0, 7.0], [1683.0, 8.0], [1733.0, 6.0], [1744.0, 6.0], [1747.0, 7.0], [1764.0, 6.0], [1831.0, 9.0], [1931.0, 7.0], [1946.0, 9.0], [2021.0, 8.0], [2040.0, 8.0], [2010.0, 16.0], [2109.0, 8.0], [2150.0, 9.0], [2157.0, 9.0], [2206.0, 9.0], [2222.0, 7.0], [2282.0, 8.0], [2218.0, 9.0], [2263.0, 9.0], [2273.0, 21.0], [2278.0, 17.0], [2268.0, 9.0], [2212.0, 11.0], [2299.0, 12.0], [2194.0, 22.0], [2347.0, 12.0], [2402.0, 15.0], [2372.0, 18.0], [2345.0, 14.0], [2371.0, 20.0], [2414.0, 19.0], [2536.0, 9.0], [2486.0, 9.0], [2484.0, 22.0], [2480.0, 14.0], [2466.0, 16.0], [2472.0, 19.0], [2439.0, 9.0], [2505.0, 11.0], [2508.0, 24.0], [2501.0, 17.0], [2503.0, 20.0], [2498.0, 9.0], [2447.0, 10.0], [2455.0, 22.0], [2552.0, 9.0], [2551.0, 15.0], [2541.0, 10.0], [2549.0, 12.0], [2461.0, 11.0], [2463.0, 16.0], [2528.0, 17.0], [2530.0, 18.0], [2588.0, 10.0], [2589.0, 9.0], [2591.0, 17.0], [2660.0, 11.0], [2662.0, 22.0], [2663.0, 18.0], [2666.0, 16.0], [2671.0, 18.0], [2673.0, 19.0], [2658.0, 15.0], [2581.0, 9.0], [2579.0, 15.0], [2577.0, 17.0], [2587.0, 14.0], [2583.0, 17.0], [2585.0, 21.0], [2572.0, 11.0], [2573.0, 13.0], [2620.0, 9.0], [2612.0, 10.0], [2595.0, 16.0], [2604.0, 19.0], [2610.0, 21.0], [2597.0, 19.0], [2616.0, 11.0], [2617.0, 27.0], [2639.0, 9.0], [2687.0, 11.0], [2632.0, 12.0], [2637.0, 16.0], [2636.0, 20.0], [2634.0, 18.0], [2624.0, 16.0], [2626.0, 26.0], [2628.0, 16.0], [2631.0, 17.0], [2684.0, 15.0], [2682.0, 17.0], [2679.0, 18.0], [2676.0, 24.0], [2683.0, 16.0], [2675.0, 10.0], [2646.0, 12.0], [2645.0, 18.0], [2655.0, 15.0], [2650.0, 20.0], [2649.0, 17.0], [2644.0, 14.0], [2642.0, 14.0], [2640.0, 16.0], [2570.0, 10.0], [2565.0, 11.0], [2564.0, 26.0], [2563.0, 18.0], [2622.0, 18.0], [2713.0, 10.0], [2719.0, 9.0], [2715.0, 20.0], [2788.0, 13.0], [2803.0, 18.0], [2795.0, 18.0], [2794.0, 26.0], [2786.0, 14.0], [2695.0, 10.0], [2692.0, 25.0], [2708.0, 17.0], [2712.0, 19.0], [2705.0, 18.0], [2699.0, 22.0], [2706.0, 21.0], [2698.0, 18.0], [2812.0, 17.0], [2813.0, 19.0], [2774.0, 12.0], [2775.0, 14.0], [2780.0, 15.0], [2782.0, 18.0], [2779.0, 16.0], [2771.0, 13.0], [2754.0, 14.0], [2756.0, 17.0], [2770.0, 16.0], [2767.0, 21.0], [2766.0, 18.0], [2761.0, 19.0], [2763.0, 19.0], [2752.0, 15.0], [2750.0, 11.0], [2690.0, 18.0], [2746.0, 15.0], [2747.0, 20.0], [2804.0, 11.0], [2691.0, 12.0], [2729.0, 12.0], [2730.0, 21.0], [2732.0, 23.0], [2727.0, 16.0], [2720.0, 18.0], [2726.0, 23.0], [2739.0, 14.0], [2735.0, 16.0], [2740.0, 12.0], [2928.0, 19.0], [2842.0, 16.0], [2859.0, 14.0], [2911.0, 16.0], [2903.0, 17.0], [2907.0, 20.0], [2908.0, 25.0], [2902.0, 20.0], [2909.0, 19.0], [2857.0, 16.0], [2851.0, 21.0], [2853.0, 23.0], [2924.0, 16.0], [2901.0, 16.0], [2934.0, 17.0], [2935.0, 24.0], [2880.0, 24.0], [2940.0, 26.0], [2885.0, 20.0], [2899.0, 23.0], [2886.0, 26.0], [2888.0, 25.0], [2923.0, 16.0], [2844.0, 16.0], [2918.0, 22.0], [2917.0, 20.0], [2843.0, 23.0], [2860.0, 17.0], [2864.0, 24.0], [2871.0, 22.0], [2835.0, 17.0], [2829.0, 19.0], [2824.0, 19.0], [2820.0, 24.0], [2821.0, 28.0], [2879.0, 22.0], [2875.0, 20.0], [2944.0, 21.0], [2962.0, 14.0], [2973.0, 23.0], [3041.0, 20.0], [2972.0, 23.0], [2977.0, 16.0], [2988.0, 23.0], [2994.0, 16.0], [3025.0, 19.0], [3036.0, 20.0], [3039.0, 23.0], [3031.0, 21.0], [3029.0, 23.0], [3015.0, 19.0], [3019.0, 22.0], [3021.0, 23.0], [3055.0, 22.0], [3014.0, 23.0], [3052.0, 17.0], [3006.0, 18.0], [2945.0, 20.0], [2952.0, 21.0], [2961.0, 21.0], [3005.0, 18.0], [2996.0, 19.0], [3003.0, 20.0], [3098.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3098.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 5.0, "minX": 18.0, "maxY": 25.5, "series": [{"data": [[18.0, 25.5], [42.0, 16.0], [49.0, 15.0], [61.0, 13.0], [73.0, 13.0], [106.0, 12.0], [160.0, 9.0], [170.0, 9.5], [198.0, 9.0], [249.0, 9.0], [262.0, 9.0], [289.0, 8.0], [309.0, 9.0], [480.0, 7.0], [596.0, 5.0], [624.0, 6.0], [666.0, 5.0], [731.0, 6.0], [777.0, 5.0], [800.0, 6.0], [861.0, 5.0], [917.0, 6.0], [919.0, 6.0], [950.0, 6.0], [972.0, 5.0], [1067.0, 5.0], [1056.0, 5.0], [1087.0, 6.0], [1050.0, 6.0], [1146.0, 6.0], [1091.0, 6.0], [1116.0, 6.0], [1157.0, 5.0], [1184.0, 7.0], [1280.0, 5.0], [1297.0, 5.0], [1330.0, 5.0], [1378.0, 5.0], [1456.0, 5.0], [1481.0, 5.0], [1487.0, 7.0], [1599.0, 5.0], [1570.0, 5.0], [1572.0, 5.0], [1608.0, 6.0], [1647.0, 8.0], [1723.0, 6.0], [1683.0, 8.0], [1733.0, 6.0], [1744.0, 5.0], [1747.0, 6.0], [1764.0, 6.0], [1831.0, 8.0], [1931.0, 6.0], [1946.0, 8.0], [2021.0, 7.0], [2040.0, 7.0], [2010.0, 13.0], [2109.0, 7.0], [2150.0, 8.0], [2157.0, 8.0], [2206.0, 8.0], [2222.0, 6.0], [2282.0, 7.0], [2218.0, 8.0], [2263.0, 8.0], [2273.0, 17.0], [2278.0, 13.0], [2268.0, 8.0], [2212.0, 9.0], [2299.0, 10.0], [2194.0, 17.0], [2347.0, 9.0], [2402.0, 12.0], [2372.0, 14.0], [2345.0, 11.0], [2371.0, 16.0], [2414.0, 15.0], [2536.0, 7.0], [2486.0, 7.0], [2484.0, 17.0], [2480.0, 11.0], [2466.0, 13.0], [2472.0, 15.0], [2439.0, 7.0], [2505.0, 9.0], [2508.0, 20.0], [2501.0, 14.0], [2503.0, 16.0], [2498.0, 8.0], [2447.0, 8.0], [2455.0, 17.0], [2552.0, 8.0], [2551.0, 12.0], [2541.0, 8.0], [2549.0, 9.0], [2461.0, 9.0], [2463.0, 13.0], [2528.0, 14.0], [2530.0, 15.0], [2588.0, 8.0], [2589.0, 8.0], [2591.0, 13.0], [2660.0, 9.0], [2662.0, 19.0], [2663.0, 14.0], [2666.0, 12.0], [2671.0, 14.0], [2673.0, 16.0], [2658.0, 12.0], [2581.0, 8.0], [2579.0, 12.0], [2577.0, 13.0], [2587.0, 12.0], [2583.0, 13.0], [2585.0, 17.0], [2572.0, 9.0], [2573.0, 11.0], [2620.0, 8.0], [2612.0, 8.0], [2595.0, 13.0], [2604.0, 15.0], [2610.0, 18.0], [2597.0, 15.0], [2616.0, 8.0], [2617.0, 23.0], [2639.0, 8.0], [2687.0, 9.0], [2632.0, 9.0], [2637.0, 13.0], [2636.0, 16.0], [2634.0, 14.0], [2624.0, 13.0], [2626.0, 23.0], [2628.0, 13.0], [2631.0, 14.0], [2684.0, 11.0], [2682.0, 14.0], [2679.0, 14.0], [2676.0, 20.0], [2683.0, 13.0], [2675.0, 8.0], [2646.0, 10.0], [2645.0, 14.0], [2655.0, 12.0], [2650.0, 17.0], [2649.0, 14.0], [2644.0, 12.0], [2642.0, 12.0], [2640.0, 12.0], [2570.0, 8.0], [2565.0, 9.0], [2564.0, 23.0], [2563.0, 14.0], [2622.0, 14.0], [2713.0, 8.0], [2719.0, 8.0], [2715.0, 16.0], [2788.0, 11.0], [2803.0, 15.0], [2795.0, 14.0], [2794.0, 22.0], [2786.0, 12.0], [2695.0, 8.0], [2692.0, 22.0], [2708.0, 14.0], [2712.0, 15.0], [2705.0, 14.0], [2699.0, 19.0], [2706.0, 17.0], [2698.0, 14.0], [2812.0, 14.0], [2813.0, 15.0], [2774.0, 10.0], [2775.0, 11.0], [2780.0, 13.0], [2782.0, 14.0], [2779.0, 13.0], [2771.0, 11.0], [2754.0, 11.0], [2756.0, 13.0], [2770.0, 13.0], [2767.0, 18.0], [2766.0, 15.0], [2761.0, 15.0], [2763.0, 15.0], [2752.0, 12.0], [2750.0, 9.0], [2690.0, 14.0], [2746.0, 12.0], [2747.0, 16.0], [2804.0, 9.0], [2691.0, 9.0], [2729.0, 9.0], [2730.0, 17.0], [2732.0, 19.0], [2727.0, 13.0], [2720.0, 15.0], [2726.0, 20.0], [2739.0, 12.0], [2735.0, 12.0], [2740.0, 9.0], [2928.0, 15.0], [2842.0, 13.0], [2859.0, 11.0], [2911.0, 13.0], [2903.0, 14.0], [2907.0, 17.0], [2908.0, 21.0], [2902.0, 16.0], [2909.0, 15.0], [2857.0, 12.0], [2851.0, 18.0], [2853.0, 20.0], [2924.0, 12.0], [2901.0, 13.0], [2934.0, 14.0], [2935.0, 20.0], [2880.0, 20.0], [2940.0, 22.0], [2885.0, 16.0], [2899.0, 19.0], [2886.0, 21.0], [2888.0, 22.0], [2923.0, 13.0], [2844.0, 13.0], [2918.0, 18.0], [2917.0, 17.0], [2843.0, 19.0], [2860.0, 14.0], [2864.0, 21.0], [2871.0, 18.0], [2835.0, 13.0], [2829.0, 16.0], [2824.0, 15.0], [2820.0, 20.0], [2821.0, 24.0], [2879.0, 18.0], [2875.0, 17.0], [2944.0, 17.0], [2962.0, 11.0], [2973.0, 20.0], [3041.0, 17.0], [2972.0, 20.0], [2977.0, 13.0], [2988.0, 20.0], [2994.0, 13.0], [3025.0, 16.0], [3036.0, 17.0], [3039.0, 19.0], [3031.0, 18.0], [3029.0, 19.0], [3015.0, 15.0], [3019.0, 20.0], [3021.0, 20.0], [3055.0, 19.0], [3014.0, 19.0], [3052.0, 13.0], [3006.0, 15.0], [2945.0, 17.0], [2952.0, 18.0], [2961.0, 18.0], [3005.0, 15.0], [2996.0, 16.0], [3003.0, 17.0], [3098.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3098.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 139.38333333333333, "minX": 1.62748602E12, "maxY": 2764.883333333333, "series": [{"data": [[1.6274862E12, 2716.45], [1.62748632E12, 1862.75], [1.62748602E12, 139.38333333333333], [1.62748614E12, 2643.95], [1.62748608E12, 1790.0333333333333], [1.62748626E12, 2764.883333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748632E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 139.25, "minX": 1.62748602E12, "maxY": 2764.55, "series": [{"data": [[1.6274862E12, 2716.116666666667], [1.62748632E12, 1864.2166666666667], [1.62748602E12, 139.25], [1.62748614E12, 2643.616666666667], [1.62748608E12, 1789.7], [1.62748626E12, 2764.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748632E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 139.25, "minX": 1.62748602E12, "maxY": 2764.55, "series": [{"data": [[1.6274862E12, 2716.116666666667], [1.62748632E12, 1864.2166666666667], [1.62748602E12, 139.25], [1.62748614E12, 2643.616666666667], [1.62748608E12, 1789.7], [1.62748626E12, 2764.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748632E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 139.25, "minX": 1.62748602E12, "maxY": 2764.55, "series": [{"data": [[1.6274862E12, 2716.116666666667], [1.62748632E12, 1864.2166666666667], [1.62748602E12, 139.25], [1.62748614E12, 2643.616666666667], [1.62748608E12, 1789.7], [1.62748626E12, 2764.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748632E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

