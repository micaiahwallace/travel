import { AppConfig } from './types'

export const app: AppConfig = {
  mapsApiKey: process.env.MAPS_API_KEY ?? '',
}