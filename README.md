# React Leaflet Map Application

This application is a React-based map tool that allows users to select a location on a map and displays details about the selected location, including the state name. The application leverages the `react-leaflet` library and OpenStreetMap's Nominatim API for reverse geocoding.

## Features

1. Interactive map using Leaflet.
2. Clickable map to fetch location details (state, city, country).
3. Dynamically display the state name on the webpage.
4. Log coordinates and location details to the console for debugging.
5. Responsive and styled map container.

## Requirements

- Node.js and npm installed on your machine.
- An API key from MapTiler (for the TileLayer).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:

   ```
   http://localhost:5173
   ```

## Usage

1. Open the application in your browser.
2. Interact with the map:
   - Click anywhere on the map to fetch location details.
   - The state name will appear at the bottom-left of the map.
   - Coordinates, city, state, and country details will be logged to the console.

## File Structure

```
src/
├── components/
│   └── Map.jsx         # Main map component
├── App.jsx             # Entry point of the application
├── index.css           # Global styles
├── main.jsx            # Application bootstrap file
```

## Key Code Highlights

### Map Component (`Map.jsx`)

- **`LocationMarker`**: Handles user clicks on the map and fetches location details using the Nominatim API.
- **Reverse Geocoding**:
  ```javascript
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  );
  const data = await response.json();
  ```
- **Dynamic State Display**: The fetched state name is displayed dynamically on the webpage.

### API Key

Replace the placeholder `ZhtMLn6IC0Ci4gtc93hA` in the `TileLayer` URL with your actual MapTiler API key.

## Troubleshooting

- **Map is not rendering properly**:

  - Ensure the `react-leaflet` and `leaflet` dependencies are installed.
  - Verify the `className` for the map container includes `h-full w-full`.

- **Location details not showing**:

  - Check the console for errors related to the Nominatim API.
  - Ensure you have internet connectivity to access the API.

## Dependencies

- `react-leaflet`
- `leaflet`
- `vite`

## Customization

### CSS

Customize the appearance of the map container by modifying the `className` in the JSX or updating `index.css`.

### Map Center and Zoom

Adjust the map's default center and zoom level by modifying the `center` and `zoom` props of the `MapContainer`:

```javascript
<MapContainer center={[20.5937, 78.9629]} zoom={5} className="h-full w-full">
```

## License

This project is licensed under the MIT License.

