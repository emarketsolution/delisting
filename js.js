document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// -------------------------------------------------------------------- filtre bounce -------------------------------------------------------------------- 
function extractLines(inputText) {
  const searchText = "550 5.7.1 Unfortunately";
  const lines = inputText.split("\n");
  const filteredLines = lines.filter(line => line.includes(searchText));
  
  // Create an object to store the last occurrence of each IP address
  const lastOccurrences = {};
  
  filteredLines.forEach(line => {
    const ipAddressMatch = line.match(/\((\d+\.\d+\.\d+\.\d+)\)/);
    if (ipAddressMatch) {
      const ipAddress = ipAddressMatch[1];
      lastOccurrences[ipAddress] = line;
    }
  });
  
  const resultText = Object.values(lastOccurrences).join("\n");
  return resultText;
}

// -----------------------------------


// --------------------------------------------------------------------	returrn ip and errors 	------------------------------------------------------------------------------------
function txt1_txt6(text) {
  const regex = /(Error: "[^"]*"[^\n]*)/g;
  const matches = text.match(regex);

  const errorMessages = [];

  if (matches) {
    for (const match of matches) {
      errorMessages.push(match);
    }
  }

  // Sort errorMessages based on the IP addresses
  errorMessages.sort((msg1, msg2) => {
    const ipRegex = /messages from \[([\d.]+)\]/;
    const ip1 = msg1.match(ipRegex)[1];
    const ip2 = msg2.match(ipRegex)[1];
    return ip1.localeCompare(ip2, undefined, { numeric: true });
  });

  return errorMessages;
}
// -------------------
function txt1_txtips(errorMessages) {
  const regex = /messages from \[([\d.]+)\]/;
  const ips = [];

  for (const errorMessage of errorMessages) {
    const match = errorMessage.match(regex);
    if (match && match[1]) {
      ips.push(match[1]);
    }
  }

  return ips;
}











// --------------------------------------------------------------------	REPLACE SPACE <SP>	------------------------------------------------------------------------------------







// --------------------------------------------------------------------	return ips not found 	------------------------------------------------------------------------------------




// --------------------------------------------------------------------	return imacros 	------------------------------------------------------------------------------------

