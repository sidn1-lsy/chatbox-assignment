let lastSelectedLocality = ""; 

// --- BASE DATA: LOCALITY IMAGES (UNCHANGED) ---
const localityImages = {
    "Perlis": "https://images.pexels.com/photos/36109437/pexels-photo-36109437.jpeg",
    "Kedah": "https://images.pexels.com/photos/4861107/pexels-photo-4861107.jpeg",
    "Penang": "https://images.pexels.com/photos/12587258/pexels-photo-12587258.jpeg",
    "Perak": "https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg",
    "Selangor": "https://images.pexels.com/photos/3724014/pexels-photo-3724014.jpeg",
    "Negeri Sembilan": "https://images.pexels.com/photos/34939124/pexels-photo-34939124.jpeg",
    "Melaka": "https://images.pexels.com/photos/29238004/pexels-photo-29238004.jpeg",
    "Johor": "https://images.pexels.com/photos/32162170/pexels-photo-32162170.jpeg",
    "Kelantan": "https://images.pexels.com/photos/14568711/pexels-photo-14568711.jpeg",
    "Terengganu": "https://images.pexels.com/photos/26615650/pexels-photo-26615650.jpeg",
    "Pahang": "https://images.pexels.com/photos/1043293/pexels-photo-1043293.jpeg",
    "Sabah": "https://images.pexels.com/photos/12438788/pexels-photo-12438788.jpeg",
    "Sarawak": "https://images.pexels.com/photos/16007740/pexels-photo-16007740.jpeg",
    "Kuala Lumpur": "https://images.pexels.com/photos/5904675/pexels-photo-5904675.jpeg",
    "Putrajaya": "https://images.pexels.com/photos/31730740/pexels-photo-31730740.jpeg",
    "Labuan": "https://images.pexels.com/photos/7494232/pexels-photo-7494232.jpeg"
};

// --- BASE DATA: FOOD IMAGES (UNCHANGED) ---
const foodImages = {
    "Perlis": "https://i.postimg.cc/05Vqzw6r/Perlis.png",
    "Kedah": "https://i.postimg.cc/pX51Phzm/Kedah.png",
    "Penang": "https://i.postimg.cc/P5wGVVSX/Penang.png",
    "Perak": "https://i.postimg.cc/P5wGVVS5/Perak.png",
    "Selangor": "https://i.postimg.cc/h42qXdJG/Selangor.png",
    "Negeri Sembilan": "https://i.postimg.cc/g0FCCy7Z/Seremban.png",
    "Melaka": "https://i.postimg.cc/3rccMC4j/Melaka.png",
    "Johor": "https://i.postimg.cc/QxKnj91H/Johor.png",
    "Kelantan": "https://i.postimg.cc/3rccMC4g/Kelantan.png",
    "Terengganu": "https://i.postimg.cc/rsZ63B6V/Terengganu.png",
    "Pahang": "https://i.postimg.cc/P5wGVVSX/Penang.png",
    "Sabah": "https://i.postimg.cc/59sMXCHy/Sabah.png",
    "Sarawak": "https://i.postimg.cc/3rtHkvyx/Sarawak.png",
    "Kuala Lumpur": "https://i.postimg.cc/kGYrz0r7/Kuala-Lumpur.png",
    "Putrajaya": "https://i.postimg.cc/T1N8Fz8X/Putrajaya.png",
    "Labuan": "https://i.postimg.cc/kGg3jnH7/Labuan.png"
};

