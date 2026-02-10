"use client";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    borderRadius: '16px'
};

const GlobalMap = ({ trip }: { trip: any }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || ""
    })

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const [map, setMap] = useState<any | null>(null)

    const onLoad = useCallback(function callback(map: any) {
        const google = (window as any).google;
        if (!google || !trip) return;

        // Bounds to fit all markers
        const bounds = new google.maps.LatLngBounds();

        // Add hotels to bounds
        trip?.hotels?.forEach((hotel: any) => {
            if (hotel?.geo_coordinates) {
                bounds.extend({
                    lat: hotel.geo_coordinates.latitude,
                    lng: hotel.geo_coordinates.longitude
                })
            }
        });

        // Add activities to bounds
        trip?.itinerary?.forEach((item: any) => {
            item.activities?.forEach((activity: any) => {
                if (activity?.geo_coordinates) {
                    bounds.extend({
                        lat: activity.geo_coordinates.latitude,
                        lng: activity.geo_coordinates.longitude
                    })
                }
            })
        })

        if (!bounds.isEmpty()) {
            map.fitBounds(bounds);
        }
        setMap(map)
    }, [trip])

    const onUnmount = useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    if (!isLoaded) return <div>Loading Map...</div>
    if (!trip) return null;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                mapId: "DEMO_MAP_ID", // Modern vector map
                gestureHandling: "cooperative"
            }}
        >
            {/* Hotel Markers */}
            {trip?.hotels?.map((hotel: any, index: number) => (
                hotel?.geo_coordinates && (
                    <Marker
                        key={`hotel-${index}`}
                        position={{
                            lat: hotel.geo_coordinates.latitude,
                            lng: hotel.geo_coordinates.longitude
                        }}
                        label={{
                            text: "H",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    />
                )
            ))}

            {/* Activity Markers */}
            {trip?.itinerary?.map((item: any) => (
                item.activities?.map((activity: any, index: number) => (
                    activity?.geo_coordinates && (
                        <Marker
                            key={`activity-${index}`}
                            position={{
                                lat: activity.geo_coordinates.latitude,
                                lng: activity.geo_coordinates.longitude
                            }}
                            label={{
                                text: "A",
                                color: "white",
                                fontWeight: "bold",
                                className: "bg-blue-500"
                            }}
                        />
                    )
                ))
            ))}
        </GoogleMap>
    )
}

export default GlobalMap