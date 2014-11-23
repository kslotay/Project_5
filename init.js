//Gameplay object containing commands and other gameplay parameters
var Gameplay = {};

//Global player inventory array
var player_inventory = [];

//Map array
var mapArray = [];

//Location inventory array
var invArray = [];

//Global location array
var loc = [];

function inventory_item() {
	this.inventory_name = "";
	this.inventory_q = 0;
}

function initialize_Game() {
	//Gameplay commands
	Gameplay.cmd = ["n", "e", "s", "w", "look", "take", "unlock", "help", "climb", "eat", "inventory", "clear", "listen","cheatmode","sarcasm","w**dman","007"];
	//Game points
	Gameplay.points = 0;
	//cheatmode
	Gameplay.cheatmode = 0;
	//Command descriptions, used for help
	Gameplay.cmd_desc = ["Go North","Go East","Go South","Go West","Look around","Take object","Unlock door","Shows help","Climb","Eat food","Check Inventory","Clear display box","Listen to radio (if applicable)"];
	
	//Inventory items
	var food = new inventory_item();
	food.inventory_name = "Food";
	player_inventory.push(food);
	
	var lock_picks = new inventory_item();
	lock_picks.inventory_name = "Lock Pick(s)";
	player_inventory.push(lock_picks);
	
	var rocket_launcher = new inventory_item();
	rocket_launcher.inventory_name = "RPG (Rocket Launcher)";
	player_inventory.push(rocket_launcher);
	
	var gold = new inventory_item();
	gold.inventory_name = "Gold Coins";
	player_inventory.push(gold);
}

//Populates the command textbox datalist
function populate_CmdList() {
	var txtCommand_list = document.getElementById("txtCommand_list");
	for (i = 0, len = Gameplay.cmd.length; i < len; i++) {
		var txtCommand_item = document.createElement("option");	
		var cmd_name = capitaliseFirstLetter(Gameplay.cmd[i]);
		
		txtCommand_item.value = cmd_name;
		txtCommand_item.text = cmd_name;
		
		txtCommand_list.appendChild(txtCommand_item);
	}
}
	
//Executed on page load
function initialize_page() {
	initialize_Game();
	initialize_Locations();
	populate_CmdList();
	//Location.draw_Map();
	current_loc = 0;
	changeBGImage(0);
	btn_set();
	update_display_msg(1);	
}