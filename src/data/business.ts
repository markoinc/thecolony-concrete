export const business = {
  name: "The Colony Concrete Co",
  shortName: "The Colony Concrete",
  phone: "(469) 972-8639",
  phoneTel: "4699728639",
  phoneDisplay: "469-972-8639",
  email: "sales@thecolonyconcreteco.com",
  address: {
    street: "415 Sir Torin Ln",
    city: "The Colony",
    state: "TX",
    zip: "75056",
    full: "415 Sir Torin Ln, The Colony, TX 75056"
  },
  geo: {
    latitude: 33.0807,
    longitude: -96.8917
  },
  url: "https://thecolonyconcreteco.com",
  openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
  priceRange: "$$",
  metaDescription: "Professional concrete contractors serving The Colony, TX and the DFW metroplex. Driveways, patios, foundations, stamped concrete & more. Free estimates! Call 469-972-8639",
  description: "Professional concrete contractors serving The Colony, TX and the DFW metroplex. Specializing in driveways, patios, foundations, flooring, retaining walls, and commercial concrete work.",
  yearsExperience: "15+",
  projectsCompleted: "2,500+",
  satisfactionRate: "98%",
  ghlWebhook: "https://services.leadconnectorhq.com/hooks/XpNgKy8QHaORl5hLz4ae/webhook-trigger/6b5abab4-fcd6-4ae3-a5b7-d6eff06a5af3"
};

export const services = [
  {
    slug: "driveways",
    name: "Concrete Driveways",
    shortName: "Driveways",
    description: "Durable, attractive concrete driveways built to last. We handle everything from new installations to replacements and repairs.",
    longDescription: "Our concrete driveways are engineered to withstand the harsh Texas climate, from scorching summer heat to occasional freeze-thaw cycles. We use 4,000 PSI concrete with rebar reinforcement for maximum durability.",
    icon: "🚗",
    priceRange: "$8-$18 per sq ft",
    timeframe: "2-4 days",
    keywords: ["concrete driveway", "driveway installation", "driveway replacement", "stamped driveway"]
  },
  {
    slug: "patios",
    name: "Patios & Walkways",
    shortName: "Patios",
    description: "Transform your outdoor living space with beautiful concrete patios, walkways, and pool decks. Stamped and decorative options available.",
    longDescription: "Create the perfect outdoor entertaining space with our custom concrete patios. From sleek modern finishes to decorative stamped patterns that mimic natural stone, we bring your vision to life.",
    icon: "🏡",
    priceRange: "$10-$25 per sq ft",
    timeframe: "2-5 days",
    keywords: ["concrete patio", "patio installation", "walkways", "pool deck"]
  },
  {
    slug: "foundations",
    name: "Concrete Foundations",
    shortName: "Foundations",
    description: "Solid foundations for homes and commercial buildings. We ensure proper preparation and reinforcement for lasting stability.",
    longDescription: "A strong foundation is critical in Texas, where expansive clay soils cause significant foundation issues. Our team understands local soil conditions and builds foundations designed to last for generations.",
    icon: "🏗️",
    priceRange: "$5-$12 per sq ft",
    timeframe: "1-2 weeks",
    keywords: ["concrete foundation", "slab foundation", "foundation repair", "foundation installation"]
  },
  {
    slug: "stamped-concrete",
    name: "Stamped Concrete",
    shortName: "Stamped",
    description: "Decorative stamped concrete that mimics brick, stone, tile, or wood. Add elegance to any project at a fraction of the cost.",
    longDescription: "Why pay premium prices for natural stone when stamped concrete delivers the same aesthetic appeal at a fraction of the cost? Our stamped concrete services include dozens of patterns and unlimited color options.",
    icon: "🎨",
    priceRange: "$12-$30 per sq ft",
    timeframe: "3-5 days",
    keywords: ["stamped concrete", "decorative concrete", "patterned concrete", "colored concrete"]
  },
  {
    slug: "concrete-repair",
    name: "Concrete Repair",
    shortName: "Repair",
    description: "Cracks, spalling, or settling? We repair and restore damaged concrete to extend its life and improve appearance.",
    longDescription: "Texas weather takes a toll on concrete surfaces. Our expert repair services address cracks, spalling, settling, and surface damage. We can often restore existing concrete for a fraction of replacement cost.",
    icon: "🔧",
    priceRange: "$3-$10 per sq ft",
    timeframe: "1-3 days",
    keywords: ["concrete repair", "crack repair", "concrete restoration", "concrete resurfacing"]
  },
  {
    slug: "commercial",
    name: "Commercial Concrete",
    shortName: "Commercial",
    description: "Parking lots, sidewalks, loading docks, and more. We handle commercial projects of all sizes throughout DFW.",
    longDescription: "From retail parking lots to industrial warehouse floors, we deliver commercial-grade concrete solutions designed for heavy use. Our commercial team understands the unique demands of business properties.",
    icon: "🏢",
    priceRange: "Custom quotes",
    timeframe: "1-4 weeks",
    keywords: ["commercial concrete", "parking lot", "sidewalk", "commercial foundation"]
  }
];

