# Milijonar

Ustvarjeno z React za skeč pri praznovanju abrahama.

## Zagon

Po clone-anju se node moduli namestijo z `npm i`.
Aplikacija se zažene z `npm start`.

## Uporaba

Tipke:
  - `s`: z vsakim pritiskom se prikaže nov element sklopa vprašanja in odgovorov,
  - `n`: naslednje vprašanje,
  - `b`: prejšnje vprašanje,
  - `c`: prikaže pravilen odgovor (pod pogoju, da je prikazano vprašanje in vsi odgovori, ter da je že izbran odgovor),
  - `1` - `4`: izbira odgovora (je možno tudi z miško).

## Slike

Slike naj bodo shranjene v `src/Imgs/` in se jih v `App.js` importa z: `import img from "./Imgs/foo.bar"`.

v `App.js` state-u se jih nastavi za vprašanje, da se v object `imgs` pripiše nov key-value pair, kjer je key v formatu `img{št. vprašanja}`, in value enak importani sliki.
Vprašanja so 0 indexed, torej če želimo sliko pri prvem vprašanju, nastavimo `imgs: { img0: img, },`.

## Vprašanja

Vprašanja so shranjena v `src/Questions/Questions.json`.

Razlaga atributov:
  - question: Vprašanje (tekst),
  - answer1 - 4: Odgovori na vprašanje (tekst),
  - correctAnswer: Kateri odgovor je pravilen (1 indexed),
  - half: Kateri odgovori se pri koriščenju polovičke skrijejo (če je vrednost na mestu `i` enaka 1, se odgovor `i+1` (zarad 1 index-a odgovorov) skrije).

## Logo

https://codepen.io/MyXoToD/pen/IDnfk
