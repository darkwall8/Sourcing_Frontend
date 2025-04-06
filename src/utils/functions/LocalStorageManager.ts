export class LocalStorageManager {

    static setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key: string): any {
        const item = localStorage.getItem(key);
        return item? JSON.parse(item) : null;
    }

    static removeItem(key: string): void {
        localStorage.removeItem(key);
    }

}