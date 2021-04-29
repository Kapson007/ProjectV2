'use strict';

class WordPack{
    // polish = '';
    // posen = '';
    // containerOfWords = []
    constructor(pos, pol){
        
        this.posen = pos;
        this.polish = pol;
    }
};

class Dictionary{
    

    constructor(){
        this.dictionaryContent = []
        this.Base = ['abo-albo','ady-ale','afa-małpa','ajmerek-wiaderko','ajnfach-nieskomplikowany','ajntop-jednogarnkowe danie','ajsbajna-golonka','ajzol-metalowy przedmiot','aktornik-aktor','akuratnie-dokładnie','akuratny-dokładny, staranny','ale-ależ','ameryka-tyłek żartobliwie','amerykan-ciastko biszkoptowe','amfitka-balkon w teatrze','ancug-ubranie, garnitur','angielka-kuchenny piecyk na węgiel, stojący na metalowych nogach','angryst-agrest','anielskie włosy-lameta (na choinkę)','antrejka-spiżarnia przy kuchni, sień lub przedpokój','apaj-oprych','apartnie-osobno','apartny-osobny','aprykoza-morela','artycha-artysta','ausdruk-wyraz, wyrażenie','ażeby-…żeby nie wiem co!','babok, babol-gil w sensie, smark','babrać-długo przesiadywać','babsztyk, babsztyl-kobieta obraźliwie','bachać się-kąpać się','badejki-kąpielówki','baka-policzek','bakcyl-zamiłowanie, umiejętność','bakcyle-bakterie, wirusy (ogólnie: zarazki)','bamber-rolnik, gospodarz (nieco pejoratywnie)','bamberski-byle jaki, niechlujny','bambrejewo-wiocha','bambrzok-placek ziemniaczany pieczony bezpośrednio na blasze','bana-pociąg','barzej, barzy-bardziej, więcej','bauer-gospodarz','beblać-gadać bzdury','bebły-pomyje','bedki-grzyby','be gryf-znaczenie, słowo lub termin','bej--pieniądz ','bena-benzyna','berbela-wódka','berbelucha-wódka najgorszego gatunku','beretka-beret','berger-mróz','bestry-pstry','bez-przez','bębas-malec','biały groch-biała fasola','biber-kapelusz','bigiel-wieszak, kant','biglować-prasować','biksa-puszka','bimba-tramwaj','bindka-krawat','biniol-siniak','binks-siniak','blajba-miejsce na nocleg','blauka-wagary','blubrać-gadać, ględzić','blubranie-ględzenie','blubry-błahe opowiastki, wypowiedzi bez większej wagi','blyce-okulary','bryle-okulary','blyrwa-uprawiająca najstarszy zawód','boba-czapka','bobas-dziecko','bogać ta-gdzież tam, ależ','bogać tam-gdzież tam, ależ','bonbony-cukierki','borchać się-gniewać się','borowy-leśniczy','boźdór-chłopak, chłopiec','boża męka-przydrożna kapliczka, krzyż','bón tón-dobre maniery','braciaszek-drugi i kolejny grzyb w jednym miejscu w lesie','brachol-brat','bratkasta-piekarnik','brawędzić-marudzić','brać się za chachły-bić się','brecha, brechsztanga-łom','brechtać się-śmiać się','bręczeć-marudzić','brynczeć-narzekać','brękot-maruda','brynkot-maruda','bronki-piwa','bryle-okulary','blyce-okulary','brynda-denaturat','buba-kiepska pogoda','buchta-więzienie','buda-bramka na boisku lub szkoła','burzowiny-coś pieniącego się','być bejt-być zmęczonym','być na fleku-być w pełni sił','być precz-być nieobecnym','być wyjechanym prek-wyjechać gdzieś','bzybzać-ciąć','bździągwa-mała dziewczynka','całki-cały','Ceglorz-zakłady założone przez Hipolita Cegielskiego','chabaj-rzeźnik','chabas-mięso','chachoł-kark','chapać-ciężko pracować','chaps-kęs','chapsnąć-ugryźć','chaziaj-chłop ze wschodu','chadziajski-kiepski','chęchy-gęste krzaki','chędożyć-czyścić','ochędożyć-sprzątać','chichrać się-śmiać się','chlabra-plucha, błoto','chochla-łyżka wazowa','chłopyszek-chłopiec','chrabęścić--zeleścić','chrympać-strzępić','chujka-świerk','churchać-pochrząkiwać','churchlać-kaszleć','ciepnąć-rzucić','cięgiem-ciągle','cknić-tęsknić','co jest lołs-o co chodzi','colog-ogród zoologiczny','cug-prąd powietrza','cycuś-coś nadzwyczajnego','cyrać-cucić','czarnina-czernina','cząpać-kucać','czerstwy-stare ','czerwone jagody-poziomki','czysty kintop-ale zabawa','ćknąć-cieknąć','ćmiki-papierosy','ćpnąć-rzucić','ćwierć-konew','ćwok-oferma','dać se w tyte-upić się','dalas-nędza, nędzarz','dalaśnica-nędzarka','dalaśnik-nędzarz','dalej-pospiesz się','damascena-śliwka węgierka','dądel-malec','deczka-kocyk','dej-daj','dekiel-czapka','deknąć-uderzyć','depok-guzik','deska-blok mieszkalny sporych rozmiarów','do góry-u góry','do jemu-do niego','dolina-porażka','dostać gila-zwariować','dostany-dojrzały','dość-za dużo','drabka-drabina','dracheta-chuda dziewczyna','drachyta-latawiec','drajfus-kopyto szewskie','drętki-kwaśny','druch-ciągle','drygać-bać się','drynda-konny tramwaj','drwalnik-drwalnia','drzuzgawka-truskawka','dudki-pieniądze','dudlać-płakać','dundel-smark z nosa','durch-całkiem','dycht-całkiem','dydek-pierś','dylać-tańczyć','dynks-nieokreślone "coś"','dziebko-trochę','zdziebko-trochę','dzieciszczko-dziecko','dziura w desce-przejście w bloku mieszkalnym','faferloki-płatki owsiane','fafoły-zawiesina','fajny-ładny','famuła-rodzina','faryna-cukier','fefermyncki-cukierki miętowe','fefry-strach','fiksmatenta-drobiazgi','fest-mocno','fifny-zgrabny','fleja-flejtuch','flepy-dokumenty','flaszka-butelka','fogelka-wesołe miasteczko','fonc-smalec','franela-flanela','frechkunda-bezczelna kobieta','frechowny-zarozumiały','fulfa-nalana','fumlować-działać niesprawnie','funcka-lampka','funt-jednostka wagi w Poznaniu 0,5 kg','furt-nadal, ciągle','futer-pożywienie','fyrać-uciekać','fyrtel-okolica lub dzielnica ','gajgi-skrzypce','galart-galareta mięsna','galat-galareta','galarypa-kalarepa','gamaja-gimnazjum','gamuła-niezdara','ganc-całkiem, zupełnie','gapa-kruk','galara-strach','gara-upał','garować-leżeć w łóżku','gaska-uliczka','gelejza-osoba nieporządna','gemyla-śmietnik','gibać się-kołysać się','gibus-wysoki człowiek','gichnąć-wylać','gideja-kobieta wysokiego wzrostu','giglać-łaskotać','gilejza-niezdara','gira-noga','glajda-błoto','glanc-lukier lub na błysk (np.: wypoleruj na glanc)','glapa-kruk','glapić się-patrzeć','glazejki-skórzane rękawiczki','ględzić-marudzić','glizda-glista','globusik-melonik','glubka-mirabelka','głabać-kraść','głuchacz-sygnał telefoniczny','gnyk-kark','golarz-fryzjer','gonito-berek','gościniec-karczma','góra-strych','grajcarek-korkociąg','gramolić się-wchodzić na coś, gdzieś','graty-rzeczy','grula-człowiek ociężały','grulać-gnieść','grycha-stara bułka','grygolić-bazgrać','guli-z powodu','guła-indyk','guzdrać--obić coś w bardzo wolnym tempie','guzik-włącznik, przycisk','gzik-twarożek ze śmietaną i cebulą, ze szczypiorkiem i oliwą','gzub-małe dziecko','haczka-motyka','haczyk-pogrzebacz lub hak','haj-nóż','hajcować-palić','hajs-pieniądze','hajtnąć-uciąć','hajtok-nóż','hajtnąć się-ożenić się','hazaj-zając','he?-co?','hebel-strug','hejbnąć sie-zdobyć się na coś','heklówka-szydełko (do ręcznych robótek)','heklować-szydełkować, robić na szydełku','heksa-zołza','hela-wóz ze skrzynią na ziemniaki','huby-peryferie','hyca-upał','hycać-skakać','hyćka-czarny bez','ichty-niezrównoważone zachowanie','inkost-atrament','ino-tylko','inwentura-remanent','Istny-ten właśnie!','iść w pyry-nie zawracaj głowy','jabol-tanie wino z dużą ilością siarki','jabzo-jabłko','jaczka-marynarka','jangryst-agrest','jampor-rampa','japa-dziura lub jama ustna','japić-dziurawić','jednaki-jednakowy','jedza-jedzenie','jegiery-kalesony','jest piec-jest problem, zadyma, zamieszanie','jucha-krew','juchta-złodziej','junkers-przepływowy, gazowy podgrzewacz wody','jupa-wierzchnie okrycie','kabany-kabaczki','kabel-izolowany przewód elektryczny','kachel-buzia ','kajzer-cesarz','kakaludek-niski wzrostem','kalafa-twarz','kamelarz-urzędnik miejski','kamloty-kamienie','kanar-kontroler w tramwaju','kanka-nierdzewna bańka zamykana na mleko','kantować się-pchać się','karmelki-cukierki','karmonada-schab','kasta-skrzynia','kaszok-kaszanka','katana-kurtka','kawiorek-mały puszysty chleb pszenny','każdy jeden-każdy','kąpiółka-łazienka ','kejter-pies','kibel-śmietnik','kibol-kibic','kicha-kiełbasa','kichy-wąskie spodnie','kiejda-kieszeń','kierz-krzak','kielczyć się-śmiać się','kieloch-ząb','kieluńdek-kieliszek','kieretyny-krzaki','kij-piętro','kinder-brudas','kintop-kino','kipa-niedopałek','kis-żwir','kista-skrzynia','kiszczonka-woda po gotowanej kaszance','kiszka-kaszanka','klajdać-ubierać','klajtry-włosy','klamizer-partacz','klamoty-graty, wszystkie przedmioty lub kamienie','klapsztula-kanapka składająca się z dwóch skibek chleba z obkładem pomiędzy nimi','klara-słońce ','klejdry-plotki','kląkry-rupiecie','klemy-cukierki twarde','kletuśnica-plotkarka','klocek-tysiąc','klofta-kłoda, pień drzewa lub gruba kobieta','klopnąć-sprzedać','kluft-odzież','kluka-nos','klunkier-rupieć','klybać-plotkować','knajder-mężczyzna niskiego wzrostu','knipa-książka','knobloch-kiełbasa czosnkowa','knyf-tajemny sposób','knyp-nóż','knypek-niski człowiek','knyple-podłużne kanciaste bułki','kociamber-kot','kojo-łóżko','kokot-kogut','Kolejorz-KKS Lech Poznań','kolonialka-sklep spożywczy','kompel-kolego','koperytki-kapiszony','kopytka-kluski z gotowanych ziemniaków i mąki','korbol-tanie wino','kramować się-zalecać się','kromka-piętka chleba','krybuny-plecy','krypel-cerkiew','kumoś-kum, kuma','kumoterstwo-nepotyzm','kusić-straszyć','kuszka-koszyk','kuzaj-kuzyn','kwynkać-marudzić, narzekać na dolegliwości chorobowe','kwyrla-prosty przyrząd kuchenny do mieszania ciast','kymby rymby-na odwrót','labija-zabawa','laczki-obuwie domowe bez pięty lub buty','laga-przedmiot podłużny','lajcha-człowiek słaby','lajsnąć (se)-kupić (sobie)','land-wieś','langus-człowiek wysoki','lania-szkoła','latoś-tego roku','latowy-letni np. domek','lebera-wątrobianka','lejza-osoba niezdarna','leko-lekko','lelać-rozpieszczać','leżałki-gruszki ulęgałki','libera-poziomica','ligać sie-ślizgać się','ligawa-ślizgawa','listowy-listonosz','lodówa-duży samochód policyjny','lofrować-lenić się','lofer-człowiek, który się włóczy','lola-gruby kij','lumpy-ciuchy','luchnąć-wypić','lujnąć-uderzyć','luj-wielki','lufcik-małe okienko w dużym oknie','lola-laska','lołs-dalej','lumpy-rzeczy','luntrus-łazęga','luńt-kawał (kiełbasy)','lura-o kawie','lury-głupstwa','lyrać sie-chwiać się','łata-urwis','łatynda-obibok','łe jery!-o rany','łęgol-człowiek wesoły','łoński rok-zeszły rok','łynt-lanie','macać się z głupim bez ściane-być nienormalnym, zgłupieć','macoszka-bratek','majsel-przecinak','maluda-dziecko','mamisz-lekkoduch lub małe dziecko','mana-drużyna sportowa','mantel-płaszcz','manygować-lenić się','manyle-odzież','manyroły-męskie przyrodzenie','marać-szukać, grzebać','maryjanka-majeranek','mączka-krochmal','mączyty-mączysty','mądre drzewo-poziomica','mela-dziewczyna','melki-cukierki','melona baba-rodzaj ciasta','menel-typek','merknąć się-zorientować się','metryka-tylko akt chrztu','męgla-magiel','miałki-płytki','miągwa-osoba płaczliwa','mieć dolinę-mieć doła','migana-zabawa z tańcami','miyndzy-między','mlostek-kamienny garnek do mleka','młodzie-drożdże','modrak-bławatek','modra kapusta-czerwona kapusta','modrakowaty-niebieski','modrakowy-niebieski','modre-farbka do barwienia tkanin','mora-zmora','motorowy-motorniczy','mrzygłód-niejadek','muzyka pod giyre-muzyka taneczna','myrdać, merdać-mieszać','myrdyrda-zasmażka','myrlać-wydawać nieakceptowane dla słuchacza dźwięki','nabierka-łyżka wazowa','nabąbany-najedzony w nadmiarze','nadrach-obdartus','nadusić-nacisnąć (np. przycisk dzwonka)','na jednym laczku-szybko','nakastlik-stolik nocny','nałojony-pijany','namknąć-usunąć','na odwyrtke-na odwrót','napizgany-pijany','naramki-ramiączka','na ręby-na odwrotną stronę','narychtować-przygotować','na spróbę-na próbę','na szagę-na skróty','nawarka-zupa z mlekiem','nazad-do tyłu','nicpota-nicpoń','nieusłuchany-niegrzeczny','niezgloźnie-nieudolnie','niuda-świnia','norać-tarzać','nośpłat-handlarz szmatami','nupel-smoczek','nyga-komar','nygus-leń','nyny-spanie (iść nyny ; iść spać)','nyra-skąpiec','obkład-to co się kładzie na kanapce (plasterki kiełbasy, ser itd.)','oblec-włożyć (ubrać się)','obski-obcy','obśrupany-odrapany','ochlapus-pijak','odbić bilet-skasować bilet','odkinać się-odczepić się','odkluczyć-otworzyć zamknięty zamek','ofunflany-ubrudzony','ogar-łobuz','ogigle-gałązki bez liści','ogrodowy-ogrodnik','odsiebka-przeciwna strona','oglejdrane-obłocone, np. buty','okowita-spirytus, denaturat','omurzyć-pobrudzić czymś sypkim np. piaskiem, kurzem','opędziały-lichy','opękać-obyć się bez czegoś','opypłać się-ubrudzić się','opypłaniec-brudas','ostrzytko-temperówka','otworzony-otwarty','ośródka-miąższ chleba','pałka-kurze udko','pamperek-mała laleczka','pana-dziura w dętce','pantoki-drewniaki','papcie-obuwie domowe','papa-twarz','papudrak-partacz','parzybroda-kapuśniak z włoskiej kapusty','paterak-partacz','patonić się-palić się','patrzydła-okulary','pągiel-smarkacz','peja-wesz','pełna wiksa-pełen gaz (w samochodzie)','pener-osiedlowy maczo','perpecie-drobne rzeczy','petrol-nafta','petronelka-biedronka','pęchcić-szperać','Piciu-Piotr','pieniąchy-pieniądze','pierdoła z Gądek-gaduła','pierdoły-drobnostki','pierdolić-mówić trzy po trzy lub plotkować (nie wulgaryzm)','pierdoła-nudziarz','pierduśnica-plotkarka','pinda-wyzywająca dziewczyna','pindaczyć się-stroić się','pipol-piekarz','pitok-męski narząd','pizgać-robić','pizgnąć się-uderzyć się','pizgnąć fotkę-zrobić zdjęcie','plendze-placki ziemniaczane','plożyć-służyć','pochichrać-pośmiać się','pochrympać-postrzępić','podstawek-talerzyk pod szklankę','pofajtać-pomieszać','pojapać-podziurawić','polica-półka','pomieszkanie-mieszkanie','po mojemu-myślę','poruta-wstyd','pory-spodnie','porządki-narzędzia','porzónny-porządny','posoba-sufit','pośrupać-poszczerbić','półżytki-pośladki','prek-precz','proszczak-prosiak','przebierać-nadwerężać','przechadzka-spacer','przecisk-zwężenie drogi','przepękać-obyć się bez czegoś','przesmradzać-wybrzydzać','przykinać-przyczepić się','przytośtać-przynieść','przytośtać się-przyjść','przyturać-przynieść','puczyć się–-zczycić się','pukwa-babsko','ptapty-zachowywać się dziecinnie','pynk-pęk','pyra-ziemniak','Pyra-mieszkaniec Wielkopolski, ale nie jest to w Wielkopolsce określenie negatywne','pyry w mundurkach-ziemniaki gotowane w łupinach','pyry z gzikiem-regionalna potrawa (ziemniaki i biały ser)','pyza-drożdżowe kluski na parze','rajcowny-podniecający','rajzować-podróżować','ramiążko, ramiączko-wieszak na ubrania lub chuderlak','rampuć, rumpuć-gęsta zupa jarzynowa','rapel-bzik','raszka-szuflada na papiery','raszpel-tarnik do drewna','redyski-rzodkiewki','religa-łamaga','repeta-gęsta zupa stanowiąca jednodaniowy obiad','retenta-rupiecie','rodle-sanki','rojber-łobuz','rojber-bałagan','rozpłaszczyć się-zdjąć płaszcz','równak-jednak','rug cug-szybko','ruła-spokój','rumotać-hałasować','rumpuć-gęsta zupa jarzynowa','rychtyg-akurat','rychtować-szykować','ryczka-niski taboret do ręcznego dojenia krów','rydychy-nogi','rylać się-chybotać się','ryfa-gęba','ryry-klamoty (por. klunkry)','rzęch-stare, ciągle psujące się urządzenie','rżany-żytni','sa stędy sa styndy-stąd','salacha-młoda, ale wysoka dziewczyna','sanki-sankcje','sądek-drewniane naczynie','siano-pieniądze','sień-małe chłodne pomieszczenie przykuchenne','siora-siostra','skataić się-zmęczyć','skędy-skąd','skiba-kradzież','skibka-to, co powstaje, gdy kroi się chleb (nie kromka) i z czego robi się sznytki','skibać-ukraść','sklep-piwnica','skład-sklep','skopowina-baranina','skorno-skoro','skorupa-naczynia ceramiczne','skrytka-spiżarnia','skrzeczki-skwarki','słodkie-ciasto','słodziak-sympatyczny ziomek','smaka-smak','smrodyla-czarna porzeczka','soliwka-mała beczka zwężająca do przewozu owoców','sosyska-kiełbaska','spartolić-zepsuć','spiłować-wytrzymać','spodek-długi materac z pierza','sprawunki-zakupy','spucnąć-zjeść','stalować się-pysznić się','statki-naczynia kuchenne','stoi napisane-jest napisane','stołowy-jadalnia, pokój jadalny','stroić muki-dąsać się','stryknąć sie-zderzyć się','suchar-drętwy tekst','szabel-strąk fasoli','szaber-kradzież, złodziejstwo','szabraka-odzież wierzchnia','szafonierka-zafa na bieliznę','szaga-na szagę czyli na skos, skróty','szagówki-kluski z gotowanych ziemniaków','szajba-obłęd','szajbus-człowiek wybuchowy','szałaput-lekkomyślny','szampiter-szampon','szaranek-mały chłopczyk','szczender-podwórkowy trzepak','szczon-chłopak','Szkieber-Niemiec','szkieł-policjant','szkieły-policja','szkiyta-noga','szkloki-landrynki','szkopek-drewniana mała miska do mycia nóg','szlachtus-rzeźnik','szlankowny-szczupły','szlauch-wąż','szłamka-szmatka','szmaja-człowiek leworęczny','szmergiel-papier ścierny','szmucha-przekręt','sznajdera-proca','szneka-drożdżówka','szneka z glancem-drożdżówka z kruszonką, z lukrem','sznupa-buzia','sznupioki-łobuzki','sznytka-skibka chleba','sznytloch-szczypiorek','szpadel-łopata','szpanga-wsuwka do włosów','szparać-oszczędzać','szpekać-zaglądać','szportka-spacerówka','szpryca-strzykawka lub zastrzyk','szpryt-spirytus','szpycka-lufka do papierosów','szpycnąć-zerknąć','szpycować-spoglądać','szrajba-podpis','szrajbnąć-napisać','szruber-twarda szczotka do szorowania podłogi','sztynder-stojak','szteryfelek-kawałek','sztrykować-robić na drutach coś z wełny','sztyfcik-trzpień','sztyft-uczeń rzemieślniczy','sztyl-kij od miotły','szachrować-oszukiwać','szuszwol-brudas','szut-miał węglowy','szwaja-noga','szwamka-gąbka','szwindel-świństwo','szwung-ciąg','szydera-kpiny','szypa-płaska łopata do załadunku sypkich materiałów ','ślabrać-brudzić','ślabrotać-mówić niewyraźnie','ślepe ryby-zupa jarzynowa z ziemniakami','ślepe ryby z myrdyrdą-zupa jarzynowa z ziemniakami mieszana w czasie gotowania','ślipie-oczy','ślumper-przedmiot ociekający brudną wodą','śpik-sen','śpiki-skronie','śrubokręt-wkrętak ','śrubociąg-wkrętak','śrupać-szczerbić, obijać, strzępić','świecić się-rozglądać się','świętojanki-porzeczki','świgać-rzucać','śwignąć-rzucić','świntojanki-porzeczki','taśtać-nieść','tamdotąd-tam','tej-ty','to równak-to jednak','tonkać-moczyć','trzebno-trzeba','trzeszczok-małe hałaśliwe dziecko','trzewiki-buty','trzęsionka-galareta mięsna','tudotąd–-u','tuk-szpik kostny lub głupek','tuleja-niezdara','tu na-częstuj się','tyndy-tutaj ','tyta-stan upojenia alkoholowego','tutej-tutaj','tytka-torebka papierowa','ubrechtać-ubrudzić się,','uślumprać-uśmiać się','uhaczyć się-być osobą towarzyszącą (niekoniecznie potrzebną)','uhajtnąć-uciąć','ukrychnąć-ukroić','uliczka-furtka','leżałki-gruszki ulęgałki','umorusać się-pobrudzić się','umurzyć-pobrudzić czymś sypkim','omurzyć-pobrudzić czymś sypkim','upitrasić-ugotować','usiąść się-usiąść','uskromnić się-uspokoić się','uszporać-zaoszczędzić','uślabrać-ubrudzić','uślumprany-umorusany','utonkać-umoczyć','wagować się-wahać się','wafel-beznadziejny ziomek','wajcha-dźwignia, przekładnia','wartołka-ruchliwy malec','waserwaga-poziomnica','wazka-drewniana balia','wąsiona-gąsienica','wciągnąć się-również wprowadzić się','wdusić-wcisnąć','wej-patrz, zobacz','weko-słój do zapraw','wemborek-wiadro','wew-w','westka-kamizelka','wiara-ludzie','wihajster-to coś','wiewiołga-wilga','wiks-lanie','wiksa-nieokreślona moc','wixa-stan upojenia alkoholowego','winkiel-zza rogu','zza winkla-róg','wknaić się-wcisnąć się','wkuty-wściekły','wlewać komuś-schlebiać komuś','wodnity-wodnisty','w ryj-bardzo','w te i wefte-tam i z powrotem','wuchta-dużo','wuja-wujek','wyc-kawał','wychędożyć-wyczyścić','wyciągnąć się-wyprowadzić się','wyćpić-wyrzucić','wyćwierzać się-wydziwiać','wygogolona-wydekoltowana','wyknaić-wyrzucić','wykopyrtnąć się-wywrócić się','wylynga-ciapowaty','wymarać-wyszukać','wemborek-wiadro','wymienianki-lista zmarłych osób, za których teraz się modlimy','wynorać-wyszukać','wynuplać-wyciągnąć','wypindaczony-wystrojony','wypłechtać-wypłukać','wyro-łóżko','wysiepać-wyrwać','wystworzać fify-stroić żarty','wyszki-coś wyżej','wejść na wyszki-wejśćnna drabinę','wysztafirowany-wystrojony','zadziać-zagubić','zajta-strona www','zaklepka-zasmażka do zupy','zakluczyć-zamykać drzwi na klucz','zamówiony-zarezerwowany','zamudzać-przeszkadzać','zapytaj się jemu-zapytaj się jego','zaś-następnie','zaś-później','potem-następnie, ','zawdziać-załóż na siebie','zawdzi na się-ubrać','zbańczyć-zbankrutować','zduczniały-nędzny','zdziebko-trochę','dziebko-trochę','ze-z','zez-z','ze spokojem-bez pośpiechu','z gorem, z deklem-być nie normalnym','zgrudzić się-skurczyć się','zimne nóżki-galareta z mięsa','z ledwością-ledwie','zminąć-zmienić','zmir-spokój','zmuda-strata','zmudzić-stracić','znorać sie-ubrudzić się','zobacz to-spójrz na to','zolog-zoo','zrobić wyro-pościelić łóżko','związek-związek lub połączenie kolejowe','zwięzłowato-zwięźle','zwyczajny-przyzwyczajony do czegoś/kogoś','zynder-łobuz','zyzol-zezowaty','żarnica-ziarnica','żdżarty-żarłoczny','żdżarty gatunek-żarłok','żgajek-chłopak','żgaj-zadziorny wyrostek','żgak-drzazga','żgok-kolec','żgnąć-donieść na kogoś','żłopać-pić','żnąć-udawać kogoś','żuć-dusić coś w sobie','żużel-kobiety lekkich obyczajów','żybura-brudna, bardzo mętna ciecz','żubura-brudna, bardzo mętna ciecz','żyć na knebel-żyć z partnerem bez ślubu','żyć na kreche-żyć na kredyt','żydek-mały nóż'];
        this.Base.forEach(x => {
            let toAdd = x.split('-');
            this.dictionaryContent.push(new WordPack(toAdd[0], toAdd[1]));
        });
        // console.log(this.dictionaryContent);

        // fetch('./js/input.json')
        // .then(response => {
        //     if(response.status !== 200){
        //         throw Error('This is not an answer!');
        //     }else{
        //         return response.json();
        //     }
        // })
        // .then(data => {
        //     console.log(data);
        //     data.forEach(x =>{
        //         this.containerOfWords.push(new WordPack(x.posen, x.polish));

        //         // console.log(`${x.polish} - ${x.posen}`);
        //     });
        //     // this.showWords(json.results);
        //     // console.log(data.pole);
        //     // containerOfWords.forEach(word => {
        //     //     console.log(word);
        //     // });
        //     // console.log(json);
        // })
        // .catch(err => console.log(err))
        // document.getElementById('')
        // console.log(containerOfWords);
        // containerOfWords.forEach(e =>{
        //     console.log(`${e.polish} - ${e.posen}`);
        // });
    }
    toPosen(toSearch){
        // this.containerOfWords.forEach(x =>{
        //     // console.log(`${x.polish} - ${x.posen}`);
        //     if(toSearch === x.polish){
        //         console.log(`${x.posen}`);
        //         return 0;
        //     }else{
        //         console.log('Nie znaleziono');
        //     }
        // })
        try{
            for(let i = 0; i<this.dictionaryContent.length; ++i){
                if(this.dictionaryContent[i].polish === toSearch.trim().toLowerCase()){
                    return this.dictionaryContent[i].posen;
                }
            }
            throw "Brak frazy";
        }catch(err){
            return err;
        }
    }

