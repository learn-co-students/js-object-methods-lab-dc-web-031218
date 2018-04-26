// // code solution here
class President {
	constructor(name, politicalParty, yearsInOffice, homeState){
		this.name = name;
		this.politicalParty = politicalParty;
		this.yearsInOffice = yearsInOffice;
		this.homeState = homeState;
    }

    veto() {
    	return "NO!";
    }

    passBill(){
    	return "You can do that!";
    }

    doCharity(){
    	return "I like to help people.";
    }

    conductPressInterview(){
    	return "I am proud to be an American.";
    }

    sayHi(){
    	return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
    }
}

const GeorgeWashington = new President("George Washington", "None", "1789 - 1797", "Colonial Virginia");
const AbrahamLincoln = new President("Abraham Lincoln", "Whig/Republican", "1861-1865", "Hodgenville, Kentucky");
const RichardNixon = new President("Richard Nixon", "Republican", "1969-1974",  "Yorba Linda, California");
const JimmyCarter = new President("James Earl Carter, Jr.", "Democratic", "1977-1981", "Plains, Georgia");
