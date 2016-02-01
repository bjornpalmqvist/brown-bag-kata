# ITS Lunch-kator

Målsättningen med lunch-kata är följande

1. __Testdriva__ fram lösningar på tillräckligt små matematiska problem att de kan lösas under en lunch
2. Refaktorisera tidigare lösningar i syfte att __återanvända__ kod för att lösa andra problem
3. Använda __modern java__ (8) för att lära varandra använda moderna API:er på bra sätt
4. Skapa __kontinuitet__ genom ett gemensamt repository för kod och tillhörande issue tracker för att prioritera och konkretisera nya lämpliga problem (du är här)

# Slides
* 2015-11-11 [Mockito kata](http://www.slideshare.net/Jonananas/mockito-kata)

# GUI-kata

Eftersom många IDE:r ogillar flera byggmiljöer och projekttyper samtidigt är det ofta enklare
att importera UI-katalogen som ett separat projekt. Lämplig typ av projekt varierar beroende på IDE,
men måste du välja, sikta på enklast möjliga; kanske "Static web".

För att komma igång med utvecklingen, kör följande inuti UI-katalogen.

* `npm install` <- installerar beroenden för att utveckla i java (motsvarar ungefär maven compile)
* `npm test` <- startar Karma (motsvarar JUnitRunner)
* `npm start` <- startar en enkel webbserver på port localhost:8000
