//GENERAL USE FUNCTIONS			
//Changes the page background image
function changeBGImage(whichImage) {
	document.getElementById("page_body").className = "bg" + whichImage.toString();
}

//Capitalizes the first letter of a string
function capitaliseFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//Checks if enter key is pressed in the command text box
function enterKey_check(e) {
	var txtCommand = document.getElementById("txtCommand");
	if ((e.keyCode === 13) && (txtCommand.value != "")) {
		btnEnter_click();
	}
}

//BUTTON ENABLE/DISABLE:
//Disables indicated direction buttons
function btn_disable(button_d) {
	var btn_ = ""
	if (button_d === "all") {
		for (i = 0; i < 4; i++) {
			btn_ = document.getElementById("btn" + i);
			if (btn_.disabled === false) {
				btn_.disabled = true;
			}
		}
	}
	else {
		for (i = 0, len = arguments.length; i < len; i++) {
			btn_ = document.getElementById(arguments[i]);
			if (btn_.disabled === false) {
				btn_.disabled = true;
			}
		}
	}
}

//Enables indicated direction buttons
function btn_enable(button_e) {
	var btn_ = ""
	if (button_e === "all") {
		for (i = 0; i < 4; i++) {
			btn_ = document.getElementById("btn" + i);
			if (btn_.disabled === true) {
				btn_.disabled = false;
			}
		}
	}
	else {
		for (i = 0, len = arguments.length; i < len; i++) {
			btn_ = document.getElementById(arguments[i]);
			if (btn_.disabled === true) {
				btn_.disabled = false;
			}
		}
	}
}

//Enable/disable direction buttons according to current location	
function btn_set() {
	switch (current_loc) {
		case 0:
			if (loc[current_loc].loc_locked === true) {
				btn_disable("all");
			}
			else {
				btn_enable("btn0");
				btn_disable("btn1","btn2","btn3");
			}
			break;
		case 1:
			btn_enable("btn0","btn1");
			btn_disable("btn2","btn3");
			break;
		case 2:
			btn_enable("all");
			break;
		case 3:
			btn_enable("btn0","btn3");
			btn_disable("btn1","btn2");
			break;
		case 4:
			btn_enable("btn1","btn2");
			btn_disable("btn0","btn3");
			break;
		case 5:
			btn_enable("all");
			break;
		case 6:
			btn_enable("btn2","btn3");
			btn_disable("btn0","btn1");
			break;
		case 7:
			if ((loc[current_loc].loc_visited > 1) && (loc[8].loc_locked === true)) {
				btn_enable("btn2");
				btn_disable("btn0","btn1","btn3");
			}
			else {
				btn_enable("btn0","btn2");
				btn_disable("btn1","btn3");
			}
			break;
		case 8:
			btn_enable("btn1","btn2");
			btn_disable("btn0","btn3");
			break;
		case 9:
			btn_enable("btn0","btn1","btn3");
			btn_disable("btn2");
			break;
		case 10:
			btn_enable("btn3");
			btn_disable("btn1","btn2","btn3");
			break;
		case 11:
			btn_enable("btn2");
			btn_disable("btn0","btn1","btn3");
			break;
	}
}

//LOCATION/MAP/POINTS/TEXTAREA UPDATING:
//Update textarea

//Experimenting with map drawing using tiling
/*Location.draw_Map = function() {
	var mapContainer = document.getElementById("container");
	
	Location.mapArray = [
		[1,1,1,1,1,1,1,1],
		[7,7,7,7,7,7,7,7],
		[4,4,4,5,5,5,6,6],
		[4,4,4,5,5,5,6,6],
		[1,1,1,2,2,2,2,3],
		[1,1,1,2,2,2,2,3],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0]
		];

	for (var i=0; i < Location.mapArray.length; i++){
		for (var j=0; j < Location.mapArray[i].length; j++){
			var tile = document.createElement("div");
			switch (parseInt(Location.mapArray[i][j])){
			case 0:
				tile.className = "cell";
				mapContainer.appendChild(tile);
				break;
			case 1:
				tile.className = "dining";
				mapContainer.appendChild(tile);
				break;
			case 2:
				tile.className = "multi_room";
				mapContainer.appendChild(tile);
				break;
			case 3:
				tile.className = "courtyard";
				mapContainer.appendChild(tile);
				break
			case 4:
				tile.className = "infirmary";
				mapContainer.appendChild(tile);
				break;
			case 5:
				tile.className = "visiting_room";
				mapContainer.appendChild(tile);
				break;
			case 6:
				tile.className = "gymnasium";
				mapContainer.appendChild(tile);
				break;
			case 7:
				tile.className = "warden_office";
				mapContainer.appendChild(tile);
				break;
			}
		}
	}
}*/

