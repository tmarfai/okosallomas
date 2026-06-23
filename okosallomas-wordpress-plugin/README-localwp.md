# Okosallomas WordPress plugin LocalWP-hez

Ez a mappa egy gyakorlashoz keszult WordPress plugin. Az eredeti HTML projektet nem csereli le, csak shortcode-dal beagyazza a mar elkeszult allomasoldalakat.

## Telepites LocalWP-ben

1. LocalWP-ben kattints a `Create a new site` gombra.
2. Hozz letre egy sima WordPress oldalt, peldaul `okosallomas` nevvel.
3. A letrehozott oldalnal nyisd meg a site foldert.
4. Masold ezt a teljes mappat:
   `okosallomas-wordpress-plugin`
5. Ide kell bemasolni:
   `app/public/wp-content/plugins/`
6. WordPress adminban menj a `Plugins` menube.
7. Kapcsold be a `MAV Okosallomas` plugint.

## Hasznalat

Hozz letre egy WordPress oldalt, es tegyel bele egy shortcode-ot.

Peldak:

```text
[okosallomas station="kaposvar"]
[okosallomas station="pecs"]
[okosallomas station="siofok"]
[okosallomas station="balatonlelle"]
```

Nyelv kezzel:

```text
[okosallomas station="pecs" lang="de"]
[okosallomas station="siofok" lang="en"]
```

A zaszlok a WordPress oldalon belul `?okos_lang=hu`, `?okos_lang=en`, `?okos_lang=de` valtassal mukodnek.

## Jelenleg benne van

- Kaposvar
- Pecs
- Szekszard
- Siofok
- Balatonlelle
- Fonyod

Mindegyikhez magyar, angol es nemet HTML valtozatot visz at a plugin.

## Fontos

Ez gyakorlashoz valo atmeneti plugin. Eles WordPress oldalhoz kesobb erdemes szebben komponensekre bontani: kulon sablon, kulon allomas-adatok, kevesebb masolt HTML.
