var teaCoffeeProducts = [
    {
        id: 1,
        title: "Элитный зелёный чай Сенча",
        description: "Японский зелёный чай высшего сорта с нежным травянистым вкусом и лёгкой сладостью. Собран вручную на плантациях Сидзуока.",
        price: 850,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbTFRrjMoytKBx4iHsTaLTU11aRtZCwWZFw&s",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPu3ywVGbnbBlKY8f-xk3V8w1CEWuIz6CCoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwK8koBkgqU6Y2KNM7XQhML3zLthS7H1SFnA&s"
        ],
        rating: 4.8,
        category: "tea",
        teaType: "green",
        country: "Япония",
        weight: 100,
        popular: true
    },
    {
        id: 2,
        title: "Чёрный чай Ассам",
        description: "Крепкий индийский чай с насыщенным вкусом и медовым ароматом. Отлично подходит для утреннего чаепития с молоком.",
        price: 650,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4KWnbDUXia6slQ4M8AkMKL5lz6GKBjXJfQ&s",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlvriKhXHKamMQ3uiqjmm9oxkKJsBoi0V5Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gv77_0iK61ph1mE6yijVWpWa5hR5zec2bg&s"
        ],
        rating: 4.6,
        category: "tea",
        teaType: "black",
        country: "Индия",
        weight: 250,
        popular: true
    },
    {
        id: 3,
        title: "Кофе Арабика Колумбия",
        description: "Колумбийская арабика с мягким вкусом, нотками карамели и грецкого ореха. Средняя обжарка, идеально для фильтр-кофе.",
        price: 1200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxfUKASoBqRwEXHjUgbIUtMnZJiWYgrDtYw&s",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNnA8N0S-opiVsjtUS-nXrpJUxZxfnM_4zg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qCO_wrIW2pODXuBwPAlEFYaED4qQA_Ybuw&s"
        ],
        rating: 4.9,
        category: "coffee",
        teaType: "black",
        country: "Колумбия",
        weight: 500,
        popular: true
    },
    {
        id: 4,
        title: "Травяной чай Ромашка",
        description: "Успокаивающий травяной сбор из аптечной ромашки. Помогает расслабиться после трудного дня и улучшает сон.",
        price: 450,
        image: "https://sibaristica.com/upload/resize_cache/iblock/442/540_560_1/zzgj8qkci0vkxpi7baawpt5w6xcuho7s.jpg",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPzJddh1bINLP9crbX9-st5tMO0yU-dpYZQ&s"
        ],
        rating: 4.5,
        category: "tea",
        teaType: "herbal",
        country: "Россия",
        weight: 100,
        popular: false
    },
    {
        id: 5,
        title: "Эспрессо Робуста",
        description: "Крепкая робуста для настоящих ценителей. Интенсивный вкус с благородной горчинкой и шоколадным послевкусием.",
        price: 980,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfEuG4XGMDXD2lfLLmLDYEaWlH0vNEEjxfQ&s",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHs--cguXx1561-A2Zt100kRD19gLM67FvHg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeKAZ-ygBWuY9JuJKw7W_cjEzYjCF1ZBTWQ&s"
        ],
        rating: 4.3,
        category: "coffee",
        teaType: "green",
        country: "Вьетнам",
        weight: 1000,
        popular: false
    },
    {
        id: 6,
        title: "Чай Улун молочный",
        description: "Полуферментированный чай с нежным сливочным ароматом. Знаменитый тайваньский сорт Цзинь Сюань.",
        price: 1100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33nPOkeY68hHehMeZiZM2wI6k4zQWpsDjaA&s",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3b0KymWysqiIVmQZlFhmPo27KxMQBhrToig&s"
        ],
        rating: 4.7,
        category: "tea",
        teaType: "green",
        country: "Китай",
        weight: 250,
        popular: true
    },
    {
        id: 7,
        title: "Кофе Кения АА",
        description: "Кенийский кофе с ярким цитрусовым вкусом и винными нотками. Зёрна высшей категории АА.",
        price: 1350,
        image: "https://avatars.mds.yandex.net/i?id=80a21ca59a62947a8304fac72a5f065106246148-4622572-images-thumbs&n=13",
        images: [
            "https://yandex.ru/images/search?pos=44&from=tabbar&img_url=https%3A%2F%2Fir.ozone.ru%2Fs3%2Fmultimedia-1-e%2F9252437630.jpg&text=Кофе+Кения+АА&rpt=simage&lr=65    ",
            "https://avatars.mds.yandex.net/i?id=567195be8f7cfd19677c0822c175aff0_l-5213980-images-thumbs&n=13"
        ],
        rating: 4.4,
        category: "coffee",
        teaType: "herbal",
        country: "Кения",
        weight: 250,
        popular: false
    },
    {
        id: 8,
        title: "Чай Пуэр классический",
        description: "Выдержанный пуэр из провинции Юньнань. Глубокий землистый вкус с нотками чернослива.",
        price: 1500,
        image: "https://avatars.mds.yandex.net/i?id=47d71bce91937f5f3368c72f82fda35fd9274b1d-5523828-images-thumbs&n=13",
        images: [
            "https://ir.ozone.ru/s3/multimedia-z/6624149147.jpg"
        ],
        rating: 4.8,
        category: "tea",
        teaType: "black",
        country: "Китай",
        weight: 100,
        popular: true
    },
    {
        id: 9,
        title: "Френч-пресс стеклянный",
        description: "Классический френч-пресс объёмом 600 мл из жаропрочного стекла. Подходит для чая и кофе.",
        price: 1800,
        image: "https://avatars.mds.yandex.net/i?id=763eb15edbd1e2fbf51bcc7f9b7cf1ec2b9cf3dc-10595999-images-thumbs&n=13",
        images: [
            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400"
        ],
        rating: 4.6,
        category: "accessories",
        teaType: "black",
        country: "Франция",
        weight: 500,
        popular: false
    },
    {
        id: 10,
        title: "Зелёный чай Жасмин",
        description: "Ароматный зелёный чай с цветами жасмина. Лёгкий, освежающий вкус с цветочным ароматом.",
        price: 750,
        image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-29/060/008/711/114/15/600009406694b1.jpeg",
        images: [
            "https://img.fix-price.com/insecure/rs:fit:800:800/plain/bit/_marketplace/images/origin/0b/0b9b093cc2ee3c4eded89e15a2ce6cdb.jpg"
        ],
        rating: 4.7,
        category: "tea",
        teaType: "green",
        country: "Китай",
        weight: 250,
        popular: false
    },
    {
        id: 11,
        title: "Кофе Бразилия Сантос",
        description: "Бразильский кофе с шоколадными нотками и низкой кислотностью. Идеален для эспрессо.",
        price: 1100,
        image: "https://avatars.mds.yandex.net/i?id=6f186e47674f2cde6b29ffc28f6c0d09_l-3608855-images-thumbs&n=13",
        images: [
            "https://avatars.mds.yandex.net/i?id=d08e310774a11b149a5c3f05b941a75c_l-4745534-images-thumbs&n=13"
        ],
        rating: 4.5,
        category: "coffee",
        teaType: "green",
        country: "Бразилия",
        weight: 500,
        popular: true
    },
    {
        id: 12,
        title: "Чайный набор стеклянный",
        description: "Красивый набор: заварочный чайник 500 мл и 4 чашки по 150 мл. Для настоящей чайной церемонии.",
        price: 2500,
        image: "https://avatars.mds.yandex.net/i?id=e66efa628d5b2124f17e2b62917867be_l-10702829-images-thumbs&n=13",
        images: [
            "https://galeontrade.ru/upload/iblock/6ca/na1w3o7sgul5l51pojc6wa26ekm5os9v.jpeg"
        ],
        rating: 4.8,
        category: "accessories",
        teaType: "herbal",
        country: "Япония",
        weight: 1000,
        popular: false
    },
    {
        id: 13,
        title: "Чай Матча японский",
        description: "Порошковый зелёный чай матча премиум-класса. Яркий изумрудный цвет и насыщенный вкус.",
        price: 1400,
        image: "https://avatars.mds.yandex.net/get-mpic/15992133/2a00000199f8d65842231ff705809df47097/orig",
        images: [
            "https://avatars.mds.yandex.net/i?id=6a12ba2dacacddc58e1ae416e517ef09af4da409-4322237-images-thumbs&n=13"
        ],
        rating: 4.9,
        category: "tea",
        teaType: "green",
        country: "Япония",
        weight: 100,
        popular: true
    },
    {
        id: 14,
        title: "Кофе Эфиопия Иргачиф",
        description: "Эфиопский кофе с цветочным ароматом и яркими фруктовыми нотками. Светлая обжарка.",
        price: 1250,
        image: "https://avatars.mds.yandex.net/get-mpic/5256749/img_id2674660069226340788.jpeg/orig",
        images: [
            "https://avatars.mds.yandex.net/i?id=da66f2071d577335561df9a14f2e82bf_l-15410706-images-thumbs&n=13"
        ],
        rating: 4.6,
        category: "coffee",
        teaType: "herbal",
        country: "Эфиопия",
        weight: 250,
        popular: false
    },
    {
        id: 15,
        title: "Иван-чай ферментированный",
        description: "Традиционный русский травяной чай. Собран в экологически чистых районах Алтая.",
        price: 550,
        image: "https://avatars.mds.yandex.net/get-mpic/5341376/2a00000194324bf9541017e8b73eac1aca87/orig",
        images: [
            "https://ir.ozone.ru/s3/multimedia-1-x/w1200/7315304721.jpg"
        ],
        rating: 4.4,
        category: "tea",
        teaType: "herbal",
        country: "Россия",
        weight: 100,
        popular: false
    },
    {
        id: 16,
        title: "Турка медная для кофе",
        description: "Традиционная медная турка на 400 мл с деревянной ручкой. Для варки настоящего восточного кофе.",
        price: 2200,
        image: "https://avatars.mds.yandex.net/get-mpic/4393885/img_id5083824123168455938.jpeg/orig",
        images: [
            "https://tea-album.ru/image/cache/catalog/турки/04036%20Запах%20прибыли-1000x1000.jpg"
        ],
        rating: 4.7,
        category: "accessories",
        teaType: "black",
        country: "Турция",
        weight: 500,
        popular: false
    },
    {
        id: 17,
        title: "Чай Дарджилинг первый сбор",
        description: "Индийский чай первого сбора с мускатным ароматом и нежным вкусом. Называют шампанским среди чаёв.",
        price: 1300,
        image: "https://avatars.mds.yandex.net/get-mpic/4383514/img_id7001035091536534817.jpeg/orig",
        images: [
            "https://cdn1.ozone.ru/s3/multimedia-1-n/7232454059.jpg"
        ],
        rating: 4.8,
        category: "tea",
        teaType: "black",
        country: "Индия",
        weight: 100,
        popular: false
    },
    {
        id: 18,
        title: "Кофе Гватемала Антигуа",
        description: "Гватемальский кофе с пряными нотками и шоколадным послевкусием. Выращен на вулканических почвах.",
        price: 1400,
        image: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/662/732/715/519/35/100031325983b0.jpg",
        images: [
            "https://i512.63pokupki.ru/item/x512/613a466b34ba955a40b1556f95c459902flixtiq1smh2bi1vl.jpg"
        ],
        rating: 4.5,
        category: "coffee",
        teaType: "green",
        country: "Гватемала",
        weight: 500,
        popular: false
    },
    {
        id: 19,
        title: "Ситечко для чая",
        description: "Удобное ситечко из нержавеющей стали с мелкими отверстиями. Подходит для любой кружки.",
        price: 350,
        image: "https://basket-13.wbbasket.ru/vol1995/part199599/199599938/images/big/1.webp",
        images: [
            "https://avatars.mds.yandex.net/i?id=3f9ae347a4202d099dd7b2ddf074e36cf8317d71-5547365-images-thumbs&ref=rim&n=33&w=250&h=250"
        ],
        rating: 4.3,
        category: "accessories",
        teaType: "herbal",
        country: "Китай",
        weight: 100,
        popular: false
    },
    {
        id: 20,
        title: "Чай Эрл Грей",
        description: "Классический чёрный чай с бергамотом. Изысканный цитрусовый аромат и мягкий вкус.",
        price: 700,
        image: "https://avatars.mds.yandex.net/i?id=76cf2ea364ad6b96a8b1e425fe3b1b417a4ce91a-5690699-images-thumbs&n=13",
        images: [
            "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-21/118/877/545/142/215/100068367825b0.jpg"
        ],
        rating: 4.7,
        category: "tea",
        teaType: "black",
        country: "Шри-Ланка",
        weight: 250,
        popular: true
    }
];