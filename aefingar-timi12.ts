// =====================================================
// NTV · Forritun 101 · Tími 12
// Verkefni: fetch upprifjun + TypeScript grunnur
//
// TVÆR LEIÐIR TIL AÐ VINNA:
//
//   Leið A (ekkert að setja upp):
//     Opnaðu https://www.typescriptlang.org/play
//     Afritaðu einn hluta í einu þangað inn. Rauðar línur = villur.
//     Ýttu á "Run" og skoðaðu útkomuna í "Logs" flipanum til hægri.
//
//   Leið B (VS Code):
//     Opnaðu þessa skrá í VS Code. VS Code sýnir TypeScript-villur sjálft.
//     Keyrðu hana í terminal:   npx tsx aefingar-timi12.ts
//
// REGLUR:
//   - Eitt verkefni í einu. Keyrðu eftir hvert.
//   - "// Á að gefa:" segir hvað á að koma út.
//   - "// 🔴" þýðir: hér á að koma rauð lína. Lestu villuna og lagaðu hana.
//   - Verkefni sem eru komment (//) takið þið kommentin af þegar þið komið að þeim.
//     Í VS Code: veldu línurnar og Ctrl + K, svo Ctrl + U.
//
// ⭐ = létt   ⭐⭐ = miðlungs   ⭐⭐⭐ = erfitt
// =====================================================

// =====================================================
// HLUTI A — Upprifjun: fetch
// Mynstrið er alltaf það sama:
//   const response = await fetch(url);
//   const gogn = await response.json();
//   ...nota gögnin
// Opnaðu alltaf URL-ið í vafranum fyrst og skoðaðu JSON-ið!
// =====================================================

async function hlutiA() {
  // A1 ⭐ Sæktu https://dummyjson.com/recipes/1 og prentaðu nafnið (name).
  // Á að gefa: Classic Margherita Pizza
  const response = await fetch("https://dummyjson.com/recipes/1");
  const recipe = await response.json();
  console.log(recipe.name);

  // A2 ⭐ Sæktu https://dummyjson.com/quotes/random og prentaðu tilvitnunina
  // og höfundinn: "„...“ — Höfundur"

  const response2 = await fetch("https://dummyjson.com/quotes/random");
  const randQuote = await response2.json();

  console.log(`„${randQuote.quote}“ — ${randQuote.author}`);

  // A3 ⭐ Sæktu https://dummyjson.com/products?limit=5 og prentaðu titlana
  // á öllum vörunum með for...of. Muna: listinn er í gogn.products
  const response3 = await fetch("https://dummyjson.com/products?limit=5");
  const gogn = await response3.json();

  for (const vara of gogn.products) {
    console.log(vara.title);
  }

  // A4 ⭐⭐ Sæktu https://dummyjson.com/products?limit=30 og notaðu map
  // til að búa til array af verðum (price). Prentaðu það.
  const response4 = await fetch("https://dummyjson.com/products?limit=30");
  const data = await response4.json();
  const priceData = data.products.map((product: any) => product.price);
  console.log("Price data: ", priceData);

  // A5 ⭐⭐ Sæktu https://dummyjson.com/users?limit=30. Hversu margir notendur
  // eru eldri en 40 ára? (filter + .length)
  const response5 = await fetch("https://dummyjson.com/users?limit=30");
  const userData = await response5.json();
  const totalOld: number = userData.users.filter(
    (user: any) => user.age > 40,
  ).length;
  console.log("Older than 40: ", totalOld);

  // A6 ⭐⭐ Sæktu https://dummyjson.com/recipes/search?q=chicken
  // Hversu margar uppskriftir fundust? Prentaðu nöfnin.
  const response6 = await fetch(
    "https://dummyjson.com/recipes/search?q=chicken",
  );
  const recipeData = await response6.json();
  const recipeCount = recipeData.recipes.length;
  console.log("Number of recipes: ", recipeCount);
  recipeData.recipes.forEach((recipe: any) => console.log(recipe.name));

  // A7 ⭐⭐⭐ Skrifaðu async function `saekjaUppskrift(id)` sem sækir
  // https://dummyjson.com/recipes/${id} og prentar nafnið.
  // Kallaðu á hana með 1, 2 og 3.
  saekjaUppskriftir();
}