//Updates location value in location box
function update_Loc() {
	var loc_box = document.getElementById("txtLocation");
	loc_box.value = loc[current_loc].loc_name;
}

//Updates points value if location has not been visited before
function update_Points(p) {
	var txt_points = document.getElementById("txtPoints");
	switch (p) {
		case 0:
			if (loc[current_loc].loc_visited === 0) {
				Gameplay.points += 5;
				txt_points.value = Gameplay.points;
			}
			break;
		case 1:
			Gameplay.points += 50;
			txt_points.value = Gameplay.points;
			break;
	}
}

//Changes current map location color
function update_Map(x) {
	var map_loc_id = "loc" + current_loc.toString();
	var map_loc = document.getElementById(map_loc_id);
	switch (x) {
		case 0:
			map_loc.style.background = "";
			break;
		case 1:
			map_loc.style.background = "#E80000";
			break;
	}
}

//Edits the description for a location when alternate location required
function edit_desc(locx) {
	switch (locx) {
		case 0:
			loc[locx].loc_desc0 = loc[locx].loc_desc_alt;
			break;
		case 1:
			loc[locx].loc_desc0 = loc[locx].loc_desc_alt;
			loc[locx].loc_desc1 = loc[locx].loc_desc_alt;
			loc[locx].loc_desc2 = loc[locx].loc_desc_alt;
			break;
		case 3:
			loc[locx].loc_desc0 = loc[locx].loc_desc_alt;
			loc[locx].loc_desc1 = loc[locx].loc_desc_alt;
			loc[locx].loc_desc2 = loc[locx].loc_desc_alt;
			break;
		case 5:
			loc[locx].loc_desc2 = loc[locx].loc_desc_alt;
			break;
		case 6:
			loc[locx].loc_desc2 = loc[locx].loc_desc_alt;
			break;
		case 7:
			loc[locx].loc_desc2 = loc[locx].loc_desc_alt;
			break;
		case 8:
			loc[locx].loc_desc2 = loc[locx].loc_desc_alt;
			break;
		case 10:
			loc[locx].loc_desc1 = loc[locx].loc_desc_alt;
			loc[locx].loc_desc2 = loc[locx].loc_desc_alt;
			break;
		case 69:
			for (i = 0, len = loc.length; i < len; i++) {	
				loc[i].loc_desc0 = loc[i].loc_desc_sarcasm0;
				loc[i].loc_desc1 = loc[i].loc_desc_sarcasm1;
				loc[i].loc_desc2 = loc[i].loc_desc_sarcasm2;
			}
			break;
		case 81:
			loc[8].loc_desc0 = loc[8].loc_desc2;
			loc[8].loc_desc1 = loc[8].loc_desc2;
			break;
	}
}

//Function that breaches courtyard fence, from where the player can then escape from.
function breach_c_Fence() {
	edit_desc(3);
}
	
//Executed when the player achieves the game objective
function player_Win() {
	var txtCommand = document.getElementById("txtCommand");
	var btn_Enter = document.getElementById("btn_Enter");
	btn_disable("all");
	//If player has rocket launcher in inventory, game has alternate ending
	if (player_inventory[2].inventory_q != 0) {
		update_display_msg(13);
		setTimeout(function() {changeBGImage(2)},5000);
	}
	else {
		update_display_msg(9);
	}
	txtCommand.disabled = true;
	btn_Enter.disabled = true;
}

