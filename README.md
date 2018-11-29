# Hópverkefni 2


## Hvernig keyri ég ?
Til að setja upp þennan vef þarftu að hafa nodejs. Þegar þú hefur sett það upp ætti að vera nóg að fara í rót vefsins og keyra eftirfarandi skipanir:

```sh
$ npm install
$ npm run dev
```

## Skipulag vefs 
* `/dist` heldur utan um allt sem er búið til af forritum sjálfkrafa
* `/src` heldur utan um allt sem unnið er í

### JavaScript
* `index.js` 
* `/src/lib` Heldur utan um Javascript kóða untan `index.js`
* `ÞARF AÐ BÆTA VIÐ SKIPULAG Á JAVASCRIPT` 

### SASS
* `/src/styles` heldur utan um allt SASS  
* `buttons.scss` heldur utan um css fyrir takka
* `header.scss` heldur utan um css fyrir <header>
* `nav.scss` heldur utan um css fyrir nav
* `fyrirlestur.scss` heldur utan um css fyrir sér fyrirlestur
* `index.scss` heldur utan um css fyrir forsíðu ásamt lista yfir fyrirlestra 
* `config.scss` heldur utan um breytur eins og liti ofl. 
* `styles.scss` er notað fyrir grunn stillingar og include á annað efni

## Höfundar
* Daníel Helgi Arnarson (dha5@hi.is)
* Kristinn Godfrey Guðnason (kgg16@hi.is
* Theódór Sigurjón Andrésson (tsa2@hi.is)