async function saekjaUppskrift(id: number) {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await response.json();

  console.log("Recipe name: ", recipe.name);
}
async function saekjaUppskriftir() {
  await saekjaUppskrift(1);
  await saekjaUppskrift(2);
  await saekjaUppskrift(3);
}

//hlutiA();

// =====================================================
// HLUTI B — Types á breytur
// TypeScript = JavaScript + types.
// Við segjum hvaða type breyta er, og VS Code varar okkur við villum
// ÁÐUR en kóðinn keyrir.
//
//   let nafn: string = "Anna";
//   let aldur: number = 25;
//   let erNemandi: boolean = true;
// =====================================================

// B1 ⭐ Búðu til þrjár breytur með types: nafnið þitt (string),
// aldurinn þinn (number) og hvort þú kunnir TypeScript (boolean). Prentaðu þær.
const myName: string = "Unnar";
const myAge: number = 41;
const knowTypescript: boolean = false;

console.log(myName, myAge, knowTypescript);

// B2 ⭐ Takið kommentin af. 🔴 Lestu villuna. Lagaðu svo með því að setja tölu.
let verd: number = 1290;
verd = 0;

// B3 ⭐ Takið kommentin af. 🔴 Hvaða type ætti `borg` að vera? Lagaðu.
let borg: string = "Reykjavík";

// B4 ⭐ TypeScript getur giskað sjálft. Skrifaðu  let land = "Ísland";
// og færðu músina yfir `land` í VS Code (eða Playground). Hvaða type sérðu?
// Svar: string
let land = "Ísland";

// B5 ⭐⭐ Takið kommentin af. 🔴 Af hverju kemur villa? Lagaðu.
let fjoldi = 10;
fjoldi = 10;

// =====================================================
// HLUTI C — Types á functions
// Við setjum types á parameters og á það sem function skilar:
//
//   function tvofalda(tala: number): number {
//     return tala * 2;
//   }
// =====================================================

// C1 ⭐ Skrifaðu function `heilsa(nafn: string): string` sem skilar "Halló, Anna!"
// Á að gefa: Halló, Anna!
function heilsa(nafn: string): string {
  return "Halló " + nafn;
}
console.log(heilsa("Anna"));

// C2 ⭐ Skrifaðu function `leggjaSaman(a: number, b: number): number`.
// Á að gefa: leggjaSaman(4, 6) → 10
function leggjaSaman(a: number, b: number): number {
  return a + b;
}
console.log(leggjaSaman(4, 6));

// C3 ⭐ Takið kommentin af. 🔴 Hvað er að? Lagaðu kallið, ekki function-ina.
function ferningur(x: number): number {
  return x * x;
}
console.log(ferningur(5));

// C4 ⭐⭐ Skrifaðu function `erFullordinn(aldur: number): boolean`
// sem skilar true ef aldur er 18 eða meira.
// Á að gefa: erFullordinn(17) → false, erFullordinn(30) → true
function erFullordinn(aldur: number): boolean {
  return aldur >= 18;
}
console.log(erFullordinn(17));
console.log(erFullordinn(30));

// C5 ⭐⭐ Skrifaðu arrow function `medVsk` sem tekur verð (number) og skilar
// verðinu með 24% vsk. Hint: const medVsk = (verd: number): number => ...
// Á að gefa: medVsk(1000) → 1240
const medVsk = (verd: number): number => {
  return verd * 1.24;
};
console.log(medVsk(1000));

// C6 ⭐⭐ Takið kommentin af. 🔴 function-in segist skila number en skilar string. Lagaðu.
function lengd(texti: string): string {
  return "Lengdin er " + texti.length;
}