// --- DATA: LOCALITY DESCRIPTIONS (UNCHANGED) ---
const localityData = {
    "Perlis": "Perlis is the \"Northern Gem\" where limestone hills rise over a quiet sea of paddy fields. It is Malaysia's smallest state, characterized by its distinct northern climate and limestone outcroppings. Plus, it has a serene borderland where the pace of life remains tied to the cycles of traditional farming.",
    "Kedah": "Kedah is known as \"Rice Bowl of Malaysia\" with endless green fields and legendary island vibes. It is the ancient heart of the peninsula, home to some of the oldest civilizations in Southeast Asia. Plus, it has a vast landscape of fertile plains that has served as the nation's primary agricultural lifeline for centuries.",
    "Penang": "Penang is the \"Pearl of the Orient\" where world-famous street food thrives amidst a colorful fusion of East and West. It is an island-state where a fusion of diverse cultures has created a unique social identity over hundreds of years. Plus, it is a historic naval and trading outpost that evolved into a global hub for the high-tech electronics industry.",
    "Perak": "Perak is the \"Land of Grace\" where majestic limestone hills frame a nostalgic journey through colonial tin-mining history. It is a historic engine of the nation's wealth, built on a legacy of tin mining and colonial administration. Plus, it is a land of majestic limestone massifs and royal traditions settled along the banks of a great winding river.",
    "Selangor": "Selangor is the \"Golden State\" where a high-speed urban skyline blends into lush nature and cultural icons. It is the economic heartbeat of the nation, serving as the center of industry, commerce, and innovation. Plus, It is a sprawling metropolitan region that surrounds the capital, blending high-density living with pockets of natural reserve.",
    "Negeri Sembilan": "Negeri Sembilan is the \"Land of Minangkabau Culture\" where unique buffalo-horn roofs meet a rich matrilineal heritage. It is a land of nine territories where the unique curved architecture reflects its deep ancestral roots. Plus, this region is also defined by its gentle hills and a social heritage that honors family lineage and community consensus.",
    "Melaka": "Melaka is known as \"Living Museum\" that feels like walking straight through a history book. It has a historic crossroads where East met West, shaping the maritime destiny of the entire region. Plus, it has a tapestry of architectural influences that stands as a testament to centuries of global and trade and diplomacy.",
    "Johor": "Johor is the \"Southern Gateway\" where modern city energy meets a laid-back coastal pulse. It is the only state with a unique military tradition and a modern history of rapid industrial growth. Plus, it has a strategic powerhouse connecting the peninsula to the international waters of the south.",
    "Kelantan": "Kelantan is known as \"Cradle of Malay Culture\" that’s as authentic and soulful as it gets. It is a land shaped by the powerful Kelantan River, serving as the historical gateway for trade and faith on the East Coast. Plus, there is a bastion of traditional Malay identity where the rhythm of life is dictated by the seasons and the sea.",
    "Terengganu": "Terengganu is the \"Land of Turtle Wonders\" where traditional fishing villages overlook some of the clearest waters in the world. It is a state with a strong maritime soul, where the identity of the people is inseparable from the South China Sea, Plus, it is known for its skilled craftsmanship and history of independent Islamic scholarship.",
    "Pahang": "Pahang is the \"Honeymoon State\" where misty highland escapes descend into the heart of an ancient rainforest. It is the massive green heart of the peninsula, dominated by vast ancient forests and the country's longest river. Plus, it is a state of dramatic contrasts, stretching from the misty heights of the central range to the wide eastern coastline.",
    "Sabah": "Sabah is the \"Land Below the Wind\" where towering mountain peaks meet the world's most vibrant coral reefs. It has a wild, rugged frontier known for its immense biological diversity and towering granite peaks. Plus, Sabah is sitting just south of the typhoon belt and home to dozens of indigenous ethnic groups.",
    "Sarawak": "Sarawak is the \"Land of Hornbills\" where ancient rainforests guard a tapestry of diverse tribal heritage. It is the largest state in the federation, defined by its massive river systems and deep tropical interior. Plus, it is a land of diverse tribal communities where tradition and modern governance coexist across a vast landscape.",
    "Kuala Lumpur": "Kuala Lumpur is the \"Dazzling Heart of the Nation,\" a high-octane metropolis where iconic steel skyscrapers pierce the clouds above historic colonial streets. It is a city with a restless, multicultural soul, where the aroma of world-famous street food blends with the prestige of global commerce. Plus, it is known for its vibrant nightlife, massive shopping districts, and a unique ability to harmonize its muddy-confluence heritage with a futuristic skyline.",
    "Putrajaya": "Putrajaya is the \"Garden City of Intelligence,\" a meticulously planned marvel where grand Islamic architecture reflects across the ripples of a man-made lake. It is a territory with a visionary soul, where the pulse of national administration is softened by sprawling botanical gardens and wide, ceremonial boulevards. Plus, it is known for its stunning bridges and its status as a symbol of Malaysia’s modernization and sustainable urban aspirations.",
    "Labuan": "Labuan is the \"Pearl of the South China Sea,\" a serene offshore financial hub where duty-free shopping meets untouched naval history. It is a territory with a peaceful, international soul, where deep-water harbors and World War II memorials sit alongside a bustling port identity. Plus, it is known for its world-class wreck diving and its strategic role as a bridge between global finance and the rustic charm of Borneo."
};

