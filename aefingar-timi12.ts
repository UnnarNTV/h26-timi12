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
fjoldi = "tíu";

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

// C2 ⭐ Skrifaðu function `leggjaSaman(a: number, b: number): number`.
// Á að gefa: leggjaSaman(4, 6) → 10

// C3 ⭐ Takið kommentin af. 🔴 Hvað er að? Lagaðu kallið, ekki function-ina.
// function ferningur(x: number): number {
//   return x * x;
// }
// console.log(ferningur("5"));

// C4 ⭐⭐ Skrifaðu function `erFullordinn(aldur: number): boolean`
// sem skilar true ef aldur er 18 eða meira.
// Á að gefa: erFullordinn(17) → false, erFullordinn(30) → true

// C5 ⭐⭐ Skrifaðu arrow function `medVsk` sem tekur verð (number) og skilar
// verðinu með 24% vsk. Hint: const medVsk = (verd: number): number => ...
// Á að gefa: medVsk(1000) → 1240

// C6 ⭐⭐ Takið kommentin af. 🔴 function-in segist skila number en skilar string. Lagaðu.
// function lengd(texti: string): number {
//   return "Lengdin er " + texti.length;
// }

// =====================================================
// HLUTI D — Arrays með types
//   const tolur: number[] = [1, 2, 3];
//   const nofn: string[] = ["Anna", "Óli"];
// =====================================================

// D1 ⭐ Búðu til `uppahaldsMatur: string[]` með þremur réttum. Prentaðu hann.

// D2 ⭐ Takið kommentin af. 🔴 Lagaðu svo aðeins tölur séu í array-inu.
// const einkunnir: number[] = [8, 9, "tíu", 7];

// D3 ⭐⭐ Notaðu map á `einkunnir` (eftir að þú lagaðir hana) til að bæta 1 við hverja.
// Færðu músina yfir niðurstöðuna. Hvaða type er hún?

// D4 ⭐⭐ Skrifaðu function `summa(listi: number[]): number` með reduce.
// Á að gefa: summa([4, 8, 15]) → 27

// D5 ⭐⭐ Skrifaðu function `lengstaNafn(nofn: string[]): string`
// sem skilar lengsta nafninu.
// Á að gefa: lengstaNafn(["Anna", "Bjarki", "Óli"]) → Bjarki

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

// E2 ⭐ Búðu til eina Kvikmynd, t.d. Hrútar, 2015, 7.1. Prentaðu titilinn.

// E3 ⭐ Takið kommentin af (þegar E1 er búið). 🔴 Hvaða key vantar? Bættu því við.
// const djupid: Kvikmynd = { titill: "Djúpið", ar: 2012 };

// E4 ⭐ Takið kommentin af. 🔴 Hvað er stafsett vitlaust? Lagaðu.
// const lamb: Kvikmynd = { titil: "Lamb", ar: 2021, einkunn: 6.2 };

// E5 ⭐⭐ Búðu til `kvikmyndir: Kvikmynd[]` með þremur myndum.
// Notaðu filter til að finna myndir með einkunn yfir 7. Prentaðu titlana.

// E6 ⭐⭐ Bættu `leikstjori?: string` við type-ið. Spurningarmerkið þýðir
// að key-ið má vanta. Búðu til eina mynd með og eina án leikstjóra.

// E7 ⭐⭐ Skrifaðu function `lysing(m: Kvikmynd): string` sem skilar
// "Hrútar (2015) ★ 7.1"

// =====================================================
// HLUTI F — Union types: aðeins ákveðin gildi leyfð
//   type Erfidleiki = "Easy" | "Medium" | "Hard";
// =====================================================

// F1 ⭐ Búðu til `type Erfidleiki = "Easy" | "Medium" | "Hard";`
// og breytu `let stig: Erfidleiki = "Easy";`

// F2 ⭐ Takið kommentin af. 🔴 Af hverju má þetta ekki? Lagaðu.
// stig = "Mjög erfitt";

// F3 ⭐⭐ Skrifaðu function `litur(e: Erfidleiki): string` sem skilar
// "grænn" fyrir Easy, "gulur" fyrir Medium og "rauður" fyrir Hard.
// Taktu eftir: VS Code stingur upp á gildunum þegar þú skrifar e === "

// F4 ⭐⭐ Búðu til `type Id = number | string;` og function `synaId(id: Id): string`
// sem skilar "Id: 42" eða "Id: abc".

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
  // G2 ⭐⭐ Reyndu að prenta uppskrift.title. 🔴 Hvað segir TypeScript?
  // (Þetta er sama villa og í debug-æfingunni á miðvikudaginn,
  //  nema núna sést hún ÁÐUR en kóðinn keyrir.)
  // G3 ⭐⭐ Sæktu /recipes?limit=10. Svarið er object með recipes inni í.
  // Búðu til type fyrir það:
  //   type UppskriftaSvar = { recipes: Uppskrift[]; total: number };
  // Prentaðu nöfnin með map.
  // G4 ⭐⭐ Búðu til `type Vara` (id, title, price, category) og sæktu
  // https://dummyjson.com/products?limit=20
  // Prentaðu ódýrustu vöruna. Hint: reduce eða sort.
  // G5 ⭐⭐⭐ Skrifaðu function
  //   async function saekjaUppskrift(id: number): Promise<Uppskrift>
  // sem sækir og SKILAR uppskriftinni. Kallaðu á hana:
  //   const u = await saekjaUppskrift(5);
  //   console.log(u.name);
  // Á að gefa: Mango Salsa Chicken
  // G6 ⭐⭐⭐ Bættu `difficulty: Erfidleiki` við Uppskrift (type-ið úr F1).
  // Sæktu 50 uppskriftir og teldu hversu margar eru "Easy".
  // Á að gefa: 30
}

hlutiG();

// =====================================================
// 🚀 BÓNUS
// =====================================================

// X1 ⭐⭐ `interface` er næstum það sama og `type` fyrir objects:
//   interface Notandi { firstName: string; lastName: string; age: number; }
// Sæktu https://dummyjson.com/users?limit=10 og prentaðu fullt nafn allra.

// X2 ⭐⭐⭐ Taktu Uppskriftabókina frá miðvikudeginum (main.js), endurnefndu
// hana main.ts og bættu types við: Uppskrift, uppskriftir: Uppskrift[], og
// types á parameters. Hversu margar villur finnur TypeScript?

// X3 ⭐⭐⭐ Hvað er munurinn á `any` og `unknown`? Prófaðu:
//   let a: any = "halló";      a.toUpperCase();   a.flyga();
//   let b: unknown = "halló";  b.toUpperCase();
// Hvor gefur villu? Af hverju er það gott?