function generateMacroScript(ips, errors, domains, email) {
  const names = [
  'Emma<SP>Johnson',
  'Liam<SP>Smith',
  'Olivia<SP>Williams',
  'Noah<SP>Brown',
  'Ava<SP>Taylor',
  'Sophia<SP>Davis',
  'Isabella<SP>Martinez',
  'Jackson<SP>Anderson',
  'Luna<SP>Garcia',
  'Oliver<SP>Clark',
  'Mia<SP>Rodriguez',
  'Lucas<SP>Hernandez',
  'Amelia<SP>Miller',
  'Benjamin<SP>Wilson',
  'Ella<SP>Jones',
  'Charlotte<SP>White',
  'William<SP>Lewis',
  'Harper<SP>Thompson',
  'Michael<SP>Hall',
  'Abigail<SP>Martin',
  'Ethan<SP>Davis',
  'Emily<SP>Adams',
  'Alexander<SP>Turner',
  'Elizabeth<SP>Foster',
  'James<SP>Jackson',
  'Scarlett<SP>Wright',
  'Henry<SP>Carter',
  'Avery<SP>Brown',
  'Daniel<SP>Murphy',
  'Sofia<SP>Reed',
  'Logan<SP>Green',
  'Grace<SP>Mitchell',
  'Matthew<SP>Stewart',
  'Chloe<SP>Cox',
  'Grace<SP>Johnson',
  'Henry<SP>Williams',
  'Ella<SP>Brown',
  'Oliver<SP>Garcia',
  'Mia<SP>Davis',
  'Lucas<SP>Martinez',
  'Amelia<SP>Anderson',
  'Benjamin<SP>Clark',
  'Sophia<SP>Hernandez',
  'Noah<SP>Johnson',
  'Olivia<SP>Smith',
  'Ethan<SP>Miller',
  'Charlotte<SP>Williams',
  'Michael<SP>Brown',
  'Emily<SP>Davis',
  'William<SP>Martinez',
  'Abigail<SP>Robinson',
  'Ella<SP>Thompson',
  'Daniel<SP>Lewis',
  'Elizabeth<SP>Turner',
  'Logan<SP>Adams',
  'Grace<SP>Wilson',
  'Matthew<SP>Hall',
  'Sofia<SP>Anderson',
  'James<SP>Johnson',
  'Chloe<SP>Smith',
  'Grace<SP>Williams',
  'Liam<SP>Johnson',
  'Henry<SP>Davis',
  'Olivia<SP>Martinez',
  'Emma<SP>Robinson',
  'Ava<SP>Clark',
  'Mia<SP>Brown',
  'Lucas<SP>Taylor',
  'Noah<SP>Miller',
  'Isabella<SP>Garcia',
  'Oliver<SP>White',
  'Benjamin<SP>Thomas',
  'Amelia<SP>Hall',
  'Ella<SP>Wilson',
  'Charlotte<SP>Thompson',
  'William<SP>Young',
  'Harper<SP>Mitchell',
  'Michael<SP>Turner',
  'Abigail<SP>Carter',
  'Liam<SP>Brown',
  'Henry<SP>Jones',
  'Sophia<SP>Harris',
  'Olivia<SP>Adams',
  'Lucas<SP>Smith',
  'Ella<SP>Garcia',
  'Jackson<SP>Taylor',
  'Oliver<SP>Anderson',
  'Ava<SP>Foster',
  'Charlotte<SP>Harris',
  'William<SP>Johnson',
  'Sophia<SP>White',
  'Liam<SP>Lewis',
  'Noah<SP>Martinez',
  'Emma<SP>Clark',
  'Emily<SP>Brown',
  'Daniel<SP>Taylor',
  'Elizabeth<SP>Robinson',
  'Lucas<SP>Adams',
  'Sofia<SP>Hernandez',
  'Ava<SP>Martinez',
  'Matthew<SP>Turner',
  'Liam<SP>Miller',
  'Olivia<SP>Garcia',
  'Jackson<SP>Carter',
  'Amelia<SP>Davis',
  'Noah<SP>Smith',
  'Emily<SP>Clark',
  'Charlotte<SP>Brown',
  'William<SP>Hall',
  'Sophia<SP>Wilson',
  'Ella<SP>Williams',
  'Lucas<SP>Brown',
  'Abigail<SP>Johnson',
  'James<SP>Miller',
  'Avery<SP>Martinez',
  'Olivia<SP>Taylor',
  'Jackson<SP>Davis',
  'Amelia<SP>Garcia',
  'Daniel<SP>Anderson',
  'Isabella<SP>Turner',
  'Michael<SP>Martin',
  'Grace<SP>Thompson',
  'Liam<SP>White',
  'Ella<SP>Smith',
  'Emma<SP>Williams',
  'Oliver<SP>Davis',
  'Sophia<SP>Brown',
  'Noah<SP>Clark',
  'Ava<SP>Robinson',
  'Charlotte<SP>Taylor',
  'William<SP>Miller',
  'Mia<SP>Martinez',
  'Emily<SP>Hall',
  'Lucas<SP>Wilson',
  'Amelia<SP>Adams',
  'Liam<SP>Garcia',
  'Olivia<SP>Thomas',
  'Noah<SP>Mitchell',
  'Ava<SP>Lewis',
  'Sophia<SP>Taylor',
  'Jackson<SP>Martinez',
  'William<SP>Smith',
  'Charlotte<SP>Garcia',
  'James<SP>Turner',
  'Abigail<SP>Jackson',
  'Michael<SP>Clark',
  'Emily<SP>Thompson',
  'Isabella<SP>Anderson',
  'Olivia<SP>Hall',
  'Henry<SP>Brown',
  'Sofia<SP>Taylor',
  'Daniel<SP>Smith',
  'Grace<SP>Davis',
  'Ava<SP>Williams',
  'Ella<SP>Robinson',
  'Oliver<SP>Adams',
  'Isabella<SP>Thompson',
  'Jackson<SP>Turner',
  'Amelia<SP>Harris',
  'Sophia<SP>Martinez',
  'Mia<SP>Johnson',
  'William<SP>Davis',
  'Abigail<SP>Miller',
  'Liam<SP>Clark',
  'Ava<SP>Anderson',
  'Charlotte<SP>Turner',
  'Isabella<SP>Foster',
  'James<SP>Lewis',
  'Emily<SP>Hernandez',
  'Sophia<SP>Johnson',
  'Oliver<SP>Taylor',
  'Avery<SP>Adams',
  'Mia<SP>Williams',
  'Jackson<SP>Smith',
  'Olivia<SP>Clark',
  'Daniel<SP>Martin',
  'Grace<SP>Turner',
  'Ava<SP>Thompson',
  'Noah<SP>White',
  'Sophia<SP>Hall',
  'Ella<SP>Anderson',
  'Oliver<SP>Smith',
  'Michael<SP>Adams',
  'Isabella<SP>Wilson',
  'Jackson<SP>Harris',
  'Amelia<SP>Brown',
  'James<SP>Taylor',
  'Emily<SP>Turner',
  'Avery<SP>Clark',
  'Sophia<SP>Mitchell',
  'Liam<SP>Foster',
  'Olivia<SP>Hernandez',
  'Lucas<SP>Hall',
  'Ava<SP>Miller',
  'Noah<SP>Turner',
  'Oliver<SP>Johnson',
  'Mia<SP>Smith',
  'Jackson<SP>Williams',
  'Emily<SP>Anderson',
  'James<SP>Martinez',
  'Amelia<SP>Foster',
  'Liam<SP>Mitchell',
  'Olivia<SP>Brown',
  'Lucas<SP>Davis',
  'William<SP>Foster',
  'Avery<SP>Turner',
  'Mia<SP>Wilson',
  'Isabella<SP>Adams',
  'Jackson<SP>Johnson',
  'Emily<SP>Garcia',
  'Oliver<SP>Martinez',
  'Ava<SP>Smith',
  'Mia<SP>White',
  'William<SP>Turner',
  'Liam<SP>Hall',
  'Noah<SP>Lewis',
  'Isabella<SP>Johnson',
  'Jackson<SP>Garcia',
  'Olivia<SP>Foster',
  'Daniel<SP>Miller',
  'James<SP>Brown',
  'Sophia<SP>Thompson',
  'Amelia<SP>Turner',
  'Liam<SP>Harris',
  'Ella<SP>Davis',
  'Jackson<SP>Wilson',
  'Avery<SP>Taylor',
  'Charlotte<SP>Lewis',
  'Sophia<SP>Clark',
  'Lucas<SP>Harris',
  'James<SP>Wilson',
  'Liam<SP>Martinez',
  'Isabella<SP>Davis',
  'Charlotte<SP>Foster',
  'Michael<SP>Harris',
  'Ella<SP>Adams',
  'Mia<SP>Hall',
  'Jackson<SP>Clark',
  'Ava<SP>Johnson',
  'James<SP>Davis',
  'Ella<SP>Hall',
  'Noah<SP>Thompson',
  'Mia<SP>Taylor',
  'Avery<SP>Foster',
  'Lucas<SP>Lewis',
  'William<SP>Adams',
  'Isabella<SP>Hall',
  'Lucas<SP>Turner',
  'Ella<SP>Martinez',
  'Oliver<SP>Robinson',
  'Mia<SP>Harris',
  'Charlotte<SP>Wilson',
  'Michael<SP>Foster',
  'Jackson<SP>Lewis',
  'Sophia<SP>Smith',
  'Noah<SP>Hernandez',
  'Ella<SP>Clark',
  'Oliver<SP>Harris',
  'James<SP>Hall',
  'Michael<SP>Martinez',
  'Emily<SP>Smith',
  'Olivia<SP>Thompson',
  'Isabella<SP>Lewis',
  'James<SP>Martin',
  'Charlotte<SP>Hall',
  'Jackson<SP>Foster',
  'Noah<SP>Anderson',
  'Lucas<SP>White',
  'Oliver<SP>Wilson',
  'Charlotte<SP>Adams',
  'Jackson<SP>Hall',
  'Sophia<SP>Foster',
  'Isabella<SP>Harris',
  'Noah<SP>Davis',
  'Lucas<SP>Garcia',
  'Oliver<SP>Turner',
  'Mia<SP>Thompson',
  'James<SP>Smith',
  'Lucas<SP>Clark',
  'Ella<SP>White',
  'Emily<SP>Foster',
  'Jackson<SP>Mitchell',
  'Sophia<SP>Lewis',
  'Ava<SP>Hernandez',
  'Lucas<SP>Johnson',
  'Mia<SP>Turner',
  'James<SP>Adams',
  'Charlotte<SP>Davis',
  'Noah<SP>Taylor',
  'Michael<SP>Davis',
  'Sophia<SP>Turner',
  'Isabella<SP>Miller',
  'Oliver<SP>Brown',
  'Lucas<SP>Miller',
  'Mia<SP>Garcia',
  'Charlotte<SP>Martinez',
  'Emily<SP>White',
  'Jackson<SP>Hernandez',
  'Jackson<SP>Adams',
  'Ava<SP>Harris',
  'Oliver<SP>Lewis',
  'James<SP>White',
  'Charlotte<SP>Robinson',
  'Michael<SP>Smith',
  'Mia<SP>Clark',
  'James<SP>Harris',
  'Michael<SP>Anderson',
  'Emily<SP>Miller',
  'Sophia<SP>Garcia',
  'Ella<SP>Turner',
  'Charlotte<SP>Hernandez',
  'Emily<SP>Johnson',
  'Ava<SP>Turner',
  'Emily<SP>Robinson',
  'Oliver<SP>Thompson',
  'Sophia<SP>Miller',
  'Jackson<SP>White',
  'Noah<SP>Foster',
  'Isabella<SP>Smith',
  'Ella<SP>Davis'
  ];
  const Dedicated = ['Unknown', 'Dedicated', 'Shared'];
  const timeZones = [
  "Israel<SP>Standard<SP>Time",
  "Kaliningrad<SP>Standard<SP>Time",
  "Central<SP>Europe<SP>Standard<SP>Time",
  "W.<SP>Europe<SP>Standard<SP>Time",
  "GMT<SP>Standard<SP>Time",
  "Morocco<SP>Standard<SP>Time",
  "Central<SP>European<SP>Standard<SP>Time",
  "W.<SP>Central<SP>Africa<SP>Standard<SP>Time",
  "Jordan<SP>Standard<SP>Time",
  "GTB<SP>Standard<SP>Time",
  "Middle<SP>East<SP>Standard<SP>Time",
  "Egypt<SP>Standard<SP>Time",
  "South<SP>Africa<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Myanmar<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "Sri<SP>Lanka<SP>Standard<SP>Time",
  "AUS<SP>Central<SP>Standard<SP>Time",
  "Cen.<SP>Australia<SP>Standard<SP>Time",
  "Taipei<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "W.<SP>Australia<SP>Standard<SP>Time",
  "Singapore<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "N.<SP>Central<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Myanmar<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "Sri<SP>Lanka<SP>Standard<SP>Time",
  "AUS<SP>Central<SP>Standard<SP>Time",
  "Cen.<SP>Australia<SP>Standard<SP>Time",
  "Taipei<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "W.<SP>Australia<SP>Standard<SP>Time",
  "Singapore<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "N.<SP>Central<SP>Asia<SP>Standard<SP>Time",
  ];


  const namesList = names.map(name => `${name}`).join("' '");
  const domainsList = domains.join(' ');
  const provider = [
  "Internet<SP>Service<SP>Provider<SP>(ISP)",
  "E-mail<SP>Service<SP>Provider<SP>(ESP)",
  "Windows<SP>Live<SP>Hotmail<SP>Customer",
  "Customer<SP>of<SP>an<SP>ISP<SP>other<SP>than<SP>Windows<SP>Live<SP>Hotmail",
  "University<SP>IT",
  "Business<SP>(non-marketing)",
  "Other"
];
	const hotmail = [
  "hotmail.com",
  "live.com",
  "msn.com",
  "outlook.com",
  "other"
];

	let scriptTemplate = "";
	  scriptTemplate += `\n`;
  for (let i = 1; i <= ips.length; i++) {
  scriptTemplate += `' ${i} `;
}

  scriptTemplate += `\n`;

  for (let i = 0; i < ips.length; i++) {
	  
	const hotmail1 = hotmail[Math.floor(Math.random() * hotmail.length)];
	const hotmail2 = "hotmail.com";
	const email1 = email[Math.floor(Math.random() * email.length)];
	const randomIndexProvider = Math.floor(Math.random() * provider.length);
	const randomProvider = provider[randomIndexProvider];
	const randomIndexName = Math.floor(Math.random() * names.length);
	const randomName = names[randomIndexName];
	const randomIndexZone = Math.floor(Math.random() * timeZones.length);
	const randomZone = timeZones[randomIndexZone];
	const randomIndexDedicated = Math.floor(Math.random() * Dedicated.length);
	const randomDedicated = Dedicated[randomIndexDedicated];
	
	const domainsArray = domainsList.split(' ');

	
    scriptTemplate += `
TAB OPEN
TAB T=${i + 1}
SET !ERRORIGNORE YES
SET !TIMEOUT_PAGE 5
SET !TIMEOUT_STEP 20
SET !TIMEOUT_DOWNLOAD 15
VERSION BUILD=9030808 RECORDER=FX
URL GOTO=https://olcsupport.office.com/
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:IssueTitle CONTENT=bounce
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:ContactName CONTENT=${randomName}
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:DomainTo CONTENT=%${hotmail1}
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:ContactEmail CONTENT=${email1}
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:ddlTimezones CONTENT=%${randomZone}
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:DomainFrom CONTENT=${domainsArray[i]}
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:SelfDescription CONTENT=%${randomProvider}
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:IpAddresses CONTENT=${ips[i]}
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:ServerType CONTENT=%Dedicated
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:ErrorMessages CONTENT=${errors[i]}"
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:WebsiteUrl CONTENT=http://${domainsArray[i]}/
WAIT SECONDS=${Math.floor(Math.random() * 4) + 1}
TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Submit`;
  }
  scriptTemplate += `\n`;
  return scriptTemplate;
}
function spaceError(errorMessages) {
  return errorMessages.map(message => message.replace(/\s+/g, '<SP>'));
}


  // ------------------------------------------------------------------------------------------
