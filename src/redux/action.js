export const Filter = (val) => ({
    type: "FILTER_LIST",
    payload: val
})
export const FilterR = (val) => ({
    type: "FILTER_WLIST",
    payload: val
})

export const Reload = () => ({
    type: "RELOAD"
    
})