// =====================================================
// HLUTI D — Arrays með types
//   const tolur: number[] = [1, 2, 3];
//   const nofn: string[] = ["Anna", "Óli"];
// =====================================================

// D1 ⭐ Búðu til `uppahaldsMatur: string[]` með þremur réttum. Prentaðu hann.
const uppahaldsMatur: string[] = ["Pizza", "Sushi", "Taco"];
console.log(uppahaldsMatur);

// D2 ⭐ Takið kommentin af. 🔴 Lagaðu svo aðeins tölur séu í array-inu.
const einkunnir: number[] = [8, 9, 10, 7];

// D3 ⭐⭐ Notaðu map á `einkunnir` (eftir að þú lagaðir hana) til að bæta 1 við hverja.
// Færðu músina yfir niðurstöðuna. Hvaða type er hún?
const einkunnirHaerra: number[] = einkunnir.map((einkunn: number) => einkunn++);

// D4 ⭐⭐ Skrifaðu function `summa(listi: number[]): number` með reduce.
// Á að gefa: summa([4, 8, 15]) → 27
function summa(listi: number[]): number {
  return listi.reduce(
    (heildarSumma: number, tala: number) => heildarSumma + tala,
    0,
  );
}
console.log(summa([4, 8, 15]));

// D5 ⭐⭐ Skrifaðu function `lengstaNafn(nofn: string[]): string`
// sem skilar lengsta nafninu.
// Á að gefa: lengstaNafn(["Anna", "Bjarki", "Óli"]) → Bjarki
function lengstaNafn(nofn: string[]): string {
  return nofn.reduce(
    (lengst: string, nafn: string) =>
      lengst.length >= nafn.length ? lengst : nafn,
    "",
  );
}
console.log(lengstaNafn(["Anna", "Bjarki", "Óli"]));

// =====================================================
// HLUTI E — type fyrir objects
//   type Rettur = {
//     nafn: string;
//     verd: number;
//     vegan: boolean;
//   };
//   const supa: Rettur = { nafn: "Súpa", verd: 1690, vegan: true };
// =====================================================

// E1 ⭐ Búðu til `type Kvikmynd` með titill (string), ar (number) og einkunn (number).
type Kvikmynd = {
  titill: string;
  ar: number;
  einkunn: number;
  leikstjori?: string;
};

// E2 ⭐ Búðu til eina Kvikmynd, t.d. Hrútar, 2015, 7.1. Prentaðu titilinn.
const kvikmynd: Kvikmynd = {
  titill: "Hrútar og hrossagaukar",
  ar: 1985,
  einkunn: 7.5,
};

// E3 ⭐ Takið kommentin af (þegar E1 er búið). 🔴 Hvaða key vantar? Bættu því við.
const djupid: Kvikmynd = { titill: "Djúpið", ar: 2012, einkunn: 3.2 };

// E4 ⭐ Takið kommentin af. 🔴 Hvað er stafsett vitlaust? Lagaðu.
const lamb: Kvikmynd = { titill: "Lamb", ar: 2021, einkunn: 6.2 };

// E5 ⭐⭐ Búðu til `kvikmyndir: Kvikmynd[]` með þremur myndum.
// Notaðu filter til að finna myndir með einkunn yfir 7. Prentaðu titlana.
const kvikmyndir: Kvikmynd[] = [
  {
    titill: "Revenge of the Nerds",
    ar: 1986,
    einkunn: 4.5,
  },
  {
    titill: "So what if I'm Zombified?",
    ar: 1991,
    einkunn: 7.5,
  },
  {
    titill: "Just Keep on Truckin'",
    ar: 1995,
    einkunn: 8,
  },
];
kvikmyndir
  .filter((kvikmynd: Kvikmynd) => kvikmynd.einkunn > 7)
  .forEach((kvikmynd: Kvikmynd) => console.log(kvikmynd.titill));

