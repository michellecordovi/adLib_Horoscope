const nouns = ["catapult", "noodle", "potato", "cactus", "fluffernutter", "wiener", "googly eyes", "waffle iron", "sock puppet", "bumblebee", "schnitzel", "llama", "doorknob", "hula hoop", "gargoyle", "trampoline", "kazoo", "penguin", "pineapple", "spatula", "jellyfish", "trombone", "bouncy castle", "accordion", "werewolf", "rubber chicken", "toe", "disco ball", "snorkel", "slinky", "tutu", "pickle", "clown car", "rubber duck", "bubble wrap", "spaghetti", "unicorn", "waffle", "cheeseburger", "pretzel", "yo-yo", "booger", "mother", "ukulele", "taco", "dinosaur", "koala", "caterpillar", "blender", "boomerang", "pickleball"]

const adjectives = ["quirky", "zesty", "ludicrous", "spiffy", "dapper", "wacky", "groovy", "whimsical", "bumbling", "flamboyant", "cheeky", "stinky", "snazzy", "horrific", "jolly", "goofy", "quirky", "lively", "offbeat", "sprightly", "exuberant", "off-putting", "sexy", "kooky", "zippy", "bubbly", "frolicsome", "comical", "precious", "merry", "funky", "nutty", "absurd", "bonkers", "hilarious", "jubilant", "droll", "giddy", "playful", "rollicking", "chipper", "lighthearted", "hard", "chucklesome", "gleeful", "whimsical", "energetic", "shiny", "zany", "dreary", "uproarious"]

const verbs = ["bounce", "leap", "giggle", "dart", "shimmy", "twirl", "frolic", "skip", "gallop", "saunter", "meander", "somersault", "dash", "eat", "prance", "scamper", "hop", "juggle", "pirouette", "inhale", "romp", "shuffle", "lurch", "waddle", "trot", "toddle", "sprint", "squat", "frisk", "wander", "strut", "stroll", "glide", "slide", "slink", "tiptoe", "paddle", "swim", "dive", "float", "drift", "slither", "climb", "swing", "soar", "fly", "swoop", "barrel-roll", "pounce", "leapfrog", "stomp"]

const adverbs = ["swiftly", "happily", "gently", "quietly", "quickly", "briskly", "carefully", "eagerly", "gracefully", "cheerfully", "slowly", "softly", "steadily", "smoothly", "mysteriously", "lazily", "slightly", "playfully", "anxiously", "silently", "honestly", "angrily", "loudly", "proudly", "suddenly", "cautiously", "patiently", "freely", "reluctantly", "seriously", "excitedly", "fondly", "fiercely", "miserably", "brightly", "desperately", "easily", "faintly", "famously", "foolishly", "furiously", "hesitantly", "humbly", "inquisitively", "joyfully", "kindly", "naively", "oddly", "peacefully", "politely", "sadly", "warmly"]

let adLib =  ["This", "month,", "ZODIAC,", "you", "will", "feel", "exceptionally", "ADJECTIVE.", "The", "alignment", "of", "the", "stars", "suggests", "that", "it's", "a", 
"great", "time", "to", "VERB", "your", "NOUN.", "The", "ADJECTIVE", "weather", "will", "inspire", "you", "to", "VERB", "more", "ADVERB.", "At", "work,", "your", "NOUN", "will", "help", "you", "VERB", "challenges", "with", "ADJECTIVE", "determination.", "Colleagues", "will", "be", "drawn", "to", "your", "ADJECTIVE", "aura,", "helping", "you", "form", "new", "NOUN", "and", "partnerships.", "Financially,", "it's", "wise", "to", "be", "ADJECTIVE,", "as", "unexpected", "NOUN", "might", "come", "your", "way.", "In", "your", "personal", "life,", "consider", "planning", "a", "trip", "to", "a", "NOUN.", "This", "journey", "will", "provide", "NOUN", "and", "an", "opportunity", "for", "NOUN.",
"You", "might", "meet", "someone", "who", "VERB", "your", "passion", "for", "NOUN,", "leading", "to", "a", "ADJECTIVE", "connection.", "Health-wise,", "maintaining", "a", "ADJECTIVE", "diet", "and", "incorporating", "some", "ADJECTIVE", "exercise", "will", "keep", "you", "ADJECTIVE.", "The", "ADJECTIVE", "weather", "is", "perfect", "for", "outdoor", "NOUN,", "so", "take", "advantage", "of", "it", "to", "boost", "your", "NOUN.", "Overall,", "this", "period", "promises", "to", "be", "ADJECTIVE", "and", "ADJECTIVE", ".", "Embrace", "the", "changes,", "stay", "true", "to", "yourself,", "and", "let", "the", "cosmic", "NOUN", "guide", "you", "to", "new", "NOUN."]



//THIS IS THE CODE THAT WILL PROVIDE THE RANDOM INDEX TO SELECT A WORD AT RANDOM FROM THE ABOVE VARIABLES
function createRandIndex() {
     return Math.floor(Math.random() * 50);
}

function generateHoroscope(arr, zodiac) {
      while (arr.includes("NOUN") === true) {
            let i = arr.indexOf("NOUN")
            arr[i] = nouns[createRandIndex()];
            continue;
      };

      while (arr.includes("NOUN.") === true) {
            let i = arr.indexOf("NOUN.")
            arr[i] = nouns[createRandIndex()] + ".";
            continue;
      };

      while (arr.includes("NOUN,") === true) {
            let i = arr.indexOf("NOUN,")
            arr[i] = nouns[createRandIndex()] + ",";
            continue;
      };
      

      while (arr.includes("VERB") === true) {
            let i = arr.indexOf("VERB")
            arr[i] = verbs[createRandIndex()];
            continue;
      };

      while (arr.includes("ADJECTIVE") === true) {
            let i = arr.indexOf("ADJECTIVE")
            arr[i] = adjectives[createRandIndex()];
            continue;
      };

      while (arr.includes("ADJECTIVE.") === true) {
            let i = arr.indexOf("ADJECTIVE.")
            arr[i] = adjectives[createRandIndex()] + ".";
            continue;
      };

      while (arr.includes("ADJECTIVE,") === true) {
            let i = arr.indexOf("ADJECTIVE,")
            arr[i] = adjectives[createRandIndex()] + ",";
            continue;
      };

      while (arr.includes("ADVERB") === true) {
            let i = arr.indexOf("ADVERB")
            arr[i] = adverbs[createRandIndex()];
            continue;
      };

      while (arr.includes("ADVERB.") === true) {
            let i = arr.indexOf("ADVERB.")
            arr[i] = adverbs[createRandIndex()] + ".";
            continue;
      };

      while (arr.includes("ZODIAC,") === true) {
            let i = arr.indexOf("ZODIAC,")
            arr[i] = zodiac + ".";
      };

      console.log(arr.join(" "))
}

generateHoroscope(adLib, "Libra")


