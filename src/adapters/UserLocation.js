import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditLocationIcon from '@mui/icons-material/EditLocation';

const UserLocation = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState(localStorage.getItem('location') || '');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                let lat, lon;
                if (location && location.trim() !== '') {
                    // Use the stored location if it exists and is not empty
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fa159c10afad1b327c67736381f2ca89`
                    );
                    lat = response.data.coord.lat;
                    lon = response.data.coord.lon;
                }
                 else {
                    // Get the user's current location
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });
                    lat = position.coords.latitude;
                    lon = position.coords.longitude;

                    // Use the API location as the default location
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa159c10afad1b327c67736381f2ca89`
                    );
                    setLocation(response.data.name);
                }
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa159c10afad1b327c67736381f2ca89`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchWeatherData();
    }, [location]);

    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
        localStorage.setItem('location', newLocation);
    };

    const handleMouseEnter = () => {
        setIsEditing(true);
    };

    const handleMouseLeave = () => {
        setIsEditing(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Fetch weather data for the new location
        setLocation(location.trim());
        setIsEditing(false);

    };

    return (
        <div className="user-location">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={handleLocationChange}
                    />
                    <button type="submit" onClick={handleSubmit}>Save</button>
                </form>
            ) : (
                <><EditLocationIcon style={{fontSize:"15px"}}/>
                    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {location}
                        
                    </span>
                    {weatherData && (
                        <div className="weather-data">
                            <div>{weatherData.weather[0].name}</div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default UserLocation;
