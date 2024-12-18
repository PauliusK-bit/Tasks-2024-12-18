let company1 = {
  companyname: "SmartVision",
  opened: 2017,
  companyCode: 111680890,
  employees: 121,
  ceo: "Raj Subramaniam",
  nvo: true,
  workinLocations: ["Lithuania", "Latvia"],
  activityAreas: ["Technology", "Consulting"],
  contacts: {
    phone: +370612365489,
    email: "info@smartvision.com",
  },

  address: {
    country: "Lithuania",
    city: "Vilnius",
    street: "Vilniaus g",
    apartment: 23,
  },

  getAddress: function () {
    return `${this.address.country} ${this.address.city} ${this.address.street} ${this.address.apartment}`;
  },

  changeNvoStatusTrue: function () {
    this.nvo = true;
  },

  changeNvoStatusFalse: function () {
    this.nvo = false;
  },

  changeNvoStatus: function () {
    company1.nvo = !company1.nvo;
  },

  locationString: function () {
    return company1.workinLocations.join(", ");
  },

  activityString: function () {
    return company1.activityAreas.join(", ");
  },

  addCountry: function () {
    company1.workinLocations.push("Estonia");
  },

  deleteCountry: function () {
    return company1.workinLocations.shift();
  },

  deleteActivityArea: function () {
    return company1.activityAreas.shift();
  },
};

console.log(company1);

company1.changeNvoStatus();
console.log(company1.nvo);

company1.changeNvoStatusTrue();
console.log(company1.nvo);

company1.changeNvoStatusFalse();
console.log(company1.nvo);

console.log(company1.getAddress());

company1.locationString();
console.log(company1.locationString());

company1.activityString();
console.log(company1.activityString());

company1.addCountry();
console.log(company1.locationString());

company1.deleteCountry();
console.log(company1.deleteCountry());

company1.deleteActivityArea();
console.log(company1.deleteActivityArea());

let company2 = {};
company2.name = "AquaFlow";
company2.opened = 2013;
company2.companyCode = 333270490;
company2.employees = 117;
company2.ceo = "Lisa Su";
company2.nvo = false;
company2.workinLocations = ["Germany", "Spain"];
company2.activityAreas = ["Environmental consulting", "Technologies"];
company2.contacts = {};
company2.contacts.phone = +37061918156;
company2.contacts.email = "info@aquaflow.com";
company2.address = {};
company2.address.country = "Germany";
company2.address.city = "Berlin";
company2.address.street = "Kauno g";
company2.address.apartment = 24;

company2.getAddress = function () {
  return `${this.address.street} ${this.address.apartment}, ${this.address.city}, ${this.address.country}.`;
};

company2.changeNvoStatusTrue = function () {
  this.nvo = true;
};

company2.changeNvoStatusFalse = function () {
  this.nvo = false;
};

company2.toggleNvoStatus = function () {
  this.nvo = !this.nvo;
};

company2.getWorkingLocations = function () {
  return this.workinLocations.join(", ");
};

company2.getActivityAreas = function () {
  return this.activityAreas.join(", ");
};

company2.addWorkingLocation = function (newLocation) {
  this.workinLocations.push(newLocation);
};

company2.addActivityArea = function (newActivity) {
  this.activityAreas.push(newActivity);
};

company2.removeWorkingLocation = function (location) {
  const index = this.workinLocations.indexOf(location);
  if (index !== -1) {
    this.workinLocations.splice(index, 1);
  }
};

company2.removeActivityArea = function (activity) {
  const index = this.activityAreas.indexOf(activity);
  if (index !== -1) {
    this.activityAreas.splice(index, 1);
  }
};

console.log(company2.getAddress());
company2.changeNvoStatusTrue();
console.log(company2.nvo);
company2.changeNvoStatusFalse();
console.log(company2.nvo);
company2.toggleNvoStatus();
console.log(company2.nvo);
company2.toggleNvoStatus();
console.log(company2.nvo);

console.log(company2.getWorkingLocations());
console.log(company2.getActivityAreas());

company2.addWorkingLocation("France");
console.log(company2.getWorkingLocations());

company2.addActivityArea("Renewable Energy");
console.log(company2.getActivityAreas());

company2.removeWorkingLocation("Spain");
console.log(company2.getWorkingLocations());

company2.removeActivityArea("Technologies");
console.log(company2.getActivityAreas());

// console.log(company2);

// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.
