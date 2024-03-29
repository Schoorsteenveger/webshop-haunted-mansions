const products = [
    {
        "id": 1,
        "qty": 0,
        "name": "The Whaley House",
        "location": "San Diego",
        "img": ["Waley_House.jpeg"],
        "price": 1500000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story":"Back in 1852, James Yankee Jim Robinson was hung by his neck for the crime of grand larceny. A few years later, Thomas and Anna Whaley built a house on the spot where Robinson died, and soon enough, Yankee Jim's ghost showed up, haunting the site. It's said that his footsteps can be heard clumping around the house. Yankee Jim isn't the only visitor, both Mr. and Mrs. Whaley, a young girl, and even the family dog have been known to make appearances from beyond the grave. The house is so thoroughly spooky that, according to TIME, in the 1960s, the U.S. Commerce Department classified the Whaley House as haunted.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 2,
        "qty": 0,
        "name": "House of Death",
        "location": "New York",
        "img": ["house-of-death.jpg"],
        "price": 1800000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "New York's Greenwich Village has some of the most desirable real estate in the world, save for one brownstone on West 10th Street. Known as The House of Death, the townhouse is said to be haunted by the ghosts of 22 people who lived or died within its walls, including that of a 6 yearold girl who was beaten to death by her adopted father. ",
        "Rooms": 7,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 3,
        "qty": 0,
        "name": "Winchester Mystery House",
        "location": "California",
        "img": ["winchesterhouse.jpeg"],
        "price": 655000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "According to legend, the rambling Victorian mansion that sits on a busy street in San Jose, California, is haunted by the ghosts of everyone killed by a Winchester rifle.",
        "Rooms": 160,
        "Bathrooms": 13,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 4,
        "qty": 0,
        "name": "Biltmore, Asheville",
        "location": "North Carolina",
        "img": ["biltmorehotel_interior.jpeg"],
        "price": 2500000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "While nothing completely nefarious seems to have happened on the estate, the home's former owners seem to remain very active, even in the afterlife. Visitors have claimed to hear a woman's voice, possibly Vanderbilt's wife, Edith, calling his name, and some say they've spotted some ghostly apparitions. The estate also features a number of hidden doors and passageways, adding to the home's overall spook- factor.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 5,
        "qty": 0,
        "name": "The Sallie House",
        "location": "Atchison, Kansas",
        "img": ["salliehouse.png"],
        "price": 457000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "This unassuming home in Kansas is rumored to be the dark lair for a demon who takes on the form of a little girl because of a family's bizarre experiences there. In the early '90s, new renters Debra and Tony Pickman claimed they saw strange occurrences in the house, including lights flickering, apparitions, possessions, unexplained voices, and strange scratches, marks, and burns on their bodies. These occurrences seem to have been the work of a ghost of a young girl, named Sallie. Former renters Bobby and Colleen Humbard and their daughter Heather also claimed to have seen or heard Sallie, whom Heather claimed was her imaginary friend. But apparently, Sallie isn't some harmless ghost. Theories around her malevolent presence in the house, as well as some evidence of Satanic rituals in the basement, suggest that Sallie is, in fact, a demon disguised as a young girl.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 6,
        "qty": 0,
        "name": "Miami Biltmore Hotel",
        "location": "Coral Gables, Florida",
        "img": ["biltmorehotel.jpeg"],
        "price": 2000000,
        "description": "With a timeless appeal and style, The Biltmore Hotel is Miami’s most elegant National Historic Landmark. Spanning over 150 acres of tropical landscape, our 271-room resort, includes 174 suites and features spectacular Mediterranean architecture with Italian, Moorish and Spanish influences.",
        "story": "he Biltmore Hotel in Coral Gables wasn't always a hotel, It was built in 1926 by a young developer named George Merrick. Known as the founder of Coral Gables. The hotel became a place to host glamorous fashion shows, galas, golf tournaments and water shows in what was then the largest pool in the world. At a loud party on the 13th floor of the hotel, a gangster named Thomas Fatty Walsh was shot and killed by another gangster. That murder yielded a lot of ghost rumors over the years. Then World War II happened and the federal government transformed the Biltmore into a military hospital. Once the war was over, it continued being a hospital for veterans. In 1952, the University of Miami made the Biltmore its first home. When the hospital closed in 1968, the Biltmore became an abandoned shell. ",
        // "story": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea. It all began when young actress-poet Jan Bartell moved with her husband into the old Greenwich Village Townhouse once inhabited by Mark Twain.  At first there were only the strange phenomena of unexplained shadows and sounds, and a presence that seemed to clutch at her in the dark. Then the deaths started, claiming one after another of the building's occupants. This is the story of Jan Bartell's discovery of a diabolical possession she first could not believe, then could not deny. It is the story of her fight against it, and her eventual flight from it.Jan Bartell's flight was in vain. One month after finishing this extraordinary true story, the author was found dead, and the pattern of horror was complete.",
        "Rooms": 271,
        "Bathrooms": 174,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 7,
        "qty": 0,
        "name": "House am See",
        "location": "Germany",
        "img": ["huisaanzee.jpg"],
        "price": 100000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "Boothouse. With a history reaching back to 1836, when it was first settled, it is not surprising that the City of Crystal Lake, Illinois, claims its fair share of ghost stories and reports of paranormal activity. According to local stories, the Palmer House is the center of ghostly activities such as the sounds of children stomping on the floor, scratching at the door and crying. Locals report seeing apparitions of children's faces appearing periodically in the windows in the basement. According to hauntedhovel.com, the faces of the children have appeared on a select number of photographs. The stories of the hauntings stem from the history of the house, which was built in 1858. Through the years, the house was passed down through the Palmer family and eventually sold. Reportedly, one of the house's owners ran an orphanage there where he beat and allegedly killed some of the children.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 8,
        "qty": 0,
        "name": "Castle",
        "location": "Savannah, Georgia",
        "img": ["castle.jpg"],
        "price": 434000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "Castle story. Savannah is widely known as the most haunted city in America. Walk into any historic building or cemetery in Savannah and you may catch sight of ghostly presences surrounding you.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 9,
        "qty": 0,
        "name": "The Castle",
        "location": "Upstate New York",
        "img": ["mansion_newyork.png"],
        "price": 115000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "Known around town as The Castle, this abandoned mansion looks straight out of a horror movie. ",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 10,
        "qty": 0,
        "name": "Come Home",
        "location": "San Diego",
        "img": ["home.jpg"],
        "price": 3500000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "The child on the doorstep says enough. Children are creepy as are houses.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 11,
        "qty": 0,
        "name": "Cahawba",
        "location": "Alabama",
        "img": ["old-cahawba-alabama.png"],
        "price": 666000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "Alabama's first capital and famous ghost town takes its name from the state's longest river, situated at the confluence of the Cahaba and the Alabama. It was abandoned after the Civil War, and its empty buildings, slave burial ground, and eerie cemeteries are now popular settings for ghost tours and stories of paranormal activity.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 12,
        "qty": 0,
        "name": "The Driskill",
        "location": "Austin, Texas",
        "img": ["TheDriskill.png"],
        "price": 3250000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "The Driskill is a majestic Romanesque hotel with modern rooms and an iconic brick facade, drawing Europeans tourists and wedding parties since 1886. It's a true Austin landmark—and according to some, a true hot-spot for ghosts. Travelers have noted eerily abnormal sounds through its ornate corridors, as well as phantom sightings of the hotel’s namesake, Jesse Driskill, whose portrait still hangs in the lobby. They say Driskill never recovered from the heartbreak of losing his hotel in a high-stakes poker game, and honestly, we get it: This hotel is a hard one to say goodbye to.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 13,
        "qty": 0,
        "name": "The Blue mansion",
        "location": "Scotland",
        "img": ["livingroom.jpg"],
        "price": 3540000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 14,
        "qty": 0,
        "name": "Cairndhu House",
        "location": "Larne, Northern Ireland.",
        "img": ["cairndhuhouse.png"],
        "price": 3500000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "Cairndhu House is a crumbling Victorian mansion located off the Coast Road in Carfunnock Country Park, Larne, Northern Ireland. It was built at some point after 1878, as a summer residence for the wealthy Scottish textile industrialist, Stewart Clark, who had married a young woman from Larne.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 15,
        "qty": 0,
        "name": "Lost place",
        "location": "San Diego",
        "img": ["livr7.jpg"],
        "price": 3500000,
        "story": "The manor speaks greatly to the imagination, and there are several reasons for that. One is that it has been abandoned for a long time and there are rumours that’s because it’s a haunted house.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 16,
        "qty": 0,
        "name": "Hotel Galvez ",
        "location": " Galveston",
        "img": ["livingroom2.jpg"],
        "price": 280000,
        "description": "Lovely house, childfriendly neighboorhood, restaurants, schools",
        "story": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    }
]

export default products