    toPolish(toSearch){
        
        try{
            for(let i = 0; i<this.dictionaryContent.length; ++i){
                if(this.dictionaryContent[i].posen === toSearch.trim().toLowerCase()){
                    return this.dictionaryContent[i].polish;
                }
            }
            throw "Brak frazy";
        }catch(err){
            return err;
        }
    }

    getRandomWord(){
        let i = Math.floor(Math.random()*(874-0+1))+1;
        return this.dictionaryContent[i];
        // for(let i = 0; i<this.Base.length; ++i){
        //     // console.log(this.containerOfWords[i].polish);
        //     console.log(this.Base[i]);
        //     // console.log('ajsnf,sa');
        // }
    }

};
const x = new Dictionary();


class FlashCard{
    front = "";
    back = "";
    constructor(){
        
        this.front = document.querySelector('.description-front');
        this.back = document.querySelector('.description-back');
        // console.log(`${this.front} - ${this.back}`);

    }
    setValue(){
        let randomWord = x.getRandomWord()
        this.front.textContent = randomWord.polish;
        this.back.textContent = randomWord.posen;
        this.front.style.fontSize="2rem";
        this.back.style.fontSize="2rem";
    }
};

console.log(x.getRandomWord());





const search = document.querySelector('#submit');
search.addEventListener('click', (e)=>{
    e.preventDefault();
    const poland = document.querySelector('.pole');
    const poz = document.querySelector('.posen');
    console.log(poland.value);
    console.log(poz.value);
    if(poz.value !== ""){
        let result = x.toPolish(poz.value);
        poland.value = result;
    }
    if(poland.value !== ""){
        let result = x.toPosen(poland.value)
        poz.value = result;
    }
});

