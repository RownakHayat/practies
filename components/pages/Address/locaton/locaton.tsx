import React from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';

interface LocationProps {
    origin: string;
    destination: string;
}

const Location: React.FC<LocationProps> = ({ origin, destination }) => {
    const [response, setResponse] = React.useState<any>(null);

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
                    {origin && destination && (
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
