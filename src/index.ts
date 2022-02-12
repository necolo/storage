export default class Storage<T extends {[key: string]: any}> {
  constructor(
    private initValue: T,
    private storage = localStorage,
  ) {}

  public get<K extends keyof T>(key: K): T[K] {
    const defaultResult = this.initValue[key];
    const v = this.storage.getItem(key as string);
    if (!v) {
      return defaultResult;
    }
  
    switch (typeof defaultResult) {
      case 'boolean':
        // @ts-ignore
        return v === 'true';
      case 'number':
        // @ts-ignore
        return Number(v);
      case 'undefined':
        return defaultResult;
      case 'object':
        return JSON.parse(v);
      case 'string':
      default:
        // @ts-ignore
        return v;
    }
  }

  public set<K extends keyof T>(key: K, value: T[K]) {
    let v = '';

    switch (typeof this.initValue[key]) {
      case 'object':
        v = JSON.stringify(value);
        break;
      default:
        v = value.toString();
        break;
    }
  
    this.storage.setItem(key as string, v);
  }

  public del(key: keyof T) {
    this.storage.removeItem(key as string);
  }

  /**
   * Clear all localStorage values
   */
  public clear() {
    this.storage.clear();
  }
}