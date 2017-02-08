myData = [
[42.3398067,-71.0891717, '360 Huntington Ave, Boston, MA 02115, USA'],
[32.7767783,35.0231271, 'Haifa, 3200003, Israel'],
[18.4638871,73.8679719, 'No.666, Upper Indiranagar, Bibwewadi, Pune, Maharashtra 411037, India'],
[38.9869183,-76.9425543, 'College Park, MD 20742, USA'],
[42.4074843,-71.1190232, '419 Boston Ave, Medford, MA 02155‎, USA'],
[-37.9114731,145.1344641, 'Wellington Road, Clayton VIC 3800, Australia'],
[54.6291848,39.7477256, 'ul. Svobody, 46, Ryazan, Ryazanskaya oblast, Russia, 390000'],
[41.406498,2.1945432, 'Rambla del Poblenou, 156, 08018 Barcelona, Spain'],
[52.2766124,104.2777287, 'ul. Karla Marksa, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[-6.974001,107.630348, 'Jl. Telekomunikasi No. 01, Terusan Buah Batu, Sukapura, Dayeuhkolot, Bandung, Jawa Barat 40257, Indonesia'],
[31.0252201,121.4337784, '800 Dongchuan Rd, Minhang Qu, China, 201109'],
[8.4910464,4.5951506, '1515, Unilorin Staff Quarters, Amodu Bello Way, Ilorin, Nigeria'],
[-38.311211,146.429409, 'Northways Rd, Churchill VIC 3842, Australia'],
[-25.7676588,28.1992637, 'Preller St, Pretoria, 0002, South Africa'],
[47.7239467,13.0864957, 'Urstein Süd 1, 5412 Salzburg, Austria'],
[61.4497952,23.8586408, 'Korkeakoulunkatu 10, 33720 Tampere, Finland'],
[59.941894,30.2989198, 'University Embankment, 7-9, Sankt-Peterburg, Russia, 199034'],
[-23.5613991,-46.7307891, 'Butantã, São Paulo - State of São Paulo, 05508-090, Brazil'],
[54.7848868,32.0462608, 'ul. Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[24.9413316,67.113855, 'KU Circular Rd, Karachi 75270, Pakistan'],
[40.4478246,-3.7285872, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[24.4335115,54.6176592, 'Masdar City - Abu Dhabi - United Arab Emirates'],
[51.5229378,-0.1308206, 'Senate House, Malet St, London WC1E 7HU, UK'],
[51.7566341,-1.2547037, 'Oxford OX1 3PA, UK'],
[59.395884,24.671431, 'Ehitajate tee 5, 12616 Tallinn, Estonia'],
[58.3810843,26.7198658, 'Ülikooli 18, 50090 Tartu, Estonia'],
[45.406766,11.8774462, 'Via 8 Febbraio 1848, 2, 35122 Padova PD, Italy'],
[18.552338,73.824618, 'Ganeshkhind, Pune, Maharashtra 411007, India'],
[50.4420868,30.5104024, 'Volodymyrska St, 60, Kyiv, Ukraine, 01033'],
[37.8718992,-122.2585399, 'Berkeley, CA 94720, USA'],
[43.076592,-89.4124875, 'Madison, WI 53706, USA'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[59.9447472,30.2947784, 'Birzhevaya liniya, 14-16, Sankt-Peterburg, Ленинградская область, Russia, 199034'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovsk Oblast, Ukraine, 49000'],
[38.4308451,27.1369785, 'Kültür, Cumhuriyet Blv No:144, 35210 Alsancak/Konak/İzmir, Turkey'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, BeiTaiPingZhuang, Haidian Qu, Beijing Shi, China, 100875'],
[37.9416261,23.6530238, 'Karaoli & Dimitriou St. 80, Πειραιάς 185 34, Greece'],
[-34.5998875,-58.3730695, 'Viamonte 430, 1053 Buenos Aires, Argentina'],
[10.7275232,79.020733, 'Thirumalaisamudram, Thanjavur, Tamil Nadu 613401, India'],
[21.1457071,79.0752439, 'Chhatrapati Shivaji Maharaj Administrative Premises, Ravindranath Tagore Marg, Nagpur, Maharashtra 440001, India'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[37.721897,-122.4782094, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[-23.6948936,-46.548377, 'Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo - SP, 09634-050, Brazil'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[61.680323,27.2595478, 'Patteristonkatu 3 D, 50100 Mikkeli, Finland'],
[31.7988244,-85.9574086, '600 University Ave, Troy, AL 36082, USA'],
[41.5598965,-8.3966231, 'R. da Universidade, 4704-553 Braga, Portugal'],
[33.642537,72.990474, '44000، NUST HQ، Scholars Avenue، Islamabad, Pakistan'],
[-33.4411279,-70.6407933, 'Av Libertador Bernardo OHiggins 328, Santiago, Región Metropolitana, Chile'],
[41.500374,-88.178946, '1215 Houbolt Rd, Joliet, IL 60431, USA'],
[30.018923,31.499674, 'Parcel 8, 74 S El-Teseen St, NEW CAIRO, Cairo, Cairo Governorate 11835, Egypt'],
[55.137191,36.607059, 'Студенческий городок кв-л 1, строен. 1, Обнинск, Калужская обл., 249030, Russia'],
[58.5912753,49.6767281, 'Krasnoarmeyskaya ul., 26, Kirov, Kirovskaya oblast, Russia, 610002'],
[31.9037541,34.8080315, 'Herzl St 234, Rehovot, Israel'],
[47.6553351,-122.3035199, 'Seattle, WA 98105, USA'],
[49.9958165,36.2417771, 'Marshala Bazhanova St, 13, Kharkiv, Kharkiv Oblast, Ukraine, 61002'],
[43.8566698,18.3983691, 'Zmaja od Bosne, Sarajevo 71000, Bosnia and Herzegovina'],
[4.6028443,-74.0648433, 'Cra. 1 #18a-12, Bogotá, Colombia'],
[40.007581,-105.2659417, 'Boulder, CO 80309, USA'],
[53.4221438,58.9826396, 'pr. Karla Marksa, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[49.2780937,-122.9198833, '8888 University Dr, Burnaby, BC V5A 1S6, Canada'],
[40.8075355,-73.9625727, '116th St & Broadway, New York, NY 10027, USA'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[52.2403463,21.0186012, 'Krakowskie Przedmieście 26/28, 00-927 Warszawa, Poland'],
[52.2212012,21.0080857, 'plac Politechniki 1, 00-661 Warszawa, Poland'],
[-40.3867649,175.619553, 'Tennent Dr, Massey University, Palmerston North 4474, New Zealand'],
[35.2058936,-97.4457137, '660 Parrington Oval, Norman, OK 73019, USA'],
[45.1864597,9.1555362, 'Corso Str. Nuova, 106/c, 27100 Pavia PV, Italy'],
[38.9403808,-92.3277375, 'Columbia, MO 65211, USA'],
[50.1030364,14.3912841, 'Zikova 1903/4, 166 36 Praha 6, Czechia'],
[41.8348731,-87.6270059, '3300 S Federal St, Chicago, IL 60616, USA'],
[40.7982133,-77.8599084, 'Old Main, State College, PA 16801, USA'],
[40.7649368,-111.8421021, '201 Presidents Cir, Salt Lake City, UT 84112, USA'],
[45.8105703,15.9698015, 'Trg maršala Tita 14, 10000, Zagreb, Croatia'],
[39.481059,-0.341067, 'Camí de Vera, s/n, 46022 València, Valencia, Spain'],
[48.2131855,16.3600504, 'Universitätsring 1, 1010 Wien, Austria'],
[18.2110294,-67.1391071, 'PR-108, Mayagüez, 00682, Puerto Rico'],
[44.4328134,26.1255834, 'Calea Călărași, București 030615, Romania'],
[41.2907035,-72.9616437, '300 Boston Post Rd, West Haven, CT 06516, USA'],
[47.6553351,-122.3035199, 'Seattle, WA 98105, USA'],
[39.9566127,-75.1899441, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[60.1726348,24.9510419, 'Yliopistonkatu 4, 00100 Helsinki, Finland'],
[42.2780436,-83.7382241, '500 S State St, Ann Arbor, MI 48109, USA'],
[40.4434658,-79.9434567, '5000 Forbes Ave, Pittsburgh, PA 15213, USA'],
[55.790447,49.1214348, 'Kremlyovskaya St, 18, Kazan, Respublika Tatarstan, Russia, 420000'],
[12.0219374,79.8574591, 'Kalapet, Puducherry, 605014, India'],
[43.115297,131.9001519, 'Pushkinskaya ul., 10, Vladivostok, Primorskiy kray, Russia, 690000'],
[1.3483099,103.6831347, '50 Nanyang Ave, Singapore 639798'],
[48.154573,17.1177, 'Vazovova 5, public@stuba.sk, 812 43 Bratislava, Slovakia'],
[40.7295134,-73.9964609, 'New York, NY 10003, USA'],
[-23.6441964,-46.5284139, 'Av. dos Estados, 5001 - Bangú, Santo André - SP, 09210-580, Brazil'],
[47.5535039,21.6214756, 'Debrecen, Egyetem tér 1, 4032 Hungary'],
[34.1829984,-117.323805, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[50.4645706,30.5190734, 'Hryhoriya Skovorody St, 2, Kyiv, Ukraine, 04655'],
[46.4667708,-80.9742332, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[52.2042666,0.1149085, 'The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK'],
[35.8012314,51.5028533, 'Tehran Province, Tehran, اتوبان ارتش کوی نفت, Nakhl St, Iran'],
[39.8920568,32.7786112, 'Middle East Technical University Üniversiteler Mahallesi, Dumlupınar Bulvarı No:1 06800 Çankaya Ankara/TURKEY, Üniversiteler, Middle East Technical University, 06800 Çankaya/Ankara, Turkey'],
[46.5190557,6.5667576, 'Route Cantonale, 1015 Lausanne, Switzerland'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića, Novi Sad 106314, Serbia'],
[57.6981719,11.971878, '405 30 Gothenburg, Sweden'],
[45.7536471,21.2251066, 'Piata Victoriei nr. 2, Timișoara 300006, Romania'],
[53.8930389,27.5455566, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[60.218033,24.906007, 'Videängsvägen 11, 00320 Helsingfors, Finland'],
[22.4966561,88.3710918, 'Prayukti Bhawan, 188, Raja Subodh Chandra Mallick Rd, Jadavpur University Campus Area, Jadavpur, Kolkata, West Bengal 700032, India'],
[26.1529683,91.6639235, 'Gauhati University, Jalukbari, Guwahati, Assam, India'],
[-34.5998875,-58.3730695, 'Viamonte 430, 1053 Buenos Aires, Argentina'],
[44.4149149,8.9267336, 'Via Balbi, 5, 16126 Genova, Italy'],
[13.6517367,100.4949226, '126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[4.8615787,-74.0325368, 'Puente Del Comun, Chía, Cundinamarca, Colombia'],
[43.450851,-76.543438, '7060 New York 104, Oswego, NY 13126, USA'],
[42.8737678,74.6144033, 'Bishkek, Kyrgyzstan'],
[14.5642894,120.9932028, '2401 Taft Ave, Malate, Manila, 1004 Metro Manila, Philippines'],
[17.4946257,78.3921576, 'Kukatpally, Hyderabad, Telangana 500085, India'],
[50.6696875,4.6155909, 'Place de lUniversité 1, 1348 Louvain-la-Neuve, Belgium'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[51.2473822,6.7916469, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[39.1766135,-86.5130173, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[42.730172,-73.6788026, '110 8th St, Troy, NY 12180, USA'],
[45.4231064,-75.6831329, '75 Laurier Ave E, Ottawa, ON K1N 6N5, Canada'],
[56.844087,60.653668, 'ul. Mira, 19, Yekaterinburg, Sverdlovskaya oblast, Russia, 620002'],
[28.3639812,75.5869784, 'Campus, Vidya Vihar, Pilani,, Pilani Road, BITS, Pilani, Rajasthan 333031, India'],
[45.6451546,25.5891184, 'Bulevardul Eroilor 29, Brașov 500036, Romania'],
[25.2623305,82.989403, 'Banaras Hindu University, Varanasi, Uttar Pradesh 221005, India'],
[45.786447,4.764139, '23 Avenue Guy de Collongue, 69130 Écully, France'],
[10.49065,-66.8919913, 'Caracas, Capital District, Venezuela'],
[50.4488824,30.4572543, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[-7.1367475,-34.8455092, 'Cidade Universitária, s/n - Conj. Pres. Castelo Branco III, João Pessoa - PB, 58051-900, Brazil'],
[47.4813261,19.0554834, 'Budapest, Műegyetem rkp. 3, 1111 Hungary'],
[55.930215,37.51821, 'Institutskiy per., 9, Dolgoprudnyy, Moskovskaya oblast, Russia, 141701'],
[59.9295233,30.2965598, 'Bolshaya Morskaya ul., 67, Sankt-Peterburg, Russia, 190000'],
[41.7757375,-88.1427779, '30 N Brainard St, Naperville, IL 60540, USA'],
[55.7855742,12.521381, 'Anker Engelunds Vej 1 Bygning 101A, 2800 Kgs. Lyngby, Denmark'],
[37.4274745,-122.169719, '450 Serra Mall, Stanford, CA 94305, USA'],
[45.7536471,21.2251066, 'Piata Victoriei nr. 2, Timișoara 300006, Romania'],
[-12.024022,-77.0481441, 'Av. Túpac Amaru s/n, Rimac, Lima 25, Perú, Av. Tupac Amaru 210, Rímac Lima 25, Peru'],
[-37.9015913,145.1155133, 'Monash, VIC, Australia'],
[-7.21519,-35.909692, 'R. Aprígio Veloso, 882 - Universitário, Campina Grande - PB, 58429-900, Brazil'],
[-30.033767,-51.218517, 'Av. Paulo Gama, 110 - Farroupilha, Porto Alegre - RS, 90040-060, Brazil'],
[19.3188895,-99.1843676, 'University City, Mexico City, CDMX, Mexico'],
[-33.9167956,151.2295532, 'College Rd, Kensington NSW 2052, Australia'],
[35.7286849,51.386103, 'Tehran Province, Tehran, District 16، Azar St، Enghelab Sq، Iran'],
[36.8855515,-76.3067676, '5115 Hampton Blvd, Norfolk, VA 23529, USA'],
[50.4531437,30.3546906, 'Lvivska St, 49, Kyiv, Ukraine, 03179'],
[6.8862448,3.7055016, 'Ilishan Remo Ogun State Nigeria, ILISHAN REMO, Nigeria'],
[51.8777259,0.9472069, 'Wivenhoe Park, Colchester CO4 3SQ, UK'],
[50.0148823,36.227892, 'Nauky Ave, 14, Kharkiv, Kharkiv Oblast, Ukraine, 61000'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[-34.5998875,-58.3730695, 'Viamonte 430, 1053 Buenos Aires, Argentina'],
[9.6844332,80.02211, 'Puliyadi Ln, Kokuvil East, Sri Lanka'],
[12.9237077,77.4986878, 'Mysuru Road, R. V. Vidyanikethan Post, Bengaluru, Karnataka 560059, India'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[34.068921,-118.4451811, 'Los Angeles, CA 90095, USA'],
[41.7886079,-87.5987133, '5801 S Ellis Ave, Chicago, IL 60637, USA'],
[35.7079021,-0.5789864, 'El Mnaouar, BP 1505, Bir El Djir 31000, Algeria'],
[30.5873067,31.4818606, '44519, Egypt'],
[53.5232189,-113.5263186, '116 St & 85 Ave, Edmonton, AB T6G 2R3, Canada'],
[53.8930389,27.5455566, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[40.5122833,-88.9946702, '100 N University St, Normal, IL 61761, USA'],
[29.6436325,-82.3549302, 'Gainesville, FL 32611, USA'],
[8.503333,76.947513, 'Senate House Campus, Palayam, Thiruvananthapuram, Kerala 695034, India'],
[45.4781071,9.2272764, 'Piazza Leonardo da Vinci, 32, 20133 Milano, Italy'],
[54.7223235,25.335736, 'Saulėtekio al. 11, Vilnius 10221, Lithuania'],
[12.9908081,80.2339031, 'Beside Adyar Cancer Institute, Opposite to C.L.R.I, Sardar Patel Road, Adyar, Chennai, Tamil Nadu 600036, India'],
[38.7368192,-9.138705, 'Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal'],
[42.2485027,-83.7368677, '1000 Oakbrook Dr, Ann Arbor, MI 48104, USA'],
[-33.9328078,18.864447, 'Stellenbosch, 7600, South Africa'],
[28.674288,77.448762, 'Raj Nagar, Ghaziabad, Uttar Pradesh 201001, India'],
[39.9522188,-75.1932137, 'Philadelphia, PA 19104, USA'],
[31.3961507,75.5353566, 'N.I.T. Post Office, G T Road, Jalandhar, Punjab 144011, India'],
[3.3418848,-76.5307366, 'Cl. 18 #122-135, Cali, Valle del Cauca, Colombia'],
[37.2283843,-80.4234167, 'Blacksburg, VA 24061, USA'],
[33.4197221,-111.9313334, 'Tempe, AZ 85281, USA'],
[14.603554,-90.489184, '11-95, 01015,, 18 Avenida, Guatemala'],
[54.73397,25.2583839, 'Ateities g. 20, Vilnius 08303, Lithuania'],
[43.6025572,-116.1996274, '1910 W University Dr, Boise, ID 83725, USA'],
[49.4253647,7.7556483, 'Erwin-Schrödinger-Straße 1, 67663 Kaiserslautern, Germany'],
[30.0762532,31.2861174, 'Khalifa El-Maamon St، كوبري القبة، Cairo, محافظة القاهرة‬ 11566, Egypt'],
[4.6381938,-74.0840464, 'Cra 45, Bogotá, Colombia'],
[60.007357,30.372899, 'Politekhnicheskaya ul., 29, Sankt-Peterburg, Russia, 195251'],
[53.5678694,-113.5045351, '11762 106 St NW, Edmonton, AB T5G 3H6, Canada'],
[42.3591388,-83.0665462, '42 W Warren Ave, Detroit, MI 48202, USA'],
[9.9986861,-84.1111858, 'Heredia Province, Heredia, Costa Rica'],
[39.4145456,-81.4491067, '215 5th St, Marietta, OH 45750, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[45.5117567,-122.6842859, '1825 SW Broadway, Portland, OR 97201, USA'],
[34.304073,48.8452846, 'Hamadan Province, Malayer, University Blvd, Iran'],
[-23.4834922,-46.5008765, 'Rua Arlindo Béttio, 1000 - Jardim Keralux, São Paulo - SP, 03828-000, Brazil'],
[-23.5613991,-46.7307891, 'Butantã, São Paulo - State of São Paulo, 05508-090, Brazil'],
[-23.4834922,-46.5008765, 'Rua Arlindo Béttio, 1000 - Jardim Keralux, São Paulo - SP, 03828-000, Brazil'],
[-23.4401157,-46.4043236, 'Estr. do Caminho Velho, 353 - Jardim Nova Cidade, Guarulhos - SP, 04021-001, Brazil'],
[34.0713489,-118.4452164, '2131 John Wooden Center, Los Angeles, CA 90095, USA'],
[-22.5566421,-47.4297709, 'R. Pedro Zaccaria, 1300 - Jd. Santa Luiza, Limeira - SP, 13484-489, Brazil'],
[-23.9711585,-46.3946092, 'Praça Infante Dom Henrique, s/n - Parque Bitaru, São Vicente - SP, 11330-900, Brazil'],
[-20.3972093,-43.5097646, 'R. Diogo de Vasconcelos, 122 - Pilar, Ouro Preto - MG, 35400-000, Brazil'],
[-22.7151524,-47.6297985, 'Avenida Pádua Dias, 11 - Agronomia, Piracicaba - SP, 13418-900, Brazil'],
[-23.5444026,-46.6496779, 'Rua Gen. Jardim, 522 - Vila Buarque, São Paulo - SP, 01223-010, Brazil'],
[-21.8136649,-48.1994023, 'Rodovia Araraquara-Jaú - Machados, Araraquara - SP, 14800-901, Brazil'],
[-20.4276168,-51.3435472, 'Av. Brasil Sul, 56 - Centro, Ilha Solteira - SP, 15385-000, Brazil'],
[-23.9477236,-46.3301208, 'Avenida D. Ana Costa, 95 - Vila Matias, Santos - SP, 11060-001, Brazil'],
[-23.559546,-46.6878324, 'R. Padre João Gonçalves, 152 - Pinheiros, São Paulo - SP, 05432-040, Brazil'],
[-22.9541412,-43.1753638, 'Av. Pedro Calmon, 550 - Cidade Universitária, Rio de Janeiro - RJ, 21941-901, Brazil'],
[-23.5687483,-46.7141824, 'Av. Vital Brasil, 1000 - Butantã, São Paulo - SP, 05503-001, Brazil'],
[-23.5245364,-46.6829579, 'R. Carlos Vicari, 124 B - Vila Pompeia, São Paulo - SP, 05033-070, Brazil'],
[-23.5479009,-46.6502372, 'R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907, Brazil'],
[-23.5378584,-46.6713104, 'R. Monte Alegre, 984 - Perdizes, São Paulo - SP, 05014-901, Brazil'],
[-22.9782927,-43.2333608, 'R. Marquês de São Vicente, 225 - Gávea, Rio de Janeiro - RJ, 22430-060, Brazil'],
[-19.9236342,-43.992471, '901, - R. Dom José Gáspar, 500 - Coração Eucarístico, Belo Horizonte - MG, Brazil'],
[-19.9236342,-43.992471, '901, - R. Dom José Gáspar, 500 - Coração Eucarístico, Belo Horizonte - MG, Brazil'],
[-19.916052,-43.975836, 'R. Riachuelo, 1321 - Padre Eustáquio, Belo Horizonte - MG, 30720-450, Brazil'],
[-21.7765015,-43.3688912, 'Rua José Lourenço Kelmer, S/n - Martelos, Juiz de Fora - MG, 36036-330, Brazil'],
[-21.2292703,-44.9775718, 'Av. Doutor Sylvio Menicucci, 1001 - Kennedy, Lavras - MG, 37200-000, Brazil'],
[-19.8690878,-43.9663841, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[-18.9176744,-48.2583046, 'Reitoria da Universidade Federal de Uberlândia - Av. João Naves de Ávila, 2121 - Santa Mônica, Uberlândia - MG, 38408-102, Brazil'],
[-19.7556435,-47.934527, 'R. Frei Paulino, 30 - Nossa Sra. da Abadia, Uberaba - MG, 38025-180, Brazil'],
[-20.7610104,-42.869056, 'Avenida Peter Henry Rolfs, s/n - Campus Universitário, Viçosa - MG, 36570-900, Brazil'],
[-21.4501945,-45.9458599, 'Rodovia Km 0, Bairro Trevo - MG 179, Alfenas - MG, 37130-000, Brazil'],
[-3.7860875,-38.5525112, 'Avenida Dr. Silas Muguba, 1700 - Campus do Itaperi, CE, 60740-000, Brazil'],
[-3.741262,-38.539389, 'Av. da Universidade, 2853 - Benfica, Fortaleza - CE, 60040-531, Brazil'],
[-3.7688874,-38.4816098, 'Av. Washington Soares, 1321 - Edson Queiroz, Fortaleza - CE, 60811-905, Brazil'],
[-7.2285843,-39.4017694, 'Rua Cel. Antônio Luis, 1161 - Pimenta, Crato - CE, 63100-000, Brazil'],
[-3.6763586,-40.3400849, 'Av. da Universidade, 850 - Betania, Sobral - CE, 62040-370, Brazil']
];
