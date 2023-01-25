console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovies = async () => {
    const promiseTickets = new Promise((resolve, reject) => {
       setTimeout(()=>resolve('ticket'),3000); 
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrink`));

    let ticket = await promiseTickets;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log("husband: we should go in");
    console.log(`wife: i need some butter on my ${popcorn}`);

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on ${popcorn}`);
    console.log("husband: anything else?");
    console.log("wife: i need ColDrinks");

    let ColdDrinks = await getColdDrinks;
    console.log(`husband: i got some ${ColdDrinks}`);
    console.log('husband: anything else?');
    console.log('wife: lets go we are getting late');

    return ticket;
}

preMovies().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
