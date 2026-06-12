export type Language = "ro" | "hu";

export const translations = {
  ro: {
    nav: {
      about: "About",
      trainers: "Trainers",
      pictures: "Pictures",
      testimonials: "Testimonials",
      app: "App",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Înscrie-te acum",
    },
    hero: {
      titleLine1: "ELIBERAȚI-VĂ",
      titleLine2: "POTENȚIALUL",
      subtitle:
        "Transformați-vă corpul, mintea și spiritul la Focus Gym. Unde dedicarea se întâlnește cu rezultatele.",
      cta: "ÎNSCRIE-TE ACUM",
      scroll: "Scroll",
    },
    marquee: [
      "Putere fizică",
      "Echilibru mental",
      "Nimic fără FOCUS",
      "Focus Gym",
    ],
    about: {
      headingPre: "Despre noi -",
      headingAccent: "Povestea Focus Gym",
      intro:
        "Am creat Focus Gym dintr-o nevoie simplă: un loc unde să te simți binevenit, respectat și în siguranță. Nu presiune, nu bariere – doar o comunitate în care fiecare aparține.",
      cards: [
        {
          title: "Dual Strength Fitness",
          text: "Firma noastră se numește Dual Strength Fitness dintr-un motiv simplu, dar profund: Credem că puterea adevărată vine din echilibrul între corp și minte.",
        },
        {
          title: "Valorile noastre",
          text: "Incluziune – Fiecare persoană este binevenită, indiferent de vârstă, greutate, formă fizică sau experiență. Pozitivitate – Promovăm o atmosferă caldă, fără presiune, unde ești încurajat, nu comparat. Respect și autenticitate – Ne pasă. Ne uităm în ochii oamenilor și îi vedem așa cum sunt, nu prin filtre sau standarde false.",
        },
        {
          title: "Ce înseamnă Focus Gym pentru noi?",
          text: "Este comunitatea pe care ne-am dorit-o dintotdeauna, dar nu am găsit-o. Este spațiul sigur unde vii nu doar să te antrenezi, ci să respiri, să te regăsești, să crești. Este vocea care îți spune „poți”, atunci când toți ceilalți spun „nu ești pregătit”.",
        },
      ],
    },
    trainers: {
      headingPre: "Faceți cunoștință cu",
      headingAccent: "Antrenori",
      subtitle:
        "Antrenorii noștri certificați sunt aici pentru a vă ghida, motiva și ajuta să vă atingeți obiectivele de fitness.",
      experienceSuffix: "experience",
      list: [
        {
          name: "Sandu Alexandru",
          experience: "13 years",
          bio: "Sunt pasionat de bodybuilding și am concurat la nivel competițional. Știu ce înseamnă să-ți transformi corpul, iar eu te pot ghida pas cu pas să-ți atingi obiectivele. Fără scurtături, doar rezultate reale și un corp de care să fii mândru.",
        },
        {
          name: "Miklos Ciocîrlan",
          experience: "4 years",
          bio: "Te ajut să devii mai fit, mai sănătos și să te miști fără dureri, prin antrenamente personalizate la FocusGym. Pun accent pe mobilitate, stretching și întărirea mușchilor stabilizatori, ca să ai rezultate durabile și o viață plină de energie. Vino să descoperi antrenamente eficiente, într-o atmosferă prietenoasă și motivațională.",
        },
      ],
    },
    showcase: {
      headingPre: "Sala",
      headingAccent: "Noastră",
      text: "Misiunea noastră e simplă și neschimbată: Să construim cea mai prietenoasă, incluzivă și motivantă sală de sport din Sfântu Gheorghe. Un loc unde progresul e personal, și fiecare pas înainte e sărbătorit. Te așteptăm. Nu ca să fii altcineva, ci ca să devii cea mai bună versiune a ta. Hai să ne cunoști. Promitem că vei simți diferența de la prima vizită. Focus Gym – Putere fizică, Echilibru mental. Nimic fără FOCUS.",
    },
    testimonials: {
      headingPre: "Povești de",
      headingAccent: "Succes",
      subtitle:
        "Află poveștile membrilor noștri care și-au transformat viața la Focus Gym.",
      list: [
        {
          name: "István",
          text: "O sală de sport mică, dar excelentă, aproape fără aglomerație, ideală pentru începători sau persoane timide care doresc să înceapă să facă sport.",
          rating: 5,
        },
        {
          name: "Zsolt",
          text: "Echipată la fel de bine ca și alte săli de sport de dimensiuni medii. Nu este perfectă, dar este perfect adecvată pentru ceea ce vrei să faci acolo. Nu are personal, intrarea se face printr-o aplicație, ceea ce este excelent. Managerul mi-a permis o intrare gratuită, deoarece inițial eram doar în trecere. Acest lucru îmi spune multe despre mentalitatea lor și mă face să revin cu orice altă ocazie pe care o am.",
          rating: 5,
        },
        {
          name: "Attila",
          text: "Echipament bun, personal prietenos și flexibil, program de lucru prelungit, recomandat cu căldură.",
          rating: 5,
        },
      ],
    },
    app: {
      headingPre: "Descărcați aplicația",
      headingAccent: "Noastră",
      subtitle:
        "Luați-vă călătoria fitness cu voi. Urmăriți antrenamentele, rezervați cursuri și rămâneți motivați oriunde v-ați afla.",
      tutorialLink: "Ai nevoie de ajutor? Urmează tutorialul nostru pas cu pas.",
    },
    pricing: {
      headingPre: "Alegeți-vă",
      headingAccent: "Planul",
      subtitle:
        "Opțiuni flexibile de abonament, concepute pentru a se potrivi stilului tău de viață și obiectivelor tale de fitness.",
      popularBadge: "MOST POPULAR",
      cta: "Începeți",
      seeAll: "See All Plans",
      plans: [
        {
          name: "Morning Duo Pass",
          price: "130 lei",
          period: "4 săptămâni",
          features: [
            "Acces pentru 2 persoane",
            "Acces la sală de la 07:00-12:00",
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: false,
        },
        {
          name: "One Month Pass",
          price: "140 lei",
          period: "4 săptămâni",
          features: [
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: true,
        },
        {
          name: "Student Pass",
          price: "120 lei",
          period: "4 săptămâni",
          features: [
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: false,
        },
      ],
    },
    allPlans: {
      back: "Back to Home",
      title: "Toate Planurile de Abonament",
      plans: [
        {
          name: "Morning Duo Pass",
          price: "130 lei",
          period: "4 săptămâni",
          features: [
            "Acces pentru 2 persoane",
            "Acces la sală de la 07:00-12:00",
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: false,
        },
        {
          name: "Abonament full fittness",
          price: "140 lei",
          period: "4 săptămâni",
          features: [
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: true,
        },
        {
          name: "Abonament studenti",
          price: "120 lei",
          period: "4 săptămâni",
          features: [
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: false,
        },
        {
          name: "Abonament 3 luni",
          price: "375 lei",
          period: "12 săptămâni",
          features: [
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: false,
        },
        {
          name: "One day Pass",
          price: "30 lei",
          period: "1 zi",
          features: [
            "Acces la echipamente de sală",
            "Acces la vestiare",
            "Acces la aplicația mobilă",
          ],
          popular: false,
        },
      ],
    },
    contact: {
      headingPre: "Începe-ți",
      headingAccent: "Călătoria",
      subtitle:
        "Ești gata să-ți transformi viața? Contactează-ne astăzi și fă primul pas către o viață mai sănătoasă.",
      visitTitle: "Vizitați sala noastră de sport",
      address: "Strada 1 Decembrie 1918 bl 12, Sfântu Gheorghe 520076",
      phone: "0742464683",
      email: "focusgymsepsi@gmail.com",
      hoursTitle: "Program de funcționare",
      hours: [
        { days: "Luni - Vineri", time: "7:00 - 22:00" },
        { days: "Sâmbătă", time: "9:00 - 20:00" },
        { days: "Duminică", time: "9:00 - 20:00" },
      ],
    },
    footer: {
      description:
        "Transformă-ți corpul, mintea și spiritul alături de noi. Alătură-te comunității noastre și eliberează-ți potențialul.",
      quickLinks: "Linkuri rapide",
      links: {
        about: "About Us",
        trainers: "Trainers",
        pictures: "Pictures",
        testimonials: "Testimonials",
        app: "App",
        pricing: "Pricing",
        contact: "Contact",
      },
      follow: "Urmăriți-ne",
      termsTitle: "Termeni și condiții",
      termsTextPre: "Prin utilizarea serviciilor noastre, sunteți de acord cu",
      termsLink: "Termenii și condițiile",
      termsAnd: "și",
      privacyLink: "Politica de confidențialitate",
      copyright:
        "© 2025 Focus Gym. All rights reserved. Designed with passion for fitness.",
    },
    tutorial: {
      back: "Back to Home",
      title: "Tutorial – Cum să folosești aplicația",
      steps: [
        {
          title: "1. Descărcați și instalați aplicația",
          text: "Găsiți aplicația în App Store sau Google Play. După instalare, deschideți aplicația și creați un cont pentru a începe călătoria voastră fitness.",
        },
        {
          title: "2. Găsiți sala noastră de sport",
          text: "Introduceți codul focusgym în câmpul de text și apăsați butonul „DEVINO MEMBRU”.",
        },
        {
          title: "3. Informații personale",
          text: "Completați informațiile personale și setați obiectivele de fitness. Acest lucru ne ajută să vă oferim recomandări personalizate.",
        },
      ],
    },
  },
  hu: {
    nav: {
      about: "Rólunk",
      trainers: "Edzők",
      pictures: "Galéria",
      testimonials: "Vélemények",
      app: "App",
      pricing: "Árak",
      contact: "Kapcsolat",
      cta: "Csatlakozz most",
    },
    hero: {
      titleLine1: "SZABADÍTSD FEL",
      titleLine2: "A POTENCIÁLOD",
      subtitle:
        "Alakítsd át a tested, az elméd és a lelked a Focus Gymben. Ahol az elhivatottság találkozik az eredményekkel.",
      cta: "CSATLAKOZZ MOST",
      scroll: "Görgess",
    },
    marquee: [
      "Fizikai erő",
      "Mentális egyensúly",
      "Semmi sem megy FOCUS nélkül",
      "Focus Gym",
    ],
    about: {
      headingPre: "Rólunk –",
      headingAccent: "A Focus Gym története",
      intro:
        "A Focus Gymet egy egyszerű igényből hoztuk létre: egy hely, ahol szívesen látnak, tisztelnek, és biztonságban érezheted magad. Nincs nyomás, nincsenek korlátok – csak egy közösség, ahová mindenki tartozik.",
      cards: [
        {
          title: "Dual Strength Fitness",
          text: "Cégünk neve Dual Strength Fitness, egy egyszerű, de mély okból: hisszük, hogy az igazi erő a test és az elme egyensúlyából fakad.",
        },
        {
          title: "Értékeink",
          text: "Befogadás – Mindenkit szívesen látunk, kortól, testsúlytól, edzettségi szinttől és tapasztalattól függetlenül. Pozitivitás – Meleg, nyomásmentes légkört teremtünk, ahol bátorítást kapsz, nem összehasonlítást. Tisztelet és hitelesség – Törődünk veled. Az emberek szemébe nézünk, és úgy látjuk őket, amilyenek valójában – szűrők és hamis elvárások nélkül.",
        },
        {
          title: "Mit jelent számunkra a Focus Gym?",
          text: "Az a közösség, amire mindig is vágytunk, de sosem találtuk meg. Az a biztonságos tér, ahová nem csak edzeni jársz, hanem fellélegezni, magadra találni, fejlődni. Az a hang, amely azt mondja: „képes vagy rá”, amikor mindenki más azt mondja, „még nem állsz készen”.",
        },
      ],
    },
    trainers: {
      headingPre: "Ismerd meg az",
      headingAccent: "Edzőinket",
      subtitle:
        "Képzett edzőink azért vannak itt, hogy vezessenek, motiváljanak és segítsenek elérni a fitneszcéljaidat.",
      experienceSuffix: "tapasztalat",
      list: [
        {
          name: "Sandu Alexandru",
          experience: "13 év",
          bio: "Szenvedélyem a testépítés, versenyszinten is indultam. Tudom, mit jelent átalakítani a testedet, és lépésről lépésre végigvezetlek, hogy elérd a céljaidat. Nincsenek rövidítések – csak valódi eredmények és egy test, amire büszke lehetsz.",
        },
        {
          name: "Miklos Ciocîrlan",
          experience: "4 év",
          bio: "Segítek, hogy fittebb és egészségesebb legyél, és fájdalom nélkül mozogj – személyre szabott edzésekkel a FocusGymben. A mobilitásra, a nyújtásra és a stabilizáló izmok erősítésére helyezem a hangsúlyt, hogy tartós eredményeket érj el, és energiával teli életet élj. Gyere, és fedezd fel a hatékony edzéseket egy barátságos, motiváló légkörben.",
        },
      ],
    },
    showcase: {
      headingPre: "A",
      headingAccent: "Termünk",
      text: "Küldetésünk egyszerű és változatlan: felépíteni Sepsiszentgyörgy legbarátságosabb, legbefogadóbb és legmotiválóbb edzőtermét. Egy helyet, ahol a fejlődés személyes, és minden előrelépést megünneplünk. Várunk. Nem azért, hogy valaki más légy, hanem hogy önmagad legjobb verziójává válj. Gyere, ismerj meg minket. Ígérjük, már az első látogatáskor érezni fogod a különbséget. Focus Gym – Fizikai erő, mentális egyensúly. Semmi sem megy FOCUS nélkül.",
    },
    testimonials: {
      headingPre: "Siker-",
      headingAccent: "történetek",
      subtitle:
        "Ismerd meg tagjaink történeteit, akik a Focus Gymben változtatták meg az életüket.",
      list: [
        {
          name: "István",
          text: "Kicsi, de kiváló edzőterem, szinte sosem zsúfolt – ideális kezdőknek vagy félénkebb embereknek, akik el szeretnének kezdeni sportolni.",
          rating: 5,
        },
        {
          name: "Zsolt",
          text: "Ugyanolyan jól felszerelt, mint más közepes méretű edzőtermek. Nem tökéletes, de tökéletesen megfelel arra, amire használni szeretnéd. Nincs személyzet, a belépés egy alkalmazáson keresztül történik, ami nagyszerű. A vezető engedélyezett egy ingyenes belépést, mivel eredetileg csak átutazóban voltam. Ez sokat elárul a hozzáállásukról, és emiatt minden adandó alkalommal visszatérek.",
          rating: 5,
        },
        {
          name: "Attila",
          text: "Jó felszerelés, barátságos és rugalmas személyzet, hosszú nyitvatartás – melegen ajánlom.",
          rating: 5,
        },
      ],
    },
    app: {
      headingPre: "Töltsd le az",
      headingAccent: "Alkalmazásunkat",
      subtitle:
        "Vidd magaddal a fitneszutadat. Kövesd az edzéseidet, foglalj órákat, és maradj motivált, bárhol is vagy.",
      tutorialLink:
        "Segítségre van szükséged? Kövesd lépésről lépésre az útmutatónkat.",
    },
    pricing: {
      headingPre: "Válaszd ki a",
      headingAccent: "Bérleted",
      subtitle:
        "Rugalmas bérletlehetőségek, amelyek igazodnak az életstílusodhoz és a fitneszcéljaidhoz.",
      popularBadge: "LEGNÉPSZERŰBB",
      cta: "Kezdj bele",
      seeAll: "Összes bérlet",
      plans: [
        {
          name: "Morning Duo Pass",
          price: "130 lej",
          period: "4 hét",
          features: [
            "Belépés 2 fő részére",
            "Terembelépés 07:00–12:00 között",
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: false,
        },
        {
          name: "One Month Pass",
          price: "140 lej",
          period: "4 hét",
          features: [
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: true,
        },
        {
          name: "Student Pass",
          price: "120 lej",
          period: "4 hét",
          features: [
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: false,
        },
      ],
    },
    allPlans: {
      back: "Vissza a főoldalra",
      title: "Összes bérlettípus",
      plans: [
        {
          name: "Morning Duo Pass",
          price: "130 lej",
          period: "4 hét",
          features: [
            "Belépés 2 fő részére",
            "Terembelépés 07:00–12:00 között",
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: false,
        },
        {
          name: "Teljes fitnesz bérlet",
          price: "140 lej",
          period: "4 hét",
          features: [
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: true,
        },
        {
          name: "Diákbérlet",
          price: "120 lej",
          period: "4 hét",
          features: [
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: false,
        },
        {
          name: "3 havi bérlet",
          price: "375 lej",
          period: "12 hét",
          features: [
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: false,
        },
        {
          name: "Napijegy",
          price: "30 lej",
          period: "1 nap",
          features: [
            "Hozzáférés a terem gépeihez",
            "Öltözőhasználat",
            "Hozzáférés a mobilalkalmazáshoz",
          ],
          popular: false,
        },
      ],
    },
    contact: {
      headingPre: "Kezdd el az",
      headingAccent: "Utad",
      subtitle:
        "Készen állsz megváltoztatni az életed? Lépj kapcsolatba velünk még ma, és tedd meg az első lépést egy egészségesebb élet felé.",
      visitTitle: "Látogass el az edzőtermünkbe",
      address: "Strada 1 Decembrie 1918 bl 12, Sepsiszentgyörgy 520076",
      phone: "0742464683",
      email: "focusgymsepsi@gmail.com",
      hoursTitle: "Nyitvatartás",
      hours: [
        { days: "Hétfő – Péntek", time: "7:00 – 22:00" },
        { days: "Szombat", time: "9:00 – 20:00" },
        { days: "Vasárnap", time: "9:00 – 20:00" },
      ],
    },
    footer: {
      description:
        "Alakítsd át a tested, az elméd és a lelked velünk. Csatlakozz a közösségünkhöz, és szabadítsd fel a benned rejlő erőt.",
      quickLinks: "Gyors linkek",
      links: {
        about: "Rólunk",
        trainers: "Edzők",
        pictures: "Galéria",
        testimonials: "Vélemények",
        app: "App",
        pricing: "Árak",
        contact: "Kapcsolat",
      },
      follow: "Kövess minket",
      termsTitle: "Felhasználási feltételek",
      termsTextPre: "Szolgáltatásaink használatával elfogadod a",
      termsLink: "Felhasználási feltételeket",
      termsAnd: "és az",
      privacyLink: "Adatvédelmi irányelveket",
      copyright:
        "© 2025 Focus Gym. Minden jog fenntartva. Szenvedéllyel tervezve a fitneszért.",
    },
    tutorial: {
      back: "Vissza a főoldalra",
      title: "Útmutató – Így használd az alkalmazást",
      steps: [
        {
          title: "1. Töltsd le és telepítsd az alkalmazást",
          text: "Az alkalmazást megtalálod az App Store-ban vagy a Google Playen. Telepítés után nyisd meg, és hozz létre egy fiókot, hogy elkezdhesd a fitneszutadat.",
        },
        {
          title: "2. Találd meg az edzőtermünket",
          text: "Írd be a focusgym kódot a szövegmezőbe, és nyomd meg a „DEVINO MEMBRU” gombot.",
        },
        {
          title: "3. Személyes adatok",
          text: "Töltsd ki a személyes adataidat, és állítsd be a fitneszcéljaidat. Ez segít nekünk, hogy személyre szabott ajánlásokat adjunk.",
        },
      ],
    },
  },
};

export type TranslationShape = (typeof translations)["ro"];

