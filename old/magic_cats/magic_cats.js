var idleWitch;
var happyWitch;

var daisyCat;
var peonyCat;
var sunflowerCat;

var fairy1;
var fairy2;
var fairy3;

var mermaid;
var mermaid2;
var selkie;

var pegasus;
var unicorn;

var garden;
var lake;
var forest;
var garden_icon;
var lake_icon;
var forest_icon;

var prev;

var garden_cat = true;
var lake_cat = true;
var forest_cat = true;
let happy_witch = false;

var remainingCatsLake = 3;
var remainingCatsForest = 5;
var remainingCatsGarden = 3;
var new_cats = 0;
var deliveredCats = 0;

var grade;

//preload
function preload() {
  soundFormats("mp3");
  enter_sound = loadSound("sounds/enter_sound.mp3");
  collect_sound = loadSound("sounds/collect_sound.mp3");
  give_sound = loadSound("sounds/give_sound.mp3");
  end_sound = loadSound("sounds/end_sound.mp3");

  idleWitch_01 = loadImage("images/catwitch_idle_01.png");
  idleWitch_02 = loadImage("images/catwitch_idle_02.png");
  idleWitch = loadAnimation(idleWitch_01, idleWitch_01, idleWitch_01, idleWitch_02, idleWitch_02, idleWitch_02);
  happyWitch_01 = loadImage("images/catwitch_happy_01.png");
  happyWitch_02 = loadImage("images/catwitch_happy_02.png");
  happyWitch = loadAnimation(happyWitch_01, happyWitch_01, happyWitch_01, happyWitch_02, happyWitch_02, happyWitch_02);

  daisyCat_01 = loadImage("images/daisy_01.png");
  daisyCat_02 = loadImage("images/daisy_02.png");
  daisyCat = loadAnimation(daisyCat_01, daisyCat_01, daisyCat_01, daisyCat_02, daisyCat_02, daisyCat_02);
  peonyCat_01 = loadImage("images/peony_01.png");
  peonyCat_02 = loadImage("images/peony_02.png");
  peonyCat = loadAnimation(peonyCat_01, peonyCat_01, peonyCat_01, peonyCat_02, peonyCat_02, peonyCat_02);
  sunflowerCat_01 = loadImage("images/sunflower_01.png");
  sunflowerCat_02 = loadImage("images/sunflower_02.png");
  sunflowerCat = loadAnimation(sunflowerCat_01, sunflowerCat_01, sunflowerCat_01, sunflowerCat_02, sunflowerCat_02, sunflowerCat_02);

  fairy1_01 = loadImage("images/fairy_01.png");
  fairy1_02 = loadImage("images/fairy_02.png");
  fairy1 = loadAnimation(fairy1_01, fairy1_01, fairy1_01, fairy1_02, fairy1_02, fairy1_02);
  fairy2_01 = loadImage("images/fairy2_01.png");
  fairy2_02 = loadImage("images/fairy2_02.png");
  fairy2 = loadAnimation(fairy2_01, fairy2_01, fairy2_01, fairy2_02, fairy2_02, fairy2_02);
  fairy3_01 = loadImage("images/fairy3_01.png");
  fairy3_02 = loadImage("images/fairy3_02.png");
  fairy3 = loadAnimation(fairy3_01, fairy3_01, fairy3_01, fairy3_02, fairy3_02, fairy3_02);

  mermaid_01 = loadImage("images/mercat_02.png");
  mermaid_02 = loadImage("images/mercat_01.png");
  mermaid = loadAnimation(mermaid_01, mermaid_01, mermaid_01, mermaid_02, mermaid_02, mermaid_02);
  mermaid2_01 = loadImage("images/mercat2_01.png");
  mermaid2_02 = loadImage("images/mercat2_02.png");
  mermaid2 = loadAnimation(mermaid2_01, mermaid2_01, mermaid2_01, mermaid2_02, mermaid2_02, mermaid2_02);
  selkie_01 = loadImage("images/selkie_01.png");
  selkie_02 = loadImage("images/selkie_02.png");
  selkie = loadAnimation(selkie_01, selkie_01, selkie_01, selkie_02, selkie_02, selkie_02);

  pegasus_01 = loadImage("images/pegacat_01.png");
  pegasus_02 = loadImage("images/pegacat_02.png");
  pegasus = loadAnimation(pegasus_01, pegasus_01, pegasus_01, pegasus_02, pegasus_02, pegasus_02);
  unicorn_01 = loadImage("images/unicat_01.png");
  unicorn_02 = loadImage("images/unicat_02.png");
  unicorn = loadAnimation(unicorn_01, unicorn_01, unicorn_01, unicorn_02, unicorn_02, unicorn_02);

  win_01 = loadImage("images/win.png");
  win_02 = loadImage("images/win_02.png");
  end = loadAnimation(win_01, win_01, win_01, win_02, win_02, win_02);

  garden = loadImage("images/garden_bg.png");
  lake = loadImage("images/lake_bg.png");
  forest = loadImage("images/forest_bg.png");

  help_icons = loadImage("images/help_icons.png");
  garden_icon = loadImage("images/garden.png");
  lake_icon = loadImage("images/lake.png");
  forest_icon = loadImage("images/forest.png");
  garden_iconb = loadImage("images/gardenb.png");
  lake_iconb = loadImage("images/lakeb.png");
  forest_iconb = loadImage("images/forestb.png");
  cat_icon = loadImage("images/cat_icon.png");
}

