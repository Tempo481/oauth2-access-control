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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 6218.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 2.0], [25.5, 2.0], [25.6, 2.0], [25.7, 2.0], [25.8, 2.0], [25.9, 2.0], [26.0, 2.0], [26.1, 2.0], [26.2, 2.0], [26.3, 2.0], [26.4, 2.0], [26.5, 2.0], [26.6, 2.0], [26.7, 2.0], [26.8, 2.0], [26.9, 2.0], [27.0, 2.0], [27.1, 2.0], [27.2, 2.0], [27.3, 2.0], [27.4, 2.0], [27.5, 2.0], [27.6, 2.0], [27.7, 2.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 3.0], [29.0, 3.0], [29.1, 3.0], [29.2, 3.0], [29.3, 3.0], [29.4, 3.0], [29.5, 3.0], [29.6, 3.0], [29.7, 3.0], [29.8, 3.0], [29.9, 3.0], [30.0, 3.0], [30.1, 3.0], [30.2, 3.0], [30.3, 3.0], [30.4, 3.0], [30.5, 3.0], [30.6, 3.0], [30.7, 3.0], [30.8, 3.0], [30.9, 3.0], [31.0, 3.0], [31.1, 3.0], [31.2, 3.0], [31.3, 3.0], [31.4, 3.0], [31.5, 3.0], [31.6, 3.0], [31.7, 3.0], [31.8, 3.0], [31.9, 3.0], [32.0, 3.0], [32.1, 3.0], [32.2, 3.0], [32.3, 3.0], [32.4, 3.0], [32.5, 3.0], [32.6, 3.0], [32.7, 3.0], [32.8, 3.0], [32.9, 3.0], [33.0, 3.0], [33.1, 3.0], [33.2, 3.0], [33.3, 3.0], [33.4, 3.0], [33.5, 3.0], [33.6, 3.0], [33.7, 3.0], [33.8, 3.0], [33.9, 3.0], [34.0, 3.0], [34.1, 3.0], [34.2, 3.0], [34.3, 3.0], [34.4, 3.0], [34.5, 3.0], [34.6, 3.0], [34.7, 3.0], [34.8, 3.0], [34.9, 3.0], [35.0, 3.0], [35.1, 3.0], [35.2, 3.0], [35.3, 3.0], [35.4, 3.0], [35.5, 3.0], [35.6, 3.0], [35.7, 3.0], [35.8, 3.0], [35.9, 3.0], [36.0, 3.0], [36.1, 3.0], [36.2, 3.0], [36.3, 3.0], [36.4, 3.0], [36.5, 3.0], [36.6, 3.0], [36.7, 3.0], [36.8, 3.0], [36.9, 3.0], [37.0, 3.0], [37.1, 3.0], [37.2, 3.0], [37.3, 4.0], [37.4, 4.0], [37.5, 4.0], [37.6, 4.0], [37.7, 4.0], [37.8, 4.0], [37.9, 4.0], [38.0, 4.0], [38.1, 4.0], [38.2, 4.0], [38.3, 4.0], [38.4, 4.0], [38.5, 4.0], [38.6, 4.0], [38.7, 4.0], [38.8, 4.0], [38.9, 4.0], [39.0, 4.0], [39.1, 4.0], [39.2, 4.0], [39.3, 4.0], [39.4, 4.0], [39.5, 4.0], [39.6, 5.0], [39.7, 5.0], [39.8, 5.0], [39.9, 5.0], [40.0, 5.0], [40.1, 5.0], [40.2, 5.0], [40.3, 5.0], [40.4, 5.0], [40.5, 5.0], [40.6, 5.0], [40.7, 5.0], [40.8, 5.0], [40.9, 6.0], [41.0, 6.0], [41.1, 6.0], [41.2, 6.0], [41.3, 6.0], [41.4, 6.0], [41.5, 6.0], [41.6, 6.0], [41.7, 6.0], [41.8, 6.0], [41.9, 6.0], [42.0, 6.0], [42.1, 7.0], [42.2, 7.0], [42.3, 7.0], [42.4, 7.0], [42.5, 7.0], [42.6, 7.0], [42.7, 7.0], [42.8, 7.0], [42.9, 7.0], [43.0, 8.0], [43.1, 8.0], [43.2, 8.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 9.0], [44.0, 9.0], [44.1, 9.0], [44.2, 9.0], [44.3, 9.0], [44.4, 9.0], [44.5, 9.0], [44.6, 9.0], [44.7, 9.0], [44.8, 10.0], [44.9, 10.0], [45.0, 10.0], [45.1, 10.0], [45.2, 10.0], [45.3, 10.0], [45.4, 10.0], [45.5, 10.0], [45.6, 10.0], [45.7, 10.0], [45.8, 10.0], [45.9, 11.0], [46.0, 11.0], [46.1, 11.0], [46.2, 11.0], [46.3, 11.0], [46.4, 11.0], [46.5, 11.0], [46.6, 11.0], [46.7, 11.0], [46.8, 11.0], [46.9, 11.0], [47.0, 11.0], [47.1, 12.0], [47.2, 12.0], [47.3, 12.0], [47.4, 12.0], [47.5, 12.0], [47.6, 12.0], [47.7, 12.0], [47.8, 12.0], [47.9, 12.0], [48.0, 12.0], [48.1, 12.0], [48.2, 13.0], [48.3, 13.0], [48.4, 13.0], [48.5, 13.0], [48.6, 13.0], [48.7, 13.0], [48.8, 13.0], [48.9, 13.0], [49.0, 13.0], [49.1, 13.0], [49.2, 13.0], [49.3, 14.0], [49.4, 14.0], [49.5, 14.0], [49.6, 14.0], [49.7, 14.0], [49.8, 14.0], [49.9, 14.0], [50.0, 14.0], [50.1, 14.0], [50.2, 14.0], [50.3, 15.0], [50.4, 15.0], [50.5, 15.0], [50.6, 15.0], [50.7, 15.0], [50.8, 15.0], [50.9, 15.0], [51.0, 15.0], [51.1, 15.0], [51.2, 15.0], [51.3, 16.0], [51.4, 16.0], [51.5, 16.0], [51.6, 16.0], [51.7, 16.0], [51.8, 16.0], [51.9, 16.0], [52.0, 16.0], [52.1, 16.0], [52.2, 17.0], [52.3, 17.0], [52.4, 17.0], [52.5, 17.0], [52.6, 17.0], [52.7, 17.0], [52.8, 17.0], [52.9, 17.0], [53.0, 17.0], [53.1, 18.0], [53.2, 18.0], [53.3, 18.0], [53.4, 18.0], [53.5, 18.0], [53.6, 18.0], [53.7, 18.0], [53.8, 18.0], [53.9, 18.0], [54.0, 18.0], [54.1, 19.0], [54.2, 19.0], [54.3, 19.0], [54.4, 19.0], [54.5, 19.0], [54.6, 19.0], [54.7, 19.0], [54.8, 19.0], [54.9, 19.0], [55.0, 20.0], [55.1, 20.0], [55.2, 20.0], [55.3, 20.0], [55.4, 20.0], [55.5, 20.0], [55.6, 20.0], [55.7, 20.0], [55.8, 20.0], [55.9, 21.0], [56.0, 21.0], [56.1, 21.0], [56.2, 21.0], [56.3, 21.0], [56.4, 21.0], [56.5, 21.0], [56.6, 21.0], [56.7, 21.0], [56.8, 22.0], [56.9, 22.0], [57.0, 22.0], [57.1, 22.0], [57.2, 22.0], [57.3, 22.0], [57.4, 22.0], [57.5, 22.0], [57.6, 23.0], [57.7, 23.0], [57.8, 23.0], [57.9, 23.0], [58.0, 23.0], [58.1, 23.0], [58.2, 23.0], [58.3, 23.0], [58.4, 24.0], [58.5, 24.0], [58.6, 24.0], [58.7, 24.0], [58.8, 24.0], [58.9, 24.0], [59.0, 24.0], [59.1, 25.0], [59.2, 25.0], [59.3, 25.0], [59.4, 25.0], [59.5, 25.0], [59.6, 25.0], [59.7, 25.0], [59.8, 25.0], [59.9, 26.0], [60.0, 26.0], [60.1, 26.0], [60.2, 26.0], [60.3, 26.0], [60.4, 26.0], [60.5, 26.0], [60.6, 27.0], [60.7, 27.0], [60.8, 27.0], [60.9, 27.0], [61.0, 27.0], [61.1, 27.0], [61.2, 27.0], [61.3, 28.0], [61.4, 28.0], [61.5, 28.0], [61.6, 28.0], [61.7, 28.0], [61.8, 28.0], [61.9, 28.0], [62.0, 29.0], [62.1, 29.0], [62.2, 29.0], [62.3, 29.0], [62.4, 29.0], [62.5, 29.0], [62.6, 29.0], [62.7, 30.0], [62.8, 30.0], [62.9, 30.0], [63.0, 30.0], [63.1, 30.0], [63.2, 30.0], [63.3, 31.0], [63.4, 31.0], [63.5, 31.0], [63.6, 31.0], [63.7, 31.0], [63.8, 31.0], [63.9, 32.0], [64.0, 32.0], [64.1, 32.0], [64.2, 32.0], [64.3, 32.0], [64.4, 32.0], [64.5, 32.0], [64.6, 33.0], [64.7, 33.0], [64.8, 33.0], [64.9, 33.0], [65.0, 33.0], [65.1, 33.0], [65.2, 34.0], [65.3, 34.0], [65.4, 34.0], [65.5, 34.0], [65.6, 34.0], [65.7, 34.0], [65.8, 35.0], [65.9, 35.0], [66.0, 35.0], [66.1, 35.0], [66.2, 35.0], [66.3, 35.0], [66.4, 36.0], [66.5, 36.0], [66.6, 36.0], [66.7, 36.0], [66.8, 36.0], [66.9, 36.0], [67.0, 37.0], [67.1, 37.0], [67.2, 37.0], [67.3, 37.0], [67.4, 37.0], [67.5, 37.0], [67.6, 38.0], [67.7, 38.0], [67.8, 38.0], [67.9, 38.0], [68.0, 38.0], [68.1, 38.0], [68.2, 39.0], [68.3, 39.0], [68.4, 39.0], [68.5, 39.0], [68.6, 39.0], [68.7, 39.0], [68.8, 40.0], [68.9, 40.0], [69.0, 40.0], [69.1, 40.0], [69.2, 40.0], [69.3, 40.0], [69.4, 41.0], [69.5, 41.0], [69.6, 41.0], [69.7, 41.0], [69.8, 41.0], [69.9, 41.0], [70.0, 42.0], [70.1, 42.0], [70.2, 42.0], [70.3, 42.0], [70.4, 42.0], [70.5, 42.0], [70.6, 43.0], [70.7, 43.0], [70.8, 43.0], [70.9, 43.0], [71.0, 43.0], [71.1, 44.0], [71.2, 44.0], [71.3, 44.0], [71.4, 44.0], [71.5, 44.0], [71.6, 44.0], [71.7, 45.0], [71.8, 45.0], [71.9, 45.0], [72.0, 45.0], [72.1, 45.0], [72.2, 46.0], [72.3, 46.0], [72.4, 46.0], [72.5, 46.0], [72.6, 46.0], [72.7, 46.0], [72.8, 47.0], [72.9, 47.0], [73.0, 47.0], [73.1, 47.0], [73.2, 47.0], [73.3, 48.0], [73.4, 48.0], [73.5, 48.0], [73.6, 48.0], [73.7, 48.0], [73.8, 49.0], [73.9, 49.0], [74.0, 49.0], [74.1, 49.0], [74.2, 49.0], [74.3, 50.0], [74.4, 50.0], [74.5, 50.0], [74.6, 50.0], [74.7, 50.0], [74.8, 51.0], [74.9, 51.0], [75.0, 51.0], [75.1, 51.0], [75.2, 51.0], [75.3, 52.0], [75.4, 52.0], [75.5, 52.0], [75.6, 52.0], [75.7, 52.0], [75.8, 53.0], [75.9, 53.0], [76.0, 53.0], [76.1, 53.0], [76.2, 54.0], [76.3, 54.0], [76.4, 54.0], [76.5, 54.0], [76.6, 54.0], [76.7, 55.0], [76.8, 55.0], [76.9, 55.0], [77.0, 55.0], [77.1, 55.0], [77.2, 56.0], [77.3, 56.0], [77.4, 56.0], [77.5, 56.0], [77.6, 56.0], [77.7, 57.0], [77.8, 57.0], [77.9, 57.0], [78.0, 57.0], [78.1, 58.0], [78.2, 58.0], [78.3, 58.0], [78.4, 58.0], [78.5, 58.0], [78.6, 59.0], [78.7, 59.0], [78.8, 59.0], [78.9, 59.0], [79.0, 60.0], [79.1, 60.0], [79.2, 60.0], [79.3, 60.0], [79.4, 61.0], [79.5, 61.0], [79.6, 61.0], [79.7, 61.0], [79.8, 61.0], [79.9, 62.0], [80.0, 62.0], [80.1, 62.0], [80.2, 62.0], [80.3, 63.0], [80.4, 63.0], [80.5, 63.0], [80.6, 63.0], [80.7, 64.0], [80.8, 64.0], [80.9, 64.0], [81.0, 64.0], [81.1, 65.0], [81.2, 65.0], [81.3, 65.0], [81.4, 66.0], [81.5, 66.0], [81.6, 66.0], [81.7, 66.0], [81.8, 67.0], [81.9, 67.0], [82.0, 67.0], [82.1, 67.0], [82.2, 68.0], [82.3, 68.0], [82.4, 68.0], [82.5, 69.0], [82.6, 69.0], [82.7, 69.0], [82.8, 70.0], [82.9, 70.0], [83.0, 70.0], [83.1, 71.0], [83.2, 71.0], [83.3, 71.0], [83.4, 72.0], [83.5, 72.0], [83.6, 72.0], [83.7, 73.0], [83.8, 73.0], [83.9, 73.0], [84.0, 74.0], [84.1, 74.0], [84.2, 74.0], [84.3, 75.0], [84.4, 75.0], [84.5, 76.0], [84.6, 76.0], [84.7, 76.0], [84.8, 77.0], [84.9, 77.0], [85.0, 78.0], [85.1, 78.0], [85.2, 79.0], [85.3, 79.0], [85.4, 79.0], [85.5, 80.0], [85.6, 80.0], [85.7, 81.0], [85.8, 81.0], [85.9, 82.0], [86.0, 82.0], [86.1, 83.0], [86.2, 83.0], [86.3, 84.0], [86.4, 84.0], [86.5, 85.0], [86.6, 85.0], [86.7, 86.0], [86.8, 87.0], [86.9, 87.0], [87.0, 88.0], [87.1, 88.0], [87.2, 89.0], [87.3, 90.0], [87.4, 90.0], [87.5, 91.0], [87.6, 92.0], [87.7, 92.0], [87.8, 93.0], [87.9, 94.0], [88.0, 94.0], [88.1, 95.0], [88.2, 96.0], [88.3, 97.0], [88.4, 97.0], [88.5, 98.0], [88.6, 99.0], [88.7, 100.0], [88.8, 101.0], [88.9, 102.0], [89.0, 102.0], [89.1, 103.0], [89.2, 104.0], [89.3, 105.0], [89.4, 106.0], [89.5, 107.0], [89.6, 108.0], [89.7, 109.0], [89.8, 110.0], [89.9, 111.0], [90.0, 112.0], [90.1, 113.0], [90.2, 114.0], [90.3, 115.0], [90.4, 116.0], [90.5, 117.0], [90.6, 118.0], [90.7, 119.0], [90.8, 120.0], [90.9, 122.0], [91.0, 123.0], [91.1, 124.0], [91.2, 125.0], [91.3, 126.0], [91.4, 127.0], [91.5, 129.0], [91.6, 130.0], [91.7, 131.0], [91.8, 133.0], [91.9, 134.0], [92.0, 136.0], [92.1, 138.0], [92.2, 139.0], [92.3, 141.0], [92.4, 142.0], [92.5, 144.0], [92.6, 146.0], [92.7, 148.0], [92.8, 149.0], [92.9, 151.0], [93.0, 153.0], [93.1, 155.0], [93.2, 157.0], [93.3, 159.0], [93.4, 161.0], [93.5, 164.0], [93.6, 166.0], [93.7, 169.0], [93.8, 172.0], [93.9, 174.0], [94.0, 177.0], [94.1, 181.0], [94.2, 184.0], [94.3, 187.0], [94.4, 190.0], [94.5, 194.0], [94.6, 197.0], [94.7, 202.0], [94.8, 206.0], [94.9, 210.0], [95.0, 214.0], [95.1, 218.0], [95.2, 223.0], [95.3, 228.0], [95.4, 233.0], [95.5, 239.0], [95.6, 245.0], [95.7, 251.0], [95.8, 258.0], [95.9, 264.0], [96.0, 270.0], [96.1, 277.0], [96.2, 284.0], [96.3, 293.0], [96.4, 301.0], [96.5, 310.0], [96.6, 319.0], [96.7, 329.0], [96.8, 338.0], [96.9, 349.0], [97.0, 361.0], [97.1, 373.0], [97.2, 386.0], [97.3, 399.0], [97.4, 411.0], [97.5, 424.0], [97.6, 437.0], [97.7, 449.0], [97.8, 462.0], [97.9, 475.0], [98.0, 489.0], [98.1, 504.0], [98.2, 520.0], [98.3, 538.0], [98.4, 562.0], [98.5, 585.0], [98.6, 611.0], [98.7, 633.0], [98.8, 655.0], [98.9, 681.0], [99.0, 709.0], [99.1, 736.0], [99.2, 764.0], [99.3, 792.0], [99.4, 816.0], [99.5, 841.0], [99.6, 876.0], [99.7, 928.0], [99.8, 989.0], [99.9, 1124.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 493387.0, "series": [{"data": [[0.0, 493387.0], [600.0, 2265.0], [700.0, 2039.0], [800.0, 1778.0], [900.0, 896.0], [1000.0, 416.0], [1100.0, 202.0], [1200.0, 108.0], [1300.0, 62.0], [1400.0, 26.0], [1500.0, 19.0], [1600.0, 28.0], [1700.0, 4.0], [1800.0, 6.0], [1900.0, 8.0], [2000.0, 17.0], [2100.0, 3.0], [2200.0, 9.0], [2300.0, 2.0], [2400.0, 8.0], [2500.0, 16.0], [2600.0, 27.0], [2700.0, 5.0], [2800.0, 2.0], [2900.0, 3.0], [3000.0, 1.0], [3100.0, 2.0], [3300.0, 2.0], [3400.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 8.0], [4000.0, 10.0], [4200.0, 6.0], [4100.0, 5.0], [4300.0, 9.0], [4600.0, 3.0], [4500.0, 1.0], [4700.0, 1.0], [4800.0, 4.0], [5000.0, 1.0], [5300.0, 2.0], [5700.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [6200.0, 5.0], [100.0, 33375.0], [200.0, 9637.0], [300.0, 5139.0], [400.0, 4257.0], [500.0, 2719.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 313997.0, "series": [{"data": [[0.0, 313997.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 864.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 241630.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6739484226339574, "minX": 1.62483312E12, "maxY": 101.66954599418725, "series": [{"data": [[1.62541332E12, 47.95127556883478], [1.62541458E12, 1.7436817262306226], [1.62541398E12, 69.99422021943523], [1.62541392E12, 51.004886368874736], [1.6250883E12, 8.922762148337581], [1.62541296E12, 44.22960000000002], [1.62541404E12, 45.55578723888223], [1.6254153E12, 4.457472873643678], [1.62508848E12, 92.24797313270903], [1.62508854E12, 1.6739484226339574], [1.62508842E12, 101.66954599418725], [1.6254138E12, 2.302122347066166], [1.62541536E12, 13.314638926579194], [1.62541446E12, 1.8891553656303126], [1.62541542E12, 27.10515770620197], [1.62483318E12, 3.9009049773755637], [1.62541326E12, 50.0], [1.62483312E12, 3.8743016759776445], [1.62508836E12, 44.41384533143301], [1.62541386E12, 21.743672275054923], [1.62541452E12, 1.7709041808361705], [1.62541548E12, 29.224570673712]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62541548E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.9807449642473178, "minX": 1.0, "maxY": 310.5977011494253, "series": [{"data": [[2.0, 2.085838013977584], [3.0, 5.3624699278267824], [4.0, 10.755254472815718], [5.0, 10.061024498886447], [6.0, 13.675000000000011], [7.0, 16.571946169772254], [8.0, 17.298179871520365], [9.0, 15.60480093676816], [10.0, 18.139128559102762], [11.0, 21.601354507239638], [12.0, 25.039291392232588], [13.0, 26.88169066076038], [14.0, 28.966056275122803], [15.0, 27.688563893550707], [16.0, 32.54702154626112], [17.0, 32.58488228004973], [18.0, 35.54197080291975], [19.0, 36.83277740716044], [20.0, 44.01356010112613], [21.0, 37.34345917471455], [22.0, 40.946991037131845], [23.0, 50.62293071735132], [24.0, 42.652195776064296], [25.0, 47.24581784386605], [26.0, 45.7226428079834], [27.0, 44.34464161447443], [28.0, 46.75038022813673], [29.0, 43.105197048202264], [30.0, 53.96311000827125], [31.0, 57.387308533916816], [32.0, 58.51521329987449], [33.0, 57.77497802519782], [34.0, 62.39683534388211], [35.0, 65.01643030093342], [36.0, 64.83523625505006], [37.0, 66.8734606460826], [38.0, 93.56807307525006], [39.0, 88.53514882837233], [40.0, 84.84606011372864], [41.0, 55.846699399890966], [42.0, 97.71511627906983], [43.0, 99.81494876431582], [44.0, 104.1383374689826], [45.0, 105.93768672641922], [46.0, 113.96822177146721], [47.0, 116.23676248108924], [48.0, 99.13605442176866], [49.0, 75.98005698005683], [50.0, 101.87411167512685], [51.0, 96.86851851851844], [52.0, 79.44601962922567], [53.0, 133.24333619948402], [54.0, 141.85838003056566], [55.0, 133.30249110320298], [56.0, 95.72732067510536], [57.0, 88.3259746359797], [58.0, 126.76350093109866], [59.0, 102.06095890410963], [60.0, 92.18314532183139], [61.0, 125.29265471370711], [62.0, 100.48942006269591], [63.0, 105.53417721518959], [64.0, 157.34384475439649], [65.0, 140.75364077669883], [66.0, 131.78810608090032], [67.0, 125.45198555956677], [68.0, 181.24191663420316], [69.0, 162.93532005880076], [70.0, 115.8966421825811], [71.0, 98.79041682898303], [72.0, 127.06441119063106], [73.0, 91.1051282051282], [74.0, 138.6943089430893], [75.0, 113.2288261515602], [76.0, 85.77078891257989], [77.0, 62.221040189125276], [78.0, 91.86624869383488], [79.0, 136.5046992481201], [80.0, 126.3122222222221], [81.0, 175.88968824940042], [82.0, 147.84735202492186], [83.0, 148.15478260869574], [84.0, 136.8226351351351], [85.0, 76.62114537444943], [86.0, 99.38213914849415], [87.0, 177.10851063829801], [88.0, 65.10008896797166], [89.0, 230.73204419889507], [90.0, 216.62735849056597], [91.0, 112.90621814475033], [92.0, 91.93606321839081], [93.0, 87.8851303735024], [94.0, 94.93750000000026], [95.0, 182.247833622184], [96.0, 180.6930693069303], [97.0, 185.74953959484338], [98.0, 239.81843575418978], [99.0, 214.94615384615366], [100.0, 158.28590425531894], [101.0, 114.59346642468259], [102.0, 129.2548387096777], [103.0, 75.04859611231115], [104.0, 171.16599885518005], [105.0, 214.16298342541452], [106.0, 148.28517110266137], [107.0, 267.6575963718822], [108.0, 188.97948717948705], [109.0, 83.7334515366429], [110.0, 95.79828326180251], [111.0, 67.32452725250263], [112.0, 122.06352833638039], [113.0, 264.6578411405296], [114.0, 310.5977011494253], [115.0, 98.73867403314914], [116.0, 175.3064275037368], [117.0, 54.52837805746861], [118.0, 115.78610354223463], [119.0, 104.30140692640683], [120.0, 69.5150030618495], [121.0, 65.24424311060775], [122.0, 108.39545758183013], [123.0, 59.52668711656443], [124.0, 155.573047858942], [125.0, 127.38656021290757], [126.0, 85.75807252856455], [127.0, 53.2693094629156], [128.0, 47.15467036430103], [129.0, 69.24340856359444], [130.0, 163.36998854524623], [131.0, 139.28042328042324], [132.0, 60.85633417919183], [133.0, 58.16646860764495], [134.0, 48.43825323612547], [135.0, 49.34016775396065], [1.0, 1.9807449642473178]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[44.33284758620801, 52.9901658667708]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 135.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7560.85, "minX": 1.62483312E12, "maxY": 3011944.533333333, "series": [{"data": [[1.62541332E12, 50664.98333333333], [1.62541458E12, 431743.95], [1.62541398E12, 732205.2], [1.62541392E12, 287484.3333333333], [1.6250883E12, 23314.683333333334], [1.62541296E12, 58225.833333333336], [1.62541404E12, 709137.55], [1.6254153E12, 33271.96666666667], [1.62508848E12, 1937901.8333333333], [1.62508854E12, 417563.4], [1.62508842E12, 309180.81666666665], [1.6254138E12, 9328.266666666666], [1.62541536E12, 386214.68333333335], [1.62541446E12, 267059.25], [1.62541542E12, 383606.5333333333], [1.62483318E12, 13174.733333333334], [1.62541326E12, 7560.85], [1.62483312E12, 10672.6], [1.62508836E12, 133842.58333333334], [1.62541386E12, 238792.38333333333], [1.62541452E12, 465713.4666666667], [1.62541548E12, 361423.48333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62541332E12, 106744.53333333334], [1.62541458E12, 909573.3333333334], [1.62541398E12, 429603.2], [1.62541392E12, 492850.13333333336], [1.6250883E12, 95664.66666666667], [1.62541296E12, 122666.66666666667], [1.62541404E12, 310076.8], [1.6254153E12, 70091.73333333334], [1.62508848E12, 3011944.533333333], [1.62508854E12, 1172613.9333333333], [1.62508842E12, 491804.4666666667], [1.6254138E12, 19651.2], [1.62541536E12, 813648.0], [1.62541446E12, 562622.9333333333], [1.62541542E12, 808152.5333333333], [1.62483318E12, 54108.166666666664], [1.62541326E12, 15922.133333333333], [1.62483312E12, 43825.166666666664], [1.62508836E12, 549227.7333333333], [1.62541386E12, 503056.0], [1.62541452E12, 981137.0666666667], [1.62541548E12, 761441.0666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62541548E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1.3991821064930567, "minX": 1.62483312E12, "maxY": 243.1728415278174, "series": [{"data": [[1.62541332E12, 142.73109629970136], [1.62541458E12, 2.2922724207687266], [1.62541398E12, 136.14870689655254], [1.62541392E12, 140.38588484764634], [1.6250883E12, 29.586445012787703], [1.62541296E12, 41.32080000000006], [1.62541404E12, 72.88797058043059], [1.6254153E12, 11.371368568428432], [1.62508848E12, 35.250316372081045], [1.62508854E12, 1.3991821064930567], [1.62508842E12, 243.1728415278174], [1.6254138E12, 10.503121098626714], [1.62541536E12, 23.976571687019582], [1.62541446E12, 2.423450922251763], [1.62541542E12, 49.00282322941006], [1.62483318E12, 11.706787330316763], [1.62541326E12, 220.68875192604014], [1.62483312E12, 11.871508379888292], [1.62508836E12, 117.12326265146116], [1.62541386E12, 60.52572543282115], [1.62541452E12, 2.315638127625519], [1.62541548E12, 51.204820053484866]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62541548E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1.3989525955600102, "minX": 1.62483312E12, "maxY": 231.38829983214995, "series": [{"data": [[1.62541332E12, 140.806021604229], [1.62541458E12, 1.9342683749157101], [1.62541398E12, 127.92848746081539], [1.62541392E12, 138.20366016687464], [1.6250883E12, 29.564705882352918], [1.62541296E12, 33.64480000000002], [1.62541404E12, 65.43898093035571], [1.6254153E12, 11.06510325516275], [1.62508848E12, 26.830570582263995], [1.62508854E12, 1.3989525955600102], [1.62508842E12, 231.38829983214995], [1.6254138E12, 10.134831460674137], [1.62541536E12, 23.560621136740533], [1.62541446E12, 2.096062442768054], [1.62541542E12, 48.502686621535496], [1.62483318E12, 11.699547511312202], [1.62541326E12, 216.17873651771947], [1.62483312E12, 11.864804469273746], [1.62508836E12, 117.11323948681365], [1.62541386E12, 59.31050963179707], [1.62541452E12, 1.951765353070614], [1.62541548E12, 50.7306762895899]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62541548E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.62483312E12, "maxY": 11.824824988741954, "series": [{"data": [[1.62541332E12, 0.0], [1.62541458E12, 0.00401888064733655], [1.62541398E12, 7.263649425287353], [1.62541392E12, 1.0219886599363872], [1.6250883E12, 0.02301790281329924], [1.62541296E12, 0.08040000000000012], [1.62541404E12, 6.859460893960633], [1.6254153E12, 0.019600980049002556], [1.62508848E12, 8.581561417903274], [1.62508854E12, 0.003713904189617749], [1.62508842E12, 11.824824988741954], [1.6254138E12, 0.007490636704119852], [1.62541536E12, 0.0071762400120608675], [1.62541446E12, 0.008241398857541507], [1.62541542E12, 0.006739321817795458], [1.62483318E12, 0.004072398190045251], [1.62541326E12, 0.07858243451463783], [1.62483312E12, 0.007262569832402237], [1.62508836E12, 0.012428724162508913], [1.62541386E12, 0.012826139965862004], [1.62541452E12, 0.005051010202040405], [1.62541548E12, 0.005348455069755479]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62541548E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62483312E12, "maxY": 2919.0, "series": [{"data": [[1.62541332E12, 532.0], [1.62541458E12, 36.0], [1.62541398E12, 951.0], [1.62541392E12, 504.0], [1.6250883E12, 135.0], [1.62541296E12, 1080.0], [1.62541404E12, 691.0], [1.6254153E12, 63.0], [1.62508848E12, 2919.0], [1.62508842E12, 823.0], [1.6254138E12, 42.0], [1.62541536E12, 84.0], [1.62541446E12, 576.0], [1.62541542E12, 160.0], [1.62483318E12, 32.0], [1.62541326E12, 1045.0], [1.62483312E12, 20.0], [1.62508836E12, 671.0], [1.62541386E12, 281.0], [1.62541452E12, 17.0], [1.62541548E12, 142.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62541332E12, 281.0], [1.62541458E12, 3.0], [1.62541398E12, 346.0], [1.62541392E12, 194.0], [1.6250883E12, 50.0], [1.62541296E12, 106.0], [1.62541404E12, 167.0], [1.6254153E12, 14.0], [1.62508848E12, 243.5], [1.62508842E12, 249.0], [1.6254138E12, 12.0], [1.62541536E12, 44.0], [1.62541446E12, 3.0], [1.62541542E12, 73.0], [1.62483318E12, 14.0], [1.62541326E12, 392.0], [1.62483312E12, 14.0], [1.62508836E12, 232.0], [1.62541386E12, 107.0], [1.62541452E12, 3.0], [1.62541548E12, 71.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62541332E12, 407.47999999999956], [1.62541458E12, 4.0], [1.62541398E12, 713.5100000000002], [1.62541392E12, 317.0], [1.6250883E12, 79.0], [1.62541296E12, 476.0], [1.62541404E12, 375.1399999999976], [1.6254153E12, 22.420000000000073], [1.62508848E12, 2603.5], [1.62508842E12, 510.0], [1.6254138E12, 14.0], [1.62541536E12, 60.0], [1.62541446E12, 4.0], [1.62541542E12, 97.0], [1.62483318E12, 17.0], [1.62541326E12, 908.5], [1.62483312E12, 17.0], [1.62508836E12, 441.0], [1.62541386E12, 179.0], [1.62541452E12, 4.0], [1.62541548E12, 91.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62541332E12, 325.39999999999964], [1.62541458E12, 3.0], [1.62541398E12, 459.5499999999993], [1.62541392E12, 237.0], [1.6250883E12, 59.0], [1.62541296E12, 182.89999999999964], [1.62541404E12, 229.0], [1.6254153E12, 15.0], [1.62508848E12, 722.75], [1.62508842E12, 350.0], [1.6254138E12, 13.0], [1.62541536E12, 49.0], [1.62541446E12, 3.0], [1.62541542E12, 80.0], [1.62483318E12, 15.0], [1.62541326E12, 456.5], [1.62483312E12, 15.0], [1.62508836E12, 298.0], [1.62541386E12, 132.0], [1.62541452E12, 3.0], [1.62541548E12, 77.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62541332E12, 15.0], [1.62541458E12, 1.0], [1.62541398E12, 14.0], [1.62541392E12, 14.0], [1.6250883E12, 10.0], [1.62541296E12, 2.0], [1.62541404E12, 8.0], [1.6254153E12, 7.0], [1.62508848E12, 13.0], [1.62508842E12, 13.0], [1.6254138E12, 8.0], [1.62541536E12, 9.0], [1.62541446E12, 1.0], [1.62541542E12, 10.0], [1.62483318E12, 8.0], [1.62541326E12, 39.0], [1.62483312E12, 8.0], [1.62508836E12, 15.0], [1.62541386E12, 8.0], [1.62541452E12, 1.0], [1.62541548E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62541332E12, 108.0], [1.62541458E12, 2.0], [1.62541398E12, 98.0], [1.62541392E12, 83.0], [1.6250883E12, 26.0], [1.62541296E12, 10.0], [1.62541404E12, 64.0], [1.6254153E12, 11.0], [1.62508848E12, 32.0], [1.62508842E12, 49.0], [1.6254138E12, 10.0], [1.62541536E12, 27.0], [1.62541446E12, 2.0], [1.62541542E12, 53.0], [1.62483318E12, 11.0], [1.62541326E12, 190.0], [1.62483312E12, 12.0], [1.62508836E12, 100.0], [1.62541386E12, 53.0], [1.62541452E12, 2.0], [1.62541548E12, 45.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62541548E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1.0, "minX": 7.0, "maxY": 974.0, "series": [{"data": [[7.0, 17.0], [16.0, 4.5], [31.0, 10.0], [42.0, 15.5], [77.0, 11.0], [76.0, 12.0], [90.0, 11.0], [135.0, 241.0], [140.0, 11.0], [144.0, 12.0], [155.0, 11.0], [175.0, 28.0], [169.0, 38.0], [180.0, 10.0], [185.0, 37.0], [196.0, 10.0], [192.0, 11.0], [204.0, 31.0], [213.0, 12.0], [222.0, 10.0], [216.0, 10.0], [231.0, 129.0], [233.0, 44.0], [247.0, 45.0], [252.0, 25.0], [253.0, 188.0], [249.0, 33.0], [251.0, 210.0], [262.0, 14.0], [269.0, 17.0], [261.0, 71.5], [265.0, 39.0], [264.0, 69.0], [284.0, 45.5], [273.0, 119.0], [286.0, 53.0], [285.0, 54.0], [274.0, 136.0], [282.0, 57.5], [280.0, 34.0], [278.0, 11.0], [277.0, 44.0], [275.0, 16.0], [287.0, 36.0], [272.0, 50.0], [279.0, 4.0], [300.0, 39.0], [302.0, 21.0], [301.0, 13.0], [296.0, 32.5], [290.0, 35.0], [293.0, 17.0], [295.0, 10.0], [288.0, 33.5], [298.0, 81.0], [299.0, 27.0], [292.0, 30.0], [318.0, 12.0], [319.0, 37.0], [310.0, 69.0], [316.0, 102.0], [307.0, 104.0], [305.0, 17.0], [304.0, 34.0], [314.0, 75.0], [311.0, 99.0], [309.0, 88.0], [308.0, 69.0], [315.0, 76.0], [313.0, 71.0], [323.0, 63.0], [321.0, 26.0], [322.0, 13.0], [326.0, 12.0], [335.0, 51.0], [328.0, 43.0], [333.0, 33.0], [332.0, 30.0], [334.0, 34.0], [329.0, 114.0], [330.0, 40.0], [327.0, 95.5], [325.0, 37.0], [324.0, 134.0], [339.0, 36.0], [350.0, 25.0], [342.0, 45.0], [351.0, 11.0], [345.0, 72.0], [344.0, 104.0], [343.0, 46.0], [349.0, 69.0], [348.0, 91.5], [347.0, 90.0], [346.0, 31.0], [341.0, 71.0], [340.0, 31.0], [337.0, 43.0], [338.0, 64.0], [336.0, 66.0], [355.0, 26.0], [366.0, 11.0], [364.0, 11.0], [363.0, 69.0], [362.0, 69.5], [352.0, 57.0], [354.0, 71.0], [353.0, 129.5], [361.0, 58.0], [367.0, 33.0], [357.0, 98.5], [356.0, 89.0], [358.0, 129.5], [365.0, 87.0], [381.0, 70.0], [371.0, 69.0], [380.0, 103.0], [376.0, 75.0], [368.0, 93.0], [382.0, 83.0], [383.0, 170.0], [377.0, 97.0], [379.0, 60.0], [372.0, 84.0], [375.0, 77.5], [374.0, 127.0], [373.0, 95.0], [370.0, 99.0], [369.0, 117.0], [387.0, 107.0], [397.0, 98.0], [392.0, 78.0], [398.0, 107.0], [399.0, 109.5], [396.0, 85.0], [393.0, 67.0], [385.0, 97.0], [386.0, 80.0], [389.0, 120.0], [388.0, 80.0], [390.0, 87.0], [391.0, 52.0], [394.0, 123.5], [395.0, 151.0], [384.0, 74.0], [400.0, 103.5], [403.0, 61.0], [401.0, 79.0], [402.0, 55.0], [406.0, 87.0], [407.0, 56.0], [412.0, 95.0], [408.0, 108.0], [409.0, 51.0], [411.0, 47.0], [415.0, 62.0], [413.0, 104.0], [405.0, 12.0], [404.0, 55.0], [422.0, 58.5], [431.0, 105.0], [418.0, 74.0], [416.0, 90.5], [426.0, 19.0], [430.0, 143.0], [420.0, 105.0], [421.0, 48.0], [436.0, 58.0], [433.0, 144.0], [441.0, 121.0], [432.0, 157.0], [446.0, 176.5], [438.0, 33.5], [435.0, 73.0], [447.0, 39.5], [456.0, 160.0], [452.0, 40.0], [462.0, 37.0], [458.0, 33.0], [453.0, 43.5], [449.0, 55.0], [450.0, 57.0], [473.0, 283.0], [472.0, 81.0], [464.0, 17.0], [493.0, 47.0], [480.0, 91.5], [483.0, 16.0], [488.0, 23.0], [484.0, 23.5], [490.0, 47.0], [509.0, 58.0], [502.0, 74.0], [506.0, 17.0], [511.0, 25.0], [501.0, 29.0], [497.0, 37.0], [508.0, 36.0], [510.0, 47.0], [507.0, 57.0], [518.0, 62.0], [529.0, 49.0], [521.0, 44.0], [522.0, 46.0], [516.0, 46.0], [514.0, 38.0], [515.0, 47.0], [513.0, 28.0], [512.0, 32.0], [526.0, 44.0], [525.0, 48.0], [537.0, 48.0], [538.0, 44.5], [539.0, 43.0], [519.0, 42.0], [536.0, 48.0], [530.0, 48.0], [532.0, 43.5], [531.0, 13.0], [528.0, 18.0], [543.0, 47.0], [542.0, 52.0], [541.0, 51.0], [540.0, 38.0], [523.0, 16.0], [535.0, 22.0], [534.0, 45.0], [533.0, 26.0], [569.0, 3.0], [560.0, 37.0], [556.0, 35.0], [559.0, 24.0], [544.0, 34.0], [558.0, 13.0], [557.0, 61.0], [545.0, 38.0], [562.0, 57.0], [561.0, 33.0], [567.0, 38.0], [566.0, 53.0], [565.0, 62.0], [564.0, 41.0], [563.0, 22.0], [552.0, 39.0], [553.0, 67.0], [554.0, 27.0], [555.0, 51.0], [547.0, 31.0], [549.0, 15.0], [548.0, 62.0], [568.0, 29.0], [570.0, 42.0], [571.0, 27.0], [572.0, 27.0], [575.0, 8.0], [573.0, 21.0], [546.0, 11.0], [600.0, 8.0], [576.0, 2.0], [599.0, 88.5], [597.0, 3.0], [598.0, 3.0], [587.0, 3.0], [588.0, 13.0], [591.0, 14.0], [590.0, 53.0], [589.0, 21.0], [585.0, 44.0], [584.0, 46.0], [586.0, 20.0], [604.0, 2.0], [601.0, 7.5], [603.0, 16.0], [602.0, 36.0], [583.0, 19.0], [581.0, 2.0], [582.0, 51.0], [579.0, 9.0], [577.0, 19.0], [578.0, 33.0], [580.0, 2.0], [592.0, 54.0], [606.0, 50.0], [607.0, 61.0], [593.0, 17.0], [595.0, 2.0], [594.0, 10.0], [632.0, 2.0], [635.0, 2.0], [631.0, 27.0], [629.0, 2.0], [628.0, 49.0], [618.0, 43.0], [608.0, 2.0], [634.0, 2.0], [638.0, 2.0], [636.0, 2.0], [614.0, 7.0], [615.0, 45.0], [610.0, 9.5], [611.0, 16.0], [612.0, 2.0], [619.0, 9.0], [621.0, 16.0], [623.0, 2.0], [643.0, 2.0], [670.0, 50.5], [640.0, 65.5], [656.0, 2.0], [657.0, 2.0], [647.0, 2.0], [667.0, 2.0], [666.0, 2.0], [644.0, 2.0], [671.0, 2.0], [648.0, 2.0], [655.0, 2.0], [653.0, 2.0], [652.0, 2.0], [654.0, 2.0], [651.0, 2.0], [650.0, 2.0], [649.0, 2.0], [641.0, 2.0], [642.0, 2.0], [676.0, 41.0], [688.0, 39.0], [694.0, 46.5], [697.0, 70.0], [672.0, 2.0], [711.0, 43.5], [714.0, 46.5], [725.0, 2.0], [710.0, 2.0], [715.0, 2.0], [731.0, 2.0], [762.0, 2.0], [757.0, 2.0], [766.0, 2.0], [764.0, 2.0], [763.0, 2.0], [756.0, 2.0], [759.0, 2.0], [758.0, 2.0], [742.0, 2.0], [760.0, 2.0], [751.0, 2.0], [748.0, 2.0], [749.0, 2.0], [761.0, 2.0], [795.0, 92.0], [791.0, 75.0], [788.0, 2.0], [793.0, 108.5], [779.0, 2.0], [776.0, 2.0], [778.0, 2.0], [782.0, 2.0], [775.0, 2.0], [771.0, 2.0], [769.0, 2.0], [768.0, 2.0], [772.0, 2.0], [773.0, 2.0], [799.0, 2.0], [798.0, 2.0], [784.0, 2.0], [786.0, 2.0], [787.0, 2.0], [805.0, 42.0], [829.0, 57.0], [803.0, 49.0], [820.0, 79.0], [808.0, 61.0], [807.0, 2.0], [814.0, 2.0], [855.0, 30.0], [859.0, 47.0], [840.0, 55.5], [835.0, 102.5], [857.0, 128.0], [870.0, 14.0], [881.0, 56.0], [894.0, 69.0], [889.0, 107.5], [909.0, 22.0], [924.0, 38.0], [906.0, 46.5], [958.0, 24.0], [942.0, 56.0], [960.0, 2.0], [1010.0, 24.0], [996.0, 66.0], [1040.0, 22.0], [1084.0, 67.0], [1044.0, 68.0], [1149.0, 79.0], [1095.0, 75.0], [1111.0, 2.0], [1280.0, 89.5], [1508.0, 10.0], [1628.0, 9.0], [2368.0, 35.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[231.0, 341.5], [251.0, 586.0], [265.0, 438.0], [264.0, 2.0], [273.0, 431.0], [286.0, 787.0], [287.0, 386.5], [272.0, 460.0], [280.0, 492.0], [277.0, 531.0], [285.0, 27.0], [296.0, 366.0], [300.0, 883.5], [290.0, 786.0], [298.0, 159.0], [292.0, 514.5], [316.0, 814.0], [311.0, 256.0], [319.0, 733.0], [310.0, 851.0], [309.0, 98.0], [315.0, 404.0], [313.0, 447.5], [314.0, 2.0], [308.0, 459.0], [318.0, 416.0], [304.0, 498.0], [305.0, 525.5], [333.0, 882.0], [335.0, 708.5], [328.0, 737.0], [325.0, 837.0], [324.0, 33.0], [330.0, 974.0], [334.0, 420.5], [322.0, 429.0], [332.0, 505.0], [323.0, 513.0], [339.0, 849.5], [343.0, 764.0], [347.0, 670.0], [340.0, 729.5], [337.0, 776.0], [338.0, 3.0], [342.0, 729.0], [351.0, 782.0], [346.0, 783.0], [345.0, 198.0], [349.0, 431.0], [341.0, 430.5], [365.0, 640.0], [367.0, 763.0], [356.0, 835.0], [366.0, 596.0], [353.0, 43.0], [358.0, 81.0], [381.0, 638.0], [376.0, 355.0], [379.0, 801.5], [382.0, 15.5], [372.0, 111.0], [375.0, 66.0], [383.0, 35.0], [374.0, 29.5], [385.0, 422.0], [386.0, 180.5], [397.0, 45.0], [399.0, 90.0], [398.0, 176.0], [391.0, 6.0], [401.0, 373.0], [411.0, 10.0], [408.0, 30.0], [415.0, 25.0], [413.0, 103.0], [409.0, 61.5], [402.0, 328.0], [412.0, 23.0], [420.0, 5.0], [441.0, 10.0], [435.0, 5.0], [447.0, 230.0], [452.0, 10.0], [462.0, 10.0], [458.0, 25.5], [453.0, 45.0], [449.0, 29.0], [450.0, 7.0], [473.0, 13.5], [472.0, 3.0], [493.0, 9.0], [480.0, 4.0], [509.0, 10.0], [502.0, 7.0], [529.0, 6.0], [518.0, 10.0], [521.0, 12.0], [516.0, 8.0], [537.0, 11.0], [560.0, 3.0], [545.0, 8.0], [562.0, 26.0], [552.0, 20.0], [547.0, 11.0], [570.0, 9.0], [576.0, 78.0], [599.0, 4.0], [631.0, 7.0], [635.0, 13.0], [618.0, 5.0], [640.0, 7.0], [656.0, 4.0], [670.0, 5.0], [676.0, 19.0], [688.0, 19.0], [694.0, 16.0], [697.0, 11.0], [711.0, 11.0], [714.0, 13.0], [785.0, 1.0], [795.0, 11.0], [791.0, 13.0], [793.0, 13.0], [805.0, 99.0], [829.0, 16.0], [803.0, 26.0], [820.0, 21.0], [808.0, 34.0], [855.0, 89.5], [859.0, 16.0], [840.0, 20.0], [835.0, 17.0], [857.0, 16.0], [881.0, 11.0], [894.0, 12.0], [889.0, 3.0], [909.0, 136.5], [924.0, 59.0], [906.0, 28.0], [958.0, 129.0], [959.0, 1.0], [928.0, 1.0], [954.0, 1.0], [942.0, 14.0], [985.0, 1.0], [990.0, 1.0], [977.0, 1.0], [960.0, 1.0], [974.0, 1.0], [967.0, 1.0], [984.0, 1.0], [982.0, 1.0], [989.0, 1.0], [970.0, 1.0], [998.0, 1.0], [1010.0, 91.0], [1007.0, 1.0], [994.0, 1.0], [995.0, 1.0], [996.0, 2.0], [1012.0, 1.0], [1019.0, 1.0], [1008.0, 1.0], [1022.0, 1.0], [1023.0, 1.0], [999.0, 1.0], [1017.0, 1.0], [1006.0, 1.0], [1004.0, 1.0], [1005.0, 1.0], [1002.0, 1.0], [1000.0, 1.0], [1001.0, 1.0], [1025.0, 1.0], [1040.0, 105.0], [1044.0, 16.0], [1047.0, 1.0], [1024.0, 1.0], [1035.0, 1.0], [1037.0, 1.0], [1084.0, 21.0], [1027.0, 1.0], [1026.0, 1.0], [1034.0, 1.0], [1030.0, 1.0], [1028.0, 1.0], [1149.0, 21.0], [1095.0, 11.0], [1158.0, 1.0], [1280.0, 20.0], [1455.0, 100.0], [1490.0, 107.0], [1565.0, 1.0], [2368.0, 6.0], [2522.0, 12.0], [2495.0, 4.0], [2641.0, 15.0], [2800.0, 4.0], [2792.0, 3.0], [2934.0, 12.0], [2931.0, 4.0], [2823.0, 2.0], [3065.0, 10.0], [3078.0, 4.0], [3198.0, 4.0], [3267.0, 34.0], [3263.0, 29.0], [3301.0, 5.0], [3299.0, 8.0], [3231.0, 18.0], [3287.0, 11.0], [3281.0, 9.0], [3264.0, 4.0], [3424.0, 15.0], [3391.0, 7.0], [3402.0, 6.0], [3447.0, 4.0], [3390.0, 7.0], [3347.0, 4.0], [3434.0, 3.0], [3407.0, 3.0], [3395.0, 3.0], [3458.0, 23.0], [3465.0, 25.0], [3546.0, 6.0], [3526.0, 18.0], [3535.0, 23.0], [3564.0, 21.0], [3594.0, 17.0], [3622.0, 8.0], [3708.0, 12.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3708.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 7.0, "maxY": 972.0, "series": [{"data": [[7.0, 16.0], [16.0, 4.0], [31.0, 10.0], [42.0, 15.5], [77.0, 11.0], [76.0, 11.0], [90.0, 10.0], [135.0, 238.0], [140.0, 11.0], [144.0, 12.0], [155.0, 11.0], [175.0, 28.0], [169.0, 37.0], [180.0, 10.0], [185.0, 36.0], [196.0, 10.0], [192.0, 11.0], [204.0, 30.0], [213.0, 12.0], [222.0, 10.0], [216.0, 10.0], [231.0, 128.0], [233.0, 44.0], [247.0, 44.0], [252.0, 25.0], [253.0, 181.0], [249.0, 32.0], [251.0, 206.5], [262.0, 13.5], [269.0, 16.0], [261.0, 69.0], [265.0, 38.0], [264.0, 68.0], [284.0, 45.0], [273.0, 119.0], [286.0, 53.0], [285.0, 53.0], [274.0, 134.5], [282.0, 57.0], [280.0, 32.0], [278.0, 10.0], [277.0, 42.0], [275.0, 15.5], [287.0, 35.0], [272.0, 48.0], [279.0, 4.0], [300.0, 38.0], [302.0, 20.5], [301.0, 13.0], [296.0, 32.0], [290.0, 35.0], [293.0, 16.0], [295.0, 9.0], [288.0, 33.0], [298.0, 78.0], [299.0, 26.0], [292.0, 29.0], [318.0, 12.0], [319.0, 37.0], [310.0, 69.0], [316.0, 102.0], [307.0, 103.0], [305.0, 16.0], [304.0, 32.0], [314.0, 75.0], [311.0, 98.0], [309.0, 87.0], [308.0, 68.0], [315.0, 73.0], [313.0, 70.0], [323.0, 62.0], [321.0, 26.0], [322.0, 13.0], [326.0, 12.0], [335.0, 51.0], [328.0, 43.0], [333.0, 33.0], [332.0, 29.0], [334.0, 33.0], [329.0, 113.0], [330.0, 40.0], [327.0, 94.5], [325.0, 37.0], [324.0, 133.0], [339.0, 36.0], [350.0, 24.5], [342.0, 45.0], [351.0, 11.0], [345.0, 71.0], [344.0, 102.5], [343.0, 46.0], [349.0, 69.0], [348.0, 90.5], [347.0, 90.0], [346.0, 30.0], [341.0, 70.0], [340.0, 31.0], [337.0, 43.0], [338.0, 62.0], [336.0, 64.5], [355.0, 26.0], [366.0, 11.0], [364.0, 11.0], [363.0, 69.0], [362.0, 68.0], [352.0, 56.0], [354.0, 69.0], [353.0, 128.0], [361.0, 58.0], [367.0, 33.0], [357.0, 98.5], [356.0, 87.0], [358.0, 129.0], [365.0, 85.0], [381.0, 70.0], [371.0, 69.0], [380.0, 102.0], [376.0, 74.0], [368.0, 93.0], [382.0, 82.0], [383.0, 169.0], [377.0, 97.0], [379.0, 59.0], [372.0, 83.0], [375.0, 75.0], [374.0, 124.0], [373.0, 94.0], [370.0, 99.0], [369.0, 115.0], [387.0, 107.0], [397.0, 97.0], [392.0, 77.0], [398.0, 107.0], [399.0, 107.0], [396.0, 84.0], [393.0, 67.0], [385.0, 95.0], [386.0, 78.0], [389.0, 120.0], [388.0, 78.0], [390.0, 87.0], [391.0, 51.0], [394.0, 123.5], [395.0, 151.0], [384.0, 73.0], [400.0, 103.5], [403.0, 61.0], [401.0, 77.0], [402.0, 55.0], [406.0, 87.0], [407.0, 55.0], [412.0, 95.0], [408.0, 107.5], [409.0, 50.0], [411.0, 45.5], [415.0, 61.0], [413.0, 102.0], [405.0, 12.0], [404.0, 54.0], [422.0, 58.0], [431.0, 105.0], [418.0, 73.0], [416.0, 90.0], [426.0, 19.0], [430.0, 143.0], [420.0, 104.0], [421.0, 48.0], [436.0, 57.5], [433.0, 144.0], [441.0, 121.0], [432.0, 157.0], [446.0, 176.5], [438.0, 23.0], [435.0, 72.0], [447.0, 39.5], [456.0, 160.0], [452.0, 40.0], [462.0, 37.0], [458.0, 33.0], [453.0, 42.5], [449.0, 54.0], [450.0, 57.0], [473.0, 281.0], [472.0, 80.0], [464.0, 17.0], [493.0, 46.0], [480.0, 89.0], [483.0, 15.0], [488.0, 23.0], [484.0, 23.0], [490.0, 47.0], [509.0, 57.0], [502.0, 73.0], [506.0, 16.0], [511.0, 25.0], [501.0, 28.0], [497.0, 36.0], [508.0, 36.0], [510.0, 46.0], [507.0, 57.0], [518.0, 62.0], [529.0, 48.0], [521.0, 43.0], [522.0, 46.0], [516.0, 46.0], [514.0, 38.0], [515.0, 46.0], [513.0, 28.0], [512.0, 31.0], [526.0, 43.0], [525.0, 47.0], [537.0, 47.0], [538.0, 44.0], [539.0, 42.0], [519.0, 41.0], [536.0, 48.0], [530.0, 47.0], [532.0, 43.0], [531.0, 12.0], [528.0, 17.0], [543.0, 46.0], [542.0, 52.0], [541.0, 51.0], [540.0, 37.0], [523.0, 16.0], [535.0, 21.0], [534.0, 45.0], [533.0, 25.0], [569.0, 2.0], [560.0, 36.0], [556.0, 34.0], [559.0, 24.0], [544.0, 34.0], [558.0, 13.0], [557.0, 60.0], [545.0, 37.0], [562.0, 56.0], [561.0, 33.0], [567.0, 38.0], [566.0, 52.0], [565.0, 61.0], [564.0, 41.0], [563.0, 21.0], [552.0, 39.0], [553.0, 67.0], [554.0, 27.0], [555.0, 50.0], [547.0, 30.0], [549.0, 15.0], [548.0, 61.0], [568.0, 29.0], [570.0, 41.0], [571.0, 26.0], [572.0, 26.0], [575.0, 8.0], [573.0, 21.0], [546.0, 10.5], [600.0, 7.5], [576.0, 2.0], [599.0, 88.0], [597.0, 2.0], [598.0, 2.0], [587.0, 2.0], [588.0, 13.0], [591.0, 14.0], [590.0, 53.0], [589.0, 21.0], [585.0, 43.0], [584.0, 46.0], [586.0, 20.0], [604.0, 2.0], [601.0, 7.0], [603.0, 15.0], [602.0, 35.5], [583.0, 18.0], [581.0, 2.0], [582.0, 51.0], [579.0, 8.5], [577.0, 19.0], [578.0, 33.0], [580.0, 2.0], [592.0, 53.0], [606.0, 50.0], [607.0, 60.0], [593.0, 16.0], [595.0, 2.0], [594.0, 10.0], [632.0, 2.0], [635.0, 2.0], [631.0, 27.0], [629.0, 2.0], [628.0, 48.0], [618.0, 42.0], [608.0, 2.0], [634.0, 2.0], [638.0, 2.0], [636.0, 2.0], [614.0, 7.0], [615.0, 45.0], [610.0, 9.0], [611.0, 16.0], [612.0, 2.0], [619.0, 8.5], [621.0, 16.0], [623.0, 2.0], [643.0, 2.0], [670.0, 50.0], [640.0, 65.5], [656.0, 2.0], [657.0, 2.0], [647.0, 2.0], [667.0, 2.0], [666.0, 2.0], [644.0, 2.0], [671.0, 2.0], [648.0, 2.0], [655.0, 2.0], [653.0, 2.0], [652.0, 2.0], [654.0, 2.0], [651.0, 2.0], [650.0, 2.0], [649.0, 2.0], [641.0, 2.0], [642.0, 2.0], [676.0, 41.0], [688.0, 38.0], [694.0, 46.5], [697.0, 68.5], [672.0, 2.0], [711.0, 42.0], [714.0, 45.0], [725.0, 2.0], [710.0, 2.0], [715.0, 2.0], [731.0, 2.0], [762.0, 2.0], [757.0, 2.0], [766.0, 2.0], [764.0, 2.0], [763.0, 2.0], [756.0, 2.0], [759.0, 2.0], [758.0, 2.0], [742.0, 2.0], [760.0, 2.0], [751.0, 2.0], [748.0, 2.0], [749.0, 2.0], [761.0, 2.0], [795.0, 90.0], [791.0, 71.0], [788.0, 2.0], [793.0, 108.5], [779.0, 2.0], [776.0, 2.0], [778.0, 2.0], [782.0, 2.0], [775.0, 2.0], [771.0, 2.0], [769.0, 2.0], [768.0, 2.0], [772.0, 2.0], [773.0, 2.0], [799.0, 2.0], [798.0, 2.0], [784.0, 2.0], [786.0, 2.0], [787.0, 2.0], [805.0, 42.0], [829.0, 56.0], [803.0, 47.0], [820.0, 76.0], [808.0, 61.0], [807.0, 2.0], [814.0, 2.0], [855.0, 30.0], [859.0, 45.0], [840.0, 53.5], [835.0, 102.0], [857.0, 125.0], [870.0, 7.0], [881.0, 52.5], [894.0, 67.0], [889.0, 105.5], [909.0, 22.0], [924.0, 38.0], [906.0, 46.0], [958.0, 24.0], [942.0, 54.0], [960.0, 2.0], [1010.0, 24.0], [996.0, 65.0], [1040.0, 22.0], [1084.0, 66.0], [1044.0, 66.0], [1149.0, 78.0], [1095.0, 74.0], [1111.0, 2.0], [1280.0, 88.0], [1508.0, 5.0], [1628.0, 4.0], [2368.0, 35.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[231.0, 338.0], [251.0, 585.0], [265.0, 437.0], [264.0, 0.0], [273.0, 429.0], [286.0, 786.0], [287.0, 384.5], [272.0, 457.0], [280.0, 491.0], [277.0, 527.5], [285.0, 26.0], [296.0, 363.0], [300.0, 881.0], [290.0, 785.5], [298.0, 158.0], [292.0, 512.5], [316.0, 813.0], [311.0, 255.0], [319.0, 732.0], [310.0, 851.0], [309.0, 97.0], [315.0, 401.5], [313.0, 447.0], [314.0, 0.0], [308.0, 458.0], [318.0, 414.0], [304.0, 496.0], [305.0, 522.5], [333.0, 882.0], [335.0, 705.5], [328.0, 733.0], [325.0, 837.0], [324.0, 31.0], [330.0, 972.0], [334.0, 418.0], [322.0, 428.0], [332.0, 504.0], [323.0, 509.0], [339.0, 849.0], [343.0, 762.5], [347.0, 669.0], [340.0, 729.0], [337.0, 774.0], [338.0, 0.0], [342.0, 726.5], [351.0, 782.0], [346.0, 782.0], [345.0, 197.0], [349.0, 427.0], [341.0, 427.0], [365.0, 638.0], [367.0, 762.0], [356.0, 834.0], [366.0, 590.0], [353.0, 41.0], [358.0, 76.5], [381.0, 637.0], [376.0, 354.0], [379.0, 800.0], [382.0, 14.5], [372.0, 110.0], [375.0, 63.0], [383.0, 32.0], [374.0, 27.0], [385.0, 421.0], [386.0, 177.5], [397.0, 41.0], [399.0, 85.0], [398.0, 172.0], [391.0, 0.0], [401.0, 368.0], [411.0, 0.0], [408.0, 29.0], [415.0, 24.0], [413.0, 102.5], [409.0, 56.5], [402.0, 327.0], [412.0, 18.5], [420.0, 0.0], [441.0, 0.0], [435.0, 0.0], [447.0, 227.0], [452.0, 0.0], [462.0, 0.0], [458.0, 0.0], [453.0, 0.0], [449.0, 0.0], [450.0, 0.0], [473.0, 0.0], [472.0, 0.0], [493.0, 0.0], [480.0, 0.0], [509.0, 0.0], [502.0, 0.0], [529.0, 0.0], [518.0, 0.0], [521.0, 0.0], [516.0, 0.0], [537.0, 0.0], [560.0, 0.0], [545.0, 0.0], [562.0, 0.0], [552.0, 0.0], [547.0, 0.0], [570.0, 0.0], [576.0, 0.0], [599.0, 0.0], [631.0, 0.0], [635.0, 0.0], [618.0, 0.0], [640.0, 0.0], [656.0, 0.0], [670.0, 0.0], [676.0, 0.0], [688.0, 0.0], [694.0, 0.0], [697.0, 0.0], [711.0, 0.0], [714.0, 0.0], [785.0, 1.0], [795.0, 0.0], [791.0, 0.0], [793.0, 0.0], [805.0, 0.0], [829.0, 0.0], [803.0, 0.0], [820.0, 0.0], [808.0, 0.0], [855.0, 0.0], [859.0, 0.0], [840.0, 0.0], [835.0, 0.0], [857.0, 0.0], [881.0, 0.0], [894.0, 0.0], [889.0, 0.0], [909.0, 0.0], [924.0, 0.0], [906.0, 0.0], [958.0, 0.0], [959.0, 1.0], [928.0, 1.0], [954.0, 1.0], [942.0, 0.0], [985.0, 1.0], [990.0, 1.0], [977.0, 1.0], [960.0, 1.0], [974.0, 1.0], [967.0, 1.0], [984.0, 1.0], [982.0, 1.0], [989.0, 1.0], [970.0, 1.0], [998.0, 1.0], [1010.0, 0.0], [1007.0, 1.0], [994.0, 1.0], [995.0, 1.0], [996.0, 1.0], [1012.0, 1.0], [1019.0, 1.0], [1008.0, 1.0], [1022.0, 1.0], [1023.0, 1.0], [999.0, 1.0], [1017.0, 1.0], [1006.0, 1.0], [1004.0, 1.0], [1005.0, 1.0], [1002.0, 1.0], [1000.0, 1.0], [1001.0, 1.0], [1025.0, 1.0], [1040.0, 0.0], [1044.0, 0.0], [1047.0, 1.0], [1024.0, 1.0], [1035.0, 1.0], [1037.0, 1.0], [1084.0, 0.0], [1027.0, 1.0], [1026.0, 1.0], [1034.0, 1.0], [1030.0, 1.0], [1028.0, 1.0], [1149.0, 0.0], [1095.0, 0.0], [1158.0, 1.0], [1280.0, 0.0], [1455.0, 0.0], [1490.0, 0.0], [1565.0, 1.0], [2368.0, 6.0], [2522.0, 12.0], [2495.0, 2.0], [2641.0, 6.0], [2800.0, 2.0], [2792.0, 2.0], [2934.0, 11.0], [2931.0, 2.0], [2823.0, 2.0], [3065.0, 9.0], [3078.0, 4.0], [3198.0, 4.0], [3267.0, 34.0], [3263.0, 22.0], [3301.0, 3.0], [3299.0, 8.0], [3231.0, 18.0], [3287.0, 11.0], [3281.0, 9.0], [3264.0, 4.0], [3424.0, 7.0], [3391.0, 7.0], [3402.0, 3.0], [3447.0, 3.0], [3390.0, 7.0], [3347.0, 4.0], [3434.0, 3.0], [3407.0, 3.0], [3395.0, 3.0], [3458.0, 23.0], [3465.0, 5.0], [3546.0, 3.0], [3526.0, 18.0], [3535.0, 23.0], [3564.0, 21.0], [3594.0, 17.0], [3622.0, 8.0], [3708.0, 12.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3708.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.65, "minX": 1.62483312E12, "maxY": 2394.883333333333, "series": [{"data": [[1.62541332E12, 71.68333333333334], [1.62541458E12, 617.8833333333333], [1.62541398E12, 510.4], [1.62541392E12, 362.01666666666665], [1.6250883E12, 65.41666666666667], [1.62541296E12, 83.33333333333333], [1.62541404E12, 438.53333333333336], [1.6254153E12, 47.733333333333334], [1.62508848E12, 2394.883333333333], [1.62508854E12, 798.7833333333333], [1.62508842E12, 408.05], [1.6254138E12, 13.4], [1.62541536E12, 552.9666666666667], [1.62541446E12, 382.25], [1.62541542E12, 549.25], [1.62483318E12, 36.766666666666666], [1.62541326E12, 11.65], [1.62483312E12, 29.9], [1.62508836E12, 375.05], [1.62541386E12, 342.31666666666666], [1.62541452E12, 666.5333333333333], [1.62541548E12, 516.7166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62541548E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62483312E12, "maxY": 2015.9833333333333, "series": [{"data": [[1.62541332E12, 72.51666666666667], [1.62541458E12, 617.9166666666666], [1.62541398E12, 200.8], [1.62541392E12, 279.25], [1.6250883E12, 65.16666666666667], [1.62541296E12, 83.33333333333333], [1.62541404E12, 149.35], [1.6254153E12, 47.61666666666667], [1.62508848E12, 22.9], [1.62508842E12, 234.98333333333332], [1.6254138E12, 13.35], [1.62541536E12, 552.75], [1.62541446E12, 382.21666666666664], [1.62541542E12, 549.0166666666667], [1.62483318E12, 36.833333333333336], [1.62541326E12, 10.816666666666666], [1.62483312E12, 29.833333333333332], [1.62508836E12, 374.1333333333333], [1.62541386E12, 341.75], [1.62541452E12, 666.5333333333333], [1.62541548E12, 517.2833333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62508842E12, 100.03333333333333], [1.62541398E12, 91.05], [1.62541392E12, 55.56666666666667], [1.62541404E12, 61.3], [1.62508848E12, 12.85]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.62508848E12, 2015.9833333333333], [1.62508854E12, 798.7833333333333]], "isOverall": false, "label": "401", "isController": false}, {"data": [[1.62508842E12, 72.1], [1.62541398E12, 218.55], [1.62541392E12, 26.733333333333334], [1.62541404E12, 228.96666666666667], [1.62508848E12, 345.23333333333335]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}, {"data": [[1.62508854E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.ConnectionClosedException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62541548E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.816666666666666, "minX": 1.62483312E12, "maxY": 2374.0666666666666, "series": [{"data": [[1.62541332E12, 72.51666666666667], [1.62541458E12, 617.9166666666666], [1.62541398E12, 200.8], [1.62541392E12, 279.25], [1.6250883E12, 65.16666666666667], [1.62541296E12, 83.33333333333333], [1.62541404E12, 149.35], [1.6254153E12, 47.61666666666667], [1.62508848E12, 22.9], [1.62508842E12, 234.98333333333332], [1.6254138E12, 13.35], [1.62541536E12, 552.75], [1.62541446E12, 382.21666666666664], [1.62541542E12, 549.0166666666667], [1.62483318E12, 36.833333333333336], [1.62541326E12, 10.816666666666666], [1.62483312E12, 29.833333333333332], [1.62508836E12, 374.1333333333333], [1.62541386E12, 341.75], [1.62541452E12, 666.5333333333333], [1.62541548E12, 517.2833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62508842E12, 172.13333333333333], [1.62541398E12, 309.6], [1.62541392E12, 82.3], [1.62541404E12, 290.26666666666665], [1.62508848E12, 2374.0666666666666], [1.62508854E12, 798.8]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62541548E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.816666666666666, "minX": 1.62483312E12, "maxY": 2374.0666666666666, "series": [{"data": [[1.62541332E12, 72.51666666666667], [1.62541458E12, 617.9166666666666], [1.62541398E12, 200.8], [1.62541392E12, 279.25], [1.6250883E12, 65.16666666666667], [1.62541296E12, 83.33333333333333], [1.62541404E12, 149.35], [1.6254153E12, 47.61666666666667], [1.62508848E12, 22.9], [1.62508842E12, 234.98333333333332], [1.6254138E12, 13.35], [1.62541536E12, 552.75], [1.62541446E12, 382.21666666666664], [1.62541542E12, 549.0166666666667], [1.62483318E12, 36.833333333333336], [1.62541326E12, 10.816666666666666], [1.62483312E12, 29.833333333333332], [1.62508836E12, 374.1333333333333], [1.62541386E12, 341.75], [1.62541452E12, 666.5333333333333], [1.62541548E12, 517.2833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62508842E12, 172.13333333333333], [1.62541398E12, 309.6], [1.62541392E12, 82.3], [1.62541404E12, 290.26666666666665], [1.62508848E12, 2374.0666666666666], [1.62508854E12, 798.8]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62541548E12, "title": "Total Transactions Per Second"}},
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