// Comprehensive location data for all cities within 1 hour of The Colony
export const locations = [
  { 
    name: "The Colony", 
    slug: "the-colony", 
    primary: true,
    county: "Denton County",
    population: "45,000+",
    distance: "0 miles",
    zipCodes: ["75056"],
    landmarks: ["Grandscape", "Lava Island", "Stewart Creek Park", "Hawaiian Falls"],
    description: "The Colony is a thriving lakeside community on the shores of Lewisville Lake, known for its excellent parks, family-friendly atmosphere, and premier shopping at Grandscape."
  },
  { 
    name: "Frisco", 
    slug: "frisco",
    county: "Collin/Denton County",
    population: "220,000+",
    distance: "8 miles",
    zipCodes: ["75033", "75034", "75035", "75036"],
    landmarks: ["The Star", "Stonebriar Centre", "Dr Pepper Ballpark", "Frisco Square"],
    description: "Frisco is one of the fastest-growing cities in America, home to the Dallas Cowboys headquarters at The Star and countless new residential developments."
  },
  { 
    name: "Plano", 
    slug: "plano",
    county: "Collin County",
    population: "290,000+",
    distance: "12 miles",
    zipCodes: ["75023", "75024", "75025", "75026", "75074", "75075", "75093", "75094"],
    landmarks: ["Legacy West", "The Shops at Willow Bend", "Arbor Hills Nature Preserve", "Downtown Plano Arts District"],
    description: "Plano consistently ranks among America's best places to live, featuring excellent schools, corporate headquarters, and vibrant mixed-use developments."
  },
  { 
    name: "Lewisville", 
    slug: "lewisville",
    county: "Denton County",
    population: "115,000+",
    distance: "6 miles",
    zipCodes: ["75029", "75056", "75057", "75067", "75077"],
    landmarks: ["Vista Ridge Mall", "Lewisville Lake", "Music City Mall", "Old Town Lewisville"],
    description: "Lewisville offers easy access to Lewisville Lake recreation along with diverse shopping, dining, and entertainment options for the whole family."
  },
  { 
    name: "Little Elm", 
    slug: "little-elm",
    county: "Denton County",
    population: "65,000+",
    distance: "4 miles",
    zipCodes: ["75068"],
    landmarks: ["Little Elm Park", "Lakefront Trail", "Lolaville", "Little Elm Beach"],
    description: "Little Elm has transformed from a small lakeside town to a booming suburban community, offering waterfront living and a strong sense of community."
  },
  { 
    name: "Carrollton", 
    slug: "carrollton",
    county: "Dallas/Denton/Collin County",
    population: "140,000+",
    distance: "10 miles",
    zipCodes: ["75006", "75007", "75010", "75011"],
    landmarks: ["Historic Downtown Carrollton", "A.W. Perry Homestead Museum", "Sandy Lake Amusement Park", "Carrollton Town Center"],
    description: "Carrollton blends small-town charm with big-city amenities, featuring a revitalized historic downtown and excellent DART rail connectivity."
  },
  { 
    name: "Flower Mound", 
    slug: "flower-mound",
    county: "Denton/Tarrant County",
    population: "80,000+",
    distance: "12 miles",
    zipCodes: ["75022", "75028"],
    landmarks: ["Grapevine Lake", "The River Walk at Central Park", "Twin Coves Park", "Stone Creek Park"],
    description: "Flower Mound is known for its scenic beauty, excellent schools, and family-oriented community with abundant parks and trails."
  },
  { 
    name: "McKinney", 
    slug: "mckinney",
    county: "Collin County",
    population: "200,000+",
    distance: "18 miles",
    zipCodes: ["75069", "75070", "75071", "75072"],
    landmarks: ["Historic Downtown McKinney", "Adriatica Village", "Erwin Park", "McKinney Performing Arts Center"],
    description: "McKinney's charming historic downtown has been named one of America's best main streets, while new developments offer modern Texas living."
  },
  { 
    name: "Allen", 
    slug: "allen",
    county: "Collin County",
    population: "105,000+",
    distance: "14 miles",
    zipCodes: ["75002", "75013"],
    landmarks: ["Allen Premium Outlets", "Watters Creek", "Celebration Park", "The Edge Skate Park"],
    description: "Allen is a rapidly growing city known for excellent schools, premium shopping destinations, and championship youth sports facilities."
  },
  { 
    name: "Prosper", 
    slug: "prosper",
    county: "Collin/Denton County",
    population: "35,000+",
    distance: "12 miles",
    zipCodes: ["75078"],
    landmarks: ["Gates of Prosper", "Prosper Town Center", "Frontier Park", "Windsong Ranch"],
    description: "Prosper is one of the fastest-growing towns in Texas, known for top-rated schools and master-planned communities."
  },
  { 
    name: "Celina", 
    slug: "celina",
    county: "Collin/Denton County",
    population: "25,000+",
    distance: "18 miles",
    zipCodes: ["75009"],
    landmarks: ["Historic Downtown Celina", "Old Celina Park", "Light Farms", "Cambridge Crossing"],
    description: "Celina maintains its small-town Texas charm while experiencing explosive growth with new master-planned communities."
  },
  { 
    name: "Castle Hills", 
    slug: "castle-hills",
    county: "Denton County",
    population: "8,000+",
    distance: "3 miles",
    zipCodes: ["75056"],
    landmarks: ["Castle Hills Village Shops", "Castle Hills Community Park"],
    description: "Castle Hills is a premier master-planned community in The Colony offering resort-style amenities and luxury homes."
  },
  { 
    name: "Highland Village", 
    slug: "highland-village",
    county: "Denton County",
    population: "17,000+",
    distance: "8 miles",
    zipCodes: ["75077"],
    landmarks: ["The Shops at Highland Village", "Doubletree Ranch Park", "Pilot Knoll Park"],
    description: "Highland Village is an affluent lakeside community known for excellent schools, upscale shopping, and scenic parks."
  },
  { 
    name: "Coppell", 
    slug: "coppell",
    county: "Dallas County",
    population: "42,000+",
    distance: "14 miles",
    zipCodes: ["75019"],
    landmarks: ["Old Town Coppell", "Andrew Brown Park", "Wagon Wheel Park", "Coppell Nature Park"],
    description: "Coppell offers award-winning schools, a charming downtown area, and convenient access to both Dallas and DFW Airport."
  },
  { 
    name: "Addison", 
    slug: "addison",
    county: "Dallas County",
    population: "17,000+",
    distance: "15 miles",
    zipCodes: ["75001"],
    landmarks: ["Addison Circle", "Galleria Dallas", "Addison Airport", "Village on the Parkway"],
    description: "Addison is a vibrant entertainment destination known for its restaurant scene, festivals, and cosmopolitan atmosphere."
  },
  { 
    name: "Richardson", 
    slug: "richardson",
    county: "Dallas/Collin County",
    population: "120,000+",
    distance: "18 miles",
    zipCodes: ["75080", "75081", "75082", "75083"],
    landmarks: ["CityLine", "Galatyn Park", "UTD Campus", "Eisemann Center"],
    description: "Richardson is a diverse, established community with a thriving tech corridor and excellent schools in both RISD and PISD."
  },
  { 
    name: "Murphy", 
    slug: "murphy",
    county: "Collin County",
    population: "25,000+",
    distance: "20 miles",
    zipCodes: ["75094"],
    landmarks: ["Central Park Murphy", "Murphy Marketplace"],
    description: "Murphy is a tight-knit community in Collin County with top-rated Plano ISD schools and a family-focused atmosphere."
  },
  { 
    name: "Wylie", 
    slug: "wylie",
    county: "Collin County",
    population: "60,000+",
    distance: "25 miles",
    zipCodes: ["75098"],
    landmarks: ["Historic Downtown Wylie", "Founders Park", "Lake Lavon"],
    description: "Wylie blends small-town Texas values with modern growth, offering affordable housing and excellent schools."
  },
  { 
    name: "Fairview", 
    slug: "fairview",
    county: "Collin County",
    population: "10,000+",
    distance: "16 miles",
    zipCodes: ["75069"],
    landmarks: ["Fairview Town Center", "Heritage Ranch"],
    description: "Fairview is an upscale community known for large lots, equestrian properties, and proximity to Allen and McKinney amenities."
  },
  { 
    name: "Aubrey", 
    slug: "aubrey",
    county: "Denton County",
    population: "12,000+",
    distance: "20 miles",
    zipCodes: ["76227"],
    landmarks: ["Mustang Water Park", "Downtown Aubrey", "Jackson Park"],
    description: "Aubrey is experiencing rapid growth while maintaining its rural Texas character with new master-planned communities."
  },
  { 
    name: "Denton", 
    slug: "denton",
    county: "Denton County",
    population: "150,000+",
    distance: "22 miles",
    zipCodes: ["76201", "76203", "76205", "76207", "76208", "76209", "76210"],
    landmarks: ["UNT Campus", "TWU Campus", "Denton Square", "Ray Roberts Lake"],
    description: "Denton is a vibrant college town with a thriving arts and music scene, historic downtown square, and diverse community."
  },
  { 
    name: "Corinth", 
    slug: "corinth",
    county: "Denton County",
    population: "24,000+",
    distance: "16 miles",
    zipCodes: ["76210"],
    landmarks: ["Lake Sharon", "Oakmont Country Club", "Community Park"],
    description: "Corinth offers a peaceful suburban setting with excellent schools and easy access to I-35E and Denton."
  },
  { 
    name: "Lake Dallas", 
    slug: "lake-dallas",
    county: "Denton County",
    population: "8,500+",
    distance: "10 miles",
    zipCodes: ["75065"],
    landmarks: ["Lewisville Lake", "Lake Dallas City Park"],
    description: "Lake Dallas is a small lakeside community offering affordable waterfront living on Lewisville Lake."
  },
  { 
    name: "Trophy Club", 
    slug: "trophy-club",
    county: "Denton/Tarrant County",
    population: "14,000+",
    distance: "15 miles",
    zipCodes: ["76262"],
    landmarks: ["Trophy Club Country Club", "Harmony Park", "Indian Trail"],
    description: "Trophy Club is an upscale planned community known for its country club amenities and Northwest ISD schools."
  },
  { 
    name: "Roanoke", 
    slug: "roanoke",
    county: "Denton County",
    population: "10,000+",
    distance: "18 miles",
    zipCodes: ["76262"],
    landmarks: ["Historic Downtown Roanoke", "Hawaiian Falls Roanoke"],
    description: "Roanoke, the 'Unique Dining Capital of Texas,' features a charming Oak Street dining district and growing community."
  },
  { 
    name: "Southlake", 
    slug: "southlake",
    county: "Tarrant/Denton County",
    population: "32,000+",
    distance: "20 miles",
    zipCodes: ["76092"],
    landmarks: ["Southlake Town Square", "Bob Jones Nature Center", "Bicentennial Park"],
    description: "Southlake is one of the most affluent communities in Texas, known for exceptional schools and upscale shopping."
  },
  { 
    name: "Grapevine", 
    slug: "grapevine",
    county: "Tarrant County",
    population: "55,000+",
    distance: "18 miles",
    zipCodes: ["76051", "76099"],
    landmarks: ["Grapevine Mills", "Historic Main Street", "Grapevine Lake", "Gaylord Texan"],
    description: "Grapevine is a tourism destination with a charming historic downtown, world-class resorts, and proximity to DFW Airport."
  },
  { 
    name: "Irving", 
    slug: "irving",
    county: "Dallas County",
    population: "240,000+",
    distance: "20 miles",
    zipCodes: ["75014", "75015", "75016", "75017", "75038", "75039", "75060", "75061", "75062", "75063"],
    landmarks: ["Las Colinas", "Toyota Music Factory", "Irving Convention Center", "Mustangs of Las Colinas"],
    description: "Irving's Las Colinas area features world-class entertainment, corporate headquarters, and diverse residential options."
  },
  { 
    name: "Farmers Branch", 
    slug: "farmers-branch",
    county: "Dallas County",
    population: "35,000+",
    distance: "12 miles",
    zipCodes: ["75234", "75244"],
    landmarks: ["Farmers Branch Historical Park", "Brookhaven College", "Mercer Park"],
    description: "Farmers Branch offers affordable living with great DART access and is known for the annual Tour des Fleurs cycling event."
  },
  { 
    name: "University Park", 
    slug: "university-park",
    county: "Dallas County",
    population: "25,000+",
    distance: "22 miles",
    zipCodes: ["75205", "75225"],
    landmarks: ["SMU Campus", "Snider Plaza", "Goar Park"],
    description: "University Park is one of Dallas's most prestigious neighborhoods, home to SMU and historic Highland Park homes."
  }
];