function setup() {
  idleWitch_01.resize(windowHeight / 2, 0);
  idleWitch_02.resize(windowHeight / 2, 0);
  happyWitch_01.resize(windowHeight / 2, 0);
  happyWitch_02.resize(windowHeight / 2, 0);
  daisyCat_01.resize(windowHeight / 2.2, 0);
  daisyCat_02.resize(windowHeight / 2.2, 0);
  peonyCat_01.resize(windowHeight / 1.8, 0);
  peonyCat_02.resize(windowHeight / 1.8, 0);
  sunflowerCat_01.resize(windowHeight / 1.8, 0);
  sunflowerCat_02.resize(windowHeight / 1.8, 0);
  fairy1_01.resize(windowHeight / 4, 0);
  fairy1_02.resize(windowHeight / 4, 0);
  fairy2_01.resize(windowHeight / 4, 0);
  fairy2_02.resize(windowHeight / 4, 0);
  fairy3_01.resize(windowHeight / 4, 0);
  fairy3_02.resize(windowHeight / 4, 0);
  mermaid_01.resize(windowHeight / 2, 0);
  mermaid_02.resize(windowHeight / 2, 0);
  mermaid2_01.resize(windowHeight / 2, 0);
  mermaid2_02.resize(windowHeight / 2, 0);
  selkie_01.resize(windowHeight / 2, 0);
  selkie_02.resize(windowHeight / 2, 0);
  pegasus_01.resize(windowHeight / 1.5, 0);
  pegasus_02.resize(windowHeight / 1.5, 0);
  unicorn_01.resize(windowHeight / 1.5, 0);
  unicorn_02.resize(windowHeight / 1.5, 0);
  win_01.resize(windowHeight, 0);
  win_02.resize(windowHeight, 0);

  help_icons.resize(windowHeight, 0);
  garden_icon.resize(windowHeight / 10, 0);
  lake_icon.resize(windowHeight / 10, 0);
  forest_icon.resize(windowHeight / 10, 0);
  garden_iconb.resize(windowHeight / 10, 0);
  lake_iconb.resize(windowHeight / 10, 0);
  forest_iconb.resize(windowHeight / 10, 0);
  cat_icon.resize(windowHeight / 18, 0);

  createCanvas(windowHeight, windowHeight * .98);
  background(100);
  var manager = new SceneManager();
  manager.wire();
  manager.addScene(Intro);
  manager.addScene(Home);
  manager.addScene(Garden);
  manager.addScene(Lake);
  manager.addScene(Forest);
  manager.addScene(Help);
  manager.addScene(Win);
  manager.showScene(Intro);
}