// --- DATA: ORIGINAL FOOD DESCRIPTIONS ---
const foodData = {
    "Johor": "• <b>Laksa Johor:</b> Spaghetti instead of rice noodles, served in thick fish paste.<br>• <b>Kacang Pool:</b> Fava bean stew with fried egg and thick toast.<br>• <b>Mee Rebus Tulang:</b> Potato gravy with yellow noodles and beef bones.<br>• <b>Sirap Bandung:</b> Signature pink condensed milk and rose syrup drink.",
    "Kedah": "• <b>Laksa Kedah:</b> Rice noodles in tangy fish broth with cashew leaves.<br>• <b>Nasi Ulam:</b> Herb rice with jungle greens and shredded salted fish.<br>• <b>Kuih Karas:</b> Crispy bird's nest snack made from rice flour.<br>• <b>Air Jagung:</b> Creamy orange sweet corn drink.",
    "Kelantan": "• <b>Nasi Kerabu:</b> Iconic blue rice with stuffed chili and salted egg.<br>• <b>Ayam Percik:</b> Grilled chicken with thick, sweet-spicy coconut gravy.<br>• <b>Akok:</b> Wrinkled dessert made with eggs and palm sugar.<br>• <b>Teh Tarik Madu:</b> Ultra-frothy pulled tea overflowing with bubbles.",
    "Melaka": "• <b>Chicken Rice Balls:</b> Hainanese chicken with golf-ball sized rice spheres.<br>• <b>Asam Pedas Melaka:</b> Thick, dark, spicy and sour fish stew.<br>• <b>Satay Celup:</b> Skewers dipped in boiling peanut sauce.<br>• <b>Coconut Shake:</b> Blended coconut with vanilla ice cream.",
    "Negeri Sembilan": "• <b>Masak Lemak Cili Api:</b> Fiery yellow curry with bird's eye chilies.<br>• <b>Seremban Siew Pau:</b> Flaky pastry buns with BBQ meat filling.<br>• <b>Beef Noodles:</b> Rice noodles with tender beef in savory dark gravy.<br>• <b>Cendol Seremban:</b> Shaved ice with green jelly and Gula Melaka.",
    "Pahang": "• <b>Gulai Tempoyak Patin:</b> Catfish in rich fermented durian gravy.<br>• <b>Nasi Kebuli:</b> Spiced rice traditionally served to royalty.<br>• <b>Puding Raja:</b> Banana dessert with egg threads and custard sauce.<br>• <b>Highland Tea:</b> Freshly brewed tea from Cameron Highlands.",
    "Penang": "• <b>Char Kway Teow:</b> Flat noodles stir-fried with prawns and chives.<br>• <b>Asam Laksa:</b> Sour, spicy fish-based soup hallmarking Nyonya cuisine.<br>• <b>Nasi Kandar:</b> Rice with a variety of intense 'flooded' curries.<br>• <b>Ambra Juice:</b> Tart green juice balanced with sour plum.",
    "Perak": "• <b>Kai See Hor Fun:</b> Silky flat noodles in clear chicken/prawn broth.<br>• <b>Nasi Ganja:</b> Legendary version of Nasi Kandar found in Ipoh.<br>• <b>Rendang Tok:</b> Dark, dry, highly spiced beef rendang.<br>• <b>Ipoh White Coffee:</b> Smooth coffee roasted with margarine.",
    "Perlis": "• <b>Ikan Bakar:</b> Charcoal-grilled seafood with spicy dipping sauce.<br>• <b>Pulut Mangga:</b> Glutinous rice with exclusive Harumanis mango.<br>• <b>Kurma Daging:</b> Fragrant beef korma often served at weddings.<br>• <b>Nira Nipah:</b> Sweet sap harvested from nipah palms.",
    "Sabah": "• <b>Tuaran Mee:</b> Fried handmade egg noodles with roasted pork.<br>• <b>Hinava:</b> Raw fish marinated in lime, ginger, and chilies.<br>• <b>Sang Nyuk Mee:</b> Pork noodles served dry or in clear soup.<br>• <b>Sabah Tea:</b> Locally grown tea from Mount Kinabalu foothills.",
    "Sarawak": "• <b>Sarawak Laksa:</b> Spiced broth with prawns and omelet strips.<br>• <b>Kolo Mee:</b> Springy dry noodles in savory shallot oil.<br>• <b>Manok Pansoh:</b> Bamboo-cooked chicken with tapeoca leaves.<br>• <b>White Lady:</b> Milky shaved ice with fruit cocktail and lemon.",
    "Selangor": "• <b>Satay Kajang:</b> Large meat chunks with specific spicy peanut sauce.<br>• <b>Bak Kut Teh:</b> Herbal pork rib broth from Klang.<br>• <b>Pecal:</b> Vegetable salad with thick peanut gravy.<br>• <b>Air Tebu:</b> Freshly pressed iconic roadside sugar cane juice.",
    "Terengganu": "• <b>Nasi Dagang:</b> Steamed coconut rice served with tuna curry.<br>• <b>Keropok Lekor:</b> Chewy sausage-shaped fish crackers.<br>• <b>Laksam:</b> Thick rolled rice noodles in white fish gravy.<br>• <b>Air Tuak:</b> Sweet, non-alcoholic fresh palm sap.",
    "Labuan": "• <b>Coconut Crab:</b> Sweet, firm meat with a hint of coconut.<br>• <b>Jelurut:</b> Cone-shaped sweet snack wrapped in nipah leaves.<br>• <b>Ambuyat:</b> Starchy sago delicacy dipped in spicy gravy.<br>• <b>Labuan Punch:</b> Tropical fruit mocktail with pineapple and lime.",
    "Putrajaya": "• <b>Nasi Ulam Daging Bakar:</b> Herb rice with sweet-charred grilled beef.<br>• <b>Cucur Udang Umai:</b> Massive lakeside crispy shrimp fritters.<br>• <b>Spicy Buttermilk Lala:</b> Clams in fiery buttery broth with mantao.<br>• <b>Air Katira:</b> Loaded green mocktail with basil seeds and jelly.",
    "Kuala Lumpur": "• <b>KL Hokkien Mee:</b> Thick noodles braised in dark fragrant soy sauce.<br>• <b>Nasi Lemak Bungkus:</b> Spicy village-style rice with intense sambal.<br>• <b>Chili Pan Mee:</b> Handmade noodles with crispy chili paste and egg.<br>• <b>Milo Dinosaur:</b> Iced Milo topped with a mountain of Milo powder."
};

