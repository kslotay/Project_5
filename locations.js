//Location Object
function Loc_obj() {
	this.loc_name = "";
	this.loc_visited = 0;
	this.loc_locked = false;
	this.loc_safe_locked = false;
	this.loc_desc0 = "";
	this.loc_desc1 = "";
	this.loc_desc2 = "";
	this.loc_desc_alt = "";
	this.loc_desc_sarcasm0 = "";
	this.loc_desc_sarcasm1 = "";
	this.loc_desc_sarcasm2 = "";
	this.loc_desc_wman = "";
	this.loc_desc_007 = "";
	this.loc_inventory = [];
	for (i = 0, len = player_inventory.length; i < len; i++) {
		this.loc_inventory.push(0);
	}
	this.loc_nav_array = [];
	this.loc_desc = function()	{var loc_desc_n = "";
								switch (this.loc_visited) {
									case 0:
										loc_desc_n = this.loc_desc0;
										break;
									case 1:
										loc_desc_n = this.loc_desc1;
										break;
									default:
										loc_desc_n = this.loc_desc2;
								}
								return loc_desc_n;
					};
}

function initialize_Locations() {
	//Different game locations initialized based on the Location object
	var prison_cell_0 = new Loc_obj;
	prison_cell_0.loc_name = "Prison Cell";
	prison_cell_0.loc_locked = true;
	prison_cell_0.loc_desc0 = "It is dark, damp and smelly. The cell door is locked. There is a lock pick on the floor.";
	prison_cell_0.loc_desc1 = "It is dark, damp and smelly. The cell door is open.";
	prison_cell_0.loc_desc2 = "It is dark, damp and smelly. The cell door is open.";
	prison_cell_0.loc_desc_alt = "It is dark, damp and smelly. The cell door is locked. You have a lock pick!";
	prison_cell_0.loc_desc_sarcasm0 = "Home sweet home...";
	prison_cell_0.loc_desc_sarcasm1 = "Home sweet home...";
	prison_cell_0.loc_desc_sarcasm2 = "Home sweet home...";
	prison_cell_0.loc_desc_wman = "";
	prison_cell_0.loc_desc_007 = "";
	prison_cell_0.loc_inventory = [0,1,0,0];
	prison_cell_0.loc_nav_array = [2,-1,-1,-1];
	loc.push(prison_cell_0);

	var dining_room_1 = new Loc_obj;
	dining_room_1.loc_name = "Dining Room";
	dining_room_1.loc_desc0 = "There are a number of dining tables. There is food!";
	dining_room_1.loc_desc1 = "There are a number of dining tables. There is food!";
	dining_room_1.loc_desc2 = "The dining room is empty!";
	dining_room_1.loc_desc_alt = "The dining room is empty!";
	dining_room_1.loc_desc_sarcasm0 = "You look around and notice a familiar logo: SODEXO";
	dining_room_1.loc_desc_sarcasm1 = "You look around and notice a familiar logo: SODEXO";
	dining_room_1.loc_desc_sarcasm2 = "You look around and notice a familiar logo: SODEXO";
	dining_room_1.loc_desc_wman = "";
	dining_room_1.loc_desc_007 = "";
	dining_room_1.loc_inventory = [1,0,0,0];
	dining_room_1.loc_nav_array = [4,2,-1,-1];
	loc.push(dining_room_1);

	var multi_room_2 = new Loc_obj;
	multi_room_2.loc_name = "Multi-purpose Room";
	multi_room_2.loc_desc0 = "There is no one in the multi-purpose room. The TV is on.";
	multi_room_2.loc_desc1 = "There are a number of other prison inmates sitting around, they ignore you.";
	multi_room_2.loc_desc2 = "There is no one in the multi-purpose room.";
	multi_room_2.loc_desc_alt = "";
	multi_room_2.loc_desc_sarcasm0 = "You walk into the multi-purpose room like a boss. A man shows up claiming to be your 'brother from another mother' and offers to sell you some counterfeit Prison Break DVDs. Too bad you don't have a DVD player.";
	multi_room_2.loc_desc_sarcasm1 = "You walk into the multi-purpose room and do a triple back-flip. Nobody saw it.";
	multi_room_2.loc_desc_sarcasm2 = "You walk into the multi-purpose room again.";
	multi_room_2.loc_desc_wman = "";
	multi_room_2.loc_desc_007 = "";
	multi_room_2.loc_inventory = [0,0,0,0];
	multi_room_2.loc_nav_array = [5,3,0,1];
	loc.push(multi_room_2);
	
	var courtyard_3 = new Loc_obj;
	courtyard_3.loc_name = "Courtyard";
	courtyard_3.loc_desc0 = "The courtyard is empty except for the few guards on watch duty.";
	courtyard_3.loc_desc1 = "The courtyard is empty except for the few guards on watch duty.";
	courtyard_3.loc_desc2 = "The courtyard is empty except for the few guards on watch duty.";
	courtyard_3.loc_desc_alt = "The courtyard is empty. The electric fence has been breached! You have a chance to escape!";
	courtyard_3.loc_desc_sarcasm0 = "What is this? You have entered the empty courtyard.";
	courtyard_3.loc_desc_sarcasm1 = "What is this? You have entered the empty courtyard.";
	courtyard_3.loc_desc_sarcasm2 = "What is this? You have entered the empty courtyard.";
	courtyard_3.loc_desc_wman = "";
	courtyard_3.loc_desc_007 = "";
	courtyard_3.loc_inventory = [0,0,0,0];
	courtyard_3.loc_nav_array = [6,-1,-1,2];
	loc.push(courtyard_3);

	var infirmary_4 = new Loc_obj;
	infirmary_4.loc_name = "Infirmary";
	infirmary_4.loc_desc0 = "There is a doctor in the infirmary, he does not want you there. He calls the guards!";
	infirmary_4.loc_desc1 = "There is no one in the infirmary.";
	infirmary_4.loc_desc2 = "The infirmary is empty. There is a radio relaying some news!";
	infirmary_4.loc_desc_alt = "There is no one in the infirmary.";
	infirmary_4.loc_desc_sarcasm0 = "There is no one in the infirmary. There is a rocket launcher (!) on the floor!";
	infirmary_4.loc_desc_sarcasm1 = "There is no one in the infirmary.";
	infirmary_4.loc_desc_sarcasm2 = "There is no one in the infirmary.";
	infirmary_4.loc_desc_wman = "";
	infirmary_4.loc_desc_007 = "";
	infirmary_4.loc_inventory = [0,0,1,0];
	infirmary_4.loc_nav_array = [-1,5,2,-1];
	loc.push(infirmary_4);

	var visiting_room_5 = new Loc_obj;
	visiting_room_5.loc_name = "Visiting Room";
	visiting_room_5.loc_desc0 = "There is no one in the visiting room. Your family does not want to see you.";
	visiting_room_5.loc_desc1 = "There is no one in the visiting room. Your family does not want to see you.";
	visiting_room_5.loc_desc2 = "Some inmates have overpowered the guards and taken over the visiting room!";
	visiting_room_5.loc_desc_alt = "The visiting room is deserted.";
	visiting_room_5.loc_desc_sarcasm0 = "You are in the visiting room. Nice try but nobody wants to see you.";
	visiting_room_5.loc_desc_sarcasm1 = "Yes.";
	visiting_room_5.loc_desc_sarcasm2 = "*Revisiting room.";
	visiting_room_5.loc_desc_wman = "";
	visiting_room_5.loc_desc_007 = "";
	visiting_room_5.loc_inventory = [0,0,0,0];
	visiting_room_5.loc_nav_array = [7,6,2,4];
	loc.push(visiting_room_5);

	var gymnasium_6 = new Loc_obj;
	gymnasium_6.loc_name = "Gymnasium";
	gymnasium_6.loc_desc0 = "There is a basketball game between inmates currently taking place. They will not allow you to join!";
	gymnasium_6.loc_desc1 = "There is a basketball game between inmates currently taking place, but they will not allow you to join! The situation is quickly turning into a riot! You spot a lock pick on the floor.";
	gymnasium_6.loc_desc2 = "The gymnasium is dark and empty. There are some dead bodies on the basketball court. There is a lock pick on the floor.";
	gymnasium_6.loc_desc_alt = "The gymnasium is dark and empty. There are some dead bodies on the basketball court.";
	gymnasium_6.loc_desc_sarcasm0 = "Your homies are playing basketball. You drink your kool-aid and watch on. You come on with 2 seconds left, do a crossover, and do a 360 pull up three pointer and your team wins. You got too much game bruh.";
	gymnasium_6.loc_desc_sarcasm1 = "Your homies are playing basketball again. Also, there's a lock pick on the floor.";
	gymnasium_6.loc_desc_sarcasm2 = "Boring here. I heard the courtyard is pretty nice. There is a lock pick on the floor.";
	gymnasium_6.loc_desc_wman = "";
	gymnasium_6.loc_desc_007 = "";
	gymnasium_6.loc_inventory = [0,1,0,0];
	gymnasium_6.loc_nav_array = [-1,-1,3,5];
	loc.push(gymnasium_6);

	var hallway_7 = new Loc_obj;
	hallway_7.loc_name = "Hallway";
	hallway_7.loc_desc0 = "The hallway is empty. You can hear noises from the gymnasium.";
	hallway_7.loc_desc1 = "The hallway is empty. You can hear noises from the gymnasium";
	hallway_7.loc_desc2 = "There is a stand-off between the guards and inmates in the hallway! The Warden's office is locked.";
	hallway_7.loc_desc_alt = "The hallway is deserted.";
	hallway_7.loc_desc_sarcasm0 = "You enter the hallway and... well not much going on here.";
	hallway_7.loc_desc_sarcasm1 = "You enter the hallway. Nothing going on here.";
	hallway_7.loc_desc_sarcasm2 = "There is a dance-off between the guards and inmates!"
	hallway_7.loc_desc_wman = "";
	hallway_7.loc_desc_007 = "";
	hallway_7.loc_inventory = [0,0,0,0];
	hallway_7.loc_nav_array = [8,-1,5,-1];
	loc.push(hallway_7);
	
	var warden_office_8 = new Loc_obj;
	warden_office_8.loc_name = "Warden's Office";
	warden_office_8.loc_desc0 = "The Warden is currently on the phone, he ignores you.";
	warden_office_8.loc_desc1 = "The Warden ignores you, he is talking on the phone.";
	warden_office_8.loc_desc2 = "There is a safe inside.";
	warden_office_8.loc_desc_alt = "There is nothing here.";
	warden_office_8.loc_safe_locked = true;
	warden_office_8.loc_desc_sarcasm0 = "You enter the Warden's office. He asks you to sit down immediately so that the interrogation may begin.";
	warden_office_8.loc_desc_sarcasm1 = "Warden's Den";
	warden_office_8.loc_desc_sarcasm2 = "Safe?";
	warden_office_8.loc_desc_wman = "";
	warden_office_8.loc_desc_007 = "";
	warden_office_8.loc_inventory = [0,0,0,1];
	warden_office_8.loc_nav_array = [-1,9,7,-1];
	loc.push(warden_office_8);

	var security_desk_9 = new Loc_obj;
	security_desk_9.loc_name = "Security Desk";
	security_desk_9.loc_desc0 = "There is a guard sitting at the security desk. He is eating a doughnut.";
	security_desk_9.loc_desc1 = "There is no one at the security desk.";
	security_desk_9.loc_desc2 = "The security desk has been destroyed, and the rest of the room is empty.";
	security_desk_9.loc_desc_alt = "";
	security_desk_9.loc_desc_sarcasm0 = "You're at the security desk. A voice speaks out from a speaker: 'POP, Hold It Down!'";
	security_desk_9.loc_desc_sarcasm1 = "You're at the security desk. A voice speaks out from a speaker: 'POP, Hold It Down!'";
	security_desk_9.loc_desc_sarcasm2 = "You're at the security desk. A voice speaks out from a speaker: 'POP, Hold It Down!'";
	security_desk_9.loc_desc_wman = "";
	security_desk_9.loc_desc_007 = "";
	security_desk_9.loc_inventory = [0,0,0,0];
	security_desk_9.loc_nav_array = [11,10,-1,8];
	loc.push(security_desk_9);

	var solitary_10 = new Loc_obj;
	solitary_10.loc_name = "Solitary";
	solitary_10.loc_desc0 = "You are in solitary confinement, the door is open and there is no one here. There is a lock pick on the floor.";
	solitary_10.loc_desc1 = "You are in solitary confinement, there is a lock pick on the floor.";
	solitary_10.loc_desc2 = "You are in solitary confinement, there is a lock pick on the floor.";
	solitary_10.loc_desc_alt = "You are in solitary confinement. The door is open.";
	solitary_10.loc_desc_sarcasm0 = "You enter solitary confinement. Feeling lonely?";
	solitary_10.loc_desc_sarcasm1 = "There's a lock pick on the floor!";
	solitary_10.loc_desc_sarcasm2 = "Why have you not taken the lock pick yet?!";
	solitary_10.loc_desc_wman = "";
	solitary_10.loc_desc_007 = "";
	solitary_10.loc_inventory = [0,1,0,0];
	solitary_10.loc_nav_array = [-1,-1,-1,9];
	loc.push(solitary_10);

	var parking_lot_11 = new Loc_obj;
	parking_lot_11.loc_name = "Parking Lot";
	parking_lot_11.loc_desc0 = "You are in the prison parking lot. There are guards patrolling the area.";
	parking_lot_11.loc_desc1 = "You are in the prison parking lot. There are guards patrolling the area.";
	parking_lot_11.loc_desc2 = "You are in the prison parking lot.";
	parking_lot_11.loc_desc_alt = "";
	parking_lot_11.loc_desc_sarcasm0 = "You are in the parking lot. You see T.I. being escorted into the prison (again?). You notice Drake on the side as he sheds a tear.";
	parking_lot_11.loc_desc_sarcasm1 = "There is a black car in the prison parking lot. There is also a white car.";
	parking_lot_11.loc_desc_sarcasm2 = "A man in a white suit steps out from the shadows and whispers 'What if this was all just a dream?'";
	parking_lot_11.loc_desc_wman = "";
	parking_lot_11.loc_desc_007 = "";
	parking_lot_11.loc_inventory = [0,0,0,0];
	parking_lot_11.loc_nav_array = [-1,-1,9,-1];
	loc.push(parking_lot_11);
	
	for (i = 0, len = loc.length; i < len; i++) {
		mapArray.push(loc[i].loc_nav_array);
		invArray.push(loc[i].loc_inventory);
	}
}

//Returns new location according to map array
function newLoc(dir) {
	var new_Loc = current_loc;
	var dest = mapArray[current_loc][dir];
	new_Loc = dest;
	return new_Loc;
}