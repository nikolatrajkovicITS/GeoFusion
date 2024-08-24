import React from 'react';
import useAppState from '@/hooks/useAppState';

function AppContent() {
  const {
    polygons,
    markers,
    editingMode,
    selectedItem,
    addPolygon,
    updatePolygon,
    deletePolygon,
    addMarker,
    updateMarker,
    deleteMarker,
    setEditingMode,
    setSelectedItem,
  } = useAppState();

  return (
    <div>
      <h1>GeoFusion App</h1>
      <h2>Editing Mode: {editingMode.mode}</h2>
      <button onClick={() => setEditingMode('polygon')}>Edit Polygons</button>
      <button onClick={() => setEditingMode('marker')}>Edit Markers</button>

      <h2>Polygons:</h2>
      <ul>
        {polygons.map(poly => (
          <li key={poly.id}>
            {poly.name} -
            <button
              onClick={() => setSelectedItem({ type: 'polygon', id: poly.id })}
            >
              Select
            </button>
          </li>
        ))}
      </ul>

      <h2>Markers:</h2>
      <ul>
        {markers.map(marker => (
          <li key={marker.id}>
            {marker.name} -
            <button
              onClick={() => setSelectedItem({ type: 'marker', id: marker.id })}
            >
              Select
            </button>
          </li>
        ))}
      </ul>

      <h2>Selected Item:</h2>
      <p>
        Type: {selectedItem.type}, ID: {selectedItem.id}
      </p>
    </div>
  );
}

export default AppContent;
