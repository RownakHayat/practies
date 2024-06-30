"use client"
import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';

const Location: React.FC = () => {
    const [response, setResponse] = useState<any>(null);
    const origin = "uttara 11 zamzam tower";
    const destination = "dhanmondi";

    const directionsCallback = (res: any) => {
        console.log('Directions response:', res);
        if (res !== null) {
            if (res.status === 'OK') {
                setResponse(res);
            } else {
                console.error('Error fetching directions', res);
            }
        }
    };

    return (
        <div>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY || ''}>
                <GoogleMap
                    id='direction-example'
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    zoom={14}
                    center={{
                        lat: 23.8103,
                        lng: 90.4125
                    }}
                >
                    {destination && origin && (
                        <DirectionsService
                            options={{
                                destination: destination,
                                origin: origin,
                                travelMode: 'DRIVING'
                            }}
                            callback={directionsCallback}
                        />
                    )}
                    {response && (
                        <DirectionsRenderer
                            options={{
                                directions: response
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Location;
