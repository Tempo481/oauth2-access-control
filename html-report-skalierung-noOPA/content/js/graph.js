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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1264.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 4.0], [10.3, 4.0], [10.4, 4.0], [10.5, 4.0], [10.6, 4.0], [10.7, 4.0], [10.8, 4.0], [10.9, 4.0], [11.0, 4.0], [11.1, 4.0], [11.2, 4.0], [11.3, 4.0], [11.4, 4.0], [11.5, 4.0], [11.6, 4.0], [11.7, 4.0], [11.8, 4.0], [11.9, 4.0], [12.0, 4.0], [12.1, 4.0], [12.2, 4.0], [12.3, 4.0], [12.4, 4.0], [12.5, 4.0], [12.6, 4.0], [12.7, 4.0], [12.8, 4.0], [12.9, 4.0], [13.0, 4.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 4.0], [18.7, 4.0], [18.8, 4.0], [18.9, 4.0], [19.0, 4.0], [19.1, 4.0], [19.2, 4.0], [19.3, 4.0], [19.4, 4.0], [19.5, 4.0], [19.6, 4.0], [19.7, 4.0], [19.8, 4.0], [19.9, 4.0], [20.0, 4.0], [20.1, 4.0], [20.2, 4.0], [20.3, 4.0], [20.4, 4.0], [20.5, 4.0], [20.6, 4.0], [20.7, 4.0], [20.8, 4.0], [20.9, 4.0], [21.0, 4.0], [21.1, 4.0], [21.2, 4.0], [21.3, 4.0], [21.4, 4.0], [21.5, 4.0], [21.6, 4.0], [21.7, 4.0], [21.8, 4.0], [21.9, 4.0], [22.0, 4.0], [22.1, 4.0], [22.2, 4.0], [22.3, 4.0], [22.4, 4.0], [22.5, 4.0], [22.6, 4.0], [22.7, 4.0], [22.8, 4.0], [22.9, 4.0], [23.0, 4.0], [23.1, 4.0], [23.2, 4.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 5.0], [23.8, 5.0], [23.9, 5.0], [24.0, 5.0], [24.1, 5.0], [24.2, 5.0], [24.3, 5.0], [24.4, 5.0], [24.5, 5.0], [24.6, 5.0], [24.7, 5.0], [24.8, 5.0], [24.9, 5.0], [25.0, 5.0], [25.1, 5.0], [25.2, 5.0], [25.3, 5.0], [25.4, 5.0], [25.5, 5.0], [25.6, 5.0], [25.7, 5.0], [25.8, 5.0], [25.9, 5.0], [26.0, 5.0], [26.1, 5.0], [26.2, 5.0], [26.3, 5.0], [26.4, 5.0], [26.5, 5.0], [26.6, 5.0], [26.7, 5.0], [26.8, 5.0], [26.9, 5.0], [27.0, 5.0], [27.1, 5.0], [27.2, 5.0], [27.3, 5.0], [27.4, 5.0], [27.5, 5.0], [27.6, 5.0], [27.7, 5.0], [27.8, 5.0], [27.9, 5.0], [28.0, 5.0], [28.1, 5.0], [28.2, 5.0], [28.3, 5.0], [28.4, 5.0], [28.5, 5.0], [28.6, 5.0], [28.7, 5.0], [28.8, 5.0], [28.9, 5.0], [29.0, 5.0], [29.1, 5.0], [29.2, 5.0], [29.3, 5.0], [29.4, 5.0], [29.5, 5.0], [29.6, 5.0], [29.7, 5.0], [29.8, 5.0], [29.9, 5.0], [30.0, 5.0], [30.1, 5.0], [30.2, 5.0], [30.3, 5.0], [30.4, 5.0], [30.5, 5.0], [30.6, 5.0], [30.7, 5.0], [30.8, 5.0], [30.9, 5.0], [31.0, 5.0], [31.1, 5.0], [31.2, 5.0], [31.3, 5.0], [31.4, 5.0], [31.5, 5.0], [31.6, 5.0], [31.7, 5.0], [31.8, 5.0], [31.9, 5.0], [32.0, 5.0], [32.1, 5.0], [32.2, 5.0], [32.3, 5.0], [32.4, 5.0], [32.5, 5.0], [32.6, 5.0], [32.7, 5.0], [32.8, 5.0], [32.9, 5.0], [33.0, 5.0], [33.1, 5.0], [33.2, 5.0], [33.3, 5.0], [33.4, 5.0], [33.5, 5.0], [33.6, 5.0], [33.7, 5.0], [33.8, 5.0], [33.9, 5.0], [34.0, 5.0], [34.1, 5.0], [34.2, 5.0], [34.3, 5.0], [34.4, 5.0], [34.5, 5.0], [34.6, 5.0], [34.7, 5.0], [34.8, 5.0], [34.9, 5.0], [35.0, 5.0], [35.1, 5.0], [35.2, 5.0], [35.3, 5.0], [35.4, 5.0], [35.5, 5.0], [35.6, 5.0], [35.7, 5.0], [35.8, 5.0], [35.9, 5.0], [36.0, 5.0], [36.1, 5.0], [36.2, 5.0], [36.3, 5.0], [36.4, 5.0], [36.5, 5.0], [36.6, 5.0], [36.7, 5.0], [36.8, 5.0], [36.9, 5.0], [37.0, 5.0], [37.1, 5.0], [37.2, 5.0], [37.3, 5.0], [37.4, 5.0], [37.5, 5.0], [37.6, 5.0], [37.7, 5.0], [37.8, 5.0], [37.9, 5.0], [38.0, 5.0], [38.1, 5.0], [38.2, 5.0], [38.3, 5.0], [38.4, 5.0], [38.5, 5.0], [38.6, 6.0], [38.7, 6.0], [38.8, 6.0], [38.9, 6.0], [39.0, 6.0], [39.1, 6.0], [39.2, 6.0], [39.3, 6.0], [39.4, 6.0], [39.5, 6.0], [39.6, 6.0], [39.7, 6.0], [39.8, 6.0], [39.9, 6.0], [40.0, 6.0], [40.1, 6.0], [40.2, 6.0], [40.3, 6.0], [40.4, 6.0], [40.5, 6.0], [40.6, 6.0], [40.7, 6.0], [40.8, 6.0], [40.9, 6.0], [41.0, 6.0], [41.1, 6.0], [41.2, 6.0], [41.3, 6.0], [41.4, 6.0], [41.5, 6.0], [41.6, 6.0], [41.7, 6.0], [41.8, 6.0], [41.9, 6.0], [42.0, 6.0], [42.1, 6.0], [42.2, 6.0], [42.3, 6.0], [42.4, 6.0], [42.5, 6.0], [42.6, 6.0], [42.7, 6.0], [42.8, 6.0], [42.9, 6.0], [43.0, 6.0], [43.1, 6.0], [43.2, 6.0], [43.3, 6.0], [43.4, 6.0], [43.5, 6.0], [43.6, 6.0], [43.7, 6.0], [43.8, 6.0], [43.9, 6.0], [44.0, 6.0], [44.1, 6.0], [44.2, 6.0], [44.3, 6.0], [44.4, 6.0], [44.5, 6.0], [44.6, 6.0], [44.7, 6.0], [44.8, 6.0], [44.9, 6.0], [45.0, 6.0], [45.1, 6.0], [45.2, 6.0], [45.3, 6.0], [45.4, 6.0], [45.5, 6.0], [45.6, 6.0], [45.7, 6.0], [45.8, 6.0], [45.9, 6.0], [46.0, 6.0], [46.1, 6.0], [46.2, 6.0], [46.3, 6.0], [46.4, 6.0], [46.5, 6.0], [46.6, 6.0], [46.7, 6.0], [46.8, 6.0], [46.9, 6.0], [47.0, 6.0], [47.1, 6.0], [47.2, 6.0], [47.3, 6.0], [47.4, 6.0], [47.5, 6.0], [47.6, 6.0], [47.7, 6.0], [47.8, 6.0], [47.9, 6.0], [48.0, 6.0], [48.1, 6.0], [48.2, 6.0], [48.3, 6.0], [48.4, 6.0], [48.5, 6.0], [48.6, 6.0], [48.7, 6.0], [48.8, 6.0], [48.9, 6.0], [49.0, 6.0], [49.1, 6.0], [49.2, 6.0], [49.3, 6.0], [49.4, 6.0], [49.5, 6.0], [49.6, 6.0], [49.7, 6.0], [49.8, 6.0], [49.9, 6.0], [50.0, 6.0], [50.1, 6.0], [50.2, 6.0], [50.3, 6.0], [50.4, 6.0], [50.5, 6.0], [50.6, 6.0], [50.7, 6.0], [50.8, 6.0], [50.9, 6.0], [51.0, 6.0], [51.1, 6.0], [51.2, 7.0], [51.3, 7.0], [51.4, 7.0], [51.5, 7.0], [51.6, 7.0], [51.7, 7.0], [51.8, 7.0], [51.9, 7.0], [52.0, 7.0], [52.1, 7.0], [52.2, 7.0], [52.3, 7.0], [52.4, 7.0], [52.5, 7.0], [52.6, 7.0], [52.7, 7.0], [52.8, 7.0], [52.9, 7.0], [53.0, 7.0], [53.1, 7.0], [53.2, 7.0], [53.3, 7.0], [53.4, 7.0], [53.5, 7.0], [53.6, 7.0], [53.7, 7.0], [53.8, 7.0], [53.9, 7.0], [54.0, 7.0], [54.1, 7.0], [54.2, 7.0], [54.3, 7.0], [54.4, 7.0], [54.5, 7.0], [54.6, 7.0], [54.7, 7.0], [54.8, 7.0], [54.9, 7.0], [55.0, 7.0], [55.1, 7.0], [55.2, 7.0], [55.3, 7.0], [55.4, 7.0], [55.5, 7.0], [55.6, 7.0], [55.7, 7.0], [55.8, 7.0], [55.9, 7.0], [56.0, 7.0], [56.1, 7.0], [56.2, 7.0], [56.3, 7.0], [56.4, 7.0], [56.5, 7.0], [56.6, 7.0], [56.7, 7.0], [56.8, 7.0], [56.9, 7.0], [57.0, 7.0], [57.1, 7.0], [57.2, 7.0], [57.3, 7.0], [57.4, 7.0], [57.5, 7.0], [57.6, 7.0], [57.7, 7.0], [57.8, 7.0], [57.9, 7.0], [58.0, 7.0], [58.1, 7.0], [58.2, 7.0], [58.3, 7.0], [58.4, 7.0], [58.5, 7.0], [58.6, 7.0], [58.7, 7.0], [58.8, 7.0], [58.9, 7.0], [59.0, 7.0], [59.1, 7.0], [59.2, 7.0], [59.3, 7.0], [59.4, 7.0], [59.5, 7.0], [59.6, 7.0], [59.7, 7.0], [59.8, 7.0], [59.9, 7.0], [60.0, 7.0], [60.1, 7.0], [60.2, 7.0], [60.3, 7.0], [60.4, 7.0], [60.5, 7.0], [60.6, 7.0], [60.7, 7.0], [60.8, 7.0], [60.9, 7.0], [61.0, 7.0], [61.1, 7.0], [61.2, 7.0], [61.3, 7.0], [61.4, 7.0], [61.5, 7.0], [61.6, 7.0], [61.7, 7.0], [61.8, 7.0], [61.9, 8.0], [62.0, 8.0], [62.1, 8.0], [62.2, 8.0], [62.3, 8.0], [62.4, 8.0], [62.5, 8.0], [62.6, 8.0], [62.7, 8.0], [62.8, 8.0], [62.9, 8.0], [63.0, 8.0], [63.1, 8.0], [63.2, 8.0], [63.3, 8.0], [63.4, 8.0], [63.5, 8.0], [63.6, 8.0], [63.7, 8.0], [63.8, 8.0], [63.9, 8.0], [64.0, 8.0], [64.1, 8.0], [64.2, 8.0], [64.3, 8.0], [64.4, 8.0], [64.5, 8.0], [64.6, 8.0], [64.7, 8.0], [64.8, 8.0], [64.9, 8.0], [65.0, 8.0], [65.1, 8.0], [65.2, 8.0], [65.3, 8.0], [65.4, 8.0], [65.5, 8.0], [65.6, 8.0], [65.7, 8.0], [65.8, 8.0], [65.9, 8.0], [66.0, 8.0], [66.1, 8.0], [66.2, 8.0], [66.3, 8.0], [66.4, 8.0], [66.5, 8.0], [66.6, 8.0], [66.7, 8.0], [66.8, 8.0], [66.9, 8.0], [67.0, 8.0], [67.1, 8.0], [67.2, 8.0], [67.3, 8.0], [67.4, 8.0], [67.5, 8.0], [67.6, 8.0], [67.7, 8.0], [67.8, 8.0], [67.9, 8.0], [68.0, 8.0], [68.1, 8.0], [68.2, 8.0], [68.3, 8.0], [68.4, 8.0], [68.5, 8.0], [68.6, 8.0], [68.7, 9.0], [68.8, 9.0], [68.9, 9.0], [69.0, 9.0], [69.1, 9.0], [69.2, 9.0], [69.3, 9.0], [69.4, 9.0], [69.5, 9.0], [69.6, 9.0], [69.7, 9.0], [69.8, 9.0], [69.9, 9.0], [70.0, 9.0], [70.1, 9.0], [70.2, 9.0], [70.3, 9.0], [70.4, 9.0], [70.5, 9.0], [70.6, 9.0], [70.7, 9.0], [70.8, 9.0], [70.9, 9.0], [71.0, 9.0], [71.1, 9.0], [71.2, 9.0], [71.3, 9.0], [71.4, 9.0], [71.5, 9.0], [71.6, 9.0], [71.7, 9.0], [71.8, 9.0], [71.9, 9.0], [72.0, 9.0], [72.1, 9.0], [72.2, 9.0], [72.3, 9.0], [72.4, 10.0], [72.5, 10.0], [72.6, 10.0], [72.7, 10.0], [72.8, 10.0], [72.9, 10.0], [73.0, 10.0], [73.1, 10.0], [73.2, 10.0], [73.3, 10.0], [73.4, 10.0], [73.5, 10.0], [73.6, 10.0], [73.7, 10.0], [73.8, 10.0], [73.9, 10.0], [74.0, 10.0], [74.1, 10.0], [74.2, 10.0], [74.3, 10.0], [74.4, 11.0], [74.5, 11.0], [74.6, 11.0], [74.7, 11.0], [74.8, 11.0], [74.9, 11.0], [75.0, 11.0], [75.1, 11.0], [75.2, 11.0], [75.3, 11.0], [75.4, 11.0], [75.5, 12.0], [75.6, 12.0], [75.7, 12.0], [75.8, 12.0], [75.9, 12.0], [76.0, 12.0], [76.1, 13.0], [76.2, 13.0], [76.3, 13.0], [76.4, 13.0], [76.5, 13.0], [76.6, 14.0], [76.7, 14.0], [76.8, 14.0], [76.9, 14.0], [77.0, 15.0], [77.1, 15.0], [77.2, 15.0], [77.3, 15.0], [77.4, 16.0], [77.5, 16.0], [77.6, 16.0], [77.7, 17.0], [77.8, 17.0], [77.9, 17.0], [78.0, 18.0], [78.1, 18.0], [78.2, 18.0], [78.3, 19.0], [78.4, 19.0], [78.5, 19.0], [78.6, 20.0], [78.7, 20.0], [78.8, 21.0], [78.9, 21.0], [79.0, 21.0], [79.1, 22.0], [79.2, 22.0], [79.3, 23.0], [79.4, 23.0], [79.5, 23.0], [79.6, 24.0], [79.7, 24.0], [79.8, 25.0], [79.9, 25.0], [80.0, 25.0], [80.1, 26.0], [80.2, 26.0], [80.3, 27.0], [80.4, 27.0], [80.5, 27.0], [80.6, 28.0], [80.7, 28.0], [80.8, 28.0], [80.9, 29.0], [81.0, 29.0], [81.1, 30.0], [81.2, 30.0], [81.3, 30.0], [81.4, 31.0], [81.5, 31.0], [81.6, 31.0], [81.7, 32.0], [81.8, 32.0], [81.9, 32.0], [82.0, 33.0], [82.1, 33.0], [82.2, 34.0], [82.3, 34.0], [82.4, 34.0], [82.5, 35.0], [82.6, 35.0], [82.7, 36.0], [82.8, 36.0], [82.9, 36.0], [83.0, 37.0], [83.1, 37.0], [83.2, 37.0], [83.3, 38.0], [83.4, 38.0], [83.5, 39.0], [83.6, 39.0], [83.7, 39.0], [83.8, 40.0], [83.9, 40.0], [84.0, 40.0], [84.1, 41.0], [84.2, 41.0], [84.3, 42.0], [84.4, 42.0], [84.5, 42.0], [84.6, 43.0], [84.7, 43.0], [84.8, 44.0], [84.9, 44.0], [85.0, 44.0], [85.1, 45.0], [85.2, 45.0], [85.3, 46.0], [85.4, 46.0], [85.5, 47.0], [85.6, 47.0], [85.7, 48.0], [85.8, 48.0], [85.9, 49.0], [86.0, 49.0], [86.1, 50.0], [86.2, 50.0], [86.3, 51.0], [86.4, 52.0], [86.5, 52.0], [86.6, 53.0], [86.7, 53.0], [86.8, 54.0], [86.9, 55.0], [87.0, 55.0], [87.1, 56.0], [87.2, 57.0], [87.3, 57.0], [87.4, 58.0], [87.5, 59.0], [87.6, 59.0], [87.7, 60.0], [87.8, 61.0], [87.9, 61.0], [88.0, 62.0], [88.1, 63.0], [88.2, 64.0], [88.3, 64.0], [88.4, 65.0], [88.5, 66.0], [88.6, 66.0], [88.7, 67.0], [88.8, 68.0], [88.9, 68.0], [89.0, 69.0], [89.1, 70.0], [89.2, 70.0], [89.3, 71.0], [89.4, 72.0], [89.5, 72.0], [89.6, 73.0], [89.7, 73.0], [89.8, 74.0], [89.9, 75.0], [90.0, 75.0], [90.1, 76.0], [90.2, 77.0], [90.3, 78.0], [90.4, 78.0], [90.5, 79.0], [90.6, 80.0], [90.7, 81.0], [90.8, 81.0], [90.9, 82.0], [91.0, 83.0], [91.1, 84.0], [91.2, 85.0], [91.3, 85.0], [91.4, 86.0], [91.5, 87.0], [91.6, 88.0], [91.7, 89.0], [91.8, 90.0], [91.9, 91.0], [92.0, 91.0], [92.1, 92.0], [92.2, 93.0], [92.3, 95.0], [92.4, 96.0], [92.5, 97.0], [92.6, 98.0], [92.7, 99.0], [92.8, 100.0], [92.9, 101.0], [93.0, 102.0], [93.1, 103.0], [93.2, 104.0], [93.3, 106.0], [93.4, 107.0], [93.5, 108.0], [93.6, 109.0], [93.7, 110.0], [93.8, 112.0], [93.9, 113.0], [94.0, 114.0], [94.1, 115.0], [94.2, 117.0], [94.3, 118.0], [94.4, 119.0], [94.5, 121.0], [94.6, 122.0], [94.7, 123.0], [94.8, 125.0], [94.9, 126.0], [95.0, 128.0], [95.1, 130.0], [95.2, 131.0], [95.3, 133.0], [95.4, 135.0], [95.5, 137.0], [95.6, 138.0], [95.7, 140.0], [95.8, 142.0], [95.9, 144.0], [96.0, 146.0], [96.1, 148.0], [96.2, 151.0], [96.3, 153.0], [96.4, 156.0], [96.5, 159.0], [96.6, 162.0], [96.7, 164.0], [96.8, 167.0], [96.9, 170.0], [97.0, 173.0], [97.1, 176.0], [97.2, 180.0], [97.3, 183.0], [97.4, 187.0], [97.5, 191.0], [97.6, 195.0], [97.7, 200.0], [97.8, 205.0], [97.9, 209.0], [98.0, 214.0], [98.1, 219.0], [98.2, 225.0], [98.3, 232.0], [98.4, 238.0], [98.5, 245.0], [98.6, 251.0], [98.7, 258.0], [98.8, 267.0], [98.9, 277.0], [99.0, 287.0], [99.1, 298.0], [99.2, 311.0], [99.3, 326.0], [99.4, 344.0], [99.5, 366.0], [99.6, 393.0], [99.7, 429.0], [99.8, 478.0], [99.9, 564.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 536589.0, "series": [{"data": [[0.0, 536589.0], [600.0, 240.0], [700.0, 89.0], [200.0, 8262.0], [800.0, 44.0], [900.0, 35.0], [1000.0, 15.0], [1100.0, 10.0], [300.0, 2945.0], [1200.0, 2.0], [100.0, 28343.0], [400.0, 1216.0], [500.0, 545.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 973.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 577362.0, "series": [{"data": [[0.0, 577362.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 973.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.158843912427088, "minX": 1.62731262E12, "maxY": 96.92031610141561, "series": [{"data": [[1.6273128E12, 63.56829868846389], [1.62731268E12, 23.81698933959338], [1.62731286E12, 83.53157777473048], [1.62731274E12, 43.54382759622999], [1.62731292E12, 96.92031610141561], [1.62731262E12, 8.158843912427088]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731292E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.4497430039977126, "minX": 1.0, "maxY": 52.209253417455336, "series": [{"data": [[2.0, 2.4688402806438314], [3.0, 2.4497430039977126], [4.0, 3.3408369408369376], [5.0, 2.805592291706033], [6.0, 3.234477720964198], [7.0, 3.6757715501951016], [8.0, 3.9507323568575186], [9.0, 4.29717440727508], [10.0, 4.859882964889465], [11.0, 5.502360080917073], [12.0, 5.947049180327858], [13.0, 6.333223738287032], [14.0, 7.135710664187925], [15.0, 7.959475982532755], [16.0, 10.68680696990271], [17.0, 9.46702682563338], [18.0, 10.021911598035535], [19.0, 9.270785784153878], [20.0, 9.6767087787496], [21.0, 10.096815696365441], [22.0, 10.66378889069885], [23.0, 11.182069638789429], [24.0, 11.707060755336597], [25.0, 12.00112504017998], [26.0, 12.701526842882917], [27.0, 13.294825313118007], [28.0, 13.619667860631727], [29.0, 14.185628742514965], [30.0, 14.75435684647301], [31.0, 15.022587931590827], [32.0, 15.557432981316001], [33.0, 16.070784859905], [34.0, 16.665900886117484], [35.0, 17.05455439056355], [36.0, 18.07515517530614], [37.0, 18.148648648648724], [38.0, 18.463080684596598], [39.0, 19.4327738075454], [40.0, 19.78233227371589], [41.0, 20.513733977026803], [42.0, 20.995194697597363], [43.0, 20.9566573633229], [44.0, 21.884394014142412], [45.0, 21.84978681534933], [46.0, 22.827551867219952], [47.0, 23.421791443850246], [48.0, 24.21015820149872], [49.0, 24.517576163374642], [50.0, 25.00016772895009], [51.0, 25.544771132642886], [52.0, 27.235742763043962], [53.0, 26.2254641909815], [54.0, 27.246107483676546], [55.0, 27.46022631312279], [56.0, 27.656005330667988], [57.0, 28.73332218692517], [58.0, 28.923651452282115], [59.0, 29.158312655086814], [60.0, 29.79264436678311], [61.0, 30.316866267465098], [62.0, 30.91679172919798], [63.0, 31.801043595354322], [64.0, 31.801600533511223], [65.0, 32.74341332438322], [66.0, 32.94985745430155], [67.0, 34.07719594594593], [68.0, 34.08700033590858], [69.0, 34.93264160571537], [70.0, 35.47339171438199], [71.0, 35.51489290495295], [72.0, 36.24384937238493], [73.0, 36.751425696075025], [74.0, 37.59866278073036], [75.0, 37.8001682085784], [76.0, 39.12800687285218], [77.0, 38.93289384719416], [78.0, 39.43342871570439], [79.0, 39.96407488615263], [80.0, 40.6904151717068], [81.0, 41.27037163314006], [82.0, 42.062863994518814], [83.0, 42.39917976760086], [84.0, 42.73752122241095], [85.0, 42.87215619694396], [86.0, 44.18025238744877], [87.0, 44.776293251113536], [88.0, 45.62782547748366], [89.0, 45.98071343232656], [90.0, 48.40839763143724], [91.0, 46.837833190025826], [92.0, 47.20644599303132], [93.0, 48.94446372787233], [94.0, 49.159602302459554], [95.0, 49.76923076923073], [96.0, 50.91947010632738], [97.0, 51.43609425205289], [98.0, 51.40517392064335], [99.0, 51.966223311165535], [100.0, 52.209253417455336], [1.0, 3.442332065906212]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.45201310659089, 26.121550658355947]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 459762.73333333334, "minX": 1.62731262E12, "maxY": 3484007.3333333335, "series": [{"data": [[1.6273128E12, 1390459.5833333333], [1.62731268E12, 1384044.7833333334], [1.62731286E12, 1358951.1166666667], [1.62731274E12, 1402258.1333333333], [1.62731292E12, 459762.73333333334], [1.62731262E12, 739354.4833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6273128E12, 3454697.8666666667], [1.62731268E12, 3438755.6], [1.62731286E12, 3376404.2666666666], [1.62731274E12, 3484007.3333333335], [1.62731292E12, 1142316.9333333333], [1.62731262E12, 1836977.3333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731292E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4.258182390927666, "minX": 1.62731262E12, "maxY": 51.34105012537672, "series": [{"data": [[1.6273128E12, 31.83107485636748], [1.62731268E12, 11.816619128152048], [1.62731286E12, 42.838374922877044], [1.62731274E12, 21.637511937881364], [1.62731292E12, 51.34105012537672], [1.62731262E12, 4.258182390927666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731292E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3.661237990234712, "minX": 1.62731262E12, "maxY": 48.349053975329895, "series": [{"data": [[1.6273128E12, 28.50196814123693], [1.62731268E12, 8.713540483462767], [1.62731286E12, 39.82936004661727], [1.62731274E12, 16.923539426151343], [1.62731292E12, 48.349053975329895], [1.62731262E12, 3.661237990234712]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731292E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00579282923150753, "minX": 1.62731262E12, "maxY": 0.006693967553945581, "series": [{"data": [[1.6273128E12, 0.005879298504212691], [1.62731268E12, 0.0059738664378087974], [1.62731286E12, 0.00579282923150753], [1.62731274E12, 0.00627828758875552], [1.62731292E12, 0.0059775588257643345], [1.62731262E12, 0.006693967553945581]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731292E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62731262E12, "maxY": 1264.0, "series": [{"data": [[1.6273128E12, 1112.0], [1.62731268E12, 905.0], [1.62731286E12, 1140.0], [1.62731274E12, 1027.0], [1.62731292E12, 1264.0], [1.62731262E12, 80.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6273128E12, 115.0], [1.62731268E12, 52.0], [1.62731286E12, 157.0], [1.62731274E12, 79.0], [1.62731292E12, 173.0], [1.62731262E12, 8.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6273128E12, 314.9900000000016], [1.62731268E12, 118.0], [1.62731286E12, 468.9800000000032], [1.62731274E12, 175.0], [1.62731292E12, 519.0], [1.62731262E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6273128E12, 174.0], [1.62731268E12, 82.0], [1.62731286E12, 247.0], [1.62731274E12, 114.0], [1.62731292E12, 271.9500000000007], [1.62731262E12, 13.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6273128E12, 3.0], [1.62731268E12, 3.0], [1.62731286E12, 3.0], [1.62731274E12, 3.0], [1.62731292E12, 3.0], [1.62731262E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6273128E12, 7.0], [1.62731268E12, 5.0], [1.62731286E12, 8.0], [1.62731274E12, 8.0], [1.62731292E12, 8.0], [1.62731262E12, 4.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731292E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 24.0, "maxY": 10.0, "series": [{"data": [[24.0, 6.0], [253.0, 4.0], [277.0, 3.0], [380.0, 3.0], [814.0, 2.0], [842.0, 2.0], [947.0, 2.0], [1049.0, 3.0], [1102.0, 3.0], [1200.0, 2.0], [1196.0, 2.0], [1194.0, 3.0], [1274.0, 3.0], [1364.0, 5.0], [1507.0, 5.0], [1529.0, 5.0], [1533.0, 8.0], [1616.0, 5.0], [1765.0, 3.0], [1789.0, 3.0], [1761.0, 5.0], [1745.0, 5.0], [1729.0, 5.0], [1790.0, 8.0], [1843.0, 3.0], [1812.0, 3.0], [1826.0, 3.0], [1796.0, 3.0], [1823.0, 8.0], [1810.0, 5.0], [1834.0, 4.0], [1832.0, 8.0], [1852.0, 5.0], [1802.0, 8.0], [1850.0, 7.0], [1847.0, 7.0], [1907.0, 7.0], [1886.0, 4.0], [1882.0, 5.0], [1879.0, 8.0], [1856.0, 5.0], [1887.0, 8.0], [1911.0, 7.0], [1910.0, 8.0], [1914.0, 8.0], [1912.0, 7.0], [1915.0, 7.0], [1906.0, 10.0], [1864.0, 8.0], [1871.0, 8.0], [1862.0, 8.0], [1898.0, 7.0], [1903.0, 8.0], [1916.0, 8.0], [1917.0, 8.0], [1918.0, 7.0], [1892.0, 7.0], [1889.0, 8.0], [1975.0, 7.0], [1982.0, 4.0], [1956.0, 6.0], [1958.0, 7.0], [1959.0, 7.0], [1961.0, 7.0], [1960.0, 8.0], [1983.0, 8.0], [1952.0, 7.0], [1953.0, 7.0], [1955.0, 8.0], [1948.0, 5.0], [1944.0, 7.0], [1946.0, 7.0], [1943.0, 7.0], [1941.0, 7.0], [1937.0, 8.0], [1942.0, 7.0], [1949.0, 8.0], [1950.0, 6.0], [1965.0, 8.0], [1964.0, 7.0], [1963.0, 7.0], [1966.0, 7.0], [1980.0, 7.0], [1981.0, 7.0], [1978.0, 7.0], [1976.0, 7.0], [1979.0, 7.0], [1962.0, 8.0], [1972.0, 7.0], [1973.0, 7.0], [1970.0, 8.0], [1969.0, 7.0], [1968.0, 7.0], [1935.0, 8.0], [1932.0, 8.0], [1930.0, 7.0], [1928.0, 7.0], [1929.0, 8.0], [1925.0, 8.0], [1921.0, 8.0], [1922.0, 7.0], [1926.0, 7.0], [1971.0, 8.0], [2036.0, 5.0], [2044.0, 5.0], [2025.0, 5.0], [2029.0, 5.0], [1992.0, 4.0], [1986.0, 5.0], [2010.0, 8.0], [2013.0, 5.0], [2012.0, 7.0], [2014.0, 7.0], [2015.0, 7.0], [1985.0, 6.0], [1990.0, 6.0], [1991.0, 7.0], [1988.0, 7.0], [1987.0, 7.0], [2009.0, 5.0], [2001.0, 7.0], [2003.0, 7.0], [2000.0, 8.0], [2004.0, 8.0], [2005.0, 8.0], [2006.0, 7.0], [2007.0, 8.0], [2008.0, 7.0], [2026.0, 6.0], [2028.0, 6.0], [2031.0, 4.0], [2030.0, 6.0], [2038.0, 6.0], [2039.0, 7.0], [2037.0, 6.0], [2042.0, 5.0], [2043.0, 6.0], [2041.0, 5.0], [1999.0, 7.0], [1996.0, 7.0], [1995.0, 7.0], [1998.0, 7.0], [1994.0, 7.0], [1993.0, 7.0], [2033.0, 5.0], [2034.0, 6.0], [2023.0, 6.0], [2024.0, 7.0], [2022.0, 5.0], [2021.0, 7.0], [2020.0, 6.0], [2047.0, 5.0], [2017.0, 7.0], [2016.0, 8.0], [2018.0, 7.0], [2046.0, 5.0], [2056.0, 4.0], [2078.0, 4.0], [2124.0, 4.0], [2067.0, 4.0], [2069.0, 5.0], [2074.0, 5.0], [2068.0, 5.0], [2079.0, 4.0], [2055.0, 5.0], [2053.0, 6.0], [2058.0, 5.0], [2057.0, 6.0], [2060.0, 5.0], [2061.0, 5.0], [2063.0, 5.0], [2065.0, 5.0], [2051.0, 5.0], [2086.0, 4.0], [2087.0, 5.0], [2049.0, 5.0], [2048.0, 8.0], [2080.0, 5.0], [2084.0, 6.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2124.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 24.0, "maxY": 8.0, "series": [{"data": [[24.0, 5.5], [253.0, 3.0], [277.0, 3.0], [380.0, 3.0], [814.0, 2.0], [842.0, 2.0], [947.0, 2.0], [1049.0, 3.0], [1102.0, 2.0], [1200.0, 2.0], [1196.0, 2.0], [1194.0, 3.0], [1274.0, 3.0], [1364.0, 4.0], [1507.0, 4.0], [1529.0, 4.0], [1533.0, 5.0], [1616.0, 4.0], [1765.0, 2.0], [1789.0, 3.0], [1761.0, 4.0], [1745.0, 4.0], [1729.0, 4.0], [1790.0, 4.0], [1843.0, 2.0], [1812.0, 3.0], [1826.0, 3.0], [1796.0, 3.0], [1823.0, 4.0], [1810.0, 4.0], [1834.0, 4.0], [1832.0, 4.0], [1852.0, 4.0], [1802.0, 5.0], [1850.0, 4.0], [1847.0, 4.0], [1907.0, 4.0], [1886.0, 3.0], [1882.0, 4.0], [1879.0, 4.0], [1856.0, 4.0], [1887.0, 4.0], [1911.0, 5.0], [1910.0, 4.0], [1914.0, 4.0], [1912.0, 4.0], [1915.0, 4.0], [1906.0, 8.0], [1864.0, 4.0], [1871.0, 4.0], [1862.0, 4.0], [1898.0, 4.0], [1903.0, 4.0], [1916.0, 4.0], [1917.0, 4.0], [1918.0, 4.0], [1892.0, 4.0], [1889.0, 4.0], [1975.0, 4.0], [1982.0, 4.0], [1956.0, 4.0], [1958.0, 4.0], [1959.0, 4.0], [1961.0, 4.0], [1960.0, 4.0], [1983.0, 4.0], [1952.0, 4.0], [1953.0, 4.0], [1955.0, 4.0], [1948.0, 4.0], [1944.0, 4.0], [1946.0, 4.0], [1943.0, 4.0], [1941.0, 4.0], [1937.0, 4.0], [1942.0, 4.0], [1949.0, 5.0], [1950.0, 4.0], [1965.0, 5.0], [1964.0, 4.0], [1963.0, 4.0], [1966.0, 4.0], [1980.0, 4.0], [1981.0, 4.0], [1978.0, 5.0], [1976.0, 4.0], [1979.0, 4.0], [1962.0, 5.0], [1972.0, 4.0], [1973.0, 4.0], [1970.0, 5.0], [1969.0, 4.0], [1968.0, 4.0], [1935.0, 4.0], [1932.0, 4.0], [1930.0, 4.0], [1928.0, 4.0], [1929.0, 4.0], [1925.0, 4.0], [1921.0, 5.0], [1922.0, 4.0], [1926.0, 4.0], [1971.0, 4.0], [2036.0, 4.0], [2044.0, 4.0], [2025.0, 4.0], [2029.0, 4.0], [1992.0, 3.0], [1986.0, 4.0], [2010.0, 5.0], [2013.0, 4.0], [2012.0, 4.0], [2014.0, 5.0], [2015.0, 4.0], [1985.0, 4.0], [1990.0, 4.0], [1991.0, 4.0], [1988.0, 4.0], [1987.0, 4.0], [2009.0, 4.0], [2001.0, 4.0], [2003.0, 4.0], [2000.0, 5.0], [2004.0, 5.0], [2005.0, 4.0], [2006.0, 4.0], [2007.0, 5.0], [2008.0, 4.0], [2026.0, 4.0], [2028.0, 4.0], [2031.0, 4.0], [2030.0, 4.0], [2038.0, 4.0], [2039.0, 4.0], [2037.0, 4.0], [2042.0, 4.0], [2043.0, 4.0], [2041.0, 4.0], [1999.0, 4.0], [1996.0, 5.0], [1995.0, 4.0], [1998.0, 4.0], [1994.0, 5.0], [1993.0, 4.0], [2033.0, 4.0], [2034.0, 4.0], [2023.0, 4.0], [2024.0, 4.0], [2022.0, 4.0], [2021.0, 4.0], [2020.0, 4.0], [2047.0, 4.0], [2017.0, 5.0], [2016.0, 5.0], [2018.0, 4.0], [2046.0, 4.0], [2056.0, 4.0], [2078.0, 3.0], [2124.0, 3.0], [2067.0, 3.0], [2069.0, 4.0], [2074.0, 4.0], [2068.0, 4.0], [2079.0, 3.0], [2055.0, 4.0], [2053.0, 4.0], [2058.0, 4.0], [2057.0, 4.0], [2060.0, 4.0], [2061.0, 4.0], [2063.0, 4.0], [2065.0, 4.0], [2051.0, 4.0], [2086.0, 4.0], [2087.0, 4.0], [2049.0, 4.0], [2048.0, 6.0], [2080.0, 4.0], [2084.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2124.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 656.45, "minX": 1.62731262E12, "maxY": 2007.2666666666667, "series": [{"data": [[1.6273128E12, 1990.35], [1.62731268E12, 1981.1833333333334], [1.62731286E12, 1945.2833333333333], [1.62731274E12, 2007.2666666666667], [1.62731292E12, 656.45], [1.62731262E12, 1058.3833333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731292E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 658.0166666666667, "minX": 1.62731262E12, "maxY": 2006.9166666666667, "series": [{"data": [[1.6273128E12, 1990.0333333333333], [1.62731268E12, 1980.85], [1.62731286E12, 1944.9333333333334], [1.62731274E12, 2006.9166666666667], [1.62731292E12, 658.0166666666667], [1.62731262E12, 1058.1666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731292E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 658.0166666666667, "minX": 1.62731262E12, "maxY": 2006.9166666666667, "series": [{"data": [[1.6273128E12, 1990.0333333333333], [1.62731268E12, 1980.85], [1.62731286E12, 1944.9333333333334], [1.62731274E12, 2006.9166666666667], [1.62731292E12, 658.0166666666667], [1.62731262E12, 1058.1666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731292E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 658.0166666666667, "minX": 1.62731262E12, "maxY": 2006.9166666666667, "series": [{"data": [[1.6273128E12, 1990.0333333333333], [1.62731268E12, 1980.85], [1.62731286E12, 1944.9333333333334], [1.62731274E12, 2006.9166666666667], [1.62731292E12, 658.0166666666667], [1.62731262E12, 1058.1666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731292E12, "title": "Total Transactions Per Second"}},
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