// --- NEW DATA: TOURIST SPOTS (Formatted with Name, Description, and Link) ---
const spotsData = {
    "Johor": "• <b>Johor Premium Outlets (JPO):</b> The go-to hub for luxury brand shopping at a discount. <a href='https://www.premiumoutlets.com.my/johor-premium-outlets' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Putuo Village:</b> A serene cultural bamboo forest and temple hidden in Kulai. <a href='https://putuovillage.com.my/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Tasik Biru Kangkar Pulai:</b> A stunning bright blue lake formed from an old quarry. <a href='https://www.alltrails.com/trail/malaysia/johor/laluan-hike-tasik-biru' target='_blank'>[CLick me to know more!]</a>",
    "Kedah": "• <b>Langkawi Archipelago:</b> A famous destination known for its UNESCO Global Geopark status and duty-free shopping. <a href='https://www.hotels.com/go/malaysia/langkawi' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Ulu Legong Hot Springs:</b> A well known hotspot in Baling for relaxing in natural hot springs. <a href='https://www.tripadvisor.com/ShowUserReviews-g811246-d11832530-r733351986-Ulu_Legong_Hotspring-Baling_Baling_District_Kedah.html' target='_blank'>[CLick me to know more!]</a>",
    "Kelantan": "• <b>Kota Bahru (The Royal City):</b> A city filled with museums and bustling markets like Wakah Che Yeh. <a href='https://www.malaysia.travel/explore/how-to-experience-kota-bharu-like-a-local' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Masjid Kampung Laut:</b> An ancient marvel built without nails (circa 1730s). <a href='https://mdtumpat.kelantan.gov.my/index.php/info-pelawat/lokasi-menarik?view=article&id=284&catid=113' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Jelawang Waterfall (Dabong):</b> One of the tallest tiered waterfalls in Southeast Asia. <a href='https://www.alltrails.com/trail/malaysia/kelantan/air-terjun-jelawang' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Pantai Cahaya Bulan:</b> A popular coastal destination perfect for local snacks. <a href='https://kelantan.attractionsinmalaysia.com/PantaiCahayaBulan.php' target='_blank'>[CLick me to know more!]</a>",
    "Melaka": "• <b>Dutch Square (Red Square):</b> Featuring the colonial era bright red Christ Church and Stadthuys. <a href='https://www.malaysia.travel/explore/dutch-square' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Jonker Walk:</b> Famous for its lively atmosphere and weekend night market. <a href='http://melaka.holidayinn.com/blog/jonker-walk-melaka' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Morten Village:</b> A traditional Malay village showcasing classic wooden architecture. <a href='https://www.gpsmycity.com/attractions/kampung-morten-1861.html' target='_blank'>[CLick me to know more!]</a>",
    "Negeri Sembilan": "• <b>Port Dickson Beaches:</b> Popular for water sports, jet skiing, and relaxation. <a href='https://www.malaysia.travel/explore/port-dickson' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Gunung Datuk Recreational Forest:</b> A must-go hiking destination with panoramic coastal views. <a href='https://www.alltrails.com/parks/malaysia/negeri-sembilan/gunung-datuk-recreational-forest' target='_blank'>[CLick me to know more!]</a>",
    "Pahang": "• <b>Cameron Highlands:</b> Known for tea plantations, strawberry farms, and the Mossy Forest. <a href='https://explorecamerons.com/things-to-do-in-cameron-highlands/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Genting Highlands:</b> A premier entertainment hub with theme parks and cable cars. <a href='https://www.klook.com/en-MY/destination/p50295443-genting-highlands/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Fraser’s Hill:</b> A quiet colonial style-hill station with a French themed village. <a href='https://www.tejaonthehorizon.com/walkthrough/bukit-fraser-the-best-hill-station-in-malaysia/' target='_blank'>[CLick me to know more!]</a>",
    "Penang": "• <b>ESCAPE Penang:</b> Adventure park featuring the world’s longest tube water slide. <a href='https://www.klook.com/en-MY/activity/8391-escape-adventureplay-theme-park-penang/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Penang Hill:</b> A scenic peak offering panoramic views via a historic funicular train. <a href='https://penanghill.gov.my/index.php/en/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Kek Lok Si Temple:</b> Massive temple complex with a giant bronze Guan Yin statue. <a href='https://kekloksitemple.com/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Batu Ferringhi:</b> Beach strip known for golden sands and water sports. <a href='https://www.awaygowe.com/batu-ferringhi-beach-penang/' target='_blank'>[CLick me to know more!]</a>",
    "Perak": "• <b>Ipoh:</b> Famous for limestone caves, colonial history, and a vibrant food scene. <a href='http://www.ipoh-city.com/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Taiping Lake Gardens:</b> A scenic, century-old public garden known for rain trees. <a href='https://www.penang-insider.com/taiping-lake-gardens/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Kellie's Castle:</b> An unfinished mansion blending Gothic and Moorish architecture. <a href='https://www.kelliesfisb.com.my/' target='_blank'>[CLick me to know more!]</a>",
    "Perlis": "• <b>Perlis Snake Park:</b> A research facility housing various reptile species. <a href='https://perlis.attractionsinmalaysia.com/Snake-and-Reptile-Farm.php' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Ladang Kenaf Chuping:</b> Instagrammable tall kenaf plants with a scenic backdrop. <a href='https://www.instagram.com/p/C2jXofJIGBd/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Wang Kelian Viewpoint:</b> Famous for its 'sea of clouds' at sunrise. <a href='https://www.malaysia.travel/explore/wang-kelian' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Gua Kelam:</b> A limestone cave trail through an abandoned tin mine. <a href='https://www.malaysia.travel/explore/gua-kelam-recreational-park' target='_blank'>[CLick me to know more!]</a>",
    "Sabah": "• <b>Mount Kinabalu:</b> A UNESCO site featuring the highest peak in SE Asia. <a href='https://www.sabahparks.org.my/kinabalu-park' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Sipadan Island:</b> World-renowned for scuba diving and marine biodiversity. <a href='https://www.sabahparks.org.my/sipadan-island-park' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Mari Mari Cultural Village:</b> An immersive experience into Sabah's ethnic traditions. <a href='https://marimariculturalvillage.my/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Kota Kinabalu City Centre:</b> Explore markets, museums, and fresh seafood. <a href='https://www.amazingborneo.com/sabah/tours/kota-kinabalu-city' target='_blank'>[CLick me to know more!]</a>",
    "Sarawak": "• <b>Sarawak Cultural Village:</b> An open-air museum of traditional longhouses. <a href='https://scv.com.my/en/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Niah National Park:</b> Home to caves where 40,000-year-old remains were found. <a href='https://www.sarawaktourism.com/web/places-to-visit/town-view/miri/major-attractions/niah-national-park' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Damai Beach:</b> A popular coastal area for relaxation near Kuching. <a href='https://www.tripadvisor.com.my/Attraction_Review-g298309-d8408721-Reviews-Damai_Beach-Kuching_Sarawak.html' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Bako National Park:</b> Sarawak's oldest park featuring proboscis monkeys. <a href='https://bakonationalpark.com/' target='_blank'>[CLick me to know more!]</a>",
    "Selangor": "• <b>Batu Caves:</b> Famous Hindu temple complex with 272 colorful steps. <a href='https://www.malaysia.travel/explore/batu-caves' target='_blank'>[CLick me to know more!]</a><br><br>• <b>i-City Shah Alam:</b> The 'City of Digital Lights' with neon landscapes. <a href='https://iticket.i-city.my/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Sepang International Circuit:</b> World-class racing circuit for F1 and MotoGP. <a href='https://www.sepangcircuit.com/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Sunway Lagoon:</b> Premier theme park with water rides and wildlife. <a href='https://sunwaylagoon.com/' target='_blank'>[CLick me to know more!]</a>",
    "Terengganu": "• <b>Perhentian Islands:</b> Crystal-clear waters perfect for snorkeling. <a href='https://tripwis.com/our-guide-to-the-perhentian-islands-malaysia/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Redang Island:</b> Famous for white sandy beaches and luxury resorts. <a href='https://www.malaysia.travel/explore/redang-island' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Kuala Terengganu Drawbridge:</b> The first bascule bridge in Southeast Asia. <a href='https://terengganudrawbridge.com.my/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Sekayu Waterfall:</b> Multi-tiered waterfall set in a lush forest. <a href='https://www.beautifulterengganu.com/sekayu-waterfall/' target='_blank'>[CLick me to know more!]</a>",
    "Labuan": "• <b>Labuan War Cemetery:</b> Malaysia's largest war graveyard and WWII memorial. <a href='https://en.wikipedia.org/wiki/Labuan_War_Cemetery' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Surrender Point:</b> The historic 1945 Japanese surrender site. <a href='https://labuan.attractionsinmalaysia.com/japanese-surrender-point.php' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Patau Patau Water Village:</b> Traditional houses built on stilts over water. <a href='https://labuan.attractionsinmalaysia.com/Water-Village.php' target='_blank'>[CLick me to know more!]</a>",
    "Putrajaya": "• <b>Putra Mosque (Pink Mosque):</b> Breathtaking landmark with a rose-tinted dome. <a href='https://www.ppj.gov.my/en/page/masjid-putra-2?slug=senibina-ikonik' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Putrajaya Steps:</b> A 250-step staircase with landscaped gardens. <a href='https://www.ppj.gov.my/en/page/tangga-putrajaya?slug=senibina-ikonik' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Moroccan Pavilion:</b> Showcasing authentic Moroccan architecture. <a href='https://www.malaysia.travel/explore/moroccan-pavilion-putrajaya' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Seri Wawasan Bridge:</b> A futuristic asymmetrical cable-stayed bridge. <a href='https://www.ppj.gov.my/en/page/jambatan-seri-wawasan-1?slug=senibina-ikonik' target='_blank'>[CLick me to know more!]</a>",
    "Kuala Lumpur": "• <b>Petronas Towers:</b> Iconic twin towers with a sky bridge and deck. <a href='https://www.petronastwintowers.com.my/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Merdeka Square:</b> The historical heart of Malaysian independence. <a href='http://kuala-lumpur.attractionsinmalaysia.com/Merdeka-Square.php' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Chinatown (Petaling Street):</b> Famous for street food and shopping. <a href='https://velvetescape.com/chinatown-kuala-lumpur/' target='_blank'>[CLick me to know more!]</a><br><br>• <b>Bukit Bintang:</b> KL's premier shopping and entertainment district. <a href='https://www.malaysia.travel/explore/bukit-bintang' target='_blank'>[CLick me to know more!]</a>"
};

