export const updateObjectInArray = (items, itemId, objPropName, newObjProp) =>{
    return items.map(i => {
        if(i[objPropName] === itemId) return {...i, ...newObjProp};
        return i;
    });
};