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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 4846.0, "series": [{"data": [[0.0, 11.0], [0.1, 13.0], [0.2, 14.0], [0.3, 14.0], [0.4, 15.0], [0.5, 15.0], [0.6, 15.0], [0.7, 15.0], [0.8, 15.0], [0.9, 15.0], [1.0, 16.0], [1.1, 16.0], [1.2, 16.0], [1.3, 16.0], [1.4, 16.0], [1.5, 16.0], [1.6, 16.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 18.0], [2.6, 18.0], [2.7, 18.0], [2.8, 18.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 18.0], [3.4, 19.0], [3.5, 19.0], [3.6, 19.0], [3.7, 19.0], [3.8, 19.0], [3.9, 19.0], [4.0, 19.0], [4.1, 19.0], [4.2, 19.0], [4.3, 19.0], [4.4, 20.0], [4.5, 20.0], [4.6, 20.0], [4.7, 20.0], [4.8, 20.0], [4.9, 20.0], [5.0, 20.0], [5.1, 20.0], [5.2, 20.0], [5.3, 20.0], [5.4, 21.0], [5.5, 21.0], [5.6, 21.0], [5.7, 21.0], [5.8, 21.0], [5.9, 21.0], [6.0, 21.0], [6.1, 21.0], [6.2, 21.0], [6.3, 21.0], [6.4, 21.0], [6.5, 22.0], [6.6, 22.0], [6.7, 22.0], [6.8, 22.0], [6.9, 22.0], [7.0, 22.0], [7.1, 22.0], [7.2, 22.0], [7.3, 22.0], [7.4, 22.0], [7.5, 22.0], [7.6, 22.0], [7.7, 23.0], [7.8, 23.0], [7.9, 23.0], [8.0, 23.0], [8.1, 23.0], [8.2, 23.0], [8.3, 23.0], [8.4, 23.0], [8.5, 23.0], [8.6, 23.0], [8.7, 23.0], [8.8, 23.0], [8.9, 24.0], [9.0, 24.0], [9.1, 24.0], [9.2, 24.0], [9.3, 24.0], [9.4, 24.0], [9.5, 24.0], [9.6, 24.0], [9.7, 24.0], [9.8, 24.0], [9.9, 24.0], [10.0, 24.0], [10.1, 25.0], [10.2, 25.0], [10.3, 25.0], [10.4, 25.0], [10.5, 25.0], [10.6, 25.0], [10.7, 25.0], [10.8, 25.0], [10.9, 25.0], [11.0, 25.0], [11.1, 25.0], [11.2, 25.0], [11.3, 25.0], [11.4, 26.0], [11.5, 26.0], [11.6, 26.0], [11.7, 26.0], [11.8, 26.0], [11.9, 26.0], [12.0, 26.0], [12.1, 26.0], [12.2, 26.0], [12.3, 26.0], [12.4, 26.0], [12.5, 27.0], [12.6, 27.0], [12.7, 27.0], [12.8, 27.0], [12.9, 27.0], [13.0, 27.0], [13.1, 27.0], [13.2, 27.0], [13.3, 27.0], [13.4, 27.0], [13.5, 27.0], [13.6, 27.0], [13.7, 28.0], [13.8, 28.0], [13.9, 28.0], [14.0, 28.0], [14.1, 28.0], [14.2, 28.0], [14.3, 28.0], [14.4, 28.0], [14.5, 28.0], [14.6, 28.0], [14.7, 28.0], [14.8, 29.0], [14.9, 29.0], [15.0, 29.0], [15.1, 29.0], [15.2, 29.0], [15.3, 29.0], [15.4, 29.0], [15.5, 29.0], [15.6, 29.0], [15.7, 29.0], [15.8, 29.0], [15.9, 29.0], [16.0, 29.0], [16.1, 30.0], [16.2, 30.0], [16.3, 30.0], [16.4, 30.0], [16.5, 30.0], [16.6, 30.0], [16.7, 30.0], [16.8, 30.0], [16.9, 30.0], [17.0, 30.0], [17.1, 30.0], [17.2, 30.0], [17.3, 31.0], [17.4, 31.0], [17.5, 31.0], [17.6, 31.0], [17.7, 31.0], [17.8, 31.0], [17.9, 31.0], [18.0, 31.0], [18.1, 31.0], [18.2, 31.0], [18.3, 31.0], [18.4, 31.0], [18.5, 32.0], [18.6, 32.0], [18.7, 32.0], [18.8, 32.0], [18.9, 32.0], [19.0, 32.0], [19.1, 32.0], [19.2, 32.0], [19.3, 32.0], [19.4, 32.0], [19.5, 32.0], [19.6, 32.0], [19.7, 32.0], [19.8, 33.0], [19.9, 33.0], [20.0, 33.0], [20.1, 33.0], [20.2, 33.0], [20.3, 33.0], [20.4, 33.0], [20.5, 33.0], [20.6, 33.0], [20.7, 33.0], [20.8, 33.0], [20.9, 34.0], [21.0, 34.0], [21.1, 34.0], [21.2, 34.0], [21.3, 34.0], [21.4, 34.0], [21.5, 34.0], [21.6, 34.0], [21.7, 34.0], [21.8, 34.0], [21.9, 34.0], [22.0, 35.0], [22.1, 35.0], [22.2, 35.0], [22.3, 35.0], [22.4, 35.0], [22.5, 35.0], [22.6, 35.0], [22.7, 35.0], [22.8, 35.0], [22.9, 35.0], [23.0, 35.0], [23.1, 36.0], [23.2, 36.0], [23.3, 36.0], [23.4, 36.0], [23.5, 36.0], [23.6, 36.0], [23.7, 36.0], [23.8, 36.0], [23.9, 36.0], [24.0, 36.0], [24.1, 36.0], [24.2, 37.0], [24.3, 37.0], [24.4, 37.0], [24.5, 37.0], [24.6, 37.0], [24.7, 37.0], [24.8, 37.0], [24.9, 37.0], [25.0, 37.0], [25.1, 37.0], [25.2, 38.0], [25.3, 38.0], [25.4, 38.0], [25.5, 38.0], [25.6, 38.0], [25.7, 38.0], [25.8, 38.0], [25.9, 38.0], [26.0, 38.0], [26.1, 38.0], [26.2, 38.0], [26.3, 38.0], [26.4, 39.0], [26.5, 39.0], [26.6, 39.0], [26.7, 39.0], [26.8, 39.0], [26.9, 39.0], [27.0, 39.0], [27.1, 39.0], [27.2, 39.0], [27.3, 39.0], [27.4, 40.0], [27.5, 40.0], [27.6, 40.0], [27.7, 40.0], [27.8, 40.0], [27.9, 40.0], [28.0, 40.0], [28.1, 40.0], [28.2, 40.0], [28.3, 40.0], [28.4, 41.0], [28.5, 41.0], [28.6, 41.0], [28.7, 41.0], [28.8, 41.0], [28.9, 41.0], [29.0, 41.0], [29.1, 41.0], [29.2, 41.0], [29.3, 41.0], [29.4, 42.0], [29.5, 42.0], [29.6, 42.0], [29.7, 42.0], [29.8, 42.0], [29.9, 42.0], [30.0, 42.0], [30.1, 42.0], [30.2, 42.0], [30.3, 42.0], [30.4, 43.0], [30.5, 43.0], [30.6, 43.0], [30.7, 43.0], [30.8, 43.0], [30.9, 43.0], [31.0, 43.0], [31.1, 43.0], [31.2, 43.0], [31.3, 43.0], [31.4, 44.0], [31.5, 44.0], [31.6, 44.0], [31.7, 44.0], [31.8, 44.0], [31.9, 44.0], [32.0, 44.0], [32.1, 44.0], [32.2, 44.0], [32.3, 44.0], [32.4, 45.0], [32.5, 45.0], [32.6, 45.0], [32.7, 45.0], [32.8, 45.0], [32.9, 45.0], [33.0, 45.0], [33.1, 45.0], [33.2, 45.0], [33.3, 45.0], [33.4, 46.0], [33.5, 46.0], [33.6, 46.0], [33.7, 46.0], [33.8, 46.0], [33.9, 46.0], [34.0, 46.0], [34.1, 46.0], [34.2, 46.0], [34.3, 46.0], [34.4, 46.0], [34.5, 47.0], [34.6, 47.0], [34.7, 47.0], [34.8, 47.0], [34.9, 47.0], [35.0, 47.0], [35.1, 47.0], [35.2, 47.0], [35.3, 47.0], [35.4, 47.0], [35.5, 48.0], [35.6, 48.0], [35.7, 48.0], [35.8, 48.0], [35.9, 48.0], [36.0, 48.0], [36.1, 48.0], [36.2, 48.0], [36.3, 48.0], [36.4, 49.0], [36.5, 49.0], [36.6, 49.0], [36.7, 49.0], [36.8, 49.0], [36.9, 49.0], [37.0, 49.0], [37.1, 49.0], [37.2, 49.0], [37.3, 50.0], [37.4, 50.0], [37.5, 50.0], [37.6, 50.0], [37.7, 50.0], [37.8, 50.0], [37.9, 50.0], [38.0, 50.0], [38.1, 50.0], [38.2, 51.0], [38.3, 51.0], [38.4, 51.0], [38.5, 51.0], [38.6, 51.0], [38.7, 51.0], [38.8, 51.0], [38.9, 52.0], [39.0, 52.0], [39.1, 52.0], [39.2, 52.0], [39.3, 52.0], [39.4, 52.0], [39.5, 52.0], [39.6, 52.0], [39.7, 53.0], [39.8, 53.0], [39.9, 53.0], [40.0, 53.0], [40.1, 53.0], [40.2, 53.0], [40.3, 53.0], [40.4, 54.0], [40.5, 54.0], [40.6, 54.0], [40.7, 54.0], [40.8, 54.0], [40.9, 54.0], [41.0, 54.0], [41.1, 55.0], [41.2, 55.0], [41.3, 55.0], [41.4, 55.0], [41.5, 55.0], [41.6, 55.0], [41.7, 55.0], [41.8, 56.0], [41.9, 56.0], [42.0, 56.0], [42.1, 56.0], [42.2, 56.0], [42.3, 56.0], [42.4, 57.0], [42.5, 57.0], [42.6, 57.0], [42.7, 57.0], [42.8, 57.0], [42.9, 57.0], [43.0, 57.0], [43.1, 58.0], [43.2, 58.0], [43.3, 58.0], [43.4, 58.0], [43.5, 58.0], [43.6, 58.0], [43.7, 59.0], [43.8, 59.0], [43.9, 59.0], [44.0, 59.0], [44.1, 59.0], [44.2, 60.0], [44.3, 60.0], [44.4, 60.0], [44.5, 60.0], [44.6, 60.0], [44.7, 60.0], [44.8, 61.0], [44.9, 61.0], [45.0, 61.0], [45.1, 61.0], [45.2, 61.0], [45.3, 61.0], [45.4, 62.0], [45.5, 62.0], [45.6, 62.0], [45.7, 62.0], [45.8, 62.0], [45.9, 63.0], [46.0, 63.0], [46.1, 63.0], [46.2, 63.0], [46.3, 63.0], [46.4, 64.0], [46.5, 64.0], [46.6, 64.0], [46.7, 64.0], [46.8, 64.0], [46.9, 64.0], [47.0, 65.0], [47.1, 65.0], [47.2, 65.0], [47.3, 65.0], [47.4, 66.0], [47.5, 66.0], [47.6, 66.0], [47.7, 66.0], [47.8, 67.0], [47.9, 67.0], [48.0, 67.0], [48.1, 67.0], [48.2, 67.0], [48.3, 68.0], [48.4, 68.0], [48.5, 68.0], [48.6, 68.0], [48.7, 68.0], [48.8, 69.0], [48.9, 69.0], [49.0, 69.0], [49.1, 69.0], [49.2, 70.0], [49.3, 70.0], [49.4, 70.0], [49.5, 70.0], [49.6, 71.0], [49.7, 71.0], [49.8, 71.0], [49.9, 71.0], [50.0, 72.0], [50.1, 72.0], [50.2, 72.0], [50.3, 73.0], [50.4, 73.0], [50.5, 73.0], [50.6, 73.0], [50.7, 74.0], [50.8, 74.0], [50.9, 74.0], [51.0, 75.0], [51.1, 75.0], [51.2, 75.0], [51.3, 75.0], [51.4, 76.0], [51.5, 76.0], [51.6, 76.0], [51.7, 76.0], [51.8, 77.0], [51.9, 77.0], [52.0, 77.0], [52.1, 78.0], [52.2, 78.0], [52.3, 78.0], [52.4, 79.0], [52.5, 79.0], [52.6, 79.0], [52.7, 80.0], [52.8, 80.0], [52.9, 80.0], [53.0, 80.0], [53.1, 81.0], [53.2, 81.0], [53.3, 81.0], [53.4, 82.0], [53.5, 82.0], [53.6, 82.0], [53.7, 83.0], [53.8, 83.0], [53.9, 83.0], [54.0, 84.0], [54.1, 84.0], [54.2, 84.0], [54.3, 84.0], [54.4, 85.0], [54.5, 85.0], [54.6, 85.0], [54.7, 86.0], [54.8, 86.0], [54.9, 86.0], [55.0, 87.0], [55.1, 87.0], [55.2, 87.0], [55.3, 88.0], [55.4, 88.0], [55.5, 88.0], [55.6, 89.0], [55.7, 89.0], [55.8, 89.0], [55.9, 90.0], [56.0, 90.0], [56.1, 90.0], [56.2, 91.0], [56.3, 91.0], [56.4, 91.0], [56.5, 92.0], [56.6, 92.0], [56.7, 92.0], [56.8, 93.0], [56.9, 93.0], [57.0, 93.0], [57.1, 94.0], [57.2, 94.0], [57.3, 95.0], [57.4, 95.0], [57.5, 95.0], [57.6, 96.0], [57.7, 96.0], [57.8, 96.0], [57.9, 97.0], [58.0, 97.0], [58.1, 98.0], [58.2, 98.0], [58.3, 98.0], [58.4, 99.0], [58.5, 99.0], [58.6, 99.0], [58.7, 100.0], [58.8, 100.0], [58.9, 100.0], [59.0, 101.0], [59.1, 101.0], [59.2, 101.0], [59.3, 102.0], [59.4, 102.0], [59.5, 102.0], [59.6, 103.0], [59.7, 103.0], [59.8, 103.0], [59.9, 103.0], [60.0, 104.0], [60.1, 104.0], [60.2, 104.0], [60.3, 105.0], [60.4, 105.0], [60.5, 106.0], [60.6, 106.0], [60.7, 106.0], [60.8, 107.0], [60.9, 107.0], [61.0, 108.0], [61.1, 108.0], [61.2, 109.0], [61.3, 109.0], [61.4, 109.0], [61.5, 110.0], [61.6, 110.0], [61.7, 111.0], [61.8, 111.0], [61.9, 111.0], [62.0, 112.0], [62.1, 112.0], [62.2, 113.0], [62.3, 113.0], [62.4, 113.0], [62.5, 114.0], [62.6, 114.0], [62.7, 115.0], [62.8, 115.0], [62.9, 115.0], [63.0, 116.0], [63.1, 116.0], [63.2, 117.0], [63.3, 117.0], [63.4, 117.0], [63.5, 118.0], [63.6, 118.0], [63.7, 118.0], [63.8, 119.0], [63.9, 119.0], [64.0, 120.0], [64.1, 120.0], [64.2, 120.0], [64.3, 121.0], [64.4, 121.0], [64.5, 121.0], [64.6, 122.0], [64.7, 122.0], [64.8, 123.0], [64.9, 123.0], [65.0, 123.0], [65.1, 124.0], [65.2, 124.0], [65.3, 125.0], [65.4, 125.0], [65.5, 125.0], [65.6, 126.0], [65.7, 126.0], [65.8, 127.0], [65.9, 127.0], [66.0, 127.0], [66.1, 128.0], [66.2, 128.0], [66.3, 129.0], [66.4, 129.0], [66.5, 130.0], [66.6, 130.0], [66.7, 131.0], [66.8, 131.0], [66.9, 131.0], [67.0, 132.0], [67.1, 132.0], [67.2, 133.0], [67.3, 133.0], [67.4, 134.0], [67.5, 134.0], [67.6, 134.0], [67.7, 135.0], [67.8, 135.0], [67.9, 136.0], [68.0, 136.0], [68.1, 137.0], [68.2, 137.0], [68.3, 137.0], [68.4, 138.0], [68.5, 138.0], [68.6, 139.0], [68.7, 139.0], [68.8, 140.0], [68.9, 140.0], [69.0, 140.0], [69.1, 141.0], [69.2, 141.0], [69.3, 142.0], [69.4, 142.0], [69.5, 143.0], [69.6, 143.0], [69.7, 144.0], [69.8, 144.0], [69.9, 144.0], [70.0, 145.0], [70.1, 145.0], [70.2, 146.0], [70.3, 146.0], [70.4, 147.0], [70.5, 147.0], [70.6, 148.0], [70.7, 148.0], [70.8, 149.0], [70.9, 149.0], [71.0, 149.0], [71.1, 150.0], [71.2, 150.0], [71.3, 151.0], [71.4, 151.0], [71.5, 152.0], [71.6, 152.0], [71.7, 153.0], [71.8, 153.0], [71.9, 153.0], [72.0, 154.0], [72.1, 154.0], [72.2, 155.0], [72.3, 155.0], [72.4, 156.0], [72.5, 156.0], [72.6, 157.0], [72.7, 157.0], [72.8, 158.0], [72.9, 158.0], [73.0, 159.0], [73.1, 159.0], [73.2, 159.0], [73.3, 160.0], [73.4, 160.0], [73.5, 161.0], [73.6, 161.0], [73.7, 162.0], [73.8, 162.0], [73.9, 163.0], [74.0, 163.0], [74.1, 164.0], [74.2, 164.0], [74.3, 165.0], [74.4, 165.0], [74.5, 166.0], [74.6, 166.0], [74.7, 167.0], [74.8, 167.0], [74.9, 167.0], [75.0, 168.0], [75.1, 168.0], [75.2, 169.0], [75.3, 169.0], [75.4, 170.0], [75.5, 170.0], [75.6, 171.0], [75.7, 171.0], [75.8, 172.0], [75.9, 172.0], [76.0, 173.0], [76.1, 173.0], [76.2, 174.0], [76.3, 174.0], [76.4, 175.0], [76.5, 175.0], [76.6, 176.0], [76.7, 177.0], [76.8, 177.0], [76.9, 178.0], [77.0, 178.0], [77.1, 179.0], [77.2, 179.0], [77.3, 180.0], [77.4, 181.0], [77.5, 181.0], [77.6, 182.0], [77.7, 183.0], [77.8, 183.0], [77.9, 184.0], [78.0, 184.0], [78.1, 185.0], [78.2, 185.0], [78.3, 186.0], [78.4, 187.0], [78.5, 187.0], [78.6, 188.0], [78.7, 188.0], [78.8, 189.0], [78.9, 189.0], [79.0, 190.0], [79.1, 191.0], [79.2, 191.0], [79.3, 192.0], [79.4, 193.0], [79.5, 193.0], [79.6, 194.0], [79.7, 195.0], [79.8, 195.0], [79.9, 196.0], [80.0, 197.0], [80.1, 198.0], [80.2, 198.0], [80.3, 199.0], [80.4, 199.0], [80.5, 200.0], [80.6, 201.0], [80.7, 202.0], [80.8, 202.0], [80.9, 203.0], [81.0, 204.0], [81.1, 204.0], [81.2, 205.0], [81.3, 205.0], [81.4, 206.0], [81.5, 207.0], [81.6, 207.0], [81.7, 208.0], [81.8, 209.0], [81.9, 210.0], [82.0, 211.0], [82.1, 212.0], [82.2, 213.0], [82.3, 213.0], [82.4, 214.0], [82.5, 215.0], [82.6, 216.0], [82.7, 217.0], [82.8, 218.0], [82.9, 218.0], [83.0, 219.0], [83.1, 220.0], [83.2, 221.0], [83.3, 222.0], [83.4, 223.0], [83.5, 223.0], [83.6, 224.0], [83.7, 225.0], [83.8, 226.0], [83.9, 227.0], [84.0, 228.0], [84.1, 229.0], [84.2, 230.0], [84.3, 231.0], [84.4, 232.0], [84.5, 233.0], [84.6, 234.0], [84.7, 235.0], [84.8, 236.0], [84.9, 237.0], [85.0, 238.0], [85.1, 239.0], [85.2, 240.0], [85.3, 241.0], [85.4, 242.0], [85.5, 244.0], [85.6, 245.0], [85.7, 246.0], [85.8, 247.0], [85.9, 249.0], [86.0, 250.0], [86.1, 251.0], [86.2, 253.0], [86.3, 254.0], [86.4, 256.0], [86.5, 257.0], [86.6, 258.0], [86.7, 260.0], [86.8, 261.0], [86.9, 263.0], [87.0, 264.0], [87.1, 266.0], [87.2, 268.0], [87.3, 269.0], [87.4, 271.0], [87.5, 272.0], [87.6, 274.0], [87.7, 276.0], [87.8, 278.0], [87.9, 279.0], [88.0, 281.0], [88.1, 282.0], [88.2, 285.0], [88.3, 286.0], [88.4, 288.0], [88.5, 290.0], [88.6, 293.0], [88.7, 294.0], [88.8, 296.0], [88.9, 298.0], [89.0, 300.0], [89.1, 303.0], [89.2, 305.0], [89.3, 307.0], [89.4, 308.0], [89.5, 310.0], [89.6, 312.0], [89.7, 315.0], [89.8, 317.0], [89.9, 320.0], [90.0, 322.0], [90.1, 324.0], [90.2, 326.0], [90.3, 329.0], [90.4, 331.0], [90.5, 333.0], [90.6, 336.0], [90.7, 338.0], [90.8, 341.0], [90.9, 343.0], [91.0, 346.0], [91.1, 348.0], [91.2, 351.0], [91.3, 353.0], [91.4, 356.0], [91.5, 358.0], [91.6, 360.0], [91.7, 363.0], [91.8, 365.0], [91.9, 367.0], [92.0, 370.0], [92.1, 372.0], [92.2, 375.0], [92.3, 378.0], [92.4, 381.0], [92.5, 383.0], [92.6, 386.0], [92.7, 389.0], [92.8, 391.0], [92.9, 394.0], [93.0, 397.0], [93.1, 400.0], [93.2, 403.0], [93.3, 405.0], [93.4, 408.0], [93.5, 410.0], [93.6, 413.0], [93.7, 416.0], [93.8, 418.0], [93.9, 421.0], [94.0, 423.0], [94.1, 425.0], [94.2, 427.0], [94.3, 429.0], [94.4, 432.0], [94.5, 434.0], [94.6, 436.0], [94.7, 438.0], [94.8, 440.0], [94.9, 442.0], [95.0, 444.0], [95.1, 445.0], [95.2, 447.0], [95.3, 449.0], [95.4, 451.0], [95.5, 454.0], [95.6, 456.0], [95.7, 458.0], [95.8, 460.0], [95.9, 462.0], [96.0, 465.0], [96.1, 467.0], [96.2, 469.0], [96.3, 472.0], [96.4, 474.0], [96.5, 476.0], [96.6, 478.0], [96.7, 480.0], [96.8, 482.0], [96.9, 484.0], [97.0, 486.0], [97.1, 488.0], [97.2, 490.0], [97.3, 493.0], [97.4, 496.0], [97.5, 498.0], [97.6, 501.0], [97.7, 504.0], [97.8, 507.0], [97.9, 510.0], [98.0, 512.0], [98.1, 515.0], [98.2, 518.0], [98.3, 521.0], [98.4, 526.0], [98.5, 529.0], [98.6, 534.0], [98.7, 539.0], [98.8, 545.0], [98.9, 551.0], [99.0, 557.0], [99.1, 566.0], [99.2, 574.0], [99.3, 582.0], [99.4, 592.0], [99.5, 610.0], [99.6, 629.0], [99.7, 664.0], [99.8, 712.0], [99.9, 833.0], [100.0, 4846.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 69437.0, "series": [{"data": [[0.0, 69437.0], [2100.0, 14.0], [2300.0, 4.0], [2200.0, 5.0], [600.0, 394.0], [700.0, 124.0], [200.0, 10123.0], [800.0, 47.0], [3300.0, 2.0], [3500.0, 2.0], [900.0, 23.0], [1000.0, 20.0], [1100.0, 10.0], [300.0, 4887.0], [1200.0, 6.0], [4800.0, 1.0], [4700.0, 1.0], [400.0, 5295.0], [100.0, 25822.0], [500.0, 2251.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 23.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 94593.0, "series": [{"data": [[0.0, 94593.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 557.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 23.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 23295.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.406389463372177, "minX": 1.62748536E12, "maxY": 97.64902852418331, "series": [{"data": [[1.62748542E12, 28.394378721100853], [1.62748536E12, 11.406389463372177], [1.62748554E12, 68.44894167070589], [1.62748548E12, 49.01825505656492], [1.62748566E12, 97.64902852418331], [1.6274856E12, 88.92558080701592]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748566E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.875722543352587, "minX": 1.0, "maxY": 238.13491414554366, "series": [{"data": [[2.0, 21.63432835820897], [3.0, 23.188829787234038], [4.0, 16.875722543352587], [5.0, 17.47505938242282], [6.0, 20.521546961325967], [7.0, 18.848540145985417], [8.0, 20.472125435540068], [9.0, 23.712673611111086], [10.0, 24.32739059967584], [11.0, 27.164462809917374], [12.0, 29.741507870753928], [13.0, 29.67764165390506], [14.0, 32.07253086419756], [15.0, 34.06636500754148], [16.0, 35.82520630157536], [17.0, 37.32671081677705], [18.0, 40.17607726597331], [19.0, 40.3876244665718], [20.0, 41.904628330995806], [21.0, 49.03049257232212], [22.0, 50.0393343419062], [23.0, 54.35303913405495], [24.0, 55.710390567428135], [25.0, 54.6835164835165], [26.0, 57.049228508449616], [27.0, 57.18497519489725], [28.0, 65.34741784037573], [29.0, 64.34952170713753], [30.0, 63.54263565891478], [31.0, 67.77883211678828], [32.0, 71.69644208932624], [33.0, 80.69736842105249], [34.0, 86.40285954583673], [35.0, 91.52143482064751], [36.0, 94.93992932862169], [37.0, 93.97773972602741], [38.0, 96.31098072087164], [39.0, 95.45187601957578], [40.0, 95.29912490055686], [41.0, 107.80683918669139], [42.0, 133.0154355016537], [43.0, 144.3775510204081], [44.0, 141.04113924050623], [45.0, 139.54729729729735], [46.0, 112.7374897456933], [47.0, 113.57429718875491], [48.0, 119.0774246128768], [49.0, 122.09], [50.0, 123.94297520661154], [51.0, 125.74426229508182], [52.0, 130.9932489451476], [53.0, 131.3635614179719], [54.0, 126.68533123028395], [55.0, 133.87005649717523], [56.0, 139.30182421227173], [57.0, 134.20602218700483], [58.0, 134.63706563706558], [59.0, 142.12580128205133], [60.0, 137.63993831919797], [61.0, 145.17549407114632], [62.0, 144.35456638526472], [63.0, 143.58238420653007], [64.0, 152.23732904263866], [65.0, 152.21901792673438], [66.0, 156.14703557312248], [67.0, 161.1271255060727], [68.0, 158.7659906396258], [69.0, 160.6223404255319], [70.0, 155.01205727204194], [71.0, 160.96091954023018], [72.0, 162.02965779467698], [73.0, 196.48226950354635], [74.0, 193.32280701754382], [75.0, 193.87902523933846], [76.0, 197.07583774250463], [77.0, 203.4748898678416], [78.0, 206.51013215859018], [79.0, 207.9261213720318], [80.0, 213.0345744680851], [81.0, 214.2639011473965], [82.0, 219.0713012477717], [83.0, 224.80720720720737], [84.0, 221.38839285714246], [85.0, 227.93286219081256], [86.0, 221.86395147313695], [87.0, 232.6608391608391], [88.0, 225.94290657439421], [89.0, 227.49999999999994], [90.0, 216.6111566858082], [91.0, 223.67366720516978], [92.0, 225.50372825186415], [93.0, 228.54262295081938], [94.0, 226.0694006309149], [95.0, 223.6337805840571], [96.0, 238.13491414554366], [97.0, 231.3244979919677], [98.0, 227.89159465828754], [99.0, 234.83241973375075], [100.0, 237.39255236617558], [1.0, 57.81132075471699]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.72454164837756, 127.72585845966785]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 26864.683333333334, "minX": 1.62748536E12, "maxY": 736749.9, "series": [{"data": [[1.62748542E12, 287404.8], [1.62748536E12, 213972.51666666666], [1.62748554E12, 267419.9], [1.62748548E12, 243431.06666666668], [1.62748566E12, 26864.683333333334], [1.6274856E12, 243828.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62748542E12, 736749.9], [1.62748536E12, 523352.76666666666], [1.62748554E12, 705133.4], [1.62748548E12, 664687.0666666667], [1.62748566E12, 68901.18333333333], [1.6274856E12, 675539.2166666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748566E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 28.152552519865072, "minX": 1.62748536E12, "maxY": 234.46506821000392, "series": [{"data": [[1.62748542E12, 66.17764633109084], [1.62748536E12, 28.152552519865072], [1.62748554E12, 165.7220471804815], [1.62748548E12, 124.87080047994462], [1.62748566E12, 234.46506821000392], [1.6274856E12, 224.2539106969674]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748566E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 26.360781539131438, "minX": 1.62748536E12, "maxY": 230.51260851591547, "series": [{"data": [[1.62748542E12, 63.690675017397275], [1.62748536E12, 26.360781539131438], [1.62748554E12, 163.0781628696081], [1.62748548E12, 121.78076791223839], [1.62748566E12, 230.51260851591547], [1.6274856E12, 221.1089092212347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748566E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06503755306411219, "minX": 1.62748536E12, "maxY": 3.040603786313617, "series": [{"data": [[1.62748542E12, 0.9616871568854847], [1.62748536E12, 0.06503755306411219], [1.62748554E12, 1.7415172079495844], [1.62748548E12, 2.5339818306479276], [1.62748566E12, 1.0165357585779253], [1.6274856E12, 3.040603786313617]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748566E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.62748536E12, "maxY": 4846.0, "series": [{"data": [[1.62748542E12, 1251.0], [1.62748536E12, 479.0], [1.62748554E12, 671.0], [1.62748548E12, 4846.0], [1.62748566E12, 767.0], [1.6274856E12, 1096.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62748542E12, 80.0], [1.62748536E12, 42.0], [1.62748554E12, 234.0], [1.62748548E12, 193.0], [1.62748566E12, 434.0], [1.6274856E12, 319.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62748542E12, 120.0], [1.62748536E12, 58.0], [1.62748554E12, 370.0], [1.62748548E12, 437.0], [1.62748566E12, 574.0], [1.6274856E12, 584.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62748542E12, 92.0], [1.62748536E12, 47.0], [1.62748554E12, 277.0], [1.62748548E12, 245.34999999999854], [1.62748566E12, 483.0], [1.6274856E12, 416.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62748542E12, 13.0], [1.62748536E12, 11.0], [1.62748554E12, 15.0], [1.62748548E12, 13.0], [1.62748566E12, 37.0], [1.6274856E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62748542E12, 50.0], [1.62748536E12, 26.0], [1.62748554E12, 121.0], [1.62748548E12, 81.0], [1.62748566E12, 225.0], [1.6274856E12, 107.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748566E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.0, "minX": 19.0, "maxY": 526.0, "series": [{"data": [[19.0, 51.0], [24.0, 38.5], [49.0, 23.0], [81.0, 21.0], [90.0, 19.0], [96.0, 19.0], [164.0, 17.0], [197.0, 16.0], [237.0, 16.0], [232.0, 16.0], [244.0, 30.0], [255.0, 16.0], [271.0, 34.0], [261.0, 52.0], [280.0, 17.0], [276.0, 17.0], [275.0, 19.0], [283.0, 27.5], [302.0, 49.0], [288.0, 32.0], [301.0, 232.5], [309.0, 17.0], [305.0, 18.0], [319.0, 42.5], [322.0, 36.0], [330.0, 45.0], [320.0, 37.0], [333.0, 76.5], [341.0, 20.5], [342.0, 38.5], [350.0, 39.0], [349.0, 33.0], [344.0, 34.0], [353.0, 26.0], [365.0, 36.0], [357.0, 42.0], [366.0, 122.0], [364.0, 51.0], [359.0, 37.0], [352.0, 133.0], [355.0, 41.0], [356.0, 40.0], [363.0, 50.5], [382.0, 49.0], [368.0, 25.0], [372.0, 20.0], [374.0, 68.0], [373.0, 34.0], [381.0, 20.0], [377.0, 21.0], [378.0, 46.0], [369.0, 46.0], [380.0, 38.0], [376.0, 53.0], [383.0, 116.0], [386.0, 58.5], [394.0, 27.0], [393.0, 64.5], [395.0, 36.0], [384.0, 81.0], [385.0, 97.5], [391.0, 33.0], [392.0, 34.0], [388.0, 40.0], [390.0, 77.0], [398.0, 83.0], [399.0, 44.0], [387.0, 36.0], [396.0, 35.0], [397.0, 271.0], [402.0, 56.0], [406.0, 25.0], [411.0, 31.0], [405.0, 52.0], [404.0, 126.0], [407.0, 69.5], [409.0, 101.0], [403.0, 123.0], [413.0, 50.0], [415.0, 82.0], [408.0, 85.0], [414.0, 90.0], [400.0, 50.0], [401.0, 120.0], [430.0, 25.0], [416.0, 29.0], [423.0, 32.0], [422.0, 103.0], [420.0, 151.0], [421.0, 162.0], [431.0, 29.0], [429.0, 74.0], [428.0, 163.0], [419.0, 52.0], [425.0, 102.0], [426.0, 177.0], [427.0, 190.0], [418.0, 112.0], [424.0, 92.0], [434.0, 96.0], [439.0, 34.0], [436.0, 91.5], [433.0, 98.0], [438.0, 40.0], [437.0, 127.0], [444.0, 53.0], [443.0, 132.0], [442.0, 123.0], [446.0, 112.0], [447.0, 152.0], [440.0, 222.5], [435.0, 48.0], [432.0, 75.0], [461.0, 38.0], [454.0, 52.0], [452.0, 67.5], [453.0, 64.0], [456.0, 43.0], [457.0, 49.0], [463.0, 42.0], [462.0, 57.0], [460.0, 44.0], [451.0, 135.5], [448.0, 65.0], [450.0, 62.5], [449.0, 121.0], [459.0, 53.0], [466.0, 47.0], [479.0, 38.0], [470.0, 48.0], [464.0, 42.0], [472.0, 52.0], [468.0, 67.0], [469.0, 61.0], [477.0, 55.0], [478.0, 148.0], [474.0, 56.0], [473.0, 60.0], [482.0, 40.0], [486.0, 64.0], [484.0, 144.0], [487.0, 139.0], [494.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[244.0, 156.0], [271.0, 59.0], [261.0, 50.0], [283.0, 54.0], [302.0, 41.0], [288.0, 56.0], [301.0, 143.0], [319.0, 39.0], [322.0, 49.0], [330.0, 56.0], [320.0, 40.0], [333.0, 344.0], [342.0, 204.0], [350.0, 468.0], [341.0, 437.0], [349.0, 461.0], [344.0, 520.0], [353.0, 198.0], [365.0, 196.0], [357.0, 410.0], [366.0, 135.0], [364.0, 434.0], [359.0, 526.0], [352.0, 371.0], [355.0, 483.0], [356.0, 477.0], [363.0, 471.0], [380.0, 216.0], [376.0, 507.5], [369.0, 97.0], [374.0, 486.0], [368.0, 296.0], [373.0, 395.0], [383.0, 287.0], [372.0, 475.0], [382.0, 514.0], [386.0, 223.0], [399.0, 225.0], [392.0, 431.5], [393.0, 436.5], [388.0, 150.0], [398.0, 356.5], [391.0, 231.0], [387.0, 400.5], [396.0, 466.0], [397.0, 70.5], [394.0, 180.5], [395.0, 472.0], [390.0, 429.0], [384.0, 221.0], [385.0, 461.5], [403.0, 141.0], [407.0, 210.5], [405.0, 156.0], [404.0, 198.0], [409.0, 146.5], [411.0, 244.0], [408.0, 199.0], [400.0, 164.0], [402.0, 179.0], [401.0, 174.5], [415.0, 186.0], [414.0, 197.0], [413.0, 219.5], [419.0, 158.0], [425.0, 180.0], [418.0, 221.0], [424.0, 185.5], [422.0, 148.0], [423.0, 269.0], [416.0, 105.0], [426.0, 155.0], [427.0, 278.0], [429.0, 132.5], [428.0, 278.0], [420.0, 103.5], [421.0, 167.0], [444.0, 57.0], [442.0, 70.0], [443.0, 107.0], [434.0, 201.5], [433.0, 91.0], [432.0, 115.0], [446.0, 243.0], [447.0, 122.0], [440.0, 173.5], [436.0, 399.0], [449.0, 114.0], [448.0, 110.5], [452.0, 90.0], [457.0, 99.0], [451.0, 101.0], [450.0, 163.5], [454.0, 111.0], [478.0, 69.0], [468.0, 54.0], [484.0, 116.5], [487.0, 59.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 494.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 19.0, "maxY": 525.0, "series": [{"data": [[19.0, 34.0], [24.0, 25.5], [49.0, 19.0], [81.0, 18.0], [90.0, 16.0], [96.0, 16.0], [164.0, 14.0], [197.0, 14.0], [237.0, 14.0], [232.0, 14.0], [244.0, 25.5], [255.0, 15.0], [271.0, 30.0], [261.0, 49.0], [280.0, 15.0], [276.0, 15.0], [275.0, 17.0], [283.0, 21.0], [302.0, 45.0], [288.0, 28.5], [301.0, 229.0], [309.0, 15.0], [305.0, 16.0], [319.0, 38.5], [322.0, 32.0], [330.0, 44.0], [320.0, 34.0], [333.0, 70.0], [341.0, 18.0], [342.0, 34.5], [350.0, 35.0], [349.0, 30.0], [344.0, 33.0], [353.0, 24.0], [365.0, 33.0], [357.0, 38.0], [366.0, 119.0], [364.0, 46.0], [359.0, 34.0], [352.0, 127.0], [355.0, 37.0], [356.0, 39.0], [363.0, 48.0], [382.0, 47.0], [368.0, 22.0], [372.0, 19.0], [374.0, 65.0], [373.0, 32.0], [381.0, 19.0], [377.0, 20.0], [378.0, 43.0], [369.0, 43.0], [380.0, 35.0], [376.0, 50.0], [383.0, 114.0], [386.0, 57.0], [394.0, 26.0], [393.0, 61.0], [395.0, 32.0], [384.0, 77.0], [385.0, 97.0], [391.0, 31.0], [392.0, 31.5], [388.0, 38.0], [390.0, 72.0], [398.0, 79.0], [399.0, 41.0], [387.0, 34.0], [396.0, 33.0], [397.0, 268.0], [402.0, 54.0], [406.0, 23.0], [411.0, 28.0], [405.0, 48.0], [404.0, 122.0], [407.0, 66.0], [409.0, 100.0], [403.0, 120.0], [413.0, 45.0], [415.0, 79.0], [408.0, 82.0], [414.0, 86.0], [400.0, 46.0], [401.0, 116.0], [430.0, 23.0], [416.0, 27.0], [423.0, 30.0], [422.0, 101.0], [420.0, 148.0], [421.0, 157.0], [431.0, 27.0], [429.0, 72.0], [428.0, 162.0], [419.0, 48.0], [425.0, 99.0], [426.0, 175.0], [427.0, 185.0], [418.0, 109.0], [424.0, 90.5], [434.0, 92.0], [439.0, 33.0], [436.0, 88.0], [433.0, 96.0], [438.0, 38.0], [437.0, 125.0], [444.0, 51.0], [443.0, 129.0], [442.0, 120.0], [446.0, 108.5], [447.0, 148.0], [440.0, 221.0], [435.0, 46.0], [432.0, 73.0], [461.0, 35.0], [454.0, 51.0], [452.0, 64.0], [453.0, 60.0], [456.0, 41.0], [457.0, 48.0], [463.0, 40.0], [462.0, 53.0], [460.0, 42.0], [451.0, 130.0], [448.0, 61.0], [450.0, 60.0], [449.0, 119.0], [459.0, 50.0], [466.0, 44.0], [479.0, 37.0], [470.0, 46.0], [464.0, 40.0], [472.0, 49.0], [468.0, 64.0], [469.0, 59.0], [477.0, 51.0], [478.0, 143.0], [474.0, 53.0], [473.0, 59.0], [482.0, 38.0], [486.0, 62.0], [484.0, 141.0], [487.0, 136.0], [494.0, 135.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[244.0, 153.5], [271.0, 59.0], [261.0, 46.0], [283.0, 48.0], [302.0, 37.0], [288.0, 55.0], [301.0, 138.0], [319.0, 36.0], [322.0, 42.0], [330.0, 52.0], [320.0, 38.0], [333.0, 341.0], [342.0, 200.0], [350.0, 466.5], [341.0, 436.0], [349.0, 459.0], [344.0, 518.0], [353.0, 197.0], [365.0, 192.0], [357.0, 408.5], [366.0, 131.0], [364.0, 433.0], [359.0, 525.0], [352.0, 368.0], [355.0, 480.0], [356.0, 475.0], [363.0, 470.0], [380.0, 215.0], [376.0, 505.0], [369.0, 95.0], [374.0, 484.0], [368.0, 293.0], [373.0, 395.0], [383.0, 286.0], [372.0, 474.0], [382.0, 513.0], [386.0, 220.5], [399.0, 222.0], [392.0, 428.0], [393.0, 435.0], [388.0, 148.0], [398.0, 354.0], [391.0, 230.0], [387.0, 399.5], [396.0, 465.0], [397.0, 64.0], [394.0, 179.5], [395.0, 468.0], [390.0, 427.0], [384.0, 218.0], [385.0, 459.0], [403.0, 140.0], [407.0, 207.5], [405.0, 153.0], [404.0, 195.0], [409.0, 145.0], [411.0, 241.0], [408.0, 198.0], [400.0, 163.0], [402.0, 178.0], [401.0, 172.5], [415.0, 182.0], [414.0, 194.0], [413.0, 217.5], [419.0, 156.0], [425.0, 179.0], [418.0, 219.0], [424.0, 185.5], [422.0, 140.0], [423.0, 268.0], [416.0, 104.0], [426.0, 151.0], [427.0, 271.0], [429.0, 129.5], [428.0, 277.0], [420.0, 103.5], [421.0, 166.0], [444.0, 53.0], [442.0, 65.5], [443.0, 105.0], [434.0, 199.0], [433.0, 87.0], [432.0, 113.0], [446.0, 235.0], [447.0, 107.0], [440.0, 168.0], [436.0, 398.0], [449.0, 112.0], [448.0, 110.0], [452.0, 84.5], [457.0, 98.0], [451.0, 99.0], [450.0, 161.5], [454.0, 105.0], [478.0, 63.0], [468.0, 49.0], [484.0, 114.0], [487.0, 54.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 494.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 38.666666666666664, "minX": 1.62748536E12, "maxY": 431.43333333333334, "series": [{"data": [[1.62748542E12, 431.43333333333334], [1.62748536E12, 306.55], [1.62748554E12, 412.93333333333334], [1.62748548E12, 389.26666666666665], [1.62748566E12, 38.666666666666664], [1.6274856E12, 395.6166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748566E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.266666666666667, "minX": 1.62748536E12, "maxY": 375.7, "series": [{"data": [[1.62748542E12, 375.7], [1.62748536E12, 306.23333333333335], [1.62748554E12, 328.65], [1.62748548E12, 275.2], [1.62748566E12, 35.05], [1.6274856E12, 265.3833333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62748542E12, 55.4], [1.62748554E12, 83.95], [1.62748548E12, 113.73333333333333], [1.62748566E12, 5.266666666666667], [1.6274856E12, 129.9]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62748566E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.266666666666667, "minX": 1.62748536E12, "maxY": 375.7, "series": [{"data": [[1.62748542E12, 375.7], [1.62748536E12, 306.23333333333335], [1.62748554E12, 328.65], [1.62748548E12, 275.2], [1.62748566E12, 35.05], [1.6274856E12, 265.3833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62748542E12, 55.4], [1.62748554E12, 83.95], [1.62748548E12, 113.73333333333333], [1.62748566E12, 5.266666666666667], [1.6274856E12, 129.9]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748566E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.266666666666667, "minX": 1.62748536E12, "maxY": 375.7, "series": [{"data": [[1.62748542E12, 375.7], [1.62748536E12, 306.23333333333335], [1.62748554E12, 328.65], [1.62748548E12, 275.2], [1.62748566E12, 35.05], [1.6274856E12, 265.3833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62748542E12, 55.4], [1.62748554E12, 83.95], [1.62748548E12, 113.73333333333333], [1.62748566E12, 5.266666666666667], [1.6274856E12, 129.9]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62748566E12, "title": "Total Transactions Per Second"}},
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

