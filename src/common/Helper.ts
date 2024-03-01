const groupBy = (list: any, keyGetter: string) => {
    const map = new Map();
    list.forEach((item: any) => {
        let currentList = map.get(item[keyGetter]); 
        if (currentList === undefined) {
            currentList = []
            map.set(item[keyGetter], currentList)
        }
        currentList.push(item)
    });
    return map;
}

const MapHelpers = {
    groupBy
}

export default MapHelpers