//Executed when the player loses the game
function player_Lose() {
	var txtCommand = document.getElementById("txtCommand");
	var btn_Enter = document.getElementById("btn_Enter");
	btn_disable("all");
	update_display_msg(18);
	changeBGImage(3);
	txtCommand.disabled = true;
	btn_Enter.disabled = true;
}

//ERROR HANDLING
//Navigation error handler
function navigationError(err) {
	update_Display(err, 1);
}

//Gameplay error handler
function gameplayError(err) {
	update_Display(err, 2);
}

//COMMAND FUNCTIONS:
//Executes on look command
function cmd_Look() {
	var msg_box = document.getElementById("ta_Main");
	msg_box.value = loc[current_loc].loc_desc() + "\n\n" + msg_box.value;
}

//Executes on take command
function cmd_Take() {
	var msg_box = document.getElementById("ta_Main");
	var cur_item = invArray[current_loc].indexOf(1);
	switch (current_loc) {
		case 0:
			if ((loc[current_loc].loc_visited === 0) && (cur_item != -1)) {
				update_display_msg(2);
				edit_desc(current_loc);
				player_inventory[cur_item].inventory_q++;
				invArray[current_loc][cur_item]--;
			}
			else {
				gameplayError(0);
			}
			break;
		case 1:
			if (cur_item != -1) {
				update_display_msg(3);
				edit_desc(current_loc);
				player_inventory[cur_item].inventory_q++;
				invArray[current_loc][cur_item]--;
			}
			else {
				gameplayError(0);
			}
			break;
		case 4:
			if ((Gameplay.cheatmode === 1) && (cur_item != -1)) {
				update_display_msg(12);
				player_inventory[cur_item].inventory_q++;
				invArray[current_loc][cur_item]--;
			}
			else {
				gameplayError(0);
			}
			break;
		case 6:
			if ((loc[current_loc].loc_visited > 1) && (cur_item != -1)) {
				update_display_msg(2);
				edit_desc(current_loc);
				player_inventory[cur_item].inventory_q++;
				invArray[current_loc][cur_item]--;
			}
			else {
				gameplayError(0);
			}
			break;
		case 8:
			if ((loc[current_loc].loc_visited > 1) && (cur_item != -1) && (loc[current_loc].loc_safe_locked === false)) {
				update_display_msg(11);
				edit_desc(current_loc);
				player_inventory[cur_item].inventory_q++;
				invArray[current_loc][cur_item]--;
				update_Points(1);
				breach_c_Fence();
			}
			else {
				gameplayError(0);
			}
			break;
		case 10:
			if ((loc[current_loc].loc_visited > 0) && (cur_item != -1)) {
				update_display_msg(2);
				edit_desc(current_loc);
				player_inventory[cur_item].inventory_q++;
				invArray[current_loc][cur_item]--;
			}
			else {
				gameplayError(0);
			}
			break;
		default:
			gameplayError(0);
	}
}

//Executes on unlock command
function cmd_Unlock() {
	var msg_box = document.getElementById("ta_Main");
	switch (current_loc) {
		case 0:
			//If location is the prison cell, and the player has lock pick(s) in inventory, unlock door
			if ((loc[current_loc].loc_locked === true) && (player_inventory[1].inventory_q != 0)) {
				update_display_msg(4);
				loc[current_loc].loc_locked = false;
				loc[current_loc].loc_visited++;
				player_inventory[1].inventory_q--;
			}
			else if ((loc[current_loc].loc_locked === true) && (player_inventory[1].inventory_q === 0)) {
				cmd_Look();
				gameplayError(6);
			}
			else {
				gameplayError(1);
			}
			break;
		case 7:
			//If location is visiting room, and the player has lock pick(s) in inventory, unlocks door to Warden's office
			if ((loc[current_loc].loc_visited > 1) && (player_inventory[1].inventory_q != 0)) {
				loc[8].loc_locked = false;
				if (loc[8].loc_visited < 2) {
					edit_desc(81);
				}
				update_display_msg(5);
				edit_desc(current_loc);
				player_inventory[1].inventory_q--;
			}
			else if ((loc[current_loc].loc_visited > 1) && (player_inventory[1].inventory_q === 0)) {
				gameplayError(3);
			}
			else {
				gameplayError(1);
			}
			break;
		case 8:
			//If location is Warden's office and the player has a lock pick in inventory, unlocks safe
			if ((loc[current_loc].loc_visited > 1) && (player_inventory[1].inventory_q != 0)) {
				update_display_msg(10);
				edit_desc(current_loc);
				player_inventory[1].inventory_q--;
				loc[current_loc].loc_safe_locked = false;
			}
			else if ((loc[current_loc].loc_visited > 1) && (player_inventory[1].inventory_q === 0)) {
				gameplayError(10);
			}
			else {
				gameplayError(1);
			}
			break;
		default:
			gameplayError(1);
	}
	btn_set();
}

