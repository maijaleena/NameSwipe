import Country from '../models/country';
import Name from '../models/name';

export const COUNTRIES = [
  new Country('c1', 'Finland', 'blue'),
  new Country('c2', 'India', 'orange'),
  new Country('c3', 'Palestine', 'red'),
  new Country('c4', 'Burma/Myanmar', 'yellow'),
  new Country('c5', 'United States', 'white'),
  new Country('c6', 'France', 'green'),
  new Country('c7', 'UK', 'pink'),
  new Country('c8', 'Sweden', 'purple')
];

export const NAMES = [
  new Name('c1','Emeline','Finland','Girl',"Émeline is a French feminine form of the masculine name Emil. Émeline means “rival”."),
  new Name('c1',"Freja",'Finland','Girl', "Freja is a younger Scandinavian form of the Old Norse name Freyja, the Goddess of love, beauty, war and death in Norse mythology.Freja means “lady” or “mistress” (from Old Norse “frauja” = lord/master)."  ),
  new Name('c1',"Elea",'Finland','Girl', "Elea is a short form of the name Eleanor. Eleanor derived from Eleanor of Aquitaine, queen of the 12th century, original spelling was Aliénor. Eleonore is of Old-Provencial, Arabic and Greek origin and derived from the name Helen."   ),
  new Name(['c1'], "Maj",'Finland','Girl',"Maj means “sea of bitterness”, “drop of the sea”, “star of the sea”, “rebelliousness”, “exalted one”, “beloved” and “wished for child” (from Maria)."    ),
  new Name('c1',"Luka",'Finland','Unisex',"Luka means “from Lucania” (a region in southern Italy) and “light”, “bringer of light” or “bright one” (from ancient Greek “leukós/λευκός” = bright/light/white and Latin “lux” = light)."),
  new Name('c1',"Elja",'Finland','Unisex',"Elja is a Finnish form of the Hebrew name Elijah. The girl’s name Elja is a Scandinavian name of Old Norse origin."),
  new Name('c1',"Elias", 'Finland','Boy',"Elias is a variant of the biblical name Elijah, which derived from the Hebrew name ‘Eliyyahu (אֱלִיָּהוּ). In the Old Testament Elijah was a Hebrew prophet."),
  new Name('c1',"Oskar",'Finland','Boy',"Oskar is a German, Polish, Slovene and Scandinavian form of the name Oscar, which may derive from the Old English name Osgar or the Old German name Ansgar or the Old Norse name ÁsgæiRR. "),
  new Name('c1',"Onni",'Finland','Boy',"Onni means “lucky”, “luck” or “happiness” in Finnish."),
  new Name('c1',"Alvar",'Finland','Boy',"Alvar means “elf” (from Old Norse “alfr” or Old High German “alf”) and “army” (from Old Norse “arr” or Old High German “heri”)."),
  new Name('c2',"Kiaan",'India','Boy',"Ancient or king"),
  new Name('c2',"Aahan",'India','Boy',"Alvar means “elf” (First ray of light, dawn, sunrise)."),
  new Name('c2',"Mahir",'India','Boy',"Expert")

]
