import { useCallback, useContext } from 'react';
import AppContext from '@/context/AppContext';
import { ActionTypes } from '@/context/actionTypes';

const useAppState = () => {
  const { state, dispatch } = useContext(AppContext);

  if (!state || !dispatch) {
    throw new Error('useAppState must be used within an AppProvider');
  }

  const addPolygon = useCallback(
    polygon => {
      dispatch({ type: ActionTypes.ADD_POLYGON, payload: polygon });
    },
    [dispatch]
  );

  const updatePolygon = useCallback(
    polygon => {
      dispatch({ type: ActionTypes.UPDATE_POLYGON, payload: polygon });
    },
    [dispatch]
  );

  const deletePolygon = useCallback(
    id => {
      dispatch({ type: ActionTypes.DELETE_POLYGON, payload: id });
    },
    [dispatch]
  );

  const addMarker = useCallback(
    marker => {
      dispatch({ type: ActionTypes.ADD_MARKER, payload: marker });
    },
    [dispatch]
  );

  const updateMarker = useCallback(
    marker => {
      dispatch({ type: ActionTypes.UPDATE_MARKER, payload: marker });
    },
    [dispatch]
  );

  const deleteMarker = useCallback(
    id => {
      dispatch({ type: ActionTypes.DELETE_MARKER, payload: id });
    },
    [dispatch]
  );

  const setEditingMode = useCallback(
    mode => {
      dispatch({ type: ActionTypes.SET_EDITING_MODE, payload: mode });
    },
    [dispatch]
  );

  const setSelectedItem = useCallback(
    item => {
      dispatch({ type: ActionTypes.SET_SELECTED_ITEM, payload: item });
    },
    [dispatch]
  );

  const setSearchTerm = useCallback(
    term => {
      dispatch({ type: ActionTypes.SET_SEARCH_TERM, payload: term });
    },
    [dispatch]
  );

  return {
    ...state,
    addPolygon,
    updatePolygon,
    deletePolygon,
    addMarker,
    updateMarker,
    deleteMarker,
    setEditingMode,
    setSelectedItem,
    setSearchTerm,
  };
};

export default useAppState;
