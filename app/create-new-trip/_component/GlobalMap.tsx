"use client";
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
    minHeight: '450px',
    borderRadius: '16px'
};

const GlobalMap = ({ trip, activeDay }: { trip: any, activeDay: number | null }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || ""
    });

    const [map, setMap] = useState<any | null>(null);

    const onLoad = useCallback(function callback(map: any) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map: any) {
        setMap(null);
    }, []);

    // Set map bounds dynamically based on activeDay
    useEffect(() => {
        if (!map || !(window as any).google || !trip) return;
        const google = (window as any).google;
        const bounds = new google.maps.LatLngBounds();

        if (activeDay) {
            const dayData = trip.itinerary?.find((item: any) => item.day === activeDay);
            let hasPoints = false;

            // Include first hotel in bounds
            const hotel = trip.hotels?.[0];
            if (hotel?.geo_coordinates?.latitude && hotel?.geo_coordinates?.longitude) {
                bounds.extend({
                    lat: hotel.geo_coordinates.latitude,
                    lng: hotel.geo_coordinates.longitude
                });
                hasPoints = true;
            }

            // Include current day's activities in bounds
            dayData?.activities?.forEach((activity: any) => {
                if (activity?.geo_coordinates?.latitude && activity?.geo_coordinates?.longitude) {
                    bounds.extend({
                        lat: activity.geo_coordinates.latitude,
                        lng: activity.geo_coordinates.longitude
                    });
                    hasPoints = true;
                }
            });

            if (hasPoints) {
                map.fitBounds(bounds);
                // Set custom zoom offset to prevent maps from getting too close
                const listener = google.maps.event.addListener(map, 'bounds_changed', () => {
                    if (map.getZoom() > 15) map.setZoom(15);
                    google.maps.event.removeListener(listener);
                });
            }
        } else {
            // Overview Mode: include all hotels and activities
            let hasPoints = false;
            trip?.hotels?.forEach((hotel: any) => {
                if (hotel?.geo_coordinates?.latitude && hotel?.geo_coordinates?.longitude) {
                    bounds.extend({
                        lat: hotel.geo_coordinates.latitude,
                        lng: hotel.geo_coordinates.longitude
                    });
                    hasPoints = true;
                }
            });

            trip?.itinerary?.forEach((item: any) => {
                item.activities?.forEach((activity: any) => {
                    if (activity?.geo_coordinates?.latitude && activity?.geo_coordinates?.longitude) {
                        bounds.extend({
                            lat: activity.geo_coordinates.latitude,
                            lng: activity.geo_coordinates.longitude
                        });
                        hasPoints = true;
                    }
                });
            });

            if (hasPoints) {
                map.fitBounds(bounds);
            }
        }
    }, [activeDay, map, trip]);

    // Calculate Polyline route path coordinates
    const getRouteCoordinates = () => {
        if (!trip || !activeDay) return [];
        
        const dayData = trip.itinerary?.find((item: any) => item.day === activeDay);
        if (!dayData || !dayData.activities) return [];

        const coords: { lat: number; lng: number }[] = [];

        // Start at hotel
        const hotel = trip.hotels?.[0];
        if (hotel?.geo_coordinates?.latitude && hotel?.geo_coordinates?.longitude) {
            coords.push({
                lat: hotel.geo_coordinates.latitude,
                lng: hotel.geo_coordinates.longitude
            });
        }

        // Add activities in order
        dayData.activities.forEach((activity: any) => {
            if (activity?.geo_coordinates?.latitude && activity?.geo_coordinates?.longitude) {
                coords.push({
                    lat: activity.geo_coordinates.latitude,
                    lng: activity.geo_coordinates.longitude
                });
            }
        });

        // Loop back to hotel
        if (coords.length > 1 && hotel?.geo_coordinates?.latitude && hotel?.geo_coordinates?.longitude) {
            coords.push({
                lat: hotel.geo_coordinates.latitude,
                lng: hotel.geo_coordinates.longitude
            });
        }

        return coords;
    };

    if (!isLoaded) return <div className="p-10 text-center text-neutral-500">Loading Map...</div>;
    if (!trip) return null;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                mapId: "DEMO_MAP_ID",
                gestureHandling: "cooperative"
            }}
        >
            {/* Hotel Markers */}
            {trip?.hotels?.map((hotel: any, index: number) => {
                if (activeDay && index > 0) return null; // Show only primary hotel in day view
                return hotel?.geo_coordinates && (
                    <Marker
                        key={`hotel-${index}`}
                        position={{
                            lat: hotel.geo_coordinates.latitude,
                            lng: hotel.geo_coordinates.longitude
                        }}
                        label={{
                            text: "🏨",
                            fontSize: "14px"
                        }}
                        title={hotel.hotel_name}
                    />
                );
            })}

            {/* Activity Markers */}
            {trip?.itinerary?.map((item: any) => {
                if (activeDay && item.day !== activeDay) return null; // Hide other days' activities
                return item.activities?.map((activity: any, index: number) => (
                    activity?.geo_coordinates && (
                        <Marker
                            key={`activity-${item.day}-${index}`}
                            position={{
                                lat: activity.geo_coordinates.latitude,
                                lng: activity.geo_coordinates.longitude
                            }}
                            label={{
                                text: `${index + 1}`,
                                color: "white",
                                fontWeight: "bold"
                            }}
                            title={activity.place_name}
                        />
                    )
                ));
            })}

            {/* Polyline Route */}
            {activeDay && (
                <Polyline
                    path={getRouteCoordinates()}
                    options={{
                        strokeColor: "#E11D48", // Theme Rose-600 / primary highlight
                        strokeOpacity: 0.9,
                        strokeWeight: 4,
                        geodesic: true,
                        icons: typeof window !== 'undefined' && (window as any).google?.maps?.SymbolPath ? [{
                            icon: {
                                path: (window as any).google?.maps?.SymbolPath?.FORWARD_CLOSED_ARROW
                            },
                            offset: '100px',
                            repeat: '100px'
                        }] : undefined
                    }}
                />
            )}
        </GoogleMap>
    );
}

export default GlobalMap;