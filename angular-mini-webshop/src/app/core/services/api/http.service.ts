import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from '../../config/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.apiUrl,
      timeout: 5000,
    });

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('HTTP Error:', error);
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string) {
    const res = await this.axiosInstance.get<T>(url);
    return res.data;
  }

  async post<T>(url: string, body: unknown) {
    const res = await this.axiosInstance.post<T>(url, body);
    return res.data;
  }

  async put<T>(url: string, body: unknown) {
    const res = await this.axiosInstance.put<T>(url, body);
    return res.data;
  }

  async delete<T>(url: string) {
    const res = await this.axiosInstance.delete<T>(url);
    return res.data;
  }
}
