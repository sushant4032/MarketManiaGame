var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    prices = [28, 50, 20, 70, 23, 28, 130, 105, 165, 45, 125, 145, 445, 260, 115, 245, 285, 64, 38, 40, 140, 76, 25, 445, 165, 19, 35, 60, 95, 28, 65, 25, 30, 25, 23, 215, 110, 220, 115, 230, 196, 142, 280, 130, 105, 145, 70, 100, 100, 100, 99, 109, 100, 105, 100, 135, 99, 109, 200, 109, 100, 20, 110, 99, 100, 99, 110, 110, 99, 400, 436, 295, 315, 315, 270, 285, 270, 75, 38, 90, 30, 90, 35, 40, 25, 40, 90, 30, 65, 30, 40, 90, 35, 20, 35, 35, 145, 35, 30, 30, 310, 95, 99, 45, 300, 89, 12, 23, 20, 25, 152, 101, 97, 54, 56, 147, 99, 58, 40, 20, 160, 70, 160, 170, 20, 40, 40, 160, 100, 35, 35, 60, 185, 185, 190, 185, 210, 195, 20, 250, 70, 135, 260, 37, 59, 110, 80, 85, 77, 34, 73, 28, 15, 49, 53, 50, 50, 67, 22, 49, 180, 360, 155, 180, 99, 82, 149, 60, 145, 220, 165, 165, 145, 139, 150, 190, 39, 39, 86, 128, 250, 135, 155, 590, 100, 100, 49, 48, 50, 150, 60, 52, 75, 94, 56, 25, 125, 105, 75, 240, 200, 275, 230, 230, 199, 190, 200, 299, 195, 195, 99, 260, 185, 240, 161, 90, 170, 110, 125, 40, 90, 170, 260, 195, 120, 190, 130, 110, 49, 75, 135, 43, 80, 51, 50, 199, 199, 75, 190, 314, 300, 245, 80, 95, 199, 64, 120, 499, 56, 449, 199, 106, 112, 78, 102, 199, 225, 58, 170, 102, 65, 270, 20, 50, 155, 110, 30, 20, 36, 99, 150, 84, 30, 125, 25, 46, 14, 20, 25, 413];
    descs = [
        "Britannia Marie Gold Biscuits(250 g) ", "Britannia Nutri Choice Digestive Biscuits(250 g) ", "Britannia 50-50 Sweet & Salty(150 g) ", "Britannia Good Day Nut Cookies(250 g) ", "Sunfeast Marie Light Rich Taste Biscuits(200 g) ", "Britannia Bourbon Sandwich Biscuits(150 g) ", "Moong Dal Yellow (Split)(1 kg) ", "Chana Dal(1 kg) ", "Kabuli Chana(1 kg) ", "Nutrela Soya Chunks(200 g) ", "Urad Dal White (Split)(1 kg) ", "Fortune Kachi Ghani Mustard Oil Plastic Bottle(1 L) ", "Amul Pure Ghee 1 L Tetrapack ", "Patanjali Cow's Ghee 500 ml Tetrapack ", "Dhara Refined Sunflower Oil Pouch(1 L) ", "Aashirvaad Superior MP Atta(5 kg) ", "Aashirvaad Atta with Multigrains(5 kg) ", "Tata Sampann Fine Besan(500 g) ", "Catch Jeera - Whole(100 g) ", "Patanjali Hing(25 g) ", "Everest Tikhalal Chilli Powder(500 g) ", "Everest Garam Masala(100 g) ", "Turmeric Powder(100 g) ", "India Gate Regular Choice Basmati Rice (Medium Grain)(5 kg) ", "India Gate Super Basmati Rice (Long Grain)(1 kg) ", "Tata Iodized Salt(1 kg) ", "Tata Lite Iodized Salt(1 kg) ", "Madhur Sugar(1 kg) ", "Sugar Free Green Stevia Sweetener(100 Tablets) ", "Britannia Marie Gold Biscuits(250 g) ", "Parle G Original Gluco Biscuits(800 g) ", "Britannia Milk Bikis Biscuits(200 g) ", "Parle Monaco Salted Biscuits(200 g) ", "Britannia 50-50 Maska Chaska(120 g) ", "Sunfeast Marie Light Rich Taste Biscuits(200 g) ", "Red Label Tea(500 g, Box) ", "Red Label Tea(250 g, Box) ", "Tata Agni Tea(1 kg, Pouch) ", "Tata Gold Tea(250 g, Pouch) ", "Tata Gold Tea(500 g, Pouch) ", "Tata Premium Leaf Tea(500 g, Box) ", "Taj Mahal Tea(250 g, Box) ", "Taj Mahal Tea(500 g, Box) ", "Red Label Natural Care Tea(250 g, Box) ", "Waghbakri Premium Leaf Tea(250 g, Box) ", "Nescafe Classic Instant Coffee 50 g ", "Nescafe Classic Instant Coffee 25 g ", "Tropicana Mixed Fruit Delight(1 L) ", "Real Fruit Juice Guava(1 L) ", "Real Fruit Juice - Litchi(1 L) ", "Real Fruit Juice Mixed(1 L) ", "Real Fruit Juice - Cranberry(1 L) ", "Tropicana Apple Delight Fruit Beverage(1 L) ", "Real Fruit Juice - Orange(1 L) ", "Tropicana Guava Delight Fruit Beverage(1 L) ", "Tropicana 100% Orange Juice(1 L) ", "Real Fruit Juice - Apple(1 L) ", "Real Fruit Juice - Pomegranate(1 L) ", "Patanjali Aloe Vera Juice with Fiber(1 L) ", "Minute Maid Orange Juice(1 L) ", "Real Fruit Juice - Litchi(1 L) ", "Tropicana Pineapple Delight(200 ml) ", "Tropicana Cranberry Delight Fruit Beverage(1 L) ", "Real Fruit Juice - Apple(1 L) ", "Tropicana Mango Delight Fruit Beverage(1 L) ", "Real Fruit Juice Grape(1 L) ", "Tropicana Litchi Delight Fruit Beverage(1 L) ", "Tropicana Orange Delight Fruit Beverage(1 L) ", "Real Fruit Juice - Mango(1 L) ", "Cadbury Bournvita Pro Health Vitamins 1.0 kg ", "Horlicks Classic Malt 1 kg ", "Women's Horlicks Calseal Formula - Caramel Flavour 400 g ", "Complan Kesar Badam 500.0 g ", "Complan Pista Badam 500 g ", "Junior Horlicks Original Flavour - Stage 1 500 g ", "Junior Horlicks Original Flavour - Stage 1 500 g ", "Junior Horlicks Chocolate Flavour - Stage 2 500 g ", "Maaza Mango(1.5 L) ", "Maaza Mango(600 ml) ", "Mirinda 2.25 L(Plastic Bottle) ", "Pepsi 250 ml(Can) ", "Pepsi 2.25 L(Plastic Bottle) ", "Sprite 300 ml(Can) ", "Sprite 750 ml(Plastic Bottle) ", "Thums Up 180 ml(Can) ", "Thums Up 750 ml(Plastic Bottle) ", "Thums Up 2.25 L(Plastic Bottle) ", "Pepsi Black 250 ml(Can) ", "Tropicana Slice Mango Juice(1.2 L) ", "Pepsi Diet 250 ml(Can) ", "Coca-Cola 750 ml(Plastic Bottle) ", "Coca-Cola 2.25 L(Plastic Bottle) ", "Coca-Cola 300 ml(Can) ", "Kinley Soda Extra Punch 750 ml(Plastic Bottle) ", "Minute Maid Pulpy Orange(400 ml) ", "Thums Up 300 ml(Can) ", "Glucon-D Energy Drink(450 g, Nimbu Pani Flavored) ", "Sprite 300 ml(Can) ", "7UP 250 ml(Can) ", "Mountain Dew 250 ml(Can) ", "Kellogg's Corn Flakes Original(875 g, Pouch) ", "Kellogg's Corn Flakes Original(250 g, Box) ", "Saffola Chinese Masala Oats(250 g, Pouch) ", "Kwality Choco Flakes(100 g, Box) ", "Kellogg's Chocos Moons & Stars(700 g, Box) ", "Maggi Masala Instant Noodles 560 g ", "Maggi Masala Instant Noodles 70 g ", "Maggi Masala Instant Noodles 140 g ", "Maggi Nutri-licious Atta Masala Instant Noodles 75 g ", "Bambino Pastta Instant Chatpata Tomato Pasta(65 g) ", "Maggi Hot & Sweet Tomato Chilli Sauce(1 kg) ", "Maggi Hot & Sweet Tomato Chilli Sauce(500 g) ", "Maggi Rich Tomato Ketchup(500 g) ", "Maggi Rich Tomato Ketchup(200 g) ", "Kissan Fresh Tomato Ketchup(200 g) ", "Kissan Fresh Tomato Ketchup(1 kg) ", "Kissan Fresh Tomato Ketchup(500 g) ", "Maggi Hot and Sweet Tomato Chilli Sauce(200 g) ", "Cadbury Dairy Milk Chocolate Bars(52 g) ", "Cadbury Dairy Milk Chocolate Bars(23 g) ", "Cadbury Dairy Milk Silk Fruit and Nut Chocolate Bars(137 g) ", "Cadbury Dairy Milk Silk Fruit & Nut Chocolate Bars(55 g) ", "Cadbury Dairy Milk Silk Chocolate Bars(150 g) ", "Cadbury Dairy Milk Silk Oreo Chocolate Bars(130 g) ", "Cadbury 5 Star Chocolate Truffles(40 g) ", "Cadbury Dairy Milk Roast Almond Chocolate Bars(36 g) ", "Cadbury Dairy Milk Crackle Chocolate Bars(36 g) ", "Cadbury Dairy Milk Silk Roast Almond Chocolate Bars(137 g) ", "Haldiram's Rasgulla(500 g, Tin) ", "Hajmola Imli ", "Hajmola Regular ", "Nestle Milky Bars(66 g) ", "Haldiram's Cham Cham(1 kg, Tin) ", "Haldiram's Rasgulla(980 g, Tin) ", "Haldiram's Gulab Jamun(1 kg, Tin) ", "Haldiram's Rajbhog(1 kg, Tin) ", "Bikano Rasogolla(1 kg, Box) ", "Kissan Mixed Fruit Jam 700 g ", "Kissan Mixed Fruit Jam 100 g ", "Kissan Mixed Fruit Jam 1.04 kg ", "Patanjali Honey(250 g) ", "Patanjali Honey(500 g) ", "Patanjali Honey(1 kg) ", "Dabur Honey(50 g) ", "Dabur Honey(100 g) ", "Dabur Honey(250 g) ", "Priya Cut Mango Pickle(300 g) ", "MTR Sliced Mango Pickle(300 g) ", "Mother's Recipe Mixed Pickle(300 g) ", "Cinthol Original Soap(100 g) ", "LUX Soft Touch Beauty Bar(300 g, Pack of 3) ", "Lifebuoy Care Soap(125 g) ", "Patanjali Aloe Vera Kanti Body Cleanser(75 g) ", "Dove Go Fresh Moisture Beauty Bathing Bar(75 g) ", "Savlon Glycerine Soap(125 g) ", "Dettol Original Soap(125 g) ", "Dettol Cool Soap(125 g) ", "Pears Pure & Gentle Bathing Bar(25 g Extra in Pack)(125 g) ", "Margo Neem Soap(75 g) ", "Dove Cream Beauty Bathing Bar(33% Extra in Pack)(75 g) ", "Palmolive Aroma Morning Tonic Shower Gel(250 ml) ", "Palmolive Aroma Morning Tonic Shower Gel(750 ml) ", "Himalaya Purifying Neem Face Wash(150 ml) ", "Garnier Men Acno Fight 6 in 1 Pimple Clearing Face Wash(100 g) ", "Dettol Original Liquid Hand Wash", "Lifebuoy Nature Hand Wash(190 ml, Pump Dispenser) ", "Dettol Original Liquid Hand Wash Refill(900 ml, Bottle) ", "Patanjali Anti-Bacterial Herbal Handwash(250 ml, Pump Dispenser) ", "Clinic Plus Strong & Long Health Shampoo(340 ml) ", "Pantene Hair Fall Control Shampoo(180 ml) ", "Head & Shoulders Cool Menthol 2-in-1 Shampoo + Conditioner(180 ml) ", "Sunsilk Stunning Black Shine Shampoo(340 ml) ", "Dove Oxygen Moisture Shampoo(180 ml) ", "Pantene Silky Smooth Care Conditioner(175 ml) ", "Himalaya Damage Repair Protein Conditioner(200 ml) ", "Dove Intense Repair Conditioner(175 ml) ", "Parachute Advansed Aloe Vera Enriched Coconut Hair Oil(75 ml) ", "Parachute Pure Coconut Hair Oil(100 ml) ", "Parachute Pure Coconut Hair Oil(200 ml) ", "Parachute Pure Coconut Hair Oil(300 ml) ", "Parachute Pure Coconut Hair Oil(600 ml) ", "Parachute Advansed Jasmine Coconut Hair Oil(90ml Parachute Advansed Jasmine Hair Oil Free)(300 ml) ", "Hair & Care Fruit Hair Oil(300 ml) ", "L'Oreal Paris Excellence Creme Hair Color(Black 1) ", "Set Wet Cool Hold Hair Gel(100 ml) ", "Set Wet Vertical Hold Hair Gel(100 ml) ", "Colgate Strong Teeth Toothpaste(5 g Extra in Pack)(100 g) ", "Closeup Ever Fresh Toothpaste(80 g) ", "Dabur Red Toothpaste(100 g) ", "Sensodyne Rapid Relief Toothpaste(80 g) ", "Dabur Red Gel Toothpaste(150 g) ", "Pepsodent Germicheck Superior Toothpaste(40 g Extra in Pack)(100 g) ", "Patanjali Dant Kanti Toothpaste(200 g) ", "Pepsodent 2-in-1 Toothpaste(150 g) ", "Colgate Active Salt Neem Toothpaste(100 g) ", "Colgate ZigZag Medium Toothbrush ", "Listerine Mouthwash - Coolmint(250 ml) ", "Colgate Plax Mouthwash - Pepper Mint(250 ml) ", "Colgate Waxed Dental Floss - 25 m ", "Park Avenue Signature Collection Deo Voyage Perfume Body Spray - For Men(130 ml) ", "AXE Dark Temptation Deodorant Spray - For Men(150 ml) ", "Fogg Fresh Woody Body Spray - For Men(150 ml) ", "Fogg Royal Fragrance Body Spray - For Men(150 ml) ", "Fogg 1000 Sprays, Ultimate Body Spray - For Men & Women(150 ml) ", "ADIDAS Male Dynamic Pulse Deodorant Spray - For Men(150 ml) ", "AXE Provoke Deodorant Spray - For Men(150 ml) ", "AXE Pulse Deodorant Spray - For Men(150 ml) ", "Wild Stone Forest Spice Perfume - 50 ml(For Men) ", "Navratna Cool Talc Mint Fresh(50ml Navratna Oil Free)(400 g) ", "Fair & Lovely Advanced Multi Vitamin(110 g) ", "Nivea Men Dark Spot Reduction Moisturiser(20 ml) ", "Nivea Men Dark Spot Reduction Creme(150 ml) ", "Vaseline Intensive Care Deep Restore Body Lotion(200 ml) ", "Nivea Creme(200 ml) ", "Dettol Effective Protection Antiseptic Liquid(550 ml) ", "Dabur Chyawanprash(250 g) ", "Dabur Chyawanprash(75 g Extra in Pack)(500 g) ", "Boroplus Healthy Skin Antiseptic Cream(80 ml) ", "Vicks Vaporub Balm(50 ml) ", "Zandu Ultra Power Balm(8 ml) ", "Zandu Balm(25 ml) ", "Moov Pain Relief Specialist Spray(50 g) ", "Patanjali Special Chyawanprash with Saffron(1 kg) ", "Dabur Chyawanprakash Sugarfree(500 g) ", "Iodex Multi Purpose Pain Balm(40 g) ", "Patanjali Chyawanprash(1 kg) ", "Himani Fast Relief Pain Cream(45 ml) ", "Eno Fruit Salt Regular Powder(100 g) ", "Dabur Pudin Hara Active Pudina Drink(30 ml) ", "Zandu Nityam Churna Powder(100 g) ", "Patanjali Special Chyawanprash(500 g) ", "Itch Guard Cream(15 g) ", "Ring Guard Anti Fungal Cream(20 g) ", "Ring Guard Anti Fungal Cream(12 g) ", "Gillette Guard Cartridge(1 Unit Gillette Shaving Cartridge Free)(Pack of 5) ", "Gillette Regular Pre Shave Foam(33% Extra in Pack)(280 g) ", "Nivea Men Sensitive After Shave Lotion(100 ml) ", "Dettol Fresh Shaving Cream(30% Extra in Pack)(60 g) ", "Old Spice Musk After Shave Lotion(100 ml) ", "Nestle Lactogen Infant Formula (Stage 1)(400 g, Upto 6 Months) ", "Nestle Lactogen Follow-up-Formula (Stage 2)(400 g, 6+ Months) ", "Nestle Cerelac Multigrain & Fruits Cereal(300 g, 12+ Months) ", "Johnson's Baby Soap(150 g) ", "Johnson's Baby Powder(200 g) ", "Johnson's Baby Powder(400 g) ", "Rin Detergent Bar(1000 g, Pack of 4) ", "Surf Excel Easy Wash Detergent Powder(1 kg) ", "Surf Excel Matic Front Load Detergent Powder(2 kg) ", "Tide Naturals Lemon and Chandan Detergent Powder(800 g) ", "Surf Excel Matic Top Load Detergent Powder(2 kg) ", "Surf Excel Matic Top Load Liquid(1.02 L) ", "Tide Plus Jasmine & Rose Detergent Powder(1 kg) ", "Revive Liquid Fabric Stiffener(400 g) ", "Rin Lemon and Rose Detergent Powder(1 kg) ", "Tide Plus Extra Power Lemon and Mint(1 kg) ", "Ariel Matic Top Load Detergent Powder(1 kg) ", "Ariel Matic Liquid Detergent(1 L) ", "Rin Ala Fabric Whitener(500 ml) ", "Surf Excel Quick Wash Detergent Powder(1 kg) ", "Tide Plus Talcum Freshness Detergent Powder(1 kg) ", "Ujala Supreme Fabric Whitener(250 ml) ", "Ariel Detergent Washing Powder(500 g Extra in Pack)(1 kg) ", "Vim Dishwash Bar(300 g) ", "Vim Extra Anti Smell with Pudina Dishwash Bar(600 g, Pack of 3) ", "Vim Dish Cleaning Gel(Lemon, 750 ml) ", "Vim Dish Cleaning Gel(Lime, 500 ml) ", "Scotch Brite Stainless Steel Scrub Pad(Scrub Pad Worth Rs.10 Free)(Regular) ", "Scotch Brite Platinum Scrub Pad(Regular) ", "Harpic Power Plus Liquid Toilet Cleaner Original(200 ml) ", "Freshee Patterned Aluminium Foil(10 m) ", "Eveready Give Me Red AA Battery(Pack of 10) ", "Duracell Ultra AA 2 Battery(Pack of 2) ", "Cycle Pure Three in One Agarbattis(68 g) ", "Cycle Natural Woody Agarbattis(36 Units) ", "Vinayaka's Wild Purple Agarbattis(60 Units Extra in Pack)(60 g) ", "Amul Pasteurised Salted Butter(100 g) ", "Amul Taaza Homogenised Toned Milk(200 ml) ", "Amul Source of Calcium & Protein Sweet Lassi(250 ml) ", "Amul Kool(Badam, 200 ml) ", "Nestle Everyday Dairy Whitener Milk Powder(1 kg) "

    ];
    ref();
    $scope.ref = function () {
        ref();
    }
    function ref() {
        $scope.ansd = false;
        $scope.right = false;
        $scope.wrong = false;
        items = 279;
        $scope.i = Math.floor(items * Math.random());
        i = $scope.i;
        $scope.p = prices[i];
        $scope.d = descs[i];
        options();
    }
    function options() {
        $scope.r = Math.floor(4 * Math.random());
        var f = 1;
        var p = $scope.p;
        var x1 = p;
        var x2 = Math.floor(p * (1 - f * (Math.random() - 0.5)));
        var x3 = Math.floor(p * (1 - f * (Math.random() - 0.5)));
        var x4 = Math.floor(p * (1 - f * (Math.random() - 0.5)));
        if (x1 % 5 == 0) {
            x3 = x3 + (5 - (x3 % 5));
        }
        if ($scope.r == 0) {
            $scope.p1 = x1;
            $scope.p2 = x2;
            $scope.p3 = x3;
            $scope.p4 = x4;
        }
        else if ($scope.r == 1) {
            $scope.p1 = x2;
            $scope.p2 = x1;
            $scope.p3 = x3;
            $scope.p4 = x4;
        }
        else if ($scope.r == 2) {
            $scope.p1 = x3;
            $scope.p2 = x2;
            $scope.p3 = x1;
            $scope.p4 = x4;
        }
        else if ($scope.r == 3) {
            $scope.p1 = x4;
            $scope.p2 = x2;
            $scope.p3 = x3;
            $scope.p4 = x1;
        }
        checkOptions();
    }
    function checkOptions() {
        var x1 = $scope.p1;
        var x2 = $scope.p2;
        var x3 = $scope.p3;
        var x4 = $scope.p4;
        if ((x1 - x2) * (x1 - x3) * (x1 - x4) * (x2 - x3) * (x2 - x4) * (x3 - x4) == 0) {
            options();
        }
    }
    $scope.check = function (r) {
        $scope.ansd = true;
        if (r == $scope.r) {
            $scope.right = true;
        }
        else {
            $scope.wrong = true;
        }
    }

});