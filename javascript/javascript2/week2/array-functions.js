function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
  const listingFacilities = [
    'Parkering',
    'Elevator',
    'Altan',
    'Have',
    'Husdyr',
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

const theList = generateListings(37);
console.log('-----------------displaying sizes of properties------------');
theList.forEach((item) => {
  console.log(item.size);
});

const listingPrices = theList.map((item) => item.price);

console.log('-----------------displaying prices of properties------------');
console.log(listingPrices);

const cheapListings = theList.filter((item) => item.price < 5000);
console.log('-----------------displaying cheapest properties------------');
console.log(cheapListings);

const expensiveListings = theList.filter((item) => item.price >= 5000);
console.log('-----------------displaying expensive properties------------');
console.log(expensiveListings);

/*SAMPLE OBJECT type: 'House',
    facilities: [ 'Have', 'Altan', 'Husdyr', 'Parkering' ],
    price: 8965,
    hasGarden: true,
    size: 672,
    img: 'https://loremflickr.com/200/200/House'*/
const listingsWithParking = theList.filter((item) =>
  item.facilities.includes('Parkering')
);
console.log('-----------------displaying properties with parking------------');
console.log(listingsWithParking);
