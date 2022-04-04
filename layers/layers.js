var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'แผนที่ดาวเทียม',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr__1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://110.164.49.72:8081/geoserver/WMSDOL/wms?",
    attributions: ' ',
                              params: {
                                "LAYERS": "MV_SPARCEL",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "รูปแปลงกรมที่ดิน",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__1, 1]);

lyr__0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr__0,lyr__1];
