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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1419.0, "series": [{"data": [[0.0, 3.0], [0.1, 6.0], [0.2, 13.0], [0.3, 14.0], [0.4, 14.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 15.0], [0.9, 15.0], [1.0, 15.0], [1.1, 15.0], [1.2, 15.0], [1.3, 16.0], [1.4, 16.0], [1.5, 16.0], [1.6, 16.0], [1.7, 16.0], [1.8, 16.0], [1.9, 17.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 18.0], [2.4, 18.0], [2.5, 19.0], [2.6, 19.0], [2.7, 20.0], [2.8, 20.0], [2.9, 21.0], [3.0, 22.0], [3.1, 23.0], [3.2, 24.0], [3.3, 24.0], [3.4, 24.0], [3.5, 25.0], [3.6, 25.0], [3.7, 26.0], [3.8, 26.0], [3.9, 26.0], [4.0, 27.0], [4.1, 27.0], [4.2, 27.0], [4.3, 27.0], [4.4, 28.0], [4.5, 28.0], [4.6, 28.0], [4.7, 28.0], [4.8, 28.0], [4.9, 28.0], [5.0, 29.0], [5.1, 29.0], [5.2, 29.0], [5.3, 29.0], [5.4, 29.0], [5.5, 29.0], [5.6, 29.0], [5.7, 29.0], [5.8, 30.0], [5.9, 30.0], [6.0, 30.0], [6.1, 30.0], [6.2, 30.0], [6.3, 30.0], [6.4, 30.0], [6.5, 30.0], [6.6, 30.0], [6.7, 31.0], [6.8, 31.0], [6.9, 31.0], [7.0, 31.0], [7.1, 31.0], [7.2, 31.0], [7.3, 31.0], [7.4, 31.0], [7.5, 31.0], [7.6, 32.0], [7.7, 32.0], [7.8, 32.0], [7.9, 32.0], [8.0, 32.0], [8.1, 32.0], [8.2, 32.0], [8.3, 32.0], [8.4, 32.0], [8.5, 33.0], [8.6, 33.0], [8.7, 33.0], [8.8, 33.0], [8.9, 33.0], [9.0, 33.0], [9.1, 33.0], [9.2, 34.0], [9.3, 34.0], [9.4, 34.0], [9.5, 34.0], [9.6, 34.0], [9.7, 34.0], [9.8, 35.0], [9.9, 35.0], [10.0, 35.0], [10.1, 35.0], [10.2, 35.0], [10.3, 35.0], [10.4, 36.0], [10.5, 36.0], [10.6, 36.0], [10.7, 36.0], [10.8, 36.0], [10.9, 37.0], [11.0, 37.0], [11.1, 37.0], [11.2, 37.0], [11.3, 37.0], [11.4, 37.0], [11.5, 38.0], [11.6, 38.0], [11.7, 38.0], [11.8, 38.0], [11.9, 38.0], [12.0, 39.0], [12.1, 39.0], [12.2, 39.0], [12.3, 39.0], [12.4, 39.0], [12.5, 40.0], [12.6, 40.0], [12.7, 40.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 43.0], [14.3, 43.0], [14.4, 43.0], [14.5, 43.0], [14.6, 43.0], [14.7, 43.0], [14.8, 44.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 46.0], [16.0, 46.0], [16.1, 46.0], [16.2, 46.0], [16.3, 46.0], [16.4, 46.0], [16.5, 46.0], [16.6, 47.0], [16.7, 47.0], [16.8, 47.0], [16.9, 47.0], [17.0, 47.0], [17.1, 47.0], [17.2, 48.0], [17.3, 48.0], [17.4, 48.0], [17.5, 48.0], [17.6, 48.0], [17.7, 49.0], [17.8, 49.0], [17.9, 49.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 50.0], [18.4, 50.0], [18.5, 50.0], [18.6, 50.0], [18.7, 50.0], [18.8, 50.0], [18.9, 51.0], [19.0, 51.0], [19.1, 51.0], [19.2, 51.0], [19.3, 51.0], [19.4, 51.0], [19.5, 52.0], [19.6, 52.0], [19.7, 52.0], [19.8, 52.0], [19.9, 52.0], [20.0, 52.0], [20.1, 53.0], [20.2, 53.0], [20.3, 53.0], [20.4, 53.0], [20.5, 53.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 54.0], [21.1, 54.0], [21.2, 55.0], [21.3, 55.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 55.0], [21.8, 56.0], [21.9, 56.0], [22.0, 56.0], [22.1, 56.0], [22.2, 56.0], [22.3, 56.0], [22.4, 57.0], [22.5, 57.0], [22.6, 57.0], [22.7, 57.0], [22.8, 57.0], [22.9, 57.0], [23.0, 58.0], [23.1, 58.0], [23.2, 58.0], [23.3, 58.0], [23.4, 58.0], [23.5, 58.0], [23.6, 59.0], [23.7, 59.0], [23.8, 59.0], [23.9, 59.0], [24.0, 59.0], [24.1, 59.0], [24.2, 60.0], [24.3, 60.0], [24.4, 60.0], [24.5, 60.0], [24.6, 60.0], [24.7, 61.0], [24.8, 61.0], [24.9, 61.0], [25.0, 61.0], [25.1, 61.0], [25.2, 61.0], [25.3, 62.0], [25.4, 62.0], [25.5, 62.0], [25.6, 62.0], [25.7, 62.0], [25.8, 62.0], [25.9, 63.0], [26.0, 63.0], [26.1, 63.0], [26.2, 63.0], [26.3, 63.0], [26.4, 64.0], [26.5, 64.0], [26.6, 64.0], [26.7, 64.0], [26.8, 64.0], [26.9, 64.0], [27.0, 65.0], [27.1, 65.0], [27.2, 65.0], [27.3, 65.0], [27.4, 65.0], [27.5, 65.0], [27.6, 66.0], [27.7, 66.0], [27.8, 66.0], [27.9, 66.0], [28.0, 66.0], [28.1, 67.0], [28.2, 67.0], [28.3, 67.0], [28.4, 67.0], [28.5, 67.0], [28.6, 67.0], [28.7, 68.0], [28.8, 68.0], [28.9, 68.0], [29.0, 68.0], [29.1, 68.0], [29.2, 68.0], [29.3, 69.0], [29.4, 69.0], [29.5, 69.0], [29.6, 69.0], [29.7, 69.0], [29.8, 69.0], [29.9, 70.0], [30.0, 70.0], [30.1, 70.0], [30.2, 70.0], [30.3, 70.0], [30.4, 71.0], [30.5, 71.0], [30.6, 71.0], [30.7, 71.0], [30.8, 71.0], [30.9, 71.0], [31.0, 72.0], [31.1, 72.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 73.0], [31.6, 73.0], [31.7, 73.0], [31.8, 73.0], [31.9, 73.0], [32.0, 73.0], [32.1, 74.0], [32.2, 74.0], [32.3, 74.0], [32.4, 74.0], [32.5, 74.0], [32.6, 74.0], [32.7, 75.0], [32.8, 75.0], [32.9, 75.0], [33.0, 75.0], [33.1, 75.0], [33.2, 76.0], [33.3, 76.0], [33.4, 76.0], [33.5, 76.0], [33.6, 76.0], [33.7, 77.0], [33.8, 77.0], [33.9, 77.0], [34.0, 77.0], [34.1, 77.0], [34.2, 77.0], [34.3, 78.0], [34.4, 78.0], [34.5, 78.0], [34.6, 78.0], [34.7, 78.0], [34.8, 78.0], [34.9, 79.0], [35.0, 79.0], [35.1, 79.0], [35.2, 79.0], [35.3, 79.0], [35.4, 79.0], [35.5, 80.0], [35.6, 80.0], [35.7, 80.0], [35.8, 80.0], [35.9, 80.0], [36.0, 81.0], [36.1, 81.0], [36.2, 81.0], [36.3, 81.0], [36.4, 81.0], [36.5, 82.0], [36.6, 82.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 83.0], [37.2, 83.0], [37.3, 83.0], [37.4, 83.0], [37.5, 83.0], [37.6, 83.0], [37.7, 84.0], [37.8, 84.0], [37.9, 84.0], [38.0, 84.0], [38.1, 84.0], [38.2, 85.0], [38.3, 85.0], [38.4, 85.0], [38.5, 85.0], [38.6, 85.0], [38.7, 85.0], [38.8, 86.0], [38.9, 86.0], [39.0, 86.0], [39.1, 86.0], [39.2, 86.0], [39.3, 87.0], [39.4, 87.0], [39.5, 87.0], [39.6, 87.0], [39.7, 87.0], [39.8, 88.0], [39.9, 88.0], [40.0, 88.0], [40.1, 88.0], [40.2, 88.0], [40.3, 88.0], [40.4, 89.0], [40.5, 89.0], [40.6, 89.0], [40.7, 89.0], [40.8, 89.0], [40.9, 90.0], [41.0, 90.0], [41.1, 90.0], [41.2, 90.0], [41.3, 90.0], [41.4, 91.0], [41.5, 91.0], [41.6, 91.0], [41.7, 91.0], [41.8, 91.0], [41.9, 92.0], [42.0, 92.0], [42.1, 92.0], [42.2, 92.0], [42.3, 92.0], [42.4, 93.0], [42.5, 93.0], [42.6, 93.0], [42.7, 93.0], [42.8, 93.0], [42.9, 94.0], [43.0, 94.0], [43.1, 94.0], [43.2, 94.0], [43.3, 94.0], [43.4, 94.0], [43.5, 95.0], [43.6, 95.0], [43.7, 95.0], [43.8, 95.0], [43.9, 95.0], [44.0, 96.0], [44.1, 96.0], [44.2, 96.0], [44.3, 96.0], [44.4, 96.0], [44.5, 96.0], [44.6, 97.0], [44.7, 97.0], [44.8, 97.0], [44.9, 97.0], [45.0, 97.0], [45.1, 98.0], [45.2, 98.0], [45.3, 98.0], [45.4, 98.0], [45.5, 98.0], [45.6, 98.0], [45.7, 99.0], [45.8, 99.0], [45.9, 99.0], [46.0, 99.0], [46.1, 99.0], [46.2, 100.0], [46.3, 100.0], [46.4, 100.0], [46.5, 100.0], [46.6, 100.0], [46.7, 101.0], [46.8, 101.0], [46.9, 101.0], [47.0, 101.0], [47.1, 101.0], [47.2, 102.0], [47.3, 102.0], [47.4, 102.0], [47.5, 102.0], [47.6, 103.0], [47.7, 103.0], [47.8, 103.0], [47.9, 103.0], [48.0, 103.0], [48.1, 103.0], [48.2, 104.0], [48.3, 104.0], [48.4, 104.0], [48.5, 104.0], [48.6, 105.0], [48.7, 105.0], [48.8, 105.0], [48.9, 105.0], [49.0, 105.0], [49.1, 106.0], [49.2, 106.0], [49.3, 106.0], [49.4, 106.0], [49.5, 106.0], [49.6, 107.0], [49.7, 107.0], [49.8, 107.0], [49.9, 107.0], [50.0, 108.0], [50.1, 108.0], [50.2, 108.0], [50.3, 108.0], [50.4, 108.0], [50.5, 109.0], [50.6, 109.0], [50.7, 109.0], [50.8, 109.0], [50.9, 109.0], [51.0, 110.0], [51.1, 110.0], [51.2, 110.0], [51.3, 110.0], [51.4, 111.0], [51.5, 111.0], [51.6, 111.0], [51.7, 111.0], [51.8, 111.0], [51.9, 112.0], [52.0, 112.0], [52.1, 112.0], [52.2, 112.0], [52.3, 112.0], [52.4, 113.0], [52.5, 113.0], [52.6, 113.0], [52.7, 113.0], [52.8, 113.0], [52.9, 114.0], [53.0, 114.0], [53.1, 114.0], [53.2, 114.0], [53.3, 115.0], [53.4, 115.0], [53.5, 115.0], [53.6, 115.0], [53.7, 115.0], [53.8, 116.0], [53.9, 116.0], [54.0, 116.0], [54.1, 116.0], [54.2, 116.0], [54.3, 117.0], [54.4, 117.0], [54.5, 117.0], [54.6, 117.0], [54.7, 118.0], [54.8, 118.0], [54.9, 118.0], [55.0, 118.0], [55.1, 118.0], [55.2, 119.0], [55.3, 119.0], [55.4, 119.0], [55.5, 119.0], [55.6, 120.0], [55.7, 120.0], [55.8, 120.0], [55.9, 120.0], [56.0, 121.0], [56.1, 121.0], [56.2, 121.0], [56.3, 121.0], [56.4, 122.0], [56.5, 122.0], [56.6, 122.0], [56.7, 122.0], [56.8, 123.0], [56.9, 123.0], [57.0, 123.0], [57.1, 123.0], [57.2, 123.0], [57.3, 124.0], [57.4, 124.0], [57.5, 124.0], [57.6, 124.0], [57.7, 125.0], [57.8, 125.0], [57.9, 125.0], [58.0, 125.0], [58.1, 126.0], [58.2, 126.0], [58.3, 126.0], [58.4, 126.0], [58.5, 127.0], [58.6, 127.0], [58.7, 127.0], [58.8, 127.0], [58.9, 128.0], [59.0, 128.0], [59.1, 128.0], [59.2, 128.0], [59.3, 129.0], [59.4, 129.0], [59.5, 129.0], [59.6, 129.0], [59.7, 129.0], [59.8, 130.0], [59.9, 130.0], [60.0, 130.0], [60.1, 130.0], [60.2, 131.0], [60.3, 131.0], [60.4, 131.0], [60.5, 131.0], [60.6, 132.0], [60.7, 132.0], [60.8, 132.0], [60.9, 132.0], [61.0, 133.0], [61.1, 133.0], [61.2, 133.0], [61.3, 133.0], [61.4, 134.0], [61.5, 134.0], [61.6, 134.0], [61.7, 134.0], [61.8, 134.0], [61.9, 135.0], [62.0, 135.0], [62.1, 135.0], [62.2, 136.0], [62.3, 136.0], [62.4, 136.0], [62.5, 136.0], [62.6, 137.0], [62.7, 137.0], [62.8, 137.0], [62.9, 137.0], [63.0, 138.0], [63.1, 138.0], [63.2, 138.0], [63.3, 138.0], [63.4, 139.0], [63.5, 139.0], [63.6, 139.0], [63.7, 139.0], [63.8, 140.0], [63.9, 140.0], [64.0, 140.0], [64.1, 140.0], [64.2, 141.0], [64.3, 141.0], [64.4, 141.0], [64.5, 142.0], [64.6, 142.0], [64.7, 142.0], [64.8, 142.0], [64.9, 143.0], [65.0, 143.0], [65.1, 143.0], [65.2, 143.0], [65.3, 144.0], [65.4, 144.0], [65.5, 144.0], [65.6, 145.0], [65.7, 145.0], [65.8, 145.0], [65.9, 145.0], [66.0, 146.0], [66.1, 146.0], [66.2, 146.0], [66.3, 147.0], [66.4, 147.0], [66.5, 147.0], [66.6, 147.0], [66.7, 148.0], [66.8, 148.0], [66.9, 148.0], [67.0, 149.0], [67.1, 149.0], [67.2, 149.0], [67.3, 150.0], [67.4, 150.0], [67.5, 150.0], [67.6, 151.0], [67.7, 151.0], [67.8, 151.0], [67.9, 151.0], [68.0, 152.0], [68.1, 152.0], [68.2, 152.0], [68.3, 153.0], [68.4, 153.0], [68.5, 153.0], [68.6, 154.0], [68.7, 154.0], [68.8, 154.0], [68.9, 155.0], [69.0, 155.0], [69.1, 155.0], [69.2, 155.0], [69.3, 156.0], [69.4, 156.0], [69.5, 156.0], [69.6, 157.0], [69.7, 157.0], [69.8, 157.0], [69.9, 158.0], [70.0, 158.0], [70.1, 158.0], [70.2, 159.0], [70.3, 159.0], [70.4, 159.0], [70.5, 160.0], [70.6, 160.0], [70.7, 160.0], [70.8, 161.0], [70.9, 161.0], [71.0, 161.0], [71.1, 162.0], [71.2, 162.0], [71.3, 162.0], [71.4, 163.0], [71.5, 163.0], [71.6, 163.0], [71.7, 164.0], [71.8, 164.0], [71.9, 164.0], [72.0, 165.0], [72.1, 165.0], [72.2, 166.0], [72.3, 166.0], [72.4, 166.0], [72.5, 167.0], [72.6, 167.0], [72.7, 167.0], [72.8, 168.0], [72.9, 168.0], [73.0, 168.0], [73.1, 169.0], [73.2, 169.0], [73.3, 169.0], [73.4, 170.0], [73.5, 170.0], [73.6, 171.0], [73.7, 171.0], [73.8, 171.0], [73.9, 172.0], [74.0, 172.0], [74.1, 173.0], [74.2, 173.0], [74.3, 173.0], [74.4, 174.0], [74.5, 174.0], [74.6, 175.0], [74.7, 175.0], [74.8, 175.0], [74.9, 176.0], [75.0, 176.0], [75.1, 177.0], [75.2, 177.0], [75.3, 177.0], [75.4, 178.0], [75.5, 178.0], [75.6, 179.0], [75.7, 179.0], [75.8, 179.0], [75.9, 180.0], [76.0, 180.0], [76.1, 181.0], [76.2, 181.0], [76.3, 181.0], [76.4, 182.0], [76.5, 182.0], [76.6, 183.0], [76.7, 183.0], [76.8, 184.0], [76.9, 184.0], [77.0, 184.0], [77.1, 185.0], [77.2, 185.0], [77.3, 186.0], [77.4, 186.0], [77.5, 187.0], [77.6, 187.0], [77.7, 187.0], [77.8, 188.0], [77.9, 188.0], [78.0, 189.0], [78.1, 189.0], [78.2, 189.0], [78.3, 190.0], [78.4, 190.0], [78.5, 191.0], [78.6, 191.0], [78.7, 192.0], [78.8, 192.0], [78.9, 193.0], [79.0, 193.0], [79.1, 194.0], [79.2, 194.0], [79.3, 195.0], [79.4, 195.0], [79.5, 196.0], [79.6, 196.0], [79.7, 197.0], [79.8, 197.0], [79.9, 198.0], [80.0, 198.0], [80.1, 199.0], [80.2, 199.0], [80.3, 200.0], [80.4, 200.0], [80.5, 201.0], [80.6, 202.0], [80.7, 202.0], [80.8, 203.0], [80.9, 203.0], [81.0, 204.0], [81.1, 204.0], [81.2, 205.0], [81.3, 205.0], [81.4, 206.0], [81.5, 207.0], [81.6, 207.0], [81.7, 208.0], [81.8, 208.0], [81.9, 209.0], [82.0, 210.0], [82.1, 210.0], [82.2, 211.0], [82.3, 211.0], [82.4, 212.0], [82.5, 212.0], [82.6, 213.0], [82.7, 214.0], [82.8, 214.0], [82.9, 215.0], [83.0, 216.0], [83.1, 216.0], [83.2, 217.0], [83.3, 218.0], [83.4, 218.0], [83.5, 219.0], [83.6, 219.0], [83.7, 220.0], [83.8, 221.0], [83.9, 221.0], [84.0, 222.0], [84.1, 223.0], [84.2, 223.0], [84.3, 224.0], [84.4, 225.0], [84.5, 226.0], [84.6, 226.0], [84.7, 227.0], [84.8, 228.0], [84.9, 228.0], [85.0, 229.0], [85.1, 230.0], [85.2, 230.0], [85.3, 231.0], [85.4, 232.0], [85.5, 233.0], [85.6, 233.0], [85.7, 234.0], [85.8, 235.0], [85.9, 236.0], [86.0, 236.0], [86.1, 237.0], [86.2, 238.0], [86.3, 239.0], [86.4, 240.0], [86.5, 241.0], [86.6, 241.0], [86.7, 242.0], [86.8, 243.0], [86.9, 244.0], [87.0, 245.0], [87.1, 246.0], [87.2, 246.0], [87.3, 247.0], [87.4, 248.0], [87.5, 249.0], [87.6, 250.0], [87.7, 251.0], [87.8, 252.0], [87.9, 253.0], [88.0, 254.0], [88.1, 255.0], [88.2, 256.0], [88.3, 257.0], [88.4, 258.0], [88.5, 259.0], [88.6, 261.0], [88.7, 262.0], [88.8, 263.0], [88.9, 264.0], [89.0, 265.0], [89.1, 266.0], [89.2, 268.0], [89.3, 269.0], [89.4, 270.0], [89.5, 271.0], [89.6, 272.0], [89.7, 273.0], [89.8, 274.0], [89.9, 275.0], [90.0, 277.0], [90.1, 278.0], [90.2, 279.0], [90.3, 281.0], [90.4, 282.0], [90.5, 284.0], [90.6, 286.0], [90.7, 287.0], [90.8, 289.0], [90.9, 290.0], [91.0, 292.0], [91.1, 293.0], [91.2, 295.0], [91.3, 296.0], [91.4, 298.0], [91.5, 300.0], [91.6, 301.0], [91.7, 303.0], [91.8, 304.0], [91.9, 306.0], [92.0, 308.0], [92.1, 310.0], [92.2, 311.0], [92.3, 313.0], [92.4, 315.0], [92.5, 317.0], [92.6, 319.0], [92.7, 321.0], [92.8, 322.0], [92.9, 324.0], [93.0, 326.0], [93.1, 328.0], [93.2, 330.0], [93.3, 332.0], [93.4, 334.0], [93.5, 336.0], [93.6, 338.0], [93.7, 341.0], [93.8, 343.0], [93.9, 345.0], [94.0, 348.0], [94.1, 350.0], [94.2, 353.0], [94.3, 356.0], [94.4, 358.0], [94.5, 361.0], [94.6, 364.0], [94.7, 366.0], [94.8, 369.0], [94.9, 372.0], [95.0, 374.0], [95.1, 377.0], [95.2, 380.0], [95.3, 383.0], [95.4, 387.0], [95.5, 390.0], [95.6, 392.0], [95.7, 396.0], [95.8, 400.0], [95.9, 404.0], [96.0, 407.0], [96.1, 411.0], [96.2, 415.0], [96.3, 419.0], [96.4, 423.0], [96.5, 427.0], [96.6, 431.0], [96.7, 436.0], [96.8, 442.0], [96.9, 447.0], [97.0, 452.0], [97.1, 457.0], [97.2, 462.0], [97.3, 469.0], [97.4, 474.0], [97.5, 481.0], [97.6, 487.0], [97.7, 493.0], [97.8, 499.0], [97.9, 507.0], [98.0, 515.0], [98.1, 526.0], [98.2, 535.0], [98.3, 547.0], [98.4, 557.0], [98.5, 568.0], [98.6, 581.0], [98.7, 593.0], [98.8, 609.0], [98.9, 624.0], [99.0, 642.0], [99.1, 664.0], [99.2, 686.0], [99.3, 707.0], [99.4, 745.0], [99.5, 780.0], [99.6, 821.0], [99.7, 877.0], [99.8, 934.0], [99.9, 1008.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 49686.0, "series": [{"data": [[0.0, 49686.0], [600.0, 565.0], [700.0, 319.0], [200.0, 12165.0], [800.0, 182.0], [900.0, 174.0], [1000.0, 63.0], [1100.0, 35.0], [300.0, 4632.0], [1200.0, 13.0], [1300.0, 3.0], [1400.0, 1.0], [100.0, 36733.0], [400.0, 2164.0], [500.0, 1015.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2222.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 103219.0, "series": [{"data": [[0.0, 103219.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2309.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 2222.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.476043059171172, "minX": 1.62731538E12, "maxY": 97.51625410080538, "series": [{"data": [[1.6273155E12, 47.314304123711], [1.62731562E12, 87.23395734825847], [1.62731544E12, 27.385463788720863], [1.62731556E12, 67.23224626638228], [1.62731538E12, 10.476043059171172], [1.62731568E12, 97.51625410080538]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731568E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.798941798941804, "minX": 1.0, "maxY": 302.2898852971842, "series": [{"data": [[2.0, 23.056179775280892], [3.0, 19.610503282275708], [4.0, 22.040072859744992], [5.0, 19.975292587776316], [6.0, 22.87146529562982], [7.0, 24.973715651135006], [8.0, 25.957654723127042], [9.0, 27.765190525231734], [10.0, 30.18307086614174], [11.0, 30.943555973659453], [12.0, 32.75937785910333], [13.0, 35.47846012832267], [14.0, 37.8753339269813], [15.0, 40.02570921985819], [16.0, 42.79857397504455], [17.0, 49.61793372319687], [18.0, 47.489399293286255], [19.0, 50.02557319223986], [20.0, 52.489565217391295], [21.0, 54.047250859106484], [22.0, 56.88372093023256], [23.0, 59.23529411764713], [24.0, 63.160979877515395], [25.0, 63.78929481733218], [26.0, 66.07783417935704], [27.0, 69.169375534645], [28.0, 71.60017123287669], [29.0, 74.22307692307682], [30.0, 75.9537037037036], [31.0, 80.83231972198097], [32.0, 83.16363636363624], [33.0, 84.88000000000011], [34.0, 87.8734939759035], [35.0, 89.5634648370496], [36.0, 91.63996627318726], [37.0, 96.28831168831162], [38.0, 97.55844155844154], [39.0, 99.02436974789913], [40.0, 100.099833610649], [41.0, 104.04846938775512], [42.0, 106.074414715719], [43.0, 112.74802458296756], [44.0, 111.24152542372885], [45.0, 117.86839826839811], [46.0, 119.84461805555557], [47.0, 122.57342657342667], [48.0, 125.58551483420588], [49.0, 127.92068965517237], [50.0, 130.21153846153837], [51.0, 130.83619210977676], [52.0, 132.8141891891891], [53.0, 136.8327615780444], [54.0, 137.86893617021252], [55.0, 139.9513236549958], [56.0, 148.00439367311105], [57.0, 146.9140154772141], [58.0, 149.53793103448282], [59.0, 148.28138163437242], [60.0, 155.06058020477806], [61.0, 157.6848484848484], [62.0, 161.86050566695735], [63.0, 160.85665818490227], [64.0, 163.84635193133022], [65.0, 165.31367521367525], [66.0, 168.82535684298904], [67.0, 172.76850258175543], [68.0, 170.8949615713068], [69.0, 179.73469387755102], [70.0, 180.4012131715773], [71.0, 193.06204379562047], [72.0, 195.29533213644515], [73.0, 195.3575268817205], [74.0, 197.94023193577158], [75.0, 197.89219982471514], [76.0, 205.73869801085], [77.0, 212.6270566727607], [78.0, 199.59948761742123], [79.0, 204.72882805816946], [80.0, 202.10698878343405], [81.0, 255.56535947712425], [82.0, 259.9120082815733], [83.0, 288.4453488372095], [84.0, 241.51171874999991], [85.0, 258.38813229571934], [86.0, 236.4191176470588], [87.0, 242.19038817005554], [88.0, 264.4275286757045], [89.0, 255.40716911764684], [90.0, 255.55854126679492], [91.0, 255.7935909519323], [92.0, 260.14441416893686], [93.0, 280.77181913774945], [94.0, 265.9013157894734], [95.0, 297.69793814432967], [96.0, 290.28071928071955], [97.0, 279.1750245821045], [98.0, 302.2898852971842], [99.0, 283.46611721611697], [100.0, 278.8713339640496], [1.0, 16.798941798941804]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.64846403712347, 140.56734106728504]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 38935.816666666666, "minX": 1.62731538E12, "maxY": 673568.0, "series": [{"data": [[1.6273155E12, 271103.73333333334], [1.62731562E12, 243079.81666666668], [1.62731544E12, 270301.3333333333], [1.62731556E12, 267458.25], [1.62731538E12, 165517.16666666666], [1.62731568E12, 38935.816666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6273155E12, 673568.0], [1.62731562E12, 591108.0], [1.62731544E12, 671571.6], [1.62731556E12, 664511.8666666667], [1.62731538E12, 411229.4666666667], [1.62731568E12, 96550.53333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731568E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 31.538450714134957, "minX": 1.62731538E12, "maxY": 287.9940351923647, "series": [{"data": [[1.6273155E12, 121.76645189003479], [1.62731562E12, 252.29421982051616], [1.62731544E12, 70.5073456550775], [1.62731556E12, 175.55240127138885], [1.62731538E12, 31.538450714134957], [1.62731568E12, 287.9940351923647]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731568E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 30.90431295293035, "minX": 1.62731538E12, "maxY": 284.9958246346558, "series": [{"data": [[1.6273155E12, 119.4718642611678], [1.62731562E12, 248.99802180835755], [1.62731544E12, 68.99823359613993], [1.62731556E12, 173.01206078286174], [1.62731538E12, 30.90431295293035], [1.62731568E12, 284.9958246346558]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731568E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005965080332651186, "minX": 1.62731538E12, "maxY": 0.6057608800540388, "series": [{"data": [[1.6273155E12, 0.006443298969072205], [1.62731562E12, 0.6057608800540388], [1.62731544E12, 0.005988539916418917], [1.62731556E12, 0.005965080332651186], [1.62731538E12, 0.00612115668753957], [1.62731568E12, 0.3599761407694604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731568E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.62731538E12, "maxY": 1419.0, "series": [{"data": [[1.6273155E12, 474.0], [1.62731562E12, 1419.0], [1.62731544E12, 255.0], [1.62731556E12, 726.0], [1.62731538E12, 120.0], [1.62731568E12, 974.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6273155E12, 197.0], [1.62731562E12, 491.0], [1.62731544E12, 108.0], [1.62731556E12, 304.0], [1.62731538E12, 46.0], [1.62731568E12, 542.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6273155E12, 293.0], [1.62731562E12, 952.3199999999997], [1.62731544E12, 162.9900000000016], [1.62731556E12, 486.9900000000016], [1.62731538E12, 63.0], [1.62731568E12, 801.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6273155E12, 229.0], [1.62731562E12, 630.5999999999985], [1.62731544E12, 124.0], [1.62731556E12, 364.0], [1.62731538E12, 51.0], [1.62731568E12, 657.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6273155E12, 23.0], [1.62731562E12, 23.0], [1.62731544E12, 18.0], [1.62731556E12, 24.0], [1.62731538E12, 9.0], [1.62731568E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6273155E12, 115.0], [1.62731562E12, 205.0], [1.62731544E12, 69.0], [1.62731556E12, 157.0], [1.62731538E12, 31.0], [1.62731568E12, 247.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731568E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 15.0, "minX": 29.0, "maxY": 368.0, "series": [{"data": [[29.0, 16.0], [63.0, 16.0], [74.0, 29.0], [88.0, 17.0], [95.0, 16.0], [131.0, 21.0], [137.0, 16.0], [138.0, 17.0], [147.0, 30.0], [191.0, 16.0], [213.0, 15.0], [227.0, 16.0], [234.0, 286.0], [244.0, 18.0], [241.0, 28.0], [251.0, 16.0], [268.0, 16.0], [270.0, 27.0], [260.0, 192.5], [274.0, 32.0], [277.0, 28.0], [278.0, 28.0], [286.0, 193.0], [285.0, 230.0], [290.0, 28.0], [291.0, 205.0], [302.0, 220.5], [296.0, 239.0], [295.0, 202.0], [308.0, 28.0], [310.0, 28.0], [316.0, 29.0], [311.0, 180.0], [305.0, 207.0], [314.0, 254.0], [304.0, 260.5], [324.0, 157.0], [320.0, 36.0], [328.0, 29.0], [331.0, 48.0], [330.0, 214.0], [321.0, 172.0], [335.0, 206.0], [333.0, 230.0], [349.0, 31.0], [343.0, 30.0], [342.0, 338.0], [336.0, 37.0], [348.0, 38.0], [338.0, 232.0], [345.0, 196.0], [350.0, 181.0], [351.0, 225.5], [346.0, 205.0], [344.0, 202.0], [366.0, 59.0], [354.0, 31.0], [363.0, 40.0], [362.0, 126.0], [367.0, 130.5], [361.0, 192.0], [360.0, 225.0], [352.0, 137.0], [353.0, 202.0], [359.0, 227.0], [364.0, 79.0], [357.0, 179.0], [356.0, 227.0], [358.0, 173.5], [369.0, 127.0], [371.0, 45.0], [370.0, 155.5], [373.0, 59.0], [376.0, 52.0], [372.0, 151.0], [378.0, 128.0], [377.0, 85.0], [383.0, 108.0], [381.0, 106.0], [382.0, 143.0], [380.0, 116.0], [379.0, 129.0], [375.0, 104.0], [368.0, 213.0], [374.0, 110.0], [385.0, 67.0], [387.0, 79.0], [388.0, 101.0], [390.0, 88.0], [395.0, 70.0], [399.0, 124.0], [393.0, 112.0], [392.0, 113.0], [394.0, 103.0], [389.0, 93.0], [391.0, 85.0], [384.0, 154.0], [386.0, 99.0], [397.0, 118.0], [396.0, 92.0], [398.0, 99.0], [400.0, 125.0], [402.0, 109.0], [405.0, 120.0], [403.0, 119.0], [401.0, 116.0], [404.0, 140.0], [406.0, 143.0], [407.0, 140.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[234.0, 241.0], [260.0, 102.0], [286.0, 161.0], [274.0, 114.5], [285.0, 110.5], [291.0, 87.0], [302.0, 207.0], [296.0, 212.0], [295.0, 137.5], [311.0, 193.0], [305.0, 93.5], [314.0, 255.0], [304.0, 180.0], [320.0, 113.0], [324.0, 123.5], [330.0, 85.0], [335.0, 210.5], [333.0, 101.0], [350.0, 74.0], [345.0, 217.0], [348.0, 227.0], [351.0, 178.5], [346.0, 368.0], [344.0, 46.0], [342.0, 115.0], [338.0, 121.0], [336.0, 177.0], [353.0, 76.0], [359.0, 159.5], [363.0, 192.0], [360.0, 46.0], [356.0, 154.0], [367.0, 231.0], [358.0, 284.0], [361.0, 120.5], [352.0, 57.0], [383.0, 131.0], [378.0, 104.0], [377.0, 86.0], [380.0, 130.0], [368.0, 124.0], [369.0, 46.0], [372.0, 55.5], [384.0, 193.0], [391.0, 300.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 407.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 15.0, "minX": 29.0, "maxY": 347.0, "series": [{"data": [[29.0, 15.0], [63.0, 15.0], [74.0, 29.0], [88.0, 16.0], [95.0, 15.0], [131.0, 20.0], [137.0, 15.0], [138.0, 17.0], [147.0, 30.0], [191.0, 16.0], [213.0, 15.0], [227.0, 15.0], [234.0, 281.0], [244.0, 18.0], [241.0, 28.0], [251.0, 16.0], [268.0, 15.0], [270.0, 27.0], [260.0, 191.5], [274.0, 31.0], [277.0, 28.0], [278.0, 27.0], [286.0, 189.0], [285.0, 224.0], [290.0, 28.0], [291.0, 203.5], [302.0, 218.5], [296.0, 237.0], [295.0, 199.0], [308.0, 27.0], [310.0, 27.0], [316.0, 28.0], [311.0, 177.0], [305.0, 205.0], [314.0, 253.0], [304.0, 258.0], [324.0, 154.5], [320.0, 35.0], [328.0, 29.0], [331.0, 47.0], [330.0, 211.0], [321.0, 170.0], [335.0, 205.0], [333.0, 228.0], [349.0, 31.0], [343.0, 29.0], [342.0, 335.0], [336.0, 36.0], [348.0, 37.0], [338.0, 231.0], [345.0, 193.0], [350.0, 178.0], [351.0, 224.0], [346.0, 204.0], [344.0, 194.0], [366.0, 57.0], [354.0, 30.0], [363.0, 39.0], [362.0, 124.0], [367.0, 129.5], [361.0, 189.5], [360.0, 223.0], [352.0, 135.0], [353.0, 199.0], [359.0, 226.0], [364.0, 77.0], [357.0, 177.5], [356.0, 225.0], [358.0, 172.0], [369.0, 125.0], [371.0, 44.0], [370.0, 154.0], [373.0, 58.0], [376.0, 51.0], [372.0, 148.0], [378.0, 124.0], [377.0, 83.0], [383.0, 106.0], [381.0, 104.0], [382.0, 141.0], [380.0, 114.0], [379.0, 128.0], [375.0, 102.0], [368.0, 211.0], [374.0, 107.0], [385.0, 66.0], [387.0, 78.0], [388.0, 99.0], [390.0, 86.0], [395.0, 68.0], [399.0, 121.0], [393.0, 110.0], [392.0, 111.0], [394.0, 100.0], [389.0, 91.0], [391.0, 83.0], [384.0, 150.0], [386.0, 97.0], [397.0, 116.0], [396.0, 90.0], [398.0, 97.0], [400.0, 123.0], [402.0, 106.0], [405.0, 117.0], [403.0, 117.0], [401.0, 114.0], [404.0, 138.0], [406.0, 140.0], [407.0, 138.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[234.0, 233.0], [260.0, 97.5], [286.0, 161.0], [274.0, 102.0], [285.0, 105.5], [291.0, 84.0], [302.0, 202.0], [296.0, 209.0], [295.0, 128.5], [311.0, 174.0], [305.0, 92.0], [314.0, 254.0], [304.0, 166.0], [320.0, 110.0], [324.0, 116.0], [330.0, 74.5], [335.0, 209.5], [333.0, 71.0], [350.0, 68.0], [345.0, 209.5], [348.0, 220.0], [351.0, 165.0], [346.0, 347.0], [344.0, 41.0], [342.0, 107.5], [338.0, 120.0], [336.0, 159.0], [353.0, 69.0], [359.0, 158.5], [363.0, 188.0], [360.0, 45.0], [356.0, 137.0], [367.0, 227.0], [358.0, 279.5], [361.0, 114.0], [352.0, 47.0], [383.0, 120.0], [378.0, 99.0], [377.0, 84.0], [380.0, 129.0], [368.0, 119.5], [369.0, 36.0], [372.0, 43.0], [384.0, 188.0], [391.0, 285.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 407.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 54.266666666666666, "minX": 1.62731538E12, "maxY": 388.3333333333333, "series": [{"data": [[1.6273155E12, 388.3333333333333], [1.62731562E12, 345.76666666666665], [1.62731544E12, 387.18333333333334], [1.62731556E12, 383.1166666666667], [1.62731538E12, 237.16666666666666], [1.62731568E12, 54.266666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731568E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.62731538E12, "maxY": 388.0, "series": [{"data": [[1.6273155E12, 388.0], [1.62731562E12, 311.1166666666667], [1.62731544E12, 386.85], [1.62731556E12, 382.78333333333336], [1.62731538E12, 236.88333333333333], [1.62731568E12, 53.166666666666664]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62731562E12, 29.383333333333333], [1.62731568E12, 2.45]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.62731562E12, 4.933333333333334], [1.62731568E12, 0.26666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62731568E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.716666666666667, "minX": 1.62731538E12, "maxY": 388.0, "series": [{"data": [[1.6273155E12, 388.0], [1.62731562E12, 311.1166666666667], [1.62731544E12, 386.85], [1.62731556E12, 382.78333333333336], [1.62731538E12, 236.88333333333333], [1.62731568E12, 53.166666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62731562E12, 34.31666666666667], [1.62731568E12, 2.716666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731568E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.716666666666667, "minX": 1.62731538E12, "maxY": 388.0, "series": [{"data": [[1.6273155E12, 388.0], [1.62731562E12, 311.1166666666667], [1.62731544E12, 386.85], [1.62731556E12, 382.78333333333336], [1.62731538E12, 236.88333333333333], [1.62731568E12, 53.166666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62731562E12, 34.31666666666667], [1.62731568E12, 2.716666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62731568E12, "title": "Total Transactions Per Second"}},
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