//Executes on help command
function cmd_Help() {
	var cmd_list = "";
	var msg_box = document.getElementById("ta_Main");
	var txt_Command = document.getElementById("txtCommand");
	//Loop to search and display all available commands and their descriptions.
	for (i = (Gameplay.cmd.length - 1); i >= 0; i--) {
		cmd_list = Gameplay.cmd[i] + " - " + Gameplay.cmd_desc[i] + "\n" + cmd_list;
	}
	msg_box.value = "HELP: \n" + cmd_list + "\n" + loc[current_loc].loc_desc() + "\n\n" + msg_box.value;
	txtCommand.value = "";
}

//Executes on eat command
function cmd_Eat() {
	var msg_box = document.getElementById("ta_Main");
	//If inventory already contains food, eat from there
	if (player_inventory[0].inventory_q != 0) {
		update_display_msg(6);
		player_inventory[0].inventory_q--;
	}
	//Otherwise if player is currently in the dining room and does not have any food in inventory, eat directly
	else if ((current_loc === 1) && (loc[current_loc].loc_desc() != loc[current_loc].loc_desc_alt) && (player_inventory[0].inventory_q === 0)) {
		update_display_msg(8);
		edit_desc(current_loc);
	}
	else {
		gameplayError(4);
	}
}

//Executed on inventory command
function cmd_Inventory_check() {
	var inv_list = "";
	var msg_box = document.getElementById("ta_Main");
	for (i = 0, len = player_inventory.length; i < len; i++) {
		if (player_inventory[i].inventory_q != 0) {
			inv_list = capitaliseFirstLetter(player_inventory[i].inventory_name).toString() + " = " + player_inventory[i].inventory_q.toString() + "\n" + inv_list;
		}
	}
	if (inv_list != "") {
		msg_box.value = "INVENTORY: \n" + inv_list + "\n\n" + msg_box.value;
	}
	else {
		msg_box.value = "INVENTORY: \n" + "You have no items in your inventory \n\n" + msg_box.value;
	}
}

//Executed on climb command
function cmd_Climb() {
	if ((current_loc === 3) && (loc[current_loc].loc_desc() === loc[current_loc].loc_desc_alt)) {
		player_Win();
	}
	else {
		gameplayError(2);
	}
}

//Executed on clear command, clears text area
function cmd_Clear() {
	var msg_box = document.getElementById("ta_Main");
	if (msg_box.value != "") {
		msg_box.value = "";
	}
}

//Executed on listen command
function cmd_Listen() {
	if ((loc[current_loc].loc_visited > 1) && (current_loc === 4)) {
		update_display_msg(8);
		breach_c_Fence();
	}
	else {
		gameplayError(8);
	}
}

//Activate different game modes
function cmd_Cheatmode() {
	switch (Gameplay.cheatmode) {
		case 0:
			Gameplay.cheatmode = 1;
			edit_desc(69);
			break;
		case 1:
			Gameplay.cheatmode = 2;
			break;
	}
}

