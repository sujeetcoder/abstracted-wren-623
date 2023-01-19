const express=require("express")
const adminAuth = require("../middlewares/adminAuth")
const Product = require("../models/products.model")

const app=express.Router()


app.get("/",  async (req, res) => {
    const {category} = req.query
    let products;
    if(category){
        products = await Product.find({category})
    } else {
        products = await Product.find()
    }
    
    try {
        if(products){
            res.send(JSON.stringify(products))
        } else {
            res.status(404).send("product not found")
        }
    } catch (e) {
        res.send(e.message)
    }
})


app.get("/:category", async (req, res) => {
    const category = req.params.category
    const {page=1, limit=12} = req.query
    let products = await Product.find({category}).limit(limit).skip((page-1)*limit)
    try {
        if(products){
            res.send(JSON.stringify(products))
        } else {
            res.status(404).send("product not found")
        }
    } catch (e) {
        res.send(e.message)
    }
})


app.post("/", adminAuth , async (req, res) => {
    const {name, category, description, image, price, ofPrice, quantity} = req.body
    
    try {
        let existing = await Product.findOne({name})
        if(existing){
           let prod = await Product.findOneAndUpdate({name},{quantity:existing.quantity++},{new:true})
           res.send("Product updated successfully")
        } else {
            let pro = await Product.create({
                user:req.objId, name, category, description, image, price, ofPrice, quantity
            })
            res.send("Product added successfully")
        }
    } catch (e) {
        res.send(e.message)
    }
})

