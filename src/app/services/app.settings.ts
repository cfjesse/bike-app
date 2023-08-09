import { environment } from '../../environments/environment';
export const baseUrl = environment.production ? './api/bike/' : 'https://localhost:5001/api/bike';
export const dropdownUrl = environment.production ? './api/manufacturer/' : 'https://localhost:5001/api/manufacturer';