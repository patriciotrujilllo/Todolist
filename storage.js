class Storage {
    constructor(source) {
        this.source = source;
    }

    get(key) {
        return this.source.get(key);
    }

    set(key, value) {
        return this.source.set(key, value);
    }

}

class SessionStorage {
    get(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    set(key, value) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
}