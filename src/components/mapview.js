import React, {useEffect, useRef, useState} from 'react';
import {loadModules} from 'esri-loader';

export const WebMapView = (
    {
        dataname,
        basemap = 'topo-vector'
    }
) => {
    const [error, setError] = useState(null);
    const mapRef = useRef();
    const mapname = 'DurhamLBAR_110519';
    const metaurl = process.env.PUBLIC_URL + '/gis/' + mapname + '_meta.json';
    const modules = [
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/GeoJSONLayer'
    ];
    const options = {css: true};

    useEffect(() => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        Promise.all([fetch(metaurl).then(res => res.json()), loadModules(modules, options)])
            .then(
                ([metadict, [ArcGISMap, MapView, GeoJSONLayer]]) => {
                    const map = new ArcGISMap({
                        basemap: basemap
                    });
                    // load the map view at the ref's DOM node
                    const [centerlat, centerlng] = metadict['center'];
                    const view = new MapView({
                        container: mapRef.current,
                        map: map,
                        center: [centerlat, centerlng], //[-78.8479, 35.97393],
                        zoom: 10
                    });
                    const template = metadict['template'];
                    const layer = new GeoJSONLayer({
                        url: process.env.PUBLIC_URL + '/gis/' + dataname + '.json',
                        popupTemplate: template
                    });
                    map.add(layer, 0);
                    return () => {
                        if (view) {
                            // destroy the map view
                            view.container = null;
                        }
                    };
                },
                (error) => {
                    setError(error);
                }
            );
    });
    // TODO: handle error, if set
    return <div className="webmap" ref={mapRef}/>;
};
