const costumers = ['Max', 'Manuel', 'Anna'];
const activeCostumers = ['Max', 'Manuel'];

const inactiveCostumers = _.difference(costumers, activeCostumers);

console.log(inactiveCostumers);