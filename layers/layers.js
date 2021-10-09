ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([335265.437500, 8602440.000000, 679027.062500, 8822406.000000]);
var wms_layers = [];

var format_SUBCUENCASZEE2015_0 = new ol.format.GeoJSON();
var jsonSource_SUBCUENCASZEE2015_0 = new ol.source.Vector({
    attributions: ' ',
    format: format_SUBCUENCASZEE2015_0
});var lyr_SUBCUENCASZEE2015_0 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_SUBCUENCASZEE2015_0, 
    style: style_SUBCUENCASZEE2015_0,
    interactive: true,
    title: "SUBCUENCAS - ZEE 2015"
});

function getSUBCUENCASZEE2015_0Json(geojson) {
    var features_SUBCUENCASZEE2015_0 = format_SUBCUENCASZEE2015_0.readFeatures(geojson);
    jsonSource_SUBCUENCASZEE2015_0.addFeatures(features_SUBCUENCASZEE2015_0);
}
var lyr_sub_cuencas_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://200.123.29.106:80/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "geonode:sub_cuencas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "sub_cuencas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_sub_cuencas_1, 0]);
var lyr_Acc_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Acc_2.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var lyr_dir_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_3.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var lyr_fill_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_4.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var lyr_Acumulacion_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Acumulacion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Acumulacion_5.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var lyr_Direccion_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Direccion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Direccion_6.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var lyr_Agua_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Agua",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Agua_7.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var lyr_c_acc_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_8.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var lyr_c_fill_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_9.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [370714.343750, 8694112.250000, 416314.343750, 8741224.750000]
                            })
                        });
var format_c_rios_10 = new ol.format.GeoJSON();
var features_c_rios_10 = format_c_rios_10.readFeatures(json_c_rios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_rios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_10.addFeatures(features_c_rios_10);
var lyr_c_rios_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_10, 
                style: style_c_rios_10,
                interactive: true,
                title: '<img src="styles/legend/c_rios_10.png" /> c_rios'
            });

lyr_SUBCUENCASZEE2015_0.setVisible(true);lyr_sub_cuencas_1.setVisible(true);lyr_Acc_2.setVisible(true);lyr_dir_3.setVisible(true);lyr_fill_4.setVisible(true);lyr_Acumulacion_5.setVisible(true);lyr_Direccion_6.setVisible(true);lyr_Agua_7.setVisible(true);lyr_c_acc_8.setVisible(true);lyr_c_fill_9.setVisible(true);lyr_c_rios_10.setVisible(true);
var layersList = [lyr_SUBCUENCASZEE2015_0,lyr_sub_cuencas_1,lyr_Acc_2,lyr_dir_3,lyr_fill_4,lyr_Acumulacion_5,lyr_Direccion_6,lyr_Agua_7,lyr_c_acc_8,lyr_c_fill_9,lyr_c_rios_10];
lyr_SUBCUENCASZEE2015_0.set('fieldAliases', {'fid_1': 'fid_1', 'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CUENCAS': 'CUENCAS', 'CUEN_MAY': 'CUEN_MAY', 'perim_km': 'perim_km', 'Area_km2': 'Area_km2', 'L_t_cor_km': 'L_t_cor_km', 'P_med_Sc': 'P_med_Sc', 'Kc': 'Kc', 'Ff': 'Ff', 'Dd': 'Dd', 'Es': 'Es', 'A_med_km': 'A_med_km', 'Lcp_km': 'Lcp_km', 'am_2': 'am_2', 'am_5': 'am_5', 'am_10': 'am_10', 'am_25': 'am_25', 'am_50': 'am_50', 'am_75': 'am_75', 'am_100': 'am_100', 'am_200': 'am_200', 'am_500': 'am_500', 'am_1000': 'am_1000', 'd_ag_m3': 'd_ag_m3', 'd_hum_m3': 'd_hum_m3', 'd_total_m3': 'd_total_m3', 'oferta_m3': 'oferta_m3', 'balance_m3': 'balance_m3', 'NIVEL_5': 'NIVEL_5', 'NIVEL_6': 'NIVEL_6', 'NIVEL_7': 'NIVEL_7', 'NOMB_UH_5': 'NOMB_UH_5', 'NOMB_UH_6': 'NOMB_UH_6', 'NOMB_UH_7': 'NOMB_UH_7', 'N_C_Cons': 'N_C_Cons', 'N_C_Agr': 'N_C_Agr', 'Area_ha': 'Area_ha', });
lyr_c_rios_10.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_SUBCUENCASZEE2015_0.set('fieldImages', {'fid_1': '', 'fid': '', 'OBJECTID': '', 'CUENCAS': '', 'CUEN_MAY': '', 'perim_km': '', 'Area_km2': '', 'L_t_cor_km': '', 'P_med_Sc': '', 'Kc': '', 'Ff': '', 'Dd': '', 'Es': '', 'A_med_km': '', 'Lcp_km': '', 'am_2': '', 'am_5': '', 'am_10': '', 'am_25': '', 'am_50': '', 'am_75': '', 'am_100': '', 'am_200': '', 'am_500': '', 'am_1000': '', 'd_ag_m3': '', 'd_hum_m3': '', 'd_total_m3': '', 'oferta_m3': '', 'balance_m3': '', 'NIVEL_5': '', 'NIVEL_6': '', 'NIVEL_7': '', 'NOMB_UH_5': '', 'NOMB_UH_6': '', 'NOMB_UH_7': '', 'N_C_Cons': '', 'N_C_Agr': '', 'Area_ha': '', });
lyr_c_rios_10.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_SUBCUENCASZEE2015_0.set('fieldLabels', {'fid_1': 'no label', 'fid': 'no label', 'OBJECTID': 'no label', 'CUENCAS': 'no label', 'CUEN_MAY': 'no label', 'perim_km': 'no label', 'Area_km2': 'no label', 'L_t_cor_km': 'no label', 'P_med_Sc': 'no label', 'Kc': 'no label', 'Ff': 'no label', 'Dd': 'no label', 'Es': 'no label', 'A_med_km': 'no label', 'Lcp_km': 'no label', 'am_2': 'no label', 'am_5': 'no label', 'am_10': 'no label', 'am_25': 'no label', 'am_50': 'no label', 'am_75': 'no label', 'am_100': 'no label', 'am_200': 'no label', 'am_500': 'no label', 'am_1000': 'no label', 'd_ag_m3': 'no label', 'd_hum_m3': 'no label', 'd_total_m3': 'no label', 'oferta_m3': 'no label', 'balance_m3': 'no label', 'NIVEL_5': 'no label', 'NIVEL_6': 'no label', 'NIVEL_7': 'no label', 'NOMB_UH_5': 'no label', 'NOMB_UH_6': 'no label', 'NOMB_UH_7': 'no label', 'N_C_Cons': 'no label', 'N_C_Agr': 'no label', 'Area_ha': 'no label', });
lyr_c_rios_10.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});