// E6 ⭐⭐ Bættu `leikstjori?: string` við type-ið. Spurningarmerkið þýðir
// að key-ið má vanta. Búðu til eina mynd með og eina án leikstjóra.
const kvikmyndA: Kvikmynd = {
  titill: "Hungry like a Hungry Hungry Hippo",
  ar: 2004,
  einkunn: 7,
  leikstjori: "Stephen Spielberg",
};
const kvikmyndB: Kvikmynd = {
  titill: "Dawn of the Dancing of the Apes",
  ar: 2015,
  einkunn: 8,
};

// E7 ⭐⭐ Skrifaðu function `lysing(m: Kvikmynd): string` sem skilar
// "Hrútar (2015) ★ 7.1"
function lysing(m: Kvikmynd): string {
  return `${m.titill} (${m.ar}) ★ ${m.einkunn}`;
}

console.log(lysing(kvikmyndA));

// =====================================================
// HLUTI F — Union types: aðeins ákveðin gildi leyfð
//   type Erfidleiki = "Easy" | "Medium" | "Hard";
// =====================================================

// F1 ⭐ Búðu til `type Erfidleiki = "Easy" | "Medium" | "Hard";`
// og breytu `let stig: Erfidleiki = "Easy";`
type Erfidleiki = "Easy" | "Medium" | "Hard";
let stig: Erfidleiki = "Easy";

// F2 ⭐ Takið kommentin af. 🔴 Af hverju má þetta ekki? Lagaðu.
stig = "Hard";

// F3 ⭐⭐ Skrifaðu function `litur(e: Erfidleiki): string` sem skilar
// "grænn" fyrir Easy, "gulur" fyrir Medium og "rauður" fyrir Hard.
// Taktu eftir: VS Code stingur upp á gildunum þegar þú skrifar e === "
function litur(e: Erfidleiki): string {
  if (e === "Easy") {
    return "grænn";
  } else if (e === "Medium") {
    return "gulur";
  } else {
    return "rauður";
  }
}
console.log(litur("Medium"));

// F4 ⭐⭐ Búðu til `type Id = number | string;` og function `synaId(id: Id): string`
// sem skilar "Id: 42" eða "Id: abc".
type Id = number | string;
function synaId(id: Id): string {
  return "Id: " + id;
}
console.log(synaId(42));
console.log(synaId("abc"));

// =====================================================
// HLUTI G — TypeScript + fetch
// Gögn frá fetch eru `any`: TypeScript veit ekki hvað er í þeim.
// Við segjum því það með type:
//
//   type Uppskrift = { id: number; name: string; rating: number };
//   const uppskrift: Uppskrift = await response.json();
//
// Nú veit VS Code hvaða keys eru til, og stingur upp á þeim!
// =====================================================

