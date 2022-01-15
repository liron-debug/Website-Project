using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WonderLandServer.Data;

namespace WonderLandServer.Models
{
    public static class DBProductsInitializer
    {
        public static void Seed(WonderLandServerContext context)
        {
            if (!context.Products.Any())
            {
                context.AddRange
                    (

                    new Product
                    {

                        category = "1",
                        img = "Images/furniture-table.jpg",
                        price = 159.00f,
                        title = "Wood Coffee Table",
                        description = "Lacquered acacia wood coffee table in a distressed finish featuring a round tabletop with a lipped edge and carved dowel legs. This custom furniture piece will be made to order just for you. Two people recommended for assembly."
                    },
                    new Product
                    {

                        category = "1",
                        img = "Images/furniture-nightstand.jpg",
                        price = 78.99f,
                        title = "Nightstand",
                        description = "Minimalism with mid-century modern-inspired details, this mango wood nightstand shows off a rich grain along a pared back silhouette. Angular top drawer with a round knob sits atop a dowel base with a bar rest along middle. This custom furniture piece will be made to order just for you."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-dresser.jpg",
                        price = 186.00f,
                        title = "4 Drawer Dresser",
                        description = "Modern-boho dresser, cut tall made with a mango wood frame that captures a rich, swirling grain along the four-drawer construction with two knobs on each. Featuring strands of jute paneling the top drawer for a textural touch we love. Equipped with metal channel drawer glides. Propped on a standing mid-century modern-inspired dowel leg base. This custom furniture piece will be made to order just for you. Two people recommended for assembly."

                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-bed.jpg",
                        price = 499.00f,
                        title = "Bohemian Platform Bed",
                        description = "Carved from sustainable mango wood, our exclusive Bohemian Platform Bed adds an understated rustic touch. Complete with a sturdy slatted design so no box spring is needed! Mattress + bedding sold separately."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-bookshelf.jpg",
                        price = 349.00f,
                        title = "Step Bookshelf",
                        description = "Create endless arrangements with this ultra-versatile bookshelf, featuring four layers of steps with open compartments. Perfect for holding your favorite books, expansive record collection, plants and little trinkets in and on the steps. Assembly required."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-cabinet.jpg",
                        price = 899.00f,
                        title = "Storage Cabinet",
                        description = "Store textiles, games, dinnerware, books and so much more in this rattan cabinet. Duo-tone design features contrasting strands of rattan arching along doors with a vintage-inspired look that channels signatures of bohemian aesthetics. Two doors swing out to reveal four shelves inside. This custom furniture piece will be made to order just for you. Assembly required."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-sideTable.jpg",
                        price = 179.00f,
                        title = "Wood Side Table",
                        description = "Rustic-boho side table made from mismatched pieces of wood assembled together to form a block. Gives any space an artfully edgy look we love, with an eclectic range of finishes and tones patched into one. This custom furniture piece will be made to order just for you."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-vanity.jpg",
                        price = 199.00f,
                        title = "Vanity",
                        description = "Rustic minimalism brings bohemian energy to this mango wood vanity. Made from mango wood in a natural finish with a light variation of tone, it features a flat tabletop with attached mirror - the perfect blank space for getting ready every morning. Available exclusively at Urban Outfitters."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-greenCabinet.jpg",
                        price = 699.00f,
                        title = "Storage Cabinet",
                        description = "Elegant standout storage cabinet with a color-pop finish made from MDF and birch wood veneer. 2-door design features a trio of interior shelves for showing off your favorite things and 2 pull-out drawers with wooden drawer glides for tucking away your less photogenic goods. Cabinet features arching silhouette and room for storing books, trinkets, dinnerware and more! Assembly required."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-sofa.jpg",
                        price = 879.00f,
                        title = "Leather Sleeper Sofa",
                        description = "Our extra-large Greta legless sleeper sofa reclines from a couch to a bed in mere seconds, upholstered with super soft recycled leather so it's good for you and the planet, too! Features a sturdy metal frame that adjusts from fully upright to half-way reclined to fully flat - covered with cushy pintucked cushions filled with recycled foam. Only available right here at Urban Outfitters."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-desk.jpg",
                        price = 799.00f,
                        title = "Desk",
                        description = "Keep your at-home workspace tidy with this boho-modern desk. Made from mango wood with a trio of top drawers and a base cabinet on the side, topping a sleek metal base. Drawer and cabinet doors feature woven panels for a rustic look we love. Equipped with metal drawer glides. Two people recommended for assembly."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-hooper.jpg",
                        price = 279.00f,
                        title = "Hopper DayBed",
                        description = "Seriously versatile daybed crafted from durable wood in a classic silhouette that works in any space. With a slotted top, it can work as a modern bench, though we recommend our Rohini Daybed Cushion (not included) to make it a comfy bed!"
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-martaTable.jpg",
                        price = 299.00f,
                        title = "Marta Ottoman",
                        description = "Part of our modernly minimal Marte collection, this versatile ottoman is the perfect piece to accent any space. Crafted from natural sustainable wood and rattan accents and found exclusively at NEST Interiors."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-mirror.jpg",
                        price = 159.00f,
                        title = "Floor Mirror",
                        description = "Abstract leaning floor mirror with a curving shape that nestles into a pine wood sphere at base. Oversized mirror opens up your space with a boldly minimal look. Mounts to wall."
                    },
                    new Product
                    {
                        category = "1",
                        img = "Images/furniture-GreenSofa.jpg",
                        price = 699.00f,
                        title = "Rubberwood Sofa",
                        description = "Offering a fresh take on minimalist aesthetics, this cushioned sofa features a modern design with upholstery at arms, seat and back, propped on a rubberwood frame for a fresh look."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-dot.jpg",
                        price = 129.00f,
                        title = "Dot Duvet Cover",
                        description = "Sleep on a cloud with this cotton duvet cover, accented with tufted dots allover. Made in a crisp cotton weave with fluffy, tufted dot embroidery along bottom edge, fully backed with flat cotton sheeting that's so soft against skin. Finished with hidden button closure along edge for easy removal to throw in the wash. "
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-tufted.jpg",
                        price = 129.00f,
                        title = "Tufted Duvet Cover",
                        description = "Cotton woven duvet cover featuring tonal tufted detailing all over for a minimalist’s take on texture. Topped with a hidden button closure to easily remove and toss in the wash."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-stems.jpg",
                        price = 149.00f,
                        title = "Stems Duvet Set",
                        description = "Coordinate your bedding with this duvet set in a delicate floral pattern. Comes with a duvet cover + pillowcases. Made in a soft weave, the pillowcases feature side slits and the duvet cover features a hidden button closure along edge, to easily remove it all and toss in the wash."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-PatchQuilt.jpg",
                        price = 129.00f,
                        title = "Patchwork Quilt",
                        description = "Inspired by rustic Americana, this patchwork printed quilt features a cotton weave that mixes florals, ginghams, checks and solids for a folky boho feel. Backed with an allover geo print and topped with color pop stitching."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-pillow.jpg",
                        price = 49.00f,
                        title = "Body Pillow",
                        description = "Textural body pillow offers a major boho moment featuring shag tufting in a geometric design and slub weave, complete with chunky tassel trim at sides."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-blanket.jpg",
                        price = 49.00f,
                        title = "Throw Blanket",
                        description = "Cozy 100% cotton throw blanket made from a textural waffle knit for a dynamic look, finished with raw, fringed-trim edges."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-tassel.jpg",
                        price = 119.00f,
                        title = "Cotton Tassel Set",
                        description = "Our super soft-washed cotton duvet cover, now with tassel-trimmed edges for a minimal-boho look. Equipped with hidden side buttons for easily removing from your duvet insert to wash; duvet insert sold separately."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-floral.jpg",
                        price = 139.00f,
                        title = "Floral Cotton Set",
                        description = "Inspired by countryside florals scattered along sunny meadows, this duvet cover features embroidery allover the soft cotton weave. Backed with flat cotton sheeting and featuring a hidden button closure to easily remove and toss in the wash. Duvet insert and shams sold separately."
                    },
                    new Product
                    {
                        category = "2",
                        img = "Images/bedding-knot.jpg",
                        price = 129.00f,
                        title = "Floral Knot Set",
                        description = "With a vintage-inspired floral pattern rendered with a soft, delicate look, this duvet cover offers a refreshing take on a feminine look. Made from a crisp cotton weave with knotted corners, this duvet cover features a hidden button closure along edge for easy removal."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-toothbrush.jpg",
                        price = 9.00f,
                        title = "Toothbrush Holder",
                        description = "Prop up your toothbrush in the dark with the help of this glow-in-the-dark Smiski figure. The strange little creatures that occupy corners are here to light the way to dental hygiene."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-hamper.jpg",
                        price = 59.00f,
                        title = "Rolling Hamper",
                        description = "Store blankets or keep your laundry in one place with this rolling hamper! Complete with 4 wheels + handles, so it's easy to transport wherever."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-storage.jpg",
                        price = 219.00f,
                        title = "Bathroom Storage Shelf",
                        description = "Organize towels, toiletries and more with this 5-tiered storage shelf from our UO-exclusive Amelia collection. Utilizing a mid-century modern look with 5 compartments and tapered legs. Assembly required."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-basket.jpg",
                        price = 59.00f,
                        title = "Basket Set",
                        description = "Perfect for storing blankets, magazines and trinkets out of sight, this UO-exclusive macramé basket is so boho. Featuring a canvas lining with knotted macramé strands woven around outer in a trio of sizes made to fit your space just right."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-organizer.jpg",
                        price = 39.00f,
                        title = "Make-Up Organizer",
                        description = "Showcase your favorite beauty buys in this polished organizer, featuring divided compartments for all your essentials. Sloping metal structure features a polished finish with glass panes and mirrored base."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-doorstorage.jpg",
                        price = 69.00f,
                        title = "Over The Door Storage",
                        description = "Over-the-door organizer featuring ample storage space with two natural rubberwood shelves and a color pop metal wire frame with two racks for towels. Perfect for storing all your essentials in the bathroom, bedroom, kitchen or dorm!"
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-trash.jpg",
                        price = 34.00f,
                        title = "Wooven Trash Can",
                        description = "Basket trash can made from intricately woven rattan for a vintage look, in a small scale that fits right into any corner."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-StorageCabinet.jpg",
                        price = 129.00f,
                        title = "Bamboo Storge Bin",
                        description = "Store spare linens, toiletries and more in this bamboo storage bin. Crafted from slatted bamboo with a hinging lid and standing construction. Some assembly required."
                    },
                    new Product
                    {
                        category = "3",
                        img = "Images/bath-mat.jpg",
                        price = 39.00f,
                        title = "Round Bath Mat",
                        description = "Bring a whimsically plush look to your space with this round bath mat featuring a high-pile shag with multicolor edge. 100% cotton"
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-basket.jpg",
                        price = 39.00f,
                        title = "Hanging Basket",
                        description = "Wood + cotton netted 3-tiered hanging basket, found exclusively at UO. Three concentric baskets in a tiered construction, perfect for displaying fruit + plants in the kitchen with cotton net for base + edges with rounded wooden structure. "
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-cuttingBoard.jpg",
                        price = 34.00f,
                        title = "Cutting Board",
                        description = "These unique items are a fun and easy way to infuse an ordinary room with effortless originality, and a portion of each purchase goes toward supporting art communities worldwide. These cutting boards feature a wild leopard print designed by Amy Sia, with a 1” perforation for easy handling and storage. Printed side is decorative and features a semi-gloss finish. Use the unprinted birch wood side for food prep. Food safe on unprinted side; not suitable for use in the dishwasher, microwave or oven."
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-set.jpg",
                        price = 36.00f,
                        title = "Utensil Set",
                        description = "Coordinate your countertop essentials with this utensil set by Gibson Home. Featuring must-haves for whipping up your best recipes, including silicone spoons and spatulas with wood handles, housed in a matching ceramic utensil holder. Food safe; not suitable for use in the dishwasher, microwave or oven."
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-salt&peper.jpg",
                        price = 20.00f,
                        title = "Salt & Pepper Shaker Set",
                        description = "Salt and pepper shaker set made from rainbow-hued layers of bamboo with curving shaping."
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-teaset.jpg",
                        price = 16.00f,
                        title = "Tea Infuser & Cup Set",
                        description = "Bring a boho feel to tea time when you create a perfectly steeped cup of loose leaf tea thanks to this ceramic infusing set. Comes with an infuser featuring extended arms to nestle perfectly over the included cup. Both are rendered in a natural ceramic finish with a speckled glaze interior."
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-dishDry.jpg",
                        price = 34.00f,
                        title = "Folding Dish Rack",
                        description = "No need to be Xtra - the Xdry dish rack unfolds to sit on an included microfiber mat for maximum absorption. Steel rack holds up to 19 plates with an optional swing-out stemware holder that dries 4 of your fanciest (and most delicate) glasses at a time. Just toss the rack in the dishwasher + mat in the machine for a quick, convenient wash! Plus, both are naturally BPA-free and fold up for compact storage."
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-jar.jpg",
                        price = 37.00f,
                        title = "Bamboo Jar Set",
                        description = "Set of four glass jars with bamboo lids and an airtight seal, perfect for storing snacks, baking essentials, nuts and more."
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitcchen-DishSet.jpg",
                        price = 79.00f,
                        title = "All In One Box Set",
                        description = "Get all of your dishware essentials with this apartment in a box set! Modern + eclectic design with everything you need for your perfect little apartment. Dinnerware is dishwasher + microwave safe."
                    },
                    new Product
                    {
                        category = "4",
                        img = "Images/kitchen-berry.jpg",
                        price = 12.00f,
                        title = "Berry Colander Dish",
                        description = "Pick berries from your garden, give them a rinse and enjoy with this ceramic colander dish, designed to look like a berry carton, with more sustainable function! Open design features slits along bottom edge to drain water."
                    }

                    );

                context.SaveChanges();
            }
        }
    }
}
