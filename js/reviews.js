document.addEventListener("DOMContentLoaded", function () {
    // Fake trending reviews pool
    const trendingReviews = [
        { location: "The Moon", review: '"Great for stargazing, but no Uber service. 3/5."' },
        { location: "Atlantis", review: '"Bring scuba gear. Or don\'t. Your call."' },
        { location: "The Backrooms", review: '"The vibes are liminal. The walls taste weird."' },
        { location: "The Death Star", review: '"Great food. Bad for planetary survival."' },
        { location: "A Parallel Universe", review: '"Something felt *off*, but I can’t figure out what."' }
    ];

    // Shuffle and pick 3 trending destinations
    const shuffledTrending = trendingReviews.sort(() => Math.random() - 0.5).slice(0, 5);
    document.getElementById("trend1").innerHTML = `<h4>${shuffledTrending[0].location}</h4><p>${shuffledTrending[0].review}</p>`;
    document.getElementById("trend2").innerHTML = `<h4>${shuffledTrending[1].location}</h4><p>${shuffledTrending[1].review}</p>`;
    document.getElementById("trend3").innerHTML = `<h4>${shuffledTrending[2].location}</h4><p>${shuffledTrending[2].review}</p>`;
    document.getElementById("trend4").innerHTML = `<h4>${shuffledTrending[3].location}</h4><p>${shuffledTrending[3].review}</p>`;
    document.getElementById("trend5").innerHTML = `<h4>${shuffledTrending[4].location}</h4><p>${shuffledTrending[4].review}</p>`;
});