async function hlutiG() {
  // G1 ⭐ Búðu til `type Uppskrift` með id, name, cuisine og rating.
  // Sæktu /recipes/1 og settu svarið í breytu af type Uppskrift. Prentaðu name.
  // Skrifaðu svo  uppskrift.  og sjáðu hvað VS Code stingur upp á.
  type Uppskrift = {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    difficulty: Erfidleiki;
  };
  const response1: Response = await fetch("https://dummyjson.com/recipes/1");
  const uppskrift1: Uppskrift = await response1.json();
  console.log(uppskrift1.name);

  // G2 ⭐⭐ Reyndu að prenta uppskrift.title. 🔴 Hvað segir TypeScript?
  // (Þetta er sama villa og í debug-æfingunni á miðvikudaginn,
  //  nema núna sést hún ÁÐUR en kóðinn keyrir.)
  // console.log(uppskrift1.title);

  // G3 ⭐⭐ Sæktu /recipes?limit=10. Svarið er object með recipes inni í.
  // Búðu til type fyrir það:
  //   type UppskriftaSvar = { recipes: Uppskrift[]; total: number };
  // Prentaðu nöfnin með map.
  type UppskriftaSvar = {
    recipes: Uppskrift[];
    total: number;
  };
  const response2: Response = await fetch(
    "https://dummyjson.com/recipes?limit=10",
  );
  const uppskriftir: UppskriftaSvar = await response2.json();
  const uppskriftaNofn = uppskriftir.recipes.map(
    (recipe: Uppskrift) => recipe.name,
  );
  console.log(uppskriftaNofn);

  // G4 ⭐⭐ Búðu til `type Vara` (id, title, price, category) og sæktu
  // https://dummyjson.com/products?limit=20
  // Prentaðu ódýrustu vöruna. Hint: reduce eða sort.
  type Vara = {
    id: number;
    title: string;
    price: number;
    category: string;
  };

  type VoruSvar = {
    products: Vara[];
    total: number;
  };

  const response3: Response = await fetch(
    "https://dummyjson.com/products?limit=20",
  );
  const voruSvar: VoruSvar = await response3.json();
  const odyrast = voruSvar.products.reduce(
    (cheapestProduct: Vara, product: Vara) =>
      cheapestProduct.price <= product.price ? cheapestProduct : product,
    voruSvar.products[0],
  );
  console.log("Cheapest product: ", odyrast);

  // G5 ⭐⭐⭐ Skrifaðu function
  //   async function saekjaUppskrift(id: number): Promise<Uppskrift>
  // sem sækir og SKILAR uppskriftinni. Kallaðu á hana:
  //   const u = await saekjaUppskrift(5);
  //   console.log(u.name);
  // Á að gefa: Mango Salsa Chicken
  const u = await saekjaUppskrift2(5);
  console.log(u.name);

  // G6 ⭐⭐⭐ Bættu `difficulty: Erfidleiki` við Uppskrift (type-ið úr F1).
  // Sæktu 50 uppskriftir og teldu hversu margar eru "Easy".
  // Á að gefa: 30
  const response4: Response = await fetch(
    "https://dummyjson.com/recipes?limit=50",
  );
  const uppskriftaSvar2: UppskriftaSvar = await response4.json();
  const audveldarTal = uppskriftaSvar2.recipes.filter(
    (recipe: Uppskrift) => recipe.difficulty === "Easy",
  ).length;
  console.log("Easy recipes: ", audveldarTal);
}

type Uppskrift = {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  difficulty: Erfidleiki;
};
type UppskriftaSvar = {
  recipes: Uppskrift[];
  total: number;
};

async function saekjaUppskrift2(id: number): Promise<Uppskrift> {
  const response: Response = await fetch(
    "https://dummyjson.com/recipes" + "/" + id,
  );
  return await response.json();
}

//hlutiG();

// =====================================================
// 🚀 BÓNUS
// =====================================================

// X1 ⭐⭐ `interface` er næstum það sama og `type` fyrir objects:
//   interface Notandi { firstName: string; lastName: string; age: number; }
// Sæktu https://dummyjson.com/users?limit=10 og prentaðu fullt nafn allra.
interface Notandi {
  firstName: string;
  lastName: string;
  age: number;
}

type UserResponse = {
  users: Notandi[];
  total: number;
};

async function printUserNames() {
  const response: Response = await fetch(
    "https://dummyjson.com/users?limit=10",
  );
  const userResponse: UserResponse = await response.json();

  console.log("=== User names: ===");
  userResponse.users.forEach((user: Notandi) =>
    console.log(user.firstName + " " + user.lastName),
  );
}
printUserNames();

// X2 ⭐⭐⭐ Taktu Uppskriftabókina frá miðvikudeginum (main.js), endurnefndu
// hana main.ts og bættu types við: Uppskrift, uppskriftir: Uppskrift[], og
// types á parameters. Hversu margar villur finnur TypeScript?

// X3 ⭐⭐⭐ Hvað er munurinn á `any` og `unknown`? Prófaðu:
//   let a: any = "halló";      a.toUpperCase();   a.flyga();
//   let b: unknown = "halló";  b.toUpperCase();
// Hvor gefur villu? Af hverju er það gott?
let a: any = "halló";
console.log(a.toUpperCase());
// console.log(a.flyga());
let b: unknown = "halló";
console.log(b.toUpperCase());
