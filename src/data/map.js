// src/data/map.js
import { CLINIC_INFO } from "../constants/clinic";

export const MAP_INFO = {
  ...CLINIC_INFO.location,
  addressTaxi: CLINIC_INFO.addressTaxi,
  nearbyLandmarks: CLINIC_INFO.nearbyLandmarks,
};
