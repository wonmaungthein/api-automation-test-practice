export const getMaxTestsValues = (array, number) => {
    return array.sort((a, b) => (b.tests - a.tests)).slice(0, number);
};

export const getMaxDeathsValues = (array, number) => {
    return array.sort((a, b) => (b.deaths - a.deaths)).slice(0, number);
}