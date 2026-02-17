#!/bin/bash

# Location data for The Colony, TX - 60 minute drive radius
# Format: "county|city-slug|City Name"

LOCATIONS=(
    # Denton County (home county)
    "Denton|the-colony|The Colony"
    "Denton|lewisville|Lewisville"
    "Denton|flower-mound|Flower Mound"
    "Denton|little-elm|Little Elm"
    "Denton|highland-village|Highland Village"
    "Denton|lake-dallas|Lake Dallas"
    "Denton|corinth|Corinth"
    "Denton|denton|Denton"
    "Denton|hickory-creek|Hickory Creek"
    "Denton|argyle|Argyle"
    "Denton|aubrey|Aubrey"
    "Denton|copper-canyon|Copper Canyon"
    "Denton|cross-roads|Cross Roads"
    "Denton|double-oak|Double Oak"
    "Denton|hackberry|Hackberry"
    "Denton|justin|Justin"
    "Denton|krum|Krum"
    "Denton|lantana|Lantana"
    "Denton|northlake|Northlake"
    "Denton|oak-point|Oak Point"
    "Denton|pilot-point|Pilot Point"
    "Denton|ponder|Ponder"
    "Denton|providence-village|Providence Village"
    "Denton|roanoke|Roanoke"
    "Denton|sanger|Sanger"
    "Denton|shady-shores|Shady Shores"
    "Denton|trophy-club|Trophy Club"
    "Denton|bartonville|Bartonville"
    "Denton|dish|DISH"
    "Denton|lincoln-park|Lincoln Park"
    
    # Collin County
    "Collin|frisco|Frisco"
    "Collin|plano|Plano"
    "Collin|mckinney|McKinney"
    "Collin|allen|Allen"
    "Collin|richardson|Richardson"
    "Collin|wylie|Wylie"
    "Collin|murphy|Murphy"
    "Collin|sachse|Sachse"
    "Collin|prosper|Prosper"
    "Collin|celina|Celina"
    "Collin|anna|Anna"
    "Collin|melissa|Melissa"
    "Collin|fairview|Fairview"
    "Collin|lucas|Lucas"
    "Collin|parker|Parker"
    "Collin|princeton|Princeton"
    "Collin|farmersville|Farmersville"
    "Collin|lavon|Lavon"
    "Collin|lowry-crossing|Lowry Crossing"
    "Collin|nevada|Nevada"
    "Collin|new-hope|New Hope"
    "Collin|st-paul|St. Paul"
    "Collin|weston|Weston"
    "Collin|blue-ridge|Blue Ridge"
    "Collin|josephine|Josephine"
    "Collin|van-alstyne|Van Alstyne"
    
    # Dallas County
    "Dallas|dallas|Dallas"
    "Dallas|carrollton|Carrollton"
    "Dallas|coppell|Coppell"
    "Dallas|irving|Irving"
    "Dallas|farmers-branch|Farmers Branch"
    "Dallas|addison|Addison"
    "Dallas|garland|Garland"
    "Dallas|mesquite|Mesquite"
    "Dallas|rowlett|Rowlett"
    "Dallas|grand-prairie|Grand Prairie"
    "Dallas|cedar-hill|Cedar Hill"
    "Dallas|desoto|DeSoto"
    "Dallas|duncanville|Duncanville"
    "Dallas|lancaster|Lancaster"
    "Dallas|highland-park|Highland Park"
    "Dallas|university-park|University Park"
    "Dallas|sunnyvale|Sunnyvale"
    "Dallas|balch-springs|Balch Springs"
    "Dallas|seagoville|Seagoville"
    "Dallas|glenn-heights|Glenn Heights"
    "Dallas|hutchins|Hutchins"
    "Dallas|wilmer|Wilmer"
    
    # Tarrant County (within 60 min)
    "Tarrant|fort-worth|Fort Worth"
    "Tarrant|arlington|Arlington"
    "Tarrant|grapevine|Grapevine"
    "Tarrant|colleyville|Colleyville"
    "Tarrant|southlake|Southlake"
    "Tarrant|keller|Keller"
    "Tarrant|north-richland-hills|North Richland Hills"
    "Tarrant|bedford|Bedford"
    "Tarrant|euless|Euless"
    "Tarrant|hurst|Hurst"
    "Tarrant|haltom-city|Haltom City"
    "Tarrant|watauga|Watauga"
    "Tarrant|richland-hills|Richland Hills"
    "Tarrant|saginaw|Saginaw"
    "Tarrant|westlake|Westlake"
    "Tarrant|haslet|Haslet"
    
    # Rockwall County
    "Rockwall|rockwall|Rockwall"
    "Rockwall|heath|Heath"
    "Rockwall|fate|Fate"
    "Rockwall|mclendon-chisholm|McLendon-Chisholm"
    "Rockwall|royse-city|Royse City"
    
    # Kaufman County (outer edge)
    "Kaufman|forney|Forney"
    "Kaufman|terrell|Terrell"
    "Kaufman|kaufman|Kaufman"
    
    # Ellis County (outer edge)
    "Ellis|waxahachie|Waxahachie"
    "Ellis|midlothian|Midlothian"
    "Ellis|red-oak|Red Oak"
    "Ellis|ennis|Ennis"
    
    # Wise County (outer edge)
    "Wise|decatur|Decatur"
    "Wise|rhome|Rhome"
    "Wise|newark|Newark"
    "Wise|boyd|Boyd"
)

