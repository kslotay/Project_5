//Display functions
function update_Display(num, type) {
	var msg_box = document.getElementById("ta_Main");
	var message = [];
	switch (type) {
		case 0:
			message = ["You move to the ",
					   "Welcome to Escape Plan!\n\nFor every time you visit a new location, you will receive 5 points. You must escape the prison to win the game!\n\nYou are currently in the prison cell.",
					   "You take the lock pick.",
					   "You have taken the food!",
					   "You have unlocked the cell door!",
					   "Warden's office unlocked!",
					   "You have eaten food from your inventory!",
					   "You eat the food from the dining tables.",
					   "'ALERT! ALERT! The fence in the courtyard has been breached!'",
					   "Congratulations! You have escaped!",
					   "You have unlocked the safe! There is a rare gold coin inside!",
					   "You have taken the rare gold coin!",
					   "YAASS! You have a Rocket Launcher!",
					   "Outside the prison, a getaway car pulls up to aid your escape. You enter the convertible vehicle, bring out your rocket launcher and turn around. You then take aim and fire straight at the prison as you move away!"];
			break;
		case 1:
			message = ["You cannot go that way!",
					   "Navigation Error!"];
			break;
		case 2:
			message = ["There is nothing to take!",
					   "There is nothing to unlock!",
					   "There is nothing to climb!",
					   "You cannot unlock the Warden's office. You do not have a lock pick!",
					   "There is no food available to eat!",
					   "Please enter a valid command! (Type help for details)",
					   "You cannot unlock the cell door. You do not have a lock pick!",
					   "The Warden's office is locked!",
					   "There is nothing to listen to!",
					   "Gameplay Error!",
					   "You cannot unlock the safe! You do not have a lock pick!"];
			break;
	}
	if (type === 0) {
		if (num === 0) {
			msg_box.value = message[num] + loc[current_loc].loc_name + "\n\n" + loc[current_loc].loc_desc() + "\n\n\n" + msg_box.value;
		}
		else if (num === 1) {
			msg_box.value = message[num];
		}
		else if (num === 9 || num === 13) {
			msg_box.value = message[num];
		}
		else {
			msg_box.value = message[num] + "\n\n\n" + msg_box.value;
		}
	}
	else if ((type === 1) || (type === 2)) {
		if (num != undefined) {
			msg_box.value = message[num] + "\n\n\n" + msg_box.value;
		}
		else {
			msg_box.value = message[(message.length - 1)] + "\n\n\n" + msg_box.value;
		}	
	}
}

function update_display_msg(msg) {
	update_Display(msg, 0);
}