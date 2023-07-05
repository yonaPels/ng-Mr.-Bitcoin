import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private apiUrl = 'https://blockchain.info/tobtc?currency=USD&value=1';
  private rateData: any;
  private readonly localStorageKey = 'bitcoinRateData';

  constructor(private http: HttpClient) {
    const storedRateData = localStorage.getItem(this.localStorageKey);
    if (storedRateData) {
      const { timestamp, data } = JSON.parse(storedRateData);
      this.rateData = { timestamp, data };
    }
  }

  getRate(): Observable<number> {
    const currentDate = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!this.rateData || (currentDate - this.rateData.timestamp) > oneDay) {
      return this.fetchRateFromNetwork().pipe(
        tap(response => {
          this.rateData = { timestamp: currentDate, data: response };
          this.storeRateData();
        })
      );
    } else {
      return of(this.rateData.data);
    }
  }

  private fetchRateFromNetwork(): Observable<number> {
    return this.http.get<number>(this.apiUrl);
  }

  private storeRateData(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.rateData));
  }
}
