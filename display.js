var viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate : true
});

Sandcastle.addDefaultToolbarButton('Satellites', function() {
    viewer.dataSources.add(Cesium.CzmlDataSource.load('https://raw.githubusercontent.com/hammad93/astropreneurship-hackathon-2019/master/iss.czml'));

    viewer.camera.flyHome(0);
});