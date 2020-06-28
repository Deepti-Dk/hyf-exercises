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
/******************************************************************************** */
const listings = generateListings(20);
console.log(listings);

const filter1 = {
  type: ['Farm','House','Apartment','Shed','Dorm','House']
};

const filteredListing=listings.filter((element, type) => element.type.includes(filter1.type) && element.price>=1500000);
const farmListings = filterListings((listings, typeFilter)=>;

const filter2 = {
    type: 'farm',
    minPrize: 1500000,
};

const cheapFarmListings = filterListings(listings, filter2);