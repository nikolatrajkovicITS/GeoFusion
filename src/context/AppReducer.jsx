import { ActionTypes } from '@/context/actionTypes';
import { POLYGON } from '@/constants';

export const initialState = {
  polygons: [
    {
      id: 1,
      name: 'Polygon 1',
      coordinates: [
        { lat: 40.712776, lng: -74.005974 },
        { lat: 40.713776, lng: -74.006974 },
        { lat: 40.714776, lng: -74.007974 },
      ],
    },
    {
      id: 2,
      name: 'Polygon 2',
      coordinates: [
        { lat: 34.052235, lng: -118.243683 },
        { lat: 34.053235, lng: -118.244683 },
        { lat: 34.054235, lng: -118.245683 },
      ],
    },
  ],
  markers: [
    {
      id: 1,
      name: 'Marker 1',
      coordinate: { lat: 37.774929, lng: -122.419418 },
    },
    {
      id: 2,
      name: 'Marker 2',
      coordinate: { lat: 51.507351, lng: -0.127758 },
    },
  ],
  selectedItem: {
    type: POLYGON,
    id: null,
  },
  searchTerm: '',
  selectedTab: POLYGON,
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POLYGON:
      return { ...state, polygons: [...state.polygons, action.payload] };
    case ActionTypes.UPDATE_POLYGON:
      return {
        ...state,
        polygons: state.polygons.map(poly =>
          poly.id === action.payload.id ? action.payload : poly
        ),
      };
    case ActionTypes.DELETE_POLYGON:
      return {
        ...state,
        polygons: state.polygons.filter(poly => poly.id !== action.payload),
      };
    case ActionTypes.ADD_MARKER:
      return { ...state, markers: [...state.markers, action.payload] };
    case ActionTypes.UPDATE_MARKER:
      return {
        ...state,
        markers: state.markers.map(marker =>
          marker.id === action.payload.id ? action.payload : marker
        ),
      };
    case ActionTypes.DELETE_MARKER:
      return {
        ...state,
        markers: state.markers.filter(marker => marker.id !== action.payload),
      };
    case ActionTypes.SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case ActionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case ActionTypes.SET_SELECTED_TAB:
      return { ...state, selectedTab: action.payload };

    default:
      return state;
  }
};