//Executed on 'sit down' command
function cmd_sitDown() {
	if (current_loc === 8) {
		update_display_msg(14);
		changeBGImage(4);
		btn_disable("all");
	}
}

//Executed when the user answers '19'
function cmd_19() {
	if (current_loc === 8) {
		update_display_msg(16);
		setInterval(function() {player_Lose()}, 3000);
	}
}

//Executed when the user answers '21'
function cmd_21() {
	if (current_loc === 8) {
		update_display_msg(15);
		changeBGImage(0);
		btn_set();
		breach_c_Fence();
	}
}

//Executed on 'wake up' command
function cmd_wakeUp() {
	var alertArray = ["A dream within a dream?", "Why don't you stop playing games and do some actual work?","RUN","I know what you're thinking: This game is amazing!"]
	var randomNumber = Math.floor(Math.random() * alertArray.length)
	alert(alertArray[randomNumber]);
	update_display_msg(17);
}

//Location navigation function
function loc_nav(d) {
	switch (current_loc) {
		case 0:
			if (loc[current_loc].loc_locked === true) {
				navigationError(0);
				cmd_Look();
				break;
			}
		case 7:
			if ((loc[8].loc_locked === true) && (d === 0)) {
				navigationError(0);
				gameplayError(7);
				break;
			}
		default:
			if (newLoc(d) != -1) {
				update_Map(0);
				current_loc = newLoc(d);
				param_change();
			}
			else {
				navigationError(0);
			}
	}
}

//Combines all functions that run when location changes/location button(s) used
function param_change() {
	update_Loc();
	update_Map(1);
	update_Points(0);
	update_display_msg(0);
	loc[current_loc].loc_visited++;
	btn_set();
	
	if ((loc[current_loc].loc_visited > 1) && (current_loc === 7) && (loc[current_loc].loc_desc2 != loc[current_loc].loc_desc_alt)) {
		loc[8].loc_locked = true;
		breach_c_Fence();
	}
}

//BUTTON FUNCTIONS:
//Direction button functions
function btnNorth_Click() {
	loc_nav(0);
}

function btnEast_Click() {
	loc_nav(1);
}

function btnSouth_Click() {
	loc_nav(2);
}

function btnWest_Click() {
	loc_nav(3)
}

//Enter button function
function btnEnter_click() {
	var msg_box = document.getElementById("ta_Main");
	var txtCommand = document.getElementById("txtCommand");
	var usrCommand = (txtCommand.value.toLowerCase());
	
	if (usrCommand === "north") {
		usrCommand = "n";
	}
	else if (usrCommand === "east") {
		usrCommand = "e";
	}
	else if (usrCommand === "south") {
		usrCommand = "s";
	}
	else if (usrCommand === "west") {
		usrCommand = "w";
	}
	
	var cmd_number = Gameplay.cmd.indexOf(usrCommand);
	switch(cmd_number) {
		case 0:
			btnNorth_Click();
			break;
		case 1:
			btnEast_Click();
			break;
		case 2:
			btnSouth_Click();
			break;
		case 3:
			btnWest_Click();
			break;
		case 4:
			cmd_Look();
			break;
		case 5:
			cmd_Take();
			break;
		case 6:
			cmd_Unlock();
			break;
		case 7:
			cmd_Help();
			break;
		case 8:
			cmd_Climb();
			break;
		case 9:
			cmd_Eat();
			break;
		case 10:
			cmd_Inventory_check();
			break;
		case 11:
			cmd_Clear();
			break;
		case 12:
			cmd_Listen();
			break;
		case 13:
			cmd_Cheatmode();
			break;
		case 14:
			if(Gameplay.cheatmode === 1) {
				cmd_sitDown();
			}
			break;
		case 15:
			if(Gameplay.cheatmode === 1) {
				cmd_19();
			}
			break;
		case 16:
			if(Gameplay.cheatmode === 1) {
				cmd_21();
			}
			break;
		case 17:
			if(Gameplay.cheatmode === 1) {
				cmd_wakeUp();
			}
			break;
		default:
			gameplayError(5);
	}
	txtCommand.value = "";
}