let nafn: string = "Anna";
console.log(nafn);
//nafn = 25;
console.log(nafn);

function multiply(num: number, num2: number): number {
  return num * num2;
}

console.log(multiply(34, 25));

type Manneskja = {
  nafn: string;
  kennitala: number;
  harlitur: string;
};

const manneskja1: Manneskja = {
  nafn: "Jón",
  kennitala: 121212121,
  harlitur: "rauður",
};
function createHuman(
  nafn: string,
  kennitala: number,
  harlitur: string,
): Manneskja {
  return {
    nafn: nafn,
    kennitala: kennitala,
    harlitur: harlitur,
  };
}

const siggi = createHuman("Siggi", 21423123, "Svartur");
console.log(siggi);

type User = {
  name: string;
  address: Address;
};

type Address = {
  street: string;
  city: string;
  zipCode: number;
};

const myUser: User = {
  name: "Jónsi",
  address: {
    street: "Fagrihvammur 34",
    city: "Hafnarfjörður",
    zipCode: 344,
  },
};