export const faqs = [
  {
    question: "How much does a concrete driveway cost in The Colony, TX?",
    answer: "Concrete driveway costs in The Colony and the DFW area typically range from $8-$18 per square foot, depending on size, thickness, and finish. A standard 400 sq ft driveway costs $3,200-$7,200. Stamped or decorative concrete runs higher at $12-$25 per square foot. For an accurate estimate on your specific project, call us at (469) 972-8639 for a free, no-obligation quote."
  },
  {
    question: "How long does concrete take to cure in Texas heat?",
    answer: "In Texas's hot climate, concrete actually cures faster but requires more careful management. Concrete reaches about 70% strength in 7 days and full strength in 28 days. You can typically walk on new concrete after 24-48 hours. We recommend waiting 7 days before driving on a new driveway and 14 days for heavy vehicles. Our team takes special precautions during hot summer months to ensure proper curing."
  },
  {
    question: "What areas do you serve near The Colony?",
    answer: "We serve The Colony and the entire DFW metroplex including Frisco, Plano, Lewisville, Little Elm, Carrollton, Flower Mound, McKinney, Allen, Prosper, Celina, Highland Village, Coppell, Addison, Richardson, Denton, Southlake, Grapevine, and all surrounding communities within approximately one hour of The Colony."
  },
  {
    question: "Do you offer free estimates for concrete work?",
    answer: "Yes! We offer completely free, no-obligation estimates for all concrete projects. Our estimator will visit your property, discuss your vision, and provide a detailed written quote. We believe in transparent pricing with no hidden fees. Call (469) 972-8639 or fill out our online form to schedule your free consultation."
  },
  {
    question: "How thick should a concrete driveway be in Texas?",
    answer: "A residential concrete driveway in Texas should be 4 inches thick for regular passenger vehicles. For heavier vehicles like RVs, trucks, or boats, we recommend 5-6 inches. Commercial driveways typically require 6-8 inches. All our driveways use 4,000 PSI concrete minimum for maximum durability in the Texas climate. We also factor in local soil conditions, which can vary significantly across the DFW area."
  },
  {
    question: "Do you use rebar in concrete driveways?",
    answer: "Yes, we use #4 rebar or wire mesh reinforcement in all driveways for optimal strength and crack prevention. Rebar is placed on chairs 2 inches from the bottom of the slab. This reinforcement extends driveway lifespan by 30-40% compared to unreinforced concrete. Given Texas's expansive clay soils, especially in Denton County, proper reinforcement is essential for long-term durability."
  },
  {
    question: "What PSI concrete do you use for driveways?",
    answer: "We use 4,000 PSI concrete for all driveways, which exceeds the 3,500 PSI minimum typically recommended for residential use. Higher PSI means greater compressive strength, better durability, and improved resistance to heavy vehicles and Texas weather extremes. For commercial applications or areas with heavy traffic, we may recommend even higher PSI mixes."
  },
  {
    question: "Can you remove and replace an old concrete driveway?",
    answer: "Yes, we provide complete driveway demolition and replacement services throughout the DFW area. Old concrete removal costs $2-$4 per square foot depending on thickness and accessibility. We handle the entire process: demolition, hauling away debris, grade preparation, proper base installation, and pouring new concrete. Most replacement projects take 3-5 days total from start to finish."
  },
  {
    question: "How do I prevent cracks in my concrete?",
    answer: "While no concrete is completely crack-proof, we take multiple steps to minimize cracking: proper soil preparation and compaction, adequate thickness, quality reinforcement (rebar or wire mesh), control joints placed at proper intervals, fiber mesh additives, and careful curing techniques. In Texas, we pay special attention to moisture control during hot weather curing."
  },
  {
    question: "What's the best time of year to pour concrete in Texas?",
    answer: "Spring (March-May) and fall (September-November) are ideal for concrete work in Texas. These seasons offer moderate temperatures that allow for optimal curing. However, we pour concrete year-round with appropriate precautions. In summer, we may start early morning and use curing compounds. In winter, we avoid pouring when temperatures will drop below 40°F within 24 hours."
  }
];

