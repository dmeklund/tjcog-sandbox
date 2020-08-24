import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = (
    {
        centerlat,
        centerlng,
        basemap='topo-vector'
    }
) => {
    const mapRef = useRef();

    useEffect(
        () => {
            // lazy load the required ArcGIS API for JavaScript modules and CSS
            const modules = [
                'esri/Map',
                'esri/views/MapView',
                // 'esri/layers/FeatureLayer',
                'esri/layers/GeoJSONLayer'
            ];
            const options = { css: true };
            loadModules(modules, options)
                .then(([ArcGISMap, MapView, GeoJSONLayer]) => {
                    const map = new ArcGISMap({
                        basemap: basemap
                    });

                    // load the map view at the ref's DOM node
                    const view = new MapView({
                        container: mapRef.current,
                        map: map,
                        center: [centerlat, centerlng], //[-78.8479, 35.97393],
                        zoom: 10
                    });

                    const template = {
                        title: "{PropName} ({PropAdd})",
                        content: [
                            {
                                type: "fields",
                                fieldInfos: [
                                    {
                                        fieldName: "TotAffUnit",
                                        label: "Total Affordable Units",
                                    },
                                    {
                                        fieldName: "AffType",
                                        label: "Affordable Type",
                                    },
                                    {
                                        fieldName: "ManName",
                                        label: "ManName",
                                    },
                                    {
                                        fieldName: "OwnName",
                                        label: "Owner",
                                    },
                                    {
                                        fieldName: "OwnType",
                                        label: "Ownership Type",
                                    },
                                    {
                                        fieldName: "FundStream",
                                        label: "Funding Stream",
                                    },
                                    {
                                        fieldName: "ConstDate",
                                        label: "Construction Date"
                                    }
                                ]
                            }
                        ]
                    };
                    const layer = new GeoJSONLayer({
                        url: process.env.PUBLIC_URL + '/DurhamLBAR_110519.json',
                            // "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
                        popupTemplate: template
                    });

                    map.add(layer, 0);

                    return () => {
                        if (view) {
                            // destroy the map view
                            view.container = null;
                        }
                    };
                });
        }
    );

    return <div className="webmap" ref={mapRef} />;
};
