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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1309.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 7.0], [7.8, 7.0], [7.9, 7.0], [8.0, 7.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 10.0], [10.6, 10.0], [10.7, 10.0], [10.8, 10.0], [10.9, 10.0], [11.0, 10.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 10.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 13.0], [13.7, 13.0], [13.8, 13.0], [13.9, 13.0], [14.0, 13.0], [14.1, 13.0], [14.2, 13.0], [14.3, 13.0], [14.4, 13.0], [14.5, 13.0], [14.6, 13.0], [14.7, 14.0], [14.8, 14.0], [14.9, 14.0], [15.0, 14.0], [15.1, 14.0], [15.2, 14.0], [15.3, 14.0], [15.4, 14.0], [15.5, 14.0], [15.6, 14.0], [15.7, 14.0], [15.8, 14.0], [15.9, 15.0], [16.0, 15.0], [16.1, 15.0], [16.2, 15.0], [16.3, 15.0], [16.4, 15.0], [16.5, 15.0], [16.6, 15.0], [16.7, 15.0], [16.8, 15.0], [16.9, 15.0], [17.0, 15.0], [17.1, 15.0], [17.2, 16.0], [17.3, 16.0], [17.4, 16.0], [17.5, 16.0], [17.6, 16.0], [17.7, 16.0], [17.8, 16.0], [17.9, 16.0], [18.0, 16.0], [18.1, 16.0], [18.2, 16.0], [18.3, 16.0], [18.4, 16.0], [18.5, 17.0], [18.6, 17.0], [18.7, 17.0], [18.8, 17.0], [18.9, 17.0], [19.0, 17.0], [19.1, 17.0], [19.2, 17.0], [19.3, 17.0], [19.4, 17.0], [19.5, 17.0], [19.6, 17.0], [19.7, 17.0], [19.8, 17.0], [19.9, 17.0], [20.0, 18.0], [20.1, 18.0], [20.2, 18.0], [20.3, 18.0], [20.4, 18.0], [20.5, 18.0], [20.6, 18.0], [20.7, 18.0], [20.8, 18.0], [20.9, 18.0], [21.0, 18.0], [21.1, 18.0], [21.2, 18.0], [21.3, 18.0], [21.4, 19.0], [21.5, 19.0], [21.6, 19.0], [21.7, 19.0], [21.8, 19.0], [21.9, 19.0], [22.0, 19.0], [22.1, 19.0], [22.2, 19.0], [22.3, 19.0], [22.4, 19.0], [22.5, 19.0], [22.6, 19.0], [22.7, 19.0], [22.8, 20.0], [22.9, 20.0], [23.0, 20.0], [23.1, 20.0], [23.2, 20.0], [23.3, 20.0], [23.4, 20.0], [23.5, 20.0], [23.6, 20.0], [23.7, 20.0], [23.8, 20.0], [23.9, 20.0], [24.0, 20.0], [24.1, 21.0], [24.2, 21.0], [24.3, 21.0], [24.4, 21.0], [24.5, 21.0], [24.6, 21.0], [24.7, 21.0], [24.8, 21.0], [24.9, 21.0], [25.0, 21.0], [25.1, 21.0], [25.2, 21.0], [25.3, 21.0], [25.4, 22.0], [25.5, 22.0], [25.6, 22.0], [25.7, 22.0], [25.8, 22.0], [25.9, 22.0], [26.0, 22.0], [26.1, 22.0], [26.2, 22.0], [26.3, 22.0], [26.4, 22.0], [26.5, 22.0], [26.6, 22.0], [26.7, 23.0], [26.8, 23.0], [26.9, 23.0], [27.0, 23.0], [27.1, 23.0], [27.2, 23.0], [27.3, 23.0], [27.4, 23.0], [27.5, 23.0], [27.6, 23.0], [27.7, 23.0], [27.8, 23.0], [27.9, 24.0], [28.0, 24.0], [28.1, 24.0], [28.2, 24.0], [28.3, 24.0], [28.4, 24.0], [28.5, 24.0], [28.6, 24.0], [28.7, 24.0], [28.8, 24.0], [28.9, 24.0], [29.0, 24.0], [29.1, 25.0], [29.2, 25.0], [29.3, 25.0], [29.4, 25.0], [29.5, 25.0], [29.6, 25.0], [29.7, 25.0], [29.8, 25.0], [29.9, 25.0], [30.0, 25.0], [30.1, 25.0], [30.2, 25.0], [30.3, 26.0], [30.4, 26.0], [30.5, 26.0], [30.6, 26.0], [30.7, 26.0], [30.8, 26.0], [30.9, 26.0], [31.0, 26.0], [31.1, 26.0], [31.2, 26.0], [31.3, 26.0], [31.4, 26.0], [31.5, 27.0], [31.6, 27.0], [31.7, 27.0], [31.8, 27.0], [31.9, 27.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 27.0], [32.6, 27.0], [32.7, 27.0], [32.8, 28.0], [32.9, 28.0], [33.0, 28.0], [33.1, 28.0], [33.2, 28.0], [33.3, 28.0], [33.4, 28.0], [33.5, 28.0], [33.6, 28.0], [33.7, 28.0], [33.8, 28.0], [33.9, 28.0], [34.0, 29.0], [34.1, 29.0], [34.2, 29.0], [34.3, 29.0], [34.4, 29.0], [34.5, 29.0], [34.6, 29.0], [34.7, 29.0], [34.8, 29.0], [34.9, 29.0], [35.0, 29.0], [35.1, 29.0], [35.2, 29.0], [35.3, 30.0], [35.4, 30.0], [35.5, 30.0], [35.6, 30.0], [35.7, 30.0], [35.8, 30.0], [35.9, 30.0], [36.0, 30.0], [36.1, 30.0], [36.2, 30.0], [36.3, 30.0], [36.4, 30.0], [36.5, 31.0], [36.6, 31.0], [36.7, 31.0], [36.8, 31.0], [36.9, 31.0], [37.0, 31.0], [37.1, 31.0], [37.2, 31.0], [37.3, 31.0], [37.4, 31.0], [37.5, 31.0], [37.6, 31.0], [37.7, 32.0], [37.8, 32.0], [37.9, 32.0], [38.0, 32.0], [38.1, 32.0], [38.2, 32.0], [38.3, 32.0], [38.4, 32.0], [38.5, 32.0], [38.6, 32.0], [38.7, 32.0], [38.8, 32.0], [38.9, 33.0], [39.0, 33.0], [39.1, 33.0], [39.2, 33.0], [39.3, 33.0], [39.4, 33.0], [39.5, 33.0], [39.6, 33.0], [39.7, 33.0], [39.8, 33.0], [39.9, 33.0], [40.0, 33.0], [40.1, 34.0], [40.2, 34.0], [40.3, 34.0], [40.4, 34.0], [40.5, 34.0], [40.6, 34.0], [40.7, 34.0], [40.8, 34.0], [40.9, 34.0], [41.0, 34.0], [41.1, 34.0], [41.2, 34.0], [41.3, 35.0], [41.4, 35.0], [41.5, 35.0], [41.6, 35.0], [41.7, 35.0], [41.8, 35.0], [41.9, 35.0], [42.0, 35.0], [42.1, 35.0], [42.2, 35.0], [42.3, 35.0], [42.4, 36.0], [42.5, 36.0], [42.6, 36.0], [42.7, 36.0], [42.8, 36.0], [42.9, 36.0], [43.0, 36.0], [43.1, 36.0], [43.2, 36.0], [43.3, 36.0], [43.4, 36.0], [43.5, 36.0], [43.6, 37.0], [43.7, 37.0], [43.8, 37.0], [43.9, 37.0], [44.0, 37.0], [44.1, 37.0], [44.2, 37.0], [44.3, 37.0], [44.4, 37.0], [44.5, 37.0], [44.6, 37.0], [44.7, 38.0], [44.8, 38.0], [44.9, 38.0], [45.0, 38.0], [45.1, 38.0], [45.2, 38.0], [45.3, 38.0], [45.4, 38.0], [45.5, 38.0], [45.6, 38.0], [45.7, 38.0], [45.8, 39.0], [45.9, 39.0], [46.0, 39.0], [46.1, 39.0], [46.2, 39.0], [46.3, 39.0], [46.4, 39.0], [46.5, 39.0], [46.6, 39.0], [46.7, 39.0], [46.8, 39.0], [46.9, 40.0], [47.0, 40.0], [47.1, 40.0], [47.2, 40.0], [47.3, 40.0], [47.4, 40.0], [47.5, 40.0], [47.6, 40.0], [47.7, 40.0], [47.8, 40.0], [47.9, 40.0], [48.0, 41.0], [48.1, 41.0], [48.2, 41.0], [48.3, 41.0], [48.4, 41.0], [48.5, 41.0], [48.6, 41.0], [48.7, 41.0], [48.8, 41.0], [48.9, 42.0], [49.0, 42.0], [49.1, 42.0], [49.2, 42.0], [49.3, 42.0], [49.4, 42.0], [49.5, 42.0], [49.6, 42.0], [49.7, 42.0], [49.8, 42.0], [49.9, 43.0], [50.0, 43.0], [50.1, 43.0], [50.2, 43.0], [50.3, 43.0], [50.4, 43.0], [50.5, 43.0], [50.6, 43.0], [50.7, 43.0], [50.8, 44.0], [50.9, 44.0], [51.0, 44.0], [51.1, 44.0], [51.2, 44.0], [51.3, 44.0], [51.4, 44.0], [51.5, 44.0], [51.6, 44.0], [51.7, 44.0], [51.8, 45.0], [51.9, 45.0], [52.0, 45.0], [52.1, 45.0], [52.2, 45.0], [52.3, 45.0], [52.4, 45.0], [52.5, 45.0], [52.6, 45.0], [52.7, 46.0], [52.8, 46.0], [52.9, 46.0], [53.0, 46.0], [53.1, 46.0], [53.2, 46.0], [53.3, 46.0], [53.4, 46.0], [53.5, 46.0], [53.6, 47.0], [53.7, 47.0], [53.8, 47.0], [53.9, 47.0], [54.0, 47.0], [54.1, 47.0], [54.2, 47.0], [54.3, 47.0], [54.4, 47.0], [54.5, 48.0], [54.6, 48.0], [54.7, 48.0], [54.8, 48.0], [54.9, 48.0], [55.0, 48.0], [55.1, 48.0], [55.2, 48.0], [55.3, 49.0], [55.4, 49.0], [55.5, 49.0], [55.6, 49.0], [55.7, 49.0], [55.8, 49.0], [55.9, 49.0], [56.0, 49.0], [56.1, 49.0], [56.2, 50.0], [56.3, 50.0], [56.4, 50.0], [56.5, 50.0], [56.6, 50.0], [56.7, 50.0], [56.8, 50.0], [56.9, 50.0], [57.0, 51.0], [57.1, 51.0], [57.2, 51.0], [57.3, 51.0], [57.4, 51.0], [57.5, 51.0], [57.6, 51.0], [57.7, 51.0], [57.8, 52.0], [57.9, 52.0], [58.0, 52.0], [58.1, 52.0], [58.2, 52.0], [58.3, 52.0], [58.4, 52.0], [58.5, 53.0], [58.6, 53.0], [58.7, 53.0], [58.8, 53.0], [58.9, 53.0], [59.0, 53.0], [59.1, 53.0], [59.2, 53.0], [59.3, 54.0], [59.4, 54.0], [59.5, 54.0], [59.6, 54.0], [59.7, 54.0], [59.8, 54.0], [59.9, 54.0], [60.0, 55.0], [60.1, 55.0], [60.2, 55.0], [60.3, 55.0], [60.4, 55.0], [60.5, 55.0], [60.6, 55.0], [60.7, 55.0], [60.8, 56.0], [60.9, 56.0], [61.0, 56.0], [61.1, 56.0], [61.2, 56.0], [61.3, 56.0], [61.4, 57.0], [61.5, 57.0], [61.6, 57.0], [61.7, 57.0], [61.8, 57.0], [61.9, 57.0], [62.0, 57.0], [62.1, 58.0], [62.2, 58.0], [62.3, 58.0], [62.4, 58.0], [62.5, 58.0], [62.6, 58.0], [62.7, 58.0], [62.8, 59.0], [62.9, 59.0], [63.0, 59.0], [63.1, 59.0], [63.2, 59.0], [63.3, 59.0], [63.4, 60.0], [63.5, 60.0], [63.6, 60.0], [63.7, 60.0], [63.8, 60.0], [63.9, 60.0], [64.0, 60.0], [64.1, 61.0], [64.2, 61.0], [64.3, 61.0], [64.4, 61.0], [64.5, 61.0], [64.6, 61.0], [64.7, 62.0], [64.8, 62.0], [64.9, 62.0], [65.0, 62.0], [65.1, 62.0], [65.2, 62.0], [65.3, 63.0], [65.4, 63.0], [65.5, 63.0], [65.6, 63.0], [65.7, 63.0], [65.8, 63.0], [65.9, 63.0], [66.0, 64.0], [66.1, 64.0], [66.2, 64.0], [66.3, 64.0], [66.4, 64.0], [66.5, 64.0], [66.6, 65.0], [66.7, 65.0], [66.8, 65.0], [66.9, 65.0], [67.0, 65.0], [67.1, 65.0], [67.2, 66.0], [67.3, 66.0], [67.4, 66.0], [67.5, 66.0], [67.6, 66.0], [67.7, 66.0], [67.8, 66.0], [67.9, 67.0], [68.0, 67.0], [68.1, 67.0], [68.2, 67.0], [68.3, 67.0], [68.4, 68.0], [68.5, 68.0], [68.6, 68.0], [68.7, 68.0], [68.8, 68.0], [68.9, 69.0], [69.0, 69.0], [69.1, 69.0], [69.2, 69.0], [69.3, 69.0], [69.4, 69.0], [69.5, 70.0], [69.6, 70.0], [69.7, 70.0], [69.8, 70.0], [69.9, 70.0], [70.0, 70.0], [70.1, 71.0], [70.2, 71.0], [70.3, 71.0], [70.4, 71.0], [70.5, 71.0], [70.6, 72.0], [70.7, 72.0], [70.8, 72.0], [70.9, 72.0], [71.0, 72.0], [71.1, 73.0], [71.2, 73.0], [71.3, 73.0], [71.4, 73.0], [71.5, 73.0], [71.6, 73.0], [71.7, 74.0], [71.8, 74.0], [71.9, 74.0], [72.0, 74.0], [72.1, 74.0], [72.2, 75.0], [72.3, 75.0], [72.4, 75.0], [72.5, 75.0], [72.6, 75.0], [72.7, 76.0], [72.8, 76.0], [72.9, 76.0], [73.0, 76.0], [73.1, 77.0], [73.2, 77.0], [73.3, 77.0], [73.4, 77.0], [73.5, 77.0], [73.6, 78.0], [73.7, 78.0], [73.8, 78.0], [73.9, 78.0], [74.0, 79.0], [74.1, 79.0], [74.2, 79.0], [74.3, 79.0], [74.4, 80.0], [74.5, 80.0], [74.6, 80.0], [74.7, 80.0], [74.8, 81.0], [74.9, 81.0], [75.0, 81.0], [75.1, 81.0], [75.2, 81.0], [75.3, 82.0], [75.4, 82.0], [75.5, 82.0], [75.6, 82.0], [75.7, 83.0], [75.8, 83.0], [75.9, 83.0], [76.0, 83.0], [76.1, 84.0], [76.2, 84.0], [76.3, 84.0], [76.4, 84.0], [76.5, 85.0], [76.6, 85.0], [76.7, 85.0], [76.8, 86.0], [76.9, 86.0], [77.0, 86.0], [77.1, 86.0], [77.2, 87.0], [77.3, 87.0], [77.4, 87.0], [77.5, 88.0], [77.6, 88.0], [77.7, 88.0], [77.8, 88.0], [77.9, 89.0], [78.0, 89.0], [78.1, 89.0], [78.2, 90.0], [78.3, 90.0], [78.4, 90.0], [78.5, 91.0], [78.6, 91.0], [78.7, 91.0], [78.8, 92.0], [78.9, 92.0], [79.0, 92.0], [79.1, 93.0], [79.2, 93.0], [79.3, 93.0], [79.4, 94.0], [79.5, 94.0], [79.6, 94.0], [79.7, 95.0], [79.8, 95.0], [79.9, 95.0], [80.0, 96.0], [80.1, 96.0], [80.2, 97.0], [80.3, 97.0], [80.4, 97.0], [80.5, 98.0], [80.6, 98.0], [80.7, 98.0], [80.8, 99.0], [80.9, 99.0], [81.0, 100.0], [81.1, 100.0], [81.2, 101.0], [81.3, 101.0], [81.4, 101.0], [81.5, 102.0], [81.6, 102.0], [81.7, 103.0], [81.8, 103.0], [81.9, 104.0], [82.0, 104.0], [82.1, 104.0], [82.2, 105.0], [82.3, 105.0], [82.4, 106.0], [82.5, 106.0], [82.6, 107.0], [82.7, 107.0], [82.8, 108.0], [82.9, 109.0], [83.0, 109.0], [83.1, 110.0], [83.2, 110.0], [83.3, 111.0], [83.4, 112.0], [83.5, 112.0], [83.6, 113.0], [83.7, 113.0], [83.8, 114.0], [83.9, 115.0], [84.0, 115.0], [84.1, 116.0], [84.2, 117.0], [84.3, 117.0], [84.4, 118.0], [84.5, 118.0], [84.6, 119.0], [84.7, 120.0], [84.8, 120.0], [84.9, 121.0], [85.0, 122.0], [85.1, 122.0], [85.2, 123.0], [85.3, 124.0], [85.4, 125.0], [85.5, 125.0], [85.6, 126.0], [85.7, 127.0], [85.8, 128.0], [85.9, 129.0], [86.0, 130.0], [86.1, 130.0], [86.2, 131.0], [86.3, 132.0], [86.4, 133.0], [86.5, 134.0], [86.6, 135.0], [86.7, 136.0], [86.8, 137.0], [86.9, 138.0], [87.0, 139.0], [87.1, 139.0], [87.2, 141.0], [87.3, 142.0], [87.4, 143.0], [87.5, 144.0], [87.6, 145.0], [87.7, 147.0], [87.8, 148.0], [87.9, 149.0], [88.0, 150.0], [88.1, 151.0], [88.2, 153.0], [88.3, 154.0], [88.4, 155.0], [88.5, 157.0], [88.6, 158.0], [88.7, 159.0], [88.8, 160.0], [88.9, 162.0], [89.0, 163.0], [89.1, 164.0], [89.2, 166.0], [89.3, 168.0], [89.4, 169.0], [89.5, 171.0], [89.6, 172.0], [89.7, 174.0], [89.8, 175.0], [89.9, 177.0], [90.0, 178.0], [90.1, 180.0], [90.2, 181.0], [90.3, 183.0], [90.4, 185.0], [90.5, 186.0], [90.6, 188.0], [90.7, 190.0], [90.8, 192.0], [90.9, 194.0], [91.0, 196.0], [91.1, 199.0], [91.2, 200.0], [91.3, 202.0], [91.4, 204.0], [91.5, 207.0], [91.6, 209.0], [91.7, 211.0], [91.8, 213.0], [91.9, 216.0], [92.0, 218.0], [92.1, 221.0], [92.2, 224.0], [92.3, 227.0], [92.4, 230.0], [92.5, 233.0], [92.6, 235.0], [92.7, 238.0], [92.8, 241.0], [92.9, 244.0], [93.0, 246.0], [93.1, 249.0], [93.2, 251.0], [93.3, 254.0], [93.4, 257.0], [93.5, 259.0], [93.6, 262.0], [93.7, 265.0], [93.8, 268.0], [93.9, 271.0], [94.0, 274.0], [94.1, 278.0], [94.2, 281.0], [94.3, 283.0], [94.4, 287.0], [94.5, 289.0], [94.6, 293.0], [94.7, 296.0], [94.8, 299.0], [94.9, 302.0], [95.0, 306.0], [95.1, 309.0], [95.2, 314.0], [95.3, 318.0], [95.4, 321.0], [95.5, 326.0], [95.6, 329.0], [95.7, 334.0], [95.8, 338.0], [95.9, 342.0], [96.0, 347.0], [96.1, 351.0], [96.2, 356.0], [96.3, 359.0], [96.4, 362.0], [96.5, 367.0], [96.6, 371.0], [96.7, 375.0], [96.8, 379.0], [96.9, 383.0], [97.0, 387.0], [97.1, 392.0], [97.2, 397.0], [97.3, 401.0], [97.4, 405.0], [97.5, 409.0], [97.6, 414.0], [97.7, 418.0], [97.8, 423.0], [97.9, 427.0], [98.0, 432.0], [98.1, 436.0], [98.2, 442.0], [98.3, 448.0], [98.4, 453.0], [98.5, 460.0], [98.6, 467.0], [98.7, 476.0], [98.8, 485.0], [98.9, 494.0], [99.0, 507.0], [99.1, 519.0], [99.2, 531.0], [99.3, 551.0], [99.4, 575.0], [99.5, 596.0], [99.6, 627.0], [99.7, 671.0], [99.8, 724.0], [99.9, 859.0], [100.0, 1309.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 80968.0, "series": [{"data": [[0.0, 80968.0], [600.0, 252.0], [700.0, 93.0], [200.0, 3676.0], [800.0, 65.0], [900.0, 45.0], [1000.0, 20.0], [1100.0, 10.0], [300.0, 2422.0], [1200.0, 5.0], [1300.0, 1.0], [100.0, 10186.0], [400.0, 1698.0], [500.0, 559.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 482.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 57526.0, "series": [{"data": [[0.0, 57526.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 482.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 41992.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.53388777363542, "minX": 1.62724542E12, "maxY": 55.26742095802052, "series": [{"data": [[1.6272456E12, 45.01084277969461], [1.62724548E12, 29.814208059981187], [1.62724554E12, 55.26742095802052], [1.62724542E12, 11.53388777363542]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6272456E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13.471186440677968, "minX": 1.0, "maxY": 189.82653061224468, "series": [{"data": [[2.0, 13.471186440677968], [3.0, 16.550769230769223], [4.0, 13.922455573505653], [5.0, 15.649373881932027], [6.0, 18.02729044834307], [7.0, 19.222416812609428], [8.0, 22.07042253521128], [9.0, 19.31592689295041], [10.0, 20.650586701434168], [11.0, 27.312703583061904], [12.0, 23.374257425742623], [13.0, 37.84044526901672], [14.0, 38.67792521109774], [15.0, 34.117684078036504], [16.0, 28.919513607411695], [17.0, 34.89754871150211], [18.0, 37.00343878954596], [19.0, 35.34210526315791], [20.0, 38.25385130609514], [21.0, 47.262843488649935], [22.0, 44.930318754633106], [23.0, 50.608593750000125], [24.0, 46.84388714733538], [25.0, 51.916588566073116], [26.0, 51.96645367412147], [27.0, 59.13659531090728], [28.0, 38.52672176308544], [29.0, 53.80726600985218], [30.0, 66.23195558297333], [31.0, 47.16644649933938], [32.0, 62.641025641025706], [33.0, 63.796173657100766], [34.0, 64.31182795698929], [35.0, 76.41010498687676], [36.0, 54.49784017278623], [37.0, 81.566393442623], [38.0, 77.57988826815642], [39.0, 89.11578471279944], [40.0, 92.44567901234576], [41.0, 99.23259493670886], [42.0, 73.37027654633731], [43.0, 84.93672456575682], [44.0, 78.64492372435569], [45.0, 112.32248520710066], [46.0, 106.79364368845135], [47.0, 162.61333333333332], [48.0, 115.9698630136986], [49.0, 135.7803521779426], [50.0, 81.04583182966455], [51.0, 101.64604810996568], [52.0, 154.51802656546482], [53.0, 160.73417721518976], [54.0, 96.34607065609218], [55.0, 73.70511583011566], [56.0, 74.93108566581832], [57.0, 89.8507128309573], [58.0, 80.45753816793896], [59.0, 109.8713366690494], [60.0, 75.54878048780485], [61.0, 107.47130883301092], [62.0, 91.77099236641236], [63.0, 154.81356390164808], [64.0, 134.77982646420818], [65.0, 189.82653061224468], [1.0, 22.337349397590355]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[40.36499000000065, 76.44956999999978]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 65.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 121824.73333333334, "minX": 1.62724542E12, "maxY": 1037830.4833333333, "series": [{"data": [[1.6272456E12, 1037830.4833333333], [1.62724548E12, 310640.98333333334], [1.62724554E12, 599992.55], [1.62724542E12, 121824.73333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6272456E12, 368609.73333333334], [1.62724548E12, 758459.1666666666], [1.62724554E12, 529229.6333333333], [1.62724542E12, 297441.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6272456E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 30.0635694484274, "minX": 1.62724542E12, "maxY": 113.85982164886666, "series": [{"data": [[1.6272456E12, 66.90189313773755], [1.62724548E12, 67.19767572633528], [1.62724554E12, 113.85982164886666], [1.62724542E12, 30.0635694484274]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6272456E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 29.37262212025618, "minX": 1.62724542E12, "maxY": 104.08840012688998, "series": [{"data": [[1.6272456E12, 52.95964398573602], [1.62724548E12, 65.8371508903468], [1.62724554E12, 104.08840012688998], [1.62724542E12, 29.37262212025618]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6272456E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008959700093720718, "minX": 1.62724542E12, "maxY": 13.268895138144078, "series": [{"data": [[1.6272456E12, 13.268895138144078], [1.62724548E12, 0.008959700093720718], [1.62724554E12, 8.383807408973878], [1.62724542E12, 0.011566771819137732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6272456E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.62724542E12, "maxY": 1309.0, "series": [{"data": [[1.6272456E12, 767.0], [1.62724548E12, 323.0], [1.62724554E12, 1309.0], [1.62724542E12, 525.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6272456E12, 172.0], [1.62724548E12, 120.0], [1.62724554E12, 272.0], [1.62724542E12, 48.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6272456E12, 445.0100000000002], [1.62724548E12, 186.0], [1.62724554E12, 828.25], [1.62724542E12, 77.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6272456E12, 251.04999999999927], [1.62724548E12, 140.0], [1.62724554E12, 407.5], [1.62724542E12, 56.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6272456E12, 10.0], [1.62724548E12, 14.0], [1.62724554E12, 13.0], [1.62724542E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6272456E12, 57.0], [1.62724548E12, 67.0], [1.62724554E12, 83.0], [1.62724542E12, 28.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6272456E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 21.0, "maxY": 447.0, "series": [{"data": [[21.0, 19.0], [98.0, 14.0], [100.0, 14.0], [156.0, 12.0], [161.0, 18.0], [198.0, 167.0], [207.0, 16.0], [252.0, 15.0], [269.0, 90.0], [259.0, 52.0], [286.0, 18.0], [281.0, 41.0], [274.0, 126.5], [291.0, 29.5], [295.0, 42.5], [307.0, 18.0], [306.0, 15.0], [318.0, 37.0], [305.0, 41.0], [304.0, 136.0], [312.0, 37.0], [309.0, 27.0], [315.0, 31.0], [311.0, 66.0], [321.0, 25.0], [328.0, 19.5], [330.0, 35.0], [327.0, 36.0], [329.0, 167.0], [350.0, 22.0], [347.0, 21.0], [349.0, 39.0], [337.0, 40.0], [348.0, 26.0], [342.0, 28.0], [352.0, 29.0], [359.0, 137.0], [353.0, 106.0], [383.0, 101.0], [387.0, 29.0], [392.0, 53.0], [389.0, 36.0], [384.0, 40.0], [393.0, 50.0], [397.0, 77.0], [386.0, 89.0], [388.0, 114.5], [398.0, 44.0], [413.0, 45.0], [415.0, 64.0], [402.0, 92.5], [411.0, 93.0], [412.0, 132.0], [407.0, 63.0], [417.0, 77.0], [430.0, 63.0], [423.0, 24.0], [416.0, 82.0], [427.0, 56.0], [426.0, 82.0], [428.0, 65.0], [429.0, 69.0], [425.0, 70.0], [419.0, 72.0], [418.0, 43.0], [431.0, 73.0], [422.0, 72.0], [421.0, 80.0], [434.0, 47.0], [438.0, 33.0], [432.0, 61.0], [444.0, 33.0], [435.0, 76.0], [441.0, 50.0], [437.0, 48.0], [440.0, 72.0], [442.0, 49.0], [436.0, 52.0], [446.0, 58.0], [447.0, 83.0], [445.0, 81.0], [460.0, 51.0], [456.0, 21.0], [451.0, 38.0], [458.0, 43.0], [462.0, 52.0], [461.0, 97.0], [450.0, 59.0], [459.0, 64.0], [454.0, 67.0], [448.0, 83.0], [463.0, 72.0], [466.0, 73.0], [477.0, 56.5], [467.0, 36.0], [479.0, 38.0], [468.0, 45.0], [470.0, 48.0], [478.0, 48.0], [472.0, 51.0], [465.0, 61.0], [464.0, 83.0], [480.0, 45.0], [486.0, 38.0], [481.0, 48.0], [485.0, 71.0], [490.0, 165.0], [501.0, 29.0], [499.0, 72.0], [506.0, 37.0], [513.0, 182.0], [533.0, 63.5], [538.0, 41.0], [558.0, 114.0], [575.0, 44.0], [567.0, 88.0], [607.0, 267.0], [599.0, 44.0], [578.0, 41.0], [619.0, 220.5], [612.0, 180.5], [630.0, 93.0], [620.0, 42.0], [627.0, 59.0], [618.0, 47.0], [649.0, 46.5], [696.0, 98.0], [685.0, 144.0], [688.0, 195.0], [673.0, 93.5], [724.0, 201.0], [711.0, 56.0], [746.0, 32.0], [791.0, 74.5], [790.0, 21.0], [815.0, 27.0], [833.0, 191.0], [922.0, 38.0], [947.0, 104.5], [982.0, 53.5], [992.0, 49.0], [1056.0, 187.5], [1073.0, 59.0], [1040.0, 63.0], [1127.0, 27.0], [1148.0, 151.5], [1135.0, 65.0], [1150.0, 53.0], [1109.0, 40.0], [1158.0, 20.0], [1218.0, 73.0], [1225.0, 41.0], [1308.0, 43.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[513.0, 32.0], [533.0, 7.0], [538.0, 8.0], [558.0, 21.0], [575.0, 7.0], [567.0, 34.0], [607.0, 16.0], [599.0, 9.0], [578.0, 6.0], [619.0, 18.0], [612.0, 11.0], [630.0, 4.0], [620.0, 33.0], [627.0, 10.0], [618.0, 25.0], [649.0, 18.0], [696.0, 23.0], [685.0, 11.0], [688.0, 7.0], [673.0, 26.0], [724.0, 10.0], [711.0, 17.0], [746.0, 32.0], [791.0, 9.0], [790.0, 3.0], [815.0, 88.0], [833.0, 10.0], [922.0, 7.0], [947.0, 16.0], [982.0, 27.0], [992.0, 22.0], [1056.0, 18.0], [1073.0, 30.0], [1040.0, 18.0], [1127.0, 41.0], [1148.0, 28.0], [1135.0, 21.0], [1150.0, 17.0], [1109.0, 13.0], [1158.0, 29.5], [1218.0, 24.0], [1225.0, 40.0], [1308.0, 27.0], [198.0, 318.5], [269.0, 303.0], [259.0, 294.5], [281.0, 426.0], [291.0, 447.0], [295.0, 269.0], [304.0, 151.5], [312.0, 198.0], [309.0, 380.0], [315.0, 407.0], [311.0, 310.5], [327.0, 217.0], [329.0, 132.5], [330.0, 133.0], [350.0, 80.5], [337.0, 204.0], [348.0, 432.5], [342.0, 374.0], [352.0, 363.0], [359.0, 22.5], [353.0, 193.0], [387.0, 52.0], [388.0, 55.0], [392.0, 60.0], [398.0, 56.0], [412.0, 52.0], [407.0, 306.5], [413.0, 322.5], [429.0, 129.0], [418.0, 33.0], [432.0, 52.0], [440.0, 125.0], [446.0, 287.0], [461.0, 71.0], [466.0, 10.0], [465.0, 16.0], [485.0, 37.5], [490.0, 78.0], [501.0, 22.0], [499.0, 13.0], [506.0, 11.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1308.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 21.0, "maxY": 445.0, "series": [{"data": [[21.0, 18.0], [98.0, 13.5], [100.0, 14.0], [156.0, 12.0], [161.0, 17.0], [198.0, 163.5], [207.0, 15.0], [252.0, 14.0], [269.0, 86.0], [259.0, 52.0], [286.0, 17.0], [281.0, 40.0], [274.0, 124.0], [291.0, 28.0], [295.0, 42.0], [307.0, 18.0], [306.0, 15.0], [318.0, 36.0], [305.0, 41.0], [304.0, 133.5], [312.0, 36.0], [309.0, 26.0], [315.0, 30.0], [311.0, 65.0], [321.0, 24.5], [328.0, 19.0], [330.0, 34.0], [327.0, 34.0], [329.0, 166.0], [350.0, 22.0], [347.0, 21.0], [349.0, 38.0], [337.0, 39.0], [348.0, 25.0], [342.0, 26.0], [352.0, 28.0], [359.0, 135.0], [353.0, 104.0], [383.0, 99.0], [387.0, 29.0], [392.0, 52.0], [389.0, 35.0], [384.0, 39.0], [393.0, 49.0], [397.0, 76.0], [386.0, 88.0], [388.0, 113.5], [398.0, 44.0], [413.0, 43.0], [415.0, 62.0], [402.0, 91.5], [411.0, 92.0], [412.0, 131.0], [407.0, 61.0], [417.0, 76.0], [430.0, 62.0], [423.0, 24.0], [416.0, 81.0], [427.0, 55.0], [426.0, 81.0], [428.0, 64.0], [429.0, 68.0], [425.0, 68.0], [419.0, 71.0], [418.0, 42.0], [431.0, 71.0], [422.0, 71.0], [421.0, 78.0], [434.0, 46.5], [438.0, 32.0], [432.0, 59.0], [444.0, 32.0], [435.0, 74.0], [441.0, 49.0], [437.0, 47.0], [440.0, 69.0], [442.0, 48.0], [436.0, 52.0], [446.0, 57.0], [447.0, 82.0], [445.0, 80.0], [460.0, 49.0], [456.0, 20.0], [451.0, 37.0], [458.0, 42.0], [462.0, 51.0], [461.0, 95.0], [450.0, 56.5], [459.0, 62.0], [454.0, 66.0], [448.0, 81.0], [463.0, 70.0], [466.0, 72.0], [477.0, 55.0], [467.0, 36.0], [479.0, 37.0], [468.0, 44.0], [470.0, 47.0], [478.0, 47.0], [472.0, 50.0], [465.0, 60.0], [464.0, 81.0], [480.0, 44.0], [486.0, 37.0], [481.0, 47.0], [485.0, 69.0], [490.0, 165.0], [501.0, 28.0], [499.0, 69.5], [506.0, 36.0], [513.0, 181.5], [533.0, 63.0], [538.0, 41.0], [558.0, 114.0], [575.0, 43.0], [567.0, 87.0], [607.0, 265.0], [599.0, 43.0], [578.0, 40.0], [619.0, 220.0], [612.0, 178.5], [630.0, 92.0], [620.0, 42.0], [627.0, 57.5], [618.0, 46.0], [649.0, 45.5], [696.0, 96.0], [685.0, 143.0], [688.0, 190.0], [673.0, 92.0], [724.0, 196.0], [711.0, 55.5], [746.0, 32.0], [791.0, 72.0], [790.0, 20.0], [815.0, 26.0], [833.0, 185.0], [922.0, 37.0], [947.0, 103.0], [982.0, 53.5], [992.0, 48.0], [1056.0, 185.0], [1073.0, 58.0], [1040.0, 62.0], [1127.0, 27.0], [1148.0, 149.5], [1135.0, 65.0], [1150.0, 52.0], [1109.0, 39.0], [1158.0, 19.0], [1218.0, 71.0], [1225.0, 41.0], [1308.0, 43.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[513.0, 26.0], [533.0, 0.0], [538.0, 0.0], [558.0, 0.0], [575.0, 0.0], [567.0, 0.0], [607.0, 0.0], [599.0, 0.0], [578.0, 0.0], [619.0, 0.0], [612.0, 0.0], [630.0, 0.0], [620.0, 0.0], [627.0, 0.0], [618.0, 0.0], [649.0, 0.0], [696.0, 0.0], [685.0, 0.0], [688.0, 0.0], [673.0, 0.0], [724.0, 0.0], [711.0, 0.0], [746.0, 0.0], [791.0, 0.0], [790.0, 0.0], [815.0, 0.0], [833.0, 0.0], [922.0, 0.0], [947.0, 0.0], [982.0, 0.0], [992.0, 0.0], [1056.0, 0.0], [1073.0, 0.0], [1040.0, 0.0], [1127.0, 0.0], [1148.0, 0.0], [1135.0, 0.0], [1150.0, 0.0], [1109.0, 0.0], [1158.0, 0.0], [1218.0, 0.0], [1225.0, 0.0], [1308.0, 0.0], [198.0, 317.5], [269.0, 301.0], [259.0, 293.0], [281.0, 423.0], [291.0, 445.0], [295.0, 267.0], [304.0, 150.0], [312.0, 188.0], [309.0, 377.5], [315.0, 405.5], [311.0, 308.5], [327.0, 205.0], [329.0, 127.0], [330.0, 122.0], [350.0, 75.5], [337.0, 202.0], [348.0, 431.5], [342.0, 372.0], [352.0, 362.0], [359.0, 18.5], [353.0, 187.0], [387.0, 40.0], [388.0, 51.0], [392.0, 59.0], [398.0, 55.0], [412.0, 43.0], [407.0, 304.5], [413.0, 320.5], [429.0, 123.0], [418.0, 31.0], [432.0, 48.0], [440.0, 121.0], [446.0, 282.0], [461.0, 68.0], [466.0, 0.0], [465.0, 0.0], [485.0, 0.0], [490.0, 75.0], [501.0, 0.0], [499.0, 0.0], [506.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1308.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 174.65, "minX": 1.62724542E12, "maxY": 573.8, "series": [{"data": [[1.6272456E12, 573.8], [1.62724548E12, 444.96666666666664], [1.62724554E12, 473.25], [1.62724542E12, 174.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6272456E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 71.1, "minX": 1.62724542E12, "maxY": 444.5833333333333, "series": [{"data": [[1.6272456E12, 144.96666666666667], [1.62724548E12, 444.5833333333333], [1.62724554E12, 202.9], [1.62724542E12, 174.35]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6272456E12, 71.1], [1.62724554E12, 107.31666666666666]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.6272456E12, 358.81666666666666], [1.62724554E12, 162.63333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6272456E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 144.96666666666667, "minX": 1.62724542E12, "maxY": 444.5833333333333, "series": [{"data": [[1.6272456E12, 144.96666666666667], [1.62724548E12, 444.5833333333333], [1.62724554E12, 202.9], [1.62724542E12, 174.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6272456E12, 429.9166666666667], [1.62724554E12, 269.95]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6272456E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 144.96666666666667, "minX": 1.62724542E12, "maxY": 444.5833333333333, "series": [{"data": [[1.6272456E12, 144.96666666666667], [1.62724548E12, 444.5833333333333], [1.62724554E12, 202.9], [1.62724542E12, 174.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6272456E12, 429.9166666666667], [1.62724554E12, 269.95]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6272456E12, "title": "Total Transactions Per Second"}},
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