// --- NEW DATA: 2026 SPECIALS (Categorized by Locality) ---
const specials2026Data = {
    "Johor": "• <b>Johor Zoo:</b> Newly upgraded and modernized for 2026. <a href='https://zootiket.johor.gov.my/products/zoo-johor' target='_blank'>[Click me to know more!]</a><br><br>• <b>Desaru Coast:</b> A premium integrated destination for beach and waterpark fans. <a href='https://desarucoast.com/' target='_blank'>[Click me to know more!]</a><br><br>• <b>Sungai Segget Waterfront:</b> A revitalized urban park in the heart of Johor Bahru. <a href='https://www.alltrails.com/trail/malaysia/johor/sungai-segget' target='_blank'>[Click me to know more!]</a>",
    "Kedah": "• <b>Langkawi Geopark Carnival:</b> (4–12 Sept) An eco-tourism highlight featuring the APGN Symposium. <a href='https://www.langkawigeopark.com.my/events/the-9th-asia-pacific-geoparks-network-apgn-symposium-2026/' target='_blank'>[Click me to know more!]</a><br><br>• <b>Paddy Harvest Festival:</b> (May/Nov) Seasonal agricultural celebrations in Alor Setar.<br><br>• <b>IRONMAN Langkawi 2026:</b> (21 Nov) A tropical endurance race concluding on Cenang Beach. <a href='https://www.ironman.com/races/im-malaysia' target='_blank'>[Click me to know more!]</a>",
    "Kelantan": "• <b>Kelantan International Marathon:</b> (25–26 June) A scenic route through the cultural heart of Kota Bharu. <a href='https://checkpointspot.asia/event/kelantan-international-marathon26' target='_blank'>[Click me to know more!]</a><br><br>• <b>Kelantan Folk Arts Festival:</b> (19–21 June) A large-scale TMM2026 cultural showcase. <a href='https://www.facebook.com/jkkn.kelantan' target='_blank'>[Click me to know more!]</a>",
    "Melaka": "• <b>Melaka International Dragon Boat Festival:</b> (27–28 June) Competitive racing along the historic Melaka River. <a href='https://www.facebook.com/watch/?v=4388329038153160' target='_blank'>[Click me to know more!]</a><br><br>• <b>Christmas at Portuguese Settlement:</b> (Dec) A world-renowned display of lights and Eurasian culture. <a href='https://www.facebook.com/reel/1503961434016972' target='_blank'>[Click me to know more!]</a>",
    "Negeri Sembilan": "• <b>Seremban Half 2026:</b> (19 July) Part of the JomRun Half Marathon Series. <a href='https://www.jomrun.com/event/Seremban-Half-2026-Powered-By-JomRun' target='_blank'>[Click me to know more!]</a><br><br>• <b>Gunung Datuk Ultra (DUTA 100):</b> (12–14 June) A brutal vertical challenge with 10,015m elevation gain. <a href='https://checkpointspot.asia/event/gunung-datuk-ultra-2026' target='_blank'>[Click me to know more!]</a><br><br>• <b>Tampin Trans Naning Ultra:</b> (24–26 July) Loop-based endurance race starting at Tampin Water Park. <a href='https://checkpointspot.asia/event/himalaya-sport-tampin-trans-naning-ultra26' target='_blank'>[Click me to know more!]</a>",
    "Pahang": "• <b>Pahang Ultra:</b> (16 Oct) A high-endurance trail race through rugged terrain. <a href='https://checkpointspot.asia/event/pahang-ultra26' target='_blank'>[Click me to know more!]</a><br><br>• <b>Taman Negara Ultra:</b> (23 Oct) Extreme trail run in the world's oldest rainforest. <a href='https://checkpointspot.asia/event/Malaysia-Taman-Negara-Ultra-2026' target='_blank'>[Click me to know more!]</a><br><br>• <b>Royal Pahang Billfish International Challenge:</b> (11–13 Sept) Premier deep-sea angling in Rompin. <a href='https://www.pahangtourism.org.my/calendar-of-events/63-royal-pahang-billfish-international-challenge' target='_blank'>[Click me to know more!]</a>",
    "Penang": "• <b>George Town Festival:</b> (1–9 Aug) Themed 'Beyond Boundaries,' celebrating arts and heritage. <a href='https://www.georgetownfestival.com/' target='_blank'>[Click me to know more!]</a><br><br>• <b>Penang Hill Heritage Forest Challenge:</b> (16 Aug) Eco-run through a UNESCO Biosphere Reserve. <a href='https://checkpointspot.asia/event/penang-hill-heritage-forest-challenge-2026' target='_blank'>[Click me to know more!]</a><br><br>• <b>Penang Bridge International Marathon:</b> (13 Dec) The premier sporting finale for the state. <a href='https://penangmarathon.gov.my/' target='_blank'>[Click me to know more!]</a>",
    "Perak": "• <b>Ipoh Music Festival:</b> (23–25 Oct) Showcasing Ipoh's status as a UNESCO City of Music. <a href='https://www.instagram.com/p/DV0--lsj-Xd/' target='_blank'>[Click me to know more!]</a><br><br>• <b>L’etape Perak:</b> (4 Oct) Amateur cycling following the Tour de France format. <a href='https://tourismmalaysia.or.jp/news/pdf/Calender_Of_Event_2026.pdf' target='_blank'>[Click me to know more!]</a><br><br>• <b>Pangkor International Marine Tourism Festival:</b> (Dec) Celebration of island heritage and maritime soul. <a href='https://www.facebook.com/pangkorislandfestival/' target='_blank'>[Click me to know more!]</a>",
    "Perlis": "• <b>Northernmost Padang Besar Night Run:</b> (8 Aug) A unique race under the stars at the border. <a href='https://checkpointspot.asia/event/the-northernmost-padang-besar26' target='_blank'>[Click me to know more!]</a><br><br>• <b>Perlis Agro Fest:</b> (24–26 April) Promoting Harumanis mangoes and farming products. <a href='https://www.facebook.com/SUKPerlisOfficial/posts/perlis-agro-fest-2026-24-26-april-2026-jumaat-ahad-sungai-batu-pahat-kangar-perl/1473520378144360/' target='_blank'>[Click me to know more!]</a>",
    "Sabah": "• <b>Tawau Marathon:</b> (23 Aug) Full-scale marathon event on the scenic east coast. <a href='https://www.ticket2u.com.my/event/48616/tawau-marathon-2026' target='_blank'>[Click me to know more!]</a><br><br>• <b>Kokol Ultra:</b> (23 Oct) Trail race offering panoramic views of Kota Kinabalu. <a href='https://checkpointspot.asia/event/kokol-ultra26' target='_blank'>[Click me to know more!]</a>",
    "Sarawak": "• <b>Sarawak Day:</b> (22 July) State-wide celebrations and the Bintulu Sarawak Day Run. <a href='https://checkpointspot.asia/event/sarawak-day-run-bintulu-edition2026' target='_blank'>[Click me to know more!]</a><br><br>• <b>Kuching Food Festival:</b> (22 July – 16 Aug) 26-day celebration of international gastronomy. <a href='https://kuchingborneo.info/?p=19125' target='_blank'>[Click me to know more!]</a><br><br>• <b>Kuching Marathon:</b> (27 Sept) Famous 'Cat City' hospitality road race. <a href='https://www.marathonkuching.com/site/' target='_blank'>[Click me to know more!]</a>",
    "Selangor": "• <b>Selangor International Book Fair:</b> (Nov/Dec) Held at Shah Alam Convention Centre. <a href='https://www.instagram.com/sibfselangor/' target='_blank'>[Click me to know more!]</a><br><br>• <b>ALEPS Ekiden & Super GT Festival:</b> (20 June) High-intensity night relay at Sepang Circuit. <a href='https://checkpointspot.asia/event/aleps-ekiden-relay-run26' target='_blank'>[Click me to know more!]</a><br><br>• <b>Selangor Marathon:</b> (1 Nov) Marathon through the modern landscape of Cyberjaya. <a href='https://checkpointspot.asia/event/selangor-marathon26' target='_blank'>[Click me to know more!]</a>",
    "Terengganu": "• <b>International Squid Jigging Festival:</b> (April–Aug) Seasonal celebration of coastal traditions. <a href='https://www.beautifulterengganu.com/squid-jigging/' target='_blank'>[Click me to know more!]</a><br><br>• <b>Terengganu Ultra:</b> (19–21 June) Scenic endurance race along the beautiful East Coast. <a href='https://checkpointspot.asia/event/terengganu-ultra26' target='_blank'>[Click me to know more!]</a>",
    "Labuan": "• <b>Pearl of Borneo Marathon:</b> (6 June) A unique chance to explore the duty-free island. <a href='https://checkpointspot.asia/event/pearl-of-borneo-marathon2026' target='_blank'>[Click me to know more!]</a><br><br>• <b>Labuan Diving Festival 4.0:</b> (June) Exploring the iconic 'Big 4' shipwrecks. <a href='https://www.malaysia.travel/events/labuan-diving-festival-4-0-big-4-wreck-dive' target='_blank'>[Click me to know more!]</a>",
    "Putrajaya": "• <b>SCORE Marathon:</b> (18–19 July) 10th Anniversary AIA Vitality edition. <a href='https://scoremarathon.com/' target='_blank'>[Click me to know more!]</a><br><br>• <b>Garmin Run Asia Series 2026:</b> (1 Nov) Hosted at the iconic Dataran Putrajaya. <a href='https://www.facebook.com/reel/773505172436925' target='_blank'>[Click me to know more!]</a>",
    "Kuala Lumpur": "• <b>WITEX 2026:</b> (21–23 Aug) World Islamic Tourism & Trade Expo. <a href='https://witex.my/' target='_blank'>[Click me to know more!]</a><br><br>• <b>Standard Chartered KL Marathon:</b> (3–4 Oct) Malaysia’s most iconic city race. <a href='https://www.kl-marathon.com/' target='_blank'>[Click me to know more!]</a><br><br>• <b>16th Malaysia Gifts Fair:</b> (30 June – 2 July) Premier ASEAN gifting trade exhibition. <a href='https://www.malaysiagiftsfair.com.my/' target='_blank'>[Click me to know more!]</a>"
};

