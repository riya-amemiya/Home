const Show = (
    name,
    num,
    text,
    Classification,
    Tribe,
    period,
    Atomicweight,
    type) => {
    return `
    <p>${name}</p>
    <p>${text}</p>
    <p>${num}番</p>
    <p>${Tribe}族${period}周期</p>
    <p>${type}</p>
    <p>${Classification}</p>
    <p>原子量${Atomicweight}</p>`;
}
export default Show;