DOMAIN="thecolonyconcreteco.com"
COMPANY="The Colony Concrete Co"
PHONE="469-972-8639"
DATE=$(date +%Y-%m-%d)

echo "Generating location pages..."

for loc in "${LOCATIONS[@]}"; do
    IFS='|' read -r county slug city <<< "$loc"
    
    mkdir -p "locations/$slug"
    
    cat > "locations/$slug/index.html" << LOCEOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concrete Contractors ${city}, TX | ${COMPANY}</title>
    <meta name="description" content="Professional concrete contractors serving ${city}, TX. Driveways, patios, foundations, stamped concrete & more. Free estimates in ${county} County! Call ${PHONE}">
    <link rel="canonical" href="https://${DOMAIN}/locations/${slug}/">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <a href="/" class="logo">The Colony <span>Concrete Co</span></a>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/locations/">Service Areas</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <a href="tel:${PHONE}" class="phone-header">${PHONE}</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Concrete Contractors in <span>${city}, TX</span></h1>
            <p>Professional concrete services for residential and commercial properties in ${city} and throughout ${county} County. Quality work, fair prices, free estimates.</p>
            <a href="tel:${PHONE}" class="btn">Call For Free Estimate</a>
        </div>
    </section>

    <section class="services">
        <div class="container">
            <h2>Concrete Services in ${city}</h2>
            <div class="services-grid">
                <div class="service-card">
                    <h3>🚗 Concrete Driveways</h3>
                    <p>New driveway installations, replacements, and repairs for ${city} homes. Durable, long-lasting concrete driveways built to withstand Texas weather.</p>
                </div>
                <div class="service-card">
                    <h3>🏡 Patios & Walkways</h3>
                    <p>Beautiful concrete patios and walkways for ${city} properties. Extend your outdoor living space with quality concrete work.</p>
                </div>
                <div class="service-card">
                    <h3>🏗️ Foundations</h3>
                    <p>Solid concrete foundations for new construction in ${city}. Proper preparation and reinforcement for lasting stability.</p>
                </div>
                <div class="service-card">
                    <h3>🎨 Stamped Concrete</h3>
                    <p>Decorative stamped concrete options for ${city} homeowners. Achieve the look of brick, stone, or tile at a fraction of the cost.</p>
                </div>
                <div class="service-card">
                    <h3>🔧 Concrete Repair</h3>
                    <p>Expert concrete repair services in ${city}. We fix cracks, spalling, settling, and other damage to extend your concrete's life.</p>
                </div>
                <div class="service-card">
                    <h3>🏢 Commercial Concrete</h3>
                    <p>Commercial concrete services in ${city} including parking lots, sidewalks, loading docks, and warehouse floors.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="cta">
        <div class="container">
            <h2>Get a Free Concrete Estimate in ${city}</h2>
            <p style="margin-bottom: 30px;">Ready to start your concrete project? Contact ${COMPANY} today for a free, no-obligation estimate.</p>
            <a href="tel:${PHONE}" class="btn">Call ${PHONE}</a>
        </div>
    </section>

    <section class="about">
        <div class="container">
            <div class="about-content">
                <div>
                    <h2>Why ${city} Chooses ${COMPANY}</h2>
                    <p>We're proud to serve the ${city} community with professional concrete services. Our experienced team delivers quality workmanship on every project, from simple repairs to complete installations.</p>
                    <p><strong>✓ Licensed & Insured</strong> - Full protection for your ${city} property<br>
                    <strong>✓ Free Estimates</strong> - Transparent pricing, no surprises<br>
                    <strong>✓ Quality Materials</strong> - Premium concrete mixes for lasting results<br>
                    <strong>✓ Experienced Crews</strong> - Skilled professionals on every job<br>
                    <strong>✓ Local Service</strong> - Based in The Colony, serving all of ${county} County</p>
                    <a href="tel:${PHONE}" class="btn btn-outline" style="margin-top: 20px;">Get Your Free Quote</a>
                </div>
                <div>
                    <h3 style="margin-bottom: 20px;">Serving ${city} and All of ${county} County</h3>
                    <p>As a locally-owned concrete contractor, we understand the unique needs of ${city} properties. From the soil conditions to local building codes, we have the expertise to deliver excellent results.</p>
                    <p style="margin-top: 15px;">Whether you need a new driveway, patio, foundation, or commercial concrete work in ${city}, TX, we're here to help. Contact us today for a free estimate!</p>
                </div>
            </div>
        </div>
    </section>

    <section class="nearby-areas">
        <div class="container">
            <h2 class="section-title">Nearby Areas We Serve</h2>
            <div class="nearby-list">
                <a href="/locations/">View All Service Areas</a>
            </div>
        </div>
    </section>

    <section id="contact" class="cta" style="background: var(--secondary);">
        <div class="container">
            <h2>Contact Us for Concrete Services in ${city}</h2>
            <p style="margin-bottom: 20px;">${COMPANY} - Serving ${city}, TX and all of ${county} County</p>
            <p style="font-size: 32px; font-weight: 700; margin-bottom: 30px;">📞 ${PHONE}</p>
            <a href="tel:${PHONE}" class="btn">Call Now For Free Estimate</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>${COMPANY}</h4>
                    <p>Professional concrete contractors serving ${city}, TX and the entire Dallas-Fort Worth metroplex.</p>
                    <p style="margin-top: 15px;"><strong>Phone:</strong> <a href="tel:${PHONE}">${PHONE}</a></p>
                </div>
                <div class="footer-section">
                    <h4>Our Services</h4>
                    <p><a href="/#services">Concrete Driveways</a></p>
                    <p><a href="/#services">Patios & Walkways</a></p>
                    <p><a href="/#services">Foundations</a></p>
                    <p><a href="/#services">Stamped Concrete</a></p>
                    <p><a href="/#services">Concrete Repair</a></p>
                </div>
                <div class="footer-section">
                    <h4>Service Areas</h4>
                    <p><a href="/locations/">All Locations</a></p>
                    <p><a href="/locations/the-colony/">The Colony</a></p>
                    <p><a href="/locations/frisco/">Frisco</a></p>
                    <p><a href="/locations/plano/">Plano</a></p>
                    <p><a href="/locations/lewisville/">Lewisville</a></p>
                </div>
                <div class="footer-section">
                    <h4>Contact Us</h4>
                    <p>The Colony, TX</p>
                    <p>Serving all of DFW</p>
                    <p><a href="tel:${PHONE}">${PHONE}</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 ${COMPANY}. All rights reserved. | <a href="/locations/">All Locations</a></p>
            </div>
        </div>
    </footer>
</body>
</html>
LOCEOF
    
    echo "Created: locations/$slug/index.html"
done

echo ""
echo "Done! Generated ${#LOCATIONS[@]} location pages."