/* abra ka dabra */
app.post("/mardoise" , async (req, res) => {
    /* const {name, category, description, image, price, ofPrice, quantity} = req.body */
    
    try {
        /* let existing = await Product.findOne({name})
        if(existing){
           let prod = await Product.findOneAndUpdate({name},{quantity:existing.quantity++},{new:true})
           res.send("Product updated successfully")
        } else {
            let pro = await Product.create({
                user:req.objId, name, category, description, image, price, ofPrice, quantity
            })
            res.send("Product added successfully")
        } */
        let prod = await Product.create([
            {
              "name": "Nanoleaf Essentials A19 Bulb",
              "category": "Smart Home Accessories",
              "description": "Nanoleaf Essentials provides a seamless introduction to smart lighting. Unique multi-faceted bulb design and the purest color performance creates a stunning illumination in your room. High brightness and endless colors will take your space from work mode to game night fun instantly. Customize and control through the Nanoleaf app, controller, or voice commands.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE62?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636125755000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE62_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636125746000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE62_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636125742000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE62_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636125740000"
              ],
              "price": 19.95
            },
            {
              "name": "Logitech Circle View Wired Doorbell",
              "category": "Smart Home Accessories",
              "description": "Present a smarter welcome with the Logitech Circle View Wired Doorbell. Circle View Doorbell is an easy-to-use video doorbell featuring HomeKit Secure Video with Face Recognition, best-in-class Logitech TrueView™ video, a 160° field of view with head-to-toe HD optics, and color night vision. Designed to fit any home, the seamless glass face and slim silhouette add a touch of elegance and intelligence to your entrance. Works with your current wired doorbell systems and chime modules, and comes with everything you need to get set up, including mounting options. Receive rich notifications with two-way audio across all your Apple devices whenever a person or package is at the door. The high-quality sensor with High Dynamic Range gives you unbelievable detail in sunlight or shadows. The ultimate solution to security and privacy, Circle View Doorbell supports HomeKit Secure Video for secure end-to-end encryption, a 10-day recording history, custom Activity Zones, and private home hub video analysis.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPGS2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482179950",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPGS2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482204826",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPGS2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482170053",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPGS2_AV7?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482248299"
              ],
              "price": 199.95
            },
            {
              "name": "Belkin Wemo Smart Plug with Thread",
              "category": "Smart Home Accessories",
              "description": "The Belkin Wemo Smart Plug with Thread connects to Apple HomeKit and gives you total control over the lamps, lights, fans and other appliances in your home. Turn them on and off from anywhere using your iPhone, iPad, or by asking Siri. You can also set scenes and schedules in the Home app for even more added flexibility. Just tap your iPhone to the Smart Plug and follow the prompts to complete setup and start controlling in seconds. Automatic pairing using NFC (Near Field Communication) technology makes setup faster and easier than ever before.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0S2_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1658252099447",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0S2_AV1_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657595740817",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0S2_AV2_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657596025579"
              ],
              "price": 24.95
            },
            {
              "name": "Nanoleaf Essentials A19 Smart 60W LED Light Bulb (3-Pack)",
              "category": "Smart Home Accessories",
              "description": "The Nanoleaf Essentials A19 Bulb (3-Pack) is a smart color-changing LED lightbulb, and one of the first of its kind to work with Thread. This bulb proudly boasts the brightest tunable whites on the market and over 16M colors to choose from, making it perfect for all of your daily lighting needs. Whether working from home, or looking to set a relaxing nighttime ambience, the Essentials Smart Bulb provides you with the perfect light for every occasion.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPUD2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636065559000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPUD2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636065548000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPUD2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636065551000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPUD2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1636065545000"
              ],
              "price": 49.95
            },
            {
              "name": "Logitech Circle View Apple HomeKit-Enabled Security Camera",
              "category": "Smart Home Accessories",
              "description": "Circle View wired camera brings to Apple HomeKit Secure Video best-in-class video quality with Logitech TrueView™ technology. Carefully crafted glass optics and a high-end sensor provide razor sharp 1080p HD video, an ultra wide 180° diagonal field-of-view, clear contrast with wide dynamic range, and enhanced infrared night vision capability up to 15 feet away. Designed with privacy and security in mind, Circle View’s innovative design allows you to tilt the camera down for quick privacy, or press the button on the rear of the camera to disable streaming and recording entirely. Apple HomeKit Secure Video provides end-to-end encryption, with in-home video analysis that runs on your home hub device. Together, Circle View and Apple HomeKit provide the ultimate solution to your privacy and security needs.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNRE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482059621",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNRE2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482207091",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNRE2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482207847",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNRE2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1659482188266"
              ],
              "price": 159.95
            },
            {
              "name": "Eve Door & Window Wireless Contact Sensor (3-Pack)",
              "category": "Smart Home Accessories",
              "description": "Eve Door & Window Smart Contact Sensors give you quick status information of your doors or windows. They are also equipped to not only control other HomeKit-enabled accessories throughout your home, but also send notifications while you’re on the go, courtesy of your ever-present home hub. Unassuming and a breeze to install (with no tools required), Eve Door & Window is powered by a long-lasting, replaceable battery and boasts truly wireless, energy-efficient operation thanks to Bluetooth Low Energy and Thread technology.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLD2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657672195701",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLD2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657672219518",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLD2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657672218309",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLD2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657672273658"
              ],
              "price": 99.95
            },
            {
              "name": "Nanoleaf Essentials 80” Lightstrip Starter Kit",
              "category": "Smart Home Accessories",
              "description": "Nanoleaf Essentials provides a seamless introduction to smart lighting. Take your space from work mode to game night fun instantly, with bright and efficient lightstrips. With an even light glow and endless colors you can create stunning backlit illumination in your room. Customize and control through the Nanoleaf app, controller, or voice commands.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE52?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1605652156000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE52_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1605908486000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE52_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1623251355000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPE52_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1623251360000"
              ],
              "price": 49.95
            },
            {
              "name": "Eve Energy Smart Plug & Power Meter",
              "category": "Smart Home Accessories",
              "description": "Eve Energy lets you control your lights and appliances with a simple tap or by asking Siri. Or effortlessly set up schedules that put your appliances on autopilot, turning your floor lamps, dehumidifier, and many other devices on and off independently of your iPhone or internet connection. With HomePod, HomePod mini, or Apple TV as your home hub, you can also access your accessories on the go, control them automatically based on whether somebody is leaving or arriving home, and add automations that work with other HomeKit-enabled accessories.\nTaking advantage of Apple HomeKit technology and UL certification, Eve Energy offers outstanding ease of use and advanced security. It's quick & easy to set up, doesn’t need a bridge, and boasts energy-efficient operation thanks to cutting-edge Bluetooth and Thread support. And the best thing about all Eve accessories is how they protect your privacy: Eve does not harvest your personal data and there is no Eve cloud, so your data won’t go missing or be made accessible to third parties.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLC2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1658252097492",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLC2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657755559005",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLC2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1657933696659",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPLC2_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1620940968000"
              ],
              "price": 39.95
            },
            {
              "name": "Eve Energy Strip - Connected Triple Outlet",
              "category": "Smart Home Accessories",
              "description": "Eve Energy Strip lets you individually control three outlets—and the connected appliances—with the app on your iPhone or via Siri. Rest assured that your appliances are safeguarded by overcurrent, overvoltage, and surge protection. Plus, you can track their combined power consumption.\nEquipped with cutting-edge Apple HomeKit technology, and crafted to absolute perfection, Eve Energy Strip connects to your Wi-Fi network without a bridge. And it never sends your private data to the cloud.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNEE2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1565230998232",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNEE2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1565367386474"
              ],
              "price": 99.95
            },
            {
              "name": "Belkin UltraHD High Speed 4K HDMI Cable (2m)",
              "category": "Power & Cables",
              "description": "This HDMI cable provides the ultimate 4K HDR viewing experience for connecting your Apple TV 4K — with its true-to-life picture and sound — to your TV or A/V receiver.* It’s Dolby Vision HDR compatible and supports up to 7680-by-4320 resolution* and bandwidth up to 48 Gbps.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLL52?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1549036962042",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLL52_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1549036962108"
              ],
              "price": 29.95
            },
            {
              "name": "Sony PlayStation® DualSense™ Wireless Controller",
              "category": "Gaming",
              "description": "Raise your game with the PlayStation DualSense wireless controller. It pairs directly with your compatible iPad, iPhone, Mac or Apple TV* via Bluetooth®, bringing signature PlayStation® comfort and next-gen precision to your gaming experience. And it’s compatible with thousands of controller-supported games, including those on Apple Arcade.\nPS Remote Play**\nStream compatible games from your PS5™ or PS4™ console to your iPad, iPhone, or Mac and play using the PS Remote Play App** and your DualSense wireless controller. The app requires an internet connection and account for PlayStation™ Network.\nPairing your device\nThanks to official support included in iOS 14.5, iPadOS 14.5, macOS 11.3, and tvOS 14.5, you can quickly pair the DualSense wireless controller with your Apple device the first time you use it.\nCharging the controller\nThe Sony DualSense wireless controller charges via a standard USB Type-C® input (cable not included). It requires a USB Battery Charging 1.2-compatible wall charger to charge, or standard USB 2.0 or 3.0 compatible port found on a PS5 console, Mac, or PC computer.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPNG2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1665002952548",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPNG2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1665002937634",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPNG2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1665002903732",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPNG2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1665002896423"
              ],
              "price": 69.95
            },
            {
              "name": "SteelSeries Nimbus+ Wireless Gaming Controller",
              "category": "Gaming",
              "description": "The SteelSeries Nimbus+ Wireless Controller is the new and improved version of the award-winning and wildly popular Nimbus Wireless Controller. Nimbus+ includes new features such a rechargeable battery with 50 hours of life on a single charge, clickable L3/R3 joysticks for console-like performance on all your Apple devices, a new high-performance Bluetooth module, and dedicated menu and option buttons for easy navigation. Nimbus+ includes the Nimbus+ iPhone Mount for easy attachment while on the go, and works with thousands of games on your iPhone, iPad, iPod, Apple TV, or Mac. It is also an ideal companion to Apple Arcade.\nAnd if you buy a Nimbus+ Controller now, you’ll get up to 4 months free of Apple Arcade.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HP3G2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1606779261000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HP3G2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1606779238000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HP3G2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1606779261000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HP3G2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1606779271000"
              ],
              "price": 69.95
            },
            {
              "name": "Linksys Velop AX4200 WiFi 6 Mesh System",
              "category": "Mesh Wi-Fi Networking",
              "description": "The Linksys Velop AX4200 WiFi 6 Mesh System delivers next-level streaming and gaming to more than 40 devices on your network. It offers a reliable connection for everyone to stream, game, and video chat without interruption. Intelligent Mesh™ Technology offers whole home coverage that’s easily expandable by adding additional nodes.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPN22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1625777274000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPN22_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1625777274000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPN22_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1625777287000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPN22_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1625777272000"
              ],
              "price": 249.95
            },
            {
              "name": "AmpliFi Alien Router",
              "category": "Mesh Wi-Fi Networking",
              "description": "The elegantly designed AmpliFi Alien brings revolutionary Wi-Fi 6 benefits to your home. Increase your network capacity by 4x and boost coverage by 2x, while reducing battery drain in mobile devices.\n AmpliFi Alien comes with 2.4/5 GHz Wi-Fi 6 and 5 GHz Wi-Fi 5 radios. They deliver 7685 Mbps total capacity and 16 spatial streams from a single AmpliFi Alien unit. Easily mesh multiple units over the air to build virtually unlimited Wi-Fi capacity in your home.\nAmpliFi Alien is optimized to provide your home network with the highest possible performance regardless of how many client devices are connected simultaneously, and eliminates dead spots and increases total home network capacity by four times.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0N2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1649180033498",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0N2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1649180057045",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0N2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1649180036615",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ0N2_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1649180007184"
              ],
              "price": 379.95
            },
            {
              "name": "Siri Remote",
              "category": "Remotes & Controllers",
              "description": "The Siri Remote (3rd generation) brings precise control to your Apple TV 4K.¹ Its touch-enabled clickpad lets you select titles, swipe through playlists, and use a circular gesture on the outer ring to find just the scene you’re looking for. With Siri, you can find what you want to watch using your voice. And the latest design includes a USB-C port to quickly recharge.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNC73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1664836189752",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNC73_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1664836189489",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNC73_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1664836190276",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNC73_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1664836191289"
              ],
              "price": 59.00
            },
            {
              "name": "AirPods Pro (2nd generation)",
              "category": "Headphones & Speakers",
              "description": "Designed by Apple\nH2 Apple Silicon, amazing sound quality with Adaptive EQ\nPersonalized Spatial Audio with dynamic head trackingº\nActive Noise Cancellation\nFour silicone ear tip sizes for a more customizable fit and seal\nAdaptive Transparency\nTouch control lets you adjust volume with a swipe and manage playback functions from the stem\nMagSafe Charging Case with Precision Finding¹⁵, built-in speaker, and lanyard loop\nUp to 6 hours of listening time with Active Noise Cancellation enabled.⁷ Up to 30 hours of total listening time with Active Noise Cancellation enabled, using the case.\nAirPods Pro and charging case are sweat and water resistant (IPX4)²\nAutomatically on, automatically connected\nEasy setup for all your Apple devices\nCase can be charged either wirelessly using a MagSafe charger, an Apple Watch charger, or a Qi-certified charger, or with the Lightning connector",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1672385353325",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803961811",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803965590"
              ],
              "price": 249.00
            },
            {
              "name": "AirPods (3rd generation) with MagSafe Charging Case",
              "category": "Headphones & Speakers",
              "description": "Designed by Apple\nPersonalized Spatial Audio with dynamic head tracking for an immersive three-dimensional listening experience¹\nAmazing sound quality with Adaptive EQ\nContoured design\nForce sensor control\nSweat and water resistant (IPX4)³\nEasy setup for all your Apple devices\nMagSafe Charging Case can be charged either wirelessly using a MagSafe charger or Qi-certified charger or with the Lightning connector",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861333000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861336000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1633733312000"
              ],
              "price": 179.00
            },
            {
              "name": "AirPods (3rd generation) with Lightning Charging Case",
              "category": "Headphones & Speakers",
              "description": "Designed by Apple\nPersonalized Spatial Audio with dynamic head tracking for an immersive three-dimensional listening experience¹\nAmazing sound quality with Adaptive EQ\nContoured design\nForce sensor control\nSweat and water resistant (IPX4)³\nEasy setup for all your Apple devices\nMagSafe Charging Case can be charged either wirelessly using a MagSafe charger or Qi-certified charger or with the Lightning connector",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861333000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861336000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1633733312000"
              ],
              "price": 169.00
            },
            {
              "name": "AirPods (2nd generation)",
              "category": "Headphones & Speakers",
              "description": "Designed by Apple\nAutomatically on, automatically connected\nEasy setup for all your Apple devices⁶\nQuick access to Siri by saying “Hey Siri” or setting up double-tap\n Double-tap to play or skip forward\nCharges quickly in the case\nCase can be charged with a Lightning connector\n Rich, high-quality audio and voice\nSeamless switching between devices",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489688005",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489684370",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1552508263186",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489686690"
              ],
              "price": 129.00
            },
            {
              "name": "Buy AirPods Max",
              "category": "Headphones & Speakers",
              "description": "Designed by Apple\nAutomatically on, automatically connected\nEasy setup for all your Apple devices⁶\nQuick access to Siri by saying “Hey Siri” or setting up double-tap\n Double-tap to play or skip forward\nCharges quickly in the case\nCase can be charged with a Lightning connector\n Rich, high-quality audio and voice\nSeamless switching between devices",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha&.v=1604022365000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-smartcase-pink-witb?wid=284&hei=340&fmt=jpeg&qlt=95&.v=1603906276000"
              ],
              "price": 549.00
            },
            {
              "name": "Buy HomePod mini",
              "category": "Headphones & Speakers",
              "description": "Room-filling, 360-degree sound. Place HomePod mini speakers around the house for rich multiroom audio¹ and features like Intercom.\nSiri is your intelligent assistant on HomePod mini. Just use your voice to check your calendar or the weather, set alarms, and complete everyday tasks.\nControl your smart home accessories with just your voice using HomePod mini.\nPrivacy at home is essential. HomePod mini helps you keep your data private and secure.",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-blue-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086025000"
              ],
              "price": 99.00
            },
            {
              "name": "Beats Studio Buds – True Wireless Noise Cancelling Earphones – Sunset Pink",
              "category": "Headphones & Speakers",
              "description": "Custom acoustic platform delivers powerful, balanced sound\nActive Noise Cancelling (ANC) blocks external noise for immersive listening\n Easily switch to Transparency mode to hear the world around you\n Simple one-touch pairing for both Apple⁶ and Android⁷ devices\nHigh-quality call performance and voice assistant interaction via dual beam-forming mics\nIPX4-rated sweat and water resistant wireless earbuds\nThree soft eartip sizes for a stable and comfortable fit while ensuring an optimal acoustic seal\nUp to 8 hours of listening time¹ (up to 24 hours combined with pocket-sized charging case)\nActivate Siri hands-free just by saying “Hey Siri”\nIndustry-leading Class 1 Bluetooth® for extended range and fewer dropouts\nUSB-C universal charging",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMT83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1647541360014",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMT83_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1647541358774",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMT83_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1647541357072",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMT83_AV6?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1654733195836"
              ],
              "price": 149.99
            },
            {
              "name": "Beats Fit Pro True Wireless Earbuds — Sage Gray",
              "category": "Headphones & Speakers",
              "description": "Flexible, secure-fit wingtips for all-day comfort and stability\nCustom acoustic platform delivers powerful, balanced sound\nSpatial Audio with dynamic head tracking immerses you in music, movies and games\nActive Noise Cancelling (ANC) dynamically adapts to your environment to block external noise1\nEasily switch to Transparency mode to hear the world around you\nEnhanced by the Apple H1 chip for Automatic Switching between devices, Audio Sharing and “Hey Siri”2\nSweat and water resistant (IPX4-rated) earbuds3\n Up to 6 hours of listening time4 (up to 24 hours combined with charging case)5\nHigh-quality call performance and voice assistant interaction via dual beamforming mics\nIndustry-leading Class 1 Bluetooth® for extended range and fewer dropouts\niOS Find My helps you locate your lost earbuds6\n Android-compatible straight out of the box. With the Beats app for Android, you’ll get enhanced features like one-touch pairing, customised controls and a Fit Test.7\n Matching, pocket-sized charging case with USB-C charging",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2J3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1634663503000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2J3_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1634663509000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2J3_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1655423012842",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2J3_AV6?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1654733195835"
              ],
              "price": 199.99
            },
            {
              "name": "Beats Flex – All-Day Wireless Earphones - Yuzu Yellow",
              "category": "Headphones & Speakers",
              "description": "Magnetic earbuds with Auto-Play/Pause¹\nCustom acoustic platform delivers premium sound with accurate bass and low distortion\nBuilt-in microphone with wind reduction for elevated voice clarity\nUp to 12 hours of listening time²\nAll-day comfort with Flex-Form cable and four eartip options\nPowered by the Apple W1 chip for seamless connectivity³\nAudio Sharing lets you wirelessly share audio with another pair of Beats headphones or AirPods⁴\n 10-minute Fast Fuel charging gives 1.5 hours of playback²\nClass 1 Bluetooth® for extended range and fewer dropouts\nOn-device controls for volume, track and call controls located on the left side of neckband housing\nPower button located on the right side of neckband housing\n Keep track of your Beats Flex using Find My5",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMD2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1601053181000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMD2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1601053170000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMD2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1601944549000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMD2_AV7?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1601053180000"
              ],
              "price": 69.99
            },
            {
              "name": "Powerbeats Pro - True Wireless Earbuds - Navy",
              "category": "Headphones & Speakers",
              "description": "True wireless high-performance earbuds\nUp to 9 hours of listening time (more than 24 hours with charging case)\nAdjustable, secure-fit earhooks for lightweight comfort and stability\nReinforced design for IPX4-rated sweat and water resistance during tough workouts5\nVolume and track controls on each earbud, voice capability and Auto Play/Pause\nPowerful, balanced sound with dynamic range and noise isolation\n“Hey Siri” hands-free voice² and improved connection speed³ via the Apple H1 headphone chip\nEarbuds connect independently via Class 1 Bluetooth for extended range and fewer dropouts\nWith Fast Fuel, a 5-minute charge gives 1.5 hours of playback when battery is low¹\nEnhanced phone call performance and call handling from either earbud\n Keep track of your Powerbeats Pro using Find My6",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV702?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1602803373000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV702_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1602803366000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV702_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1602803373000",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV702_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1602803343000"
              ],
              "price": 249.95
            },
            {
              "name": "Beats Studio3 Wireless Over‑Ear Headphones - Blue",
              "category": "Headphones & Speakers",
              "description": "Pure Active Noise Cancelling (Pure ANC) actively blocks external noise\nReal-time audio calibration preserves a premium listening experience\nUp to 22 hours of battery life enables fully featured all-day wireless playback\nApple W1 chip for Class 1 Wireless Bluetooth connectivity and battery efficiency\nWith Fast Fuel, a 10-minute charge gives 3 hours of play when battery is low\nPure ANC-off for low-power mode provides up to 40 hours of battery life\nTake calls, control music and activate Siri with multifunction on-ear controls\nSoft over-ear cushions for extended comfort and added noise isolation",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX402?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420165023",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX402_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420164932",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX402_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420162549",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX402_AV6?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1612209724000"
              ],
              "price": 349.95
            },
            {
              "name": "Beats Solo3 Wireless Headphones - The Beats Icon Collection - Matte Black",
              "category": "Headphones & Speakers",
              "description": "True wireless high-performance earbuds\nUp to 9 hours of listening time (more than 24 hours with charging case)\nAdjustable, secure-fit earhooks for lightweight comfort and stability\nReinforced design for IPX4-rated sweat and water resistance during tough workouts5\nVolume and track controls on each earbud, voice capability and Auto Play/Pause\nPowerful, balanced sound with dynamic range and noise isolation\n“Hey Siri” hands-free voice² and improved connection speed³ via the Apple H1 headphone chip\nEarbuds connect independently via Class 1 Bluetooth for extended range and fewer dropouts\nWith Fast Fuel, a 5-minute charge gives 1.5 hours of playback when battery is low¹\nEnhanced phone call performance and call handling from either earbud\n Keep track of your Powerbeats Pro using Find My6",
              "image": [
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX432?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1570119317387",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX432_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1570119312106",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX432_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1570119320884",
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX432_AV6?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1570119319978"
              ],
              "price": 199.95
            }
          ])
        res.send("hello")
        console.log("suc")
    } catch (e) {
        console.log("Fun")
        res.send(e.message)
    }
})


app.patch("/:_id", adminAuth , async (req, res) => {
    
    let _id = req.params._id
    try {
        let existing = await Product.findOneAndUpdate({_id},{...req.body},{new: true})
        if(existing){
            res.send("Product updated successfully")  
        } else {
            res.send("Product not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})


app.delete("/:_id", adminAuth ,  async (req, res) => {
    let _id = req.params._id
    try {
        let existing = await Product.findOneAndDelete({_id})
        if(existing){
            res.send(`Product deleted successfully`)
        } else {
            res.send("Product not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})




module.exports=app