export const reviews = [
  {
    name: "Michael R.",
    location: "The Colony, TX",
    rating: 5,
    text: "Outstanding work on our new driveway! The crew was professional, showed up on time, and the finished product looks amazing. Highly recommend for anyone in The Colony area.",
    service: "Concrete Driveway"
  },
  {
    name: "Sarah T.",
    location: "Frisco, TX",
    rating: 5,
    text: "We had a stamped concrete patio installed and it turned out beautiful. The team helped us choose the perfect pattern and color. Our backyard is now our favorite place to relax!",
    service: "Stamped Patio"
  },
  {
    name: "David L.",
    location: "Plano, TX",
    rating: 5,
    text: "Fixed our cracked foundation piers quickly and professionally. Fair pricing and excellent communication throughout the project. Will definitely use again.",
    service: "Foundation Repair"
  },
  {
    name: "Jennifer M.",
    location: "Lewisville, TX",
    rating: 5,
    text: "Great experience from estimate to completion. The patio they poured is perfect - smooth finish, great drainage, and completed ahead of schedule.",
    service: "Concrete Patio"
  },
  {
    name: "Robert K.",
    location: "Little Elm, TX",
    rating: 5,
    text: "Best concrete contractor in the area! They removed our old cracked driveway and installed a beautiful new one. Price was fair and quality is top-notch.",
    service: "Driveway Replacement"
  },
  {
    name: "Amanda P.",
    location: "Carrollton, TX",
    rating: 5,
    text: "Professional team that takes pride in their work. Our new walkways and retaining wall transformed our property. Couldn't be happier with the results!",
    service: "Walkways & Retaining Wall"
  }
];

export const trustBadges = [
  { title: "Licensed", subtitle: "Texas Contractor", icon: "shield-check" },
  { title: "Insured", subtitle: "Full Coverage", icon: "shield" },
  { title: "15+ Years", subtitle: "Experience", icon: "clock" },
  { title: "2,500+", subtitle: "Projects Done", icon: "check-badge" },
  { title: "5-Star", subtitle: "Rated", icon: "star" },
  { title: "Free", subtitle: "Estimates", icon: "document" }
];