document.getElementById("submitBtn").addEventListener("click", function () {
    const selectedLocation = document.querySelector('input[name="location"]:checked');
    alert("Now viewing Reviews for: " + selectedLocation.value);
    
    if (!selectedLocation) {
        alert("Please select a location to read reviews.");
        return;
    }

    // List of random fake names
    const fakeNames = [
        "Chadwick Nebulon", "Mildred Quantumson", "Zorp Blingus", "Dr. Eugene Spacefist",
        "Barbara Paradoxon", "Jenkins Von Backrooms", "Luna Eclipse-Smythe", "Boris Wormhole",
        "Xanthe Timeglitch", "Greg (But Not That Greg)", "Captain Dirk Starcrunch", "Elon Husk",
        "Velma Singularity", "Otis McGravity", "Sir Hoppington the 4th", "Rex Chrono",
        "Professor Zog", "Blorbo From The Moon"
    ];

    // Mapping of locations to reviews
    const reviews = {
        The_Moon: [
            "🌟🌟🌟 'Great views, but I jumped too hard and now I’m lost in space. Send help.'",
            "⭐⭐⭐ 'I came to the Moon for a relaxing getaway, but nobody told me about the dust storms. Everything I own is now covered in a fine layer of lunar dust, including my lungs. The lack of an atmosphere really does wonders for noise pollution though—it's so peaceful! Just me, the infinite void, and the constant existential dread of being one spacesuit malfunction away from instant death. Bring snacks; the local dining scene is nonexistent.'",
            "⭐⭐ 'Beautiful scenery, but absolutely NO infrastructure. I ordered an Uber from Moon Base Alpha and got hit with a $9.4 million surcharge. Even worse, my driver ghosted me—literally. Just disappeared into the abyss. The WiFi is also terrible. NASA, do better.'",
            "⭐⭐⭐⭐⭐ 'Perfect for introverts. Nobody here. No traffic. No annoying small talk with neighbors. Just you, the stars, and the eerie feeling that something is watching from the dark side. Don’t trust the footprints that aren’t yours.'",
            "⭐⭐⭐ 'Would love to give this place a higher rating, but the service is abysmal. Landed my spaceship, tried to check into a hotel, and there were literally no employees. No concierge, no room service, NOTHING. Ended up sleeping inside my space capsule like some kind of peasant.'"
        ],
        Atlantis: [
            "⭐⭐⭐⭐ 'Absolutely breathtaking scenery! The crystal-clear waters, the majestic ruins, the eerie whispers of an ancient civilization warning me to leave… truly a once-in-a-lifetime experience. Just be sure to bring your own oxygen supply, because despite what the tour guide said, ‘just breathe the water’ is NOT sound advice.'",
            "⭐⭐ 'Tour guide just said ‘blub blub’ and disappeared. Not informative.'",
            "⭐⭐⭐⭐ 'The seafood is way too fresh. I ordered calamari, and it WRIGGLED. The chef claimed it was a ‘cultural experience,’ but I think he just didn’t have the heart to kill it. I spent the rest of the night feeling deeply judged by my meal. Also, my hotel was just a barnacle-encrusted ruin with zero plumbing. Very authentic, but also very inconvenient.'",
            "⭐ 'Horrible experience. My phone fell into the coral reef and was immediately claimed by a passing mermaid. When I tried to get it back, she demanded a ‘trade’ and all I had was a granola bar. Now she has my iPhone and I have an ancient cursed amulet. Pretty sure I’m now bound to some kind of eldritch contract. Zero stars.'",
            "⭐⭐ 'The underwater palace is breathtaking! The locals, however, were less than welcoming. I tripped over a sacred coral and was immediately put on trial by a council of ancient fish priests. Managed to talk my way out of it, but I’m pretty sure they cursed my bloodline. Would not recommend.'",
        ],
        The_Backrooms: [
            "⭐⭐⭐ 'Walls taste like sadness. Would not recommend licking them.'",
            "⭐⭐ 'Weirdly, the longer you stay, the more it starts to feel like home. Sure, there’s no food, no water, and you’re constantly being followed by something just outside your field of vision, but the rent is cheap and I’ve got plenty of space. If anyone finds an IKEA in here, let me know.'",
            "⭐⭐⭐⭐ 'Liminal space vibes are 10/10. I think I saw God in a flickering lightbulb.'",
            "⭐ 'First of all, I did NOT book a trip here. I just no-clipped through the floor of my office building and suddenly found myself in this endless maze of musty yellow hallways. The fluorescent lights buzz like they're alive, and I could swear something is breathing just out of sight. Customer service was nonexistent, but at least I got 10,000 steps in. Would visit again, but preferably by choice next time.'",
            "⭐⭐⭐ 'I saw an IKEA in here, but the layout made even less sense than usual. Ended up lost in the couch section for three days. Employees were... not human.'"
        ],
        Deathstar: [
            "⭐⭐⭐⭐ 'The cafeteria is actually pretty great—way better than you'd expect for an evil space station. The breakfast burritos were top-tier. However, I was disappointed by the safety precautions. You’d think a place with such advanced technology would have better guardrails, but no, just endless pits leading into nothingness. Seriously, where is the OSHA compliance??'",
            "⭐ 'Ventilation system is *way* too accessible. Rebels snuck in and caused issues.'",
            "⭐ 'I was just here to install an HVAC system and accidentally stumbled across some guy in a black cape ranting about ruling the galaxy. Not sure what I walked into, but I don’t think I’ll be getting paid for this job. Also, the ventilation shafts are comically oversized—pretty sure I saw some rebels sneaking through one. Someone should really fix that.'",
            "⭐⭐⭐ 'Beautiful galaxy views, but my home planet was destroyed during my stay.'",
            "⭐⭐⭐⭐⭐ 'Excellent workplace for anyone looking to advance in a structured, authoritarian environment. The dress code is a bit rigid (all black everything), and the boss is known for his aggressive management style (force-choking underperforming employees), but the benefits are unbeatable. Plus, there’s a solid chance of getting a cool cybernetic upgrade if you play your cards right.'"
        ],
        Parallel_Universe: [
            "⭐⭐⭐ 'Everything felt *almost* normal, but my parents named me Greg.'",
            "⭐⭐ 'Alternate me was rich and laughed at me. 2/5, do not recommend.'",
            "⭐⭐ 'Water flows up in this universe. Very inconvenient for showering. Would not return.'",
            "⭐⭐⭐⭐ 'Instead of dogs, everyone has pet velociraptors. Very fun but dangerous.'",
            "⭐ 'Paid for a hotel, but this universe never invented beds. Slept in existential dread instead.'"
        ]
    };

    document.getElementById("trendingDestinations").style.display = "none";
    document.getElementById("trendingDestinations2").style.display = "none";

    // Get reviews for selected location & shuffle them
    let selectedReviews = reviews[selectedLocation.value];
    selectedReviews = selectedReviews.sort(() => Math.random() - 0.5).slice(0, 5);

    // Split the reviews into two separate groups
    const leftReviews = selectedReviews.slice(0, 3);
    const rightReviews = selectedReviews.slice(3, 5);

    // Assign a random fake name to each review
    const getRandomName = () => fakeNames[Math.floor(Math.random() * fakeNames.length)];

    // Populate the left column
    const reviewsContainerLeft = document.getElementById("reviewsContainerLeft");
    reviewsContainerLeft.innerHTML = leftReviews.map(review => `<p class="review"><strong>${getRandomName()}:</strong> ${review}</p>`).join("");

    // Populate the right column
    const reviewsContainerRight = document.getElementById("reviewsContainerRight");
    reviewsContainerRight.innerHTML = rightReviews.map(review => `<p class="review"><strong>${getRandomName()}:</strong> ${review}</p>`).join("");
});

