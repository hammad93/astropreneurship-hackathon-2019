var viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate : true
});
viewer.dataSources.add(Cesium.CzmlDataSource.load('https://raw.githubusercontent.com/hammad93/astropreneurship-hackathon-2019/master/iss.czml'));