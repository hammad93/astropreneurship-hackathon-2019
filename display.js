var viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate : true
});
viewer.dataSources.add(Cesium.CzmlDataSource.load('https://raw.githubusercontent.com/hammad93/astropreneurship-hackathon-2019/master/iss.czml'));
var entities = viewer.entities;

var i;
for (i = 0; i < 3; ++i) {
    entities.add({
        position : Cesium.Cartesian3.fromDegrees(0, 0, 0),
        ellipsoid : {
            radii : new Cesium.Cartesian3(9000000.0, 9000000.0, 6500000.0),
            outline : true,
            outlineColor : Cesium.Color.WHITE,
            outlineWidth : 2,
            material : Cesium.Color.DARKGREY.withAlpha(0.1)
        }
    });
    entities.add({
        position : Cesium.Cartesian3.fromDegrees(180, 0, 0),
        ellipsoid : {
            radii : new Cesium.Cartesian3(9000000.0, 9000000.0, 6500000.0),
            outline : true,
            outlineColor : Cesium.Color.WHITE,
            outlineWidth : 2,
            material : Cesium.Color.DARKGREY.withAlpha(0.1)
        }
    });
}