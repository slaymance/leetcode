type TimeValue = [number, string];

class TimeMap {
  #map: { [key: string]: TimeValue[] } = {};

  isClosestTimestamp(values: TimeValue[], i: number, timestamp: number) {
    if (values[i][0] <= timestamp) {
      if (!values[i + 1] || values[i + 1][0] > timestamp) return true;
    }

    return false;
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.#map[key]) this.#map[key] = [];
    this.#map[key].push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const values = this.#map[key] ?? [];
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.isClosestTimestamp(values, mid, timestamp))
        return values[mid][1];

      if (values[mid][0] < timestamp) left = mid + 1;
      else right = mid - 1;
    }

    return '';
  }
}