let emailList = [];
let domains = [];
let ips = [];
let errorMessages = [];
let email_input = document.getElementById("textarea5");
let dom_input = document.getElementById("textarea2");
let bounce_input = document.getElementById("textarea1");

document.getElementById("execute-btn").addEventListener("click", function() {
	
 const inputText = document.getElementById("textarea1").value;
   if(inputText === ""){
	    bounce_input	.classList.add("empty-textarea");
   }
   else{
		   const extractedText = extractLines(inputText);
			document.getElementById("textarea6").value = extractedText;
		   const errorrr = txt1_txt6(extractedText);
		   ips =txt1_txtips(errorrr);
		  if (ips.length === 0) {
		   alert('Error: The PMTA IPS is empty.');
		} else if (ips.length > 117) {
		   alert('Error: The number of IPS is greater than 117.');
		} else {
		   errorMessages = errorrr;  
		  
	 }
		   document.getElementById("textarea3").value = ips.join("\n");
	  
 }
  

	// document.getElementById("textarea3").value = errorMessages.join("\n");
	// document.getElementById("textarea3").value = extractedText;
	 
	
});

document.getElementById("imacros-btn").addEventListener("click", function() {
  const email = document.getElementById("textarea5").value;
  emailList = email.split("\n").map(email => email.trim());  
  const dom = document.getElementById("textarea2").value;
  domains = dom.split("\n").map(email => email.trim());  
  // document.getElementById("textarea5").value = errorMessages.join("\n");
  const errorT = spaceError(errorMessages);
//-------------------
 


 
	if (dom_input.value.trim() === "" ) {
    dom_input.classList.add("empty-textarea");
	}



//--------------------

  
if (domains.length > ips.length) {
  alert('Error: There are more domains than IPS.');
} else if (domains.length < ips.length) {
  alert('Error: There are more IPS than domains.');
} else if(email_input.value.trim() === "" ) {
    email_input.classList.add("empty-textarea");
	  }else{ 
  // No error conditions, proceed with your code logic here
  document.getElementById("textarea3").value = errorT.join("\n");
  document.getElementById("textarea4").value = generateMacroScript(ips, errorT, domains, emailList);
}  
  
});

// jQuery code
$(document).ready(function() {
  $("#textarea5").click(function() {
    email_input.classList.remove("empty-textarea");
  });

  $("#textarea2").click(function() {
    dom_input.classList.remove("empty-textarea");
  });
  
  $("#textarea1").click(function() {
    bounce_input.classList.remove("empty-textarea");
  });
});

 document.getElementById("splitButton").addEventListener("click", function() {
            const inputText = document.getElementById("textarea4").value;
            const sections = inputText.split("' 1 ");

            for (let i = 1; i < sections.length; i++) {
                const sectionText = "' 1 " + sections[i].trim();
                if (sectionText !== "' 1 ") {
                    const blob = new Blob([sectionText], { type: "text/plain" });
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.download = `imacros${i}.iim`;
                    a.style.display = "none";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            }
        });
