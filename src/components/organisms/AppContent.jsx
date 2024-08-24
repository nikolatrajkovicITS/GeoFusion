import React from 'react';
import useAppState from '@/hooks/useAppState';
import { useTranslation } from '@/hooks/useTranslation';
import { POLYGON, MARKER, EDITING_MODES } from '@/constants';

function AppContent() {
  const { t } = useTranslation();
  const {
    polygons,
    markers,
    editingMode,
    selectedItem,
    setEditingMode,
    setSelectedItem,
  } = useAppState();

  return (
    <div>
      <h1>{t('appTitle')}</h1>
      <h2>
        {t('editingMode')}: {editingMode.mode}
      </h2>
      <button onClick={() => setEditingMode(EDITING_MODES.POLYGON)}>
        {t('editPolygons')}
      </button>
      <button onClick={() => setEditingMode(EDITING_MODES.MARKER)}>
        {t('editMarkers')}
      </button>

      <h2>{t('polygons')}:</h2>
      <ul>
        {polygons.map(poly => (
          <li key={poly.id}>
            {poly.name} -
            <button
              onClick={() => setSelectedItem({ type: POLYGON, id: poly.id })}
            >
              {t('select')}
            </button>
          </li>
        ))}
      </ul>

      <h2>{t('markers')}:</h2>
      <ul>
        {markers.map(marker => (
          <li key={marker.id}>
            {marker.name} -
            <button
              onClick={() => setSelectedItem({ type: MARKER, id: marker.id })}
            >
              {t('select')}
            </button>
          </li>
        ))}
      </ul>

      <h2>{t('selectedItem')}:</h2>
      <p>
        {t('type')}: {selectedItem.type}, {t('id')}: {selectedItem.id}
      </p>
    </div>
  );
}

export default AppContent;