window.onload = ()=>{
   const startFlashCard = new FlashCard();
   
   startFlashCard.setValue();
}


class Favourites{
    constructor(){
        this.favList = []

    }
    addPhrase(toAdd){
        this.favList.push(toAdd);
    }
}

const newFavArr = new Favourites();


let fav = document.querySelector('.material-icons-outlined');
fav.addEventListener('click', function(){
    // fav.textContent = "";
    console.log('clicked');
    fav.textContent = "favourite"
    // let sib = fav.nextElementSibling;
});

let y = document.querySelector('.btn');
y.addEventListener('click', function(){
    // fav.textContent = "";
    console.log('clicked');
    let fav = document.querySelector('.icon-front');
    fav.innerHTML = ['favourite']
    
    let back = document.querySelector('icon-back');
    back.innerHTML = ["favourite"];
    // let sib = fav.nextElementSibling;
});

const favPhrase = document.querySelector('#icon-back').addEventListener('click', (e)=>{
    e.preventDefault();
    let favFront = document.querySelector('.description-front').textContent;
    let favBack = document.querySelector('.description-back').textContent;
    console.log(favFront);

    console.log(favBack);
    let x = document.querySelector('#icon-front').classList.replace('material-icons-outlined','material-icons');
    // x.textContent =  'favourite';
    console.log(x.textContent);

    newFavArr.addPhrase(new WordPack(favBack, favFront));
    console.log(newFavArr);
})