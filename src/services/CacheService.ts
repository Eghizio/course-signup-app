// Simple permanent in memory cache (https://github.com/Eghizio/ogame-api/blob/master/src/services/CacheService.ts)
class CacheService{
    cache: Map<string, any>
    constructor(){
        this.cache = new Map();
    }

    log(...args: string[]){
        console.log("\x1b[34m%s\x1b[0m", "[cache] ", ...args);
    }

    set(key: string, value: any){
        this.log(`Setting "${key}" to cache...`);
        this.cache.set(key, value);
        return value;
    }

    get(key: string){
        this.log(`Retrieving "${key}" from cache...`);
        return this.cache.get(key);
    }

    delete(key: string){
        this.log(`Deleting "${key}" from cache...`);
        return this.cache.delete(key);
    }

    clearCache(){
        this.log("Clearing cache...");
        this.cache.clear();
    }

    has(key: string){
        const result = this.cache.has(key);
        if(result) this.log(`Found cache item for "${key}"...`);
        else this.log(`No cache item found for "${key}"...`);
        return result;
    }

    keys(){
        return this.cache.keys();
    }
    
    values(){
        return this.cache.values();
    }
}

export default CacheService;