const regions = {
    "📍Northern Peninsular": ["Perlis", "Kedah", "Penang", "Perak"],
    "📍Southern Peninsular": ["Negeri Sembilan", "Melaka", "Johor"],
    "📍East Coast Peninsular": ["Kelantan", "Terengganu", "Pahang"],
    "📍Central Peninsular": ["Selangor", "Kuala Lumpur", "Putrajaya"],
    "📍East Malaysia": ["Sabah", "Sarawak", "Labuan"]
};

const chatContent = document.getElementById('chat-content');
const userInput = document.getElementById('userInput');

// --- BOT CORE FUNCTIONS ---

function addMessage(htmlContent, type = 'bot') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}-msg`;
    msgDiv.innerHTML = htmlContent;
    chatContent.appendChild(msgDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function startBot() {
    addMessage("Hello! Selamat Datang, I am your virtual guide for <b>Visit Malaysia 2026</b>.");
    setTimeout(() => {
        addMessage("Where would you like to explore today?");
        const menuHTML = `<div class="vertical-menu">${Object.keys(regions).map(r => `<button class="menu-btn" onclick="selectRegion('${r}')">${r}</button>`).join('')}</div>`;
        addMessage(menuHTML);
    }, 800);
}

function selectRegion(regionName) {
    addMessage(regionName, 'user');
    setTimeout(() => {
        const states = regions[regionName];
        const stateHTML = `<p>Locality in <b>${regionName}</b>:</p><div class="vertical-menu">${states.map(s => `<button class="menu-btn" onclick="selectLocality('${s}', true)">${s}</button>`).join('')}</div>`;
        addMessage(stateHTML);
    }, 600);
}

function selectLocality(localityName, showUserBubble = false) {
    lastSelectedLocality = localityName;
    if (showUserBubble) addMessage(`Tell me about ${localityName}`, 'user');
    
    setTimeout(() => {
        const desc = localityData[localityName];
        const img = localityImages[localityName];
        addMessage(`<img src="${img}" class="locality-img"><div class="description-text">${desc}</div>`);
        showDiscoveryOptions(localityName);
    }, showUserBubble ? 800 : 0);
}

function showDiscoveryOptions(localityName) {
    setTimeout(() => {
        addMessage(`Explore <b>${localityName}</b> further:`);
        setTimeout(() => {
            const chipHTML = `<div class="vertical-menu">
                <button class="menu-btn" onclick="showExtraInfo('${localityName}', '2026')">🎆 2026 Specials</button>
                <button class="menu-btn" onclick="showExtraInfo('${localityName}', 'spots')">📸 Tourist Spots</button>
                <button class="menu-btn" onclick="showExtraInfo('${localityName}', 'food')">🍲 Food & Beverages</button>
            </div>`;
            addMessage(chipHTML);
        }, 800);
    }, 1500); 
}

// --- UPDATED LOGIC FOR THE INFO DISPLAY ---
function showExtraInfo(localityName, category, showUserBubble = true) {
    let responseText = "";
    let userAction = "";
    let title = "";

    if (category === 'food') {
        responseText = foodData[localityName];
        userAction = `Must-try food in ${localityName}`;
        title = `🍲 Must-Try in ${localityName}:`;
    } else if (category === 'spots') {
        responseText = spotsData[localityName];
        userAction = `Tourist spots in ${localityName}`;
        title = `📸 Top Spots in ${localityName}:`;
    } else if (category === '2026') {
        // Now linking to the new specials2026Data object
        responseText = specials2026Data[localityName] || "More specials coming soon!";
        userAction = `2026 Special Events in ${localityName}`;
        title = `🎆 2026 Specials - ${localityName}:`;
    }

    if (showUserBubble) addMessage(userAction, 'user');

    setTimeout(() => {
        let imageHTML = "";
        if (category === 'food' && foodImages[localityName]) {
            imageHTML = `<img src="${foodImages[localityName]}" class="locality-img" style="border-color: #FFA726;">`;
        }

        addMessage(`${imageHTML}<b>${title}</b><br><br>${responseText}`);
        
        setTimeout(() => {
            addMessage("What would you like to do next?");
            const navHTML = `
            <div class="vertical-menu">
                <button class="menu-btn" onclick="showDiscoveryOptions('${localityName}')">🔙 Discover more about ${localityName}</button>
                <button class="menu-btn" onclick="startBot()">🏠 Pick another destination</button>
            </div>`;
            addMessage(navHTML);
        }, 1200);

    }, 1000);
}

function handleSend() {
    const val = userInput.value.trim().toLowerCase();
    if(!val) return;
    addMessage(userInput.value.trim(), 'user');
    userInput.value = '';

    // Trigger for Food
    if (val.includes("food") || val.includes("beverage") || val.includes("drink")) {
        if (lastSelectedLocality) {
            showExtraInfo(lastSelectedLocality, 'food', false);
        } else {
            addMessage("Please pick a state first so I can show you the local delicacies!");
        }
        return;
    }
    
    // Trigger for Tourist Spots
    if (val.includes("spot") || val.includes("place") || val.includes("visit")) {
        if (lastSelectedLocality) {
            showExtraInfo(lastSelectedLocality, 'spots', false);
        } else {
            addMessage("Please pick a state first so I can show you the top spots!");
        }
        return;
    }

    // NEW: Trigger for 2026 Specials
    if (val.includes("2026") || val.includes("special") || val.includes("event") || val.includes("festival")) {
        if (lastSelectedLocality) {
            showExtraInfo(lastSelectedLocality, '2026', false);
        } else {
            addMessage("Please pick a state first so I can show you the 2026 special events!");
        }
        return;
    }

    // Trigger for State Names
    const stateMatch = Object.keys(localityData).find(s => s.toLowerCase() === val);
    if (stateMatch) {
        selectLocality(stateMatch, false);
    } else {
        setTimeout(() => {
            addMessage("I'm not sure about that. Try typing a state name or keywords like '2026 specials', 'food', or 'tourist spots'!");
        }, 800);
    }
}

function cycleTheme() {
    const body = document.body;
    const current = body.getAttribute('data-theme');
    let next = current === 'mosque' ? 'batucaves' : current === 'batucaves' ? 'theanhou' : 'mosque';
    body.setAttribute('data-theme', next);
}

document.querySelector('.send-btn').onclick = handleSend;
userInput.onkeypress = (e) => { if(e.key === 'Enter') handleSend(); };

// --- QUICK HELP LOGIC ---

function toggleQuickMenu() {
    const menu = document.getElementById('quick-help-menu');
    menu.classList.toggle('hidden');
}

function addToolMessage(toolType) {
    let content = "";
    let userQuery = "";
    let title = "";

    // Close menu immediately after click
    toggleQuickMenu();

    if (toolType === 'hotel') {
        userQuery = "Where should I book a hotel?";
        title = "🏨 Recommended Booking Platforms:";
        content = `• <a href="https://www.agoda.com" target="_blank"><b>Agoda</b></a><br>• <a href="https://www.booking.com" target="_blank"><b>Booking.com</b></a><br>• <a href="https://www.trip.com" target="_blank"><b>Trip.com</b></a>`;
    } else if (toolType === 'delivery') {
        userQuery = "I want to order food delivery.";
        title = "🍕 Food Delivery Apps:";
        content = `• <a href="https://www.foodpanda.my" target="_blank"><b>Foodpanda</b></a><br>• <a href="https://www.grab.com/my/food/" target="_blank"><b>GrabFood</b></a>`;
    } else if (toolType === 'transport') {
        userQuery = "How do I call for a ride?";
        title = "🚗 Transportation & E-Hailing:";
        content = `• <a href="https://www.grab.com/my/" target="_blank"><b>Grab</b></a> (Recommended)<br>• <a href="https://www.bolt.eu" target="_blank"><b>Bolt</b></a><br>• <a href="https://www.airasia.com/ride/" target="_blank"><b>AirAsia Ride</b></a>`;
    } else if (toolType === 'maps') {
        userQuery = "Check public transport routes.";
        title = "🗺️ Navigation & Routes:";
        content = `• <a href="https://www.google.com/maps" target="_blank"><b>Google Maps</b></a><br>• <a href="https://www.moovitapp.com" target="_blank"><b>Moovit</b></a> (Best for LRT/Bus)`;
    }

    // 1. Show the user "asking" the question
    addMessage(userQuery, 'user');

    // 2. Bot replies shortly after
    setTimeout(() => {
        addMessage(`<b>${title}</b><br><br>${content}`);
    }, 600);
}

// Ensure clicking outside closes the menu
window.onclick = function(event) {
    const menu = document.getElementById('quick-help-menu');
    const btn = document.getElementById('quick-help-btn');
    if (menu && !menu.classList.contains('hidden') && event.target !== btn && !menu.contains(event.target)) {
        menu.classList.add('hidden');
    }
}

window.onload = startBot;